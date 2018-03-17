/**
*
* List
*
*/

import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  if (props.items.length > 0) {
    content = props.items.map((item) => (
      <ComponentToRender
        key={item.id}
        item={item}
        actions={props.actions}
        moreProps={props.moreProps}
      />
    ));
  }

  return (
    <Grid
      columns={4}
      padded
      stackable
      doubling
    >
      {content}
    </Grid>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  component: PropTypes.func.isRequired,
  moreProps: PropTypes.object,
};

export default List;
