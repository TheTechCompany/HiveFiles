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

export interface FormInput {
  name?: InputMaybe<Scalars["String"]>;
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
    comments: { __type: "[FileComment]" },
    createdAt: { __type: "DateTime" },
    directory: { __type: "Boolean" },
    id: { __type: "ID" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    parent: { __type: "Folder" },
    size: { __type: "Int" },
    uploadedBy: { __type: "HiveUser" },
    url: { __type: "String" },
  },
  FileComment: {
    __typename: { __type: "String!" },
    comment: { __type: "String" },
    file: { __type: "File" },
    id: { __type: "ID" },
    posted: { __type: "DateTime" },
    postedBy: { __type: "HiveUser" },
  },
  Folder: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    items: { __type: "[FSItem!]!" },
    name: { __type: "String!" },
    organisation: { __type: "HiveOrganisation" },
    parent: { __type: "Folder" },
  },
  Form: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    createdBy: { __type: "HiveUser" },
    id: { __type: "ID" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    submissions: { __type: "[FormSubmission]" },
    versions: { __type: "[FormSchema]" },
  },
  FormBlock: {
    __typename: { __type: "String!" },
    children: { __type: "[FormBlock]" },
    extras: { __type: "String" },
    id: { __type: "ID" },
    order: { __type: "Int" },
    parent: { __type: "FormBlock" },
    schema: { __type: "FormSchema" },
    type: { __type: "String" },
  },
  FormInput: { name: { __type: "String" } },
  FormSchema: {
    __typename: { __type: "String!" },
    blocks: { __type: "[FormBlock]" },
    createdAt: { __type: "DateTime" },
    form: { __type: "Form" },
    id: { __type: "ID" },
    submissions: { __type: "[FormSubmission]" },
    version: { __type: "String" },
  },
  FormSubmission: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    data: { __type: "String" },
    form: { __type: "Form" },
    id: { __type: "ID" },
    version: { __type: "FormSchema" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    files: { __type: "[FSItem!]!" },
    id: { __type: "ID!" },
  },
  HiveUser: { __typename: { __type: "String!" }, id: { __type: "ID!" } },
  mutation: {
    __typename: { __type: "String!" },
    commentOnFile: { __type: "File", __args: { comment: "String", id: "ID" } },
    copyFile: {
      __type: "File!",
      __args: { newPath: "String!", path: "String!" },
    },
    createDirectory: {
      __type: "File!",
      __args: { path: "String!", recursive: "Boolean" },
    },
    createForm: { __type: "Form", __args: { input: "FormInput" } },
    deleteCommentOnFile: {
      __type: "File",
      __args: { comment: "ID", id: "ID" },
    },
    deleteFile: { __type: "File!", __args: { path: "String!" } },
    deleteForm: { __type: "Form", __args: { id: "ID" } },
    moveFile: {
      __type: "File!",
      __args: { newPath: "String!", path: "String!" },
    },
    renameFile: {
      __type: "File!",
      __args: { newName: "String!", path: "String!" },
    },
    updateForm: { __type: "Form", __args: { id: "ID", input: "FormInput" } },
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
    forms: { __type: "[Form]", __args: { ids: "[ID]" } },
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
  comments?: Maybe<Array<Maybe<FileComment>>>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  directory?: Maybe<ScalarsEnums["Boolean"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  parent?: Maybe<Folder>;
  size?: Maybe<ScalarsEnums["Int"]>;
  uploadedBy?: Maybe<HiveUser>;
  url?: Maybe<ScalarsEnums["String"]>;
}

export interface FileComment {
  __typename?: "FileComment";
  comment?: Maybe<ScalarsEnums["String"]>;
  file?: Maybe<File>;
  id?: Maybe<ScalarsEnums["ID"]>;
  posted?: Maybe<ScalarsEnums["DateTime"]>;
  postedBy?: Maybe<HiveUser>;
}

export interface Folder {
  __typename?: "Folder";
  id: ScalarsEnums["ID"];
  items: Array<FSItem>;
  name: ScalarsEnums["String"];
  organisation?: Maybe<HiveOrganisation>;
  parent?: Maybe<Folder>;
}

export interface Form {
  __typename?: "Form";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  createdBy?: Maybe<HiveUser>;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  submissions?: Maybe<Array<Maybe<FormSubmission>>>;
  versions?: Maybe<Array<Maybe<FormSchema>>>;
}

export interface FormBlock {
  __typename?: "FormBlock";
  children?: Maybe<Array<Maybe<FormBlock>>>;
  extras?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["ID"]>;
  order?: Maybe<ScalarsEnums["Int"]>;
  parent?: Maybe<FormBlock>;
  schema?: Maybe<FormSchema>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface FormSchema {
  __typename?: "FormSchema";
  blocks?: Maybe<Array<Maybe<FormBlock>>>;
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  form?: Maybe<Form>;
  id?: Maybe<ScalarsEnums["ID"]>;
  submissions?: Maybe<Array<Maybe<FormSubmission>>>;
  version?: Maybe<ScalarsEnums["String"]>;
}

export interface FormSubmission {
  __typename?: "FormSubmission";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  data?: Maybe<ScalarsEnums["String"]>;
  form?: Maybe<Form>;
  id?: Maybe<ScalarsEnums["ID"]>;
  version?: Maybe<FormSchema>;
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
  commentOnFile: (args?: {
    comment?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<File>;
  copyFile: (args: {
    newPath: Scalars["String"];
    path: Scalars["String"];
  }) => File;
  createDirectory: (args: {
    path: Scalars["String"];
    recursive?: Maybe<Scalars["Boolean"]>;
  }) => File;
  createForm: (args?: { input?: Maybe<FormInput> }) => Maybe<Form>;
  deleteCommentOnFile: (args?: {
    comment?: Maybe<Scalars["ID"]>;
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<File>;
  deleteFile: (args: { path: Scalars["String"] }) => File;
  deleteForm: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Form>;
  moveFile: (args: {
    newPath: Scalars["String"];
    path: Scalars["String"];
  }) => File;
  renameFile: (args: {
    newName: Scalars["String"];
    path: Scalars["String"];
  }) => File;
  updateForm: (args?: {
    id?: Maybe<Scalars["ID"]>;
    input?: Maybe<FormInput>;
  }) => Maybe<Form>;
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
  forms: (args?: {
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  }) => Maybe<Array<Maybe<Form>>>;
  hash: (args: { input: Scalars["String"] }) => Maybe<ScalarsEnums["Hash"]>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  File: File;
  FileComment: FileComment;
  Folder: Folder;
  Form: Form;
  FormBlock: FormBlock;
  FormSchema: FormSchema;
  FormSubmission: FormSubmission;
  HiveOrganisation: HiveOrganisation;
  HiveUser: HiveUser;
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "File"
  | "FileComment"
  | "Folder"
  | "Form"
  | "FormBlock"
  | "FormSchema"
  | "FormSubmission"
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
