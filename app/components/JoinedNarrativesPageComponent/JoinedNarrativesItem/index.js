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
  const myRole = props.item.get('roles').find((role) => role.get('user') === props.moreProps.userId);

  const confirm = {
    header: 'Leave Role?',
    content: (
      <div className="content"> <p> Are you certain you wish to leave <b>{props.item.get('title')}</b>?
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

  return props.item.get('roles').size > 0 && myRole ? (
    <Segment padded attached>
      <h1> {myRole.get('name')} </h1>
      <Header
        as={Link}
        to={`/narrative/${props.item.get('id')}`}
        size="small"
      >
        { props.item.get('title')}
      </Header>
      <Meta style={{ margin: '0' }}> { props.item.get('genre') } </Meta>
      {
        props.item.get('explicit') ?
          <Warning> Explicit </Warning>
          : null
      }

      <Button.Group style={{ marginTop: '1rem' }} basic size="medium">
        <Button as={Link} to={`/scene/${props.item.get('id')}`} icon="file text" content="Read" />
        <Button
          icon="user close"
          content="Leave Role"
          onClick={() => props.moreProps.actions
            .openConfirm(
              confirm.header,
              confirm.content,
              confirm.confirmButton,
              confirm.cancelButton,
              confirm.size,
              () => props.moreProps.actions.leave(props.moreProps.token, props.item.get('id'), myRole.get('id'),
                props.moreProps.userId),
              null
            )
          }
        />
      </Button.Group>

    </Segment>
  ) : (<p> You have not joined any Narratives! </p>);
}

JoinedNarrativesItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default JoinedNarrativesItem;
