/**
 *
 * EditCommentForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon, Header } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
import { updateComment } from 'containers/ScenePage/actions';
// import styled from 'styled-components';


function EditCommentForm(props) {
  const {
    submitting,
    pristine,
    error,
    handleSubmit,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit((values, dispatch) =>
        updateComment({ form: values, token: props.token, commentId: props.comment.id }, dispatch))
      }
      error={error !== false}
    >

      {
        props.comment.type === 'dialogue' ?
          <div style={{ marginBottom: '0.4rem' }}>
            <Header> {props.comment.character}
              <Header.Subheader> { props.comment.adjective && `(${props.comment.adjective})` } </Header.Subheader>
            </Header>
          </div>
          : null
      }
      <SemanticField
        name="text"
        component={SemanticFormField}
        as={Form.TextArea}
        autoHeight
        rows="5"
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
        type="submit"
        loading={submitting}
        disabled={pristine || submitting}
      >
        Submit
      </Button>

      <Button
        type="button"
        onClick={() => props.unsetEdit(props.comment.id)}
      >
        Cancel
      </Button>

    </Form>
  );
}

EditCommentForm.propTypes = {
  comment: PropTypes.object,
  unsetEdit: PropTypes.func,
  handleSubmit: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  return {
    form: ownProps.formId,
    initialValues: {
      text: ownProps.comment.text,
    },
  };
}

export default connect(mapStateToProps, null)(reduxForm({
  enableReinitialize: true,
}, mapStateToProps)(EditCommentForm));
