/**
 *
 * SearchSuggestions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchSuggestions from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SearchSuggestions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

SearchSuggestions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchsuggestions: makeSelectSearchSuggestions(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchSuggestions', reducer });
const withSaga = injectSaga({ key: 'searchSuggestions', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchSuggestions);
