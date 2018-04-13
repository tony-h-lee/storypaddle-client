/**
 *
 * Asynchronously loads the component for EditNarrativesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
