import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Entry = {
  __typename?: 'Entry';
  createdAt: Scalars['Date'];
  format: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Game = {
  __typename?: 'Game';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
};

export type Movie = {
  __typename?: 'Movie';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type Show = {
  __typename?: 'Show';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  books: Array<Book>;
  createdAt: Scalars['Date'];
  entries: Array<Entry>;
  games: Array<Game>;
  id: Scalars['ID'];
  messages: Array<Message>;
  movies: Array<Movie>;
  name: Scalars['String'];
  shows: Array<Show>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, books: Array<{ __typename?: 'Book', name: string, author: string }>, games: Array<{ __typename?: 'Game', name: string }>, movies: Array<{ __typename?: 'Movie', name: string }>, shows: Array<{ __typename?: 'Show', name: string }> }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;