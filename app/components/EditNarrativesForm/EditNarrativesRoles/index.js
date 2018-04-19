/**
 *
 * EditNarrativesRoles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message, Icon, Header, Label, Segment } from 'semantic-ui-react';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';

function EditNarrativesRoles(props) {
  const {
    fields,
  } = props;
  return (
    <div style={{ marginBottom: '3rem' }}>
      {
        fields.map((role, index) => (
          <Segment basic vertical key={role}>
            <Header>
              Name
              <Header.Subheader>
                {fields.get(index).get('name')}
              </Header.Subheader>
            </Header>

            <Header as="h4" style={{ margin: '1rem 0' }}>
              Description
              <Label color="green" size="tiny"> Editable </Label>
            </Header>
            <SemanticField
              name={`${role}.synopsis`}
              component={SemanticFormField}
              as={Form.TextArea}
              autoHeight
              rows="7"
              placeholder="Enter Character Synopsis"
              type="text"
              validate={required}
            />

          </Segment>
        ))
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

EditNarrativesRoles.propTypes = {
  fields: PropTypes.object,
  meta: PropTypes.object,
};

export default EditNarrativesRoles;
