
import { fromJS } from 'immutable';
import confirmModalReducer from '../reducer';

describe('confirmModalReducer', () => {
  it('returns the initial state', () => {
    expect(confirmModalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
