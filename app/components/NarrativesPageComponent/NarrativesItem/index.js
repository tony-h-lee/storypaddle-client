/* eslint no-underscore-dangle: 0 */
/**
*
* NarrativesItem
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import { Card } from 'semantic-ui-react';
import Thumb from 'images/narrativeThumb.png';
import styled from 'styled-components';

const Details = styled(Card.Description)`
  &&& {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-font-smoothing: antialiased;
    font-size: 1.05rem;
  }
`;

function NarrativesItem(props) {
  return (
    <Card
      as={Link}
      to={`/narrative/${props.item._id}`}
      style={{ width: '200px', height: '200px', margin: '1rem', background: `url(${Thumb})` }}
    >
      <Card.Content style={{ background: 'rgba(0,0,0,0.75)' }}>
        <Details style={{ color: 'rgb(255,255,255)' }}> { props.item.title } </Details>
        <Details style={{ color: 'rgb(255,255,255)' }}> { props.item.genre } </Details>
        { props.item.explicit ?
          <Details style={{ color: 'rgb(255,71,83)', fontSize: '0.95rem', zIndex: 1 }}> Explicit </Details> : null }
        <Details style={{ color: 'rgb(255,255,255)', fontSize: '0.95rem' }}>
          { distanceInWordsToNow(props.item.createdAt)} ago </Details>
      </Card.Content>
    </Card>
  );
}

NarrativesItem.propTypes = {
  item: PropTypes.object,
};

export default NarrativesItem;
