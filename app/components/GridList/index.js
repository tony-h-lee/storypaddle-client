/**
*
* List
*
*/

import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function GridList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  if (props.items.size > 0) {
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

GridList.propTypes = {
  items: PropTypes.array.isRequired,
  component: PropTypes.func.isRequired,
  moreProps: PropTypes.object,
};

export default GridList;
