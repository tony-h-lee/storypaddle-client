/**
 *
 * NarrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
import { postNarrationComment } from 'containers/ScenePage/actions';
// import styled from 'styled-components';


function NarrationForm(props) {
  const {
    submitting,
    pristine,
    error,
    handleSubmit,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginTop: '0.3rem' }}
      onSubmit={handleSubmit((values, dispatch) =>
        postNarrationComment({ form: values, token: props.token, sceneId: props.sceneId },
          dispatch))}
      error={error !== false}
    >

      <SemanticField
        name="text"
        label="Text"
        component={SemanticFormField}
        as={Form.TextArea}
        displayError={false}
        autoHeight
        rows="5"
        placeholder="Enter narration text."
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

NarrationForm.propTypes = {
  sceneId: PropTypes.string,
    /*
   user: PropTypes.oneOfType([
   PropTypes.bool,
   PropTypes.object,
   ]),
   */
  handleSubmit: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'narrationForm',
    enableReinitialize: true,
  })
)(NarrationForm);
