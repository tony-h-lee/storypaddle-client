/*
 *
 * NavbarContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT,
} from './constants';

const initialState = fromJS({
});

function navbarContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
      return state;
    default:
      return state;
  }
}

export default navbarContainerReducer;
