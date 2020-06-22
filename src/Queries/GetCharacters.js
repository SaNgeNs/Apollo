import gql from 'graphql-tag';

export const GetCharacters = gql`
  query($page: Int!) {
    characters(page: $page) {
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
  }
`;

export default GetCharacters;
