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
import SemanticFormTextArea from 'components/SemanticFormTextArea';
import SemanticFormDropdown from 'components/SemanticFormDropdown';
import { Form, Message, Button } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';

const options = [
  { key: 'fantasy', text: 'Fantasy', value: 'fantasy' },
  { key: 'science fiction', text: 'Science Fiction', value: 'science_fiction' },
  { key: 'historical fiction', text: 'Historical Fiction', value: 'historical_fiction' },
];

function CreateNarrativesForm(props) {
  const {
    handleSubmit,
    loading,
    pristine,
    error,
    submitSucceeded,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={() => console.log(handleSubmit)}
      error={error !== false}
    >
      <SemanticField
        name="title"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Enter Title"
        type="text"
        validate={[required]}
      />
      <SemanticField
        name="synopsis"
        component={SemanticFormTextArea}
        as={Form.TextArea}
        placeholder="Enter Synopsis"
        validate={[required]}
      />
      <SemanticField
        name="genre"
        options={options}
        component={SemanticFormDropdown}
        as={Form.Dropdown}
        placeholder="Select Genre"
        validate={[required]}
      />

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
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  handleSubmit: PropTypes.func,
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
