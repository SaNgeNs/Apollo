import loadable from '@loadable/component';

const Main = loadable(() => import(/* webpackChunkName: "page_main" */'Pages/Main'));
const Episodes = loadable(() => import(/* webpackChunkName: "page_episodes" */'Pages/Episodes'));
const Characters = loadable(() => import(/* webpackChunkName: "page_characters" */'Pages/Characters'));
const Character = loadable(() => import(/* webpackChunkName: "page_character" */'Pages/Character'));
const NotFound = loadable(() => import(/* webpackChunkName: "page_not_found" */'Pages/NotFound'));

const Routes = [
  {
    path: '/',
    exact: true,
    component: Main,
    name: 'main',
  },
  {
    path: '/episodes',
    exact: true,
    component: Episodes,
    name: 'episodes',
  },
  {
    path: '/characters',
    exact: true,
    component: Characters,
    name: 'characters',
  },
  {
    path: '/character/:id(\\d+)',
    exact: true,
    component: Character,
    name: 'character',
  },
  {
    component: NotFound,
    name: 'notFound',
  },
];

export default Routes;
