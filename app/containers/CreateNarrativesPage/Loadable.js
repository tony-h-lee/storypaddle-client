/**
 *
 * Asynchronously loads the component for CreateNarrativesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
