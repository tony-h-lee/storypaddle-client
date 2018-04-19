/**
*
* NarrativeOverviewPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Divider, Button } from 'semantic-ui-react';
import { Meta, Warning } from 'components/NarrativeHeaderComponents';
import NarrativeOverviewRoles from './NarrativeOverviewRoles';

function NarrativeOverviewPageComponent(props) {
  const narrative = props.narrativeOverviewPage.get('narrative');
  if (narrative) {
    const alreadyIn = narrative.get('roles')
      .some((role) => role.get('user') === props.user.get('id'));
    return (
      <Container text style={{ marginTop: '3rem' }}>
        <h1> { narrative.get('title') } </h1>
        <Meta> { narrative.get('genre') } </Meta>
        { narrative.get('explicit') ? <Warning> Explicit </Warning> : null }
        <div style={{ margin: '1.5rem 0 1.5rem 0', whiteSpace: 'pre-line' }}>
          <p> { narrative.get('synopsis') } </p>
        </div>
        <Button
          as={Link}
          to={`/scene/${narrative.get('id')}`}
          icon="file text"
          primary
          content="Read"
        />
        <Divider />
        {
          alreadyIn ?
            <NarrativeOverviewRoles
              static
              roles={narrative.get('roles')}
            /> :
            <NarrativeOverviewRoles
              error={props.narrativeOverviewPage.get('error')}
              roles={narrative.get('roles')}
              id={narrative.get('id')}
              token={props.token}
              user={props.user ? props.user.get('id') : null}
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
