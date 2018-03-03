
import { fromJS } from 'immutable';
import navbarContainerReducer from '../reducer';

describe('navbarContainerReducer', () => {
  it('returns the initial state', () => {
    expect(navbarContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
