/* eslint no-underscore-dangle: 0 */
/**
*
* RoleItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Error = styled.p`
  font-size: '0.9rem';
  color: #912d2b;
  margin-top: 0.5rem;
`;

function RoleItem(props) {
  const { item, moreProps } = props;
  return (moreProps.static ?
    (
      <Segment padded attached>
        <Header> { item.name } </Header>
        <p style={{ whiteSpace: 'pre-line' }}> { item.synopsis } </p>
      </Segment>
    )
      :
    (
      <Segment padded clearing attached>
        <Header> { item.name } </Header>
        <p style={{ whiteSpace: 'pre-line' }}> { item.synopsis } </p>
        {
          !item.user ?
            <Button
              primary
              compact
              floated="right"
              onClick={() => moreProps.join(moreProps.id, item._id, moreProps.token, moreProps.user)}
            >
              Join as {item.name}
            </Button>
            :
            null
        }
        {
          moreProps.error && moreProps.error.roleId === item._id ?
            <Error> You already have a role in this Narrative! </Error>
            : null
        }
      </Segment>
    )
  );
}

RoleItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default RoleItem;
