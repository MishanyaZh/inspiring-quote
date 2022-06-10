import { gql } from "@apollo/client";

export const ALL_USERS_QUERY = gql`
  query AllUsers {
    users {
      id
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
  query GetAuthors {
    authors {
      id
      name
      photo {
        url
      }
    }
  }
`;

export const GET_BOOK_QUERY = gql`
  query GetBook($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      description
      cover {
        url
      }
      author {
        id
        name
      }
    }
  }
`;

export const GET_AUTHOR_QUERY = gql`
  query GetAuthor($authorId: ID!) {
    author(id: $authorId) {
      id
      name
      photo {
        url
      }
      bio
      books {
        title
        id
        description
        cover {
          url
        }
        author {
          name
        }
      }
    }
  }
`;

export const USERS_QUERY = gql`
  query GetUser {
    user(id: $userId) {
      id
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
