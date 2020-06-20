import gql from 'graphql-tag';

export const GetCharacters = (page) => gql`{
  characters(page: ${page}) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
    }
  }
}`;

export default GetCharacters;
