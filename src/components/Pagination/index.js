import { withRouter } from 'react-router-dom'
import loadable from '@loadable/component';
import withErrorHandler from 'Components/withErrorHandler';

const Pagination = loadable(() => import(/* webpackChunkName: "pagination_component" */'./Pagination'), { ssr: false });

export default withRouter(withErrorHandler(Pagination));
