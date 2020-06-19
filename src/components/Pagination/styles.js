import { css } from '@emotion/core';

export const content = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const link = (active) => css`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  ${active ? 'background: chartreuse;' : ''}
`;
