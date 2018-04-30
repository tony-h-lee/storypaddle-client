
import { fromJS } from 'immutable';
import scenePageReducer from '../reducer';

describe('scenePageReducer', () => {
  it('returns the initial state', () => {
    expect(scenePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
