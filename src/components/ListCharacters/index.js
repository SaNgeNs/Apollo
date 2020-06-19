import loadable from '@loadable/component';
import withErrorHandler from 'Components/withErrorHandler';

const ListCharacters = loadable(() => import(/* webpackChunkName: "list_characters_component" */'./ListCharacters'));

export default withErrorHandler(ListCharacters);
