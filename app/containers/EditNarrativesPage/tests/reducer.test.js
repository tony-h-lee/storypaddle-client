
import { fromJS } from 'immutable';
import editNarrativesPageReducer from '../reducer';

describe('editNarrativesPageReducer', () => {
  it('returns the initial state', () => {
    expect(editNarrativesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
