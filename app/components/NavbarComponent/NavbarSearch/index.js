/**
*
* NavbarSearch
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { Input } from 'semantic-ui-react';
import SuggestionsDropdown from 'components/SuggestionsDropdown';
import SuggestionsItem from 'components/SuggestionsItem';
// import styled from 'styled-components';


function NavbarSearch(props) {
  const suggestions = props.navbarContainer.get('suggestions') ? props.navbarContainer.get('suggestions') : [];

  const getSuggestionValue = (suggestion) => suggestion.title;

  const inputProps = {
    key: 'searchInput',
    placeholder: 'Search',
    icon: 'search',
    onChange: (event, { newValue }) => props.actions.setSearch(newValue),
    value: props.navbarContainer.get('value'),
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={props.actions.search}
      onSuggestionsClearRequested={props.actions.clearSearch}
      onSuggestionSelected={props.actions.clearInput}
      getSuggestionValue={getSuggestionValue}
      renderInputComponent={(renderProps) => <Input {...renderProps} />}
      renderSuggestionsContainer={SuggestionsDropdown}
      renderSuggestion={SuggestionsItem}
      inputProps={inputProps}
    />
  );
}

NavbarSearch.propTypes = {
  actions: PropTypes.object,
  navbarContainer: PropTypes.object,
};

export default NavbarSearch;
