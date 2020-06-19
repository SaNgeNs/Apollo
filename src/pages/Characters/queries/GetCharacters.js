import { gql } from 'apollo-boost';

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
