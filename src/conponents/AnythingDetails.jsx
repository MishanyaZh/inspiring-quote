import BookDetails from "./Book/BookDetails";
import AuthorDetails from "./Author/AuthorDetails";
import UserDetails from "./User/UserDetails";
import { gql } from "@apollo/client";

import { AUTHOR_DETAILS_FIELDS_FRAGMENT } from "./Author/AuthorDetails";
import { BOOK_DETAILS_FIELDS_FRAGMENT } from "./Book/BookDetails";
// import { USER_FIELDS_FRAGMENT } from "./User/User";

export const ANYTHING_DETAILS_FIELDS_FRAGMENT = gql`
  fragment anythingDetailsFields on Anything {
    ...bookDetailsFields
    ...authorDetailsFields
  }
  ${BOOK_DETAILS_FIELDS_FRAGMENT}
  ${AUTHOR_DETAILS_FIELDS_FRAGMENT}
`;

export default function AnythingDetails({ anything }) {
  switch (anything.__typename) {
    case "Book": {
      return <BookDetails book={anything} />;
    }
    case "Author": {
      return <AuthorDetails author={anything} />;
    }
    case "User": {
      return <UserDetails user={anything} />;
    }
    default: {
      return <p>Unsupported __typename - [{anything.__typename}]</p>;
    }
  }
}
