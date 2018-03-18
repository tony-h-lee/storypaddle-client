/**
*
* DashboardSectionButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Card)`
  &&& {
    height: 230px;
    width: 230px;
    margin: 0 auto;
    
  }
`;

const CardButton = styled(Card.Content)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function DashboardSectionButton(props) {
  const { item } = props;
  return (
    <Grid.Column
      textAlign="center"
    >
      {
        item.link.length > 0 ?
          (
            <Wrapper
              as={Link}
              to={item.link}
              color="blue"
              raised
            >
              <CardButton>
                <Card.Header> { item.title } </Card.Header>
                <Card.Meta> { item.meta } </Card.Meta>
                <Icon name={item.icon} size="huge" style={{ marginTop: '0.6rem' }} color="black" />
              </CardButton>
            </Wrapper>
          ) :
          (
            <Wrapper
              as="a"
              raised
              color="red"
              onClick={props.moreProps.logout}
            >
              <CardButton>
                <Card.Header> { item.title } </Card.Header>
                <Card.Meta> { item.meta } </Card.Meta>
                <Icon name={item.icon} size="huge" style={{ marginTop: '0.6rem' }} color="black" />
              </CardButton>
            </Wrapper>
          )
      }

    </Grid.Column>
  );
}

DashboardSectionButton.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default DashboardSectionButton;
