import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';
import Routes from 'Routes';

import {
  linkActive,
  list,
  link,
  footer,
  app,
} from './styles';

export const App = () => {
  return (
    <div css={app}>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />

      <ul css={list}>
        <li>
          <NavLink
            exact
            css={link}
            to="/"
            activeStyle={linkActive}
          >
            Main
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            css={link}
            to="/episodes"
            activeStyle={linkActive}
          >
            Episodes
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            css={link}
            to="/characters"
            activeStyle={linkActive}
          >
            Characters
          </NavLink>
        </li>
      </ul>

      <Switch>
        {Routes.map(route => <Route key={route.name} {...route} />)}
      </Switch>

      <footer css={footer}>
        Test SSR 2020
      </footer>
    </div>
  );
};

export default App;
