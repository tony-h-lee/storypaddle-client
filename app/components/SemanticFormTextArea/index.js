/**
*
* SemanticFormTextArea
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  TextArea,
} from 'semantic-ui-react';
// import styled from 'styled-components';

function SemanticFormTextArea({
  input, label, placeholder,
  meta: { touched, error, pristine },
  as: As = TextArea, ...props }) {
  const handleChange = (e, { value }) => input.onChange(value);
  return (
    <Form.Field>
      <As
        {...props}
        {...input}
        autoHeight
        rows="10"
        value={input.value}
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

SemanticFormTextArea.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

export default SemanticFormTextArea;
