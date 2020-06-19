import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  content,
  link,
} from './styles';

export const Pagination = ({ pages, next, prev, ...props }) => {
  const list = Array.from({ length: pages }, (v, k) => k + 1);
  const {
    location: {
      pathname,
      search,
    },
  } = props;

  const searchParams = new URLSearchParams(search);
  const queryPage = searchParams.get('page') || 1;

  return (
    <div css={content}>
      {prev && (
        <NavLink
          css={link()}
          exact
          activeClassName=""
          to={`${pathname}${Number(prev) === 1 ? '' : `?page=${prev}`}`}
        >
          prev
        </NavLink>
      )}

      {list.map(page => (
        <NavLink
          css={link(Number(queryPage) === Number(page))}
          exact
          activeClassName=""
          key={page}
          to={`${pathname}${Number(page) === 1 ? '' : `?page=${page}`}`}
        >
          {page}
        </NavLink>
      ))}

      {next && (
        <NavLink
          css={link()}
          exact
          activeClassName=""
          to={`${pathname}?page=${next}`}
        >
          next
        </NavLink>
      )}
    </div>
  );
};

export default Pagination;
