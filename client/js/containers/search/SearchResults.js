import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Constants from 'fayfayConstants';
import ActivityPreview from '../../components/activity/ActivityPreview';
import LoadingContainer from '../../components/loading/LoadingContainer';

export class SearchResults extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        results: PropTypes.array.isRequired,
        totalCount: PropTypes.number.isRequired,
        keyword: PropTypes.string,
        category: PropTypes.string,
        cityName: PropTypes.string,
        searchComplete: PropTypes.bool.isRequired
    };

    static defaultProps = {
        keyword: '',
        category: '',
        cityName: ''
    };

    render() {
        const {
            ajaxStatus,
            results,
            totalCount,
            keyword,
            category,
            cityName,
            searchComplete
        } = this.props;

        return (
            <div>
                {searchComplete && <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4>
                            {totalCount > 0 && <React.Fragment>
                                {category && (
                                    <FormattedMessage
                                        id="search.title"
                                        values={{
                                            count: <label className="count-label">{totalCount}</label>,
                                            keyword: category.replace(/"/g, '')
                                        }}
                                    />
                                )}
                                {keyword && (
                                    <FormattedMessage
                                        id="search.title"
                                        values={{
                                            count: <label className="count-label">{totalCount}</label>,
                                            keyword: keyword.replace(/"/g, '')
                                        }}
                                    />
                                )}
                                {cityName && (
                                    <FormattedMessage
                                        id="package.things.to.do.in"
                                        values={{
                                            count: <label className="count-label">{totalCount}</label>,
                                            city: cityName
                                        }}
                                    />
                                )}
                            </React.Fragment>}
                            {!totalCount && !ajaxStatus.isLoading && <FormattedMessage id="search.noResultsFound"/>}
                        </h4>
                    </div>
                </div>}
                <div className="row marginTop-15px">
                    <div className="col-md-12">
                        <ul className="loaded-list">
                            {results.map((item, i) => {
                                return (
                                    <ActivityPreview
                                        packageAvailabilityDate={item.packageAvailabilityDate}
                                        index={i}
                                        key={item.id}
                                        id={item.id}
                                        slug={item.slug}
                                        title={item.title}
                                        thumbnail={`${
                                            Constants.CLOUDINARY_IMAGE_URL
                                            }/w_640/${item.thumbnailKey}.${item.thumbnailFormat}`}
                                        displayPrice={item.displayPrice}
                                        displaySpecialPrice={item.displaySpecialPrice}
                                        location={item.location}
                                        ratingAverage={item.ratingAverage}
                                        bookedCount={item.bookedCount}
                                        priceRange={item.priceRange}
                                        popular={item.popular}
                                        paymentFlow={item.paymentFlow}
                                    />
                                );
                            })}
                        </ul>
                        <LoadingContainer loading={ajaxStatus.isLoading}>&nbsp;</LoadingContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(SearchResults);
