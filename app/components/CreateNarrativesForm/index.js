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
import { Form, Message, Button } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';
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
    submitSucceeded,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={(e, values) => console.log(values)}
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
      <SemanticField
        name="explicit"
        component={SemanticFormField}
        as={Form.Checkbox}
        label="Contains Explicit Material"
      />
      <CreateNarrativesRoles roles={props.roles} />

      {error && (
        <Message
          size="tiny"
          error
          content={error}
        />)
      }

      {submitSucceeded && (
        <Message
          size="tiny"
          positive
          content="Email sent! Please check your email"
        />)
      }

      <Button
        color="orange"
        fluid
        size="large"
        loading={loading}
        disabled={pristine || loading || submitSucceeded}
      >
        Create
      </Button>
    </Form>
  );
}

CreateNarrativesForm.propTypes = {
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
