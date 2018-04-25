
import { fromJS } from 'immutable';
import narrativesNewPageContainerReducer from '../reducer';

describe('narrativesNewPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(narrativesNewPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
