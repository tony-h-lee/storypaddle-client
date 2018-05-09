/**
 *
 * SettingsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import SettingsPageComponent from 'components/SettingsPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSettingsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Settings | Storypaddle </title>
          <meta name="description" content="Overview of your Storypaddle account details" />
        </Helmet>
        <SettingsPageComponent {...this.props} />
      </div>
    );
  }
}

SettingsPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  settingsPage: makeSelectSettingsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'settingsPage', reducer });
const withSaga = injectSaga({ key: 'settingsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingsPage);
