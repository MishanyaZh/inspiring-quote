// import { gql } from "@apollo/client";

// // export const ALL_USERS_QUERY = gql`
// //   query AllUsers {
// //     users {
// //       id
// //       name
// //       avatar {
// //         image {
// //           url
// //         }
// //         color
// //       }
// //     }
// //   }
// // `;

// // export const BOOK_FIELDS_FRAGMENT = gql`
// //   fragment bookFields on Book {
// //     id
// //     title
// //     cover {
// //       url
// //     }
// //     author {
// //       name
// //     }
// //   }
// // `;
// // export const GET_ALL_BOOKS_QUERY = gql`
// //   query GetBooks {
// //     books {
// //       __typename
// //       ...bookFields
// //     }
// //   }
// //   ${BOOK_FIELDS_FRAGMENT}
// // `;

// export const ALL_AUTHORS_QUERY = gql`
//   query GetAuthors {
//     authors {
//       id
//       name
//       photo {
//         url
//       }
//     }
//   }
// `;

// export const GET_BOOK_QUERY = gql`
//   query GetBook($bookId: ID!) {
//     book(id: $bookId) {
//       id
//       title
//       description
//       cover {
//         url
//       }
//       author {
//         id
//         name
//       }
//     }
//   }
// `;
// export const AUTHOR_DETAILS_FIELDS_FRAGMENT = gql`
//   fragment authorDetailFields on Author {
//     id
//     name
//     bio
//     photo {
//       url
//     }
//     books {
//       __typename
//       ...bookFields
//     }
//   }
//   ${BOOK_FIELDS_FRAGMENT}
// `;
// export const GET_AUTHOR_QUERY = gql`
//   query GetAuthor($authorId: ID!) {
//     author(id: $authorId) {
//       ...authorDetailFields
//     }
//   }
//   ${AUTHOR_DETAILS_FIELDS_FRAGMENT}
// `;

// // export const USERS_QUERY = gql`
// //   query GetUser($userId: ID!) {
// //     user(id: $userId) {
// //       id
// //       name
// //       email
// //       info
// //       avatar {
// //         image {
// //           url
// //         }
// //         color
// //       }
// //     }
// //   }
// // `;
