import { css } from '@emotion/core';

export const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const element = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  max-height: 330px;
  padding: 20px;
`;

export const title = css`
  font-size: 16px;
  margin-bottom: 10px;
  color: fuchsia;
`;

export const img = css`
  box-shadow: 0 0 20px -5px;
  transition: transform .3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
