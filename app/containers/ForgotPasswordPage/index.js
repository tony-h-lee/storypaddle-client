/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ForgotPasswordPageComponent from 'components/ForgotPasswordPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForgotPasswordPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ForgotPasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NobleLoot |  Reset Password </title>
          <meta name="description" content="Forgot your NobleLoot account password?" />
        </Helmet>
        <ForgotPasswordPageComponent {...this.props} />
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  forgotPasswordPage: makeSelectForgotPasswordPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgotPasswordPage', reducer });
const withSaga = injectSaga({ key: 'forgotPasswordPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPasswordPage);
