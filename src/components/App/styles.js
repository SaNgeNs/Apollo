import { css } from '@emotion/core';

export const linkActive = {
  background: 'chartreuse',
  color: '#000',
};

export const list = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: cornflowerblue;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const link = css`
  display: flex;
  text-decoration: none;
  padding: 20px;
  color: #fff;
`;

export const footer = css`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: violet;
`;

export const app = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
