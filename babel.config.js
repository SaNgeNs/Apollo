const path = require('path').resolve;
const baseDir = process.cwd();

module.exports = (api) => {
  api.cache(false);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      "@emotion/babel-preset-css-prop",
    ],
    plugins: [
      ['module-resolver',
        {
          root: ['/'],
          alias: {
            Src: path(baseDir, 'src/'),
            Queries: path(baseDir, 'src/Queries'),
            Components: path(baseDir, 'src/components/'),
            Pages: path(baseDir, 'src/pages/'),
            Routes: path(baseDir, 'src/routes/'),
            ApolloClient: path(baseDir, 'src/apolloClient/'),
          },
        }],
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-transform-runtime',
      '@loadable/babel-plugin',
    ],
  };
};
