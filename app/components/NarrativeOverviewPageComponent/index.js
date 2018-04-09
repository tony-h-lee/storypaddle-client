/**
*
* NarrativeOverviewPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import NarrativeOverviewRoles from './NarrativeOverviewRoles';

const Meta = styled.p`
  font-size: 1rem;
  margin: 0 0 0.3rem 0;
`;

const Warning = styled(Meta)`
  color: #912d2b;
`;

const alreadyIn = (roles, userId) => roles.some((role) => {
  if (role.user) return role.user === userId;
  return false;
});

function NarrativeOverviewPageComponent(props) {
  const narrative = props.narrativeOverviewPage.get('narrative');
  if (narrative) {
    return (
      <Container text style={{ marginTop: '3rem' }}>
        <h1> { narrative.title } </h1>
        <Meta> { narrative.genre } </Meta>
        { narrative.explicit ? <Warning> Explicit </Warning> : null }
        <div style={{ margin: '1.5rem 0 3rem 0', whiteSpace: 'pre-line' }}>
          <p> { narrative.synopsis } </p>
        </div>
        <Divider />
        {
          alreadyIn(narrative.roles, props.user.id) ?
            <NarrativeOverviewRoles
              static
              roles={narrative.roles}
            /> :
            <NarrativeOverviewRoles
              static={false}
              error={props.narrativeOverviewPage.get('error')}
              roles={narrative.roles}
              id={narrative.id}
              token={props.token}
              user={props.user ? props.user.id : null}
              join={props.actions.joinNarrative}
            />
        }

      </Container>
    );
  }
  return (<div />);
}

NarrativeOverviewPageComponent.propTypes = {
  narrativeOverviewPage: PropTypes.object,
  actions: PropTypes.object,
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default NarrativeOverviewPageComponent;
