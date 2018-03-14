import React from 'react';
import { Image } from 'semantic-ui-react';
import Boat from 'images/boat-s.png';

export default () => (
  <Image
    src={Boat}
    verticalAlign="middle"
    spaced
    style={{ padding: '0.2rem' }}
  />
)
