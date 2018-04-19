/**
*
* EditNarrativesForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { Form, Message, Button, Icon, Header, Label } from 'semantic-ui-react';
import { required } from 'components/FormValidation/syncValidation';
import { editNarrative } from 'containers/EditNarrativesPage/actions';
import EditNarrativesRoles from './EditNarrativesRoles';
// import styled from 'styled-components';


function EditNarrativesForm(props) {
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
        editNarrative({ form: values, token: props.token, narrative: props.narrative.get('id') }, dispatch))}
      error={error !== false}
    >
      <Message
        info
        size="mini"
      >
        <Icon name="exclamation" />
        You can only make changes to the fields marked as editable.
      </Message>

      <Header as="h3">
        Title
        <Header.Subheader>
          {props.narrative.get('title')}
        </Header.Subheader>
      </Header>

      <Header as="h3">
        Genre
        <Header.Subheader>
          {props.narrative.get('genre')}
        </Header.Subheader>
      </Header>

      <Header as="h3">
        Contains Explicit Content
        <Header.Subheader>
          {props.narrative.get('explicit') ? 'Yes' : 'No'}
        </Header.Subheader>
      </Header>


      <Header as="h3">
        Synopsis
        <Label color="green" size="tiny"> Editable </Label>
      </Header>
      <SemanticField
        name="synopsis"
        component={SemanticFormField}
        as={Form.TextArea}
        autoHeight
        rows="10"
        placeholder="Enter Narrative Synopsis"
        validate={required}
      />

      <Header as="h2">
        Roles
      </Header>
      <FieldArray
        name="roles"
        component={EditNarrativesRoles}
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
        fluid
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

EditNarrativesForm.propTypes = {
  narrative: PropTypes.object,
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
    initialValues: {
      synopsis: ownProps.narrative.get('synopsis'),
      roles: ownProps.narrative.get('roles'),
    },
  };
}

export default connect(mapStateToProps, null)(reduxForm({
  form: 'editNarrativesForm',
  enableReinitialize: true,
}, mapStateToProps)(EditNarrativesForm));
