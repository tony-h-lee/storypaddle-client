
import { fromJS } from 'immutable';
import tutorialsPageReducer from '../reducer';

describe('tutorialsPageReducer', () => {
  it('returns the initial state', () => {
    expect(tutorialsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
