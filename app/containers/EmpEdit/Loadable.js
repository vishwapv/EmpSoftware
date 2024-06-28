/**
 *
 * Asynchronously loads the component for EmpEdit
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
