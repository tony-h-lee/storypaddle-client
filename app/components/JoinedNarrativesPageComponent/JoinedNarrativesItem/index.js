/**
*
* JoinedNarrativesItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Meta, Warning } from 'components/NarrativeHeaderComponents';
// import styled from 'styled-components';

function JoinedNarrativesItem(props) {
  const getRoleName = () => props.item.roles.find((role) => role.user && role.user === props.moreProps.userId).name;

  const confirm = {
    header: 'Leave Role?',
    content: (
      <div className="content"> <p> Are you certain you wish to leave <b>{props.item.title}</b>?
        Your current role will be open for someone else to take and you will not
        be able to reclaim the role until it is vacant again. </p>
      </div>
    ),
    confirmButton: (
      <Button negative>
        Leave Role
      </Button>
    ),
    cancelButton: null,
    size: 'large',
  };

  return props.item.roles.length > 0 ? (
    <Segment padded attached>
      <h1> {getRoleName(props)} </h1>
      <Header
        as={Link}
        to={`/narrative/${props.item.id}`}
        size="small"
      >
        { props.item.title}
      </Header>
      <Meta style={{ margin: '0' }}> { props.item.genre } </Meta>
      {
        props.item.explicit ?
          <Warning> Explicit </Warning>
          : null
      }

      <Button.Group style={{ marginTop: '1rem' }} size="small" compact>
        <Button as={Link} to={`/scene/${props.item.id}`} basic color="grey">
          Read
        </Button>
        <Button
          basic
          color="red"
          onClick={() => props.moreProps.actions
            .openConfirm(confirm.header,
              confirm.content,
              confirm.confirmButton,
              confirm.cancelButton,
              confirm.size,
              () => props.moreProps.actions.leave(props.moreProps.token, props.item.id),
              null)
          }
        >
          Leave Role
        </Button>
      </Button.Group>

    </Segment>
  ) : (<p> You have not joined any Narratives! </p>);
}

JoinedNarrativesItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default JoinedNarrativesItem;
