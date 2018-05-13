/**
*
* SuggestionsItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled(Link)`
  margin: 0;
  font-size: 1rem;
  color: #000;
  :hover {
    color: #000;
  }
`;

const Meta = styled.p`
  font-size: 0.85rem;
  color: #777;
  margin: 0;
`;

const Warning = styled(Meta)`
  color: #912d2b;
`;

function SuggestionsItem(props) {
  return (
    <Title to={`/narrative/${props.id}`}>
      {props.title}
      <Meta>
        {props.genre}
      </Meta>
      { props.explicit ? <Warning> Explicit </Warning> : null }
    </Title>
  );
}

SuggestionsItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  genre: PropTypes.string,
  explicit: PropTypes.bool,
};

export default SuggestionsItem;
