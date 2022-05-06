/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  Hash: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Date: true,
  DateTime: true,
  Hash: true,
  ID: true,
  Int: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  FSItem: { __typename: { __type: "String!" }, $on: { __type: "$FSItem!" } },
  File: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    isFolder: { __type: "Boolean" },
    mimeType: { __type: "String!" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    parent: { __type: "Folder" },
    size: { __type: "Int!" },
  },
  Folder: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    items: { __type: "[FSItem!]!" },
    name: { __type: "String!" },
    organisation: { __type: "HiveOrganisation" },
    parent: { __type: "Folder" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    files: { __type: "[FSItem!]!" },
    id: { __type: "ID!" },
  },
  HiveUser: { __typename: { __type: "String!" }, id: { __type: "ID!" } },
  mutation: {
    __typename: { __type: "String!" },
    copy: {
      __type: "String!",
      __args: { newPath: "String!", path: "String!" },
    },
    createDirectory: {
      __type: "File!",
      __args: { name: "String!", path: "String!" },
    },
    delete: { __type: "String!", __args: { path: "String!" } },
    get: { __type: "String!", __args: { path: "String!" } },
    move: {
      __type: "String!",
      __args: { newPath: "String!", path: "String!" },
    },
    put: { __type: "File!", __args: { file: "Upload!", path: "String!" } },
    rename: {
      __type: "String!",
      __args: { newName: "String!", path: "String!" },
    },
    uploadFiles: {
      __type: "[File]",
      __args: { files: "[Upload]", path: "String" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    _sdl: { __type: "String!" },
    files: { __type: "[File]!", __args: { path: "String!" } },
    filesById: { __type: "[File]", __args: { ids: "[ID]" } },
    hash: { __type: "Hash", __args: { input: "String!" } },
  },
  subscription: {},
  [SchemaUnionsKey]: { FSItem: ["File", "Folder"] },
} as const;

export interface FSItem {
  __typename?: "File" | "Folder";
  $on: $FSItem;
}

export interface File {
  __typename?: "File";
  id: ScalarsEnums["ID"];
  isFolder?: Maybe<ScalarsEnums["Boolean"]>;
  mimeType: ScalarsEnums["String"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  parent?: Maybe<Folder>;
  size: ScalarsEnums["Int"];
}

export interface Folder {
  __typename?: "Folder";
  id: ScalarsEnums["ID"];
  items: Array<FSItem>;
  name: ScalarsEnums["String"];
  organisation?: Maybe<HiveOrganisation>;
  parent?: Maybe<Folder>;
}

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  files: Array<FSItem>;
  id: ScalarsEnums["ID"];
}

export interface HiveUser {
  __typename?: "HiveUser";
  id: ScalarsEnums["ID"];
}

export interface Mutation {
  __typename?: "Mutation";
  copy: (args: {
    newPath: Scalars["String"];
    path: Scalars["String"];
  }) => ScalarsEnums["String"];
  createDirectory: (args: {
    name: Scalars["String"];
    path: Scalars["String"];
  }) => File;
  delete: (args: { path: Scalars["String"] }) => ScalarsEnums["String"];
  get: (args: { path: Scalars["String"] }) => ScalarsEnums["String"];
  move: (args: {
    newPath: Scalars["String"];
    path: Scalars["String"];
  }) => ScalarsEnums["String"];
  put: (args: { file: Scalars["Upload"]; path: Scalars["String"] }) => File;
  rename: (args: {
    newName: Scalars["String"];
    path: Scalars["String"];
  }) => ScalarsEnums["String"];
  uploadFiles: (args?: {
    files?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
    path?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<File>>>;
}

export interface Query {
  __typename?: "Query";
  _sdl: ScalarsEnums["String"];
  files: (args: { path: Scalars["String"] }) => Array<Maybe<File>>;
  filesById: (args?: {
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  }) => Maybe<Array<Maybe<File>>>;
  hash: (args: { input: Scalars["String"] }) => Maybe<ScalarsEnums["Hash"]>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  File: File;
  Folder: Folder;
  HiveOrganisation: HiveOrganisation;
  HiveUser: HiveUser;
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "File"
  | "Folder"
  | "HiveOrganisation"
  | "HiveUser"
  | "Mutation"
  | "Query"
  | "Subscription";

export interface $FSItem {
  File?: File;
  Folder?: Folder;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
