import { css } from '@emotion/core';

export const content = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: self-start;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

export const title = css`
  font-size: 20px;
  text-transform: uppercase;
  color: fuchsia;
  padding: 20px 0 10px 0;
`;

export const text = css`
  display: flex;
  font-size: 20px;
  color: royalblue;
  padding: 10px 0;
  font-weight: bold;
  margin-left: 20px;
`;

export const subText = css`
  margin-left: 5px;
  font-weight: normal;
`;

export const img = css`
  padding: 20px;
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: 100%;
`;

export const wrap = css`
  flex: 1;
  min-width: 300px;
`;

export const link = css`
  line-height: 1.2em;
  font-size: 18px;
`;
