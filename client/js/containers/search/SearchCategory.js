import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SearchCategory extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        deviceType: PropTypes.string.isRequired,
        selectedCategories: PropTypes.array.isRequired,
        categoryCheckChange: PropTypes.func.isRequired,
        subCategoryCheckChange: PropTypes.func.isRequired,
        activityCategories: PropTypes.array.isRequired
    };

    state = {
        open: false
    };

    showSubCategories = () => {
        this.setState({
            open: !this.state.open
        })
    };

    renderIcons = (param) => {
        switch(param) {
            case 1:
                return <i className="icon flag" />;
            case 14:
                return <i className="icon ticket" />;
            case 18:
                return <i className="icon wifi bold-800" />;
            case 21:
                return <i className="icon car bold-500" />;
            case 27:
                return <i className="icon smile" />;
            case 36:
                return <i className="icon suitcase" />;
        }
    };

    render() {
        const { item, deviceType, selectedCategories, categoryCheckChange, subCategoryCheckChange, activityCategories } = this.props;

        let checkAll = true;
        let totalCount = 0;

        const all = [];
        item.items &&
        item.items.forEach(cat => {
            const match = activityCategories.find(a => a.id === cat.id);

            if (match) {
                all.push(cat);
                totalCount += match.count;
            }
        });

        all.forEach(cat => {
            const index = selectedCategories.findIndex(s => Number(s) === cat.id);
            if (index === -1) {
                checkAll = false;
            }
        });

        return (<React.Fragment>
                {totalCount ? <div className="col-md-12 col-sm-6 col-xs-12">
                    <div className="input-inline">
                        <label className="radio-search-label">
                            <input type="checkbox"
                                   readOnly={true}
                                   onClick={categoryCheckChange}
                                   cat-id={item.id}
                                   checked={checkAll}
                                   disabled={!totalCount}
                            />
                            {this.renderIcons(item.id)}
                            {`${item.value} `}
                            <span className="checkmark"></span>
                        </label>
                        {deviceType === 'mobile' ? <i className={classNames("fas", {
                                    'fa-angle-up': this.state.open,
                                    'fa-angle-down': !this.state.open
                                })} onClick={this.showSubCategories}></i> : ''}
                    </div>
                    {deviceType === 'desktop' && <div className="row">
                        {
                            all.map(subItem => {
                                const index =
                                    selectedCategories.findIndex(item => Number(item) === subItem.id);
                                const match = activityCategories.find(item => item.id === subItem.id);
                                const count = match ? match.count : 0;

                                return (<React.Fragment key={subItem.id}>
                                        {count ? <div className="input-inline">
                                                <label className="radio-search-label">
                                                    <input type="checkbox"
                                                           onClick={subCategoryCheckChange}
                                                           readOnly={true}
                                                           subcat-id={subItem.id}
                                                           cat-id={item.id}
                                                           checked={index >= 0}
                                                           disabled={!count} />
                                                    <span className="checkmark" />
                                                    {`${subItem.value} `}
                                                </label>
                                        </div> : ''}</React.Fragment>
                                );
                            })}
                    </div>}
                    {this.state.open && deviceType === 'mobile' && <div className="row">
                        {
                            all.map(subItem => {
                                const index =
                                    selectedCategories.findIndex(item => Number(item) === subItem.id);
                                const match = activityCategories.find(item => item.id === subItem.id);
                                const count = match ? match.count : 0;

                                return (<React.Fragment key={subItem.id}>
                                        {count ? <div className="col-xs-offset-1 col-xs-11 col-sm-offset-1 col-sm-11">
                                            <div className="input-inline">
                                                <label className="radio-search-label">
                                                    <input type="checkbox"
                                                           onClick={subCategoryCheckChange}
                                                           readOnly={true}
                                                           subcat-id={subItem.id}
                                                           cat-id={item.id}
                                                           checked={index >= 0}
                                                           disabled={!count} />
                                                    <span className="checkmark" />
                                                    {`${subItem.value} `}
                                                </label>

                                            </div>
                                        </div> : ''}</React.Fragment>
                                );
                            })}
                    </div>}
                </div> : ''}
                </React.Fragment>
        );
    }
}
