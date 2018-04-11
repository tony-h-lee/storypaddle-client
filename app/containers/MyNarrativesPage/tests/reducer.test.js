
import { fromJS } from 'immutable';
import myNarrativesPageReducer from '../reducer';

describe('myNarrativesPageReducer', () => {
  it('returns the initial state', () => {
    expect(myNarrativesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
