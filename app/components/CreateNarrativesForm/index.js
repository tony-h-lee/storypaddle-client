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
  { key: 'fantasy', text: 'Fantasy', value: 'Fantasy' },
  { key: 'science fiction', text: 'Science Fiction', value: 'Science Fiction' },
  { key: 'historical fiction', text: 'Historical Fiction', value: 'Historical Fiction' },
];

function CreateNarrativesForm(props) {
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
        createNarrative({ form: values, token: props.token }, dispatch))}
      error={error !== false}
    >

      <SemanticField
        name="title"
        label={'Narrative Title'}
        component={SemanticFormField}
        as={Form.Input}
        fluid
        placeholder="Ex. The Machine and Us"
        type="text"
        validate={required}
      />
      <SemanticField
        name="synopsis"
        label={'Narrative Synopsis'}
        component={SemanticFormField}
        as={Form.TextArea}
        autoHeight
        rows="13"
        placeholder={'Ex. Amidst the rubble and dust, a bloodied hand appears from under a crevice.\n\nHaving unleashed the power of the Crucible, the Earth is now covered in ruin and debris–the sky, engulfed in thick grey clouds. Shepard crawls out from beneath the piles of concrete and metal, scarred and barely holding together, only to see a looming monstrosity in the air. A single lone reaper, the last of its kind.\n\nThis is a Mass Effect roleplay picking up from the Destruction ending from Mass Effect 3. Please keep NSFW content to a minimum.'}
        validate={required}
      />
      <SemanticField
        name="genre"
        label={'Select Genre'}
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
        <p> If your Narrative will contain explicit content, you must check the box right below. </p>
        <SemanticField
          name="explicit"
          component={SemanticFormField}
          as={Form.Checkbox}
          value={false}
          label="Confirm explicit content"
        />
      </Message>

      <Message info size="small">
        <Message.Header> Create Roles </Message.Header>
        <Message.List
          items={[
            'You must create at least two roles.',
            'Character 1 will be your role.',
            'Other roles can be filled by any users.',
            'You can make up to 4 roles.',
          ]}
        />
      </Message>

      <FieldArray
        validate={validateRoles}
        name="roles"
        component={CreateNarrativesRoles}
        accountType={props.user.get('accountType')}
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
        loading={submitting}
        disabled={pristine || submitting}
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
  submitting: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'createNarrativesForm',
    enableReinitialize: true,
  })
)(CreateNarrativesForm);
