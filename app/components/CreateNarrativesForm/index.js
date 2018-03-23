/**
*
* CreateNarrativesForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
import { MIN_CHARACTERS, MEMBER_MAX_CHARACTERS, BASIC_MAX_CHARACTERS } from 'containers/CreateNarrativesPage/constants';
// import styled from 'styled-components';
import { createNarrative } from 'containers/CreateNarrativesPage/actions';
import CreateNarrativesRoles from './CreateNarrativesRoles';

const options = [
  { key: 'fantasy', text: 'Fantasy', value: 'fantasy' },
  { key: 'science fiction', text: 'Science Fiction', value: 'science_fiction' },
  { key: 'historical fiction', text: 'Historical Fiction', value: 'historical_fiction' },
];

const getMaxRoles = (accountType) => accountType === MEMBER_MAX_CHARACTERS ? MEMBER_MAX_CHARACTERS :
  BASIC_MAX_CHARACTERS;

function CreateNarrativesForm(props) {
  const {
    actions,
    loading,
    pristine,
    error,
    submitSucceeded,
    handleSubmit,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit(createNarrative)}
      error={error !== false}
    >

      <SemanticField
        name="title"
        component={SemanticFormField}
        as={Form.Input}
        fluid
        placeholder="Enter Narrative Title"
        type="text"
        validate={required}
      />
      <SemanticField
        name="synopsis"
        component={SemanticFormField}
        as={Form.TextArea}
        autoHeight
        rows="10"
        placeholder="Enter Narrative Synopsis"
        validate={required}
      />
      <SemanticField
        name="genre"
        options={options}
        component={SemanticFormField}
        fluid
        selection
        as={Form.Dropdown}
        placeholder="Select Genre"
        validate={required}
      />


      <Message color="yellow" size="tiny">
        <Message.Header> Explicit Content Warning </Message.Header>
        <p> If your Narrative will contain explicit text content, you must check the box right below. </p>
        <SemanticField
          name="explicit"
          component={SemanticFormField}
          as={Form.Checkbox}
          label="Confirm explicit content"
        />
      </Message>

      <Message info size="small">
        <Message.Header> Add / Remove Characters </Message.Header>
        <Message.List
          items={[
            'You must create at least two characters.',
            'Character 1 will be your role.',
            'Other roles can be filled by any users.',
            'Basic accounts can make up to 4 roles.',
            'Member accounts can make up to 8 roles.',
          ]}
        />
      </Message>

      <CreateNarrativesRoles roles={props.roles} />

      <Button.Group floated="right" style={{ marginBottom: '2rem' }}>
        {
          props.roles.size > MIN_CHARACTERS ?
            (
              <Button
                onClick={() => {
                  props.change(`role_${props.roles.size - 1}`, '');
                  props.change(`role_description_${props.roles.size - 1}`, '');
                  props.untouch('createNarrativesForm',
                    `role_${props.roles.size - 1}`, `role_description_${props.roles.size - 1}`);
                  actions.removeCharacter();
                }}
                type="button"
                icon="minus"
                color="red"
              />
            ) : null
        }
        {
          props.roles.size < getMaxRoles(props.user.accountType) ?
            (
              <Button
                onClick={actions.addCharacter}
                type="button"
                icon="plus"
                color="blue"
              />
            ) : null
        }
      </Button.Group>

      {error && (
        <Message
          size="tiny"
          error
        >
          <Icon name="exclamation circle" />
          {error}
        </Message>)
      }

      <Button
        color="orange"
        fluid
        size="large"
        type="submit"
        loading={loading}
        disabled={pristine || loading || submitSucceeded}
      >
        Create
      </Button>
    </Form>
  );
}

CreateNarrativesForm.propTypes = {
  user: PropTypes.object,
  untouch: PropTypes.func,
  change: PropTypes.func,
  handleSubmit: PropTypes.func,
  actions: PropTypes.object,
  roles: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  pristine: PropTypes.bool,
  loading: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'createNarrativesForm',
    enableReinitialize: true,
  })
)(CreateNarrativesForm);
