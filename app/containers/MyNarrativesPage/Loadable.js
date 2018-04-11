/**
 *
 * Asynchronously loads the component for MyNarrativesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
