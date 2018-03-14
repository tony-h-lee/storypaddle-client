
import { fromJS } from 'immutable';
import narrativeOverviewPageContainerReducer from '../reducer';

describe('narrativeOverviewPageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(narrativeOverviewPageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
