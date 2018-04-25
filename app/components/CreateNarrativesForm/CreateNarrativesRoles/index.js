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

const options = [
  { key: 'female', text: 'Female', value: 'Female' },
  { key: 'male', text: 'Male', value: 'Male' },
  { key: 'nonbinary', text: 'Non-binary', value: 'Non-binary' },
];

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
              <Card.Header style={{ marginBottom: '0.7rem' }}>
                Character {index + 1}
              </Card.Header>
              <SemanticField
                name={`${role}.name`}
                label="Character Name"
                component={SemanticFormField}
                as={Form.Input}
                fluid
                placeholder="Enter Character Name"
                type="text"
                validate={required}
              />
              <SemanticField
                name={`${role}.gender`}
                label={'Character Gender'}
                options={options}
                component={SemanticFormField}
                fluid
                selection
                as={Form.Dropdown}
                placeholder="Select Gender"
                validate={required}
              />
              <SemanticField
                name={`${role}.synopsis`}
                label="Character Synopsis"
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
