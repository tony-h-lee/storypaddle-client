
import { fromJS } from 'immutable';
import createNarrativesPageReducer from '../reducer';

describe('createNarrativesPageReducer', () => {
  it('returns the initial state', () => {
    expect(createNarrativesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
