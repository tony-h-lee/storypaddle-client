/**
*
* CreateNarrativesRoles
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Card, Form, Button, Message, Icon } from 'semantic-ui-react';
import { MEMBER_MAX_CHARACTERS, BASIC_MAX_CHARACTERS } from 'containers/CreateNarrativesPage/constants';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';

const getMaxRoles = (accountType) => accountType === MEMBER_MAX_CHARACTERS ? MEMBER_MAX_CHARACTERS :
  BASIC_MAX_CHARACTERS;


function CreateNarrativesRoles(props) {
  const {
    fields,
    accountType,
  } = props;
  return (
    <div style={{ marginBottom: '4rem' }}>
      {
        fields.map((role, index) => (
          <Card fluid key={role}>
            <Card.Content>
              <Card.Description style={{ marginBottom: '0.7rem' }}>
                Character {index + 1}
              </Card.Description>
              <SemanticField
                name={`${role}.name`}
                component={SemanticFormField}
                as={Form.Input}
                fluid
                placeholder="Enter Character Name"
                type="text"
                validate={required}
              />
              <SemanticField
                name={`${role}.synopsis`}
                component={SemanticFormField}
                as={Form.TextArea}
                autoHeight
                rows="7"
                placeholder="Enter Character Synopsis"
                type="text"
                validate={required}
              />
              <Button
                color="red"
                icon="trash"
                floated="right"
                content="Remove Role"
                size="tiny"
                onClick={() => fields.remove(index)}
              />
            </Card.Content>
          </Card>
        ))
      }
      {
        fields.length < getMaxRoles(accountType) ?
          (
            <Button
              primary
              icon="plus"
              content="New Role"
              fluid
              type="button"
              onClick={() => fields.push(new Map())}
            />
          ) : null
      }
      {props.meta.submitFailed && props.meta.error &&
      <Message
        size="tiny"
        error
      >
        <Icon name="exclamation circle" />
        {props.meta.error}
      </Message>}
    </div>
  );
}

CreateNarrativesRoles.propTypes = {
  fields: PropTypes.object,
  accountType: PropTypes.string,
  meta: PropTypes.object,
};

export default CreateNarrativesRoles;
