/**
 *
 * ResetPasswordPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ResetPasswordPageComponent from 'components/ResetPasswordPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectResetPasswordPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ResetPasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NobleLoot | Reset Password</title>
          <meta name="description" content="Reset your NobleLoot account password" />
        </Helmet>
        <ResetPasswordPageComponent {...this.props} />
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  resetPasswordPage: makeSelectResetPasswordPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'resetPasswordPage', reducer });
const withSaga = injectSaga({ key: 'resetPasswordPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ResetPasswordPage);
