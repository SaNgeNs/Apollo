import React from 'react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  wrapper,
  element,
  title,
  img,
} from './styles';

export const ListCharacters = ({
  characters = [],
}) => (
  <div css={wrapper}>
    {characters.map(({ id, name, image }) => (
      <div css={element} key={id}>
        <span css={title}>{name}</span>
        <NavLink
          key={id}
          exact
          to={`/character/${id}`}
        >
          <LazyLoadImage
            css={img}
            src={image}
            alt={name}
            threshold={0}
            height={300}
            width={300}
          />
        </NavLink>
      </div>
    ))}
  </div>
);

export default ListCharacters;
