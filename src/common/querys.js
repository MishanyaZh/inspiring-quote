import { gql } from "@apollo/client";

export const ALL_USERS_QUERY = gql`
  query AllUsers {
    users {
      name
      avatar {
        image {
          url
        }
        color
      }
    }
  }
`;

export const GET_ALL_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      title
      cover {
        url
      }
      author {
        name
      }
    }
  }
`;

export const ALL_AUTHORS_QUERY = gql`
  query AllAuthors {
    authors {
      name
      photo {
        url
      }
    }
  }
`;
