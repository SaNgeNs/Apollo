import loadable from '@loadable/component';
import withErrorHandler from 'Components/withErrorHandler';

const Loading = loadable(() => import(/* webpackChunkName: "loading_component" */'./Loading'), { ssr: false });

export default withErrorHandler(Loading);
