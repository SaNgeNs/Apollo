import gql from 'graphql-tag';

export const GetEpisodes = (page) => gql`{
  episodes(page: ${page}) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      episode
      characters {
        id
        name
        image
      }
    }
  }
}`;

export default GetEpisodes;