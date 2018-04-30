/**
*
* MyNarrativesItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Meta, Warning } from 'components/NarrativeHeaderComponents';
// import styled from 'styled-components';

function MyNarrativesItem(props) {
  const confirm = {
    header: 'Delete Narrative?',
    content: (
      <div className="content"> <p> Are you certain you wish to delete <b>{props.item.get('title')}</b>?
        Other participants will no longer be able to access this narrative.
        Once deleted, you cannot reverse this action. </p>
      </div>
    ),
    confirmButton: (
      <Button negative>
        Delete
      </Button>
    ),
    cancelButton: null,
    size: 'large',
  };

  return props.item.get('roles').size > 0 ? (
    <Segment padded attached>
      <Header
        as={Link}
        to={`/narrative/${props.item.get('id')}`}
        size="small"
      >
        { props.item.get('title')}
      </Header>
      <Meta style={{ margin: '0' }}> Published on {format(props.item.get('createdAt'), 'MMMM D, YYYY')} </Meta>
      <Meta style={{ margin: '0' }}> { props.item.get('genre') } </Meta>
      {
        props.item.get('explicit') ?
          <Warning> Explicit </Warning>
          : null
      }

      <Button.Group style={{ marginTop: '1rem' }} basic size="medium">
        <Button
          as={Link}
          to={`/scene/${props.item.get('scene')}`}
          icon="file text"
          content="Read"
        />
        <Button as={Link} to={`/edit-narrative/${props.item.get('id')}`} icon="edit" content="Edit" />
        <Button
          icon="trash"
          content="Delete"
          onClick={() => props.moreProps.actions
            .openConfirm(
              confirm.header,
              confirm.content,
              confirm.confirmButton,
              confirm.cancelButton,
              confirm.size,
              () => props.moreProps.actions.deleteNarrative(props.moreProps.token, props.item.get('id'),
                props.moreProps.userId),
              null
            )
          }
        />
      </Button.Group>

    </Segment>
  ) : (<p> You have not joined any Narratives! </p>);
}

MyNarrativesItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default MyNarrativesItem;
