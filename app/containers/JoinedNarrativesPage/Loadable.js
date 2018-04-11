/**
 *
 * Asynchronously loads the component for JoinedNarrativesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
