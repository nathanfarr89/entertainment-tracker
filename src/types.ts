import type { GetUsersQuery } from "./graphql/generated";

export type Book = GetUsersQuery["users"][0]["books"][0];
export type Game = GetUsersQuery["users"][0]["games"][0];
export type Movie = GetUsersQuery["users"][0]["movies"][0];
export type Show = GetUsersQuery["users"][0]["shows"][0];
export type User = GetUsersQuery["users"][0];
