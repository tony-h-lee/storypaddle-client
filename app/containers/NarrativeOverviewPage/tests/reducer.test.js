
import { fromJS } from 'immutable';
import narrativeOverviewPageReducer from '../reducer';

describe('narrativeOverviewPageReducer', () => {
  it('returns the initial state', () => {
    expect(narrativeOverviewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
