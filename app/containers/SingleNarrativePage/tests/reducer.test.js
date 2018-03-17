
import { fromJS } from 'immutable';
import narrativePageContainerReducer from '../reducer';

describe('narrativePageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(narrativePageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
