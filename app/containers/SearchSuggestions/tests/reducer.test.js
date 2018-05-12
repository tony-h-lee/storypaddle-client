
import { fromJS } from 'immutable';
import searchSuggestionsReducer from '../reducer';

describe('searchSuggestionsReducer', () => {
  it('returns the initial state', () => {
    expect(searchSuggestionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
