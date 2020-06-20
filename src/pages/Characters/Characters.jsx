import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loading from 'Components/Loading';
import Error from 'Components/Error';
import ListCharacters from 'Components/ListCharacters';
import Pagination from 'Components/Pagination';
import GetCharacters from './queries/GetCharacters';
import {
  title,
  content,
} from './styles';

export const Characters = (props) => {
  const {
    location: {
      search,
    },
  } = props;

  const searchParams = new URLSearchParams(search);
  const queryPage = searchParams.get('page') || 1;

  const { error, loading, data } = useQuery(GetCharacters(queryPage));

  if (loading) return <Loading />;
  if (error) return <Error />;
  
  const {
    characters: {
      info: {
        count,
        pages,
        next,
        prev,
      },
      results,
    },
  } = data;

  return (
    <div css={content}>
      <p css={title}>
        {count} - Characters
      </p>

      <ListCharacters
        characters={results}
      />

      <Pagination
        pages={pages}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default Characters;
