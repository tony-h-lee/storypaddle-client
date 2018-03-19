/**
*
* CreateNarrativesRoles
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form } from 'semantic-ui-react';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required } from 'components/FormValidation/syncValidation';
// import styled from 'styled-components';


function CreateNarrativesRoles(props) {
  let content = (<div></div>);
  if (props.roles) {
    content = props.roles.map((role, index) => (
      <Card fluid>
        <Card.Content>
          <Card.Description style={{ marginBottom: '0.7rem' }}>
           Character {index + 1}
          </Card.Description>
          <SemanticField
            name={`role_${index}`}
            component={SemanticFormField}
            as={Form.Input}
            fluid
            placeholder="Enter Character Name"
            type="text"
            validate={required}
          />
          <SemanticField
            name={`role_description_${index}`}
            component={SemanticFormField}
            as={Form.TextArea}
            autoHeight
            rows="7"
            placeholder="Enter Character Synopsis"
            type="text"
            validate={required}
          />
        </Card.Content>
      </Card>)
    );
  }
  return (
    <div>
      { content }
    </div>
  );
}

CreateNarrativesRoles.propTypes = {
  roles: PropTypes.object,
};

export default CreateNarrativesRoles;
