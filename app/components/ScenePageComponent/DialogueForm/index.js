/**
 *
 * DialogueForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';


function DialogueForm(props) {
  const {
    submitting,
    pristine,
    error,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginTop: '0.2rem' }}
      onSubmit={(e, form) => console.log(form)}
      error={error !== false}
    >

      <SemanticField
        name="adjective"
        label="Adjective (optional)"
        component={SemanticFormField}
        as={Form.Input}
        fluid
        placeholder="Ex. whispering"
        type="text"
      />

      <SemanticField
        name="narration"
        label="Text"
        component={SemanticFormField}
        as={Form.TextArea}
        displayError={false}
        autoHeight
        rows="4"
        placeholder="Ex. That'll cost ya' five dollars!"
        validate={required}
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

      <Button
        color="orange"
        size="large"
        type="submit"
        loading={submitting}
        disabled={pristine || submitting}
      >
        Submit
      </Button>
    </Form>
  );
}

DialogueForm.propTypes = {
  /*
  token: PropTypes.string,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  handleSubmit: PropTypes.func,
  */
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'dialogueForm',
    enableReinitialize: true,
  })
)(DialogueForm);
