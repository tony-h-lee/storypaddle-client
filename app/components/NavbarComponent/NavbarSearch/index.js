/**
*
* NavbarSearch
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
// import { Input } from 'semantic-ui-react';
// import styled from 'styled-components';


function NavbarSearch(props) {
  const suggestions = props.navbarContainer.get('suggestions') ? props.navbarContainer.get('suggestions') : [];

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.title}
    </div>
  );

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
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

NavbarSearch.propTypes = {
  actions: PropTypes.object,
  navbarContainer: PropTypes.object,
};

export default NavbarSearch;
