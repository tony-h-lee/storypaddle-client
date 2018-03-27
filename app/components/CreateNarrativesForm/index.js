/**
*
* CreateNarrativesForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm, FieldArray } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon } from 'semantic-ui-react';
import { required, validateRoles } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';
import { createNarrative } from 'containers/CreateNarrativesPage/actions';
import CreateNarrativesRoles from './CreateNarrativesRoles';

const options = [
  { key: 'fantasy', text: 'Fantasy', value: 'fantasy' },
  { key: 'science fiction', text: 'Science Fiction', value: 'science_fiction' },
  { key: 'historical fiction', text: 'Historical Fiction', value: 'historical_fiction' },
];

function CreateNarrativesForm(props) {
  const {
    loading,
    pristine,
    error,
    handleSubmit,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit((values, dispatch) =>
        createNarrative({ form: values, token: props.token }, dispatch))}
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
          value={false}
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

      <FieldArray
        validate={validateRoles}
        name="roles"
        component={CreateNarrativesRoles}
        accountType={props.user.accountType}
      />

      {error && (
        <Message
          size="tiny"
          error
        >
          <Icon name="exclamation circle" />
          {error}
        </Message>)
      }

      <Message
        info
        size="mini"
      >
        <Icon name="exclamation" />
        Please make sure you fill all required fields.
      </Message>

      <Button
        color="orange"
        fluid
        size="large"
        type="submit"
        loading={loading}
        disabled={pristine || loading}
      >
        Create
      </Button>
    </Form>
  );
}

CreateNarrativesForm.propTypes = {
  token: PropTypes.string,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  handleSubmit: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  pristine: PropTypes.bool,
  loading: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'createNarrativesForm',
    enableReinitialize: true,
  })
)(CreateNarrativesForm);
