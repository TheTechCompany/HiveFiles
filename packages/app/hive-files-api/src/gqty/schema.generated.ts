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
  Hash: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface FSItemWhere {
  File?: InputMaybe<FileWhere>;
  Folder?: InputMaybe<FolderWhere>;
}

export interface FileConnectInput {
  parent?: InputMaybe<FileParentConnectFieldInput>;
}

export interface FileConnectOrCreateInput {
  parent?: InputMaybe<FileParentConnectOrCreateFieldInput>;
}

export interface FileConnectOrCreateWhere {
  node: FileUniqueWhere;
}

export interface FileConnectWhere {
  node: FileWhere;
}

export interface FileCreateInput {
  mimeType: Scalars["String"];
  name: Scalars["String"];
  parent?: InputMaybe<FileParentFieldInput>;
  size: Scalars["Int"];
}

export interface FileDeleteInput {
  parent?: InputMaybe<FileParentDeleteFieldInput>;
}

export interface FileDisconnectInput {
  parent?: InputMaybe<FileParentDisconnectFieldInput>;
}

export interface FileOnCreateInput {
  mimeType: Scalars["String"];
  name: Scalars["String"];
  size: Scalars["Int"];
}

export interface FileOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more FileSort objects to sort Files by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FileSort>>;
}

export interface FileParentAggregateInput {
  AND?: InputMaybe<Array<FileParentAggregateInput>>;
  OR?: InputMaybe<Array<FileParentAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<FileParentNodeAggregationWhereInput>;
}

export interface FileParentConnectFieldInput {
  connect?: InputMaybe<FolderConnectInput>;
  where?: InputMaybe<FolderConnectWhere>;
}

export interface FileParentConnectOrCreateFieldInput {
  onCreate: FileParentConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
}

export interface FileParentConnectOrCreateFieldInputOnCreate {
  node: FolderOnCreateInput;
}

export interface FileParentConnectionSort {
  node?: InputMaybe<FolderSort>;
}

export interface FileParentConnectionWhere {
  AND?: InputMaybe<Array<FileParentConnectionWhere>>;
  OR?: InputMaybe<Array<FileParentConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
  node_NOT?: InputMaybe<FolderWhere>;
}

export interface FileParentCreateFieldInput {
  node: FolderCreateInput;
}

export interface FileParentDeleteFieldInput {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FileParentConnectionWhere>;
}

export interface FileParentDisconnectFieldInput {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<FileParentConnectionWhere>;
}

export interface FileParentFieldInput {
  connect?: InputMaybe<FileParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<FileParentConnectOrCreateFieldInput>;
  create?: InputMaybe<FileParentCreateFieldInput>;
}

export interface FileParentNodeAggregationWhereInput {
  AND?: InputMaybe<Array<FileParentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FileParentNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface FileParentUpdateConnectionInput {
  node?: InputMaybe<FolderUpdateInput>;
}

export interface FileParentUpdateFieldInput {
  connect?: InputMaybe<FileParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<FileParentConnectOrCreateFieldInput>;
  create?: InputMaybe<FileParentCreateFieldInput>;
  delete?: InputMaybe<FileParentDeleteFieldInput>;
  disconnect?: InputMaybe<FileParentDisconnectFieldInput>;
  update?: InputMaybe<FileParentUpdateConnectionInput>;
  where?: InputMaybe<FileParentConnectionWhere>;
}

export interface FileRelationInput {
  parent?: InputMaybe<FileParentCreateFieldInput>;
}

/** Fields to sort Files by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileSort object. */
export interface FileSort {
  id?: InputMaybe<SortDirection>;
  mimeType?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  size?: InputMaybe<SortDirection>;
}

export interface FileUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface FileUpdateInput {
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<FileParentUpdateFieldInput>;
  size?: InputMaybe<Scalars["Int"]>;
}

export interface FileWhere {
  AND?: InputMaybe<Array<FileWhere>>;
  OR?: InputMaybe<Array<FileWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  mimeType_CONTAINS?: InputMaybe<Scalars["String"]>;
  mimeType_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mimeType_IN?: InputMaybe<Array<Scalars["String"]>>;
  mimeType_NOT?: InputMaybe<Scalars["String"]>;
  mimeType_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  mimeType_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  mimeType_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  mimeType_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  mimeType_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<FolderWhere>;
  parentAggregate?: InputMaybe<FileParentAggregateInput>;
  parentConnection?: InputMaybe<FileParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<FileParentConnectionWhere>;
  parent_NOT?: InputMaybe<FolderWhere>;
  size?: InputMaybe<Scalars["Int"]>;
  size_GT?: InputMaybe<Scalars["Int"]>;
  size_GTE?: InputMaybe<Scalars["Int"]>;
  size_IN?: InputMaybe<Array<Scalars["Int"]>>;
  size_LT?: InputMaybe<Scalars["Int"]>;
  size_LTE?: InputMaybe<Scalars["Int"]>;
  size_NOT?: InputMaybe<Scalars["Int"]>;
  size_NOT_IN?: InputMaybe<Array<Scalars["Int"]>>;
}

export interface FolderConnectInput {
  items?: InputMaybe<FolderItemsConnectInput>;
  parent?: InputMaybe<FolderParentConnectFieldInput>;
}

export interface FolderConnectOrCreateInput {
  items?: InputMaybe<FolderItemsConnectOrCreateInput>;
  parent?: InputMaybe<FolderParentConnectOrCreateFieldInput>;
}

export interface FolderConnectOrCreateWhere {
  node: FolderUniqueWhere;
}

export interface FolderConnectWhere {
  node: FolderWhere;
}

export interface FolderCreateInput {
  items?: InputMaybe<FolderItemsCreateInput>;
  name: Scalars["String"];
  parent?: InputMaybe<FolderParentFieldInput>;
}

export interface FolderDeleteInput {
  items?: InputMaybe<FolderItemsDeleteInput>;
  parent?: InputMaybe<FolderParentDeleteFieldInput>;
}

export interface FolderDisconnectInput {
  items?: InputMaybe<FolderItemsDisconnectInput>;
  parent?: InputMaybe<FolderParentDisconnectFieldInput>;
}

export interface FolderItemsConnectInput {
  File?: InputMaybe<Array<FolderItemsFileConnectFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderConnectFieldInput>>;
}

export interface FolderItemsConnectOrCreateInput {
  File?: InputMaybe<Array<FolderItemsFileConnectOrCreateFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderConnectOrCreateFieldInput>>;
}

export interface FolderItemsConnectionWhere {
  File?: InputMaybe<FolderItemsFileConnectionWhere>;
  Folder?: InputMaybe<FolderItemsFolderConnectionWhere>;
}

export interface FolderItemsCreateFieldInput {
  File?: InputMaybe<Array<FolderItemsFileCreateFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderCreateFieldInput>>;
}

export interface FolderItemsCreateInput {
  File?: InputMaybe<FolderItemsFileFieldInput>;
  Folder?: InputMaybe<FolderItemsFolderFieldInput>;
}

export interface FolderItemsDeleteInput {
  File?: InputMaybe<Array<FolderItemsFileDeleteFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderDeleteFieldInput>>;
}

export interface FolderItemsDisconnectInput {
  File?: InputMaybe<Array<FolderItemsFileDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderDisconnectFieldInput>>;
}

export interface FolderItemsFileConnectFieldInput {
  connect?: InputMaybe<Array<FileConnectInput>>;
  where?: InputMaybe<FileConnectWhere>;
}

export interface FolderItemsFileConnectOrCreateFieldInput {
  onCreate: FolderItemsFileConnectOrCreateFieldInputOnCreate;
  where: FileConnectOrCreateWhere;
}

export interface FolderItemsFileConnectOrCreateFieldInputOnCreate {
  node: FileOnCreateInput;
}

export interface FolderItemsFileConnectionWhere {
  AND?: InputMaybe<Array<FolderItemsFileConnectionWhere>>;
  OR?: InputMaybe<Array<FolderItemsFileConnectionWhere>>;
  node?: InputMaybe<FileWhere>;
  node_NOT?: InputMaybe<FileWhere>;
}

export interface FolderItemsFileCreateFieldInput {
  node: FileCreateInput;
}

export interface FolderItemsFileDeleteFieldInput {
  delete?: InputMaybe<FileDeleteInput>;
  where?: InputMaybe<FolderItemsFileConnectionWhere>;
}

export interface FolderItemsFileDisconnectFieldInput {
  disconnect?: InputMaybe<FileDisconnectInput>;
  where?: InputMaybe<FolderItemsFileConnectionWhere>;
}

export interface FolderItemsFileFieldInput {
  connect?: InputMaybe<Array<FolderItemsFileConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderItemsFileConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderItemsFileCreateFieldInput>>;
}

export interface FolderItemsFileUpdateConnectionInput {
  node?: InputMaybe<FileUpdateInput>;
}

export interface FolderItemsFileUpdateFieldInput {
  connect?: InputMaybe<Array<FolderItemsFileConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderItemsFileConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderItemsFileCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderItemsFileDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderItemsFileDisconnectFieldInput>>;
  update?: InputMaybe<FolderItemsFileUpdateConnectionInput>;
  where?: InputMaybe<FolderItemsFileConnectionWhere>;
}

export interface FolderItemsFolderConnectFieldInput {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  where?: InputMaybe<FolderConnectWhere>;
}

export interface FolderItemsFolderConnectOrCreateFieldInput {
  onCreate: FolderItemsFolderConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
}

export interface FolderItemsFolderConnectOrCreateFieldInputOnCreate {
  node: FolderOnCreateInput;
}

export interface FolderItemsFolderConnectionWhere {
  AND?: InputMaybe<Array<FolderItemsFolderConnectionWhere>>;
  OR?: InputMaybe<Array<FolderItemsFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
  node_NOT?: InputMaybe<FolderWhere>;
}

export interface FolderItemsFolderCreateFieldInput {
  node: FolderCreateInput;
}

export interface FolderItemsFolderDeleteFieldInput {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderItemsFolderConnectionWhere>;
}

export interface FolderItemsFolderDisconnectFieldInput {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<FolderItemsFolderConnectionWhere>;
}

export interface FolderItemsFolderFieldInput {
  connect?: InputMaybe<Array<FolderItemsFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<FolderItemsFolderConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<FolderItemsFolderCreateFieldInput>>;
}

export interface FolderItemsFolderUpdateConnectionInput {
  node?: InputMaybe<FolderUpdateInput>;
}

export interface FolderItemsFolderUpdateFieldInput {
  connect?: InputMaybe<Array<FolderItemsFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<FolderItemsFolderConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<FolderItemsFolderCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderItemsFolderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderItemsFolderDisconnectFieldInput>>;
  update?: InputMaybe<FolderItemsFolderUpdateConnectionInput>;
  where?: InputMaybe<FolderItemsFolderConnectionWhere>;
}

export interface FolderItemsUpdateInput {
  File?: InputMaybe<Array<FolderItemsFileUpdateFieldInput>>;
  Folder?: InputMaybe<Array<FolderItemsFolderUpdateFieldInput>>;
}

export interface FolderOnCreateInput {
  name: Scalars["String"];
}

export interface FolderOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more FolderSort objects to sort Folders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderSort>>;
}

export interface FolderParentAggregateInput {
  AND?: InputMaybe<Array<FolderParentAggregateInput>>;
  OR?: InputMaybe<Array<FolderParentAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<FolderParentNodeAggregationWhereInput>;
}

export interface FolderParentConnectFieldInput {
  connect?: InputMaybe<FolderConnectInput>;
  where?: InputMaybe<FolderConnectWhere>;
}

export interface FolderParentConnectOrCreateFieldInput {
  onCreate: FolderParentConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
}

export interface FolderParentConnectOrCreateFieldInputOnCreate {
  node: FolderOnCreateInput;
}

export interface FolderParentConnectionSort {
  node?: InputMaybe<FolderSort>;
}

export interface FolderParentConnectionWhere {
  AND?: InputMaybe<Array<FolderParentConnectionWhere>>;
  OR?: InputMaybe<Array<FolderParentConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
  node_NOT?: InputMaybe<FolderWhere>;
}

export interface FolderParentCreateFieldInput {
  node: FolderCreateInput;
}

export interface FolderParentDeleteFieldInput {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
}

export interface FolderParentDisconnectFieldInput {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
}

export interface FolderParentFieldInput {
  connect?: InputMaybe<FolderParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderParentConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderParentCreateFieldInput>;
}

export interface FolderParentNodeAggregationWhereInput {
  AND?: InputMaybe<Array<FolderParentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FolderParentNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface FolderParentUpdateConnectionInput {
  node?: InputMaybe<FolderUpdateInput>;
}

export interface FolderParentUpdateFieldInput {
  connect?: InputMaybe<FolderParentConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderParentConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderParentCreateFieldInput>;
  delete?: InputMaybe<FolderParentDeleteFieldInput>;
  disconnect?: InputMaybe<FolderParentDisconnectFieldInput>;
  update?: InputMaybe<FolderParentUpdateConnectionInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
}

export interface FolderRelationInput {
  items?: InputMaybe<FolderItemsCreateFieldInput>;
  parent?: InputMaybe<FolderParentCreateFieldInput>;
}

/** Fields to sort Folders by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderSort object. */
export interface FolderSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface FolderUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface FolderUpdateInput {
  items?: InputMaybe<FolderItemsUpdateInput>;
  name?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<FolderParentUpdateFieldInput>;
}

export interface FolderWhere {
  AND?: InputMaybe<Array<FolderWhere>>;
  OR?: InputMaybe<Array<FolderWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  itemsConnection_ALL?: InputMaybe<FolderItemsConnectionWhere>;
  itemsConnection_NONE?: InputMaybe<FolderItemsConnectionWhere>;
  itemsConnection_SINGLE?: InputMaybe<FolderItemsConnectionWhere>;
  itemsConnection_SOME?: InputMaybe<FolderItemsConnectionWhere>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<FolderWhere>;
  parentAggregate?: InputMaybe<FolderParentAggregateInput>;
  parentConnection?: InputMaybe<FolderParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<FolderParentConnectionWhere>;
  parent_NOT?: InputMaybe<FolderWhere>;
}

export interface HiveApplianceConfigurationApplianceAggregateInput {
  AND?: InputMaybe<Array<HiveApplianceConfigurationApplianceAggregateInput>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationApplianceAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveApplianceConfigurationApplianceNodeAggregationWhereInput>;
}

export interface HiveApplianceConfigurationApplianceConnectFieldInput {
  connect?: InputMaybe<HiveApplianceConnectInput>;
  where?: InputMaybe<HiveApplianceConnectWhere>;
}

export interface HiveApplianceConfigurationApplianceConnectOrCreateFieldInput {
  onCreate: HiveApplianceConfigurationApplianceConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveApplianceConfigurationApplianceConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceOnCreateInput;
}

export interface HiveApplianceConfigurationApplianceConnectionSort {
  node?: InputMaybe<HiveApplianceSort>;
}

export interface HiveApplianceConfigurationApplianceConnectionWhere {
  AND?: InputMaybe<Array<HiveApplianceConfigurationApplianceConnectionWhere>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationApplianceConnectionWhere>>;
  node?: InputMaybe<HiveApplianceWhere>;
  node_NOT?: InputMaybe<HiveApplianceWhere>;
}

export interface HiveApplianceConfigurationApplianceCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveApplianceConfigurationApplianceDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceDeleteInput>;
  where?: InputMaybe<HiveApplianceConfigurationApplianceConnectionWhere>;
}

export interface HiveApplianceConfigurationApplianceDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceDisconnectInput>;
  where?: InputMaybe<HiveApplianceConfigurationApplianceConnectionWhere>;
}

export interface HiveApplianceConfigurationApplianceFieldInput {
  connect?: InputMaybe<HiveApplianceConfigurationApplianceConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveApplianceConfigurationApplianceConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveApplianceConfigurationApplianceCreateFieldInput>;
}

export interface HiveApplianceConfigurationApplianceNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveApplianceConfigurationApplianceNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveApplianceConfigurationApplianceNodeAggregationWhereInput>
  >;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  label_EQUAL?: InputMaybe<Scalars["String"]>;
  label_GT?: InputMaybe<Scalars["Int"]>;
  label_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  label_LT?: InputMaybe<Scalars["Int"]>;
  label_LTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveApplianceConfigurationApplianceUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceUpdateInput>;
}

export interface HiveApplianceConfigurationApplianceUpdateFieldInput {
  connect?: InputMaybe<HiveApplianceConfigurationApplianceConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveApplianceConfigurationApplianceConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveApplianceConfigurationApplianceCreateFieldInput>;
  delete?: InputMaybe<HiveApplianceConfigurationApplianceDeleteFieldInput>;
  disconnect?: InputMaybe<HiveApplianceConfigurationApplianceDisconnectFieldInput>;
  update?: InputMaybe<HiveApplianceConfigurationApplianceUpdateConnectionInput>;
  where?: InputMaybe<HiveApplianceConfigurationApplianceConnectionWhere>;
}

export interface HiveApplianceConfigurationConnectInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceConnectFieldInput>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationConnectFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectFieldInput>
  >;
}

export interface HiveApplianceConfigurationConnectOrCreateInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceConnectOrCreateFieldInput>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput>
  >;
}

export interface HiveApplianceConfigurationConnectOrCreateWhere {
  node: HiveApplianceConfigurationUniqueWhere;
}

export interface HiveApplianceConfigurationConnectWhere {
  node: HiveApplianceConfigurationWhere;
}

export interface HiveApplianceConfigurationCreateInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceFieldInput>;
  key?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationFieldInput>;
  permissions?: InputMaybe<HiveApplianceConfigurationPermissionsFieldInput>;
}

export interface HiveApplianceConfigurationDeleteInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceDeleteFieldInput>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationDeleteFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsDeleteFieldInput>
  >;
}

export interface HiveApplianceConfigurationDisconnectInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceDisconnectFieldInput>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationDisconnectFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsDisconnectFieldInput>
  >;
}

export interface HiveApplianceConfigurationOnCreateInput {
  key?: InputMaybe<Scalars["String"]>;
}

export interface HiveApplianceConfigurationOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveApplianceConfigurationSort objects to sort HiveApplianceConfigurations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveApplianceConfigurationSort>>;
}

export interface HiveApplianceConfigurationOrganisationAggregateInput {
  AND?: InputMaybe<Array<HiveApplianceConfigurationOrganisationAggregateInput>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationOrganisationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveApplianceConfigurationOrganisationNodeAggregationWhereInput>;
}

export interface HiveApplianceConfigurationOrganisationConnectFieldInput {
  connect?: InputMaybe<HiveOrganisationConnectInput>;
  where?: InputMaybe<HiveOrganisationConnectWhere>;
}

export interface HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput {
  onCreate: HiveApplianceConfigurationOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface HiveApplianceConfigurationOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationOnCreateInput;
}

export interface HiveApplianceConfigurationOrganisationConnectionSort {
  node?: InputMaybe<HiveOrganisationSort>;
}

export interface HiveApplianceConfigurationOrganisationConnectionWhere {
  AND?: InputMaybe<
    Array<HiveApplianceConfigurationOrganisationConnectionWhere>
  >;
  OR?: InputMaybe<Array<HiveApplianceConfigurationOrganisationConnectionWhere>>;
  node?: InputMaybe<HiveOrganisationWhere>;
  node_NOT?: InputMaybe<HiveOrganisationWhere>;
}

export interface HiveApplianceConfigurationOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveApplianceConfigurationOrganisationDeleteFieldInput {
  delete?: InputMaybe<HiveOrganisationDeleteInput>;
  where?: InputMaybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
}

export interface HiveApplianceConfigurationOrganisationDisconnectFieldInput {
  disconnect?: InputMaybe<HiveOrganisationDisconnectInput>;
  where?: InputMaybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
}

export interface HiveApplianceConfigurationOrganisationFieldInput {
  connect?: InputMaybe<HiveApplianceConfigurationOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveApplianceConfigurationOrganisationCreateFieldInput>;
}

export interface HiveApplianceConfigurationOrganisationNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveApplianceConfigurationOrganisationNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveApplianceConfigurationOrganisationNodeAggregationWhereInput>
  >;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveApplianceConfigurationOrganisationUpdateConnectionInput {
  node?: InputMaybe<HiveOrganisationUpdateInput>;
}

export interface HiveApplianceConfigurationOrganisationUpdateFieldInput {
  connect?: InputMaybe<HiveApplianceConfigurationOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveApplianceConfigurationOrganisationCreateFieldInput>;
  delete?: InputMaybe<HiveApplianceConfigurationOrganisationDeleteFieldInput>;
  disconnect?: InputMaybe<HiveApplianceConfigurationOrganisationDisconnectFieldInput>;
  update?: InputMaybe<HiveApplianceConfigurationOrganisationUpdateConnectionInput>;
  where?: InputMaybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
}

export interface HiveApplianceConfigurationPermissionsAggregateInput {
  AND?: InputMaybe<Array<HiveApplianceConfigurationPermissionsAggregateInput>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationPermissionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveApplianceConfigurationPermissionsNodeAggregationWhereInput>;
}

export interface HiveApplianceConfigurationPermissionsConnectFieldInput {
  connect?: InputMaybe<Array<HiveTypePermissionConnectInput>>;
  where?: InputMaybe<HiveTypePermissionConnectWhere>;
}

export interface HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput {
  onCreate: HiveApplianceConfigurationPermissionsConnectOrCreateFieldInputOnCreate;
  where: HiveTypePermissionConnectOrCreateWhere;
}

export interface HiveApplianceConfigurationPermissionsConnectOrCreateFieldInputOnCreate {
  node: HiveTypePermissionOnCreateInput;
}

export interface HiveApplianceConfigurationPermissionsConnectionSort {
  node?: InputMaybe<HiveTypePermissionSort>;
}

export interface HiveApplianceConfigurationPermissionsConnectionWhere {
  AND?: InputMaybe<Array<HiveApplianceConfigurationPermissionsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationPermissionsConnectionWhere>>;
  node?: InputMaybe<HiveTypePermissionWhere>;
  node_NOT?: InputMaybe<HiveTypePermissionWhere>;
}

export interface HiveApplianceConfigurationPermissionsCreateFieldInput {
  node: HiveTypePermissionCreateInput;
}

export interface HiveApplianceConfigurationPermissionsDeleteFieldInput {
  delete?: InputMaybe<HiveTypePermissionDeleteInput>;
  where?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
}

export interface HiveApplianceConfigurationPermissionsDisconnectFieldInput {
  disconnect?: InputMaybe<HiveTypePermissionDisconnectInput>;
  where?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
}

export interface HiveApplianceConfigurationPermissionsFieldInput {
  connect?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsCreateFieldInput>
  >;
}

export interface HiveApplianceConfigurationPermissionsNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsNodeAggregationWhereInput>
  >;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveApplianceConfigurationPermissionsUpdateConnectionInput {
  node?: InputMaybe<HiveTypePermissionUpdateInput>;
}

export interface HiveApplianceConfigurationPermissionsUpdateFieldInput {
  connect?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveApplianceConfigurationPermissionsUpdateConnectionInput>;
  where?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
}

export interface HiveApplianceConfigurationRelationInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceCreateFieldInput>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationCreateFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsCreateFieldInput>
  >;
}

/** Fields to sort HiveApplianceConfigurations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveApplianceConfigurationSort object. */
export interface HiveApplianceConfigurationSort {
  id?: InputMaybe<SortDirection>;
  key?: InputMaybe<SortDirection>;
}

export interface HiveApplianceConfigurationUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveApplianceConfigurationUpdateInput {
  appliance?: InputMaybe<HiveApplianceConfigurationApplianceUpdateFieldInput>;
  key?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveApplianceConfigurationOrganisationUpdateFieldInput>;
  permissions?: InputMaybe<
    Array<HiveApplianceConfigurationPermissionsUpdateFieldInput>
  >;
}

export interface HiveApplianceConfigurationWhere {
  AND?: InputMaybe<Array<HiveApplianceConfigurationWhere>>;
  OR?: InputMaybe<Array<HiveApplianceConfigurationWhere>>;
  appliance?: InputMaybe<HiveApplianceWhere>;
  applianceAggregate?: InputMaybe<HiveApplianceConfigurationApplianceAggregateInput>;
  applianceConnection?: InputMaybe<HiveApplianceConfigurationApplianceConnectionWhere>;
  applianceConnection_NOT?: InputMaybe<HiveApplianceConfigurationApplianceConnectionWhere>;
  appliance_NOT?: InputMaybe<HiveApplianceWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  key?: InputMaybe<Scalars["String"]>;
  key_CONTAINS?: InputMaybe<Scalars["String"]>;
  key_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  key_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  key_NOT?: InputMaybe<Scalars["String"]>;
  key_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  key_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  key_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  key_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  key_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveOrganisationWhere>;
  organisationAggregate?: InputMaybe<HiveApplianceConfigurationOrganisationAggregateInput>;
  organisationConnection?: InputMaybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
  organisationConnection_NOT?: InputMaybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
  organisation_NOT?: InputMaybe<HiveOrganisationWhere>;
  permissionsAggregate?: InputMaybe<HiveApplianceConfigurationPermissionsAggregateInput>;
  permissionsConnection_ALL?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
  permissionsConnection_NONE?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
  permissionsConnection_SINGLE?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
  permissionsConnection_SOME?: InputMaybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
  /** Return HiveApplianceConfigurations where all of the related HiveTypePermissions match this filter */
  permissions_ALL?: InputMaybe<HiveTypePermissionWhere>;
  /** Return HiveApplianceConfigurations where none of the related HiveTypePermissions match this filter */
  permissions_NONE?: InputMaybe<HiveTypePermissionWhere>;
  /** Return HiveApplianceConfigurations where one of the related HiveTypePermissions match this filter */
  permissions_SINGLE?: InputMaybe<HiveTypePermissionWhere>;
  /** Return HiveApplianceConfigurations where some of the related HiveTypePermissions match this filter */
  permissions_SOME?: InputMaybe<HiveTypePermissionWhere>;
}

export interface HiveApplianceConnectInput {
  permissions?: InputMaybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  services?: InputMaybe<Array<HiveApplianceServicesConnectFieldInput>>;
  types?: InputMaybe<Array<HiveApplianceTypesConnectFieldInput>>;
}

export interface HiveApplianceConnectOrCreateInput {
  permissions?: InputMaybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
  types?: InputMaybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
}

export interface HiveApplianceConnectOrCreateWhere {
  node: HiveApplianceUniqueWhere;
}

export interface HiveApplianceConnectWhere {
  node: HiveApplianceWhere;
}

export interface HiveApplianceCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  label?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<HiveAppliancePermissionsFieldInput>;
  services?: InputMaybe<HiveApplianceServicesFieldInput>;
  types?: InputMaybe<HiveApplianceTypesFieldInput>;
}

export interface HiveApplianceDeleteInput {
  permissions?: InputMaybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  services?: InputMaybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  types?: InputMaybe<Array<HiveApplianceTypesDeleteFieldInput>>;
}

export interface HiveApplianceDisconnectInput {
  permissions?: InputMaybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  services?: InputMaybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  types?: InputMaybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
}

export interface HiveApplianceOnCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  label?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
}

export interface HiveApplianceOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveApplianceSort objects to sort HiveAppliances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveApplianceSort>>;
}

export interface HiveAppliancePermissionsAggregateInput {
  AND?: InputMaybe<Array<HiveAppliancePermissionsAggregateInput>>;
  OR?: InputMaybe<Array<HiveAppliancePermissionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveAppliancePermissionsNodeAggregationWhereInput>;
}

export interface HiveAppliancePermissionsConnectFieldInput {
  connect?: InputMaybe<Array<PermissionConnectInput>>;
  where?: InputMaybe<PermissionConnectWhere>;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInput {
  onCreate: HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate;
  where: PermissionConnectOrCreateWhere;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionOnCreateInput;
}

export interface HiveAppliancePermissionsConnectionSort {
  node?: InputMaybe<PermissionSort>;
}

export interface HiveAppliancePermissionsConnectionWhere {
  AND?: InputMaybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  node?: InputMaybe<PermissionWhere>;
  node_NOT?: InputMaybe<PermissionWhere>;
}

export interface HiveAppliancePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface HiveAppliancePermissionsDeleteFieldInput {
  delete?: InputMaybe<PermissionDeleteInput>;
  where?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsDisconnectFieldInput {
  disconnect?: InputMaybe<PermissionDisconnectInput>;
  where?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsFieldInput {
  connect?: InputMaybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
}

export interface HiveAppliancePermissionsNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  action_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  action_EQUAL?: InputMaybe<Scalars["String"]>;
  action_GT?: InputMaybe<Scalars["Int"]>;
  action_GTE?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  action_LT?: InputMaybe<Scalars["Int"]>;
  action_LTE?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  scope_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  scope_EQUAL?: InputMaybe<Scalars["String"]>;
  scope_GT?: InputMaybe<Scalars["Int"]>;
  scope_GTE?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  scope_LT?: InputMaybe<Scalars["Int"]>;
  scope_LTE?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveAppliancePermissionsUpdateConnectionInput {
  node?: InputMaybe<PermissionUpdateInput>;
}

export interface HiveAppliancePermissionsUpdateFieldInput {
  connect?: InputMaybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  update?: InputMaybe<HiveAppliancePermissionsUpdateConnectionInput>;
  where?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveApplianceRelationInput {
  permissions?: InputMaybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  services?: InputMaybe<Array<HiveApplianceServicesCreateFieldInput>>;
  types?: InputMaybe<Array<HiveApplianceTypesCreateFieldInput>>;
}

export interface HiveApplianceServicesAggregateInput {
  AND?: InputMaybe<Array<HiveApplianceServicesAggregateInput>>;
  OR?: InputMaybe<Array<HiveApplianceServicesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveApplianceServicesNodeAggregationWhereInput>;
}

export interface HiveApplianceServicesConnectFieldInput {
  where?: InputMaybe<HiveServiceConnectWhere>;
}

export interface HiveApplianceServicesConnectionSort {
  node?: InputMaybe<HiveServiceSort>;
}

export interface HiveApplianceServicesConnectionWhere {
  AND?: InputMaybe<Array<HiveApplianceServicesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveApplianceServicesConnectionWhere>>;
  node?: InputMaybe<HiveServiceWhere>;
  node_NOT?: InputMaybe<HiveServiceWhere>;
}

export interface HiveApplianceServicesCreateFieldInput {
  node: HiveServiceCreateInput;
}

export interface HiveApplianceServicesDeleteFieldInput {
  where?: InputMaybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesDisconnectFieldInput {
  where?: InputMaybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesFieldInput {
  connect?: InputMaybe<Array<HiveApplianceServicesConnectFieldInput>>;
  create?: InputMaybe<Array<HiveApplianceServicesCreateFieldInput>>;
}

export interface HiveApplianceServicesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveApplianceServicesUpdateConnectionInput {
  node?: InputMaybe<HiveServiceUpdateInput>;
}

export interface HiveApplianceServicesUpdateFieldInput {
  connect?: InputMaybe<Array<HiveApplianceServicesConnectFieldInput>>;
  create?: InputMaybe<Array<HiveApplianceServicesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  update?: InputMaybe<HiveApplianceServicesUpdateConnectionInput>;
  where?: InputMaybe<HiveApplianceServicesConnectionWhere>;
}

/** Fields to sort HiveAppliances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveApplianceSort object. */
export interface HiveApplianceSort {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  label?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveApplianceTypesAggregateInput {
  AND?: InputMaybe<Array<HiveApplianceTypesAggregateInput>>;
  OR?: InputMaybe<Array<HiveApplianceTypesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveApplianceTypesNodeAggregationWhereInput>;
}

export interface HiveApplianceTypesConnectFieldInput {
  connect?: InputMaybe<Array<HiveTypeConnectInput>>;
  where?: InputMaybe<HiveTypeConnectWhere>;
}

export interface HiveApplianceTypesConnectOrCreateFieldInput {
  onCreate: HiveApplianceTypesConnectOrCreateFieldInputOnCreate;
  where: HiveTypeConnectOrCreateWhere;
}

export interface HiveApplianceTypesConnectOrCreateFieldInputOnCreate {
  node: HiveTypeOnCreateInput;
}

export interface HiveApplianceTypesConnectionSort {
  node?: InputMaybe<HiveTypeSort>;
}

export interface HiveApplianceTypesConnectionWhere {
  AND?: InputMaybe<Array<HiveApplianceTypesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveApplianceTypesConnectionWhere>>;
  node?: InputMaybe<HiveTypeWhere>;
  node_NOT?: InputMaybe<HiveTypeWhere>;
}

export interface HiveApplianceTypesCreateFieldInput {
  node: HiveTypeCreateInput;
}

export interface HiveApplianceTypesDeleteFieldInput {
  delete?: InputMaybe<HiveTypeDeleteInput>;
  where?: InputMaybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceTypesDisconnectFieldInput {
  disconnect?: InputMaybe<HiveTypeDisconnectInput>;
  where?: InputMaybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceTypesFieldInput {
  connect?: InputMaybe<Array<HiveApplianceTypesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveApplianceTypesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveApplianceTypesCreateFieldInput>>;
}

export interface HiveApplianceTypesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveApplianceTypesUpdateConnectionInput {
  node?: InputMaybe<HiveTypeUpdateInput>;
}

export interface HiveApplianceTypesUpdateFieldInput {
  connect?: InputMaybe<Array<HiveApplianceTypesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveApplianceTypesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveApplianceTypesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveApplianceTypesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
  update?: InputMaybe<HiveApplianceTypesUpdateConnectionInput>;
  where?: InputMaybe<HiveApplianceTypesConnectionWhere>;
}

export interface HiveApplianceUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveApplianceUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  label?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<HiveAppliancePermissionsUpdateFieldInput>>;
  services?: InputMaybe<Array<HiveApplianceServicesUpdateFieldInput>>;
  types?: InputMaybe<Array<HiveApplianceTypesUpdateFieldInput>>;
}

export interface HiveApplianceWhere {
  AND?: InputMaybe<Array<HiveApplianceWhere>>;
  OR?: InputMaybe<Array<HiveApplianceWhere>>;
  description?: InputMaybe<Scalars["String"]>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  label?: InputMaybe<Scalars["String"]>;
  label_CONTAINS?: InputMaybe<Scalars["String"]>;
  label_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  label_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  label_NOT?: InputMaybe<Scalars["String"]>;
  label_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  label_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  label_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  label_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  label_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  permissionsAggregate?: InputMaybe<HiveAppliancePermissionsAggregateInput>;
  permissionsConnection_ALL?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_NONE?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_SINGLE?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_SOME?: InputMaybe<HiveAppliancePermissionsConnectionWhere>;
  /** Return HiveAppliances where all of the related Permissions match this filter */
  permissions_ALL?: InputMaybe<PermissionWhere>;
  /** Return HiveAppliances where none of the related Permissions match this filter */
  permissions_NONE?: InputMaybe<PermissionWhere>;
  /** Return HiveAppliances where one of the related Permissions match this filter */
  permissions_SINGLE?: InputMaybe<PermissionWhere>;
  /** Return HiveAppliances where some of the related Permissions match this filter */
  permissions_SOME?: InputMaybe<PermissionWhere>;
  servicesAggregate?: InputMaybe<HiveApplianceServicesAggregateInput>;
  servicesConnection_ALL?: InputMaybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_NONE?: InputMaybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_SINGLE?: InputMaybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_SOME?: InputMaybe<HiveApplianceServicesConnectionWhere>;
  /** Return HiveAppliances where all of the related HiveServices match this filter */
  services_ALL?: InputMaybe<HiveServiceWhere>;
  /** Return HiveAppliances where none of the related HiveServices match this filter */
  services_NONE?: InputMaybe<HiveServiceWhere>;
  /** Return HiveAppliances where one of the related HiveServices match this filter */
  services_SINGLE?: InputMaybe<HiveServiceWhere>;
  /** Return HiveAppliances where some of the related HiveServices match this filter */
  services_SOME?: InputMaybe<HiveServiceWhere>;
  typesAggregate?: InputMaybe<HiveApplianceTypesAggregateInput>;
  typesConnection_ALL?: InputMaybe<HiveApplianceTypesConnectionWhere>;
  typesConnection_NONE?: InputMaybe<HiveApplianceTypesConnectionWhere>;
  typesConnection_SINGLE?: InputMaybe<HiveApplianceTypesConnectionWhere>;
  typesConnection_SOME?: InputMaybe<HiveApplianceTypesConnectionWhere>;
  /** Return HiveAppliances where all of the related HiveTypes match this filter */
  types_ALL?: InputMaybe<HiveTypeWhere>;
  /** Return HiveAppliances where none of the related HiveTypes match this filter */
  types_NONE?: InputMaybe<HiveTypeWhere>;
  /** Return HiveAppliances where one of the related HiveTypes match this filter */
  types_SINGLE?: InputMaybe<HiveTypeWhere>;
  /** Return HiveAppliances where some of the related HiveTypes match this filter */
  types_SOME?: InputMaybe<HiveTypeWhere>;
}

export interface HiveIntegrationConnectOrCreateWhere {
  node: HiveIntegrationUniqueWhere;
}

export interface HiveIntegrationConnectWhere {
  node: HiveIntegrationWhere;
}

export interface HiveIntegrationCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationInstanceAppliancesAggregateInput {
  AND?: InputMaybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceAppliancesConnectFieldInput {
  connect?: InputMaybe<Array<HiveApplianceConnectInput>>;
  where?: InputMaybe<HiveApplianceConnectWhere>;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceOnCreateInput;
}

export interface HiveIntegrationInstanceAppliancesConnectionSort {
  node?: InputMaybe<HiveApplianceSort>;
}

export interface HiveIntegrationInstanceAppliancesConnectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  node?: InputMaybe<HiveApplianceWhere>;
  node_NOT?: InputMaybe<HiveApplianceWhere>;
}

export interface HiveIntegrationInstanceAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveIntegrationInstanceAppliancesDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceDeleteInput>;
  where?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceAppliancesDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceDisconnectInput>;
  where?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceAppliancesFieldInput {
  connect?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
}

export interface HiveIntegrationInstanceAppliancesNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>
  >;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  label_EQUAL?: InputMaybe<Scalars["String"]>;
  label_GT?: InputMaybe<Scalars["Int"]>;
  label_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  label_LT?: InputMaybe<Scalars["Int"]>;
  label_LTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceAppliancesUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceUpdateInput>;
}

export interface HiveIntegrationInstanceAppliancesUpdateFieldInput {
  connect?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveIntegrationInstanceAppliancesUpdateConnectionInput>;
  where?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectFieldInput>
  >;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
}

export interface HiveIntegrationInstanceConnectOrCreateInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceConnectOrCreateWhere {
  node: HiveIntegrationInstanceUniqueWhere;
}

export interface HiveIntegrationInstanceConnectWhere {
  node: HiveIntegrationInstanceWhere;
}

export interface HiveIntegrationInstanceConnectionsAggregateInput {
  AND?: InputMaybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceConnectionsConnectFieldInput {
  connect?: InputMaybe<Array<HiveIntegrationPathConnectInput>>;
  where?: InputMaybe<HiveIntegrationPathConnectWhere>;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationPathConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationPathOnCreateInput;
}

export interface HiveIntegrationInstanceConnectionsConnectionSort {
  node?: InputMaybe<HiveIntegrationPathSort>;
}

export interface HiveIntegrationInstanceConnectionsConnectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  node?: InputMaybe<HiveIntegrationPathWhere>;
  node_NOT?: InputMaybe<HiveIntegrationPathWhere>;
}

export interface HiveIntegrationInstanceConnectionsCreateFieldInput {
  node: HiveIntegrationPathCreateInput;
}

export interface HiveIntegrationInstanceConnectionsDeleteFieldInput {
  delete?: InputMaybe<HiveIntegrationPathDeleteInput>;
  where?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectionsDisconnectFieldInput {
  disconnect?: InputMaybe<HiveIntegrationPathDisconnectInput>;
  where?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceConnectionsFieldInput {
  connect?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsCreateFieldInput>
  >;
}

export interface HiveIntegrationInstanceConnectionsNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  connectionBlob_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  connectionBlob_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  connectionBlob_EQUAL?: InputMaybe<Scalars["String"]>;
  connectionBlob_GT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_GTE?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_LTE?: InputMaybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceConnectionsUpdateConnectionInput {
  node?: InputMaybe<HiveIntegrationPathUpdateInput>;
}

export interface HiveIntegrationInstanceConnectionsUpdateFieldInput {
  connect?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectFieldInput>
  >;
  connectOrCreate?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsCreateFieldInput>
  >;
  delete?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveIntegrationInstanceConnectionsUpdateConnectionInput>;
  where?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
}

export interface HiveIntegrationInstanceCreateInput {
  appliances?: InputMaybe<HiveIntegrationInstanceAppliancesFieldInput>;
  config?: InputMaybe<Scalars["String"]>;
  connections?: InputMaybe<HiveIntegrationInstanceConnectionsFieldInput>;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationFieldInput>;
  isRunning?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationFieldInput>;
}

export interface HiveIntegrationInstanceDeleteInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>
  >;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
}

export interface HiveIntegrationInstanceDisconnectInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationAggregateInput {
  AND?: InputMaybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceIntegrationConnectFieldInput {
  where?: InputMaybe<HiveIntegrationConnectWhere>;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationOnCreateInput;
}

export interface HiveIntegrationInstanceIntegrationConnectionSort {
  node?: InputMaybe<HiveIntegrationSort>;
}

export interface HiveIntegrationInstanceIntegrationConnectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  node?: InputMaybe<HiveIntegrationWhere>;
  node_NOT?: InputMaybe<HiveIntegrationWhere>;
}

export interface HiveIntegrationInstanceIntegrationCreateFieldInput {
  node: HiveIntegrationCreateInput;
}

export interface HiveIntegrationInstanceIntegrationDeleteFieldInput {
  where?: InputMaybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationDisconnectFieldInput {
  where?: InputMaybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationFieldInput {
  connect?: InputMaybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceIntegrationUpdateConnectionInput {
  node?: InputMaybe<HiveIntegrationUpdateInput>;
}

export interface HiveIntegrationInstanceIntegrationUpdateFieldInput {
  connect?: InputMaybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  delete?: InputMaybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  disconnect?: InputMaybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  update?: InputMaybe<HiveIntegrationInstanceIntegrationUpdateConnectionInput>;
  where?: InputMaybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceOnCreateInput {
  config?: InputMaybe<Scalars["String"]>;
  isRunning?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationInstanceOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationInstanceSort objects to sort HiveIntegrationInstances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveIntegrationInstanceSort>>;
}

export interface HiveIntegrationInstanceOrganisationAggregateInput {
  AND?: InputMaybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceOrganisationConnectFieldInput {
  connect?: InputMaybe<HiveOrganisationConnectInput>;
  where?: InputMaybe<HiveOrganisationConnectWhere>;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput {
  onCreate: HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationOnCreateInput;
}

export interface HiveIntegrationInstanceOrganisationConnectionSort {
  node?: InputMaybe<HiveOrganisationSort>;
}

export interface HiveIntegrationInstanceOrganisationConnectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  node?: InputMaybe<HiveOrganisationWhere>;
  node_NOT?: InputMaybe<HiveOrganisationWhere>;
}

export interface HiveIntegrationInstanceOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveIntegrationInstanceOrganisationDeleteFieldInput {
  delete?: InputMaybe<HiveOrganisationDeleteInput>;
  where?: InputMaybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceOrganisationDisconnectFieldInput {
  disconnect?: InputMaybe<HiveOrganisationDisconnectInput>;
  where?: InputMaybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceOrganisationFieldInput {
  connect?: InputMaybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
}

export interface HiveIntegrationInstanceOrganisationNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceOrganisationUpdateConnectionInput {
  node?: InputMaybe<HiveOrganisationUpdateInput>;
}

export interface HiveIntegrationInstanceOrganisationUpdateFieldInput {
  connect?: InputMaybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
  delete?: InputMaybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
  disconnect?: InputMaybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
  update?: InputMaybe<HiveIntegrationInstanceOrganisationUpdateConnectionInput>;
  where?: InputMaybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationInstanceRelationInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesCreateFieldInput>
  >;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsCreateFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
}

/** Fields to sort HiveIntegrationInstances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationInstanceSort object. */
export interface HiveIntegrationInstanceSort {
  config?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  isRunning?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveIntegrationInstanceUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveIntegrationInstanceUpdateInput {
  appliances?: InputMaybe<
    Array<HiveIntegrationInstanceAppliancesUpdateFieldInput>
  >;
  config?: InputMaybe<Scalars["String"]>;
  connections?: InputMaybe<
    Array<HiveIntegrationInstanceConnectionsUpdateFieldInput>
  >;
  integration?: InputMaybe<HiveIntegrationInstanceIntegrationUpdateFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveIntegrationInstanceOrganisationUpdateFieldInput>;
}

export interface HiveIntegrationInstanceWhere {
  AND?: InputMaybe<Array<HiveIntegrationInstanceWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationInstanceWhere>>;
  appliancesAggregate?: InputMaybe<HiveIntegrationInstanceAppliancesAggregateInput>;
  appliancesConnection_ALL?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliancesConnection_NONE?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliancesConnection_SINGLE?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliancesConnection_SOME?: InputMaybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  /** Return HiveIntegrationInstances where all of the related HiveAppliances match this filter */
  appliances_ALL?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveIntegrationInstances where none of the related HiveAppliances match this filter */
  appliances_NONE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveIntegrationInstances where one of the related HiveAppliances match this filter */
  appliances_SINGLE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveIntegrationInstances where some of the related HiveAppliances match this filter */
  appliances_SOME?: InputMaybe<HiveApplianceWhere>;
  config?: InputMaybe<Scalars["String"]>;
  config_CONTAINS?: InputMaybe<Scalars["String"]>;
  config_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  config_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  config_NOT?: InputMaybe<Scalars["String"]>;
  config_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  config_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  config_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  config_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  config_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  connectionsAggregate?: InputMaybe<HiveIntegrationInstanceConnectionsAggregateInput>;
  connectionsConnection_ALL?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connectionsConnection_NONE?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connectionsConnection_SINGLE?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connectionsConnection_SOME?: InputMaybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  /** Return HiveIntegrationInstances where all of the related HiveIntegrationPaths match this filter */
  connections_ALL?: InputMaybe<HiveIntegrationPathWhere>;
  /** Return HiveIntegrationInstances where none of the related HiveIntegrationPaths match this filter */
  connections_NONE?: InputMaybe<HiveIntegrationPathWhere>;
  /** Return HiveIntegrationInstances where one of the related HiveIntegrationPaths match this filter */
  connections_SINGLE?: InputMaybe<HiveIntegrationPathWhere>;
  /** Return HiveIntegrationInstances where some of the related HiveIntegrationPaths match this filter */
  connections_SOME?: InputMaybe<HiveIntegrationPathWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  integration?: InputMaybe<HiveIntegrationWhere>;
  integrationAggregate?: InputMaybe<HiveIntegrationInstanceIntegrationAggregateInput>;
  integrationConnection?: InputMaybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  integrationConnection_NOT?: InputMaybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  integration_NOT?: InputMaybe<HiveIntegrationWhere>;
  isRunning?: InputMaybe<Scalars["Boolean"]>;
  isRunning_NOT?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveOrganisationWhere>;
  organisationAggregate?: InputMaybe<HiveIntegrationInstanceOrganisationAggregateInput>;
  organisationConnection?: InputMaybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  organisationConnection_NOT?: InputMaybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  organisation_NOT?: InputMaybe<HiveOrganisationWhere>;
}

export interface HiveIntegrationOnCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationSort objects to sort HiveIntegrations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveIntegrationSort>>;
}

export interface HiveIntegrationPathCollectionCreateInput {
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationPathCollectionSort objects to sort HiveIntegrationPathCollections by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveIntegrationPathCollectionSort>>;
}

/** Fields to sort HiveIntegrationPathCollections by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathCollectionSort object. */
export interface HiveIntegrationPathCollectionSort {
  name?: InputMaybe<SortDirection>;
}

export interface HiveIntegrationPathCollectionUpdateInput {
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationPathCollectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationPathCollectionWhere>>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathConnectInput {
  instance?: InputMaybe<HiveIntegrationPathInstanceConnectFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateInput {
  instance?: InputMaybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateWhere {
  node: HiveIntegrationPathUniqueWhere;
}

export interface HiveIntegrationPathConnectWhere {
  node: HiveIntegrationPathWhere;
}

export interface HiveIntegrationPathCreateInput {
  connectionBlob?: InputMaybe<Scalars["String"]>;
  instance?: InputMaybe<HiveIntegrationPathInstanceFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathDeleteInput {
  instance?: InputMaybe<HiveIntegrationPathInstanceDeleteFieldInput>;
}

export interface HiveIntegrationPathDisconnectInput {
  instance?: InputMaybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
}

export interface HiveIntegrationPathInstanceAggregateInput {
  AND?: InputMaybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  OR?: InputMaybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveIntegrationPathInstanceNodeAggregationWhereInput>;
}

export interface HiveIntegrationPathInstanceConnectFieldInput {
  connect?: InputMaybe<HiveIntegrationInstanceConnectInput>;
  where?: InputMaybe<HiveIntegrationInstanceConnectWhere>;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInput {
  onCreate: HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationInstanceConnectOrCreateWhere;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceOnCreateInput;
}

export interface HiveIntegrationPathInstanceConnectionSort {
  node?: InputMaybe<HiveIntegrationInstanceSort>;
}

export interface HiveIntegrationPathInstanceConnectionWhere {
  AND?: InputMaybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  node?: InputMaybe<HiveIntegrationInstanceWhere>;
  node_NOT?: InputMaybe<HiveIntegrationInstanceWhere>;
}

export interface HiveIntegrationPathInstanceCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveIntegrationPathInstanceDeleteFieldInput {
  delete?: InputMaybe<HiveIntegrationInstanceDeleteInput>;
  where?: InputMaybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathInstanceDisconnectFieldInput {
  disconnect?: InputMaybe<HiveIntegrationInstanceDisconnectInput>;
  where?: InputMaybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathInstanceFieldInput {
  connect?: InputMaybe<HiveIntegrationPathInstanceConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationPathInstanceCreateFieldInput>;
}

export interface HiveIntegrationPathInstanceNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  config_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  config_EQUAL?: InputMaybe<Scalars["String"]>;
  config_GT?: InputMaybe<Scalars["Int"]>;
  config_GTE?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  config_LT?: InputMaybe<Scalars["Int"]>;
  config_LTE?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveIntegrationPathInstanceUpdateConnectionInput {
  node?: InputMaybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveIntegrationPathInstanceUpdateFieldInput {
  connect?: InputMaybe<HiveIntegrationPathInstanceConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveIntegrationPathInstanceCreateFieldInput>;
  delete?: InputMaybe<HiveIntegrationPathInstanceDeleteFieldInput>;
  disconnect?: InputMaybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
  update?: InputMaybe<HiveIntegrationPathInstanceUpdateConnectionInput>;
  where?: InputMaybe<HiveIntegrationPathInstanceConnectionWhere>;
}

export interface HiveIntegrationPathOnCreateInput {
  connectionBlob?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveIntegrationPathSort objects to sort HiveIntegrationPaths by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveIntegrationPathSort>>;
}

export interface HiveIntegrationPathRelationInput {
  instance?: InputMaybe<HiveIntegrationPathInstanceCreateFieldInput>;
}

/** Fields to sort HiveIntegrationPaths by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathSort object. */
export interface HiveIntegrationPathSort {
  connectionBlob?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
}

export interface HiveIntegrationPathUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveIntegrationPathUpdateInput {
  connectionBlob?: InputMaybe<Scalars["String"]>;
  instance?: InputMaybe<HiveIntegrationPathInstanceUpdateFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationPathWhere {
  AND?: InputMaybe<Array<HiveIntegrationPathWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationPathWhere>>;
  connectionBlob?: InputMaybe<Scalars["String"]>;
  connectionBlob_CONTAINS?: InputMaybe<Scalars["String"]>;
  connectionBlob_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  connectionBlob_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  connectionBlob_NOT?: InputMaybe<Scalars["String"]>;
  connectionBlob_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  connectionBlob_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  connectionBlob_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  connectionBlob_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  connectionBlob_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  instance?: InputMaybe<HiveIntegrationInstanceWhere>;
  instanceAggregate?: InputMaybe<HiveIntegrationPathInstanceAggregateInput>;
  instanceConnection?: InputMaybe<HiveIntegrationPathInstanceConnectionWhere>;
  instanceConnection_NOT?: InputMaybe<HiveIntegrationPathInstanceConnectionWhere>;
  instance_NOT?: InputMaybe<HiveIntegrationInstanceWhere>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

/** Fields to sort HiveIntegrations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationSort object. */
export interface HiveIntegrationSort {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveIntegrationUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveIntegrationUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveIntegrationWhere {
  AND?: InputMaybe<Array<HiveIntegrationWhere>>;
  OR?: InputMaybe<Array<HiveIntegrationWhere>>;
  description?: InputMaybe<Scalars["String"]>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface HiveOrganisationAppliancesAggregateInput {
  AND?: InputMaybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  OR?: InputMaybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveOrganisationAppliancesNodeAggregationWhereInput>;
}

export interface HiveOrganisationAppliancesConnectFieldInput {
  connect?: InputMaybe<Array<HiveApplianceConnectInput>>;
  where?: InputMaybe<HiveApplianceConnectWhere>;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInput {
  onCreate: HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceOnCreateInput;
}

export interface HiveOrganisationAppliancesConnectionSort {
  node?: InputMaybe<HiveApplianceSort>;
}

export interface HiveOrganisationAppliancesConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  node?: InputMaybe<HiveApplianceWhere>;
  node_NOT?: InputMaybe<HiveApplianceWhere>;
}

export interface HiveOrganisationAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveOrganisationAppliancesDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceDeleteInput>;
  where?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationAppliancesDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceDisconnectInput>;
  where?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationAppliancesFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
}

export interface HiveOrganisationAppliancesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  label_EQUAL?: InputMaybe<Scalars["String"]>;
  label_GT?: InputMaybe<Scalars["Int"]>;
  label_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  label_LT?: InputMaybe<Scalars["Int"]>;
  label_LTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveOrganisationAppliancesUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceUpdateInput>;
}

export interface HiveOrganisationAppliancesUpdateFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<HiveOrganisationAppliancesDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveOrganisationAppliancesUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
}

export interface HiveOrganisationConnectInput {
  appliances?: InputMaybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  files?: InputMaybe<HiveOrganisationFilesConnectInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsConnectFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  roles?: InputMaybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsConnectFieldInput>
  >;
}

export interface HiveOrganisationConnectOrCreateInput {
  appliances?: InputMaybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  files?: InputMaybe<HiveOrganisationFilesConnectOrCreateInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersConnectOrCreateFieldInput>>;
  roles?: InputMaybe<Array<HiveOrganisationRolesConnectOrCreateFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationConnectOrCreateWhere {
  node: HiveOrganisationUniqueWhere;
}

export interface HiveOrganisationConnectWhere {
  node: HiveOrganisationWhere;
}

export interface HiveOrganisationCreateInput {
  appliances?: InputMaybe<HiveOrganisationAppliancesFieldInput>;
  files?: InputMaybe<HiveOrganisationFilesCreateInput>;
  integrations?: InputMaybe<HiveOrganisationIntegrationsFieldInput>;
  members?: InputMaybe<HiveOrganisationMembersFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<HiveOrganisationRolesFieldInput>;
  subscriptions?: InputMaybe<HiveOrganisationSubscriptionsFieldInput>;
}

export interface HiveOrganisationDeleteInput {
  appliances?: InputMaybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  files?: InputMaybe<HiveOrganisationFilesDeleteInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsDeleteFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  roles?: InputMaybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsDeleteFieldInput>
  >;
}

export interface HiveOrganisationDisconnectInput {
  appliances?: InputMaybe<
    Array<HiveOrganisationAppliancesDisconnectFieldInput>
  >;
  files?: InputMaybe<HiveOrganisationFilesDisconnectInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsDisconnectFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  roles?: InputMaybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsDisconnectFieldInput>
  >;
}

export interface HiveOrganisationFilesConnectInput {
  File?: InputMaybe<HiveOrganisationFilesFileConnectFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderConnectFieldInput>;
}

export interface HiveOrganisationFilesConnectOrCreateInput {
  File?: InputMaybe<HiveOrganisationFilesFileConnectOrCreateFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderConnectOrCreateFieldInput>;
}

export interface HiveOrganisationFilesConnectionWhere {
  File?: InputMaybe<HiveOrganisationFilesFileConnectionWhere>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderConnectionWhere>;
}

export interface HiveOrganisationFilesCreateFieldInput {
  File?: InputMaybe<Array<HiveOrganisationFilesFileCreateFieldInput>>;
  Folder?: InputMaybe<Array<HiveOrganisationFilesFolderCreateFieldInput>>;
}

export interface HiveOrganisationFilesCreateInput {
  File?: InputMaybe<HiveOrganisationFilesFileFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderFieldInput>;
}

export interface HiveOrganisationFilesDeleteInput {
  File?: InputMaybe<HiveOrganisationFilesFileDeleteFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderDeleteFieldInput>;
}

export interface HiveOrganisationFilesDisconnectInput {
  File?: InputMaybe<HiveOrganisationFilesFileDisconnectFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderDisconnectFieldInput>;
}

export interface HiveOrganisationFilesFileConnectFieldInput {
  connect?: InputMaybe<FileConnectInput>;
  where?: InputMaybe<FileConnectWhere>;
}

export interface HiveOrganisationFilesFileConnectOrCreateFieldInput {
  onCreate: HiveOrganisationFilesFileConnectOrCreateFieldInputOnCreate;
  where: FileConnectOrCreateWhere;
}

export interface HiveOrganisationFilesFileConnectOrCreateFieldInputOnCreate {
  node: FileOnCreateInput;
}

export interface HiveOrganisationFilesFileConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationFilesFileConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationFilesFileConnectionWhere>>;
  node?: InputMaybe<FileWhere>;
  node_NOT?: InputMaybe<FileWhere>;
}

export interface HiveOrganisationFilesFileCreateFieldInput {
  node: FileCreateInput;
}

export interface HiveOrganisationFilesFileDeleteFieldInput {
  delete?: InputMaybe<FileDeleteInput>;
  where?: InputMaybe<HiveOrganisationFilesFileConnectionWhere>;
}

export interface HiveOrganisationFilesFileDisconnectFieldInput {
  disconnect?: InputMaybe<FileDisconnectInput>;
  where?: InputMaybe<HiveOrganisationFilesFileConnectionWhere>;
}

export interface HiveOrganisationFilesFileFieldInput {
  connect?: InputMaybe<HiveOrganisationFilesFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveOrganisationFilesFileConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveOrganisationFilesFileCreateFieldInput>;
}

export interface HiveOrganisationFilesFileUpdateConnectionInput {
  node?: InputMaybe<FileUpdateInput>;
}

export interface HiveOrganisationFilesFileUpdateFieldInput {
  connect?: InputMaybe<HiveOrganisationFilesFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveOrganisationFilesFileConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveOrganisationFilesFileCreateFieldInput>;
  delete?: InputMaybe<HiveOrganisationFilesFileDeleteFieldInput>;
  disconnect?: InputMaybe<HiveOrganisationFilesFileDisconnectFieldInput>;
  update?: InputMaybe<HiveOrganisationFilesFileUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationFilesFileConnectionWhere>;
}

export interface HiveOrganisationFilesFolderConnectFieldInput {
  connect?: InputMaybe<FolderConnectInput>;
  where?: InputMaybe<FolderConnectWhere>;
}

export interface HiveOrganisationFilesFolderConnectOrCreateFieldInput {
  onCreate: HiveOrganisationFilesFolderConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
}

export interface HiveOrganisationFilesFolderConnectOrCreateFieldInputOnCreate {
  node: FolderOnCreateInput;
}

export interface HiveOrganisationFilesFolderConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationFilesFolderConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationFilesFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
  node_NOT?: InputMaybe<FolderWhere>;
}

export interface HiveOrganisationFilesFolderCreateFieldInput {
  node: FolderCreateInput;
}

export interface HiveOrganisationFilesFolderDeleteFieldInput {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<HiveOrganisationFilesFolderConnectionWhere>;
}

export interface HiveOrganisationFilesFolderDisconnectFieldInput {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<HiveOrganisationFilesFolderConnectionWhere>;
}

export interface HiveOrganisationFilesFolderFieldInput {
  connect?: InputMaybe<HiveOrganisationFilesFolderConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveOrganisationFilesFolderConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveOrganisationFilesFolderCreateFieldInput>;
}

export interface HiveOrganisationFilesFolderUpdateConnectionInput {
  node?: InputMaybe<FolderUpdateInput>;
}

export interface HiveOrganisationFilesFolderUpdateFieldInput {
  connect?: InputMaybe<HiveOrganisationFilesFolderConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveOrganisationFilesFolderConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveOrganisationFilesFolderCreateFieldInput>;
  delete?: InputMaybe<HiveOrganisationFilesFolderDeleteFieldInput>;
  disconnect?: InputMaybe<HiveOrganisationFilesFolderDisconnectFieldInput>;
  update?: InputMaybe<HiveOrganisationFilesFolderUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationFilesFolderConnectionWhere>;
}

export interface HiveOrganisationFilesUpdateInput {
  File?: InputMaybe<HiveOrganisationFilesFileUpdateFieldInput>;
  Folder?: InputMaybe<HiveOrganisationFilesFolderUpdateFieldInput>;
}

export interface HiveOrganisationIntegrationsAggregateInput {
  AND?: InputMaybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  OR?: InputMaybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveOrganisationIntegrationsNodeAggregationWhereInput>;
}

export interface HiveOrganisationIntegrationsConnectFieldInput {
  connect?: InputMaybe<Array<HiveIntegrationInstanceConnectInput>>;
  where?: InputMaybe<HiveIntegrationInstanceConnectWhere>;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInput {
  onCreate: HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate;
  where: HiveIntegrationInstanceConnectOrCreateWhere;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceOnCreateInput;
}

export interface HiveOrganisationIntegrationsConnectionSort {
  node?: InputMaybe<HiveIntegrationInstanceSort>;
}

export interface HiveOrganisationIntegrationsConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  node?: InputMaybe<HiveIntegrationInstanceWhere>;
  node_NOT?: InputMaybe<HiveIntegrationInstanceWhere>;
}

export interface HiveOrganisationIntegrationsCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveOrganisationIntegrationsDeleteFieldInput {
  delete?: InputMaybe<HiveIntegrationInstanceDeleteInput>;
  where?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationIntegrationsDisconnectFieldInput {
  disconnect?: InputMaybe<HiveIntegrationInstanceDisconnectInput>;
  where?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationIntegrationsFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
}

export interface HiveOrganisationIntegrationsNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>>;
  config_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  config_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  config_EQUAL?: InputMaybe<Scalars["String"]>;
  config_GT?: InputMaybe<Scalars["Int"]>;
  config_GTE?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  config_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  config_LT?: InputMaybe<Scalars["Int"]>;
  config_LTE?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveOrganisationIntegrationsUpdateConnectionInput {
  node?: InputMaybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveOrganisationIntegrationsUpdateFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveOrganisationIntegrationsDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<HiveOrganisationIntegrationsDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveOrganisationIntegrationsUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveOrganisationMembersAggregateInput {
  AND?: InputMaybe<Array<HiveOrganisationMembersAggregateInput>>;
  OR?: InputMaybe<Array<HiveOrganisationMembersAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveOrganisationMembersNodeAggregationWhereInput>;
}

export interface HiveOrganisationMembersConnectFieldInput {
  connect?: InputMaybe<Array<HiveUserConnectInput>>;
  where?: InputMaybe<HiveUserConnectWhere>;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInput {
  onCreate: HiveOrganisationMembersConnectOrCreateFieldInputOnCreate;
  where: HiveUserConnectOrCreateWhere;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInputOnCreate {
  node: HiveUserOnCreateInput;
}

export interface HiveOrganisationMembersConnectionSort {
  node?: InputMaybe<HiveUserSort>;
}

export interface HiveOrganisationMembersConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationMembersConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationMembersConnectionWhere>>;
  node?: InputMaybe<HiveUserWhere>;
  node_NOT?: InputMaybe<HiveUserWhere>;
}

export interface HiveOrganisationMembersCreateFieldInput {
  node: HiveUserCreateInput;
}

export interface HiveOrganisationMembersDeleteFieldInput {
  delete?: InputMaybe<HiveUserDeleteInput>;
  where?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationMembersDisconnectFieldInput {
  disconnect?: InputMaybe<HiveUserDisconnectInput>;
  where?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationMembersFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationMembersCreateFieldInput>>;
}

export interface HiveOrganisationMembersNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  password_EQUAL?: InputMaybe<Scalars["String"]>;
  password_GT?: InputMaybe<Scalars["Int"]>;
  password_GTE?: InputMaybe<Scalars["Int"]>;
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_LT?: InputMaybe<Scalars["Int"]>;
  password_LTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  username_EQUAL?: InputMaybe<Scalars["String"]>;
  username_GT?: InputMaybe<Scalars["Int"]>;
  username_GTE?: InputMaybe<Scalars["Int"]>;
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  username_LT?: InputMaybe<Scalars["Int"]>;
  username_LTE?: InputMaybe<Scalars["Int"]>;
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveOrganisationMembersUpdateConnectionInput {
  node?: InputMaybe<HiveUserUpdateInput>;
}

export interface HiveOrganisationMembersUpdateFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  update?: InputMaybe<HiveOrganisationMembersUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
}

export interface HiveOrganisationOnCreateInput {
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveOrganisationOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveOrganisationSort objects to sort HiveOrganisations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveOrganisationSort>>;
}

export interface HiveOrganisationRelationInput {
  appliances?: InputMaybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  files?: InputMaybe<HiveOrganisationFilesCreateFieldInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsCreateFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  roles?: InputMaybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsCreateFieldInput>
  >;
}

export interface HiveOrganisationRolesAggregateInput {
  AND?: InputMaybe<Array<HiveOrganisationRolesAggregateInput>>;
  OR?: InputMaybe<Array<HiveOrganisationRolesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveOrganisationRolesNodeAggregationWhereInput>;
}

export interface HiveOrganisationRolesConnectFieldInput {
  connect?: InputMaybe<Array<RoleConnectInput>>;
  where?: InputMaybe<RoleConnectWhere>;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInput {
  onCreate: HiveOrganisationRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInputOnCreate {
  node: RoleOnCreateInput;
}

export interface HiveOrganisationRolesConnectionSort {
  node?: InputMaybe<RoleSort>;
}

export interface HiveOrganisationRolesConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationRolesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationRolesConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
  node_NOT?: InputMaybe<RoleWhere>;
}

export interface HiveOrganisationRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveOrganisationRolesDeleteFieldInput {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
}

export interface HiveOrganisationRolesDisconnectFieldInput {
  disconnect?: InputMaybe<RoleDisconnectInput>;
  where?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
}

export interface HiveOrganisationRolesFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationRolesCreateFieldInput>>;
}

export interface HiveOrganisationRolesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveOrganisationRolesUpdateConnectionInput {
  node?: InputMaybe<RoleUpdateInput>;
}

export interface HiveOrganisationRolesUpdateFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  update?: InputMaybe<HiveOrganisationRolesUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
}

/** Fields to sort HiveOrganisations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveOrganisationSort object. */
export interface HiveOrganisationSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveOrganisationSubscriptionsAggregateInput {
  AND?: InputMaybe<Array<HiveOrganisationSubscriptionsAggregateInput>>;
  OR?: InputMaybe<Array<HiveOrganisationSubscriptionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveOrganisationSubscriptionsNodeAggregationWhereInput>;
}

export interface HiveOrganisationSubscriptionsConnectFieldInput {
  connect?: InputMaybe<Array<HiveApplianceConfigurationConnectInput>>;
  where?: InputMaybe<HiveApplianceConfigurationConnectWhere>;
}

export interface HiveOrganisationSubscriptionsConnectOrCreateFieldInput {
  onCreate: HiveOrganisationSubscriptionsConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConfigurationConnectOrCreateWhere;
}

export interface HiveOrganisationSubscriptionsConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceConfigurationOnCreateInput;
}

export interface HiveOrganisationSubscriptionsConnectionSort {
  node?: InputMaybe<HiveApplianceConfigurationSort>;
}

export interface HiveOrganisationSubscriptionsConnectionWhere {
  AND?: InputMaybe<Array<HiveOrganisationSubscriptionsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationSubscriptionsConnectionWhere>>;
  node?: InputMaybe<HiveApplianceConfigurationWhere>;
  node_NOT?: InputMaybe<HiveApplianceConfigurationWhere>;
}

export interface HiveOrganisationSubscriptionsCreateFieldInput {
  node: HiveApplianceConfigurationCreateInput;
}

export interface HiveOrganisationSubscriptionsDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceConfigurationDeleteInput>;
  where?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
}

export interface HiveOrganisationSubscriptionsDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceConfigurationDisconnectInput>;
  where?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
}

export interface HiveOrganisationSubscriptionsFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationSubscriptionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationSubscriptionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationSubscriptionsCreateFieldInput>>;
}

export interface HiveOrganisationSubscriptionsNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveOrganisationSubscriptionsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveOrganisationSubscriptionsNodeAggregationWhereInput>
  >;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  key_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  key_EQUAL?: InputMaybe<Scalars["String"]>;
  key_GT?: InputMaybe<Scalars["Int"]>;
  key_GTE?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  key_LT?: InputMaybe<Scalars["Int"]>;
  key_LTE?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveOrganisationSubscriptionsUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceConfigurationUpdateInput>;
}

export interface HiveOrganisationSubscriptionsUpdateFieldInput {
  connect?: InputMaybe<Array<HiveOrganisationSubscriptionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<HiveOrganisationSubscriptionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<HiveOrganisationSubscriptionsCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveOrganisationSubscriptionsDeleteFieldInput>>;
  disconnect?: InputMaybe<
    Array<HiveOrganisationSubscriptionsDisconnectFieldInput>
  >;
  update?: InputMaybe<HiveOrganisationSubscriptionsUpdateConnectionInput>;
  where?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
}

export interface HiveOrganisationUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveOrganisationUpdateInput {
  appliances?: InputMaybe<Array<HiveOrganisationAppliancesUpdateFieldInput>>;
  files?: InputMaybe<HiveOrganisationFilesUpdateInput>;
  integrations?: InputMaybe<
    Array<HiveOrganisationIntegrationsUpdateFieldInput>
  >;
  members?: InputMaybe<Array<HiveOrganisationMembersUpdateFieldInput>>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<HiveOrganisationRolesUpdateFieldInput>>;
  subscriptions?: InputMaybe<
    Array<HiveOrganisationSubscriptionsUpdateFieldInput>
  >;
}

export interface HiveOrganisationWhere {
  AND?: InputMaybe<Array<HiveOrganisationWhere>>;
  OR?: InputMaybe<Array<HiveOrganisationWhere>>;
  appliancesAggregate?: InputMaybe<HiveOrganisationAppliancesAggregateInput>;
  appliancesConnection_ALL?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
  appliancesConnection_NONE?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
  appliancesConnection_SINGLE?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
  appliancesConnection_SOME?: InputMaybe<HiveOrganisationAppliancesConnectionWhere>;
  /** Return HiveOrganisations where all of the related HiveAppliances match this filter */
  appliances_ALL?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveOrganisations where none of the related HiveAppliances match this filter */
  appliances_NONE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveOrganisations where one of the related HiveAppliances match this filter */
  appliances_SINGLE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveOrganisations where some of the related HiveAppliances match this filter */
  appliances_SOME?: InputMaybe<HiveApplianceWhere>;
  filesConnection?: InputMaybe<HiveOrganisationFilesConnectionWhere>;
  filesConnection_NOT?: InputMaybe<HiveOrganisationFilesConnectionWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  integrationsAggregate?: InputMaybe<HiveOrganisationIntegrationsAggregateInput>;
  integrationsConnection_ALL?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrationsConnection_NONE?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrationsConnection_SINGLE?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrationsConnection_SOME?: InputMaybe<HiveOrganisationIntegrationsConnectionWhere>;
  /** Return HiveOrganisations where all of the related HiveIntegrationInstances match this filter */
  integrations_ALL?: InputMaybe<HiveIntegrationInstanceWhere>;
  /** Return HiveOrganisations where none of the related HiveIntegrationInstances match this filter */
  integrations_NONE?: InputMaybe<HiveIntegrationInstanceWhere>;
  /** Return HiveOrganisations where one of the related HiveIntegrationInstances match this filter */
  integrations_SINGLE?: InputMaybe<HiveIntegrationInstanceWhere>;
  /** Return HiveOrganisations where some of the related HiveIntegrationInstances match this filter */
  integrations_SOME?: InputMaybe<HiveIntegrationInstanceWhere>;
  membersAggregate?: InputMaybe<HiveOrganisationMembersAggregateInput>;
  membersConnection_ALL?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
  membersConnection_NONE?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
  membersConnection_SINGLE?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
  membersConnection_SOME?: InputMaybe<HiveOrganisationMembersConnectionWhere>;
  /** Return HiveOrganisations where all of the related HiveUsers match this filter */
  members_ALL?: InputMaybe<HiveUserWhere>;
  /** Return HiveOrganisations where none of the related HiveUsers match this filter */
  members_NONE?: InputMaybe<HiveUserWhere>;
  /** Return HiveOrganisations where one of the related HiveUsers match this filter */
  members_SINGLE?: InputMaybe<HiveUserWhere>;
  /** Return HiveOrganisations where some of the related HiveUsers match this filter */
  members_SOME?: InputMaybe<HiveUserWhere>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  rolesAggregate?: InputMaybe<HiveOrganisationRolesAggregateInput>;
  rolesConnection_ALL?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
  rolesConnection_NONE?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
  rolesConnection_SINGLE?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
  rolesConnection_SOME?: InputMaybe<HiveOrganisationRolesConnectionWhere>;
  /** Return HiveOrganisations where all of the related Roles match this filter */
  roles_ALL?: InputMaybe<RoleWhere>;
  /** Return HiveOrganisations where none of the related Roles match this filter */
  roles_NONE?: InputMaybe<RoleWhere>;
  /** Return HiveOrganisations where one of the related Roles match this filter */
  roles_SINGLE?: InputMaybe<RoleWhere>;
  /** Return HiveOrganisations where some of the related Roles match this filter */
  roles_SOME?: InputMaybe<RoleWhere>;
  subscriptionsAggregate?: InputMaybe<HiveOrganisationSubscriptionsAggregateInput>;
  subscriptionsConnection_ALL?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
  subscriptionsConnection_NONE?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
  subscriptionsConnection_SINGLE?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
  subscriptionsConnection_SOME?: InputMaybe<HiveOrganisationSubscriptionsConnectionWhere>;
  /** Return HiveOrganisations where all of the related HiveApplianceConfigurations match this filter */
  subscriptions_ALL?: InputMaybe<HiveApplianceConfigurationWhere>;
  /** Return HiveOrganisations where none of the related HiveApplianceConfigurations match this filter */
  subscriptions_NONE?: InputMaybe<HiveApplianceConfigurationWhere>;
  /** Return HiveOrganisations where one of the related HiveApplianceConfigurations match this filter */
  subscriptions_SINGLE?: InputMaybe<HiveApplianceConfigurationWhere>;
  /** Return HiveOrganisations where some of the related HiveApplianceConfigurations match this filter */
  subscriptions_SOME?: InputMaybe<HiveApplianceConfigurationWhere>;
}

export interface HiveServiceConnectWhere {
  node: HiveServiceWhere;
}

export interface HiveServiceCreateInput {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveServiceOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveServiceSort objects to sort HiveServices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveServiceSort>>;
}

/** Fields to sort HiveServices by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveServiceSort object. */
export interface HiveServiceSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveServiceUpdateInput {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveServiceWhere {
  AND?: InputMaybe<Array<HiveServiceWhere>>;
  OR?: InputMaybe<Array<HiveServiceWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeConnectInput {
  fields?: InputMaybe<Array<HiveTypeFieldsConnectFieldInput>>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInConnectFieldInput>>;
}

export interface HiveTypeConnectOrCreateInput {
  fields?: InputMaybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
}

export interface HiveTypeConnectOrCreateWhere {
  node: HiveTypeUniqueWhere;
}

export interface HiveTypeConnectWhere {
  node: HiveTypeWhere;
}

export interface HiveTypeCreateInput {
  fields?: InputMaybe<HiveTypeFieldsFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  usedIn?: InputMaybe<HiveTypeUsedInFieldInput>;
}

export interface HiveTypeDeleteInput {
  fields?: InputMaybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInDeleteFieldInput>>;
}

export interface HiveTypeDisconnectInput {
  fields?: InputMaybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
}

export interface HiveTypeFieldConnectOrCreateWhere {
  node: HiveTypeFieldUniqueWhere;
}

export interface HiveTypeFieldConnectWhere {
  node: HiveTypeFieldWhere;
}

export interface HiveTypeFieldCreateInput {
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeFieldOnCreateInput {
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeFieldOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveTypeFieldSort objects to sort HiveTypeFields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveTypeFieldSort>>;
}

/** Fields to sort HiveTypeFields by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeFieldSort object. */
export interface HiveTypeFieldSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
}

export interface HiveTypeFieldUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveTypeFieldUpdateInput {
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeFieldWhere {
  AND?: InputMaybe<Array<HiveTypeFieldWhere>>;
  OR?: InputMaybe<Array<HiveTypeFieldWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeFieldsAggregateInput {
  AND?: InputMaybe<Array<HiveTypeFieldsAggregateInput>>;
  OR?: InputMaybe<Array<HiveTypeFieldsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveTypeFieldsNodeAggregationWhereInput>;
}

export interface HiveTypeFieldsConnectFieldInput {
  where?: InputMaybe<HiveTypeFieldConnectWhere>;
}

export interface HiveTypeFieldsConnectOrCreateFieldInput {
  onCreate: HiveTypeFieldsConnectOrCreateFieldInputOnCreate;
  where: HiveTypeFieldConnectOrCreateWhere;
}

export interface HiveTypeFieldsConnectOrCreateFieldInputOnCreate {
  node: HiveTypeFieldOnCreateInput;
}

export interface HiveTypeFieldsConnectionSort {
  node?: InputMaybe<HiveTypeFieldSort>;
}

export interface HiveTypeFieldsConnectionWhere {
  AND?: InputMaybe<Array<HiveTypeFieldsConnectionWhere>>;
  OR?: InputMaybe<Array<HiveTypeFieldsConnectionWhere>>;
  node?: InputMaybe<HiveTypeFieldWhere>;
  node_NOT?: InputMaybe<HiveTypeFieldWhere>;
}

export interface HiveTypeFieldsCreateFieldInput {
  node: HiveTypeFieldCreateInput;
}

export interface HiveTypeFieldsDeleteFieldInput {
  where?: InputMaybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsDisconnectFieldInput {
  where?: InputMaybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsFieldInput {
  connect?: InputMaybe<Array<HiveTypeFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveTypeFieldsCreateFieldInput>>;
}

export interface HiveTypeFieldsNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  type_GT?: InputMaybe<Scalars["Int"]>;
  type_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_LT?: InputMaybe<Scalars["Int"]>;
  type_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveTypeFieldsUpdateConnectionInput {
  node?: InputMaybe<HiveTypeFieldUpdateInput>;
}

export interface HiveTypeFieldsUpdateFieldInput {
  connect?: InputMaybe<Array<HiveTypeFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveTypeFieldsCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  update?: InputMaybe<HiveTypeFieldsUpdateConnectionInput>;
  where?: InputMaybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeOnCreateInput {
  name?: InputMaybe<Scalars["String"]>;
}

export interface HiveTypeOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveTypeSort objects to sort HiveTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveTypeSort>>;
}

export interface HiveTypePermissionConfigurationAggregateInput {
  AND?: InputMaybe<Array<HiveTypePermissionConfigurationAggregateInput>>;
  OR?: InputMaybe<Array<HiveTypePermissionConfigurationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveTypePermissionConfigurationNodeAggregationWhereInput>;
}

export interface HiveTypePermissionConfigurationConnectFieldInput {
  connect?: InputMaybe<HiveApplianceConfigurationConnectInput>;
  where?: InputMaybe<HiveApplianceConfigurationConnectWhere>;
}

export interface HiveTypePermissionConfigurationConnectOrCreateFieldInput {
  onCreate: HiveTypePermissionConfigurationConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConfigurationConnectOrCreateWhere;
}

export interface HiveTypePermissionConfigurationConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceConfigurationOnCreateInput;
}

export interface HiveTypePermissionConfigurationConnectionSort {
  node?: InputMaybe<HiveApplianceConfigurationSort>;
}

export interface HiveTypePermissionConfigurationConnectionWhere {
  AND?: InputMaybe<Array<HiveTypePermissionConfigurationConnectionWhere>>;
  OR?: InputMaybe<Array<HiveTypePermissionConfigurationConnectionWhere>>;
  node?: InputMaybe<HiveApplianceConfigurationWhere>;
  node_NOT?: InputMaybe<HiveApplianceConfigurationWhere>;
}

export interface HiveTypePermissionConfigurationCreateFieldInput {
  node: HiveApplianceConfigurationCreateInput;
}

export interface HiveTypePermissionConfigurationDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceConfigurationDeleteInput>;
  where?: InputMaybe<HiveTypePermissionConfigurationConnectionWhere>;
}

export interface HiveTypePermissionConfigurationDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceConfigurationDisconnectInput>;
  where?: InputMaybe<HiveTypePermissionConfigurationConnectionWhere>;
}

export interface HiveTypePermissionConfigurationFieldInput {
  connect?: InputMaybe<HiveTypePermissionConfigurationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveTypePermissionConfigurationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveTypePermissionConfigurationCreateFieldInput>;
}

export interface HiveTypePermissionConfigurationNodeAggregationWhereInput {
  AND?: InputMaybe<
    Array<HiveTypePermissionConfigurationNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<HiveTypePermissionConfigurationNodeAggregationWhereInput>
  >;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  key_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  key_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  key_EQUAL?: InputMaybe<Scalars["String"]>;
  key_GT?: InputMaybe<Scalars["Int"]>;
  key_GTE?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  key_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  key_LT?: InputMaybe<Scalars["Int"]>;
  key_LTE?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  key_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveTypePermissionConfigurationUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceConfigurationUpdateInput>;
}

export interface HiveTypePermissionConfigurationUpdateFieldInput {
  connect?: InputMaybe<HiveTypePermissionConfigurationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveTypePermissionConfigurationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveTypePermissionConfigurationCreateFieldInput>;
  delete?: InputMaybe<HiveTypePermissionConfigurationDeleteFieldInput>;
  disconnect?: InputMaybe<HiveTypePermissionConfigurationDisconnectFieldInput>;
  update?: InputMaybe<HiveTypePermissionConfigurationUpdateConnectionInput>;
  where?: InputMaybe<HiveTypePermissionConfigurationConnectionWhere>;
}

export interface HiveTypePermissionConnectInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationConnectFieldInput>;
}

export interface HiveTypePermissionConnectOrCreateInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationConnectOrCreateFieldInput>;
}

export interface HiveTypePermissionConnectOrCreateWhere {
  node: HiveTypePermissionUniqueWhere;
}

export interface HiveTypePermissionConnectWhere {
  node: HiveTypePermissionWhere;
}

export interface HiveTypePermissionCreateInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationFieldInput>;
  create?: InputMaybe<Scalars["Boolean"]>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  update?: InputMaybe<Scalars["Boolean"]>;
}

export interface HiveTypePermissionDeleteInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationDeleteFieldInput>;
}

export interface HiveTypePermissionDisconnectInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationDisconnectFieldInput>;
}

export interface HiveTypePermissionOnCreateInput {
  create?: InputMaybe<Scalars["Boolean"]>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  update?: InputMaybe<Scalars["Boolean"]>;
}

export interface HiveTypePermissionOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveTypePermissionSort objects to sort HiveTypePermissions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveTypePermissionSort>>;
}

export interface HiveTypePermissionRelationInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationCreateFieldInput>;
}

/** Fields to sort HiveTypePermissions by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypePermissionSort object. */
export interface HiveTypePermissionSort {
  create?: InputMaybe<SortDirection>;
  delete?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  read?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  update?: InputMaybe<SortDirection>;
}

export interface HiveTypePermissionUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveTypePermissionUpdateInput {
  configuration?: InputMaybe<HiveTypePermissionConfigurationUpdateFieldInput>;
  create?: InputMaybe<Scalars["Boolean"]>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  update?: InputMaybe<Scalars["Boolean"]>;
}

export interface HiveTypePermissionWhere {
  AND?: InputMaybe<Array<HiveTypePermissionWhere>>;
  OR?: InputMaybe<Array<HiveTypePermissionWhere>>;
  configuration?: InputMaybe<HiveApplianceConfigurationWhere>;
  configurationAggregate?: InputMaybe<HiveTypePermissionConfigurationAggregateInput>;
  configurationConnection?: InputMaybe<HiveTypePermissionConfigurationConnectionWhere>;
  configurationConnection_NOT?: InputMaybe<HiveTypePermissionConfigurationConnectionWhere>;
  configuration_NOT?: InputMaybe<HiveApplianceConfigurationWhere>;
  create?: InputMaybe<Scalars["Boolean"]>;
  create_NOT?: InputMaybe<Scalars["Boolean"]>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  delete_NOT?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  read_NOT?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  update?: InputMaybe<Scalars["Boolean"]>;
  update_NOT?: InputMaybe<Scalars["Boolean"]>;
}

export interface HiveTypeRelationInput {
  fields?: InputMaybe<Array<HiveTypeFieldsCreateFieldInput>>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInCreateFieldInput>>;
}

/** Fields to sort HiveTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeSort object. */
export interface HiveTypeSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface HiveTypeUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveTypeUpdateInput {
  fields?: InputMaybe<Array<HiveTypeFieldsUpdateFieldInput>>;
  name?: InputMaybe<Scalars["String"]>;
  usedIn?: InputMaybe<Array<HiveTypeUsedInUpdateFieldInput>>;
}

export interface HiveTypeUsedInAggregateInput {
  AND?: InputMaybe<Array<HiveTypeUsedInAggregateInput>>;
  OR?: InputMaybe<Array<HiveTypeUsedInAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveTypeUsedInNodeAggregationWhereInput>;
}

export interface HiveTypeUsedInConnectFieldInput {
  connect?: InputMaybe<Array<HiveApplianceConnectInput>>;
  where?: InputMaybe<HiveApplianceConnectWhere>;
}

export interface HiveTypeUsedInConnectOrCreateFieldInput {
  onCreate: HiveTypeUsedInConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface HiveTypeUsedInConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceOnCreateInput;
}

export interface HiveTypeUsedInConnectionSort {
  node?: InputMaybe<HiveApplianceSort>;
}

export interface HiveTypeUsedInConnectionWhere {
  AND?: InputMaybe<Array<HiveTypeUsedInConnectionWhere>>;
  OR?: InputMaybe<Array<HiveTypeUsedInConnectionWhere>>;
  node?: InputMaybe<HiveApplianceWhere>;
  node_NOT?: InputMaybe<HiveApplianceWhere>;
}

export interface HiveTypeUsedInCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveTypeUsedInDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceDeleteInput>;
  where?: InputMaybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeUsedInDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceDisconnectInput>;
  where?: InputMaybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeUsedInFieldInput {
  connect?: InputMaybe<Array<HiveTypeUsedInConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveTypeUsedInCreateFieldInput>>;
}

export interface HiveTypeUsedInNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  label_EQUAL?: InputMaybe<Scalars["String"]>;
  label_GT?: InputMaybe<Scalars["Int"]>;
  label_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  label_LT?: InputMaybe<Scalars["Int"]>;
  label_LTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveTypeUsedInUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceUpdateInput>;
}

export interface HiveTypeUsedInUpdateFieldInput {
  connect?: InputMaybe<Array<HiveTypeUsedInConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveTypeUsedInCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveTypeUsedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
  update?: InputMaybe<HiveTypeUsedInUpdateConnectionInput>;
  where?: InputMaybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveTypeWhere {
  AND?: InputMaybe<Array<HiveTypeWhere>>;
  OR?: InputMaybe<Array<HiveTypeWhere>>;
  fieldsAggregate?: InputMaybe<HiveTypeFieldsAggregateInput>;
  fieldsConnection_ALL?: InputMaybe<HiveTypeFieldsConnectionWhere>;
  fieldsConnection_NONE?: InputMaybe<HiveTypeFieldsConnectionWhere>;
  fieldsConnection_SINGLE?: InputMaybe<HiveTypeFieldsConnectionWhere>;
  fieldsConnection_SOME?: InputMaybe<HiveTypeFieldsConnectionWhere>;
  /** Return HiveTypes where all of the related HiveTypeFields match this filter */
  fields_ALL?: InputMaybe<HiveTypeFieldWhere>;
  /** Return HiveTypes where none of the related HiveTypeFields match this filter */
  fields_NONE?: InputMaybe<HiveTypeFieldWhere>;
  /** Return HiveTypes where one of the related HiveTypeFields match this filter */
  fields_SINGLE?: InputMaybe<HiveTypeFieldWhere>;
  /** Return HiveTypes where some of the related HiveTypeFields match this filter */
  fields_SOME?: InputMaybe<HiveTypeFieldWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  usedInAggregate?: InputMaybe<HiveTypeUsedInAggregateInput>;
  usedInConnection_ALL?: InputMaybe<HiveTypeUsedInConnectionWhere>;
  usedInConnection_NONE?: InputMaybe<HiveTypeUsedInConnectionWhere>;
  usedInConnection_SINGLE?: InputMaybe<HiveTypeUsedInConnectionWhere>;
  usedInConnection_SOME?: InputMaybe<HiveTypeUsedInConnectionWhere>;
  /** Return HiveTypes where all of the related HiveAppliances match this filter */
  usedIn_ALL?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveTypes where none of the related HiveAppliances match this filter */
  usedIn_NONE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveTypes where one of the related HiveAppliances match this filter */
  usedIn_SINGLE?: InputMaybe<HiveApplianceWhere>;
  /** Return HiveTypes where some of the related HiveAppliances match this filter */
  usedIn_SOME?: InputMaybe<HiveApplianceWhere>;
}

export interface HiveUserConnectInput {
  organisation?: InputMaybe<HiveUserOrganisationConnectFieldInput>;
  roles?: InputMaybe<Array<HiveUserRolesConnectFieldInput>>;
}

export interface HiveUserConnectOrCreateInput {
  organisation?: InputMaybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  roles?: InputMaybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
}

export interface HiveUserConnectOrCreateWhere {
  node: HiveUserUniqueWhere;
}

export interface HiveUserConnectWhere {
  node: HiveUserWhere;
}

export interface HiveUserCreateInput {
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveUserOrganisationFieldInput>;
  password?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<HiveUserRolesFieldInput>;
  username?: InputMaybe<Scalars["String"]>;
}

export interface HiveUserDeleteInput {
  organisation?: InputMaybe<HiveUserOrganisationDeleteFieldInput>;
  roles?: InputMaybe<Array<HiveUserRolesDeleteFieldInput>>;
}

export interface HiveUserDisconnectInput {
  organisation?: InputMaybe<HiveUserOrganisationDisconnectFieldInput>;
  roles?: InputMaybe<Array<HiveUserRolesDisconnectFieldInput>>;
}

export interface HiveUserOnCreateInput {
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
}

export interface HiveUserOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more HiveUserSort objects to sort HiveUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HiveUserSort>>;
}

export interface HiveUserOrganisationAggregateInput {
  AND?: InputMaybe<Array<HiveUserOrganisationAggregateInput>>;
  OR?: InputMaybe<Array<HiveUserOrganisationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveUserOrganisationNodeAggregationWhereInput>;
}

export interface HiveUserOrganisationConnectFieldInput {
  connect?: InputMaybe<HiveOrganisationConnectInput>;
  where?: InputMaybe<HiveOrganisationConnectWhere>;
}

export interface HiveUserOrganisationConnectOrCreateFieldInput {
  onCreate: HiveUserOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface HiveUserOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationOnCreateInput;
}

export interface HiveUserOrganisationConnectionSort {
  node?: InputMaybe<HiveOrganisationSort>;
}

export interface HiveUserOrganisationConnectionWhere {
  AND?: InputMaybe<Array<HiveUserOrganisationConnectionWhere>>;
  OR?: InputMaybe<Array<HiveUserOrganisationConnectionWhere>>;
  node?: InputMaybe<HiveOrganisationWhere>;
  node_NOT?: InputMaybe<HiveOrganisationWhere>;
}

export interface HiveUserOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveUserOrganisationDeleteFieldInput {
  delete?: InputMaybe<HiveOrganisationDeleteInput>;
  where?: InputMaybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserOrganisationDisconnectFieldInput {
  disconnect?: InputMaybe<HiveOrganisationDisconnectInput>;
  where?: InputMaybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserOrganisationFieldInput {
  connect?: InputMaybe<HiveUserOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveUserOrganisationCreateFieldInput>;
}

export interface HiveUserOrganisationNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveUserOrganisationUpdateConnectionInput {
  node?: InputMaybe<HiveOrganisationUpdateInput>;
}

export interface HiveUserOrganisationUpdateFieldInput {
  connect?: InputMaybe<HiveUserOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<HiveUserOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<HiveUserOrganisationCreateFieldInput>;
  delete?: InputMaybe<HiveUserOrganisationDeleteFieldInput>;
  disconnect?: InputMaybe<HiveUserOrganisationDisconnectFieldInput>;
  update?: InputMaybe<HiveUserOrganisationUpdateConnectionInput>;
  where?: InputMaybe<HiveUserOrganisationConnectionWhere>;
}

export interface HiveUserRelationInput {
  organisation?: InputMaybe<HiveUserOrganisationCreateFieldInput>;
  roles?: InputMaybe<Array<HiveUserRolesCreateFieldInput>>;
}

export interface HiveUserRolesAggregateInput {
  AND?: InputMaybe<Array<HiveUserRolesAggregateInput>>;
  OR?: InputMaybe<Array<HiveUserRolesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<HiveUserRolesNodeAggregationWhereInput>;
}

export interface HiveUserRolesConnectFieldInput {
  connect?: InputMaybe<Array<RoleConnectInput>>;
  where?: InputMaybe<RoleConnectWhere>;
}

export interface HiveUserRolesConnectOrCreateFieldInput {
  onCreate: HiveUserRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface HiveUserRolesConnectOrCreateFieldInputOnCreate {
  node: RoleOnCreateInput;
}

export interface HiveUserRolesConnectionSort {
  node?: InputMaybe<RoleSort>;
}

export interface HiveUserRolesConnectionWhere {
  AND?: InputMaybe<Array<HiveUserRolesConnectionWhere>>;
  OR?: InputMaybe<Array<HiveUserRolesConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
  node_NOT?: InputMaybe<RoleWhere>;
}

export interface HiveUserRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveUserRolesDeleteFieldInput {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<HiveUserRolesConnectionWhere>;
}

export interface HiveUserRolesDisconnectFieldInput {
  disconnect?: InputMaybe<RoleDisconnectInput>;
  where?: InputMaybe<HiveUserRolesConnectionWhere>;
}

export interface HiveUserRolesFieldInput {
  connect?: InputMaybe<Array<HiveUserRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveUserRolesCreateFieldInput>>;
}

export interface HiveUserRolesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface HiveUserRolesUpdateConnectionInput {
  node?: InputMaybe<RoleUpdateInput>;
}

export interface HiveUserRolesUpdateFieldInput {
  connect?: InputMaybe<Array<HiveUserRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HiveUserRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<HiveUserRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HiveUserRolesDisconnectFieldInput>>;
  update?: InputMaybe<HiveUserRolesUpdateConnectionInput>;
  where?: InputMaybe<HiveUserRolesConnectionWhere>;
}

/** Fields to sort HiveUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveUserSort object. */
export interface HiveUserSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
}

export interface HiveUserUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface HiveUserUpdateInput {
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveUserOrganisationUpdateFieldInput>;
  password?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<HiveUserRolesUpdateFieldInput>>;
  username?: InputMaybe<Scalars["String"]>;
}

export interface HiveUserWhere {
  AND?: InputMaybe<Array<HiveUserWhere>>;
  OR?: InputMaybe<Array<HiveUserWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveOrganisationWhere>;
  organisationAggregate?: InputMaybe<HiveUserOrganisationAggregateInput>;
  organisationConnection?: InputMaybe<HiveUserOrganisationConnectionWhere>;
  organisationConnection_NOT?: InputMaybe<HiveUserOrganisationConnectionWhere>;
  organisation_NOT?: InputMaybe<HiveOrganisationWhere>;
  password?: InputMaybe<Scalars["String"]>;
  password_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  password_NOT?: InputMaybe<Scalars["String"]>;
  password_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  password_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  rolesAggregate?: InputMaybe<HiveUserRolesAggregateInput>;
  rolesConnection_ALL?: InputMaybe<HiveUserRolesConnectionWhere>;
  rolesConnection_NONE?: InputMaybe<HiveUserRolesConnectionWhere>;
  rolesConnection_SINGLE?: InputMaybe<HiveUserRolesConnectionWhere>;
  rolesConnection_SOME?: InputMaybe<HiveUserRolesConnectionWhere>;
  /** Return HiveUsers where all of the related Roles match this filter */
  roles_ALL?: InputMaybe<RoleWhere>;
  /** Return HiveUsers where none of the related Roles match this filter */
  roles_NONE?: InputMaybe<RoleWhere>;
  /** Return HiveUsers where one of the related Roles match this filter */
  roles_SINGLE?: InputMaybe<RoleWhere>;
  /** Return HiveUsers where some of the related Roles match this filter */
  roles_SOME?: InputMaybe<RoleWhere>;
  username?: InputMaybe<Scalars["String"]>;
  username_CONTAINS?: InputMaybe<Scalars["String"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  username_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  username_NOT?: InputMaybe<Scalars["String"]>;
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  username_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface PermissionConnectInput {
  roles?: InputMaybe<Array<PermissionRolesConnectFieldInput>>;
}

export interface PermissionConnectOrCreateInput {
  roles?: InputMaybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
}

export interface PermissionConnectOrCreateWhere {
  node: PermissionUniqueWhere;
}

export interface PermissionConnectWhere {
  node: PermissionWhere;
}

export interface PermissionCreateInput {
  action?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<PermissionRolesFieldInput>;
  scope?: InputMaybe<Scalars["String"]>;
}

export interface PermissionDeleteInput {
  roles?: InputMaybe<Array<PermissionRolesDeleteFieldInput>>;
}

export interface PermissionDisconnectInput {
  roles?: InputMaybe<Array<PermissionRolesDisconnectFieldInput>>;
}

export interface PermissionOnCreateInput {
  action?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  scope?: InputMaybe<Scalars["String"]>;
}

export interface PermissionOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more PermissionSort objects to sort Permissions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PermissionSort>>;
}

export interface PermissionRelationInput {
  roles?: InputMaybe<Array<PermissionRolesCreateFieldInput>>;
}

export interface PermissionRolesAggregateInput {
  AND?: InputMaybe<Array<PermissionRolesAggregateInput>>;
  OR?: InputMaybe<Array<PermissionRolesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<PermissionRolesNodeAggregationWhereInput>;
}

export interface PermissionRolesConnectFieldInput {
  connect?: InputMaybe<Array<RoleConnectInput>>;
  where?: InputMaybe<RoleConnectWhere>;
}

export interface PermissionRolesConnectOrCreateFieldInput {
  onCreate: PermissionRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
}

export interface PermissionRolesConnectOrCreateFieldInputOnCreate {
  node: RoleOnCreateInput;
}

export interface PermissionRolesConnectionSort {
  node?: InputMaybe<RoleSort>;
}

export interface PermissionRolesConnectionWhere {
  AND?: InputMaybe<Array<PermissionRolesConnectionWhere>>;
  OR?: InputMaybe<Array<PermissionRolesConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
  node_NOT?: InputMaybe<RoleWhere>;
}

export interface PermissionRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface PermissionRolesDeleteFieldInput {
  delete?: InputMaybe<RoleDeleteInput>;
  where?: InputMaybe<PermissionRolesConnectionWhere>;
}

export interface PermissionRolesDisconnectFieldInput {
  disconnect?: InputMaybe<RoleDisconnectInput>;
  where?: InputMaybe<PermissionRolesConnectionWhere>;
}

export interface PermissionRolesFieldInput {
  connect?: InputMaybe<Array<PermissionRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PermissionRolesCreateFieldInput>>;
}

export interface PermissionRolesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface PermissionRolesUpdateConnectionInput {
  node?: InputMaybe<RoleUpdateInput>;
}

export interface PermissionRolesUpdateFieldInput {
  connect?: InputMaybe<Array<PermissionRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PermissionRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PermissionRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PermissionRolesDisconnectFieldInput>>;
  update?: InputMaybe<PermissionRolesUpdateConnectionInput>;
  where?: InputMaybe<PermissionRolesConnectionWhere>;
}

/** Fields to sort Permissions by. The order in which sorts are applied is not guaranteed when specifying many fields in one PermissionSort object. */
export interface PermissionSort {
  action?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  scope?: InputMaybe<SortDirection>;
}

export interface PermissionUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface PermissionUpdateInput {
  action?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<PermissionRolesUpdateFieldInput>>;
  scope?: InputMaybe<Scalars["String"]>;
}

export interface PermissionWhere {
  AND?: InputMaybe<Array<PermissionWhere>>;
  OR?: InputMaybe<Array<PermissionWhere>>;
  action?: InputMaybe<Scalars["String"]>;
  action_CONTAINS?: InputMaybe<Scalars["String"]>;
  action_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  action_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  action_NOT?: InputMaybe<Scalars["String"]>;
  action_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  action_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  action_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  action_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  action_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  rolesAggregate?: InputMaybe<PermissionRolesAggregateInput>;
  rolesConnection_ALL?: InputMaybe<PermissionRolesConnectionWhere>;
  rolesConnection_NONE?: InputMaybe<PermissionRolesConnectionWhere>;
  rolesConnection_SINGLE?: InputMaybe<PermissionRolesConnectionWhere>;
  rolesConnection_SOME?: InputMaybe<PermissionRolesConnectionWhere>;
  /** Return Permissions where all of the related Roles match this filter */
  roles_ALL?: InputMaybe<RoleWhere>;
  /** Return Permissions where none of the related Roles match this filter */
  roles_NONE?: InputMaybe<RoleWhere>;
  /** Return Permissions where one of the related Roles match this filter */
  roles_SINGLE?: InputMaybe<RoleWhere>;
  /** Return Permissions where some of the related Roles match this filter */
  roles_SOME?: InputMaybe<RoleWhere>;
  scope?: InputMaybe<Scalars["String"]>;
  scope_CONTAINS?: InputMaybe<Scalars["String"]>;
  scope_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  scope_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  scope_NOT?: InputMaybe<Scalars["String"]>;
  scope_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  scope_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  scope_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  scope_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  scope_STARTS_WITH?: InputMaybe<Scalars["String"]>;
}

export interface QueryOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}

export interface RoleAppliancesAggregateInput {
  AND?: InputMaybe<Array<RoleAppliancesAggregateInput>>;
  OR?: InputMaybe<Array<RoleAppliancesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RoleAppliancesNodeAggregationWhereInput>;
}

export interface RoleAppliancesConnectFieldInput {
  connect?: InputMaybe<Array<HiveApplianceConnectInput>>;
  where?: InputMaybe<HiveApplianceConnectWhere>;
}

export interface RoleAppliancesConnectOrCreateFieldInput {
  onCreate: RoleAppliancesConnectOrCreateFieldInputOnCreate;
  where: HiveApplianceConnectOrCreateWhere;
}

export interface RoleAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceOnCreateInput;
}

export interface RoleAppliancesConnectionSort {
  node?: InputMaybe<HiveApplianceSort>;
}

export interface RoleAppliancesConnectionWhere {
  AND?: InputMaybe<Array<RoleAppliancesConnectionWhere>>;
  OR?: InputMaybe<Array<RoleAppliancesConnectionWhere>>;
  node?: InputMaybe<HiveApplianceWhere>;
  node_NOT?: InputMaybe<HiveApplianceWhere>;
}

export interface RoleAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface RoleAppliancesDeleteFieldInput {
  delete?: InputMaybe<HiveApplianceDeleteInput>;
  where?: InputMaybe<RoleAppliancesConnectionWhere>;
}

export interface RoleAppliancesDisconnectFieldInput {
  disconnect?: InputMaybe<HiveApplianceDisconnectInput>;
  where?: InputMaybe<RoleAppliancesConnectionWhere>;
}

export interface RoleAppliancesFieldInput {
  connect?: InputMaybe<Array<RoleAppliancesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoleAppliancesCreateFieldInput>>;
}

export interface RoleAppliancesNodeAggregationWhereInput {
  AND?: InputMaybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  label_EQUAL?: InputMaybe<Scalars["String"]>;
  label_GT?: InputMaybe<Scalars["Int"]>;
  label_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  label_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  label_LT?: InputMaybe<Scalars["Int"]>;
  label_LTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface RoleAppliancesUpdateConnectionInput {
  node?: InputMaybe<HiveApplianceUpdateInput>;
}

export interface RoleAppliancesUpdateFieldInput {
  connect?: InputMaybe<Array<RoleAppliancesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoleAppliancesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoleAppliancesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoleAppliancesDisconnectFieldInput>>;
  update?: InputMaybe<RoleAppliancesUpdateConnectionInput>;
  where?: InputMaybe<RoleAppliancesConnectionWhere>;
}

export interface RoleConnectInput {
  appliances?: InputMaybe<Array<RoleAppliancesConnectFieldInput>>;
  organisation?: InputMaybe<RoleOrganisationConnectFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsConnectFieldInput>>;
}

export interface RoleConnectOrCreateInput {
  appliances?: InputMaybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  organisation?: InputMaybe<RoleOrganisationConnectOrCreateFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
}

export interface RoleConnectOrCreateWhere {
  node: RoleUniqueWhere;
}

export interface RoleConnectWhere {
  node: RoleWhere;
}

export interface RoleCreateInput {
  appliances?: InputMaybe<RoleAppliancesFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<RoleOrganisationFieldInput>;
  permissions?: InputMaybe<RolePermissionsFieldInput>;
}

export interface RoleDeleteInput {
  appliances?: InputMaybe<Array<RoleAppliancesDeleteFieldInput>>;
  organisation?: InputMaybe<RoleOrganisationDeleteFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsDeleteFieldInput>>;
}

export interface RoleDisconnectInput {
  appliances?: InputMaybe<Array<RoleAppliancesDisconnectFieldInput>>;
  organisation?: InputMaybe<RoleOrganisationDisconnectFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsDisconnectFieldInput>>;
}

export interface RoleOnCreateInput {
  name?: InputMaybe<Scalars["String"]>;
}

export interface RoleOptions {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoleSort>>;
}

export interface RoleOrganisationAggregateInput {
  AND?: InputMaybe<Array<RoleOrganisationAggregateInput>>;
  OR?: InputMaybe<Array<RoleOrganisationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RoleOrganisationNodeAggregationWhereInput>;
}

export interface RoleOrganisationConnectFieldInput {
  connect?: InputMaybe<HiveOrganisationConnectInput>;
  where?: InputMaybe<HiveOrganisationConnectWhere>;
}

export interface RoleOrganisationConnectOrCreateFieldInput {
  onCreate: RoleOrganisationConnectOrCreateFieldInputOnCreate;
  where: HiveOrganisationConnectOrCreateWhere;
}

export interface RoleOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationOnCreateInput;
}

export interface RoleOrganisationConnectionSort {
  node?: InputMaybe<HiveOrganisationSort>;
}

export interface RoleOrganisationConnectionWhere {
  AND?: InputMaybe<Array<RoleOrganisationConnectionWhere>>;
  OR?: InputMaybe<Array<RoleOrganisationConnectionWhere>>;
  node?: InputMaybe<HiveOrganisationWhere>;
  node_NOT?: InputMaybe<HiveOrganisationWhere>;
}

export interface RoleOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface RoleOrganisationDeleteFieldInput {
  delete?: InputMaybe<HiveOrganisationDeleteInput>;
  where?: InputMaybe<RoleOrganisationConnectionWhere>;
}

export interface RoleOrganisationDisconnectFieldInput {
  disconnect?: InputMaybe<HiveOrganisationDisconnectInput>;
  where?: InputMaybe<RoleOrganisationConnectionWhere>;
}

export interface RoleOrganisationFieldInput {
  connect?: InputMaybe<RoleOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleOrganisationCreateFieldInput>;
}

export interface RoleOrganisationNodeAggregationWhereInput {
  AND?: InputMaybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface RoleOrganisationUpdateConnectionInput {
  node?: InputMaybe<HiveOrganisationUpdateInput>;
}

export interface RoleOrganisationUpdateFieldInput {
  connect?: InputMaybe<RoleOrganisationConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoleOrganisationConnectOrCreateFieldInput>;
  create?: InputMaybe<RoleOrganisationCreateFieldInput>;
  delete?: InputMaybe<RoleOrganisationDeleteFieldInput>;
  disconnect?: InputMaybe<RoleOrganisationDisconnectFieldInput>;
  update?: InputMaybe<RoleOrganisationUpdateConnectionInput>;
  where?: InputMaybe<RoleOrganisationConnectionWhere>;
}

export interface RolePermissionsAggregateInput {
  AND?: InputMaybe<Array<RolePermissionsAggregateInput>>;
  OR?: InputMaybe<Array<RolePermissionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  node?: InputMaybe<RolePermissionsNodeAggregationWhereInput>;
}

export interface RolePermissionsConnectFieldInput {
  connect?: InputMaybe<Array<PermissionConnectInput>>;
  where?: InputMaybe<PermissionConnectWhere>;
}

export interface RolePermissionsConnectOrCreateFieldInput {
  onCreate: RolePermissionsConnectOrCreateFieldInputOnCreate;
  where: PermissionConnectOrCreateWhere;
}

export interface RolePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionOnCreateInput;
}

export interface RolePermissionsConnectionSort {
  node?: InputMaybe<PermissionSort>;
}

export interface RolePermissionsConnectionWhere {
  AND?: InputMaybe<Array<RolePermissionsConnectionWhere>>;
  OR?: InputMaybe<Array<RolePermissionsConnectionWhere>>;
  node?: InputMaybe<PermissionWhere>;
  node_NOT?: InputMaybe<PermissionWhere>;
}

export interface RolePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface RolePermissionsDeleteFieldInput {
  delete?: InputMaybe<PermissionDeleteInput>;
  where?: InputMaybe<RolePermissionsConnectionWhere>;
}

export interface RolePermissionsDisconnectFieldInput {
  disconnect?: InputMaybe<PermissionDisconnectInput>;
  where?: InputMaybe<RolePermissionsConnectionWhere>;
}

export interface RolePermissionsFieldInput {
  connect?: InputMaybe<Array<RolePermissionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RolePermissionsCreateFieldInput>>;
}

export interface RolePermissionsNodeAggregationWhereInput {
  AND?: InputMaybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  action_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  action_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  action_EQUAL?: InputMaybe<Scalars["String"]>;
  action_GT?: InputMaybe<Scalars["Int"]>;
  action_GTE?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  action_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  action_LT?: InputMaybe<Scalars["Int"]>;
  action_LTE?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  scope_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  scope_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  scope_EQUAL?: InputMaybe<Scalars["String"]>;
  scope_GT?: InputMaybe<Scalars["Int"]>;
  scope_GTE?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  scope_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  scope_LT?: InputMaybe<Scalars["Int"]>;
  scope_LTE?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
}

export interface RolePermissionsUpdateConnectionInput {
  node?: InputMaybe<PermissionUpdateInput>;
}

export interface RolePermissionsUpdateFieldInput {
  connect?: InputMaybe<Array<RolePermissionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RolePermissionsCreateFieldInput>>;
  delete?: InputMaybe<Array<RolePermissionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RolePermissionsDisconnectFieldInput>>;
  update?: InputMaybe<RolePermissionsUpdateConnectionInput>;
  where?: InputMaybe<RolePermissionsConnectionWhere>;
}

export interface RoleRelationInput {
  appliances?: InputMaybe<Array<RoleAppliancesCreateFieldInput>>;
  organisation?: InputMaybe<RoleOrganisationCreateFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsCreateFieldInput>>;
}

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export interface RoleSort {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface RoleUniqueWhere {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface RoleUpdateInput {
  appliances?: InputMaybe<Array<RoleAppliancesUpdateFieldInput>>;
  name?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<RoleOrganisationUpdateFieldInput>;
  permissions?: InputMaybe<Array<RolePermissionsUpdateFieldInput>>;
}

export interface RoleWhere {
  AND?: InputMaybe<Array<RoleWhere>>;
  OR?: InputMaybe<Array<RoleWhere>>;
  appliancesAggregate?: InputMaybe<RoleAppliancesAggregateInput>;
  appliancesConnection_ALL?: InputMaybe<RoleAppliancesConnectionWhere>;
  appliancesConnection_NONE?: InputMaybe<RoleAppliancesConnectionWhere>;
  appliancesConnection_SINGLE?: InputMaybe<RoleAppliancesConnectionWhere>;
  appliancesConnection_SOME?: InputMaybe<RoleAppliancesConnectionWhere>;
  /** Return Roles where all of the related HiveAppliances match this filter */
  appliances_ALL?: InputMaybe<HiveApplianceWhere>;
  /** Return Roles where none of the related HiveAppliances match this filter */
  appliances_NONE?: InputMaybe<HiveApplianceWhere>;
  /** Return Roles where one of the related HiveAppliances match this filter */
  appliances_SINGLE?: InputMaybe<HiveApplianceWhere>;
  /** Return Roles where some of the related HiveAppliances match this filter */
  appliances_SOME?: InputMaybe<HiveApplianceWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  organisation?: InputMaybe<HiveOrganisationWhere>;
  organisationAggregate?: InputMaybe<RoleOrganisationAggregateInput>;
  organisationConnection?: InputMaybe<RoleOrganisationConnectionWhere>;
  organisationConnection_NOT?: InputMaybe<RoleOrganisationConnectionWhere>;
  organisation_NOT?: InputMaybe<HiveOrganisationWhere>;
  permissionsAggregate?: InputMaybe<RolePermissionsAggregateInput>;
  permissionsConnection_ALL?: InputMaybe<RolePermissionsConnectionWhere>;
  permissionsConnection_NONE?: InputMaybe<RolePermissionsConnectionWhere>;
  permissionsConnection_SINGLE?: InputMaybe<RolePermissionsConnectionWhere>;
  permissionsConnection_SOME?: InputMaybe<RolePermissionsConnectionWhere>;
  /** Return Roles where all of the related Permissions match this filter */
  permissions_ALL?: InputMaybe<PermissionWhere>;
  /** Return Roles where none of the related Permissions match this filter */
  permissions_NONE?: InputMaybe<PermissionWhere>;
  /** Return Roles where one of the related Permissions match this filter */
  permissions_SINGLE?: InputMaybe<PermissionWhere>;
  /** Return Roles where some of the related Permissions match this filter */
  permissions_SOME?: InputMaybe<PermissionWhere>;
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Hash: true,
  ID: true,
  Int: true,
  SortDirection: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  CreateFilesMutationResponse: {
    __typename: { __type: "String!" },
    files: { __type: "[File!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateFoldersMutationResponse: {
    __typename: { __type: "String!" },
    folders: { __type: "[Folder!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveApplianceConfigurationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveApplianceConfigurations: { __type: "[HiveApplianceConfiguration!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    hiveServices: { __type: "[HiveService!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveTypePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypePermissions: { __type: "[HiveTypePermission!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypes: { __type: "[HiveType!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    hiveUsers: { __type: "[HiveUser!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
  },
  CreatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  CreateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  DeleteInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesDeleted: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  FSItem: { __typename: { __type: "String!" }, $on: { __type: "$FSItem!" } },
  FSItemWhere: {
    File: { __type: "FileWhere" },
    Folder: { __type: "FolderWhere" },
  },
  File: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    mimeType: { __type: "String!" },
    name: { __type: "String!" },
    organisation: { __type: "HiveOrganisation" },
    parent: {
      __type: "Folder",
      __args: {
        directed: "Boolean",
        options: "FolderOptions",
        where: "FolderWhere",
      },
    },
    parentAggregate: {
      __type: "FileFolderParentAggregationSelection",
      __args: { directed: "Boolean", where: "FolderWhere" },
    },
    parentConnection: {
      __type: "FileParentConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[FileParentConnectionSort!]",
        where: "FileParentConnectionWhere",
      },
    },
    size: { __type: "Int!" },
  },
  FileAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    mimeType: { __type: "StringAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
    size: { __type: "IntAggregateSelectionNonNullable!" },
  },
  FileConnectInput: { parent: { __type: "FileParentConnectFieldInput" } },
  FileConnectOrCreateInput: {
    parent: { __type: "FileParentConnectOrCreateFieldInput" },
  },
  FileConnectOrCreateWhere: { node: { __type: "FileUniqueWhere!" } },
  FileConnectWhere: { node: { __type: "FileWhere!" } },
  FileCreateInput: {
    mimeType: { __type: "String!" },
    name: { __type: "String!" },
    parent: { __type: "FileParentFieldInput" },
    size: { __type: "Int!" },
  },
  FileDeleteInput: { parent: { __type: "FileParentDeleteFieldInput" } },
  FileDisconnectInput: { parent: { __type: "FileParentDisconnectFieldInput" } },
  FileFolderParentAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "FileFolderParentNodeAggregateSelection" },
  },
  FileFolderParentNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  FileOnCreateInput: {
    mimeType: { __type: "String!" },
    name: { __type: "String!" },
    size: { __type: "Int!" },
  },
  FileOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[FileSort!]" },
  },
  FileParentAggregateInput: {
    AND: { __type: "[FileParentAggregateInput!]" },
    OR: { __type: "[FileParentAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "FileParentNodeAggregationWhereInput" },
  },
  FileParentConnectFieldInput: {
    connect: { __type: "FolderConnectInput" },
    where: { __type: "FolderConnectWhere" },
  },
  FileParentConnectOrCreateFieldInput: {
    onCreate: { __type: "FileParentConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "FolderConnectOrCreateWhere!" },
  },
  FileParentConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FolderOnCreateInput!" },
  },
  FileParentConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FileParentRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  FileParentConnectionSort: { node: { __type: "FolderSort" } },
  FileParentConnectionWhere: {
    AND: { __type: "[FileParentConnectionWhere!]" },
    OR: { __type: "[FileParentConnectionWhere!]" },
    node: { __type: "FolderWhere" },
    node_NOT: { __type: "FolderWhere" },
  },
  FileParentCreateFieldInput: { node: { __type: "FolderCreateInput!" } },
  FileParentDeleteFieldInput: {
    delete: { __type: "FolderDeleteInput" },
    where: { __type: "FileParentConnectionWhere" },
  },
  FileParentDisconnectFieldInput: {
    disconnect: { __type: "FolderDisconnectInput" },
    where: { __type: "FileParentConnectionWhere" },
  },
  FileParentFieldInput: {
    connect: { __type: "FileParentConnectFieldInput" },
    connectOrCreate: { __type: "FileParentConnectOrCreateFieldInput" },
    create: { __type: "FileParentCreateFieldInput" },
  },
  FileParentNodeAggregationWhereInput: {
    AND: { __type: "[FileParentNodeAggregationWhereInput!]" },
    OR: { __type: "[FileParentNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  FileParentRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Folder!" },
  },
  FileParentUpdateConnectionInput: { node: { __type: "FolderUpdateInput" } },
  FileParentUpdateFieldInput: {
    connect: { __type: "FileParentConnectFieldInput" },
    connectOrCreate: { __type: "FileParentConnectOrCreateFieldInput" },
    create: { __type: "FileParentCreateFieldInput" },
    delete: { __type: "FileParentDeleteFieldInput" },
    disconnect: { __type: "FileParentDisconnectFieldInput" },
    update: { __type: "FileParentUpdateConnectionInput" },
    where: { __type: "FileParentConnectionWhere" },
  },
  FileRelationInput: { parent: { __type: "FileParentCreateFieldInput" } },
  FileSort: {
    id: { __type: "SortDirection" },
    mimeType: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    size: { __type: "SortDirection" },
  },
  FileUniqueWhere: { id: { __type: "ID" } },
  FileUpdateInput: {
    mimeType: { __type: "String" },
    name: { __type: "String" },
    parent: { __type: "FileParentUpdateFieldInput" },
    size: { __type: "Int" },
  },
  FileWhere: {
    AND: { __type: "[FileWhere!]" },
    OR: { __type: "[FileWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    mimeType: { __type: "String" },
    mimeType_CONTAINS: { __type: "String" },
    mimeType_ENDS_WITH: { __type: "String" },
    mimeType_IN: { __type: "[String!]" },
    mimeType_NOT: { __type: "String" },
    mimeType_NOT_CONTAINS: { __type: "String" },
    mimeType_NOT_ENDS_WITH: { __type: "String" },
    mimeType_NOT_IN: { __type: "[String!]" },
    mimeType_NOT_STARTS_WITH: { __type: "String" },
    mimeType_STARTS_WITH: { __type: "String" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String!]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String!]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    parent: { __type: "FolderWhere" },
    parentAggregate: { __type: "FileParentAggregateInput" },
    parentConnection: { __type: "FileParentConnectionWhere" },
    parentConnection_NOT: { __type: "FileParentConnectionWhere" },
    parent_NOT: { __type: "FolderWhere" },
    size: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_IN: { __type: "[Int!]" },
    size_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_NOT: { __type: "Int" },
    size_NOT_IN: { __type: "[Int!]" },
  },
  Folder: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    items: {
      __type: "[FSItem!]!",
      __args: {
        directed: "Boolean",
        options: "QueryOptions",
        where: "FSItemWhere",
      },
    },
    itemsConnection: {
      __type: "FolderItemsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        where: "FolderItemsConnectionWhere",
      },
    },
    name: { __type: "String!" },
    organisation: { __type: "HiveOrganisation" },
    parent: {
      __type: "Folder",
      __args: {
        directed: "Boolean",
        options: "FolderOptions",
        where: "FolderWhere",
      },
    },
    parentAggregate: {
      __type: "FolderFolderParentAggregationSelection",
      __args: { directed: "Boolean", where: "FolderWhere" },
    },
    parentConnection: {
      __type: "FolderParentConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[FolderParentConnectionSort!]",
        where: "FolderParentConnectionWhere",
      },
    },
  },
  FolderAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  FolderConnectInput: {
    items: { __type: "FolderItemsConnectInput" },
    parent: { __type: "FolderParentConnectFieldInput" },
  },
  FolderConnectOrCreateInput: {
    items: { __type: "FolderItemsConnectOrCreateInput" },
    parent: { __type: "FolderParentConnectOrCreateFieldInput" },
  },
  FolderConnectOrCreateWhere: { node: { __type: "FolderUniqueWhere!" } },
  FolderConnectWhere: { node: { __type: "FolderWhere!" } },
  FolderCreateInput: {
    items: { __type: "FolderItemsCreateInput" },
    name: { __type: "String!" },
    parent: { __type: "FolderParentFieldInput" },
  },
  FolderDeleteInput: {
    items: { __type: "FolderItemsDeleteInput" },
    parent: { __type: "FolderParentDeleteFieldInput" },
  },
  FolderDisconnectInput: {
    items: { __type: "FolderItemsDisconnectInput" },
    parent: { __type: "FolderParentDisconnectFieldInput" },
  },
  FolderFolderParentAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "FolderFolderParentNodeAggregateSelection" },
  },
  FolderFolderParentNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  FolderItemsConnectInput: {
    File: { __type: "[FolderItemsFileConnectFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderConnectFieldInput!]" },
  },
  FolderItemsConnectOrCreateInput: {
    File: { __type: "[FolderItemsFileConnectOrCreateFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderConnectOrCreateFieldInput!]" },
  },
  FolderItemsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FolderItemsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  FolderItemsConnectionWhere: {
    File: { __type: "FolderItemsFileConnectionWhere" },
    Folder: { __type: "FolderItemsFolderConnectionWhere" },
  },
  FolderItemsCreateFieldInput: {
    File: { __type: "[FolderItemsFileCreateFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderCreateFieldInput!]" },
  },
  FolderItemsCreateInput: {
    File: { __type: "FolderItemsFileFieldInput" },
    Folder: { __type: "FolderItemsFolderFieldInput" },
  },
  FolderItemsDeleteInput: {
    File: { __type: "[FolderItemsFileDeleteFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderDeleteFieldInput!]" },
  },
  FolderItemsDisconnectInput: {
    File: { __type: "[FolderItemsFileDisconnectFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderDisconnectFieldInput!]" },
  },
  FolderItemsFileConnectFieldInput: {
    connect: { __type: "[FileConnectInput!]" },
    where: { __type: "FileConnectWhere" },
  },
  FolderItemsFileConnectOrCreateFieldInput: {
    onCreate: { __type: "FolderItemsFileConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "FileConnectOrCreateWhere!" },
  },
  FolderItemsFileConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FileOnCreateInput!" },
  },
  FolderItemsFileConnectionWhere: {
    AND: { __type: "[FolderItemsFileConnectionWhere!]" },
    OR: { __type: "[FolderItemsFileConnectionWhere!]" },
    node: { __type: "FileWhere" },
    node_NOT: { __type: "FileWhere" },
  },
  FolderItemsFileCreateFieldInput: { node: { __type: "FileCreateInput!" } },
  FolderItemsFileDeleteFieldInput: {
    delete: { __type: "FileDeleteInput" },
    where: { __type: "FolderItemsFileConnectionWhere" },
  },
  FolderItemsFileDisconnectFieldInput: {
    disconnect: { __type: "FileDisconnectInput" },
    where: { __type: "FolderItemsFileConnectionWhere" },
  },
  FolderItemsFileFieldInput: {
    connect: { __type: "[FolderItemsFileConnectFieldInput!]" },
    connectOrCreate: { __type: "[FolderItemsFileConnectOrCreateFieldInput!]" },
    create: { __type: "[FolderItemsFileCreateFieldInput!]" },
  },
  FolderItemsFileUpdateConnectionInput: { node: { __type: "FileUpdateInput" } },
  FolderItemsFileUpdateFieldInput: {
    connect: { __type: "[FolderItemsFileConnectFieldInput!]" },
    connectOrCreate: { __type: "[FolderItemsFileConnectOrCreateFieldInput!]" },
    create: { __type: "[FolderItemsFileCreateFieldInput!]" },
    delete: { __type: "[FolderItemsFileDeleteFieldInput!]" },
    disconnect: { __type: "[FolderItemsFileDisconnectFieldInput!]" },
    update: { __type: "FolderItemsFileUpdateConnectionInput" },
    where: { __type: "FolderItemsFileConnectionWhere" },
  },
  FolderItemsFolderConnectFieldInput: {
    connect: { __type: "[FolderConnectInput!]" },
    where: { __type: "FolderConnectWhere" },
  },
  FolderItemsFolderConnectOrCreateFieldInput: {
    onCreate: { __type: "FolderItemsFolderConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "FolderConnectOrCreateWhere!" },
  },
  FolderItemsFolderConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FolderOnCreateInput!" },
  },
  FolderItemsFolderConnectionWhere: {
    AND: { __type: "[FolderItemsFolderConnectionWhere!]" },
    OR: { __type: "[FolderItemsFolderConnectionWhere!]" },
    node: { __type: "FolderWhere" },
    node_NOT: { __type: "FolderWhere" },
  },
  FolderItemsFolderCreateFieldInput: { node: { __type: "FolderCreateInput!" } },
  FolderItemsFolderDeleteFieldInput: {
    delete: { __type: "FolderDeleteInput" },
    where: { __type: "FolderItemsFolderConnectionWhere" },
  },
  FolderItemsFolderDisconnectFieldInput: {
    disconnect: { __type: "FolderDisconnectInput" },
    where: { __type: "FolderItemsFolderConnectionWhere" },
  },
  FolderItemsFolderFieldInput: {
    connect: { __type: "[FolderItemsFolderConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[FolderItemsFolderConnectOrCreateFieldInput!]",
    },
    create: { __type: "[FolderItemsFolderCreateFieldInput!]" },
  },
  FolderItemsFolderUpdateConnectionInput: {
    node: { __type: "FolderUpdateInput" },
  },
  FolderItemsFolderUpdateFieldInput: {
    connect: { __type: "[FolderItemsFolderConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[FolderItemsFolderConnectOrCreateFieldInput!]",
    },
    create: { __type: "[FolderItemsFolderCreateFieldInput!]" },
    delete: { __type: "[FolderItemsFolderDeleteFieldInput!]" },
    disconnect: { __type: "[FolderItemsFolderDisconnectFieldInput!]" },
    update: { __type: "FolderItemsFolderUpdateConnectionInput" },
    where: { __type: "FolderItemsFolderConnectionWhere" },
  },
  FolderItemsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "FSItem!" },
  },
  FolderItemsUpdateInput: {
    File: { __type: "[FolderItemsFileUpdateFieldInput!]" },
    Folder: { __type: "[FolderItemsFolderUpdateFieldInput!]" },
  },
  FolderOnCreateInput: { name: { __type: "String!" } },
  FolderOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[FolderSort!]" },
  },
  FolderParentAggregateInput: {
    AND: { __type: "[FolderParentAggregateInput!]" },
    OR: { __type: "[FolderParentAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "FolderParentNodeAggregationWhereInput" },
  },
  FolderParentConnectFieldInput: {
    connect: { __type: "FolderConnectInput" },
    where: { __type: "FolderConnectWhere" },
  },
  FolderParentConnectOrCreateFieldInput: {
    onCreate: { __type: "FolderParentConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "FolderConnectOrCreateWhere!" },
  },
  FolderParentConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FolderOnCreateInput!" },
  },
  FolderParentConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FolderParentRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  FolderParentConnectionSort: { node: { __type: "FolderSort" } },
  FolderParentConnectionWhere: {
    AND: { __type: "[FolderParentConnectionWhere!]" },
    OR: { __type: "[FolderParentConnectionWhere!]" },
    node: { __type: "FolderWhere" },
    node_NOT: { __type: "FolderWhere" },
  },
  FolderParentCreateFieldInput: { node: { __type: "FolderCreateInput!" } },
  FolderParentDeleteFieldInput: {
    delete: { __type: "FolderDeleteInput" },
    where: { __type: "FolderParentConnectionWhere" },
  },
  FolderParentDisconnectFieldInput: {
    disconnect: { __type: "FolderDisconnectInput" },
    where: { __type: "FolderParentConnectionWhere" },
  },
  FolderParentFieldInput: {
    connect: { __type: "FolderParentConnectFieldInput" },
    connectOrCreate: { __type: "FolderParentConnectOrCreateFieldInput" },
    create: { __type: "FolderParentCreateFieldInput" },
  },
  FolderParentNodeAggregationWhereInput: {
    AND: { __type: "[FolderParentNodeAggregationWhereInput!]" },
    OR: { __type: "[FolderParentNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  FolderParentRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Folder!" },
  },
  FolderParentUpdateConnectionInput: { node: { __type: "FolderUpdateInput" } },
  FolderParentUpdateFieldInput: {
    connect: { __type: "FolderParentConnectFieldInput" },
    connectOrCreate: { __type: "FolderParentConnectOrCreateFieldInput" },
    create: { __type: "FolderParentCreateFieldInput" },
    delete: { __type: "FolderParentDeleteFieldInput" },
    disconnect: { __type: "FolderParentDisconnectFieldInput" },
    update: { __type: "FolderParentUpdateConnectionInput" },
    where: { __type: "FolderParentConnectionWhere" },
  },
  FolderRelationInput: {
    items: { __type: "FolderItemsCreateFieldInput" },
    parent: { __type: "FolderParentCreateFieldInput" },
  },
  FolderSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  FolderUniqueWhere: { id: { __type: "ID" } },
  FolderUpdateInput: {
    items: { __type: "FolderItemsUpdateInput" },
    name: { __type: "String" },
    parent: { __type: "FolderParentUpdateFieldInput" },
  },
  FolderWhere: {
    AND: { __type: "[FolderWhere!]" },
    OR: { __type: "[FolderWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    itemsConnection_ALL: { __type: "FolderItemsConnectionWhere" },
    itemsConnection_NONE: { __type: "FolderItemsConnectionWhere" },
    itemsConnection_SINGLE: { __type: "FolderItemsConnectionWhere" },
    itemsConnection_SOME: { __type: "FolderItemsConnectionWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String!]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String!]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    parent: { __type: "FolderWhere" },
    parentAggregate: { __type: "FolderParentAggregateInput" },
    parentConnection: { __type: "FolderParentConnectionWhere" },
    parentConnection_NOT: { __type: "FolderParentConnectionWhere" },
    parent_NOT: { __type: "FolderWhere" },
  },
  HiveAppliance: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    label: { __type: "String" },
    name: { __type: "String!" },
    permissions: {
      __type: "[Permission!]!",
      __args: {
        directed: "Boolean",
        options: "PermissionOptions",
        where: "PermissionWhere",
      },
    },
    permissionsAggregate: {
      __type: "HiveAppliancePermissionPermissionsAggregationSelection",
      __args: { directed: "Boolean", where: "PermissionWhere" },
    },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveAppliancePermissionsConnectionSort!]",
        where: "HiveAppliancePermissionsConnectionWhere",
      },
    },
    services: {
      __type: "[HiveService!]!",
      __args: {
        directed: "Boolean",
        options: "HiveServiceOptions",
        where: "HiveServiceWhere",
      },
    },
    servicesAggregate: {
      __type: "HiveApplianceHiveServiceServicesAggregationSelection",
      __args: { directed: "Boolean", where: "HiveServiceWhere" },
    },
    servicesConnection: {
      __type: "HiveApplianceServicesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveApplianceServicesConnectionSort!]",
        where: "HiveApplianceServicesConnectionWhere",
      },
    },
    types: {
      __type: "[HiveType!]!",
      __args: {
        directed: "Boolean",
        options: "HiveTypeOptions",
        where: "HiveTypeWhere",
      },
    },
    typesAggregate: {
      __type: "HiveApplianceHiveTypeTypesAggregationSelection",
      __args: { directed: "Boolean", where: "HiveTypeWhere" },
    },
    typesConnection: {
      __type: "HiveApplianceTypesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveApplianceTypesConnectionSort!]",
        where: "HiveApplianceTypesConnectionWhere",
      },
    },
  },
  HiveApplianceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  HiveApplianceConfiguration: {
    __typename: { __type: "String!" },
    appliance: {
      __type: "HiveAppliance",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceOptions",
        where: "HiveApplianceWhere",
      },
    },
    applianceAggregate: {
      __type:
        "HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceWhere" },
    },
    applianceConnection: {
      __type: "HiveApplianceConfigurationApplianceConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveApplianceConfigurationApplianceConnectionSort!]",
        where: "HiveApplianceConfigurationApplianceConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    key: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        directed: "Boolean",
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type:
        "HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "HiveApplianceConfigurationOrganisationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveApplianceConfigurationOrganisationConnectionSort!]",
        where: "HiveApplianceConfigurationOrganisationConnectionWhere",
      },
    },
    permissions: {
      __type: "[HiveTypePermission!]!",
      __args: {
        directed: "Boolean",
        options: "HiveTypePermissionOptions",
        where: "HiveTypePermissionWhere",
      },
    },
    permissionsAggregate: {
      __type:
        "HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection",
      __args: { directed: "Boolean", where: "HiveTypePermissionWhere" },
    },
    permissionsConnection: {
      __type: "HiveApplianceConfigurationPermissionsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveApplianceConfigurationPermissionsConnectionSort!]",
        where: "HiveApplianceConfigurationPermissionsConnectionWhere",
      },
    },
  },
  HiveApplianceConfigurationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    key: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveApplianceConfigurationApplianceAggregateInput: {
    AND: { __type: "[HiveApplianceConfigurationApplianceAggregateInput!]" },
    OR: { __type: "[HiveApplianceConfigurationApplianceAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveApplianceConfigurationApplianceNodeAggregationWhereInput",
    },
  },
  HiveApplianceConfigurationApplianceConnectFieldInput: {
    connect: { __type: "HiveApplianceConnectInput" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveApplianceConfigurationApplianceConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveApplianceConfigurationApplianceConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveApplianceConfigurationApplianceConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceOnCreateInput!" },
  },
  HiveApplianceConfigurationApplianceConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceConfigurationApplianceRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceConfigurationApplianceConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveApplianceConfigurationApplianceConnectionWhere: {
    AND: { __type: "[HiveApplianceConfigurationApplianceConnectionWhere!]" },
    OR: { __type: "[HiveApplianceConfigurationApplianceConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveApplianceConfigurationApplianceCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveApplianceConfigurationApplianceDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveApplianceConfigurationApplianceConnectionWhere" },
  },
  HiveApplianceConfigurationApplianceDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveApplianceConfigurationApplianceConnectionWhere" },
  },
  HiveApplianceConfigurationApplianceFieldInput: {
    connect: { __type: "HiveApplianceConfigurationApplianceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveApplianceConfigurationApplianceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveApplianceConfigurationApplianceCreateFieldInput" },
  },
  HiveApplianceConfigurationApplianceNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveApplianceConfigurationApplianceNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveApplianceConfigurationApplianceNodeAggregationWhereInput!]",
    },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceConfigurationApplianceRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveApplianceConfigurationApplianceUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveApplianceConfigurationApplianceUpdateFieldInput: {
    connect: { __type: "HiveApplianceConfigurationApplianceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveApplianceConfigurationApplianceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveApplianceConfigurationApplianceCreateFieldInput" },
    delete: { __type: "HiveApplianceConfigurationApplianceDeleteFieldInput" },
    disconnect: {
      __type: "HiveApplianceConfigurationApplianceDisconnectFieldInput",
    },
    update: {
      __type: "HiveApplianceConfigurationApplianceUpdateConnectionInput",
    },
    where: { __type: "HiveApplianceConfigurationApplianceConnectionWhere" },
  },
  HiveApplianceConfigurationConnectInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceConnectFieldInput",
    },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationConnectFieldInput",
    },
    permissions: {
      __type: "[HiveApplianceConfigurationPermissionsConnectFieldInput!]",
    },
  },
  HiveApplianceConfigurationConnectOrCreateInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceConnectOrCreateFieldInput",
    },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput",
    },
    permissions: {
      __type:
        "[HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput!]",
    },
  },
  HiveApplianceConfigurationConnectOrCreateWhere: {
    node: { __type: "HiveApplianceConfigurationUniqueWhere!" },
  },
  HiveApplianceConfigurationConnectWhere: {
    node: { __type: "HiveApplianceConfigurationWhere!" },
  },
  HiveApplianceConfigurationCreateInput: {
    appliance: { __type: "HiveApplianceConfigurationApplianceFieldInput" },
    key: { __type: "String" },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationFieldInput",
    },
    permissions: { __type: "HiveApplianceConfigurationPermissionsFieldInput" },
  },
  HiveApplianceConfigurationDeleteInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceDeleteFieldInput",
    },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationDeleteFieldInput",
    },
    permissions: {
      __type: "[HiveApplianceConfigurationPermissionsDeleteFieldInput!]",
    },
  },
  HiveApplianceConfigurationDisconnectInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceDisconnectFieldInput",
    },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationDisconnectFieldInput",
    },
    permissions: {
      __type: "[HiveApplianceConfigurationPermissionsDisconnectFieldInput!]",
    },
  },
  HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection",
    },
  },
  HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection:
    {
      __typename: { __type: "String!" },
      id: { __type: "IDAggregateSelectionNonNullable!" },
      name: { __type: "StringAggregateSelectionNullable!" },
    },
  HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection",
    },
  },
  HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection:
    {
      __typename: { __type: "String!" },
      id: { __type: "IDAggregateSelectionNonNullable!" },
      type: { __type: "StringAggregateSelectionNullable!" },
    },
  HiveApplianceConfigurationOnCreateInput: { key: { __type: "String" } },
  HiveApplianceConfigurationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveApplianceConfigurationSort!]" },
  },
  HiveApplianceConfigurationOrganisationAggregateInput: {
    AND: { __type: "[HiveApplianceConfigurationOrganisationAggregateInput!]" },
    OR: { __type: "[HiveApplianceConfigurationOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveApplianceConfigurationOrganisationNodeAggregationWhereInput",
    },
  },
  HiveApplianceConfigurationOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveApplianceConfigurationOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  HiveApplianceConfigurationOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationOnCreateInput!" },
  },
  HiveApplianceConfigurationOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceConfigurationOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceConfigurationOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveApplianceConfigurationOrganisationConnectionWhere: {
    AND: { __type: "[HiveApplianceConfigurationOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveApplianceConfigurationOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveApplianceConfigurationOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveApplianceConfigurationOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "HiveApplianceConfigurationOrganisationConnectionWhere" },
  },
  HiveApplianceConfigurationOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "HiveApplianceConfigurationOrganisationConnectionWhere" },
  },
  HiveApplianceConfigurationOrganisationFieldInput: {
    connect: {
      __type: "HiveApplianceConfigurationOrganisationConnectFieldInput",
    },
    connectOrCreate: {
      __type: "HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput",
    },
    create: {
      __type: "HiveApplianceConfigurationOrganisationCreateFieldInput",
    },
  },
  HiveApplianceConfigurationOrganisationNodeAggregationWhereInput: {
    AND: {
      __type:
        "[HiveApplianceConfigurationOrganisationNodeAggregationWhereInput!]",
    },
    OR: {
      __type:
        "[HiveApplianceConfigurationOrganisationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceConfigurationOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveApplianceConfigurationOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveApplianceConfigurationOrganisationUpdateFieldInput: {
    connect: {
      __type: "HiveApplianceConfigurationOrganisationConnectFieldInput",
    },
    connectOrCreate: {
      __type: "HiveApplianceConfigurationOrganisationConnectOrCreateFieldInput",
    },
    create: {
      __type: "HiveApplianceConfigurationOrganisationCreateFieldInput",
    },
    delete: {
      __type: "HiveApplianceConfigurationOrganisationDeleteFieldInput",
    },
    disconnect: {
      __type: "HiveApplianceConfigurationOrganisationDisconnectFieldInput",
    },
    update: {
      __type: "HiveApplianceConfigurationOrganisationUpdateConnectionInput",
    },
    where: { __type: "HiveApplianceConfigurationOrganisationConnectionWhere" },
  },
  HiveApplianceConfigurationPermissionsAggregateInput: {
    AND: { __type: "[HiveApplianceConfigurationPermissionsAggregateInput!]" },
    OR: { __type: "[HiveApplianceConfigurationPermissionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveApplianceConfigurationPermissionsNodeAggregationWhereInput",
    },
  },
  HiveApplianceConfigurationPermissionsConnectFieldInput: {
    connect: { __type: "[HiveTypePermissionConnectInput!]" },
    where: { __type: "HiveTypePermissionConnectWhere" },
  },
  HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveApplianceConfigurationPermissionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveTypePermissionConnectOrCreateWhere!" },
  },
  HiveApplianceConfigurationPermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypePermissionOnCreateInput!" },
  },
  HiveApplianceConfigurationPermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceConfigurationPermissionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceConfigurationPermissionsConnectionSort: {
    node: { __type: "HiveTypePermissionSort" },
  },
  HiveApplianceConfigurationPermissionsConnectionWhere: {
    AND: { __type: "[HiveApplianceConfigurationPermissionsConnectionWhere!]" },
    OR: { __type: "[HiveApplianceConfigurationPermissionsConnectionWhere!]" },
    node: { __type: "HiveTypePermissionWhere" },
    node_NOT: { __type: "HiveTypePermissionWhere" },
  },
  HiveApplianceConfigurationPermissionsCreateFieldInput: {
    node: { __type: "HiveTypePermissionCreateInput!" },
  },
  HiveApplianceConfigurationPermissionsDeleteFieldInput: {
    delete: { __type: "HiveTypePermissionDeleteInput" },
    where: { __type: "HiveApplianceConfigurationPermissionsConnectionWhere" },
  },
  HiveApplianceConfigurationPermissionsDisconnectFieldInput: {
    disconnect: { __type: "HiveTypePermissionDisconnectInput" },
    where: { __type: "HiveApplianceConfigurationPermissionsConnectionWhere" },
  },
  HiveApplianceConfigurationPermissionsFieldInput: {
    connect: {
      __type: "[HiveApplianceConfigurationPermissionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type:
        "[HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput!]",
    },
    create: {
      __type: "[HiveApplianceConfigurationPermissionsCreateFieldInput!]",
    },
  },
  HiveApplianceConfigurationPermissionsNodeAggregationWhereInput: {
    AND: {
      __type:
        "[HiveApplianceConfigurationPermissionsNodeAggregationWhereInput!]",
    },
    OR: {
      __type:
        "[HiveApplianceConfigurationPermissionsNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceConfigurationPermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveTypePermission!" },
  },
  HiveApplianceConfigurationPermissionsUpdateConnectionInput: {
    node: { __type: "HiveTypePermissionUpdateInput" },
  },
  HiveApplianceConfigurationPermissionsUpdateFieldInput: {
    connect: {
      __type: "[HiveApplianceConfigurationPermissionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type:
        "[HiveApplianceConfigurationPermissionsConnectOrCreateFieldInput!]",
    },
    create: {
      __type: "[HiveApplianceConfigurationPermissionsCreateFieldInput!]",
    },
    delete: {
      __type: "[HiveApplianceConfigurationPermissionsDeleteFieldInput!]",
    },
    disconnect: {
      __type: "[HiveApplianceConfigurationPermissionsDisconnectFieldInput!]",
    },
    update: {
      __type: "HiveApplianceConfigurationPermissionsUpdateConnectionInput",
    },
    where: { __type: "HiveApplianceConfigurationPermissionsConnectionWhere" },
  },
  HiveApplianceConfigurationRelationInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceCreateFieldInput",
    },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationCreateFieldInput",
    },
    permissions: {
      __type: "[HiveApplianceConfigurationPermissionsCreateFieldInput!]",
    },
  },
  HiveApplianceConfigurationSort: {
    id: { __type: "SortDirection" },
    key: { __type: "SortDirection" },
  },
  HiveApplianceConfigurationUniqueWhere: { id: { __type: "ID" } },
  HiveApplianceConfigurationUpdateInput: {
    appliance: {
      __type: "HiveApplianceConfigurationApplianceUpdateFieldInput",
    },
    key: { __type: "String" },
    organisation: {
      __type: "HiveApplianceConfigurationOrganisationUpdateFieldInput",
    },
    permissions: {
      __type: "[HiveApplianceConfigurationPermissionsUpdateFieldInput!]",
    },
  },
  HiveApplianceConfigurationWhere: {
    AND: { __type: "[HiveApplianceConfigurationWhere!]" },
    OR: { __type: "[HiveApplianceConfigurationWhere!]" },
    appliance: { __type: "HiveApplianceWhere" },
    applianceAggregate: {
      __type: "HiveApplianceConfigurationApplianceAggregateInput",
    },
    applianceConnection: {
      __type: "HiveApplianceConfigurationApplianceConnectionWhere",
    },
    applianceConnection_NOT: {
      __type: "HiveApplianceConfigurationApplianceConnectionWhere",
    },
    appliance_NOT: { __type: "HiveApplianceWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    key: { __type: "String" },
    key_CONTAINS: { __type: "String" },
    key_ENDS_WITH: { __type: "String" },
    key_IN: { __type: "[String]" },
    key_NOT: { __type: "String" },
    key_NOT_CONTAINS: { __type: "String" },
    key_NOT_ENDS_WITH: { __type: "String" },
    key_NOT_IN: { __type: "[String]" },
    key_NOT_STARTS_WITH: { __type: "String" },
    key_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: {
      __type: "HiveApplianceConfigurationOrganisationAggregateInput",
    },
    organisationConnection: {
      __type: "HiveApplianceConfigurationOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "HiveApplianceConfigurationOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    permissionsAggregate: {
      __type: "HiveApplianceConfigurationPermissionsAggregateInput",
    },
    permissionsConnection_ALL: {
      __type: "HiveApplianceConfigurationPermissionsConnectionWhere",
    },
    permissionsConnection_NONE: {
      __type: "HiveApplianceConfigurationPermissionsConnectionWhere",
    },
    permissionsConnection_SINGLE: {
      __type: "HiveApplianceConfigurationPermissionsConnectionWhere",
    },
    permissionsConnection_SOME: {
      __type: "HiveApplianceConfigurationPermissionsConnectionWhere",
    },
    permissions_ALL: { __type: "HiveTypePermissionWhere" },
    permissions_NONE: { __type: "HiveTypePermissionWhere" },
    permissions_SINGLE: { __type: "HiveTypePermissionWhere" },
    permissions_SOME: { __type: "HiveTypePermissionWhere" },
  },
  HiveApplianceConnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    types: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
  },
  HiveApplianceConnectOrCreateInput: {
    permissions: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    types: { __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]" },
  },
  HiveApplianceConnectOrCreateWhere: {
    node: { __type: "HiveApplianceUniqueWhere!" },
  },
  HiveApplianceConnectWhere: { node: { __type: "HiveApplianceWhere!" } },
  HiveApplianceCreateInput: {
    description: { __type: "String" },
    label: { __type: "String" },
    name: { __type: "String!" },
    permissions: { __type: "HiveAppliancePermissionsFieldInput" },
    services: { __type: "HiveApplianceServicesFieldInput" },
    types: { __type: "HiveApplianceTypesFieldInput" },
  },
  HiveApplianceDeleteInput: {
    permissions: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    types: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
  },
  HiveApplianceDisconnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    types: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
  },
  HiveApplianceHiveServiceServicesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveServiceServicesNodeAggregateSelection" },
  },
  HiveApplianceHiveServiceServicesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveApplianceHiveTypeTypesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveTypeTypesNodeAggregateSelection" },
  },
  HiveApplianceHiveTypeTypesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveApplianceOnCreateInput: {
    description: { __type: "String" },
    label: { __type: "String" },
    name: { __type: "String!" },
  },
  HiveApplianceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveApplianceSort!]" },
  },
  HiveAppliancePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveAppliancePermissionPermissionsNodeAggregateSelection",
    },
  },
  HiveAppliancePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    scope: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveAppliancePermissionsAggregateInput: {
    AND: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    OR: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveAppliancePermissionsNodeAggregationWhereInput" },
  },
  HiveAppliancePermissionsConnectFieldInput: {
    connect: { __type: "[PermissionConnectInput!]" },
    where: { __type: "PermissionConnectWhere" },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "PermissionConnectOrCreateWhere!" },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionOnCreateInput!" },
  },
  HiveAppliancePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveAppliancePermissionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveAppliancePermissionsConnectionSort: {
    node: { __type: "PermissionSort" },
  },
  HiveAppliancePermissionsConnectionWhere: {
    AND: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    OR: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  HiveAppliancePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  HiveAppliancePermissionsDeleteFieldInput: {
    delete: { __type: "PermissionDeleteInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsDisconnectFieldInput: {
    disconnect: { __type: "PermissionDisconnectInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsFieldInput: {
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
  },
  HiveAppliancePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_AVERAGE_GT: { __type: "Float" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_AVERAGE_LT: { __type: "Float" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_EQUAL: { __type: "String" },
    action_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_LONGEST_GT: { __type: "Int" },
    action_LONGEST_GTE: { __type: "Int" },
    action_LONGEST_LT: { __type: "Int" },
    action_LONGEST_LTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_EQUAL: { __type: "String" },
    scope_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  HiveAppliancePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  HiveAppliancePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  HiveAppliancePermissionsUpdateFieldInput: {
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    delete: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    disconnect: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    update: { __type: "HiveAppliancePermissionsUpdateConnectionInput" },
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveApplianceRelationInput: {
    permissions: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    types: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
  },
  HiveApplianceServicesAggregateInput: {
    AND: { __type: "[HiveApplianceServicesAggregateInput!]" },
    OR: { __type: "[HiveApplianceServicesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveApplianceServicesNodeAggregationWhereInput" },
  },
  HiveApplianceServicesConnectFieldInput: {
    where: { __type: "HiveServiceConnectWhere" },
  },
  HiveApplianceServicesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceServicesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceServicesConnectionSort: { node: { __type: "HiveServiceSort" } },
  HiveApplianceServicesConnectionWhere: {
    AND: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    node: { __type: "HiveServiceWhere" },
    node_NOT: { __type: "HiveServiceWhere" },
  },
  HiveApplianceServicesCreateFieldInput: {
    node: { __type: "HiveServiceCreateInput!" },
  },
  HiveApplianceServicesDeleteFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesDisconnectFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesFieldInput: {
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
  },
  HiveApplianceServicesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceServicesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveService!" },
  },
  HiveApplianceServicesUpdateConnectionInput: {
    node: { __type: "HiveServiceUpdateInput" },
  },
  HiveApplianceServicesUpdateFieldInput: {
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    update: { __type: "HiveApplianceServicesUpdateConnectionInput" },
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceSort: {
    description: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveApplianceTypesAggregateInput: {
    AND: { __type: "[HiveApplianceTypesAggregateInput!]" },
    OR: { __type: "[HiveApplianceTypesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveApplianceTypesNodeAggregationWhereInput" },
  },
  HiveApplianceTypesConnectFieldInput: {
    connect: { __type: "[HiveTypeConnectInput!]" },
    where: { __type: "HiveTypeConnectWhere" },
  },
  HiveApplianceTypesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveApplianceTypesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveTypeConnectOrCreateWhere!" },
  },
  HiveApplianceTypesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeOnCreateInput!" },
  },
  HiveApplianceTypesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceTypesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveApplianceTypesConnectionSort: { node: { __type: "HiveTypeSort" } },
  HiveApplianceTypesConnectionWhere: {
    AND: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    node: { __type: "HiveTypeWhere" },
    node_NOT: { __type: "HiveTypeWhere" },
  },
  HiveApplianceTypesCreateFieldInput: {
    node: { __type: "HiveTypeCreateInput!" },
  },
  HiveApplianceTypesDeleteFieldInput: {
    delete: { __type: "HiveTypeDeleteInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceTypesDisconnectFieldInput: {
    disconnect: { __type: "HiveTypeDisconnectInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceTypesFieldInput: {
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
  },
  HiveApplianceTypesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceTypesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveType!" },
  },
  HiveApplianceTypesUpdateConnectionInput: {
    node: { __type: "HiveTypeUpdateInput" },
  },
  HiveApplianceTypesUpdateFieldInput: {
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
    update: { __type: "HiveApplianceTypesUpdateConnectionInput" },
    where: { __type: "HiveApplianceTypesConnectionWhere" },
  },
  HiveApplianceUniqueWhere: { id: { __type: "ID" } },
  HiveApplianceUpdateInput: {
    description: { __type: "String" },
    label: { __type: "String" },
    name: { __type: "String" },
    permissions: { __type: "[HiveAppliancePermissionsUpdateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesUpdateFieldInput!]" },
    types: { __type: "[HiveApplianceTypesUpdateFieldInput!]" },
  },
  HiveApplianceWhere: {
    AND: { __type: "[HiveApplianceWhere!]" },
    OR: { __type: "[HiveApplianceWhere!]" },
    description: { __type: "String" },
    description_CONTAINS: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
    description_NOT_IN: { __type: "[String]" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    label: { __type: "String" },
    label_CONTAINS: { __type: "String" },
    label_ENDS_WITH: { __type: "String" },
    label_IN: { __type: "[String]" },
    label_NOT: { __type: "String" },
    label_NOT_CONTAINS: { __type: "String" },
    label_NOT_ENDS_WITH: { __type: "String" },
    label_NOT_IN: { __type: "[String]" },
    label_NOT_STARTS_WITH: { __type: "String" },
    label_STARTS_WITH: { __type: "String" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String!]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String!]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    permissionsAggregate: { __type: "HiveAppliancePermissionsAggregateInput" },
    permissionsConnection_ALL: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissionsConnection_NONE: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissionsConnection_SINGLE: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissionsConnection_SOME: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissions_ALL: { __type: "PermissionWhere" },
    permissions_NONE: { __type: "PermissionWhere" },
    permissions_SINGLE: { __type: "PermissionWhere" },
    permissions_SOME: { __type: "PermissionWhere" },
    servicesAggregate: { __type: "HiveApplianceServicesAggregateInput" },
    servicesConnection_ALL: { __type: "HiveApplianceServicesConnectionWhere" },
    servicesConnection_NONE: { __type: "HiveApplianceServicesConnectionWhere" },
    servicesConnection_SINGLE: {
      __type: "HiveApplianceServicesConnectionWhere",
    },
    servicesConnection_SOME: { __type: "HiveApplianceServicesConnectionWhere" },
    services_ALL: { __type: "HiveServiceWhere" },
    services_NONE: { __type: "HiveServiceWhere" },
    services_SINGLE: { __type: "HiveServiceWhere" },
    services_SOME: { __type: "HiveServiceWhere" },
    typesAggregate: { __type: "HiveApplianceTypesAggregateInput" },
    typesConnection_ALL: { __type: "HiveApplianceTypesConnectionWhere" },
    typesConnection_NONE: { __type: "HiveApplianceTypesConnectionWhere" },
    typesConnection_SINGLE: { __type: "HiveApplianceTypesConnectionWhere" },
    typesConnection_SOME: { __type: "HiveApplianceTypesConnectionWhere" },
    types_ALL: { __type: "HiveTypeWhere" },
    types_NONE: { __type: "HiveTypeWhere" },
    types_SINGLE: { __type: "HiveTypeWhere" },
    types_SOME: { __type: "HiveTypeWhere" },
  },
  HiveIntegration: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveIntegrationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationUniqueWhere!" },
  },
  HiveIntegrationConnectWhere: { node: { __type: "HiveIntegrationWhere!" } },
  HiveIntegrationCreateInput: {
    description: { __type: "String" },
    name: { __type: "String" },
  },
  HiveIntegrationInstance: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance!]!",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceOptions",
        where: "HiveApplianceWhere",
      },
    },
    appliancesAggregate: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "HiveIntegrationInstanceAppliancesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveIntegrationInstanceAppliancesConnectionSort!]",
        where: "HiveIntegrationInstanceAppliancesConnectionWhere",
      },
    },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationPath!]!",
      __args: {
        directed: "Boolean",
        options: "HiveIntegrationPathOptions",
        where: "HiveIntegrationPathWhere",
      },
    },
    connectionsAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection",
      __args: { directed: "Boolean", where: "HiveIntegrationPathWhere" },
    },
    connectionsConnection: {
      __type: "HiveIntegrationInstanceConnectionsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveIntegrationInstanceConnectionsConnectionSort!]",
        where: "HiveIntegrationInstanceConnectionsConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    integration: {
      __type: "HiveIntegration",
      __args: {
        directed: "Boolean",
        options: "HiveIntegrationOptions",
        where: "HiveIntegrationWhere",
      },
    },
    integrationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveIntegrationWhere" },
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveIntegrationInstanceIntegrationConnectionSort!]",
        where: "HiveIntegrationInstanceIntegrationConnectionWhere",
      },
    },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        directed: "Boolean",
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveIntegrationInstanceOrganisationConnectionSort!]",
        where: "HiveIntegrationInstanceOrganisationConnectionWhere",
      },
    },
  },
  HiveIntegrationInstanceAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelectionNullable!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationInstanceAppliancesAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceAppliancesNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceOnCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveIntegrationInstanceAppliancesConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveIntegrationInstanceAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceAppliancesFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
  },
  HiveIntegrationInstanceAppliancesNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveIntegrationInstanceAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveIntegrationInstanceAppliancesUpdateFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    update: {
      __type: "HiveIntegrationInstanceAppliancesUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
  },
  HiveIntegrationInstanceConnectInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectFieldInput",
    },
  },
  HiveIntegrationInstanceConnectOrCreateInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationInstanceUniqueWhere!" },
  },
  HiveIntegrationInstanceConnectWhere: {
    node: { __type: "HiveIntegrationInstanceWhere!" },
  },
  HiveIntegrationInstanceConnectionsAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceConnectionsNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceConnectionsConnectFieldInput: {
    connect: { __type: "[HiveIntegrationPathConnectInput!]" },
    where: { __type: "HiveIntegrationPathConnectWhere" },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationPathConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationPathOnCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceConnectionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceConnectionsConnectionSort: {
    node: { __type: "HiveIntegrationPathSort" },
  },
  HiveIntegrationInstanceConnectionsConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    node: { __type: "HiveIntegrationPathWhere" },
    node_NOT: { __type: "HiveIntegrationPathWhere" },
  },
  HiveIntegrationInstanceConnectionsCreateFieldInput: {
    node: { __type: "HiveIntegrationPathCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsDeleteFieldInput: {
    delete: { __type: "HiveIntegrationPathDeleteInput" },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceConnectionsDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationPathDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceConnectionsFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
  },
  HiveIntegrationInstanceConnectionsNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    connectionBlob_AVERAGE_EQUAL: { __type: "Float" },
    connectionBlob_AVERAGE_GT: { __type: "Float" },
    connectionBlob_AVERAGE_GTE: { __type: "Float" },
    connectionBlob_AVERAGE_LT: { __type: "Float" },
    connectionBlob_AVERAGE_LTE: { __type: "Float" },
    connectionBlob_EQUAL: { __type: "String" },
    connectionBlob_GT: { __type: "Int" },
    connectionBlob_GTE: { __type: "Int" },
    connectionBlob_LONGEST_EQUAL: { __type: "Int" },
    connectionBlob_LONGEST_GT: { __type: "Int" },
    connectionBlob_LONGEST_GTE: { __type: "Int" },
    connectionBlob_LONGEST_LT: { __type: "Int" },
    connectionBlob_LONGEST_LTE: { __type: "Int" },
    connectionBlob_LT: { __type: "Int" },
    connectionBlob_LTE: { __type: "Int" },
    connectionBlob_SHORTEST_EQUAL: { __type: "Int" },
    connectionBlob_SHORTEST_GT: { __type: "Int" },
    connectionBlob_SHORTEST_GTE: { __type: "Int" },
    connectionBlob_SHORTEST_LT: { __type: "Int" },
    connectionBlob_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceConnectionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationPath!" },
  },
  HiveIntegrationInstanceConnectionsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationPathUpdateInput" },
  },
  HiveIntegrationInstanceConnectionsUpdateFieldInput: {
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    update: {
      __type: "HiveIntegrationInstanceConnectionsUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
  },
  HiveIntegrationInstanceCreateInput: {
    appliances: { __type: "HiveIntegrationInstanceAppliancesFieldInput" },
    config: { __type: "String" },
    connections: { __type: "HiveIntegrationInstanceConnectionsFieldInput" },
    integration: { __type: "HiveIntegrationInstanceIntegrationFieldInput" },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
    organisation: { __type: "HiveIntegrationInstanceOrganisationFieldInput" },
  },
  HiveIntegrationInstanceDeleteInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput",
    },
  },
  HiveIntegrationInstanceDisconnectInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    connectionBlob: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    type: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationInstanceIntegrationAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceIntegrationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceIntegrationConnectFieldInput: {
    where: { __type: "HiveIntegrationConnectWhere" },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationOnCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceIntegrationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceIntegrationConnectionSort: {
    node: { __type: "HiveIntegrationSort" },
  },
  HiveIntegrationInstanceIntegrationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    node: { __type: "HiveIntegrationWhere" },
    node_NOT: { __type: "HiveIntegrationWhere" },
  },
  HiveIntegrationInstanceIntegrationCreateFieldInput: {
    node: { __type: "HiveIntegrationCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationFieldInput: {
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
  },
  HiveIntegrationInstanceIntegrationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceIntegrationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegration!" },
  },
  HiveIntegrationInstanceIntegrationUpdateConnectionInput: {
    node: { __type: "HiveIntegrationUpdateInput" },
  },
  HiveIntegrationInstanceIntegrationUpdateFieldInput: {
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    update: {
      __type: "HiveIntegrationInstanceIntegrationUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceOnCreateInput: {
    config: { __type: "String" },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
  },
  HiveIntegrationInstanceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationInstanceSort!]" },
  },
  HiveIntegrationInstanceOrganisationAggregateInput: {
    AND: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveIntegrationInstanceOrganisationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationOnCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationInstanceOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveIntegrationInstanceOrganisationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveIntegrationInstanceOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceOrganisationFieldInput: {
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
  },
  HiveIntegrationInstanceOrganisationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveIntegrationInstanceOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveIntegrationInstanceOrganisationUpdateFieldInput: {
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
    update: {
      __type: "HiveIntegrationInstanceOrganisationUpdateConnectionInput",
    },
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
  },
  HiveIntegrationInstanceRelationInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]",
    },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationCreateFieldInput",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationCreateFieldInput",
    },
  },
  HiveIntegrationInstanceSort: {
    config: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    isRunning: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveIntegrationInstanceUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationInstanceUpdateInput: {
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesUpdateFieldInput!]",
    },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsUpdateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationUpdateFieldInput",
    },
    name: { __type: "String" },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationUpdateFieldInput",
    },
  },
  HiveIntegrationInstanceWhere: {
    AND: { __type: "[HiveIntegrationInstanceWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceWhere!]" },
    appliancesAggregate: {
      __type: "HiveIntegrationInstanceAppliancesAggregateInput",
    },
    appliancesConnection_ALL: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliancesConnection_NONE: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliancesConnection_SINGLE: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliancesConnection_SOME: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliances_ALL: { __type: "HiveApplianceWhere" },
    appliances_NONE: { __type: "HiveApplianceWhere" },
    appliances_SINGLE: { __type: "HiveApplianceWhere" },
    appliances_SOME: { __type: "HiveApplianceWhere" },
    config: { __type: "String" },
    config_CONTAINS: { __type: "String" },
    config_ENDS_WITH: { __type: "String" },
    config_IN: { __type: "[String]" },
    config_NOT: { __type: "String" },
    config_NOT_CONTAINS: { __type: "String" },
    config_NOT_ENDS_WITH: { __type: "String" },
    config_NOT_IN: { __type: "[String]" },
    config_NOT_STARTS_WITH: { __type: "String" },
    config_STARTS_WITH: { __type: "String" },
    connectionsAggregate: {
      __type: "HiveIntegrationInstanceConnectionsAggregateInput",
    },
    connectionsConnection_ALL: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connectionsConnection_NONE: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connectionsConnection_SINGLE: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connectionsConnection_SOME: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connections_ALL: { __type: "HiveIntegrationPathWhere" },
    connections_NONE: { __type: "HiveIntegrationPathWhere" },
    connections_SINGLE: { __type: "HiveIntegrationPathWhere" },
    connections_SOME: { __type: "HiveIntegrationPathWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    integration: { __type: "HiveIntegrationWhere" },
    integrationAggregate: {
      __type: "HiveIntegrationInstanceIntegrationAggregateInput",
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    integrationConnection_NOT: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    integration_NOT: { __type: "HiveIntegrationWhere" },
    isRunning: { __type: "Boolean" },
    isRunning_NOT: { __type: "Boolean" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: {
      __type: "HiveIntegrationInstanceOrganisationAggregateInput",
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveIntegrationOnCreateInput: {
    description: { __type: "String" },
    name: { __type: "String" },
  },
  HiveIntegrationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationSort!]" },
  },
  HiveIntegrationPath: {
    __typename: { __type: "String!" },
    collections: { __type: "[HiveIntegrationPathCollection]" },
    connectionBlob: { __type: "String" },
    id: { __type: "ID!" },
    instance: {
      __type: "HiveIntegrationInstance",
      __args: {
        directed: "Boolean",
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    instanceAggregate: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection",
      __args: { directed: "Boolean", where: "HiveIntegrationInstanceWhere" },
    },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveIntegrationPathInstanceConnectionSort!]",
        where: "HiveIntegrationPathInstanceConnectionWhere",
      },
    },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathAggregateSelection: {
    __typename: { __type: "String!" },
    connectionBlob: { __type: "StringAggregateSelectionNullable!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    type: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationPathCollection: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
  },
  HiveIntegrationPathCollectionAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationPathCollectionCreateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationPathCollectionSort!]" },
  },
  HiveIntegrationPathCollectionSort: { name: { __type: "SortDirection" } },
  HiveIntegrationPathCollectionUpdateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionWhere: {
    AND: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    OR: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveIntegrationPathConnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
  },
  HiveIntegrationPathConnectOrCreateInput: {
    instance: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationPathConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationPathUniqueWhere!" },
  },
  HiveIntegrationPathConnectWhere: {
    node: { __type: "HiveIntegrationPathWhere!" },
  },
  HiveIntegrationPathCreateInput: {
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceFieldInput" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathDeleteInput: {
    instance: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
  },
  HiveIntegrationPathDisconnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection",
    },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveIntegrationPathInstanceAggregateInput: {
    AND: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveIntegrationPathInstanceNodeAggregationWhereInput" },
  },
  HiveIntegrationPathInstanceConnectFieldInput: {
    connect: { __type: "HiveIntegrationInstanceConnectInput" },
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceOnCreateInput!" },
  },
  HiveIntegrationPathInstanceConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationPathInstanceRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveIntegrationPathInstanceConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveIntegrationPathInstanceConnectionWhere: {
    AND: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveIntegrationPathInstanceCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveIntegrationPathInstanceDeleteFieldInput: {
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathInstanceDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathInstanceFieldInput: {
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
  },
  HiveIntegrationPathInstanceNodeAggregationWhereInput: {
    AND: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_AVERAGE_GT: { __type: "Float" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_AVERAGE_LT: { __type: "Float" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_EQUAL: { __type: "String" },
    config_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_LONGEST_GT: { __type: "Int" },
    config_LONGEST_GTE: { __type: "Int" },
    config_LONGEST_LT: { __type: "Int" },
    config_LONGEST_LTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationPathInstanceRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveIntegrationPathInstanceUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveIntegrationPathInstanceUpdateFieldInput: {
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
    delete: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
    disconnect: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
    update: { __type: "HiveIntegrationPathInstanceUpdateConnectionInput" },
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
  },
  HiveIntegrationPathOnCreateInput: {
    connectionBlob: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveIntegrationPathSort!]" },
  },
  HiveIntegrationPathRelationInput: {
    instance: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
  },
  HiveIntegrationPathSort: {
    connectionBlob: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  HiveIntegrationPathUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationPathUpdateInput: {
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceUpdateFieldInput" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathWhere: {
    AND: { __type: "[HiveIntegrationPathWhere!]" },
    OR: { __type: "[HiveIntegrationPathWhere!]" },
    connectionBlob: { __type: "String" },
    connectionBlob_CONTAINS: { __type: "String" },
    connectionBlob_ENDS_WITH: { __type: "String" },
    connectionBlob_IN: { __type: "[String]" },
    connectionBlob_NOT: { __type: "String" },
    connectionBlob_NOT_CONTAINS: { __type: "String" },
    connectionBlob_NOT_ENDS_WITH: { __type: "String" },
    connectionBlob_NOT_IN: { __type: "[String]" },
    connectionBlob_NOT_STARTS_WITH: { __type: "String" },
    connectionBlob_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    instance: { __type: "HiveIntegrationInstanceWhere" },
    instanceAggregate: { __type: "HiveIntegrationPathInstanceAggregateInput" },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
    instanceConnection_NOT: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
    instance_NOT: { __type: "HiveIntegrationInstanceWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  HiveIntegrationSort: {
    description: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveIntegrationUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationUpdateInput: {
    description: { __type: "String" },
    name: { __type: "String" },
  },
  HiveIntegrationWhere: {
    AND: { __type: "[HiveIntegrationWhere!]" },
    OR: { __type: "[HiveIntegrationWhere!]" },
    description: { __type: "String" },
    description_CONTAINS: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
    description_NOT_IN: { __type: "[String]" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance!]!",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceOptions",
        where: "HiveApplianceWhere",
      },
    },
    appliancesAggregate: {
      __type: "HiveOrganisationHiveApplianceAppliancesAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "HiveOrganisationAppliancesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveOrganisationAppliancesConnectionSort!]",
        where: "HiveOrganisationAppliancesConnectionWhere",
      },
    },
    files: {
      __type: "FSItem",
      __args: {
        directed: "Boolean",
        options: "QueryOptions",
        where: "FSItemWhere",
      },
    },
    filesConnection: {
      __type: "HiveOrganisationFilesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        where: "HiveOrganisationFilesConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    integrations: {
      __type: "[HiveIntegrationInstance!]!",
      __args: {
        directed: "Boolean",
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    integrationsAggregate: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection",
      __args: { directed: "Boolean", where: "HiveIntegrationInstanceWhere" },
    },
    integrationsConnection: {
      __type: "HiveOrganisationIntegrationsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveOrganisationIntegrationsConnectionSort!]",
        where: "HiveOrganisationIntegrationsConnectionWhere",
      },
    },
    members: {
      __type: "[HiveUser!]!",
      __args: {
        directed: "Boolean",
        options: "HiveUserOptions",
        where: "HiveUserWhere",
      },
    },
    membersAggregate: {
      __type: "HiveOrganisationHiveUserMembersAggregationSelection",
      __args: { directed: "Boolean", where: "HiveUserWhere" },
    },
    membersConnection: {
      __type: "HiveOrganisationMembersConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveOrganisationMembersConnectionSort!]",
        where: "HiveOrganisationMembersConnectionWhere",
      },
    },
    name: { __type: "String" },
    roles: {
      __type: "[Role!]!",
      __args: {
        directed: "Boolean",
        options: "RoleOptions",
        where: "RoleWhere",
      },
    },
    rolesAggregate: {
      __type: "HiveOrganisationRoleRolesAggregationSelection",
      __args: { directed: "Boolean", where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "HiveOrganisationRolesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveOrganisationRolesConnectionSort!]",
        where: "HiveOrganisationRolesConnectionWhere",
      },
    },
    subscriptions: {
      __type: "[HiveApplianceConfiguration!]!",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceConfigurationOptions",
        where: "HiveApplianceConfigurationWhere",
      },
    },
    subscriptionsAggregate: {
      __type:
        "HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceConfigurationWhere" },
    },
    subscriptionsConnection: {
      __type: "HiveOrganisationSubscriptionsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveOrganisationSubscriptionsConnectionSort!]",
        where: "HiveOrganisationSubscriptionsConnectionWhere",
      },
    },
  },
  HiveOrganisationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveOrganisationAppliancesAggregateInput: {
    AND: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationAppliancesNodeAggregationWhereInput" },
  },
  HiveOrganisationAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceOnCreateInput!" },
  },
  HiveOrganisationAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveOrganisationAppliancesConnectionWhere: {
    AND: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveOrganisationAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveOrganisationAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationAppliancesFieldInput: {
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
  },
  HiveOrganisationAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveOrganisationAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveOrganisationAppliancesUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationAppliancesUpdateConnectionInput" },
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
  },
  HiveOrganisationConnectInput: {
    appliances: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    files: { __type: "HiveOrganisationFilesConnectInput" },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsConnectFieldInput!]",
    },
  },
  HiveOrganisationConnectOrCreateInput: {
    appliances: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    files: { __type: "HiveOrganisationFilesConnectOrCreateInput" },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationConnectOrCreateWhere: {
    node: { __type: "HiveOrganisationUniqueWhere!" },
  },
  HiveOrganisationConnectWhere: { node: { __type: "HiveOrganisationWhere!" } },
  HiveOrganisationCreateInput: {
    appliances: { __type: "HiveOrganisationAppliancesFieldInput" },
    files: { __type: "HiveOrganisationFilesCreateInput" },
    integrations: { __type: "HiveOrganisationIntegrationsFieldInput" },
    members: { __type: "HiveOrganisationMembersFieldInput" },
    name: { __type: "String" },
    roles: { __type: "HiveOrganisationRolesFieldInput" },
    subscriptions: { __type: "HiveOrganisationSubscriptionsFieldInput" },
  },
  HiveOrganisationDeleteInput: {
    appliances: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    files: { __type: "HiveOrganisationFilesDeleteInput" },
    integrations: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsDeleteFieldInput!]",
    },
  },
  HiveOrganisationDisconnectInput: {
    appliances: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    files: { __type: "HiveOrganisationFilesDisconnectInput" },
    integrations: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
    members: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsDisconnectFieldInput!]",
    },
  },
  HiveOrganisationFilesConnectInput: {
    File: { __type: "HiveOrganisationFilesFileConnectFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderConnectFieldInput" },
  },
  HiveOrganisationFilesConnectOrCreateInput: {
    File: { __type: "HiveOrganisationFilesFileConnectOrCreateFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderConnectOrCreateFieldInput" },
  },
  HiveOrganisationFilesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationFilesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationFilesConnectionWhere: {
    File: { __type: "HiveOrganisationFilesFileConnectionWhere" },
    Folder: { __type: "HiveOrganisationFilesFolderConnectionWhere" },
  },
  HiveOrganisationFilesCreateFieldInput: {
    File: { __type: "[HiveOrganisationFilesFileCreateFieldInput!]" },
    Folder: { __type: "[HiveOrganisationFilesFolderCreateFieldInput!]" },
  },
  HiveOrganisationFilesCreateInput: {
    File: { __type: "HiveOrganisationFilesFileFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderFieldInput" },
  },
  HiveOrganisationFilesDeleteInput: {
    File: { __type: "HiveOrganisationFilesFileDeleteFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderDeleteFieldInput" },
  },
  HiveOrganisationFilesDisconnectInput: {
    File: { __type: "HiveOrganisationFilesFileDisconnectFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderDisconnectFieldInput" },
  },
  HiveOrganisationFilesFileConnectFieldInput: {
    connect: { __type: "FileConnectInput" },
    where: { __type: "FileConnectWhere" },
  },
  HiveOrganisationFilesFileConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationFilesFileConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "FileConnectOrCreateWhere!" },
  },
  HiveOrganisationFilesFileConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FileOnCreateInput!" },
  },
  HiveOrganisationFilesFileConnectionWhere: {
    AND: { __type: "[HiveOrganisationFilesFileConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationFilesFileConnectionWhere!]" },
    node: { __type: "FileWhere" },
    node_NOT: { __type: "FileWhere" },
  },
  HiveOrganisationFilesFileCreateFieldInput: {
    node: { __type: "FileCreateInput!" },
  },
  HiveOrganisationFilesFileDeleteFieldInput: {
    delete: { __type: "FileDeleteInput" },
    where: { __type: "HiveOrganisationFilesFileConnectionWhere" },
  },
  HiveOrganisationFilesFileDisconnectFieldInput: {
    disconnect: { __type: "FileDisconnectInput" },
    where: { __type: "HiveOrganisationFilesFileConnectionWhere" },
  },
  HiveOrganisationFilesFileFieldInput: {
    connect: { __type: "HiveOrganisationFilesFileConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveOrganisationFilesFileConnectOrCreateFieldInput",
    },
    create: { __type: "HiveOrganisationFilesFileCreateFieldInput" },
  },
  HiveOrganisationFilesFileUpdateConnectionInput: {
    node: { __type: "FileUpdateInput" },
  },
  HiveOrganisationFilesFileUpdateFieldInput: {
    connect: { __type: "HiveOrganisationFilesFileConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveOrganisationFilesFileConnectOrCreateFieldInput",
    },
    create: { __type: "HiveOrganisationFilesFileCreateFieldInput" },
    delete: { __type: "HiveOrganisationFilesFileDeleteFieldInput" },
    disconnect: { __type: "HiveOrganisationFilesFileDisconnectFieldInput" },
    update: { __type: "HiveOrganisationFilesFileUpdateConnectionInput" },
    where: { __type: "HiveOrganisationFilesFileConnectionWhere" },
  },
  HiveOrganisationFilesFolderConnectFieldInput: {
    connect: { __type: "FolderConnectInput" },
    where: { __type: "FolderConnectWhere" },
  },
  HiveOrganisationFilesFolderConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationFilesFolderConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "FolderConnectOrCreateWhere!" },
  },
  HiveOrganisationFilesFolderConnectOrCreateFieldInputOnCreate: {
    node: { __type: "FolderOnCreateInput!" },
  },
  HiveOrganisationFilesFolderConnectionWhere: {
    AND: { __type: "[HiveOrganisationFilesFolderConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationFilesFolderConnectionWhere!]" },
    node: { __type: "FolderWhere" },
    node_NOT: { __type: "FolderWhere" },
  },
  HiveOrganisationFilesFolderCreateFieldInput: {
    node: { __type: "FolderCreateInput!" },
  },
  HiveOrganisationFilesFolderDeleteFieldInput: {
    delete: { __type: "FolderDeleteInput" },
    where: { __type: "HiveOrganisationFilesFolderConnectionWhere" },
  },
  HiveOrganisationFilesFolderDisconnectFieldInput: {
    disconnect: { __type: "FolderDisconnectInput" },
    where: { __type: "HiveOrganisationFilesFolderConnectionWhere" },
  },
  HiveOrganisationFilesFolderFieldInput: {
    connect: { __type: "HiveOrganisationFilesFolderConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveOrganisationFilesFolderConnectOrCreateFieldInput",
    },
    create: { __type: "HiveOrganisationFilesFolderCreateFieldInput" },
  },
  HiveOrganisationFilesFolderUpdateConnectionInput: {
    node: { __type: "FolderUpdateInput" },
  },
  HiveOrganisationFilesFolderUpdateFieldInput: {
    connect: { __type: "HiveOrganisationFilesFolderConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveOrganisationFilesFolderConnectOrCreateFieldInput",
    },
    create: { __type: "HiveOrganisationFilesFolderCreateFieldInput" },
    delete: { __type: "HiveOrganisationFilesFolderDeleteFieldInput" },
    disconnect: { __type: "HiveOrganisationFilesFolderDisconnectFieldInput" },
    update: { __type: "HiveOrganisationFilesFolderUpdateConnectionInput" },
    where: { __type: "HiveOrganisationFilesFolderConnectionWhere" },
  },
  HiveOrganisationFilesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "FSItem!" },
  },
  HiveOrganisationFilesUpdateInput: {
    File: { __type: "HiveOrganisationFilesFileUpdateFieldInput" },
    Folder: { __type: "HiveOrganisationFilesFolderUpdateFieldInput" },
  },
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection:
    {
      __typename: { __type: "String!" },
      id: { __type: "IDAggregateSelectionNonNullable!" },
      key: { __type: "StringAggregateSelectionNullable!" },
    },
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    config: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveOrganisationHiveUserMembersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationHiveUserMembersNodeAggregateSelection" },
  },
  HiveOrganisationHiveUserMembersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    password: { __type: "StringAggregateSelectionNullable!" },
    username: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveOrganisationIntegrationsAggregateInput: {
    AND: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationIntegrationsNodeAggregationWhereInput" },
  },
  HiveOrganisationIntegrationsConnectFieldInput: {
    connect: { __type: "[HiveIntegrationInstanceConnectInput!]" },
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceOnCreateInput!" },
  },
  HiveOrganisationIntegrationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationIntegrationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationIntegrationsConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveOrganisationIntegrationsConnectionWhere: {
    AND: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveOrganisationIntegrationsCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveOrganisationIntegrationsDeleteFieldInput: {
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationIntegrationsDisconnectFieldInput: {
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationIntegrationsFieldInput: {
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
  },
  HiveOrganisationIntegrationsNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_AVERAGE_GT: { __type: "Float" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_AVERAGE_LT: { __type: "Float" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_EQUAL: { __type: "String" },
    config_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_LONGEST_GT: { __type: "Int" },
    config_LONGEST_GTE: { __type: "Int" },
    config_LONGEST_LT: { __type: "Int" },
    config_LONGEST_LTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationIntegrationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveOrganisationIntegrationsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveOrganisationIntegrationsUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationIntegrationsUpdateConnectionInput" },
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
  },
  HiveOrganisationMembersAggregateInput: {
    AND: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    OR: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationMembersNodeAggregationWhereInput" },
  },
  HiveOrganisationMembersConnectFieldInput: {
    connect: { __type: "[HiveUserConnectInput!]" },
    where: { __type: "HiveUserConnectWhere" },
  },
  HiveOrganisationMembersConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationMembersConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveUserConnectOrCreateWhere!" },
  },
  HiveOrganisationMembersConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveUserOnCreateInput!" },
  },
  HiveOrganisationMembersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationMembersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationMembersConnectionSort: { node: { __type: "HiveUserSort" } },
  HiveOrganisationMembersConnectionWhere: {
    AND: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    node: { __type: "HiveUserWhere" },
    node_NOT: { __type: "HiveUserWhere" },
  },
  HiveOrganisationMembersCreateFieldInput: {
    node: { __type: "HiveUserCreateInput!" },
  },
  HiveOrganisationMembersDeleteFieldInput: {
    delete: { __type: "HiveUserDeleteInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationMembersDisconnectFieldInput: {
    disconnect: { __type: "HiveUserDisconnectInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationMembersFieldInput: {
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
  },
  HiveOrganisationMembersNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    password_AVERAGE_EQUAL: { __type: "Float" },
    password_AVERAGE_GT: { __type: "Float" },
    password_AVERAGE_GTE: { __type: "Float" },
    password_AVERAGE_LT: { __type: "Float" },
    password_AVERAGE_LTE: { __type: "Float" },
    password_EQUAL: { __type: "String" },
    password_GT: { __type: "Int" },
    password_GTE: { __type: "Int" },
    password_LONGEST_EQUAL: { __type: "Int" },
    password_LONGEST_GT: { __type: "Int" },
    password_LONGEST_GTE: { __type: "Int" },
    password_LONGEST_LT: { __type: "Int" },
    password_LONGEST_LTE: { __type: "Int" },
    password_LT: { __type: "Int" },
    password_LTE: { __type: "Int" },
    password_SHORTEST_EQUAL: { __type: "Int" },
    password_SHORTEST_GT: { __type: "Int" },
    password_SHORTEST_GTE: { __type: "Int" },
    password_SHORTEST_LT: { __type: "Int" },
    password_SHORTEST_LTE: { __type: "Int" },
    username_AVERAGE_EQUAL: { __type: "Float" },
    username_AVERAGE_GT: { __type: "Float" },
    username_AVERAGE_GTE: { __type: "Float" },
    username_AVERAGE_LT: { __type: "Float" },
    username_AVERAGE_LTE: { __type: "Float" },
    username_EQUAL: { __type: "String" },
    username_GT: { __type: "Int" },
    username_GTE: { __type: "Int" },
    username_LONGEST_EQUAL: { __type: "Int" },
    username_LONGEST_GT: { __type: "Int" },
    username_LONGEST_GTE: { __type: "Int" },
    username_LONGEST_LT: { __type: "Int" },
    username_LONGEST_LTE: { __type: "Int" },
    username_LT: { __type: "Int" },
    username_LTE: { __type: "Int" },
    username_SHORTEST_EQUAL: { __type: "Int" },
    username_SHORTEST_GT: { __type: "Int" },
    username_SHORTEST_GTE: { __type: "Int" },
    username_SHORTEST_LT: { __type: "Int" },
    username_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationMembersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveUser!" },
  },
  HiveOrganisationMembersUpdateConnectionInput: {
    node: { __type: "HiveUserUpdateInput" },
  },
  HiveOrganisationMembersUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationMembersUpdateConnectionInput" },
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
  },
  HiveOrganisationOnCreateInput: { name: { __type: "String" } },
  HiveOrganisationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveOrganisationSort!]" },
  },
  HiveOrganisationRelationInput: {
    appliances: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    files: { __type: "HiveOrganisationFilesCreateFieldInput" },
    integrations: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    roles: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsCreateFieldInput!]",
    },
  },
  HiveOrganisationRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationRoleRolesNodeAggregateSelection" },
  },
  HiveOrganisationRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveOrganisationRolesAggregateInput: {
    AND: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationRolesNodeAggregationWhereInput" },
  },
  HiveOrganisationRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  HiveOrganisationRolesConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationRolesConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  HiveOrganisationRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleOnCreateInput!" },
  },
  HiveOrganisationRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveOrganisationRolesConnectionWhere: {
    AND: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveOrganisationRolesCreateFieldInput: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveOrganisationRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationRolesFieldInput: {
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
  },
  HiveOrganisationRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  HiveOrganisationRolesUpdateConnectionInput: {
    node: { __type: "RoleUpdateInput" },
  },
  HiveOrganisationRolesUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    update: { __type: "HiveOrganisationRolesUpdateConnectionInput" },
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
  },
  HiveOrganisationSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveOrganisationSubscriptionsAggregateInput: {
    AND: { __type: "[HiveOrganisationSubscriptionsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationSubscriptionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveOrganisationSubscriptionsNodeAggregationWhereInput" },
  },
  HiveOrganisationSubscriptionsConnectFieldInput: {
    connect: { __type: "[HiveApplianceConfigurationConnectInput!]" },
    where: { __type: "HiveApplianceConfigurationConnectWhere" },
  },
  HiveOrganisationSubscriptionsConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveOrganisationSubscriptionsConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConfigurationConnectOrCreateWhere!" },
  },
  HiveOrganisationSubscriptionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceConfigurationOnCreateInput!" },
  },
  HiveOrganisationSubscriptionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationSubscriptionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveOrganisationSubscriptionsConnectionSort: {
    node: { __type: "HiveApplianceConfigurationSort" },
  },
  HiveOrganisationSubscriptionsConnectionWhere: {
    AND: { __type: "[HiveOrganisationSubscriptionsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationSubscriptionsConnectionWhere!]" },
    node: { __type: "HiveApplianceConfigurationWhere" },
    node_NOT: { __type: "HiveApplianceConfigurationWhere" },
  },
  HiveOrganisationSubscriptionsCreateFieldInput: {
    node: { __type: "HiveApplianceConfigurationCreateInput!" },
  },
  HiveOrganisationSubscriptionsDeleteFieldInput: {
    delete: { __type: "HiveApplianceConfigurationDeleteInput" },
    where: { __type: "HiveOrganisationSubscriptionsConnectionWhere" },
  },
  HiveOrganisationSubscriptionsDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceConfigurationDisconnectInput" },
    where: { __type: "HiveOrganisationSubscriptionsConnectionWhere" },
  },
  HiveOrganisationSubscriptionsFieldInput: {
    connect: { __type: "[HiveOrganisationSubscriptionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationSubscriptionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationSubscriptionsCreateFieldInput!]" },
  },
  HiveOrganisationSubscriptionsNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveOrganisationSubscriptionsNodeAggregationWhereInput!]",
    },
    OR: { __type: "[HiveOrganisationSubscriptionsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    key_AVERAGE_EQUAL: { __type: "Float" },
    key_AVERAGE_GT: { __type: "Float" },
    key_AVERAGE_GTE: { __type: "Float" },
    key_AVERAGE_LT: { __type: "Float" },
    key_AVERAGE_LTE: { __type: "Float" },
    key_EQUAL: { __type: "String" },
    key_GT: { __type: "Int" },
    key_GTE: { __type: "Int" },
    key_LONGEST_EQUAL: { __type: "Int" },
    key_LONGEST_GT: { __type: "Int" },
    key_LONGEST_GTE: { __type: "Int" },
    key_LONGEST_LT: { __type: "Int" },
    key_LONGEST_LTE: { __type: "Int" },
    key_LT: { __type: "Int" },
    key_LTE: { __type: "Int" },
    key_SHORTEST_EQUAL: { __type: "Int" },
    key_SHORTEST_GT: { __type: "Int" },
    key_SHORTEST_GTE: { __type: "Int" },
    key_SHORTEST_LT: { __type: "Int" },
    key_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationSubscriptionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveApplianceConfiguration!" },
  },
  HiveOrganisationSubscriptionsUpdateConnectionInput: {
    node: { __type: "HiveApplianceConfigurationUpdateInput" },
  },
  HiveOrganisationSubscriptionsUpdateFieldInput: {
    connect: { __type: "[HiveOrganisationSubscriptionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationSubscriptionsConnectOrCreateFieldInput!]",
    },
    create: { __type: "[HiveOrganisationSubscriptionsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationSubscriptionsDeleteFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationSubscriptionsDisconnectFieldInput!]",
    },
    update: { __type: "HiveOrganisationSubscriptionsUpdateConnectionInput" },
    where: { __type: "HiveOrganisationSubscriptionsConnectionWhere" },
  },
  HiveOrganisationUniqueWhere: { id: { __type: "ID" } },
  HiveOrganisationUpdateInput: {
    appliances: { __type: "[HiveOrganisationAppliancesUpdateFieldInput!]" },
    files: { __type: "HiveOrganisationFilesUpdateInput" },
    integrations: { __type: "[HiveOrganisationIntegrationsUpdateFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersUpdateFieldInput!]" },
    name: { __type: "String" },
    roles: { __type: "[HiveOrganisationRolesUpdateFieldInput!]" },
    subscriptions: {
      __type: "[HiveOrganisationSubscriptionsUpdateFieldInput!]",
    },
  },
  HiveOrganisationWhere: {
    AND: { __type: "[HiveOrganisationWhere!]" },
    OR: { __type: "[HiveOrganisationWhere!]" },
    appliancesAggregate: { __type: "HiveOrganisationAppliancesAggregateInput" },
    appliancesConnection_ALL: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliancesConnection_NONE: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliancesConnection_SINGLE: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliancesConnection_SOME: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliances_ALL: { __type: "HiveApplianceWhere" },
    appliances_NONE: { __type: "HiveApplianceWhere" },
    appliances_SINGLE: { __type: "HiveApplianceWhere" },
    appliances_SOME: { __type: "HiveApplianceWhere" },
    filesConnection: { __type: "HiveOrganisationFilesConnectionWhere" },
    filesConnection_NOT: { __type: "HiveOrganisationFilesConnectionWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    integrationsAggregate: {
      __type: "HiveOrganisationIntegrationsAggregateInput",
    },
    integrationsConnection_ALL: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrationsConnection_NONE: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrationsConnection_SINGLE: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrationsConnection_SOME: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrations_ALL: { __type: "HiveIntegrationInstanceWhere" },
    integrations_NONE: { __type: "HiveIntegrationInstanceWhere" },
    integrations_SINGLE: { __type: "HiveIntegrationInstanceWhere" },
    integrations_SOME: { __type: "HiveIntegrationInstanceWhere" },
    membersAggregate: { __type: "HiveOrganisationMembersAggregateInput" },
    membersConnection_ALL: { __type: "HiveOrganisationMembersConnectionWhere" },
    membersConnection_NONE: {
      __type: "HiveOrganisationMembersConnectionWhere",
    },
    membersConnection_SINGLE: {
      __type: "HiveOrganisationMembersConnectionWhere",
    },
    membersConnection_SOME: {
      __type: "HiveOrganisationMembersConnectionWhere",
    },
    members_ALL: { __type: "HiveUserWhere" },
    members_NONE: { __type: "HiveUserWhere" },
    members_SINGLE: { __type: "HiveUserWhere" },
    members_SOME: { __type: "HiveUserWhere" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    rolesAggregate: { __type: "HiveOrganisationRolesAggregateInput" },
    rolesConnection_ALL: { __type: "HiveOrganisationRolesConnectionWhere" },
    rolesConnection_NONE: { __type: "HiveOrganisationRolesConnectionWhere" },
    rolesConnection_SINGLE: { __type: "HiveOrganisationRolesConnectionWhere" },
    rolesConnection_SOME: { __type: "HiveOrganisationRolesConnectionWhere" },
    roles_ALL: { __type: "RoleWhere" },
    roles_NONE: { __type: "RoleWhere" },
    roles_SINGLE: { __type: "RoleWhere" },
    roles_SOME: { __type: "RoleWhere" },
    subscriptionsAggregate: {
      __type: "HiveOrganisationSubscriptionsAggregateInput",
    },
    subscriptionsConnection_ALL: {
      __type: "HiveOrganisationSubscriptionsConnectionWhere",
    },
    subscriptionsConnection_NONE: {
      __type: "HiveOrganisationSubscriptionsConnectionWhere",
    },
    subscriptionsConnection_SINGLE: {
      __type: "HiveOrganisationSubscriptionsConnectionWhere",
    },
    subscriptionsConnection_SOME: {
      __type: "HiveOrganisationSubscriptionsConnectionWhere",
    },
    subscriptions_ALL: { __type: "HiveApplianceConfigurationWhere" },
    subscriptions_NONE: { __type: "HiveApplianceConfigurationWhere" },
    subscriptions_SINGLE: { __type: "HiveApplianceConfigurationWhere" },
    subscriptions_SOME: { __type: "HiveApplianceConfigurationWhere" },
  },
  HiveService: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveServiceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveServiceConnectWhere: { node: { __type: "HiveServiceWhere!" } },
  HiveServiceCreateInput: { id: { __type: "ID!" }, name: { __type: "String" } },
  HiveServiceOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveServiceSort!]" },
  },
  HiveServiceSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveServiceUpdateInput: { id: { __type: "ID" }, name: { __type: "String" } },
  HiveServiceWhere: {
    AND: { __type: "[HiveServiceWhere!]" },
    OR: { __type: "[HiveServiceWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  HiveType: {
    __typename: { __type: "String!" },
    fields: {
      __type: "[HiveTypeField!]!",
      __args: {
        directed: "Boolean",
        options: "HiveTypeFieldOptions",
        where: "HiveTypeFieldWhere",
      },
    },
    fieldsAggregate: {
      __type: "HiveTypeHiveTypeFieldFieldsAggregationSelection",
      __args: { directed: "Boolean", where: "HiveTypeFieldWhere" },
    },
    fieldsConnection: {
      __type: "HiveTypeFieldsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveTypeFieldsConnectionSort!]",
        where: "HiveTypeFieldsConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    usedIn: {
      __type: "[HiveAppliance!]!",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceOptions",
        where: "HiveApplianceWhere",
      },
    },
    usedInAggregate: {
      __type: "HiveTypeHiveApplianceUsedInAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceWhere" },
    },
    usedInConnection: {
      __type: "HiveTypeUsedInConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveTypeUsedInConnectionSort!]",
        where: "HiveTypeUsedInConnectionWhere",
      },
    },
  },
  HiveTypeAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveTypeConnectInput: {
    fields: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
  },
  HiveTypeConnectOrCreateInput: {
    fields: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
  },
  HiveTypeConnectOrCreateWhere: { node: { __type: "HiveTypeUniqueWhere!" } },
  HiveTypeConnectWhere: { node: { __type: "HiveTypeWhere!" } },
  HiveTypeCreateInput: {
    fields: { __type: "HiveTypeFieldsFieldInput" },
    name: { __type: "String" },
    usedIn: { __type: "HiveTypeUsedInFieldInput" },
  },
  HiveTypeDeleteInput: {
    fields: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
  },
  HiveTypeDisconnectInput: {
    fields: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
  },
  HiveTypeField: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    type: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveTypeFieldConnectOrCreateWhere: {
    node: { __type: "HiveTypeFieldUniqueWhere!" },
  },
  HiveTypeFieldConnectWhere: { node: { __type: "HiveTypeFieldWhere!" } },
  HiveTypeFieldCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldOnCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveTypeFieldSort!]" },
  },
  HiveTypeFieldSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  HiveTypeFieldUniqueWhere: { id: { __type: "ID" } },
  HiveTypeFieldUpdateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldWhere: {
    AND: { __type: "[HiveTypeFieldWhere!]" },
    OR: { __type: "[HiveTypeFieldWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  HiveTypeFieldsAggregateInput: {
    AND: { __type: "[HiveTypeFieldsAggregateInput!]" },
    OR: { __type: "[HiveTypeFieldsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveTypeFieldsNodeAggregationWhereInput" },
  },
  HiveTypeFieldsConnectFieldInput: {
    where: { __type: "HiveTypeFieldConnectWhere" },
  },
  HiveTypeFieldsConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveTypeFieldsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveTypeFieldConnectOrCreateWhere!" },
  },
  HiveTypeFieldsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeFieldOnCreateInput!" },
  },
  HiveTypeFieldsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeFieldsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveTypeFieldsConnectionSort: { node: { __type: "HiveTypeFieldSort" } },
  HiveTypeFieldsConnectionWhere: {
    AND: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    OR: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    node: { __type: "HiveTypeFieldWhere" },
    node_NOT: { __type: "HiveTypeFieldWhere" },
  },
  HiveTypeFieldsCreateFieldInput: {
    node: { __type: "HiveTypeFieldCreateInput!" },
  },
  HiveTypeFieldsDeleteFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsDisconnectFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsFieldInput: {
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
  },
  HiveTypeFieldsNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeFieldsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveTypeField!" },
  },
  HiveTypeFieldsUpdateConnectionInput: {
    node: { __type: "HiveTypeFieldUpdateInput" },
  },
  HiveTypeFieldsUpdateFieldInput: {
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    delete: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    disconnect: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    update: { __type: "HiveTypeFieldsUpdateConnectionInput" },
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeHiveApplianceUsedInAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveApplianceUsedInNodeAggregateSelection" },
  },
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  HiveTypeHiveTypeFieldFieldsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection" },
  },
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    type: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveTypeOnCreateInput: { name: { __type: "String" } },
  HiveTypeOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveTypeSort!]" },
  },
  HiveTypePermission: {
    __typename: { __type: "String!" },
    configuration: {
      __type: "HiveApplianceConfiguration",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceConfigurationOptions",
        where: "HiveApplianceConfigurationWhere",
      },
    },
    configurationAggregate: {
      __type:
        "HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceConfigurationWhere" },
    },
    configurationConnection: {
      __type: "HiveTypePermissionConfigurationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveTypePermissionConfigurationConnectionSort!]",
        where: "HiveTypePermissionConfigurationConnectionWhere",
      },
    },
    create: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    id: { __type: "ID!" },
    read: { __type: "Boolean" },
    type: { __type: "String" },
    update: { __type: "Boolean" },
  },
  HiveTypePermissionAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    type: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveTypePermissionConfigurationAggregateInput: {
    AND: { __type: "[HiveTypePermissionConfigurationAggregateInput!]" },
    OR: { __type: "[HiveTypePermissionConfigurationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: {
      __type: "HiveTypePermissionConfigurationNodeAggregationWhereInput",
    },
  },
  HiveTypePermissionConfigurationConnectFieldInput: {
    connect: { __type: "HiveApplianceConfigurationConnectInput" },
    where: { __type: "HiveApplianceConfigurationConnectWhere" },
  },
  HiveTypePermissionConfigurationConnectOrCreateFieldInput: {
    onCreate: {
      __type:
        "HiveTypePermissionConfigurationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveApplianceConfigurationConnectOrCreateWhere!" },
  },
  HiveTypePermissionConfigurationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceConfigurationOnCreateInput!" },
  },
  HiveTypePermissionConfigurationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypePermissionConfigurationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveTypePermissionConfigurationConnectionSort: {
    node: { __type: "HiveApplianceConfigurationSort" },
  },
  HiveTypePermissionConfigurationConnectionWhere: {
    AND: { __type: "[HiveTypePermissionConfigurationConnectionWhere!]" },
    OR: { __type: "[HiveTypePermissionConfigurationConnectionWhere!]" },
    node: { __type: "HiveApplianceConfigurationWhere" },
    node_NOT: { __type: "HiveApplianceConfigurationWhere" },
  },
  HiveTypePermissionConfigurationCreateFieldInput: {
    node: { __type: "HiveApplianceConfigurationCreateInput!" },
  },
  HiveTypePermissionConfigurationDeleteFieldInput: {
    delete: { __type: "HiveApplianceConfigurationDeleteInput" },
    where: { __type: "HiveTypePermissionConfigurationConnectionWhere" },
  },
  HiveTypePermissionConfigurationDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceConfigurationDisconnectInput" },
    where: { __type: "HiveTypePermissionConfigurationConnectionWhere" },
  },
  HiveTypePermissionConfigurationFieldInput: {
    connect: { __type: "HiveTypePermissionConfigurationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveTypePermissionConfigurationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveTypePermissionConfigurationCreateFieldInput" },
  },
  HiveTypePermissionConfigurationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveTypePermissionConfigurationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveTypePermissionConfigurationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    key_AVERAGE_EQUAL: { __type: "Float" },
    key_AVERAGE_GT: { __type: "Float" },
    key_AVERAGE_GTE: { __type: "Float" },
    key_AVERAGE_LT: { __type: "Float" },
    key_AVERAGE_LTE: { __type: "Float" },
    key_EQUAL: { __type: "String" },
    key_GT: { __type: "Int" },
    key_GTE: { __type: "Int" },
    key_LONGEST_EQUAL: { __type: "Int" },
    key_LONGEST_GT: { __type: "Int" },
    key_LONGEST_GTE: { __type: "Int" },
    key_LONGEST_LT: { __type: "Int" },
    key_LONGEST_LTE: { __type: "Int" },
    key_LT: { __type: "Int" },
    key_LTE: { __type: "Int" },
    key_SHORTEST_EQUAL: { __type: "Int" },
    key_SHORTEST_GT: { __type: "Int" },
    key_SHORTEST_GTE: { __type: "Int" },
    key_SHORTEST_LT: { __type: "Int" },
    key_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypePermissionConfigurationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveApplianceConfiguration!" },
  },
  HiveTypePermissionConfigurationUpdateConnectionInput: {
    node: { __type: "HiveApplianceConfigurationUpdateInput" },
  },
  HiveTypePermissionConfigurationUpdateFieldInput: {
    connect: { __type: "HiveTypePermissionConfigurationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveTypePermissionConfigurationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveTypePermissionConfigurationCreateFieldInput" },
    delete: { __type: "HiveTypePermissionConfigurationDeleteFieldInput" },
    disconnect: {
      __type: "HiveTypePermissionConfigurationDisconnectFieldInput",
    },
    update: { __type: "HiveTypePermissionConfigurationUpdateConnectionInput" },
    where: { __type: "HiveTypePermissionConfigurationConnectionWhere" },
  },
  HiveTypePermissionConnectInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationConnectFieldInput",
    },
  },
  HiveTypePermissionConnectOrCreateInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationConnectOrCreateFieldInput",
    },
  },
  HiveTypePermissionConnectOrCreateWhere: {
    node: { __type: "HiveTypePermissionUniqueWhere!" },
  },
  HiveTypePermissionConnectWhere: {
    node: { __type: "HiveTypePermissionWhere!" },
  },
  HiveTypePermissionCreateInput: {
    configuration: { __type: "HiveTypePermissionConfigurationFieldInput" },
    create: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    read: { __type: "Boolean" },
    type: { __type: "String" },
    update: { __type: "Boolean" },
  },
  HiveTypePermissionDeleteInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationDeleteFieldInput",
    },
  },
  HiveTypePermissionDisconnectInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationDisconnectFieldInput",
    },
  },
  HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection:
    {
      __typename: { __type: "String!" },
      count: { __type: "Int!" },
      node: {
        __type:
          "HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection",
      },
    },
  HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection:
    {
      __typename: { __type: "String!" },
      id: { __type: "IDAggregateSelectionNonNullable!" },
      key: { __type: "StringAggregateSelectionNullable!" },
    },
  HiveTypePermissionOnCreateInput: {
    create: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    read: { __type: "Boolean" },
    type: { __type: "String" },
    update: { __type: "Boolean" },
  },
  HiveTypePermissionOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveTypePermissionSort!]" },
  },
  HiveTypePermissionRelationInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationCreateFieldInput",
    },
  },
  HiveTypePermissionSort: {
    create: { __type: "SortDirection" },
    delete: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    read: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
    update: { __type: "SortDirection" },
  },
  HiveTypePermissionUniqueWhere: { id: { __type: "ID" } },
  HiveTypePermissionUpdateInput: {
    configuration: {
      __type: "HiveTypePermissionConfigurationUpdateFieldInput",
    },
    create: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    read: { __type: "Boolean" },
    type: { __type: "String" },
    update: { __type: "Boolean" },
  },
  HiveTypePermissionWhere: {
    AND: { __type: "[HiveTypePermissionWhere!]" },
    OR: { __type: "[HiveTypePermissionWhere!]" },
    configuration: { __type: "HiveApplianceConfigurationWhere" },
    configurationAggregate: {
      __type: "HiveTypePermissionConfigurationAggregateInput",
    },
    configurationConnection: {
      __type: "HiveTypePermissionConfigurationConnectionWhere",
    },
    configurationConnection_NOT: {
      __type: "HiveTypePermissionConfigurationConnectionWhere",
    },
    configuration_NOT: { __type: "HiveApplianceConfigurationWhere" },
    create: { __type: "Boolean" },
    create_NOT: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    delete_NOT: { __type: "Boolean" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    read: { __type: "Boolean" },
    read_NOT: { __type: "Boolean" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
    update: { __type: "Boolean" },
    update_NOT: { __type: "Boolean" },
  },
  HiveTypeRelationInput: {
    fields: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
  },
  HiveTypeSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveTypeUniqueWhere: { id: { __type: "ID" } },
  HiveTypeUpdateInput: {
    fields: { __type: "[HiveTypeFieldsUpdateFieldInput!]" },
    name: { __type: "String" },
    usedIn: { __type: "[HiveTypeUsedInUpdateFieldInput!]" },
  },
  HiveTypeUsedInAggregateInput: {
    AND: { __type: "[HiveTypeUsedInAggregateInput!]" },
    OR: { __type: "[HiveTypeUsedInAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveTypeUsedInNodeAggregationWhereInput" },
  },
  HiveTypeUsedInConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  HiveTypeUsedInConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveTypeUsedInConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  HiveTypeUsedInConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceOnCreateInput!" },
  },
  HiveTypeUsedInConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeUsedInRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveTypeUsedInConnectionSort: { node: { __type: "HiveApplianceSort" } },
  HiveTypeUsedInConnectionWhere: {
    AND: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    OR: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveTypeUsedInCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveTypeUsedInDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeUsedInDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeUsedInFieldInput: {
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
  },
  HiveTypeUsedInNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeUsedInRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveTypeUsedInUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveTypeUsedInUpdateFieldInput: {
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
    delete: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
    disconnect: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
    update: { __type: "HiveTypeUsedInUpdateConnectionInput" },
    where: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveTypeWhere: {
    AND: { __type: "[HiveTypeWhere!]" },
    OR: { __type: "[HiveTypeWhere!]" },
    fieldsAggregate: { __type: "HiveTypeFieldsAggregateInput" },
    fieldsConnection_ALL: { __type: "HiveTypeFieldsConnectionWhere" },
    fieldsConnection_NONE: { __type: "HiveTypeFieldsConnectionWhere" },
    fieldsConnection_SINGLE: { __type: "HiveTypeFieldsConnectionWhere" },
    fieldsConnection_SOME: { __type: "HiveTypeFieldsConnectionWhere" },
    fields_ALL: { __type: "HiveTypeFieldWhere" },
    fields_NONE: { __type: "HiveTypeFieldWhere" },
    fields_SINGLE: { __type: "HiveTypeFieldWhere" },
    fields_SOME: { __type: "HiveTypeFieldWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    usedInAggregate: { __type: "HiveTypeUsedInAggregateInput" },
    usedInConnection_ALL: { __type: "HiveTypeUsedInConnectionWhere" },
    usedInConnection_NONE: { __type: "HiveTypeUsedInConnectionWhere" },
    usedInConnection_SINGLE: { __type: "HiveTypeUsedInConnectionWhere" },
    usedInConnection_SOME: { __type: "HiveTypeUsedInConnectionWhere" },
    usedIn_ALL: { __type: "HiveApplianceWhere" },
    usedIn_NONE: { __type: "HiveApplianceWhere" },
    usedIn_SINGLE: { __type: "HiveApplianceWhere" },
    usedIn_SOME: { __type: "HiveApplianceWhere" },
  },
  HiveUser: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        directed: "Boolean",
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "HiveUserHiveOrganisationOrganisationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "HiveUserOrganisationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveUserOrganisationConnectionSort!]",
        where: "HiveUserOrganisationConnectionWhere",
      },
    },
    password: { __type: "String" },
    roles: {
      __type: "[Role!]!",
      __args: {
        directed: "Boolean",
        options: "RoleOptions",
        where: "RoleWhere",
      },
    },
    rolesAggregate: {
      __type: "HiveUserRoleRolesAggregationSelection",
      __args: { directed: "Boolean", where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "HiveUserRolesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[HiveUserRolesConnectionSort!]",
        where: "HiveUserRolesConnectionWhere",
      },
    },
    username: { __type: "String" },
  },
  HiveUserAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    password: { __type: "StringAggregateSelectionNullable!" },
    username: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveUserConnectInput: {
    organisation: { __type: "HiveUserOrganisationConnectFieldInput" },
    roles: { __type: "[HiveUserRolesConnectFieldInput!]" },
  },
  HiveUserConnectOrCreateInput: {
    organisation: { __type: "HiveUserOrganisationConnectOrCreateFieldInput" },
    roles: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
  },
  HiveUserConnectOrCreateWhere: { node: { __type: "HiveUserUniqueWhere!" } },
  HiveUserConnectWhere: { node: { __type: "HiveUserWhere!" } },
  HiveUserCreateInput: {
    name: { __type: "String" },
    organisation: { __type: "HiveUserOrganisationFieldInput" },
    password: { __type: "String" },
    roles: { __type: "HiveUserRolesFieldInput" },
    username: { __type: "String" },
  },
  HiveUserDeleteInput: {
    organisation: { __type: "HiveUserOrganisationDeleteFieldInput" },
    roles: { __type: "[HiveUserRolesDeleteFieldInput!]" },
  },
  HiveUserDisconnectInput: {
    organisation: { __type: "HiveUserOrganisationDisconnectFieldInput" },
    roles: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
  },
  HiveUserHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveUserOnCreateInput: {
    name: { __type: "String" },
    password: { __type: "String" },
    username: { __type: "String" },
  },
  HiveUserOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[HiveUserSort!]" },
  },
  HiveUserOrganisationAggregateInput: {
    AND: { __type: "[HiveUserOrganisationAggregateInput!]" },
    OR: { __type: "[HiveUserOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveUserOrganisationNodeAggregationWhereInput" },
  },
  HiveUserOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  HiveUserOrganisationConnectOrCreateFieldInput: {
    onCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInputOnCreate!",
    },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  HiveUserOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationOnCreateInput!" },
  },
  HiveUserOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveUserOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveUserOrganisationConnectionWhere: {
    AND: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveUserOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveUserOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserOrganisationFieldInput: {
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
  },
  HiveUserOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveUserOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveUserOrganisationUpdateFieldInput: {
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
    delete: { __type: "HiveUserOrganisationDeleteFieldInput" },
    disconnect: { __type: "HiveUserOrganisationDisconnectFieldInput" },
    update: { __type: "HiveUserOrganisationUpdateConnectionInput" },
    where: { __type: "HiveUserOrganisationConnectionWhere" },
  },
  HiveUserRelationInput: {
    organisation: { __type: "HiveUserOrganisationCreateFieldInput" },
    roles: { __type: "[HiveUserRolesCreateFieldInput!]" },
  },
  HiveUserRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveUserRoleRolesNodeAggregateSelection" },
  },
  HiveUserRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  HiveUserRolesAggregateInput: {
    AND: { __type: "[HiveUserRolesAggregateInput!]" },
    OR: { __type: "[HiveUserRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "HiveUserRolesNodeAggregationWhereInput" },
  },
  HiveUserRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  HiveUserRolesConnectOrCreateFieldInput: {
    onCreate: { __type: "HiveUserRolesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  HiveUserRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleOnCreateInput!" },
  },
  HiveUserRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  HiveUserRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveUserRolesConnectionWhere: {
    AND: { __type: "[HiveUserRolesConnectionWhere!]" },
    OR: { __type: "[HiveUserRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveUserRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  HiveUserRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserRolesFieldInput: {
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
  },
  HiveUserRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  HiveUserRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  HiveUserRolesUpdateFieldInput: {
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
    delete: { __type: "[HiveUserRolesDeleteFieldInput!]" },
    disconnect: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
    update: { __type: "HiveUserRolesUpdateConnectionInput" },
    where: { __type: "HiveUserRolesConnectionWhere" },
  },
  HiveUserSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    password: { __type: "SortDirection" },
    username: { __type: "SortDirection" },
  },
  HiveUserUniqueWhere: { id: { __type: "ID" } },
  HiveUserUpdateInput: {
    name: { __type: "String" },
    organisation: { __type: "HiveUserOrganisationUpdateFieldInput" },
    password: { __type: "String" },
    roles: { __type: "[HiveUserRolesUpdateFieldInput!]" },
    username: { __type: "String" },
  },
  HiveUserWhere: {
    AND: { __type: "[HiveUserWhere!]" },
    OR: { __type: "[HiveUserWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "HiveUserOrganisationAggregateInput" },
    organisationConnection: { __type: "HiveUserOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "HiveUserOrganisationConnectionWhere",
    },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    password: { __type: "String" },
    password_CONTAINS: { __type: "String" },
    password_ENDS_WITH: { __type: "String" },
    password_IN: { __type: "[String]" },
    password_NOT: { __type: "String" },
    password_NOT_CONTAINS: { __type: "String" },
    password_NOT_ENDS_WITH: { __type: "String" },
    password_NOT_IN: { __type: "[String]" },
    password_NOT_STARTS_WITH: { __type: "String" },
    password_STARTS_WITH: { __type: "String" },
    rolesAggregate: { __type: "HiveUserRolesAggregateInput" },
    rolesConnection_ALL: { __type: "HiveUserRolesConnectionWhere" },
    rolesConnection_NONE: { __type: "HiveUserRolesConnectionWhere" },
    rolesConnection_SINGLE: { __type: "HiveUserRolesConnectionWhere" },
    rolesConnection_SOME: { __type: "HiveUserRolesConnectionWhere" },
    roles_ALL: { __type: "RoleWhere" },
    roles_NONE: { __type: "RoleWhere" },
    roles_SINGLE: { __type: "RoleWhere" },
    roles_SOME: { __type: "RoleWhere" },
    username: { __type: "String" },
    username_CONTAINS: { __type: "String" },
    username_ENDS_WITH: { __type: "String" },
    username_IN: { __type: "[String]" },
    username_NOT: { __type: "String" },
    username_NOT_CONTAINS: { __type: "String" },
    username_NOT_ENDS_WITH: { __type: "String" },
    username_NOT_IN: { __type: "[String]" },
    username_NOT_STARTS_WITH: { __type: "String" },
    username_STARTS_WITH: { __type: "String" },
  },
  IDAggregateSelectionNonNullable: {
    __typename: { __type: "String!" },
    longest: { __type: "ID!" },
    shortest: { __type: "ID!" },
  },
  IntAggregateSelectionNonNullable: {
    __typename: { __type: "String!" },
    average: { __type: "Float!" },
    max: { __type: "Int!" },
    min: { __type: "Int!" },
    sum: { __type: "Int!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  Permission: {
    __typename: { __type: "String!" },
    action: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    roles: {
      __type: "[Role!]!",
      __args: {
        directed: "Boolean",
        options: "RoleOptions",
        where: "RoleWhere",
      },
    },
    rolesAggregate: {
      __type: "PermissionRoleRolesAggregationSelection",
      __args: { directed: "Boolean", where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "PermissionRolesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[PermissionRolesConnectionSort!]",
        where: "PermissionRolesConnectionWhere",
      },
    },
    scope: { __type: "String" },
  },
  PermissionAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelectionNullable!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    scope: { __type: "StringAggregateSelectionNullable!" },
  },
  PermissionConnectInput: {
    roles: { __type: "[PermissionRolesConnectFieldInput!]" },
  },
  PermissionConnectOrCreateInput: {
    roles: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
  },
  PermissionConnectOrCreateWhere: {
    node: { __type: "PermissionUniqueWhere!" },
  },
  PermissionConnectWhere: { node: { __type: "PermissionWhere!" } },
  PermissionCreateInput: {
    action: { __type: "String" },
    name: { __type: "String" },
    roles: { __type: "PermissionRolesFieldInput" },
    scope: { __type: "String" },
  },
  PermissionDeleteInput: {
    roles: { __type: "[PermissionRolesDeleteFieldInput!]" },
  },
  PermissionDisconnectInput: {
    roles: { __type: "[PermissionRolesDisconnectFieldInput!]" },
  },
  PermissionOnCreateInput: {
    action: { __type: "String" },
    name: { __type: "String" },
    scope: { __type: "String" },
  },
  PermissionOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[PermissionSort!]" },
  },
  PermissionRelationInput: {
    roles: { __type: "[PermissionRolesCreateFieldInput!]" },
  },
  PermissionRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "PermissionRoleRolesNodeAggregateSelection" },
  },
  PermissionRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  PermissionRolesAggregateInput: {
    AND: { __type: "[PermissionRolesAggregateInput!]" },
    OR: { __type: "[PermissionRolesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "PermissionRolesNodeAggregationWhereInput" },
  },
  PermissionRolesConnectFieldInput: {
    connect: { __type: "[RoleConnectInput!]" },
    where: { __type: "RoleConnectWhere" },
  },
  PermissionRolesConnectOrCreateFieldInput: {
    onCreate: { __type: "PermissionRolesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "RoleConnectOrCreateWhere!" },
  },
  PermissionRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleOnCreateInput!" },
  },
  PermissionRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PermissionRolesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  PermissionRolesConnectionSort: { node: { __type: "RoleSort" } },
  PermissionRolesConnectionWhere: {
    AND: { __type: "[PermissionRolesConnectionWhere!]" },
    OR: { __type: "[PermissionRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  PermissionRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  PermissionRolesDeleteFieldInput: {
    delete: { __type: "RoleDeleteInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionRolesDisconnectFieldInput: {
    disconnect: { __type: "RoleDisconnectInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionRolesFieldInput: {
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
  },
  PermissionRolesNodeAggregationWhereInput: {
    AND: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  PermissionRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  PermissionRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  PermissionRolesUpdateFieldInput: {
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
    delete: { __type: "[PermissionRolesDeleteFieldInput!]" },
    disconnect: { __type: "[PermissionRolesDisconnectFieldInput!]" },
    update: { __type: "PermissionRolesUpdateConnectionInput" },
    where: { __type: "PermissionRolesConnectionWhere" },
  },
  PermissionSort: {
    action: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    scope: { __type: "SortDirection" },
  },
  PermissionUniqueWhere: { id: { __type: "ID" } },
  PermissionUpdateInput: {
    action: { __type: "String" },
    name: { __type: "String" },
    roles: { __type: "[PermissionRolesUpdateFieldInput!]" },
    scope: { __type: "String" },
  },
  PermissionWhere: {
    AND: { __type: "[PermissionWhere!]" },
    OR: { __type: "[PermissionWhere!]" },
    action: { __type: "String" },
    action_CONTAINS: { __type: "String" },
    action_ENDS_WITH: { __type: "String" },
    action_IN: { __type: "[String]" },
    action_NOT: { __type: "String" },
    action_NOT_CONTAINS: { __type: "String" },
    action_NOT_ENDS_WITH: { __type: "String" },
    action_NOT_IN: { __type: "[String]" },
    action_NOT_STARTS_WITH: { __type: "String" },
    action_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    rolesAggregate: { __type: "PermissionRolesAggregateInput" },
    rolesConnection_ALL: { __type: "PermissionRolesConnectionWhere" },
    rolesConnection_NONE: { __type: "PermissionRolesConnectionWhere" },
    rolesConnection_SINGLE: { __type: "PermissionRolesConnectionWhere" },
    rolesConnection_SOME: { __type: "PermissionRolesConnectionWhere" },
    roles_ALL: { __type: "RoleWhere" },
    roles_NONE: { __type: "RoleWhere" },
    roles_SINGLE: { __type: "RoleWhere" },
    roles_SOME: { __type: "RoleWhere" },
    scope: { __type: "String" },
    scope_CONTAINS: { __type: "String" },
    scope_ENDS_WITH: { __type: "String" },
    scope_IN: { __type: "[String]" },
    scope_NOT: { __type: "String" },
    scope_NOT_CONTAINS: { __type: "String" },
    scope_NOT_ENDS_WITH: { __type: "String" },
    scope_NOT_IN: { __type: "[String]" },
    scope_NOT_STARTS_WITH: { __type: "String" },
    scope_STARTS_WITH: { __type: "String" },
  },
  QueryOptions: { limit: { __type: "Int" }, offset: { __type: "Int" } },
  Role: {
    __typename: { __type: "String!" },
    appliances: {
      __type: "[HiveAppliance!]!",
      __args: {
        directed: "Boolean",
        options: "HiveApplianceOptions",
        where: "HiveApplianceWhere",
      },
    },
    appliancesAggregate: {
      __type: "RoleHiveApplianceAppliancesAggregationSelection",
      __args: { directed: "Boolean", where: "HiveApplianceWhere" },
    },
    appliancesConnection: {
      __type: "RoleAppliancesConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[RoleAppliancesConnectionSort!]",
        where: "RoleAppliancesConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        directed: "Boolean",
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    organisationAggregate: {
      __type: "RoleHiveOrganisationOrganisationAggregationSelection",
      __args: { directed: "Boolean", where: "HiveOrganisationWhere" },
    },
    organisationConnection: {
      __type: "RoleOrganisationConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[RoleOrganisationConnectionSort!]",
        where: "RoleOrganisationConnectionWhere",
      },
    },
    permissions: {
      __type: "[Permission!]!",
      __args: {
        directed: "Boolean",
        options: "PermissionOptions",
        where: "PermissionWhere",
      },
    },
    permissionsAggregate: {
      __type: "RolePermissionPermissionsAggregationSelection",
      __args: { directed: "Boolean", where: "PermissionWhere" },
    },
    permissionsConnection: {
      __type: "RolePermissionsConnection!",
      __args: {
        after: "String",
        directed: "Boolean",
        first: "Int",
        sort: "[RolePermissionsConnectionSort!]",
        where: "RolePermissionsConnectionWhere",
      },
    },
  },
  RoleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  RoleAppliancesAggregateInput: {
    AND: { __type: "[RoleAppliancesAggregateInput!]" },
    OR: { __type: "[RoleAppliancesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RoleAppliancesNodeAggregationWhereInput" },
  },
  RoleAppliancesConnectFieldInput: {
    connect: { __type: "[HiveApplianceConnectInput!]" },
    where: { __type: "HiveApplianceConnectWhere" },
  },
  RoleAppliancesConnectOrCreateFieldInput: {
    onCreate: { __type: "RoleAppliancesConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
  },
  RoleAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceOnCreateInput!" },
  },
  RoleAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleAppliancesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RoleAppliancesConnectionSort: { node: { __type: "HiveApplianceSort" } },
  RoleAppliancesConnectionWhere: {
    AND: { __type: "[RoleAppliancesConnectionWhere!]" },
    OR: { __type: "[RoleAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  RoleAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  RoleAppliancesDeleteFieldInput: {
    delete: { __type: "HiveApplianceDeleteInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleAppliancesDisconnectFieldInput: {
    disconnect: { __type: "HiveApplianceDisconnectInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleAppliancesFieldInput: {
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
  },
  RoleAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_AVERAGE_GT: { __type: "Float" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_AVERAGE_LT: { __type: "Float" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_EQUAL: { __type: "String" },
    description_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_LONGEST_GT: { __type: "Int" },
    description_LONGEST_GTE: { __type: "Int" },
    description_LONGEST_LT: { __type: "Int" },
    description_LONGEST_LTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  RoleAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  RoleAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  RoleAppliancesUpdateFieldInput: {
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
    delete: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    disconnect: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    update: { __type: "RoleAppliancesUpdateConnectionInput" },
    where: { __type: "RoleAppliancesConnectionWhere" },
  },
  RoleConnectInput: {
    appliances: { __type: "[RoleAppliancesConnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectFieldInput" },
    permissions: { __type: "[RolePermissionsConnectFieldInput!]" },
  },
  RoleConnectOrCreateInput: {
    appliances: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    permissions: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
  },
  RoleConnectOrCreateWhere: { node: { __type: "RoleUniqueWhere!" } },
  RoleConnectWhere: { node: { __type: "RoleWhere!" } },
  RoleCreateInput: {
    appliances: { __type: "RoleAppliancesFieldInput" },
    name: { __type: "String" },
    organisation: { __type: "RoleOrganisationFieldInput" },
    permissions: { __type: "RolePermissionsFieldInput" },
  },
  RoleDeleteInput: {
    appliances: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    organisation: { __type: "RoleOrganisationDeleteFieldInput" },
    permissions: { __type: "[RolePermissionsDeleteFieldInput!]" },
  },
  RoleDisconnectInput: {
    appliances: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationDisconnectFieldInput" },
    permissions: { __type: "[RolePermissionsDisconnectFieldInput!]" },
  },
  RoleHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveApplianceAppliancesNodeAggregateSelection" },
  },
  RoleHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    description: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    label: { __type: "StringAggregateSelectionNullable!" },
    name: { __type: "StringAggregateSelectionNonNullable!" },
  },
  RoleHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveOrganisationOrganisationNodeAggregateSelection" },
  },
  RoleHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
  },
  RoleOnCreateInput: { name: { __type: "String" } },
  RoleOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[RoleSort!]" },
  },
  RoleOrganisationAggregateInput: {
    AND: { __type: "[RoleOrganisationAggregateInput!]" },
    OR: { __type: "[RoleOrganisationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RoleOrganisationNodeAggregationWhereInput" },
  },
  RoleOrganisationConnectFieldInput: {
    connect: { __type: "HiveOrganisationConnectInput" },
    where: { __type: "HiveOrganisationConnectWhere" },
  },
  RoleOrganisationConnectOrCreateFieldInput: {
    onCreate: { __type: "RoleOrganisationConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
  },
  RoleOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationOnCreateInput!" },
  },
  RoleOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleOrganisationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RoleOrganisationConnectionSort: { node: { __type: "HiveOrganisationSort" } },
  RoleOrganisationConnectionWhere: {
    AND: { __type: "[RoleOrganisationConnectionWhere!]" },
    OR: { __type: "[RoleOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  RoleOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  RoleOrganisationDeleteFieldInput: {
    delete: { __type: "HiveOrganisationDeleteInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RoleOrganisationDisconnectFieldInput: {
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RoleOrganisationFieldInput: {
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    create: { __type: "RoleOrganisationCreateFieldInput" },
  },
  RoleOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  RoleOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  RoleOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  RoleOrganisationUpdateFieldInput: {
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
    create: { __type: "RoleOrganisationCreateFieldInput" },
    delete: { __type: "RoleOrganisationDeleteFieldInput" },
    disconnect: { __type: "RoleOrganisationDisconnectFieldInput" },
    update: { __type: "RoleOrganisationUpdateConnectionInput" },
    where: { __type: "RoleOrganisationConnectionWhere" },
  },
  RolePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RolePermissionPermissionsNodeAggregateSelection" },
  },
  RolePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    action: { __type: "StringAggregateSelectionNullable!" },
    id: { __type: "IDAggregateSelectionNonNullable!" },
    name: { __type: "StringAggregateSelectionNullable!" },
    scope: { __type: "StringAggregateSelectionNullable!" },
  },
  RolePermissionsAggregateInput: {
    AND: { __type: "[RolePermissionsAggregateInput!]" },
    OR: { __type: "[RolePermissionsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "RolePermissionsNodeAggregationWhereInput" },
  },
  RolePermissionsConnectFieldInput: {
    connect: { __type: "[PermissionConnectInput!]" },
    where: { __type: "PermissionConnectWhere" },
  },
  RolePermissionsConnectOrCreateFieldInput: {
    onCreate: { __type: "RolePermissionsConnectOrCreateFieldInputOnCreate!" },
    where: { __type: "PermissionConnectOrCreateWhere!" },
  },
  RolePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionOnCreateInput!" },
  },
  RolePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RolePermissionsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  RolePermissionsConnectionSort: { node: { __type: "PermissionSort" } },
  RolePermissionsConnectionWhere: {
    AND: { __type: "[RolePermissionsConnectionWhere!]" },
    OR: { __type: "[RolePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  RolePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  RolePermissionsDeleteFieldInput: {
    delete: { __type: "PermissionDeleteInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RolePermissionsDisconnectFieldInput: {
    disconnect: { __type: "PermissionDisconnectInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RolePermissionsFieldInput: {
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
  },
  RolePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_AVERAGE_GT: { __type: "Float" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_AVERAGE_LT: { __type: "Float" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_EQUAL: { __type: "String" },
    action_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_LONGEST_GT: { __type: "Int" },
    action_LONGEST_GTE: { __type: "Int" },
    action_LONGEST_LT: { __type: "Int" },
    action_LONGEST_LTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_EQUAL: { __type: "String" },
    scope_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  RolePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  RolePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  RolePermissionsUpdateFieldInput: {
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
    delete: { __type: "[RolePermissionsDeleteFieldInput!]" },
    disconnect: { __type: "[RolePermissionsDisconnectFieldInput!]" },
    update: { __type: "RolePermissionsUpdateConnectionInput" },
    where: { __type: "RolePermissionsConnectionWhere" },
  },
  RoleRelationInput: {
    appliances: { __type: "[RoleAppliancesCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationCreateFieldInput" },
    permissions: { __type: "[RolePermissionsCreateFieldInput!]" },
  },
  RoleSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  RoleUniqueWhere: { id: { __type: "ID" } },
  RoleUpdateInput: {
    appliances: { __type: "[RoleAppliancesUpdateFieldInput!]" },
    name: { __type: "String" },
    organisation: { __type: "RoleOrganisationUpdateFieldInput" },
    permissions: { __type: "[RolePermissionsUpdateFieldInput!]" },
  },
  RoleWhere: {
    AND: { __type: "[RoleWhere!]" },
    OR: { __type: "[RoleWhere!]" },
    appliancesAggregate: { __type: "RoleAppliancesAggregateInput" },
    appliancesConnection_ALL: { __type: "RoleAppliancesConnectionWhere" },
    appliancesConnection_NONE: { __type: "RoleAppliancesConnectionWhere" },
    appliancesConnection_SINGLE: { __type: "RoleAppliancesConnectionWhere" },
    appliancesConnection_SOME: { __type: "RoleAppliancesConnectionWhere" },
    appliances_ALL: { __type: "HiveApplianceWhere" },
    appliances_NONE: { __type: "HiveApplianceWhere" },
    appliances_SINGLE: { __type: "HiveApplianceWhere" },
    appliances_SOME: { __type: "HiveApplianceWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID!]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID!]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "RoleOrganisationAggregateInput" },
    organisationConnection: { __type: "RoleOrganisationConnectionWhere" },
    organisationConnection_NOT: { __type: "RoleOrganisationConnectionWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    permissionsAggregate: { __type: "RolePermissionsAggregateInput" },
    permissionsConnection_ALL: { __type: "RolePermissionsConnectionWhere" },
    permissionsConnection_NONE: { __type: "RolePermissionsConnectionWhere" },
    permissionsConnection_SINGLE: { __type: "RolePermissionsConnectionWhere" },
    permissionsConnection_SOME: { __type: "RolePermissionsConnectionWhere" },
    permissions_ALL: { __type: "PermissionWhere" },
    permissions_NONE: { __type: "PermissionWhere" },
    permissions_SINGLE: { __type: "PermissionWhere" },
    permissions_SOME: { __type: "PermissionWhere" },
  },
  StringAggregateSelectionNonNullable: {
    __typename: { __type: "String!" },
    longest: { __type: "String!" },
    shortest: { __type: "String!" },
  },
  StringAggregateSelectionNullable: {
    __typename: { __type: "String!" },
    longest: { __type: "String" },
    shortest: { __type: "String" },
  },
  UpdateFilesMutationResponse: {
    __typename: { __type: "String!" },
    files: { __type: "[File!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateFoldersMutationResponse: {
    __typename: { __type: "String!" },
    folders: { __type: "[Folder!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveApplianceConfigurationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveApplianceConfigurations: { __type: "[HiveApplianceConfiguration!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    hiveServices: { __type: "[HiveService!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveTypePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypePermissions: { __type: "[HiveTypePermission!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    hiveTypes: { __type: "[HiveType!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    hiveUsers: { __type: "[HiveUser!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    nodesDeleted: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  UpdatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  UpdateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createFiles: {
      __type: "CreateFilesMutationResponse!",
      __args: { input: "[FileCreateInput!]!" },
    },
    createFolders: {
      __type: "CreateFoldersMutationResponse!",
      __args: { input: "[FolderCreateInput!]!" },
    },
    createHiveApplianceConfigurations: {
      __type: "CreateHiveApplianceConfigurationsMutationResponse!",
      __args: { input: "[HiveApplianceConfigurationCreateInput!]!" },
    },
    createHiveAppliances: {
      __type: "CreateHiveAppliancesMutationResponse!",
      __args: { input: "[HiveApplianceCreateInput!]!" },
    },
    createHiveIntegrationInstances: {
      __type: "CreateHiveIntegrationInstancesMutationResponse!",
      __args: { input: "[HiveIntegrationInstanceCreateInput!]!" },
    },
    createHiveIntegrationPathCollections: {
      __type: "CreateHiveIntegrationPathCollectionsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCollectionCreateInput!]!" },
    },
    createHiveIntegrationPaths: {
      __type: "CreateHiveIntegrationPathsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCreateInput!]!" },
    },
    createHiveIntegrations: {
      __type: "CreateHiveIntegrationsMutationResponse!",
      __args: { input: "[HiveIntegrationCreateInput!]!" },
    },
    createHiveOrganisations: {
      __type: "CreateHiveOrganisationsMutationResponse!",
      __args: { input: "[HiveOrganisationCreateInput!]!" },
    },
    createHiveServices: {
      __type: "CreateHiveServicesMutationResponse!",
      __args: { input: "[HiveServiceCreateInput!]!" },
    },
    createHiveTypeFields: {
      __type: "CreateHiveTypeFieldsMutationResponse!",
      __args: { input: "[HiveTypeFieldCreateInput!]!" },
    },
    createHiveTypePermissions: {
      __type: "CreateHiveTypePermissionsMutationResponse!",
      __args: { input: "[HiveTypePermissionCreateInput!]!" },
    },
    createHiveTypes: {
      __type: "CreateHiveTypesMutationResponse!",
      __args: { input: "[HiveTypeCreateInput!]!" },
    },
    createHiveUsers: {
      __type: "CreateHiveUsersMutationResponse!",
      __args: { input: "[HiveUserCreateInput!]!" },
    },
    createPermissions: {
      __type: "CreatePermissionsMutationResponse!",
      __args: { input: "[PermissionCreateInput!]!" },
    },
    createRoles: {
      __type: "CreateRolesMutationResponse!",
      __args: { input: "[RoleCreateInput!]!" },
    },
    deleteFiles: {
      __type: "DeleteInfo!",
      __args: { delete: "FileDeleteInput", where: "FileWhere" },
    },
    deleteFolders: {
      __type: "DeleteInfo!",
      __args: { delete: "FolderDeleteInput", where: "FolderWhere" },
    },
    deleteHiveApplianceConfigurations: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveApplianceConfigurationDeleteInput",
        where: "HiveApplianceConfigurationWhere",
      },
    },
    deleteHiveAppliances: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveApplianceDeleteInput",
        where: "HiveApplianceWhere",
      },
    },
    deleteHiveIntegrationInstances: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveIntegrationInstanceDeleteInput",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    deleteHiveIntegrationPathCollections: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    deleteHiveIntegrationPaths: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveIntegrationPathDeleteInput",
        where: "HiveIntegrationPathWhere",
      },
    },
    deleteHiveIntegrations: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationWhere" },
    },
    deleteHiveOrganisations: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveOrganisationDeleteInput",
        where: "HiveOrganisationWhere",
      },
    },
    deleteHiveServices: {
      __type: "DeleteInfo!",
      __args: { where: "HiveServiceWhere" },
    },
    deleteHiveTypeFields: {
      __type: "DeleteInfo!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    deleteHiveTypePermissions: {
      __type: "DeleteInfo!",
      __args: {
        delete: "HiveTypePermissionDeleteInput",
        where: "HiveTypePermissionWhere",
      },
    },
    deleteHiveTypes: {
      __type: "DeleteInfo!",
      __args: { delete: "HiveTypeDeleteInput", where: "HiveTypeWhere" },
    },
    deleteHiveUsers: {
      __type: "DeleteInfo!",
      __args: { delete: "HiveUserDeleteInput", where: "HiveUserWhere" },
    },
    deletePermissions: {
      __type: "DeleteInfo!",
      __args: { delete: "PermissionDeleteInput", where: "PermissionWhere" },
    },
    deleteRoles: {
      __type: "DeleteInfo!",
      __args: { delete: "RoleDeleteInput", where: "RoleWhere" },
    },
    updateFiles: {
      __type: "UpdateFilesMutationResponse!",
      __args: {
        connect: "FileConnectInput",
        connectOrCreate: "FileConnectOrCreateInput",
        create: "FileRelationInput",
        delete: "FileDeleteInput",
        disconnect: "FileDisconnectInput",
        update: "FileUpdateInput",
        where: "FileWhere",
      },
    },
    updateFolders: {
      __type: "UpdateFoldersMutationResponse!",
      __args: {
        connect: "FolderConnectInput",
        connectOrCreate: "FolderConnectOrCreateInput",
        create: "FolderRelationInput",
        delete: "FolderDeleteInput",
        disconnect: "FolderDisconnectInput",
        update: "FolderUpdateInput",
        where: "FolderWhere",
      },
    },
    updateHiveApplianceConfigurations: {
      __type: "UpdateHiveApplianceConfigurationsMutationResponse!",
      __args: {
        connect: "HiveApplianceConfigurationConnectInput",
        connectOrCreate: "HiveApplianceConfigurationConnectOrCreateInput",
        create: "HiveApplianceConfigurationRelationInput",
        delete: "HiveApplianceConfigurationDeleteInput",
        disconnect: "HiveApplianceConfigurationDisconnectInput",
        update: "HiveApplianceConfigurationUpdateInput",
        where: "HiveApplianceConfigurationWhere",
      },
    },
    updateHiveAppliances: {
      __type: "UpdateHiveAppliancesMutationResponse!",
      __args: {
        connect: "HiveApplianceConnectInput",
        connectOrCreate: "HiveApplianceConnectOrCreateInput",
        create: "HiveApplianceRelationInput",
        delete: "HiveApplianceDeleteInput",
        disconnect: "HiveApplianceDisconnectInput",
        update: "HiveApplianceUpdateInput",
        where: "HiveApplianceWhere",
      },
    },
    updateHiveIntegrationInstances: {
      __type: "UpdateHiveIntegrationInstancesMutationResponse!",
      __args: {
        connect: "HiveIntegrationInstanceConnectInput",
        connectOrCreate: "HiveIntegrationInstanceConnectOrCreateInput",
        create: "HiveIntegrationInstanceRelationInput",
        delete: "HiveIntegrationInstanceDeleteInput",
        disconnect: "HiveIntegrationInstanceDisconnectInput",
        update: "HiveIntegrationInstanceUpdateInput",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    updateHiveIntegrationPathCollections: {
      __type: "UpdateHiveIntegrationPathCollectionsMutationResponse!",
      __args: {
        update: "HiveIntegrationPathCollectionUpdateInput",
        where: "HiveIntegrationPathCollectionWhere",
      },
    },
    updateHiveIntegrationPaths: {
      __type: "UpdateHiveIntegrationPathsMutationResponse!",
      __args: {
        connect: "HiveIntegrationPathConnectInput",
        connectOrCreate: "HiveIntegrationPathConnectOrCreateInput",
        create: "HiveIntegrationPathRelationInput",
        delete: "HiveIntegrationPathDeleteInput",
        disconnect: "HiveIntegrationPathDisconnectInput",
        update: "HiveIntegrationPathUpdateInput",
        where: "HiveIntegrationPathWhere",
      },
    },
    updateHiveIntegrations: {
      __type: "UpdateHiveIntegrationsMutationResponse!",
      __args: {
        update: "HiveIntegrationUpdateInput",
        where: "HiveIntegrationWhere",
      },
    },
    updateHiveOrganisations: {
      __type: "UpdateHiveOrganisationsMutationResponse!",
      __args: {
        connect: "HiveOrganisationConnectInput",
        connectOrCreate: "HiveOrganisationConnectOrCreateInput",
        create: "HiveOrganisationRelationInput",
        delete: "HiveOrganisationDeleteInput",
        disconnect: "HiveOrganisationDisconnectInput",
        update: "HiveOrganisationUpdateInput",
        where: "HiveOrganisationWhere",
      },
    },
    updateHiveServices: {
      __type: "UpdateHiveServicesMutationResponse!",
      __args: { update: "HiveServiceUpdateInput", where: "HiveServiceWhere" },
    },
    updateHiveTypeFields: {
      __type: "UpdateHiveTypeFieldsMutationResponse!",
      __args: {
        update: "HiveTypeFieldUpdateInput",
        where: "HiveTypeFieldWhere",
      },
    },
    updateHiveTypePermissions: {
      __type: "UpdateHiveTypePermissionsMutationResponse!",
      __args: {
        connect: "HiveTypePermissionConnectInput",
        connectOrCreate: "HiveTypePermissionConnectOrCreateInput",
        create: "HiveTypePermissionRelationInput",
        delete: "HiveTypePermissionDeleteInput",
        disconnect: "HiveTypePermissionDisconnectInput",
        update: "HiveTypePermissionUpdateInput",
        where: "HiveTypePermissionWhere",
      },
    },
    updateHiveTypes: {
      __type: "UpdateHiveTypesMutationResponse!",
      __args: {
        connect: "HiveTypeConnectInput",
        connectOrCreate: "HiveTypeConnectOrCreateInput",
        create: "HiveTypeRelationInput",
        delete: "HiveTypeDeleteInput",
        disconnect: "HiveTypeDisconnectInput",
        update: "HiveTypeUpdateInput",
        where: "HiveTypeWhere",
      },
    },
    updateHiveUsers: {
      __type: "UpdateHiveUsersMutationResponse!",
      __args: {
        connect: "HiveUserConnectInput",
        connectOrCreate: "HiveUserConnectOrCreateInput",
        create: "HiveUserRelationInput",
        delete: "HiveUserDeleteInput",
        disconnect: "HiveUserDisconnectInput",
        update: "HiveUserUpdateInput",
        where: "HiveUserWhere",
      },
    },
    updatePermissions: {
      __type: "UpdatePermissionsMutationResponse!",
      __args: {
        connect: "PermissionConnectInput",
        connectOrCreate: "PermissionConnectOrCreateInput",
        create: "PermissionRelationInput",
        delete: "PermissionDeleteInput",
        disconnect: "PermissionDisconnectInput",
        update: "PermissionUpdateInput",
        where: "PermissionWhere",
      },
    },
    updateRoles: {
      __type: "UpdateRolesMutationResponse!",
      __args: {
        connect: "RoleConnectInput",
        connectOrCreate: "RoleConnectOrCreateInput",
        create: "RoleRelationInput",
        delete: "RoleDeleteInput",
        disconnect: "RoleDisconnectInput",
        update: "RoleUpdateInput",
        where: "RoleWhere",
      },
    },
    uploadFile: { __type: "String!", __args: { file: "Upload!" } },
    uploadFiles: { __type: "String", __args: { files: "[Upload]" } },
  },
  query: {
    __typename: { __type: "String!" },
    files: {
      __type: "[File!]!",
      __args: { options: "FileOptions", where: "FileWhere" },
    },
    filesAggregate: {
      __type: "FileAggregateSelection!",
      __args: { where: "FileWhere" },
    },
    folders: {
      __type: "[Folder!]!",
      __args: { options: "FolderOptions", where: "FolderWhere" },
    },
    foldersAggregate: {
      __type: "FolderAggregateSelection!",
      __args: { where: "FolderWhere" },
    },
    hash: { __type: "Hash", __args: { input: "String!" } },
    hiveApplianceConfigurations: {
      __type: "[HiveApplianceConfiguration!]!",
      __args: {
        options: "HiveApplianceConfigurationOptions",
        where: "HiveApplianceConfigurationWhere",
      },
    },
    hiveApplianceConfigurationsAggregate: {
      __type: "HiveApplianceConfigurationAggregateSelection!",
      __args: { where: "HiveApplianceConfigurationWhere" },
    },
    hiveAppliances: {
      __type: "[HiveAppliance!]!",
      __args: { options: "HiveApplianceOptions", where: "HiveApplianceWhere" },
    },
    hiveAppliancesAggregate: {
      __type: "HiveApplianceAggregateSelection!",
      __args: { where: "HiveApplianceWhere" },
    },
    hiveIntegrationInstances: {
      __type: "[HiveIntegrationInstance!]!",
      __args: {
        options: "HiveIntegrationInstanceOptions",
        where: "HiveIntegrationInstanceWhere",
      },
    },
    hiveIntegrationInstancesAggregate: {
      __type: "HiveIntegrationInstanceAggregateSelection!",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
      __args: {
        options: "HiveIntegrationPathCollectionOptions",
        where: "HiveIntegrationPathCollectionWhere",
      },
    },
    hiveIntegrationPathCollectionsAggregate: {
      __type: "HiveIntegrationPathCollectionAggregateSelection!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    hiveIntegrationPaths: {
      __type: "[HiveIntegrationPath!]!",
      __args: {
        options: "HiveIntegrationPathOptions",
        where: "HiveIntegrationPathWhere",
      },
    },
    hiveIntegrationPathsAggregate: {
      __type: "HiveIntegrationPathAggregateSelection!",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    hiveIntegrations: {
      __type: "[HiveIntegration!]!",
      __args: {
        options: "HiveIntegrationOptions",
        where: "HiveIntegrationWhere",
      },
    },
    hiveIntegrationsAggregate: {
      __type: "HiveIntegrationAggregateSelection!",
      __args: { where: "HiveIntegrationWhere" },
    },
    hiveOrganisations: {
      __type: "[HiveOrganisation!]!",
      __args: {
        options: "HiveOrganisationOptions",
        where: "HiveOrganisationWhere",
      },
    },
    hiveOrganisationsAggregate: {
      __type: "HiveOrganisationAggregateSelection!",
      __args: { where: "HiveOrganisationWhere" },
    },
    hiveServices: {
      __type: "[HiveService!]!",
      __args: { options: "HiveServiceOptions", where: "HiveServiceWhere" },
    },
    hiveServicesAggregate: {
      __type: "HiveServiceAggregateSelection!",
      __args: { where: "HiveServiceWhere" },
    },
    hiveTypeFields: {
      __type: "[HiveTypeField!]!",
      __args: { options: "HiveTypeFieldOptions", where: "HiveTypeFieldWhere" },
    },
    hiveTypeFieldsAggregate: {
      __type: "HiveTypeFieldAggregateSelection!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    hiveTypePermissions: {
      __type: "[HiveTypePermission!]!",
      __args: {
        options: "HiveTypePermissionOptions",
        where: "HiveTypePermissionWhere",
      },
    },
    hiveTypePermissionsAggregate: {
      __type: "HiveTypePermissionAggregateSelection!",
      __args: { where: "HiveTypePermissionWhere" },
    },
    hiveTypes: {
      __type: "[HiveType!]!",
      __args: { options: "HiveTypeOptions", where: "HiveTypeWhere" },
    },
    hiveTypesAggregate: {
      __type: "HiveTypeAggregateSelection!",
      __args: { where: "HiveTypeWhere" },
    },
    hiveUsers: {
      __type: "[HiveUser!]!",
      __args: { options: "HiveUserOptions", where: "HiveUserWhere" },
    },
    hiveUsersAggregate: {
      __type: "HiveUserAggregateSelection!",
      __args: { where: "HiveUserWhere" },
    },
    permissions: {
      __type: "[Permission!]!",
      __args: { options: "PermissionOptions", where: "PermissionWhere" },
    },
    permissionsAggregate: {
      __type: "PermissionAggregateSelection!",
      __args: { where: "PermissionWhere" },
    },
    roles: {
      __type: "[Role!]!",
      __args: { options: "RoleOptions", where: "RoleWhere" },
    },
    rolesAggregate: {
      __type: "RoleAggregateSelection!",
      __args: { where: "RoleWhere" },
    },
  },
  subscription: {},
  [SchemaUnionsKey]: { FSItem: ["File", "Folder"] },
} as const;

export interface CreateFilesMutationResponse {
  __typename?: "CreateFilesMutationResponse";
  files: Array<File>;
  info: CreateInfo;
}

export interface CreateFoldersMutationResponse {
  __typename?: "CreateFoldersMutationResponse";
  folders: Array<Folder>;
  info: CreateInfo;
}

export interface CreateHiveApplianceConfigurationsMutationResponse {
  __typename?: "CreateHiveApplianceConfigurationsMutationResponse";
  hiveApplianceConfigurations: Array<HiveApplianceConfiguration>;
  info: CreateInfo;
}

export interface CreateHiveAppliancesMutationResponse {
  __typename?: "CreateHiveAppliancesMutationResponse";
  hiveAppliances: Array<HiveAppliance>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationInstancesMutationResponse {
  __typename?: "CreateHiveIntegrationInstancesMutationResponse";
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "CreateHiveIntegrationPathCollectionsMutationResponse";
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationPathsMutationResponse {
  __typename?: "CreateHiveIntegrationPathsMutationResponse";
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
  info: CreateInfo;
}

export interface CreateHiveIntegrationsMutationResponse {
  __typename?: "CreateHiveIntegrationsMutationResponse";
  hiveIntegrations: Array<HiveIntegration>;
  info: CreateInfo;
}

export interface CreateHiveOrganisationsMutationResponse {
  __typename?: "CreateHiveOrganisationsMutationResponse";
  hiveOrganisations: Array<HiveOrganisation>;
  info: CreateInfo;
}

export interface CreateHiveServicesMutationResponse {
  __typename?: "CreateHiveServicesMutationResponse";
  hiveServices: Array<HiveService>;
  info: CreateInfo;
}

export interface CreateHiveTypeFieldsMutationResponse {
  __typename?: "CreateHiveTypeFieldsMutationResponse";
  hiveTypeFields: Array<HiveTypeField>;
  info: CreateInfo;
}

export interface CreateHiveTypePermissionsMutationResponse {
  __typename?: "CreateHiveTypePermissionsMutationResponse";
  hiveTypePermissions: Array<HiveTypePermission>;
  info: CreateInfo;
}

export interface CreateHiveTypesMutationResponse {
  __typename?: "CreateHiveTypesMutationResponse";
  hiveTypes: Array<HiveType>;
  info: CreateInfo;
}

export interface CreateHiveUsersMutationResponse {
  __typename?: "CreateHiveUsersMutationResponse";
  hiveUsers: Array<HiveUser>;
  info: CreateInfo;
}

export interface CreateInfo {
  __typename?: "CreateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface CreatePermissionsMutationResponse {
  __typename?: "CreatePermissionsMutationResponse";
  info: CreateInfo;
  permissions: Array<Permission>;
}

export interface CreateRolesMutationResponse {
  __typename?: "CreateRolesMutationResponse";
  info: CreateInfo;
  roles: Array<Role>;
}

export interface DeleteInfo {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface FSItem {
  __typename?: "File" | "Folder";
  $on: $FSItem;
}

export interface File {
  __typename?: "File";
  id: ScalarsEnums["ID"];
  mimeType: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  organisation?: Maybe<HiveOrganisation>;
  parent: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<FolderOptions>;
    where?: Maybe<FolderWhere>;
  }) => Maybe<Folder>;
  parentAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<FolderWhere>;
  }) => Maybe<FileFolderParentAggregationSelection>;
  parentConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<FileParentConnectionSort>>;
    where?: Maybe<FileParentConnectionWhere>;
  }) => FileParentConnection;
  size: ScalarsEnums["Int"];
}

export interface FileAggregateSelection {
  __typename?: "FileAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  mimeType: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  size: IntAggregateSelectionNonNullable;
}

export interface FileFolderParentAggregationSelection {
  __typename?: "FileFolderParentAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<FileFolderParentNodeAggregateSelection>;
}

export interface FileFolderParentNodeAggregateSelection {
  __typename?: "FileFolderParentNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface FileParentConnection {
  __typename?: "FileParentConnection";
  edges: Array<FileParentRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface FileParentRelationship {
  __typename?: "FileParentRelationship";
  cursor: ScalarsEnums["String"];
  node: Folder;
}

export interface Folder {
  __typename?: "Folder";
  id: ScalarsEnums["ID"];
  items: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<QueryOptions>;
    where?: Maybe<FSItemWhere>;
  }) => Array<FSItem>;
  itemsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    where?: Maybe<FolderItemsConnectionWhere>;
  }) => FolderItemsConnection;
  name: ScalarsEnums["String"];
  organisation?: Maybe<HiveOrganisation>;
  parent: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<FolderOptions>;
    where?: Maybe<FolderWhere>;
  }) => Maybe<Folder>;
  parentAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<FolderWhere>;
  }) => Maybe<FolderFolderParentAggregationSelection>;
  parentConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<FolderParentConnectionSort>>;
    where?: Maybe<FolderParentConnectionWhere>;
  }) => FolderParentConnection;
}

export interface FolderAggregateSelection {
  __typename?: "FolderAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface FolderFolderParentAggregationSelection {
  __typename?: "FolderFolderParentAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<FolderFolderParentNodeAggregateSelection>;
}

export interface FolderFolderParentNodeAggregateSelection {
  __typename?: "FolderFolderParentNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface FolderItemsConnection {
  __typename?: "FolderItemsConnection";
  edges: Array<FolderItemsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface FolderItemsRelationship {
  __typename?: "FolderItemsRelationship";
  cursor: ScalarsEnums["String"];
  node: FSItem;
}

export interface FolderParentConnection {
  __typename?: "FolderParentConnection";
  edges: Array<FolderParentRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface FolderParentRelationship {
  __typename?: "FolderParentRelationship";
  cursor: ScalarsEnums["String"];
  node: Folder;
}

export interface HiveAppliance {
  __typename?: "HiveAppliance";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  permissions: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Array<Permission>;
  permissionsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<PermissionWhere>;
  }) => Maybe<HiveAppliancePermissionPermissionsAggregationSelection>;
  permissionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveAppliancePermissionsConnectionSort>>;
    where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  }) => HiveAppliancePermissionsConnection;
  services: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveServiceOptions>;
    where?: Maybe<HiveServiceWhere>;
  }) => Array<HiveService>;
  servicesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveServiceWhere>;
  }) => Maybe<HiveApplianceHiveServiceServicesAggregationSelection>;
  servicesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceServicesConnectionSort>>;
    where?: Maybe<HiveApplianceServicesConnectionWhere>;
  }) => HiveApplianceServicesConnection;
  types: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveTypeOptions>;
    where?: Maybe<HiveTypeWhere>;
  }) => Array<HiveType>;
  typesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveTypeWhere>;
  }) => Maybe<HiveApplianceHiveTypeTypesAggregationSelection>;
  typesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceTypesConnectionSort>>;
    where?: Maybe<HiveApplianceTypesConnectionWhere>;
  }) => HiveApplianceTypesConnection;
}

export interface HiveApplianceAggregateSelection {
  __typename?: "HiveApplianceAggregateSelection";
  count: ScalarsEnums["Int"];
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface HiveApplianceConfiguration {
  __typename?: "HiveApplianceConfiguration";
  appliance: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveAppliance>;
  applianceAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection>;
  applianceConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceConfigurationApplianceConnectionSort>>;
    where?: Maybe<HiveApplianceConfigurationApplianceConnectionWhere>;
  }) => HiveApplianceConfigurationApplianceConnection;
  id: ScalarsEnums["ID"];
  key?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceConfigurationOrganisationConnectionSort>>;
    where?: Maybe<HiveApplianceConfigurationOrganisationConnectionWhere>;
  }) => HiveApplianceConfigurationOrganisationConnection;
  permissions: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveTypePermissionOptions>;
    where?: Maybe<HiveTypePermissionWhere>;
  }) => Array<HiveTypePermission>;
  permissionsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveTypePermissionWhere>;
  }) => Maybe<HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection>;
  permissionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveApplianceConfigurationPermissionsConnectionSort>>;
    where?: Maybe<HiveApplianceConfigurationPermissionsConnectionWhere>;
  }) => HiveApplianceConfigurationPermissionsConnection;
}

export interface HiveApplianceConfigurationAggregateSelection {
  __typename?: "HiveApplianceConfigurationAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  key: StringAggregateSelectionNullable;
}

export interface HiveApplianceConfigurationApplianceConnection {
  __typename?: "HiveApplianceConfigurationApplianceConnection";
  edges: Array<HiveApplianceConfigurationApplianceRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceConfigurationApplianceRelationship {
  __typename?: "HiveApplianceConfigurationApplianceRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection {
  __typename?: "HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection>;
}

export interface HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection {
  __typename?: "HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection {
  __typename?: "HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection>;
}

export interface HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection {
  __typename?: "HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveApplianceConfigurationOrganisationConnection {
  __typename?: "HiveApplianceConfigurationOrganisationConnection";
  edges: Array<HiveApplianceConfigurationOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceConfigurationOrganisationRelationship {
  __typename?: "HiveApplianceConfigurationOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveApplianceConfigurationPermissionsConnection {
  __typename?: "HiveApplianceConfigurationPermissionsConnection";
  edges: Array<HiveApplianceConfigurationPermissionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceConfigurationPermissionsRelationship {
  __typename?: "HiveApplianceConfigurationPermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveTypePermission;
}

export interface HiveApplianceHiveServiceServicesAggregationSelection {
  __typename?: "HiveApplianceHiveServiceServicesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveServiceServicesNodeAggregateSelection>;
}

export interface HiveApplianceHiveServiceServicesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveServiceServicesNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveApplianceHiveTypeTypesAggregationSelection {
  __typename?: "HiveApplianceHiveTypeTypesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveTypeTypesNodeAggregateSelection>;
}

export interface HiveApplianceHiveTypeTypesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveTypeTypesNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveAppliancePermissionPermissionsAggregationSelection {
  __typename?: "HiveAppliancePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveAppliancePermissionPermissionsNodeAggregateSelection>;
}

export interface HiveAppliancePermissionPermissionsNodeAggregateSelection {
  __typename?: "HiveAppliancePermissionPermissionsNodeAggregateSelection";
  action: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  scope: StringAggregateSelectionNullable;
}

export interface HiveAppliancePermissionsConnection {
  __typename?: "HiveAppliancePermissionsConnection";
  edges: Array<HiveAppliancePermissionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveAppliancePermissionsRelationship {
  __typename?: "HiveAppliancePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface HiveApplianceServicesConnection {
  __typename?: "HiveApplianceServicesConnection";
  edges: Array<HiveApplianceServicesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceServicesRelationship {
  __typename?: "HiveApplianceServicesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveService;
}

export interface HiveApplianceTypesConnection {
  __typename?: "HiveApplianceTypesConnection";
  edges: Array<HiveApplianceTypesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveApplianceTypesRelationship {
  __typename?: "HiveApplianceTypesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveType;
}

export interface HiveIntegration {
  __typename?: "HiveIntegration";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationAggregateSelection {
  __typename?: "HiveIntegrationAggregateSelection";
  count: ScalarsEnums["Int"];
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationInstance {
  __typename?: "HiveIntegrationInstance";
  appliances: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  appliancesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  }) => HiveIntegrationInstanceAppliancesConnection;
  config?: Maybe<ScalarsEnums["String"]>;
  connections: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveIntegrationPathOptions>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Array<HiveIntegrationPath>;
  connectionsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection>;
  connectionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  }) => HiveIntegrationInstanceConnectionsConnection;
  id: ScalarsEnums["ID"];
  integration: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveIntegrationOptions>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => Maybe<HiveIntegration>;
  integrationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection>;
  integrationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  }) => HiveIntegrationInstanceIntegrationConnection;
  isRunning?: Maybe<ScalarsEnums["Boolean"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionSort>>;
    where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  }) => HiveIntegrationInstanceOrganisationConnection;
}

export interface HiveIntegrationInstanceAggregateSelection {
  __typename?: "HiveIntegrationInstanceAggregateSelection";
  config: StringAggregateSelectionNullable;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationInstanceAppliancesConnection {
  __typename?: "HiveIntegrationInstanceAppliancesConnection";
  edges: Array<HiveIntegrationInstanceAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceAppliancesRelationship {
  __typename?: "HiveIntegrationInstanceAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveIntegrationInstanceConnectionsConnection {
  __typename?: "HiveIntegrationInstanceConnectionsConnection";
  edges: Array<HiveIntegrationInstanceConnectionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceConnectionsRelationship {
  __typename?: "HiveIntegrationInstanceConnectionsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationPath;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection";
  connectionBlob: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationInstanceIntegrationConnection {
  __typename?: "HiveIntegrationInstanceIntegrationConnection";
  edges: Array<HiveIntegrationInstanceIntegrationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceIntegrationRelationship {
  __typename?: "HiveIntegrationInstanceIntegrationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegration;
}

export interface HiveIntegrationInstanceOrganisationConnection {
  __typename?: "HiveIntegrationInstanceOrganisationConnection";
  edges: Array<HiveIntegrationInstanceOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationInstanceOrganisationRelationship {
  __typename?: "HiveIntegrationInstanceOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveIntegrationPath {
  __typename?: "HiveIntegrationPath";
  collections?: Maybe<Array<Maybe<HiveIntegrationPathCollection>>>;
  connectionBlob?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  instance: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveIntegrationInstance>;
  instanceAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection>;
  instanceConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveIntegrationPathInstanceConnectionSort>>;
    where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  }) => HiveIntegrationPathInstanceConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathAggregateSelection {
  __typename?: "HiveIntegrationPathAggregateSelection";
  connectionBlob: StringAggregateSelectionNullable;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveIntegrationPathCollection {
  __typename?: "HiveIntegrationPathCollection";
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathCollectionAggregateSelection {
  __typename?: "HiveIntegrationPathCollectionAggregateSelection";
  count: ScalarsEnums["Int"];
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection>;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection";
  config: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveIntegrationPathInstanceConnection {
  __typename?: "HiveIntegrationPathInstanceConnection";
  edges: Array<HiveIntegrationPathInstanceRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveIntegrationPathInstanceRelationship {
  __typename?: "HiveIntegrationPathInstanceRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  appliances: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  appliancesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveOrganisationHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationAppliancesConnectionSort>>;
    where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  }) => HiveOrganisationAppliancesConnection;
  files: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<QueryOptions>;
    where?: Maybe<FSItemWhere>;
  }) => Maybe<FSItem>;
  filesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    where?: Maybe<HiveOrganisationFilesConnectionWhere>;
  }) => HiveOrganisationFilesConnection;
  id: ScalarsEnums["ID"];
  integrations: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Array<HiveIntegrationInstance>;
  integrationsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection>;
  integrationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationIntegrationsConnectionSort>>;
    where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  }) => HiveOrganisationIntegrationsConnection;
  members: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveUserOptions>;
    where?: Maybe<HiveUserWhere>;
  }) => Array<HiveUser>;
  membersAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveUserWhere>;
  }) => Maybe<HiveOrganisationHiveUserMembersAggregationSelection>;
  membersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationMembersConnectionSort>>;
    where?: Maybe<HiveOrganisationMembersConnectionWhere>;
  }) => HiveOrganisationMembersConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Array<Role>;
  rolesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveOrganisationRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationRolesConnectionSort>>;
    where?: Maybe<HiveOrganisationRolesConnectionWhere>;
  }) => HiveOrganisationRolesConnection;
  subscriptions: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceConfigurationOptions>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => Array<HiveApplianceConfiguration>;
  subscriptionsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => Maybe<HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection>;
  subscriptionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveOrganisationSubscriptionsConnectionSort>>;
    where?: Maybe<HiveOrganisationSubscriptionsConnectionWhere>;
  }) => HiveOrganisationSubscriptionsConnection;
}

export interface HiveOrganisationAggregateSelection {
  __typename?: "HiveOrganisationAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveOrganisationAppliancesConnection {
  __typename?: "HiveOrganisationAppliancesConnection";
  edges: Array<HiveOrganisationAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationAppliancesRelationship {
  __typename?: "HiveOrganisationAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveOrganisationFilesConnection {
  __typename?: "HiveOrganisationFilesConnection";
  edges: Array<HiveOrganisationFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationFilesRelationship {
  __typename?: "HiveOrganisationFilesRelationship";
  cursor: ScalarsEnums["String"];
  node: FSItem;
}

export interface HiveOrganisationHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection {
  __typename?: "HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection>;
}

export interface HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  key: StringAggregateSelectionNullable;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection>;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection";
  config: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveOrganisationHiveUserMembersAggregationSelection {
  __typename?: "HiveOrganisationHiveUserMembersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveUserMembersNodeAggregateSelection>;
}

export interface HiveOrganisationHiveUserMembersNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveUserMembersNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  password: StringAggregateSelectionNullable;
  username: StringAggregateSelectionNullable;
}

export interface HiveOrganisationIntegrationsConnection {
  __typename?: "HiveOrganisationIntegrationsConnection";
  edges: Array<HiveOrganisationIntegrationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationIntegrationsRelationship {
  __typename?: "HiveOrganisationIntegrationsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisationMembersConnection {
  __typename?: "HiveOrganisationMembersConnection";
  edges: Array<HiveOrganisationMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationMembersRelationship {
  __typename?: "HiveOrganisationMembersRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveUser;
}

export interface HiveOrganisationRoleRolesAggregationSelection {
  __typename?: "HiveOrganisationRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationRoleRolesNodeAggregateSelection>;
}

export interface HiveOrganisationRoleRolesNodeAggregateSelection {
  __typename?: "HiveOrganisationRoleRolesNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveOrganisationRolesConnection {
  __typename?: "HiveOrganisationRolesConnection";
  edges: Array<HiveOrganisationRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationRolesRelationship {
  __typename?: "HiveOrganisationRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface HiveOrganisationSubscriptionsConnection {
  __typename?: "HiveOrganisationSubscriptionsConnection";
  edges: Array<HiveOrganisationSubscriptionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveOrganisationSubscriptionsRelationship {
  __typename?: "HiveOrganisationSubscriptionsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveApplianceConfiguration;
}

export interface HiveService {
  __typename?: "HiveService";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveServiceAggregateSelection {
  __typename?: "HiveServiceAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveType {
  __typename?: "HiveType";
  fields: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveTypeFieldOptions>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Array<HiveTypeField>;
  fieldsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Maybe<HiveTypeHiveTypeFieldFieldsAggregationSelection>;
  fieldsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveTypeFieldsConnectionSort>>;
    where?: Maybe<HiveTypeFieldsConnectionWhere>;
  }) => HiveTypeFieldsConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  usedIn: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  usedInAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveTypeHiveApplianceUsedInAggregationSelection>;
  usedInConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveTypeUsedInConnectionSort>>;
    where?: Maybe<HiveTypeUsedInConnectionWhere>;
  }) => HiveTypeUsedInConnection;
}

export interface HiveTypeAggregateSelection {
  __typename?: "HiveTypeAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveTypeField {
  __typename?: "HiveTypeField";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveTypeFieldAggregateSelection {
  __typename?: "HiveTypeFieldAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveTypeFieldsConnection {
  __typename?: "HiveTypeFieldsConnection";
  edges: Array<HiveTypeFieldsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveTypeFieldsRelationship {
  __typename?: "HiveTypeFieldsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveTypeField;
}

export interface HiveTypeHiveApplianceUsedInAggregationSelection {
  __typename?: "HiveTypeHiveApplianceUsedInAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveApplianceUsedInNodeAggregateSelection>;
}

export interface HiveTypeHiveApplianceUsedInNodeAggregateSelection {
  __typename?: "HiveTypeHiveApplianceUsedInNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface HiveTypeHiveTypeFieldFieldsAggregationSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveTypeFieldFieldsNodeAggregateSelection>;
}

export interface HiveTypeHiveTypeFieldFieldsNodeAggregateSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveTypePermission {
  __typename?: "HiveTypePermission";
  configuration: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceConfigurationOptions>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => Maybe<HiveApplianceConfiguration>;
  configurationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => Maybe<HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection>;
  configurationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveTypePermissionConfigurationConnectionSort>>;
    where?: Maybe<HiveTypePermissionConfigurationConnectionWhere>;
  }) => HiveTypePermissionConfigurationConnection;
  create?: Maybe<ScalarsEnums["Boolean"]>;
  delete?: Maybe<ScalarsEnums["Boolean"]>;
  id: ScalarsEnums["ID"];
  read?: Maybe<ScalarsEnums["Boolean"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  update?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface HiveTypePermissionAggregateSelection {
  __typename?: "HiveTypePermissionAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
}

export interface HiveTypePermissionConfigurationConnection {
  __typename?: "HiveTypePermissionConfigurationConnection";
  edges: Array<HiveTypePermissionConfigurationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveTypePermissionConfigurationRelationship {
  __typename?: "HiveTypePermissionConfigurationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveApplianceConfiguration;
}

export interface HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection {
  __typename?: "HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection>;
}

export interface HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection {
  __typename?: "HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  key: StringAggregateSelectionNullable;
}

export interface HiveTypeUsedInConnection {
  __typename?: "HiveTypeUsedInConnection";
  edges: Array<HiveTypeUsedInRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveTypeUsedInRelationship {
  __typename?: "HiveTypeUsedInRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveUser {
  __typename?: "HiveUser";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveUserHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveUserOrganisationConnectionSort>>;
    where?: Maybe<HiveUserOrganisationConnectionWhere>;
  }) => HiveUserOrganisationConnection;
  password?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Array<Role>;
  rolesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveUserRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<HiveUserRolesConnectionSort>>;
    where?: Maybe<HiveUserRolesConnectionWhere>;
  }) => HiveUserRolesConnection;
  username?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveUserAggregateSelection {
  __typename?: "HiveUserAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  password: StringAggregateSelectionNullable;
  username: StringAggregateSelectionNullable;
}

export interface HiveUserHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveUserHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveUserOrganisationConnection {
  __typename?: "HiveUserOrganisationConnection";
  edges: Array<HiveUserOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveUserOrganisationRelationship {
  __typename?: "HiveUserOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveUserRoleRolesAggregationSelection {
  __typename?: "HiveUserRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserRoleRolesNodeAggregateSelection>;
}

export interface HiveUserRoleRolesNodeAggregateSelection {
  __typename?: "HiveUserRoleRolesNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface HiveUserRolesConnection {
  __typename?: "HiveUserRolesConnection";
  edges: Array<HiveUserRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface HiveUserRolesRelationship {
  __typename?: "HiveUserRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface IDAggregateSelectionNonNullable {
  __typename?: "IDAggregateSelectionNonNullable";
  longest: ScalarsEnums["ID"];
  shortest: ScalarsEnums["ID"];
}

export interface IntAggregateSelectionNonNullable {
  __typename?: "IntAggregateSelectionNonNullable";
  average: ScalarsEnums["Float"];
  max: ScalarsEnums["Int"];
  min: ScalarsEnums["Int"];
  sum: ScalarsEnums["Int"];
}

/**
 * Pagination information (Relay)
 */
export interface PageInfo {
  __typename?: "PageInfo";
  endCursor?: Maybe<ScalarsEnums["String"]>;
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface Permission {
  __typename?: "Permission";
  action?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Array<Role>;
  rolesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<RoleWhere>;
  }) => Maybe<PermissionRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<PermissionRolesConnectionSort>>;
    where?: Maybe<PermissionRolesConnectionWhere>;
  }) => PermissionRolesConnection;
  scope?: Maybe<ScalarsEnums["String"]>;
}

export interface PermissionAggregateSelection {
  __typename?: "PermissionAggregateSelection";
  action: StringAggregateSelectionNullable;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  scope: StringAggregateSelectionNullable;
}

export interface PermissionRoleRolesAggregationSelection {
  __typename?: "PermissionRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<PermissionRoleRolesNodeAggregateSelection>;
}

export interface PermissionRoleRolesNodeAggregateSelection {
  __typename?: "PermissionRoleRolesNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface PermissionRolesConnection {
  __typename?: "PermissionRolesConnection";
  edges: Array<PermissionRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface PermissionRolesRelationship {
  __typename?: "PermissionRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface Role {
  __typename?: "Role";
  appliances: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  appliancesAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<RoleHiveApplianceAppliancesAggregationSelection>;
  appliancesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RoleAppliancesConnectionSort>>;
    where?: Maybe<RoleAppliancesConnectionWhere>;
  }) => RoleAppliancesConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<RoleHiveOrganisationOrganisationAggregationSelection>;
  organisationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RoleOrganisationConnectionSort>>;
    where?: Maybe<RoleOrganisationConnectionWhere>;
  }) => RoleOrganisationConnection;
  permissions: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Array<Permission>;
  permissionsAggregate: (args?: {
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    where?: Maybe<PermissionWhere>;
  }) => Maybe<RolePermissionPermissionsAggregationSelection>;
  permissionsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    /**
     * @defaultValue `true`
     */
    directed?: Maybe<Scalars["Boolean"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<RolePermissionsConnectionSort>>;
    where?: Maybe<RolePermissionsConnectionWhere>;
  }) => RolePermissionsConnection;
}

export interface RoleAggregateSelection {
  __typename?: "RoleAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface RoleAppliancesConnection {
  __typename?: "RoleAppliancesConnection";
  edges: Array<RoleAppliancesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RoleAppliancesRelationship {
  __typename?: "RoleAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface RoleHiveApplianceAppliancesAggregationSelection {
  __typename?: "RoleHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface RoleHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "RoleHiveApplianceAppliancesNodeAggregateSelection";
  description: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
}

export interface RoleHiveOrganisationOrganisationAggregationSelection {
  __typename?: "RoleHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface RoleHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "RoleHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
}

export interface RoleOrganisationConnection {
  __typename?: "RoleOrganisationConnection";
  edges: Array<RoleOrganisationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RoleOrganisationRelationship {
  __typename?: "RoleOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface RolePermissionPermissionsAggregationSelection {
  __typename?: "RolePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RolePermissionPermissionsNodeAggregateSelection>;
}

export interface RolePermissionPermissionsNodeAggregateSelection {
  __typename?: "RolePermissionPermissionsNodeAggregateSelection";
  action: StringAggregateSelectionNullable;
  id: IDAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  scope: StringAggregateSelectionNullable;
}

export interface RolePermissionsConnection {
  __typename?: "RolePermissionsConnection";
  edges: Array<RolePermissionsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface RolePermissionsRelationship {
  __typename?: "RolePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface StringAggregateSelectionNonNullable {
  __typename?: "StringAggregateSelectionNonNullable";
  longest: ScalarsEnums["String"];
  shortest: ScalarsEnums["String"];
}

export interface StringAggregateSelectionNullable {
  __typename?: "StringAggregateSelectionNullable";
  longest?: Maybe<ScalarsEnums["String"]>;
  shortest?: Maybe<ScalarsEnums["String"]>;
}

export interface UpdateFilesMutationResponse {
  __typename?: "UpdateFilesMutationResponse";
  files: Array<File>;
  info: UpdateInfo;
}

export interface UpdateFoldersMutationResponse {
  __typename?: "UpdateFoldersMutationResponse";
  folders: Array<Folder>;
  info: UpdateInfo;
}

export interface UpdateHiveApplianceConfigurationsMutationResponse {
  __typename?: "UpdateHiveApplianceConfigurationsMutationResponse";
  hiveApplianceConfigurations: Array<HiveApplianceConfiguration>;
  info: UpdateInfo;
}

export interface UpdateHiveAppliancesMutationResponse {
  __typename?: "UpdateHiveAppliancesMutationResponse";
  hiveAppliances: Array<HiveAppliance>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationInstancesMutationResponse {
  __typename?: "UpdateHiveIntegrationInstancesMutationResponse";
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathCollectionsMutationResponse";
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationPathsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathsMutationResponse";
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
  info: UpdateInfo;
}

export interface UpdateHiveIntegrationsMutationResponse {
  __typename?: "UpdateHiveIntegrationsMutationResponse";
  hiveIntegrations: Array<HiveIntegration>;
  info: UpdateInfo;
}

export interface UpdateHiveOrganisationsMutationResponse {
  __typename?: "UpdateHiveOrganisationsMutationResponse";
  hiveOrganisations: Array<HiveOrganisation>;
  info: UpdateInfo;
}

export interface UpdateHiveServicesMutationResponse {
  __typename?: "UpdateHiveServicesMutationResponse";
  hiveServices: Array<HiveService>;
  info: UpdateInfo;
}

export interface UpdateHiveTypeFieldsMutationResponse {
  __typename?: "UpdateHiveTypeFieldsMutationResponse";
  hiveTypeFields: Array<HiveTypeField>;
  info: UpdateInfo;
}

export interface UpdateHiveTypePermissionsMutationResponse {
  __typename?: "UpdateHiveTypePermissionsMutationResponse";
  hiveTypePermissions: Array<HiveTypePermission>;
  info: UpdateInfo;
}

export interface UpdateHiveTypesMutationResponse {
  __typename?: "UpdateHiveTypesMutationResponse";
  hiveTypes: Array<HiveType>;
  info: UpdateInfo;
}

export interface UpdateHiveUsersMutationResponse {
  __typename?: "UpdateHiveUsersMutationResponse";
  hiveUsers: Array<HiveUser>;
  info: UpdateInfo;
}

export interface UpdateInfo {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface UpdatePermissionsMutationResponse {
  __typename?: "UpdatePermissionsMutationResponse";
  info: UpdateInfo;
  permissions: Array<Permission>;
}

export interface UpdateRolesMutationResponse {
  __typename?: "UpdateRolesMutationResponse";
  info: UpdateInfo;
  roles: Array<Role>;
}

export interface Mutation {
  __typename?: "Mutation";
  createFiles: (args: {
    input: Array<FileCreateInput>;
  }) => CreateFilesMutationResponse;
  createFolders: (args: {
    input: Array<FolderCreateInput>;
  }) => CreateFoldersMutationResponse;
  createHiveApplianceConfigurations: (args: {
    input: Array<HiveApplianceConfigurationCreateInput>;
  }) => CreateHiveApplianceConfigurationsMutationResponse;
  createHiveAppliances: (args: {
    input: Array<HiveApplianceCreateInput>;
  }) => CreateHiveAppliancesMutationResponse;
  createHiveIntegrationInstances: (args: {
    input: Array<HiveIntegrationInstanceCreateInput>;
  }) => CreateHiveIntegrationInstancesMutationResponse;
  createHiveIntegrationPathCollections: (args: {
    input: Array<HiveIntegrationPathCollectionCreateInput>;
  }) => CreateHiveIntegrationPathCollectionsMutationResponse;
  createHiveIntegrationPaths: (args: {
    input: Array<HiveIntegrationPathCreateInput>;
  }) => CreateHiveIntegrationPathsMutationResponse;
  createHiveIntegrations: (args: {
    input: Array<HiveIntegrationCreateInput>;
  }) => CreateHiveIntegrationsMutationResponse;
  createHiveOrganisations: (args: {
    input: Array<HiveOrganisationCreateInput>;
  }) => CreateHiveOrganisationsMutationResponse;
  createHiveServices: (args: {
    input: Array<HiveServiceCreateInput>;
  }) => CreateHiveServicesMutationResponse;
  createHiveTypeFields: (args: {
    input: Array<HiveTypeFieldCreateInput>;
  }) => CreateHiveTypeFieldsMutationResponse;
  createHiveTypePermissions: (args: {
    input: Array<HiveTypePermissionCreateInput>;
  }) => CreateHiveTypePermissionsMutationResponse;
  createHiveTypes: (args: {
    input: Array<HiveTypeCreateInput>;
  }) => CreateHiveTypesMutationResponse;
  createHiveUsers: (args: {
    input: Array<HiveUserCreateInput>;
  }) => CreateHiveUsersMutationResponse;
  createPermissions: (args: {
    input: Array<PermissionCreateInput>;
  }) => CreatePermissionsMutationResponse;
  createRoles: (args: {
    input: Array<RoleCreateInput>;
  }) => CreateRolesMutationResponse;
  deleteFiles: (args?: {
    delete?: Maybe<FileDeleteInput>;
    where?: Maybe<FileWhere>;
  }) => DeleteInfo;
  deleteFolders: (args?: {
    delete?: Maybe<FolderDeleteInput>;
    where?: Maybe<FolderWhere>;
  }) => DeleteInfo;
  deleteHiveApplianceConfigurations: (args?: {
    delete?: Maybe<HiveApplianceConfigurationDeleteInput>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => DeleteInfo;
  deleteHiveAppliances: (args?: {
    delete?: Maybe<HiveApplianceDeleteInput>;
    where?: Maybe<HiveApplianceWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationInstances: (args?: {
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationPathCollections: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrationPaths: (args?: {
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => DeleteInfo;
  deleteHiveIntegrations: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => DeleteInfo;
  deleteHiveOrganisations: (args?: {
    delete?: Maybe<HiveOrganisationDeleteInput>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => DeleteInfo;
  deleteHiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => DeleteInfo;
  deleteHiveTypeFields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => DeleteInfo;
  deleteHiveTypePermissions: (args?: {
    delete?: Maybe<HiveTypePermissionDeleteInput>;
    where?: Maybe<HiveTypePermissionWhere>;
  }) => DeleteInfo;
  deleteHiveTypes: (args?: {
    delete?: Maybe<HiveTypeDeleteInput>;
    where?: Maybe<HiveTypeWhere>;
  }) => DeleteInfo;
  deleteHiveUsers: (args?: {
    delete?: Maybe<HiveUserDeleteInput>;
    where?: Maybe<HiveUserWhere>;
  }) => DeleteInfo;
  deletePermissions: (args?: {
    delete?: Maybe<PermissionDeleteInput>;
    where?: Maybe<PermissionWhere>;
  }) => DeleteInfo;
  deleteRoles: (args?: {
    delete?: Maybe<RoleDeleteInput>;
    where?: Maybe<RoleWhere>;
  }) => DeleteInfo;
  updateFiles: (args?: {
    connect?: Maybe<FileConnectInput>;
    connectOrCreate?: Maybe<FileConnectOrCreateInput>;
    create?: Maybe<FileRelationInput>;
    delete?: Maybe<FileDeleteInput>;
    disconnect?: Maybe<FileDisconnectInput>;
    update?: Maybe<FileUpdateInput>;
    where?: Maybe<FileWhere>;
  }) => UpdateFilesMutationResponse;
  updateFolders: (args?: {
    connect?: Maybe<FolderConnectInput>;
    connectOrCreate?: Maybe<FolderConnectOrCreateInput>;
    create?: Maybe<FolderRelationInput>;
    delete?: Maybe<FolderDeleteInput>;
    disconnect?: Maybe<FolderDisconnectInput>;
    update?: Maybe<FolderUpdateInput>;
    where?: Maybe<FolderWhere>;
  }) => UpdateFoldersMutationResponse;
  updateHiveApplianceConfigurations: (args?: {
    connect?: Maybe<HiveApplianceConfigurationConnectInput>;
    connectOrCreate?: Maybe<HiveApplianceConfigurationConnectOrCreateInput>;
    create?: Maybe<HiveApplianceConfigurationRelationInput>;
    delete?: Maybe<HiveApplianceConfigurationDeleteInput>;
    disconnect?: Maybe<HiveApplianceConfigurationDisconnectInput>;
    update?: Maybe<HiveApplianceConfigurationUpdateInput>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => UpdateHiveApplianceConfigurationsMutationResponse;
  updateHiveAppliances: (args?: {
    connect?: Maybe<HiveApplianceConnectInput>;
    connectOrCreate?: Maybe<HiveApplianceConnectOrCreateInput>;
    create?: Maybe<HiveApplianceRelationInput>;
    delete?: Maybe<HiveApplianceDeleteInput>;
    disconnect?: Maybe<HiveApplianceDisconnectInput>;
    update?: Maybe<HiveApplianceUpdateInput>;
    where?: Maybe<HiveApplianceWhere>;
  }) => UpdateHiveAppliancesMutationResponse;
  updateHiveIntegrationInstances: (args?: {
    connect?: Maybe<HiveIntegrationInstanceConnectInput>;
    connectOrCreate?: Maybe<HiveIntegrationInstanceConnectOrCreateInput>;
    create?: Maybe<HiveIntegrationInstanceRelationInput>;
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
    disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
    update?: Maybe<HiveIntegrationInstanceUpdateInput>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => UpdateHiveIntegrationInstancesMutationResponse;
  updateHiveIntegrationPathCollections: (args?: {
    update?: Maybe<HiveIntegrationPathCollectionUpdateInput>;
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => UpdateHiveIntegrationPathCollectionsMutationResponse;
  updateHiveIntegrationPaths: (args?: {
    connect?: Maybe<HiveIntegrationPathConnectInput>;
    connectOrCreate?: Maybe<HiveIntegrationPathConnectOrCreateInput>;
    create?: Maybe<HiveIntegrationPathRelationInput>;
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
    disconnect?: Maybe<HiveIntegrationPathDisconnectInput>;
    update?: Maybe<HiveIntegrationPathUpdateInput>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => UpdateHiveIntegrationPathsMutationResponse;
  updateHiveIntegrations: (args?: {
    update?: Maybe<HiveIntegrationUpdateInput>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => UpdateHiveIntegrationsMutationResponse;
  updateHiveOrganisations: (args?: {
    connect?: Maybe<HiveOrganisationConnectInput>;
    connectOrCreate?: Maybe<HiveOrganisationConnectOrCreateInput>;
    create?: Maybe<HiveOrganisationRelationInput>;
    delete?: Maybe<HiveOrganisationDeleteInput>;
    disconnect?: Maybe<HiveOrganisationDisconnectInput>;
    update?: Maybe<HiveOrganisationUpdateInput>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => UpdateHiveOrganisationsMutationResponse;
  updateHiveServices: (args?: {
    update?: Maybe<HiveServiceUpdateInput>;
    where?: Maybe<HiveServiceWhere>;
  }) => UpdateHiveServicesMutationResponse;
  updateHiveTypeFields: (args?: {
    update?: Maybe<HiveTypeFieldUpdateInput>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => UpdateHiveTypeFieldsMutationResponse;
  updateHiveTypePermissions: (args?: {
    connect?: Maybe<HiveTypePermissionConnectInput>;
    connectOrCreate?: Maybe<HiveTypePermissionConnectOrCreateInput>;
    create?: Maybe<HiveTypePermissionRelationInput>;
    delete?: Maybe<HiveTypePermissionDeleteInput>;
    disconnect?: Maybe<HiveTypePermissionDisconnectInput>;
    update?: Maybe<HiveTypePermissionUpdateInput>;
    where?: Maybe<HiveTypePermissionWhere>;
  }) => UpdateHiveTypePermissionsMutationResponse;
  updateHiveTypes: (args?: {
    connect?: Maybe<HiveTypeConnectInput>;
    connectOrCreate?: Maybe<HiveTypeConnectOrCreateInput>;
    create?: Maybe<HiveTypeRelationInput>;
    delete?: Maybe<HiveTypeDeleteInput>;
    disconnect?: Maybe<HiveTypeDisconnectInput>;
    update?: Maybe<HiveTypeUpdateInput>;
    where?: Maybe<HiveTypeWhere>;
  }) => UpdateHiveTypesMutationResponse;
  updateHiveUsers: (args?: {
    connect?: Maybe<HiveUserConnectInput>;
    connectOrCreate?: Maybe<HiveUserConnectOrCreateInput>;
    create?: Maybe<HiveUserRelationInput>;
    delete?: Maybe<HiveUserDeleteInput>;
    disconnect?: Maybe<HiveUserDisconnectInput>;
    update?: Maybe<HiveUserUpdateInput>;
    where?: Maybe<HiveUserWhere>;
  }) => UpdateHiveUsersMutationResponse;
  updatePermissions: (args?: {
    connect?: Maybe<PermissionConnectInput>;
    connectOrCreate?: Maybe<PermissionConnectOrCreateInput>;
    create?: Maybe<PermissionRelationInput>;
    delete?: Maybe<PermissionDeleteInput>;
    disconnect?: Maybe<PermissionDisconnectInput>;
    update?: Maybe<PermissionUpdateInput>;
    where?: Maybe<PermissionWhere>;
  }) => UpdatePermissionsMutationResponse;
  updateRoles: (args?: {
    connect?: Maybe<RoleConnectInput>;
    connectOrCreate?: Maybe<RoleConnectOrCreateInput>;
    create?: Maybe<RoleRelationInput>;
    delete?: Maybe<RoleDeleteInput>;
    disconnect?: Maybe<RoleDisconnectInput>;
    update?: Maybe<RoleUpdateInput>;
    where?: Maybe<RoleWhere>;
  }) => UpdateRolesMutationResponse;
  uploadFile: (args: { file: Scalars["Upload"] }) => ScalarsEnums["String"];
  uploadFiles: (args?: {
    files?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
  }) => Maybe<ScalarsEnums["String"]>;
}

export interface Query {
  __typename?: "Query";
  files: (args?: {
    options?: Maybe<FileOptions>;
    where?: Maybe<FileWhere>;
  }) => Array<File>;
  filesAggregate: (args?: {
    where?: Maybe<FileWhere>;
  }) => FileAggregateSelection;
  folders: (args?: {
    options?: Maybe<FolderOptions>;
    where?: Maybe<FolderWhere>;
  }) => Array<Folder>;
  foldersAggregate: (args?: {
    where?: Maybe<FolderWhere>;
  }) => FolderAggregateSelection;
  hash: (args: { input: Scalars["String"] }) => Maybe<ScalarsEnums["Hash"]>;
  hiveApplianceConfigurations: (args?: {
    options?: Maybe<HiveApplianceConfigurationOptions>;
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => Array<HiveApplianceConfiguration>;
  hiveApplianceConfigurationsAggregate: (args?: {
    where?: Maybe<HiveApplianceConfigurationWhere>;
  }) => HiveApplianceConfigurationAggregateSelection;
  hiveAppliances: (args?: {
    options?: Maybe<HiveApplianceOptions>;
    where?: Maybe<HiveApplianceWhere>;
  }) => Array<HiveAppliance>;
  hiveAppliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => HiveApplianceAggregateSelection;
  hiveIntegrationInstances: (args?: {
    options?: Maybe<HiveIntegrationInstanceOptions>;
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Array<HiveIntegrationInstance>;
  hiveIntegrationInstancesAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => HiveIntegrationInstanceAggregateSelection;
  hiveIntegrationPathCollections: (args?: {
    options?: Maybe<HiveIntegrationPathCollectionOptions>;
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => Array<HiveIntegrationPathCollection>;
  hiveIntegrationPathCollectionsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => HiveIntegrationPathCollectionAggregateSelection;
  hiveIntegrationPaths: (args?: {
    options?: Maybe<HiveIntegrationPathOptions>;
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Array<HiveIntegrationPath>;
  hiveIntegrationPathsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => HiveIntegrationPathAggregateSelection;
  hiveIntegrations: (args?: {
    options?: Maybe<HiveIntegrationOptions>;
    where?: Maybe<HiveIntegrationWhere>;
  }) => Array<HiveIntegration>;
  hiveIntegrationsAggregate: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => HiveIntegrationAggregateSelection;
  hiveOrganisations: (args?: {
    options?: Maybe<HiveOrganisationOptions>;
    where?: Maybe<HiveOrganisationWhere>;
  }) => Array<HiveOrganisation>;
  hiveOrganisationsAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => HiveOrganisationAggregateSelection;
  hiveServices: (args?: {
    options?: Maybe<HiveServiceOptions>;
    where?: Maybe<HiveServiceWhere>;
  }) => Array<HiveService>;
  hiveServicesAggregate: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => HiveServiceAggregateSelection;
  hiveTypeFields: (args?: {
    options?: Maybe<HiveTypeFieldOptions>;
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Array<HiveTypeField>;
  hiveTypeFieldsAggregate: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => HiveTypeFieldAggregateSelection;
  hiveTypePermissions: (args?: {
    options?: Maybe<HiveTypePermissionOptions>;
    where?: Maybe<HiveTypePermissionWhere>;
  }) => Array<HiveTypePermission>;
  hiveTypePermissionsAggregate: (args?: {
    where?: Maybe<HiveTypePermissionWhere>;
  }) => HiveTypePermissionAggregateSelection;
  hiveTypes: (args?: {
    options?: Maybe<HiveTypeOptions>;
    where?: Maybe<HiveTypeWhere>;
  }) => Array<HiveType>;
  hiveTypesAggregate: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => HiveTypeAggregateSelection;
  hiveUsers: (args?: {
    options?: Maybe<HiveUserOptions>;
    where?: Maybe<HiveUserWhere>;
  }) => Array<HiveUser>;
  hiveUsersAggregate: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => HiveUserAggregateSelection;
  permissions: (args?: {
    options?: Maybe<PermissionOptions>;
    where?: Maybe<PermissionWhere>;
  }) => Array<Permission>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => PermissionAggregateSelection;
  roles: (args?: {
    options?: Maybe<RoleOptions>;
    where?: Maybe<RoleWhere>;
  }) => Array<Role>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => RoleAggregateSelection;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  CreateFilesMutationResponse: CreateFilesMutationResponse;
  CreateFoldersMutationResponse: CreateFoldersMutationResponse;
  CreateHiveApplianceConfigurationsMutationResponse: CreateHiveApplianceConfigurationsMutationResponse;
  CreateHiveAppliancesMutationResponse: CreateHiveAppliancesMutationResponse;
  CreateHiveIntegrationInstancesMutationResponse: CreateHiveIntegrationInstancesMutationResponse;
  CreateHiveIntegrationPathCollectionsMutationResponse: CreateHiveIntegrationPathCollectionsMutationResponse;
  CreateHiveIntegrationPathsMutationResponse: CreateHiveIntegrationPathsMutationResponse;
  CreateHiveIntegrationsMutationResponse: CreateHiveIntegrationsMutationResponse;
  CreateHiveOrganisationsMutationResponse: CreateHiveOrganisationsMutationResponse;
  CreateHiveServicesMutationResponse: CreateHiveServicesMutationResponse;
  CreateHiveTypeFieldsMutationResponse: CreateHiveTypeFieldsMutationResponse;
  CreateHiveTypePermissionsMutationResponse: CreateHiveTypePermissionsMutationResponse;
  CreateHiveTypesMutationResponse: CreateHiveTypesMutationResponse;
  CreateHiveUsersMutationResponse: CreateHiveUsersMutationResponse;
  CreateInfo: CreateInfo;
  CreatePermissionsMutationResponse: CreatePermissionsMutationResponse;
  CreateRolesMutationResponse: CreateRolesMutationResponse;
  DeleteInfo: DeleteInfo;
  File: File;
  FileAggregateSelection: FileAggregateSelection;
  FileFolderParentAggregationSelection: FileFolderParentAggregationSelection;
  FileFolderParentNodeAggregateSelection: FileFolderParentNodeAggregateSelection;
  FileParentConnection: FileParentConnection;
  FileParentRelationship: FileParentRelationship;
  Folder: Folder;
  FolderAggregateSelection: FolderAggregateSelection;
  FolderFolderParentAggregationSelection: FolderFolderParentAggregationSelection;
  FolderFolderParentNodeAggregateSelection: FolderFolderParentNodeAggregateSelection;
  FolderItemsConnection: FolderItemsConnection;
  FolderItemsRelationship: FolderItemsRelationship;
  FolderParentConnection: FolderParentConnection;
  FolderParentRelationship: FolderParentRelationship;
  HiveAppliance: HiveAppliance;
  HiveApplianceAggregateSelection: HiveApplianceAggregateSelection;
  HiveApplianceConfiguration: HiveApplianceConfiguration;
  HiveApplianceConfigurationAggregateSelection: HiveApplianceConfigurationAggregateSelection;
  HiveApplianceConfigurationApplianceConnection: HiveApplianceConfigurationApplianceConnection;
  HiveApplianceConfigurationApplianceRelationship: HiveApplianceConfigurationApplianceRelationship;
  HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection: HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection;
  HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection: HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection;
  HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection: HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection;
  HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection: HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection;
  HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection: HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection;
  HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection: HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection;
  HiveApplianceConfigurationOrganisationConnection: HiveApplianceConfigurationOrganisationConnection;
  HiveApplianceConfigurationOrganisationRelationship: HiveApplianceConfigurationOrganisationRelationship;
  HiveApplianceConfigurationPermissionsConnection: HiveApplianceConfigurationPermissionsConnection;
  HiveApplianceConfigurationPermissionsRelationship: HiveApplianceConfigurationPermissionsRelationship;
  HiveApplianceHiveServiceServicesAggregationSelection: HiveApplianceHiveServiceServicesAggregationSelection;
  HiveApplianceHiveServiceServicesNodeAggregateSelection: HiveApplianceHiveServiceServicesNodeAggregateSelection;
  HiveApplianceHiveTypeTypesAggregationSelection: HiveApplianceHiveTypeTypesAggregationSelection;
  HiveApplianceHiveTypeTypesNodeAggregateSelection: HiveApplianceHiveTypeTypesNodeAggregateSelection;
  HiveAppliancePermissionPermissionsAggregationSelection: HiveAppliancePermissionPermissionsAggregationSelection;
  HiveAppliancePermissionPermissionsNodeAggregateSelection: HiveAppliancePermissionPermissionsNodeAggregateSelection;
  HiveAppliancePermissionsConnection: HiveAppliancePermissionsConnection;
  HiveAppliancePermissionsRelationship: HiveAppliancePermissionsRelationship;
  HiveApplianceServicesConnection: HiveApplianceServicesConnection;
  HiveApplianceServicesRelationship: HiveApplianceServicesRelationship;
  HiveApplianceTypesConnection: HiveApplianceTypesConnection;
  HiveApplianceTypesRelationship: HiveApplianceTypesRelationship;
  HiveIntegration: HiveIntegration;
  HiveIntegrationAggregateSelection: HiveIntegrationAggregateSelection;
  HiveIntegrationInstance: HiveIntegrationInstance;
  HiveIntegrationInstanceAggregateSelection: HiveIntegrationInstanceAggregateSelection;
  HiveIntegrationInstanceAppliancesConnection: HiveIntegrationInstanceAppliancesConnection;
  HiveIntegrationInstanceAppliancesRelationship: HiveIntegrationInstanceAppliancesRelationship;
  HiveIntegrationInstanceConnectionsConnection: HiveIntegrationInstanceConnectionsConnection;
  HiveIntegrationInstanceConnectionsRelationship: HiveIntegrationInstanceConnectionsRelationship;
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection;
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection;
  HiveIntegrationInstanceIntegrationConnection: HiveIntegrationInstanceIntegrationConnection;
  HiveIntegrationInstanceIntegrationRelationship: HiveIntegrationInstanceIntegrationRelationship;
  HiveIntegrationInstanceOrganisationConnection: HiveIntegrationInstanceOrganisationConnection;
  HiveIntegrationInstanceOrganisationRelationship: HiveIntegrationInstanceOrganisationRelationship;
  HiveIntegrationPath: HiveIntegrationPath;
  HiveIntegrationPathAggregateSelection: HiveIntegrationPathAggregateSelection;
  HiveIntegrationPathCollection: HiveIntegrationPathCollection;
  HiveIntegrationPathCollectionAggregateSelection: HiveIntegrationPathCollectionAggregateSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection;
  HiveIntegrationPathInstanceConnection: HiveIntegrationPathInstanceConnection;
  HiveIntegrationPathInstanceRelationship: HiveIntegrationPathInstanceRelationship;
  HiveOrganisation: HiveOrganisation;
  HiveOrganisationAggregateSelection: HiveOrganisationAggregateSelection;
  HiveOrganisationAppliancesConnection: HiveOrganisationAppliancesConnection;
  HiveOrganisationAppliancesRelationship: HiveOrganisationAppliancesRelationship;
  HiveOrganisationFilesConnection: HiveOrganisationFilesConnection;
  HiveOrganisationFilesRelationship: HiveOrganisationFilesRelationship;
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: HiveOrganisationHiveApplianceAppliancesAggregationSelection;
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection;
  HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection: HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection;
  HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection: HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection;
  HiveOrganisationHiveUserMembersAggregationSelection: HiveOrganisationHiveUserMembersAggregationSelection;
  HiveOrganisationHiveUserMembersNodeAggregateSelection: HiveOrganisationHiveUserMembersNodeAggregateSelection;
  HiveOrganisationIntegrationsConnection: HiveOrganisationIntegrationsConnection;
  HiveOrganisationIntegrationsRelationship: HiveOrganisationIntegrationsRelationship;
  HiveOrganisationMembersConnection: HiveOrganisationMembersConnection;
  HiveOrganisationMembersRelationship: HiveOrganisationMembersRelationship;
  HiveOrganisationRoleRolesAggregationSelection: HiveOrganisationRoleRolesAggregationSelection;
  HiveOrganisationRoleRolesNodeAggregateSelection: HiveOrganisationRoleRolesNodeAggregateSelection;
  HiveOrganisationRolesConnection: HiveOrganisationRolesConnection;
  HiveOrganisationRolesRelationship: HiveOrganisationRolesRelationship;
  HiveOrganisationSubscriptionsConnection: HiveOrganisationSubscriptionsConnection;
  HiveOrganisationSubscriptionsRelationship: HiveOrganisationSubscriptionsRelationship;
  HiveService: HiveService;
  HiveServiceAggregateSelection: HiveServiceAggregateSelection;
  HiveType: HiveType;
  HiveTypeAggregateSelection: HiveTypeAggregateSelection;
  HiveTypeField: HiveTypeField;
  HiveTypeFieldAggregateSelection: HiveTypeFieldAggregateSelection;
  HiveTypeFieldsConnection: HiveTypeFieldsConnection;
  HiveTypeFieldsRelationship: HiveTypeFieldsRelationship;
  HiveTypeHiveApplianceUsedInAggregationSelection: HiveTypeHiveApplianceUsedInAggregationSelection;
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: HiveTypeHiveApplianceUsedInNodeAggregateSelection;
  HiveTypeHiveTypeFieldFieldsAggregationSelection: HiveTypeHiveTypeFieldFieldsAggregationSelection;
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: HiveTypeHiveTypeFieldFieldsNodeAggregateSelection;
  HiveTypePermission: HiveTypePermission;
  HiveTypePermissionAggregateSelection: HiveTypePermissionAggregateSelection;
  HiveTypePermissionConfigurationConnection: HiveTypePermissionConfigurationConnection;
  HiveTypePermissionConfigurationRelationship: HiveTypePermissionConfigurationRelationship;
  HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection: HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection;
  HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection: HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection;
  HiveTypeUsedInConnection: HiveTypeUsedInConnection;
  HiveTypeUsedInRelationship: HiveTypeUsedInRelationship;
  HiveUser: HiveUser;
  HiveUserAggregateSelection: HiveUserAggregateSelection;
  HiveUserHiveOrganisationOrganisationAggregationSelection: HiveUserHiveOrganisationOrganisationAggregationSelection;
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: HiveUserHiveOrganisationOrganisationNodeAggregateSelection;
  HiveUserOrganisationConnection: HiveUserOrganisationConnection;
  HiveUserOrganisationRelationship: HiveUserOrganisationRelationship;
  HiveUserRoleRolesAggregationSelection: HiveUserRoleRolesAggregationSelection;
  HiveUserRoleRolesNodeAggregateSelection: HiveUserRoleRolesNodeAggregateSelection;
  HiveUserRolesConnection: HiveUserRolesConnection;
  HiveUserRolesRelationship: HiveUserRolesRelationship;
  IDAggregateSelectionNonNullable: IDAggregateSelectionNonNullable;
  IntAggregateSelectionNonNullable: IntAggregateSelectionNonNullable;
  Mutation: Mutation;
  PageInfo: PageInfo;
  Permission: Permission;
  PermissionAggregateSelection: PermissionAggregateSelection;
  PermissionRoleRolesAggregationSelection: PermissionRoleRolesAggregationSelection;
  PermissionRoleRolesNodeAggregateSelection: PermissionRoleRolesNodeAggregateSelection;
  PermissionRolesConnection: PermissionRolesConnection;
  PermissionRolesRelationship: PermissionRolesRelationship;
  Query: Query;
  Role: Role;
  RoleAggregateSelection: RoleAggregateSelection;
  RoleAppliancesConnection: RoleAppliancesConnection;
  RoleAppliancesRelationship: RoleAppliancesRelationship;
  RoleHiveApplianceAppliancesAggregationSelection: RoleHiveApplianceAppliancesAggregationSelection;
  RoleHiveApplianceAppliancesNodeAggregateSelection: RoleHiveApplianceAppliancesNodeAggregateSelection;
  RoleHiveOrganisationOrganisationAggregationSelection: RoleHiveOrganisationOrganisationAggregationSelection;
  RoleHiveOrganisationOrganisationNodeAggregateSelection: RoleHiveOrganisationOrganisationNodeAggregateSelection;
  RoleOrganisationConnection: RoleOrganisationConnection;
  RoleOrganisationRelationship: RoleOrganisationRelationship;
  RolePermissionPermissionsAggregationSelection: RolePermissionPermissionsAggregationSelection;
  RolePermissionPermissionsNodeAggregateSelection: RolePermissionPermissionsNodeAggregateSelection;
  RolePermissionsConnection: RolePermissionsConnection;
  RolePermissionsRelationship: RolePermissionsRelationship;
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: StringAggregateSelectionNullable;
  Subscription: Subscription;
  UpdateFilesMutationResponse: UpdateFilesMutationResponse;
  UpdateFoldersMutationResponse: UpdateFoldersMutationResponse;
  UpdateHiveApplianceConfigurationsMutationResponse: UpdateHiveApplianceConfigurationsMutationResponse;
  UpdateHiveAppliancesMutationResponse: UpdateHiveAppliancesMutationResponse;
  UpdateHiveIntegrationInstancesMutationResponse: UpdateHiveIntegrationInstancesMutationResponse;
  UpdateHiveIntegrationPathCollectionsMutationResponse: UpdateHiveIntegrationPathCollectionsMutationResponse;
  UpdateHiveIntegrationPathsMutationResponse: UpdateHiveIntegrationPathsMutationResponse;
  UpdateHiveIntegrationsMutationResponse: UpdateHiveIntegrationsMutationResponse;
  UpdateHiveOrganisationsMutationResponse: UpdateHiveOrganisationsMutationResponse;
  UpdateHiveServicesMutationResponse: UpdateHiveServicesMutationResponse;
  UpdateHiveTypeFieldsMutationResponse: UpdateHiveTypeFieldsMutationResponse;
  UpdateHiveTypePermissionsMutationResponse: UpdateHiveTypePermissionsMutationResponse;
  UpdateHiveTypesMutationResponse: UpdateHiveTypesMutationResponse;
  UpdateHiveUsersMutationResponse: UpdateHiveUsersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdatePermissionsMutationResponse: UpdatePermissionsMutationResponse;
  UpdateRolesMutationResponse: UpdateRolesMutationResponse;
}
export type SchemaObjectTypesNames =
  | "CreateFilesMutationResponse"
  | "CreateFoldersMutationResponse"
  | "CreateHiveApplianceConfigurationsMutationResponse"
  | "CreateHiveAppliancesMutationResponse"
  | "CreateHiveIntegrationInstancesMutationResponse"
  | "CreateHiveIntegrationPathCollectionsMutationResponse"
  | "CreateHiveIntegrationPathsMutationResponse"
  | "CreateHiveIntegrationsMutationResponse"
  | "CreateHiveOrganisationsMutationResponse"
  | "CreateHiveServicesMutationResponse"
  | "CreateHiveTypeFieldsMutationResponse"
  | "CreateHiveTypePermissionsMutationResponse"
  | "CreateHiveTypesMutationResponse"
  | "CreateHiveUsersMutationResponse"
  | "CreateInfo"
  | "CreatePermissionsMutationResponse"
  | "CreateRolesMutationResponse"
  | "DeleteInfo"
  | "File"
  | "FileAggregateSelection"
  | "FileFolderParentAggregationSelection"
  | "FileFolderParentNodeAggregateSelection"
  | "FileParentConnection"
  | "FileParentRelationship"
  | "Folder"
  | "FolderAggregateSelection"
  | "FolderFolderParentAggregationSelection"
  | "FolderFolderParentNodeAggregateSelection"
  | "FolderItemsConnection"
  | "FolderItemsRelationship"
  | "FolderParentConnection"
  | "FolderParentRelationship"
  | "HiveAppliance"
  | "HiveApplianceAggregateSelection"
  | "HiveApplianceConfiguration"
  | "HiveApplianceConfigurationAggregateSelection"
  | "HiveApplianceConfigurationApplianceConnection"
  | "HiveApplianceConfigurationApplianceRelationship"
  | "HiveApplianceConfigurationHiveApplianceApplianceAggregationSelection"
  | "HiveApplianceConfigurationHiveApplianceApplianceNodeAggregateSelection"
  | "HiveApplianceConfigurationHiveOrganisationOrganisationAggregationSelection"
  | "HiveApplianceConfigurationHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveApplianceConfigurationHiveTypePermissionPermissionsAggregationSelection"
  | "HiveApplianceConfigurationHiveTypePermissionPermissionsNodeAggregateSelection"
  | "HiveApplianceConfigurationOrganisationConnection"
  | "HiveApplianceConfigurationOrganisationRelationship"
  | "HiveApplianceConfigurationPermissionsConnection"
  | "HiveApplianceConfigurationPermissionsRelationship"
  | "HiveApplianceHiveServiceServicesAggregationSelection"
  | "HiveApplianceHiveServiceServicesNodeAggregateSelection"
  | "HiveApplianceHiveTypeTypesAggregationSelection"
  | "HiveApplianceHiveTypeTypesNodeAggregateSelection"
  | "HiveAppliancePermissionPermissionsAggregationSelection"
  | "HiveAppliancePermissionPermissionsNodeAggregateSelection"
  | "HiveAppliancePermissionsConnection"
  | "HiveAppliancePermissionsRelationship"
  | "HiveApplianceServicesConnection"
  | "HiveApplianceServicesRelationship"
  | "HiveApplianceTypesConnection"
  | "HiveApplianceTypesRelationship"
  | "HiveIntegration"
  | "HiveIntegrationAggregateSelection"
  | "HiveIntegrationInstance"
  | "HiveIntegrationInstanceAggregateSelection"
  | "HiveIntegrationInstanceAppliancesConnection"
  | "HiveIntegrationInstanceAppliancesRelationship"
  | "HiveIntegrationInstanceConnectionsConnection"
  | "HiveIntegrationInstanceConnectionsRelationship"
  | "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection"
  | "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveIntegrationInstanceIntegrationConnection"
  | "HiveIntegrationInstanceIntegrationRelationship"
  | "HiveIntegrationInstanceOrganisationConnection"
  | "HiveIntegrationInstanceOrganisationRelationship"
  | "HiveIntegrationPath"
  | "HiveIntegrationPathAggregateSelection"
  | "HiveIntegrationPathCollection"
  | "HiveIntegrationPathCollectionAggregateSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection"
  | "HiveIntegrationPathInstanceConnection"
  | "HiveIntegrationPathInstanceRelationship"
  | "HiveOrganisation"
  | "HiveOrganisationAggregateSelection"
  | "HiveOrganisationAppliancesConnection"
  | "HiveOrganisationAppliancesRelationship"
  | "HiveOrganisationFilesConnection"
  | "HiveOrganisationFilesRelationship"
  | "HiveOrganisationHiveApplianceAppliancesAggregationSelection"
  | "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveOrganisationHiveApplianceConfigurationSubscriptionsAggregationSelection"
  | "HiveOrganisationHiveApplianceConfigurationSubscriptionsNodeAggregateSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection"
  | "HiveOrganisationHiveUserMembersAggregationSelection"
  | "HiveOrganisationHiveUserMembersNodeAggregateSelection"
  | "HiveOrganisationIntegrationsConnection"
  | "HiveOrganisationIntegrationsRelationship"
  | "HiveOrganisationMembersConnection"
  | "HiveOrganisationMembersRelationship"
  | "HiveOrganisationRoleRolesAggregationSelection"
  | "HiveOrganisationRoleRolesNodeAggregateSelection"
  | "HiveOrganisationRolesConnection"
  | "HiveOrganisationRolesRelationship"
  | "HiveOrganisationSubscriptionsConnection"
  | "HiveOrganisationSubscriptionsRelationship"
  | "HiveService"
  | "HiveServiceAggregateSelection"
  | "HiveType"
  | "HiveTypeAggregateSelection"
  | "HiveTypeField"
  | "HiveTypeFieldAggregateSelection"
  | "HiveTypeFieldsConnection"
  | "HiveTypeFieldsRelationship"
  | "HiveTypeHiveApplianceUsedInAggregationSelection"
  | "HiveTypeHiveApplianceUsedInNodeAggregateSelection"
  | "HiveTypeHiveTypeFieldFieldsAggregationSelection"
  | "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection"
  | "HiveTypePermission"
  | "HiveTypePermissionAggregateSelection"
  | "HiveTypePermissionConfigurationConnection"
  | "HiveTypePermissionConfigurationRelationship"
  | "HiveTypePermissionHiveApplianceConfigurationConfigurationAggregationSelection"
  | "HiveTypePermissionHiveApplianceConfigurationConfigurationNodeAggregateSelection"
  | "HiveTypeUsedInConnection"
  | "HiveTypeUsedInRelationship"
  | "HiveUser"
  | "HiveUserAggregateSelection"
  | "HiveUserHiveOrganisationOrganisationAggregationSelection"
  | "HiveUserHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveUserOrganisationConnection"
  | "HiveUserOrganisationRelationship"
  | "HiveUserRoleRolesAggregationSelection"
  | "HiveUserRoleRolesNodeAggregateSelection"
  | "HiveUserRolesConnection"
  | "HiveUserRolesRelationship"
  | "IDAggregateSelectionNonNullable"
  | "IntAggregateSelectionNonNullable"
  | "Mutation"
  | "PageInfo"
  | "Permission"
  | "PermissionAggregateSelection"
  | "PermissionRoleRolesAggregationSelection"
  | "PermissionRoleRolesNodeAggregateSelection"
  | "PermissionRolesConnection"
  | "PermissionRolesRelationship"
  | "Query"
  | "Role"
  | "RoleAggregateSelection"
  | "RoleAppliancesConnection"
  | "RoleAppliancesRelationship"
  | "RoleHiveApplianceAppliancesAggregationSelection"
  | "RoleHiveApplianceAppliancesNodeAggregateSelection"
  | "RoleHiveOrganisationOrganisationAggregationSelection"
  | "RoleHiveOrganisationOrganisationNodeAggregateSelection"
  | "RoleOrganisationConnection"
  | "RoleOrganisationRelationship"
  | "RolePermissionPermissionsAggregationSelection"
  | "RolePermissionPermissionsNodeAggregateSelection"
  | "RolePermissionsConnection"
  | "RolePermissionsRelationship"
  | "StringAggregateSelectionNonNullable"
  | "StringAggregateSelectionNullable"
  | "Subscription"
  | "UpdateFilesMutationResponse"
  | "UpdateFoldersMutationResponse"
  | "UpdateHiveApplianceConfigurationsMutationResponse"
  | "UpdateHiveAppliancesMutationResponse"
  | "UpdateHiveIntegrationInstancesMutationResponse"
  | "UpdateHiveIntegrationPathCollectionsMutationResponse"
  | "UpdateHiveIntegrationPathsMutationResponse"
  | "UpdateHiveIntegrationsMutationResponse"
  | "UpdateHiveOrganisationsMutationResponse"
  | "UpdateHiveServicesMutationResponse"
  | "UpdateHiveTypeFieldsMutationResponse"
  | "UpdateHiveTypePermissionsMutationResponse"
  | "UpdateHiveTypesMutationResponse"
  | "UpdateHiveUsersMutationResponse"
  | "UpdateInfo"
  | "UpdatePermissionsMutationResponse"
  | "UpdateRolesMutationResponse";

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

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortDirection: SortDirection | undefined;
}
