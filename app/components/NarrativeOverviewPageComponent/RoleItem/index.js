/**
*
* RoleItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
// import styled from 'styled-components';

function RoleItem(props) {
  const { item, moreProps } = props;
  return (
    <Segment padded>
      <Header> { item.name } </Header>
      <p style={{ whiteSpace: 'pre-wrap' }}> { item.synopsis } </p>
      {
        !item.user ?
          <Button
            primary
            compact
            onClick={() => moreProps.join(moreProps.id, item.name, moreProps.token)}
          >
            Join as
          </Button>
          :
          <Button
            disabled
            compact
          >
            Unavailable
          </Button>
      }
    </Segment>
  );
}

RoleItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default RoleItem;
