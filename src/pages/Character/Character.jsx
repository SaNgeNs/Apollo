import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from 'Components/Loading';
import Error from 'Components/Error';
import GET_CHARACTER from 'Queries/GetCharacter';
import {
  content,
  text,
  subText,
  img,
  title,
  wrap,
  link,
} from './styles';

export const Character = (props) => {
  const {
    match: {
      params: {
        id,
      },
    },
  } = props;

  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {
    character: {
      image,
      name,
      species,
      created,
      gender,
      status,
      location: {
        name: locationName,
        created: locationCreated,
        dimension: locationDimension,
        type: locationType,
        residents: locationResidents,
      },
    },
  } = data;

  const residentsLength = locationResidents ? locationResidents.length : 0;

  return (
    <div css={content}>
      <LazyLoadImage
        css={img}
        src={image}
        alt={name}
        threshold={0}
      />

      <div css={wrap}>
        <p css={title}>Info Character:</p>

        <p css={text}>Name: <span css={subText}>{name}</span></p>
        <p css={text}>Species: <span css={subText}>{species}</span></p>
        <p css={text}>Created: <span css={subText}>{created}</span></p>
        <p css={text}>Gender: <span css={subText}>{gender}</span></p>
        <p css={text}>Status: <span css={subText}>{status}</span></p>

        <p css={title}>Location:</p>

        <p css={text}>Name: <span css={subText}>{locationName}</span></p>
        <p css={text}>Type: <span css={subText}>{locationType}</span></p>
        <p css={text}>Created: <span css={subText}>{locationCreated}</span></p>
        <p css={text}>Dimension: <span css={subText}>{locationDimension}</span></p>
        <p css={text}>
          Residents:
          <span css={subText}>
            {locationResidents && locationResidents.map(({ id, name }, index) => (
              <Fragment key={id}>
                <NavLink
                  css={link}
                  key={id}
                  exact
                  to={`/character/${id}`}
                >
                  {name}
                </NavLink>
                {residentsLength === index + 1 ? '.' : ', '}
              </Fragment>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Character;
