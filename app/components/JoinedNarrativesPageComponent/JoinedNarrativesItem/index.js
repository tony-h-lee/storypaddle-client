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
  return (
    <Segment padded attached>
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
          onClick={() => props.moreProps
            .openConfirm('hi', 'he', 'eh', 'eh', () => console.log('confirm'), null)}
        >
          Leave Role
        </Button>
      </Button.Group>

    </Segment>
  );
}

JoinedNarrativesItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default JoinedNarrativesItem;
