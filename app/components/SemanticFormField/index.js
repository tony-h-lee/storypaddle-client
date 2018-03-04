/**
*
* SemanticFormField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
} from 'semantic-ui-react';

function SemanticFormField({
  input, type, label, placeholder, icon,
  meta: { touched, error },
  as: As = Input, ...props }) {
  const handleChange = (e, { value }) => input.onChange(value);
  return (
    <Form.Field>
      <As
        {...props}
        {...input}
        value={input.value}
        type={type}
        icon={icon}
        iconPosition="left"
        fluid
        label={label}
        placeholder={placeholder}
        error={touched && error ? true : null}
        onChange={handleChange}
      />
    </Form.Field>
  );
}

SemanticFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

export default SemanticFormField;
