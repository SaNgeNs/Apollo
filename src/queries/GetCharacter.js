import gql from 'graphql-tag';

export const GetCharacter = gql`
  query($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
      created
      species
      location {
        id
        name
        type
        dimension
        created
        residents {
          id
          name
        }
      }
    }
  }
`;

export default GetCharacter;
