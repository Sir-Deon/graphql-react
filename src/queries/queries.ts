import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const GET_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
        }
      }
    }
  }
`;
