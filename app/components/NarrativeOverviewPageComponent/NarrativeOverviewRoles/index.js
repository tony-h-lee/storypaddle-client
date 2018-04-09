/**
*
* NarrativeOverviewRoles
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import RoleItem from 'components/NarrativeOverviewPageComponent/RoleItem';
// import styled from 'styled-components';


function NarrativeOverviewRoles(props) {
  return (
    <div style={{ marginTop: '3rem' }}>
      <h3> Roles </h3>
      <List
        items={props.roles}
        component={RoleItem}
        moreProps={
        {
          static: props.static,
          join: props.join,
          id: props.id,
          token: props.token,
          user: props.user,
          error: props.error,
        }
        }
      />
    </div>
  );
}

NarrativeOverviewRoles.propTypes = {
  static: PropTypes.bool,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  roles: PropTypes.array,
  join: PropTypes.func,
  id: PropTypes.string,
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default NarrativeOverviewRoles;
