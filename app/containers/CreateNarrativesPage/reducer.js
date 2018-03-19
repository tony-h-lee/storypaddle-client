/*
 *
 * CreateNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  roles: [
    {
      name: '',
      description: '',
    },
    {
      name: '',
      description: '',
    },
  ],
});

function createNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default createNarrativesPageReducer;
