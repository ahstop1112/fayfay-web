import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Constants from 'fayfayConstants';
import { FormattedMessage } from 'react-intl';

export default class Pagination extends Component {
    static propTypes = {
        pageIndex: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        totalPage: PropTypes.number.isRequired,
        changePageIndex: PropTypes.func.isRequired,
        changePageSize: PropTypes.func
    };

    renderPaginationWithDots = () => {
        const { totalPage, pageIndex } = this.props;

        //Simple pagination algorithm
        // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        if (totalPage > 1) {
            range.push(1);

            for (let i = pageIndex - delta; i <= pageIndex + delta; i++) {
                if (i < totalPage && i > 1) {
                    range.push(i);
                }
            }
            range.push(totalPage);

            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push('...');
                    }
                }
                rangeWithDots.push(i);
                l = i;
            }
        } else {
            rangeWithDots.push(1);
        }

        return rangeWithDots.map((pageIndex, index) => {
            if (pageIndex === '...')
                return (
                    <li className="page-item dot" key={`${pageIndex}-${index}`}>
                        <span>{pageIndex}</span>
                    </li>
                );
            return (
                <li key={pageIndex} className={classNames('page-item', { active: pageIndex === this.props.pageIndex })}>
                    <a className="page-link" onClick={this.pageIndexOnClick} data-index={pageIndex}>
                        {pageIndex}
                    </a>
                </li>
            );
        });
    };

    pageIndexOnClick = e => {
        const pageIndex = e.target.getAttribute('data-index');
        if (Number(pageIndex) !== this.props.pageIndex) {
            this.props.changePageIndex(pageIndex);
        }
    };

    render() {
        const { pageSize, totalPage, changePageSize } = this.props;
        return (
            <React.Fragment>
                {totalPage > 0 && (
                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            <ul className="pagination pagination-sm">{this.renderPaginationWithDots()}</ul>
                        </div>
                        {
                            changePageSize && (
                                <div className="col-sm-6 col-md-4 content-right">
                                    <select
                                        name="status"
                                        className="pagination form-control input-medium"
                                        value={pageSize}
                                        onChange={changePageSize}
                                    >
                                        {Constants.PAGE_SIZES.map(size => {
                                            return (
                                                <option key={size} value={size}>
                                                    <FormattedMessage id="common.itemsPerPage" values={{ size }} />
                                                </option>
                                            );
                                        })};
                                    </select>
                                </div>
                            )
                        }
                    </div>
                )}
            </React.Fragment>
        );
    }
}
