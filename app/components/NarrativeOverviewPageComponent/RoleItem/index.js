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
        <Header> { item.get('name') }
          <Header.Subheader> { item.get('gender') } </Header.Subheader>
        </Header>
        <p style={{ whiteSpace: 'pre-line' }}> { item.get('synopsis') } </p>
      </Segment>
    )
      :
    (
      <Segment padded clearing attached>
        <Header> { item.get('name') }
          <Header.Subheader> { item.get('gender') } </Header.Subheader>
          {
            item.get('user') ?
              <Header.Subheader style={{ color: '#912d2b' }}> Unavailable </Header.Subheader>
              :
              <Header.Subheader style={{ color: '#4a8e53' }}> Available </Header.Subheader>
          }
        </Header>
        <p style={{ whiteSpace: 'pre-line' }}> { item.get('synopsis') } </p>
        {
          !item.get('user') ?
            <Button
              primary
              compact
              onClick={() => moreProps
                .join(moreProps.id, item.get('id'), moreProps.token, moreProps.user, moreProps.sceneId)}
            >
              Join as {item.get('name')}
            </Button>
            :
            null
        }
        {
          moreProps.error && moreProps.error.roleId === item.get('id') ?
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
