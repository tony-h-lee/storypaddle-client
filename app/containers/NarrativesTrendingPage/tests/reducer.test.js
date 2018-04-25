
import { fromJS } from 'immutable';
import narrativesTrendingPageContainerReducer from '../reducer';

describe('narrativesTrendingPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(narrativesTrendingPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
