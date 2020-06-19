import loadable from '@loadable/component';
import withErrorHandler from 'Components/withErrorHandler';

const Error = loadable(() => import(/* webpackChunkName: "error_component" */'./Error'), { ssr: false });

export default withErrorHandler(Error);
