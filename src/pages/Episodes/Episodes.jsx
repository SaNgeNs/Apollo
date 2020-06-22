import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loading from 'Components/Loading';
import Error from 'Components/Error';
import ListCharacters from 'Components/ListCharacters';
import Pagination from 'Components/Pagination';
import GET_EPISODES from 'Queries/GetEpisodes';
import {
  content,
  title,
  episodeWrap,
  episodeTitle,
  charactersTitle,
} from './styles';

export const Episodes = (props) => {
  const {
    location: {
      search,
    },
  } = props;

  const searchParams = new URLSearchParams(search);
  const queryPage = searchParams.get('page') || 1;

  const { error, loading, data } = useQuery(GET_EPISODES, {
    variables: {
      page: Number(queryPage),
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {
    episodes: {
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
      <p css={title}>{count} - Episodes</p>

      {results.map(({ name, episode, id, characters }) => (
        <div css={episodeWrap} key={id}>
          <p css={episodeTitle} key={episode}>{name}-{episode}</p>
          <p css={charactersTitle}>Characters</p>

          <ListCharacters
            characters={characters}
          />
        </div>
      ))}

      <Pagination
        pages={pages}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default Episodes;
