
import { fromJS } from 'immutable';
import narrativesPageContainerReducer from '../reducer';

describe('narrativesPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(narrativesPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
