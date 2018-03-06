/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DashboardPageComponent from 'components/DashboardPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { unsetAuth } from 'containers/AuthContainer/actions';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class DashboardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of DashboardPage" />
        </Helmet>
        <DashboardPageComponent logout={this.props.logout} />
      </div>
    );
  }
}

DashboardPage.propTypes = {
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dashboardpage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(unsetAuth()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboardPage', reducer });
const withSaga = injectSaga({ key: 'dashboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
