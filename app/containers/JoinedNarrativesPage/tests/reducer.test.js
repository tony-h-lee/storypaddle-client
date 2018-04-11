
import { fromJS } from 'immutable';
import joinedNarrativesPageReducer from '../reducer';

describe('joinedNarrativesPageReducer', () => {
  it('returns the initial state', () => {
    expect(joinedNarrativesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
