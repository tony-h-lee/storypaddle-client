/**
*
* SemanticFormDropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Dropdown,
} from 'semantic-ui-react';
// import styled from 'styled-components';

function SemanticFormDropdown({
  input, options, label, placeholder,
  meta: { touched, error, pristine },
  as: As = Dropdown, ...props }) {
  const handleChange = (e, { value }) => input.onChange(value);
  return (
    <Form.Field>
      <As
        {...props}
        {...input}
        options={options}
        selection
        fluid
        button
        label={label}
        placeholder={placeholder}
        error={touched && error && !pristine ? true : null}
        onChange={handleChange}
      />
      {
        touched && error && !pristine &&
        (<Label basic color="red" pointing> {error} </Label>)
      }
    </Form.Field>
  );
}

SemanticFormDropdown.propTypes = {
  as: PropTypes.any,
  options: PropTypes.array,
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

export default SemanticFormDropdown;
