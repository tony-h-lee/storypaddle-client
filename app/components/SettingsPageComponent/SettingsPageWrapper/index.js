/**
*
* SettingsPageWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import { format } from 'date-fns';
import ChangePasswordForm from 'components/ChangePasswordForm';
// import styled from 'styled-components';

function SettingsPageWrapper(props) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Segment.Group>
        <Segment>
          <Header>
            Account Details
          </Header>
          <Header as="h5">
            Email
            <Header.Subheader>
              { props.data.get('email') }
            </Header.Subheader>
          </Header>
          <Header as="h5">
            Account Membership
            <Header.Subheader>
              { props.data.get('accountType') }
            </Header.Subheader>
          </Header>
          <Header as="h5">
            Joined on
            <Header.Subheader>
              { format(props.data.get('createdAt'), 'MMMM D, YYYY') }
            </Header.Subheader>
          </Header>
        </Segment>

        <Segment>
          <Header>
            Change Password
          </Header>
          <ChangePasswordForm
            userId={props.data.get('id')}
            email={props.data.get('email')}
          />
        </Segment>
      </Segment.Group>
    </div>
  );
}

SettingsPageWrapper.propTypes = {
  data: PropTypes.object,
};

export default SettingsPageWrapper;
