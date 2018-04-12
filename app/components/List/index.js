/* eslint no-underscore-dangle: 0 */
/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  if (props.items.length > 0) {
    content = props.items.map((item) => (
      <ComponentToRender
        key={item.id ? item.id : item._id}
        item={item}
        moreProps={props.moreProps}
      />
    ));
  }

  return (
    <div>
      {content}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  component: PropTypes.func.isRequired,
  moreProps: PropTypes.object,
};

export default List;
