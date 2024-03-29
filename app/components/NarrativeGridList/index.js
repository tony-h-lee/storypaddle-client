/**
*
* NarrativeGridList
*
*/

import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function NarrativeGridList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  if (props.items.size > 0) {
    // Item property should be get('_id') from rest server since view function is not called on the narrative docs
    content = props.items.map((item) => (
      <ComponentToRender
        key={item.id ? item.id : item.get('id')}
        item={item}
        actions={props.actions}
        moreProps={props.moreProps}
      />)
    );
  }

  return (
    <Grid
      columns={5}
      style={{ maxWidth: '1200px' }}
      stackable
      doubling
    >
      {content}
    </Grid>
  );
}

NarrativeGridList.propTypes = {
  items: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  moreProps: PropTypes.object,
};

export default NarrativeGridList;
