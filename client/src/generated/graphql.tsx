import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Attribute = {
  __typename?: 'Attribute';
  id?: Maybe<Scalars['UUID']>;
  attribute: Scalars['String'];
  /** Reads and enables pagination through a set of `Skill`. */
  skillsByAttrId: SkillsConnection;
};


export type AttributeSkillsByAttrIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SkillsOrderBy>>;
  condition?: Maybe<SkillCondition>;
};

/**
 * A condition to be used against `Attribute` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttributeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `attribute` field. */
  attribute?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Attribute` */
export type AttributeInput = {
  id?: Maybe<Scalars['UUID']>;
  attribute: Scalars['String'];
};

/** Represents an update to a `Attribute`. Fields that are set will be updated. */
export type AttributePatch = {
  id?: Maybe<Scalars['UUID']>;
  attribute?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Attribute` values. */
export type AttributesConnection = {
  __typename?: 'AttributesConnection';
  /** A list of `Attribute` objects. */
  nodes: Array<Maybe<Attribute>>;
  /** A list of edges which contains the `Attribute` and cursor to aid in pagination. */
  edges: Array<AttributesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Attribute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Attribute` edge in the connection. */
export type AttributesEdge = {
  __typename?: 'AttributesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Attribute` at the end of the edge. */
  node?: Maybe<Attribute>;
};

/** Methods to use when ordering `Attribute`. */
export enum AttributesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AttributeAsc = 'ATTRIBUTE_ASC',
  AttributeDesc = 'ATTRIBUTE_DESC'
}

export type Bg = {
  __typename?: 'Bg';
  id: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
  numberOfExtraLanguages?: Maybe<Scalars['Int']>;
  languageOptions?: Maybe<Scalars['JSON']>;
  numberOfToolsGranted?: Maybe<Scalars['Int']>;
  toolOptions?: Maybe<Scalars['JSON']>;
  numberOfSkillsGranted?: Maybe<Scalars['Int']>;
  skillOptions?: Maybe<Scalars['JSON']>;
  backgroundFeature?: Maybe<Scalars['UUID']>;
  alternateBackgroundFeature?: Maybe<Scalars['UUID']>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByBackgroundFeature?: Maybe<BgFeature>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByAlternateBackgroundFeature?: Maybe<BgFeature>;
};

/** A condition to be used against `Bg` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BgCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `numberOfExtraLanguages` field. */
  numberOfExtraLanguages?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `languageOptions` field. */
  languageOptions?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `numberOfToolsGranted` field. */
  numberOfToolsGranted?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `toolOptions` field. */
  toolOptions?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `numberOfSkillsGranted` field. */
  numberOfSkillsGranted?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `skillOptions` field. */
  skillOptions?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `backgroundFeature` field. */
  backgroundFeature?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `alternateBackgroundFeature` field. */
  alternateBackgroundFeature?: Maybe<Scalars['UUID']>;
};

export type BgFeature = {
  __typename?: 'BgFeature';
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  conferringBg: Scalars['String'];
  description: Scalars['String'];
  /** Reads and enables pagination through a set of `Bg`. */
  bgsByBackgroundFeature: BgsConnection;
  /** Reads and enables pagination through a set of `Bg`. */
  bgsByAlternateBackgroundFeature: BgsConnection;
};


export type BgFeatureBgsByBackgroundFeatureArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BgsOrderBy>>;
  condition?: Maybe<BgCondition>;
};


export type BgFeatureBgsByAlternateBackgroundFeatureArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BgsOrderBy>>;
  condition?: Maybe<BgCondition>;
};

/**
 * A condition to be used against `BgFeature` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BgFeatureCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `conferringBg` field. */
  conferringBg?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `BgFeature` */
export type BgFeatureInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  conferringBg: Scalars['String'];
  description: Scalars['String'];
};

/** Represents an update to a `BgFeature`. Fields that are set will be updated. */
export type BgFeaturePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  conferringBg?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** A connection to a list of `BgFeature` values. */
export type BgFeaturesConnection = {
  __typename?: 'BgFeaturesConnection';
  /** A list of `BgFeature` objects. */
  nodes: Array<Maybe<BgFeature>>;
  /** A list of edges which contains the `BgFeature` and cursor to aid in pagination. */
  edges: Array<BgFeaturesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BgFeature` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `BgFeature` edge in the connection. */
export type BgFeaturesEdge = {
  __typename?: 'BgFeaturesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `BgFeature` at the end of the edge. */
  node?: Maybe<BgFeature>;
};

/** Methods to use when ordering `BgFeature`. */
export enum BgFeaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ConferringBgAsc = 'CONFERRING_BG_ASC',
  ConferringBgDesc = 'CONFERRING_BG_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC'
}

/** An input for mutations affecting `Bg` */
export type BgInput = {
  id: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
  numberOfExtraLanguages?: Maybe<Scalars['Int']>;
  languageOptions?: Maybe<Scalars['JSON']>;
  numberOfToolsGranted?: Maybe<Scalars['Int']>;
  toolOptions?: Maybe<Scalars['JSON']>;
  numberOfSkillsGranted?: Maybe<Scalars['Int']>;
  skillOptions?: Maybe<Scalars['JSON']>;
  backgroundFeature?: Maybe<Scalars['UUID']>;
  alternateBackgroundFeature?: Maybe<Scalars['UUID']>;
};

/** Represents an update to a `Bg`. Fields that are set will be updated. */
export type BgPatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  numberOfExtraLanguages?: Maybe<Scalars['Int']>;
  languageOptions?: Maybe<Scalars['JSON']>;
  numberOfToolsGranted?: Maybe<Scalars['Int']>;
  toolOptions?: Maybe<Scalars['JSON']>;
  numberOfSkillsGranted?: Maybe<Scalars['Int']>;
  skillOptions?: Maybe<Scalars['JSON']>;
  backgroundFeature?: Maybe<Scalars['UUID']>;
  alternateBackgroundFeature?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Bg` values. */
export type BgsConnection = {
  __typename?: 'BgsConnection';
  /** A list of `Bg` objects. */
  nodes: Array<Maybe<Bg>>;
  /** A list of edges which contains the `Bg` and cursor to aid in pagination. */
  edges: Array<BgsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Bg` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Bg` edge in the connection. */
export type BgsEdge = {
  __typename?: 'BgsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Bg` at the end of the edge. */
  node?: Maybe<Bg>;
};

/** Methods to use when ordering `Bg`. */
export enum BgsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  NumberOfExtraLanguagesAsc = 'NUMBER_OF_EXTRA_LANGUAGES_ASC',
  NumberOfExtraLanguagesDesc = 'NUMBER_OF_EXTRA_LANGUAGES_DESC',
  LanguageOptionsAsc = 'LANGUAGE_OPTIONS_ASC',
  LanguageOptionsDesc = 'LANGUAGE_OPTIONS_DESC',
  NumberOfToolsGrantedAsc = 'NUMBER_OF_TOOLS_GRANTED_ASC',
  NumberOfToolsGrantedDesc = 'NUMBER_OF_TOOLS_GRANTED_DESC',
  ToolOptionsAsc = 'TOOL_OPTIONS_ASC',
  ToolOptionsDesc = 'TOOL_OPTIONS_DESC',
  NumberOfSkillsGrantedAsc = 'NUMBER_OF_SKILLS_GRANTED_ASC',
  NumberOfSkillsGrantedDesc = 'NUMBER_OF_SKILLS_GRANTED_DESC',
  SkillOptionsAsc = 'SKILL_OPTIONS_ASC',
  SkillOptionsDesc = 'SKILL_OPTIONS_DESC',
  BackgroundFeatureAsc = 'BACKGROUND_FEATURE_ASC',
  BackgroundFeatureDesc = 'BACKGROUND_FEATURE_DESC',
  AlternateBackgroundFeatureAsc = 'ALTERNATE_BACKGROUND_FEATURE_ASC',
  AlternateBackgroundFeatureDesc = 'ALTERNATE_BACKGROUND_FEATURE_DESC'
}

/** All input for the create `Attribute` mutation. */
export type CreateAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Attribute` to be created by this mutation. */
  attribute: AttributeInput;
};

/** The output of our create `Attribute` mutation. */
export type CreateAttributePayload = {
  __typename?: 'CreateAttributePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Attribute` that was created by this mutation. */
  attribute?: Maybe<Attribute>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
};


/** The output of our create `Attribute` mutation. */
export type CreateAttributePayloadAttributeEdgeArgs = {
  orderBy?: Maybe<Array<AttributesOrderBy>>;
};

/** All input for the create `BgFeature` mutation. */
export type CreateBgFeatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BgFeature` to be created by this mutation. */
  bgFeature: BgFeatureInput;
};

/** The output of our create `BgFeature` mutation. */
export type CreateBgFeaturePayload = {
  __typename?: 'CreateBgFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BgFeature` that was created by this mutation. */
  bgFeature?: Maybe<BgFeature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `BgFeature`. May be used by Relay 1. */
  bgFeatureEdge?: Maybe<BgFeaturesEdge>;
};


/** The output of our create `BgFeature` mutation. */
export type CreateBgFeaturePayloadBgFeatureEdgeArgs = {
  orderBy?: Maybe<Array<BgFeaturesOrderBy>>;
};

/** All input for the create `Bg` mutation. */
export type CreateBgInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bg` to be created by this mutation. */
  bg: BgInput;
};

/** The output of our create `Bg` mutation. */
export type CreateBgPayload = {
  __typename?: 'CreateBgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bg` that was created by this mutation. */
  bg?: Maybe<Bg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByBackgroundFeature?: Maybe<BgFeature>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByAlternateBackgroundFeature?: Maybe<BgFeature>;
  /** An edge for our `Bg`. May be used by Relay 1. */
  bgEdge?: Maybe<BgsEdge>;
};


/** The output of our create `Bg` mutation. */
export type CreateBgPayloadBgEdgeArgs = {
  orderBy?: Maybe<Array<BgsOrderBy>>;
};

/** All input for the create `Equipment` mutation. */
export type CreateEquipmentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Equipment` to be created by this mutation. */
  equipment: EquipmentInput;
};

/** The output of our create `Equipment` mutation. */
export type CreateEquipmentPayload = {
  __typename?: 'CreateEquipmentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Equipment` that was created by this mutation. */
  equipment?: Maybe<Equipment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Equipment`. May be used by Relay 1. */
  equipmentEdge?: Maybe<EquipmentEdge>;
};


/** The output of our create `Equipment` mutation. */
export type CreateEquipmentPayloadEquipmentEdgeArgs = {
  orderBy?: Maybe<Array<EquipmentOrderBy>>;
};

/** All input for the create `Feat` mutation. */
export type CreateFeatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feat` to be created by this mutation. */
  feat: FeatInput;
};

/** The output of our create `Feat` mutation. */
export type CreateFeatPayload = {
  __typename?: 'CreateFeatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feat` that was created by this mutation. */
  feat?: Maybe<Feat>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Feat`. May be used by Relay 1. */
  featEdge?: Maybe<FeatsEdge>;
};


/** The output of our create `Feat` mutation. */
export type CreateFeatPayloadFeatEdgeArgs = {
  orderBy?: Maybe<Array<FeatsOrderBy>>;
};

/** All input for the create `KnexMigration` mutation. */
export type CreateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` to be created by this mutation. */
  knexMigration: KnexMigrationInput;
};

/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayload = {
  __typename?: 'CreateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was created by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
};


/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` to be created by this mutation. */
  knexMigrationsLock: KnexMigrationsLockInput;
};

/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayload = {
  __typename?: 'CreateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was created by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
};


/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the create `Language` mutation. */
export type CreateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` to be created by this mutation. */
  language: LanguageInput;
};

/** The output of our create `Language` mutation. */
export type CreateLanguagePayload = {
  __typename?: 'CreateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was created by this mutation. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
};


/** The output of our create `Language` mutation. */
export type CreateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: Maybe<Array<LanguagesOrderBy>>;
};

/** All input for the create `Skill` mutation. */
export type CreateSkillInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Skill` to be created by this mutation. */
  skill: SkillInput;
};

/** The output of our create `Skill` mutation. */
export type CreateSkillPayload = {
  __typename?: 'CreateSkillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Skill` that was created by this mutation. */
  skill?: Maybe<Skill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Attribute` that is related to this `Skill`. */
  attributeByAttrId?: Maybe<Attribute>;
  /** An edge for our `Skill`. May be used by Relay 1. */
  skillEdge?: Maybe<SkillsEdge>;
};


/** The output of our create `Skill` mutation. */
export type CreateSkillPayloadSkillEdgeArgs = {
  orderBy?: Maybe<Array<SkillsOrderBy>>;
};

/** All input for the create `Spell` mutation. */
export type CreateSpellInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spell` to be created by this mutation. */
  spell: SpellInput;
};

/** The output of our create `Spell` mutation. */
export type CreateSpellPayload = {
  __typename?: 'CreateSpellPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spell` that was created by this mutation. */
  spell?: Maybe<Spell>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Spell`. May be used by Relay 1. */
  spellEdge?: Maybe<SpellsEdge>;
};


/** The output of our create `Spell` mutation. */
export type CreateSpellPayloadSpellEdgeArgs = {
  orderBy?: Maybe<Array<SpellsOrderBy>>;
};

/** All input for the create `SpellSlug` mutation. */
export type CreateSpellSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SpellSlug` to be created by this mutation. */
  spellSlug: SpellSlugInput;
};

/** The output of our create `SpellSlug` mutation. */
export type CreateSpellSlugPayload = {
  __typename?: 'CreateSpellSlugPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SpellSlug` that was created by this mutation. */
  spellSlug?: Maybe<SpellSlug>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SpellSlug`. May be used by Relay 1. */
  spellSlugEdge?: Maybe<SpellSlugsEdge>;
};


/** The output of our create `SpellSlug` mutation. */
export type CreateSpellSlugPayloadSpellSlugEdgeArgs = {
  orderBy?: Maybe<Array<SpellSlugsOrderBy>>;
};



/** All input for the `deleteAttributeById` mutation. */
export type DeleteAttributeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Attribute` mutation. */
export type DeleteAttributePayload = {
  __typename?: 'DeleteAttributePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Attribute` that was deleted by this mutation. */
  attribute?: Maybe<Attribute>;
  deletedAttributeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
};


/** The output of our delete `Attribute` mutation. */
export type DeleteAttributePayloadAttributeEdgeArgs = {
  orderBy?: Maybe<Array<AttributesOrderBy>>;
};

/** All input for the `deleteBgById` mutation. */
export type DeleteBgByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteBgFeatureById` mutation. */
export type DeleteBgFeatureByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `BgFeature` mutation. */
export type DeleteBgFeaturePayload = {
  __typename?: 'DeleteBgFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BgFeature` that was deleted by this mutation. */
  bgFeature?: Maybe<BgFeature>;
  deletedBgFeatureId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `BgFeature`. May be used by Relay 1. */
  bgFeatureEdge?: Maybe<BgFeaturesEdge>;
};


/** The output of our delete `BgFeature` mutation. */
export type DeleteBgFeaturePayloadBgFeatureEdgeArgs = {
  orderBy?: Maybe<Array<BgFeaturesOrderBy>>;
};

/** The output of our delete `Bg` mutation. */
export type DeleteBgPayload = {
  __typename?: 'DeleteBgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bg` that was deleted by this mutation. */
  bg?: Maybe<Bg>;
  deletedBgId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByBackgroundFeature?: Maybe<BgFeature>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByAlternateBackgroundFeature?: Maybe<BgFeature>;
  /** An edge for our `Bg`. May be used by Relay 1. */
  bgEdge?: Maybe<BgsEdge>;
};


/** The output of our delete `Bg` mutation. */
export type DeleteBgPayloadBgEdgeArgs = {
  orderBy?: Maybe<Array<BgsOrderBy>>;
};

/** All input for the `deleteEquipmentById` mutation. */
export type DeleteEquipmentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Equipment` mutation. */
export type DeleteEquipmentPayload = {
  __typename?: 'DeleteEquipmentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Equipment` that was deleted by this mutation. */
  equipment?: Maybe<Equipment>;
  deletedEquipmentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Equipment`. May be used by Relay 1. */
  equipmentEdge?: Maybe<EquipmentEdge>;
};


/** The output of our delete `Equipment` mutation. */
export type DeleteEquipmentPayloadEquipmentEdgeArgs = {
  orderBy?: Maybe<Array<EquipmentOrderBy>>;
};

/** All input for the `deleteFeatById` mutation. */
export type DeleteFeatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Feat` mutation. */
export type DeleteFeatPayload = {
  __typename?: 'DeleteFeatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feat` that was deleted by this mutation. */
  feat?: Maybe<Feat>;
  deletedFeatId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Feat`. May be used by Relay 1. */
  featEdge?: Maybe<FeatsEdge>;
};


/** The output of our delete `Feat` mutation. */
export type DeleteFeatPayloadFeatEdgeArgs = {
  orderBy?: Maybe<Array<FeatsOrderBy>>;
};

/** All input for the `deleteKnexMigrationById` mutation. */
export type DeleteKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnexMigration` mutation. */
export type DeleteKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayload = {
  __typename?: 'DeleteKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was deleted by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  deletedKnexMigrationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
};


/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the `deleteKnexMigrationsLockByIndex` mutation. */
export type DeleteKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  index: Scalars['Int'];
};

/** All input for the `deleteKnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayload = {
  __typename?: 'DeleteKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was deleted by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  deletedKnexMigrationsLockId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
};


/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `deleteLanguageById` mutation. */
export type DeleteLanguageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayload = {
  __typename?: 'DeleteLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was deleted by this mutation. */
  language?: Maybe<Language>;
  deletedLanguageId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
};


/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayloadLanguageEdgeArgs = {
  orderBy?: Maybe<Array<LanguagesOrderBy>>;
};

/** All input for the `deleteSkillById` mutation. */
export type DeleteSkillByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Skill` mutation. */
export type DeleteSkillPayload = {
  __typename?: 'DeleteSkillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Skill` that was deleted by this mutation. */
  skill?: Maybe<Skill>;
  deletedSkillId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Attribute` that is related to this `Skill`. */
  attributeByAttrId?: Maybe<Attribute>;
  /** An edge for our `Skill`. May be used by Relay 1. */
  skillEdge?: Maybe<SkillsEdge>;
};


/** The output of our delete `Skill` mutation. */
export type DeleteSkillPayloadSkillEdgeArgs = {
  orderBy?: Maybe<Array<SkillsOrderBy>>;
};

/** All input for the `deleteSpellById` mutation. */
export type DeleteSpellByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Spell` mutation. */
export type DeleteSpellPayload = {
  __typename?: 'DeleteSpellPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spell` that was deleted by this mutation. */
  spell?: Maybe<Spell>;
  deletedSpellId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Spell`. May be used by Relay 1. */
  spellEdge?: Maybe<SpellsEdge>;
};


/** The output of our delete `Spell` mutation. */
export type DeleteSpellPayloadSpellEdgeArgs = {
  orderBy?: Maybe<Array<SpellsOrderBy>>;
};

/** All input for the `deleteSpellSlugById` mutation. */
export type DeleteSpellSlugByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `SpellSlug` mutation. */
export type DeleteSpellSlugPayload = {
  __typename?: 'DeleteSpellSlugPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SpellSlug` that was deleted by this mutation. */
  spellSlug?: Maybe<SpellSlug>;
  deletedSpellSlugId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SpellSlug`. May be used by Relay 1. */
  spellSlugEdge?: Maybe<SpellSlugsEdge>;
};


/** The output of our delete `SpellSlug` mutation. */
export type DeleteSpellSlugPayloadSpellSlugEdgeArgs = {
  orderBy?: Maybe<Array<SpellSlugsOrderBy>>;
};

export type Equipment = {
  __typename?: 'Equipment';
  id?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  name: Scalars['String'];
};

/**
 * A condition to be used against `Equipment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EquipmentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Equipment` values. */
export type EquipmentConnection = {
  __typename?: 'EquipmentConnection';
  /** A list of `Equipment` objects. */
  nodes: Array<Maybe<Equipment>>;
  /** A list of edges which contains the `Equipment` and cursor to aid in pagination. */
  edges: Array<EquipmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Equipment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Equipment` edge in the connection. */
export type EquipmentEdge = {
  __typename?: 'EquipmentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Equipment` at the end of the edge. */
  node?: Maybe<Equipment>;
};

/** An input for mutations affecting `Equipment` */
export type EquipmentInput = {
  id?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
  name: Scalars['String'];
};

/** Methods to use when ordering `Equipment`. */
export enum EquipmentOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

/** Represents an update to a `Equipment`. Fields that are set will be updated. */
export type EquipmentPatch = {
  id?: Maybe<Scalars['UUID']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Feat = {
  __typename?: 'Feat';
  id: Scalars['UUID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  points?: Maybe<Array<Maybe<Scalars['String']>>>;
  prereq?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Feat` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FeatCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `desc` field. */
  desc?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `points` field. */
  points?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `prereq` field. */
  prereq?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Feat` */
export type FeatInput = {
  id: Scalars['UUID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  points?: Maybe<Array<Maybe<Scalars['String']>>>;
  prereq?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Feat`. Fields that are set will be updated. */
export type FeatPatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  points?: Maybe<Array<Maybe<Scalars['String']>>>;
  prereq?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Feat` values. */
export type FeatsConnection = {
  __typename?: 'FeatsConnection';
  /** A list of `Feat` objects. */
  nodes: Array<Maybe<Feat>>;
  /** A list of edges which contains the `Feat` and cursor to aid in pagination. */
  edges: Array<FeatsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Feat` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Feat` edge in the connection. */
export type FeatsEdge = {
  __typename?: 'FeatsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Feat` at the end of the edge. */
  node?: Maybe<Feat>;
};

/** Methods to use when ordering `Feat`. */
export enum FeatsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  PointsAsc = 'POINTS_ASC',
  PointsDesc = 'POINTS_DESC',
  PrereqAsc = 'PREREQ_ASC',
  PrereqDesc = 'PREREQ_DESC'
}


export type KnexMigration = Node & {
  __typename?: 'KnexMigration';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migrationTime?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `KnexMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `batch` field. */
  batch?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `migrationTime` field. */
  migrationTime?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `KnexMigration` */
export type KnexMigrationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migrationTime?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `KnexMigration`. Fields that are set will be updated. */
export type KnexMigrationPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migrationTime?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `KnexMigration` values. */
export type KnexMigrationsConnection = {
  __typename?: 'KnexMigrationsConnection';
  /** A list of `KnexMigration` objects. */
  nodes: Array<Maybe<KnexMigration>>;
  /** A list of edges which contains the `KnexMigration` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigration` edge in the connection. */
export type KnexMigrationsEdge = {
  __typename?: 'KnexMigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigration` at the end of the edge. */
  node?: Maybe<KnexMigration>;
};

export type KnexMigrationsLock = Node & {
  __typename?: 'KnexMigrationsLock';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  index: Scalars['Int'];
  isLocked?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `KnexMigrationsLock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationsLockCondition = {
  /** Checks for equality with the object’s `index` field. */
  index?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isLocked` field. */
  isLocked?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `KnexMigrationsLock` */
export type KnexMigrationsLockInput = {
  index?: Maybe<Scalars['Int']>;
  isLocked?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `KnexMigrationsLock`. Fields that are set will be updated. */
export type KnexMigrationsLockPatch = {
  index?: Maybe<Scalars['Int']>;
  isLocked?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `KnexMigrationsLock` values. */
export type KnexMigrationsLocksConnection = {
  __typename?: 'KnexMigrationsLocksConnection';
  /** A list of `KnexMigrationsLock` objects. */
  nodes: Array<Maybe<KnexMigrationsLock>>;
  /** A list of edges which contains the `KnexMigrationsLock` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsLocksEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigrationsLock` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigrationsLock` edge in the connection. */
export type KnexMigrationsLocksEdge = {
  __typename?: 'KnexMigrationsLocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigrationsLock` at the end of the edge. */
  node?: Maybe<KnexMigrationsLock>;
};

/** Methods to use when ordering `KnexMigrationsLock`. */
export enum KnexMigrationsLocksOrderBy {
  Natural = 'NATURAL',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `KnexMigration`. */
export enum KnexMigrationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Language = {
  __typename?: 'Language';
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  script: Scalars['String'];
  typicalSpeakers: Scalars['String'];
  type: Scalars['String'];
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `script` field. */
  script?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `typicalSpeakers` field. */
  typicalSpeakers?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Language` */
export type LanguageInput = {
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  script: Scalars['String'];
  typicalSpeakers: Scalars['String'];
  type: Scalars['String'];
};

/** Represents an update to a `Language`. Fields that are set will be updated. */
export type LanguagePatch = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  typicalSpeakers?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Language` values. */
export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  /** A list of `Language` objects. */
  nodes: Array<Maybe<Language>>;
  /** A list of edges which contains the `Language` and cursor to aid in pagination. */
  edges: Array<LanguagesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Language` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Language` edge in the connection. */
export type LanguagesEdge = {
  __typename?: 'LanguagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Language` at the end of the edge. */
  node?: Maybe<Language>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Attribute`. */
  createAttribute?: Maybe<CreateAttributePayload>;
  /** Creates a single `BgFeature`. */
  createBgFeature?: Maybe<CreateBgFeaturePayload>;
  /** Creates a single `Bg`. */
  createBg?: Maybe<CreateBgPayload>;
  /** Creates a single `Equipment`. */
  createEquipment?: Maybe<CreateEquipmentPayload>;
  /** Creates a single `Feat`. */
  createFeat?: Maybe<CreateFeatPayload>;
  /** Creates a single `KnexMigration`. */
  createKnexMigration?: Maybe<CreateKnexMigrationPayload>;
  /** Creates a single `KnexMigrationsLock`. */
  createKnexMigrationsLock?: Maybe<CreateKnexMigrationsLockPayload>;
  /** Creates a single `Language`. */
  createLanguage?: Maybe<CreateLanguagePayload>;
  /** Creates a single `Skill`. */
  createSkill?: Maybe<CreateSkillPayload>;
  /** Creates a single `SpellSlug`. */
  createSpellSlug?: Maybe<CreateSpellSlugPayload>;
  /** Creates a single `Spell`. */
  createSpell?: Maybe<CreateSpellPayload>;
  /** Updates a single `Attribute` using a unique key and a patch. */
  updateAttributeById?: Maybe<UpdateAttributePayload>;
  /** Updates a single `BgFeature` using a unique key and a patch. */
  updateBgFeatureById?: Maybe<UpdateBgFeaturePayload>;
  /** Updates a single `Bg` using a unique key and a patch. */
  updateBgById?: Maybe<UpdateBgPayload>;
  /** Updates a single `Equipment` using a unique key and a patch. */
  updateEquipmentById?: Maybe<UpdateEquipmentPayload>;
  /** Updates a single `Feat` using a unique key and a patch. */
  updateFeatById?: Maybe<UpdateFeatPayload>;
  /** Updates a single `KnexMigration` using its globally unique id and a patch. */
  updateKnexMigration?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigration` using a unique key and a patch. */
  updateKnexMigrationById?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigrationsLock` using its globally unique id and a patch. */
  updateKnexMigrationsLock?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `KnexMigrationsLock` using a unique key and a patch. */
  updateKnexMigrationsLockByIndex?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguageById?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Skill` using a unique key and a patch. */
  updateSkillById?: Maybe<UpdateSkillPayload>;
  /** Updates a single `SpellSlug` using a unique key and a patch. */
  updateSpellSlugById?: Maybe<UpdateSpellSlugPayload>;
  /** Updates a single `Spell` using a unique key and a patch. */
  updateSpellById?: Maybe<UpdateSpellPayload>;
  /** Deletes a single `Attribute` using a unique key. */
  deleteAttributeById?: Maybe<DeleteAttributePayload>;
  /** Deletes a single `BgFeature` using a unique key. */
  deleteBgFeatureById?: Maybe<DeleteBgFeaturePayload>;
  /** Deletes a single `Bg` using a unique key. */
  deleteBgById?: Maybe<DeleteBgPayload>;
  /** Deletes a single `Equipment` using a unique key. */
  deleteEquipmentById?: Maybe<DeleteEquipmentPayload>;
  /** Deletes a single `Feat` using a unique key. */
  deleteFeatById?: Maybe<DeleteFeatPayload>;
  /** Deletes a single `KnexMigration` using its globally unique id. */
  deleteKnexMigration?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigration` using a unique key. */
  deleteKnexMigrationById?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigrationsLock` using its globally unique id. */
  deleteKnexMigrationsLock?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `KnexMigrationsLock` using a unique key. */
  deleteKnexMigrationsLockByIndex?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `Language` using a unique key. */
  deleteLanguageById?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Skill` using a unique key. */
  deleteSkillById?: Maybe<DeleteSkillPayload>;
  /** Deletes a single `SpellSlug` using a unique key. */
  deleteSpellSlugById?: Maybe<DeleteSpellSlugPayload>;
  /** Deletes a single `Spell` using a unique key. */
  deleteSpellById?: Maybe<DeleteSpellPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAttributeArgs = {
  input: CreateAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBgFeatureArgs = {
  input: CreateBgFeatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBgArgs = {
  input: CreateBgInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEquipmentArgs = {
  input: CreateEquipmentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeatArgs = {
  input: CreateFeatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationArgs = {
  input: CreateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationsLockArgs = {
  input: CreateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSkillArgs = {
  input: CreateSkillInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpellSlugArgs = {
  input: CreateSpellSlugInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpellArgs = {
  input: CreateSpellInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttributeByIdArgs = {
  input: UpdateAttributeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBgFeatureByIdArgs = {
  input: UpdateBgFeatureByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBgByIdArgs = {
  input: UpdateBgByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEquipmentByIdArgs = {
  input: UpdateEquipmentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeatByIdArgs = {
  input: UpdateFeatByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationArgs = {
  input: UpdateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationByIdArgs = {
  input: UpdateKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockArgs = {
  input: UpdateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockByIndexArgs = {
  input: UpdateKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByIdArgs = {
  input: UpdateLanguageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSkillByIdArgs = {
  input: UpdateSkillByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpellSlugByIdArgs = {
  input: UpdateSpellSlugByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpellByIdArgs = {
  input: UpdateSpellByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttributeByIdArgs = {
  input: DeleteAttributeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBgFeatureByIdArgs = {
  input: DeleteBgFeatureByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBgByIdArgs = {
  input: DeleteBgByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEquipmentByIdArgs = {
  input: DeleteEquipmentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeatByIdArgs = {
  input: DeleteFeatByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationArgs = {
  input: DeleteKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationByIdArgs = {
  input: DeleteKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockArgs = {
  input: DeleteKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockByIndexArgs = {
  input: DeleteKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByIdArgs = {
  input: DeleteLanguageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSkillByIdArgs = {
  input: DeleteSkillByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpellSlugByIdArgs = {
  input: DeleteSpellSlugByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpellByIdArgs = {
  input: DeleteSpellByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Attribute`. */
  allAttributes?: Maybe<AttributesConnection>;
  /** Reads and enables pagination through a set of `BgFeature`. */
  allBgFeatures?: Maybe<BgFeaturesConnection>;
  /** Reads and enables pagination through a set of `Bg`. */
  allBgs?: Maybe<BgsConnection>;
  /** Reads and enables pagination through a set of `Equipment`. */
  allEquipment?: Maybe<EquipmentConnection>;
  /** Reads and enables pagination through a set of `Feat`. */
  allFeats?: Maybe<FeatsConnection>;
  /** Reads and enables pagination through a set of `KnexMigration`. */
  allKnexMigrations?: Maybe<KnexMigrationsConnection>;
  /** Reads and enables pagination through a set of `KnexMigrationsLock`. */
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>;
  /** Reads and enables pagination through a set of `Language`. */
  allLanguages?: Maybe<LanguagesConnection>;
  /** Reads and enables pagination through a set of `Skill`. */
  allSkills?: Maybe<SkillsConnection>;
  /** Reads and enables pagination through a set of `SpellSlug`. */
  allSpellSlugs?: Maybe<SpellSlugsConnection>;
  /** Reads and enables pagination through a set of `Spell`. */
  allSpells?: Maybe<SpellsConnection>;
  attributeById?: Maybe<Attribute>;
  bgFeatureById?: Maybe<BgFeature>;
  bgById?: Maybe<Bg>;
  equipmentById?: Maybe<Equipment>;
  featById?: Maybe<Feat>;
  knexMigrationById?: Maybe<KnexMigration>;
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>;
  languageById?: Maybe<Language>;
  skillById?: Maybe<Skill>;
  spellSlugById?: Maybe<SpellSlug>;
  spellById?: Maybe<Spell>;
  /** Reads a single `KnexMigration` using its globally unique `ID`. */
  knexMigration?: Maybe<KnexMigration>;
  /** Reads a single `KnexMigrationsLock` using its globally unique `ID`. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AttributesOrderBy>>;
  condition?: Maybe<AttributeCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBgFeaturesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BgFeaturesOrderBy>>;
  condition?: Maybe<BgFeatureCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBgsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BgsOrderBy>>;
  condition?: Maybe<BgCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllEquipmentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EquipmentOrderBy>>;
  condition?: Maybe<EquipmentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFeatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeatsOrderBy>>;
  condition?: Maybe<FeatCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>;
  condition?: Maybe<KnexMigrationCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsLocksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>;
  condition?: Maybe<KnexMigrationsLockCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLanguagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LanguagesOrderBy>>;
  condition?: Maybe<LanguageCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSkillsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SkillsOrderBy>>;
  condition?: Maybe<SkillCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSpellSlugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SpellSlugsOrderBy>>;
  condition?: Maybe<SpellSlugCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSpellsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SpellsOrderBy>>;
  condition?: Maybe<SpellCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAttributeByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBgFeatureByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBgByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEquipmentByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeatByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySkillByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpellSlugByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpellByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID'];
};

export type Skill = {
  __typename?: 'Skill';
  id?: Maybe<Scalars['UUID']>;
  skill: Scalars['String'];
  attrId: Scalars['UUID'];
  /** Reads a single `Attribute` that is related to this `Skill`. */
  attributeByAttrId?: Maybe<Attribute>;
};

/** A condition to be used against `Skill` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SkillCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `skill` field. */
  skill?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `attrId` field. */
  attrId?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Skill` */
export type SkillInput = {
  id?: Maybe<Scalars['UUID']>;
  skill: Scalars['String'];
  attrId: Scalars['UUID'];
};

/** Represents an update to a `Skill`. Fields that are set will be updated. */
export type SkillPatch = {
  id?: Maybe<Scalars['UUID']>;
  skill?: Maybe<Scalars['String']>;
  attrId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Skill` values. */
export type SkillsConnection = {
  __typename?: 'SkillsConnection';
  /** A list of `Skill` objects. */
  nodes: Array<Maybe<Skill>>;
  /** A list of edges which contains the `Skill` and cursor to aid in pagination. */
  edges: Array<SkillsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Skill` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Skill` edge in the connection. */
export type SkillsEdge = {
  __typename?: 'SkillsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Skill` at the end of the edge. */
  node?: Maybe<Skill>;
};

/** Methods to use when ordering `Skill`. */
export enum SkillsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SkillAsc = 'SKILL_ASC',
  SkillDesc = 'SKILL_DESC',
  AttrIdAsc = 'ATTR_ID_ASC',
  AttrIdDesc = 'ATTR_ID_DESC'
}

export type Spell = {
  __typename?: 'Spell';
  id?: Maybe<Scalars['UUID']>;
  slug: Scalars['String'];
  name: Scalars['String'];
  desc: Array<Maybe<Scalars['String']>>;
  page?: Maybe<Scalars['String']>;
  range: Scalars['JSON'];
  components: Scalars['String'];
  material: Scalars['String'];
  ritual: Scalars['String'];
  duration: Scalars['String'];
  concentration: Scalars['Boolean'];
  castingTime: Scalars['String'];
  level: Scalars['String'];
  levelInt: Scalars['Int'];
  school?: Maybe<Scalars['String']>;
  higherLevel?: Maybe<Scalars['String']>;
  dndClass?: Maybe<Scalars['String']>;
  archetype?: Maybe<Scalars['String']>;
  circles?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Spell` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpellCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `desc` field. */
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `page` field. */
  page?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `range` field. */
  range?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `components` field. */
  components?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `material` field. */
  material?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ritual` field. */
  ritual?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `duration` field. */
  duration?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `concentration` field. */
  concentration?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `castingTime` field. */
  castingTime?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `level` field. */
  level?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `levelInt` field. */
  levelInt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `school` field. */
  school?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `higherLevel` field. */
  higherLevel?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dndClass` field. */
  dndClass?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `archetype` field. */
  archetype?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `circles` field. */
  circles?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Spell` */
export type SpellInput = {
  id?: Maybe<Scalars['UUID']>;
  slug: Scalars['String'];
  name: Scalars['String'];
  desc: Array<Maybe<Scalars['String']>>;
  page?: Maybe<Scalars['String']>;
  range: Scalars['JSON'];
  components: Scalars['String'];
  material: Scalars['String'];
  ritual: Scalars['String'];
  duration: Scalars['String'];
  concentration: Scalars['Boolean'];
  castingTime: Scalars['String'];
  level: Scalars['String'];
  levelInt: Scalars['Int'];
  school?: Maybe<Scalars['String']>;
  higherLevel?: Maybe<Scalars['String']>;
  dndClass?: Maybe<Scalars['String']>;
  archetype?: Maybe<Scalars['String']>;
  circles?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Spell`. Fields that are set will be updated. */
export type SpellPatch = {
  id?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['JSON']>;
  components?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  concentration?: Maybe<Scalars['Boolean']>;
  castingTime?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  levelInt?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  higherLevel?: Maybe<Scalars['String']>;
  dndClass?: Maybe<Scalars['String']>;
  archetype?: Maybe<Scalars['String']>;
  circles?: Maybe<Scalars['String']>;
};

export type SpellSlug = {
  __typename?: 'SpellSlug';
  id?: Maybe<Scalars['UUID']>;
  slug: Scalars['String'];
  name: Scalars['String'];
  components: Scalars['String'];
  level: Scalars['String'];
  levelInt: Scalars['Int'];
  school?: Maybe<Scalars['String']>;
  dndClass: Scalars['String'];
};

/**
 * A condition to be used against `SpellSlug` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SpellSlugCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `components` field. */
  components?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `level` field. */
  level?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `levelInt` field. */
  levelInt?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `school` field. */
  school?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dndClass` field. */
  dndClass?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `SpellSlug` */
export type SpellSlugInput = {
  id?: Maybe<Scalars['UUID']>;
  slug: Scalars['String'];
  name: Scalars['String'];
  components: Scalars['String'];
  level: Scalars['String'];
  levelInt: Scalars['Int'];
  school?: Maybe<Scalars['String']>;
  dndClass: Scalars['String'];
};

/** Represents an update to a `SpellSlug`. Fields that are set will be updated. */
export type SpellSlugPatch = {
  id?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  levelInt?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
  dndClass?: Maybe<Scalars['String']>;
};

/** A connection to a list of `SpellSlug` values. */
export type SpellSlugsConnection = {
  __typename?: 'SpellSlugsConnection';
  /** A list of `SpellSlug` objects. */
  nodes: Array<Maybe<SpellSlug>>;
  /** A list of edges which contains the `SpellSlug` and cursor to aid in pagination. */
  edges: Array<SpellSlugsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SpellSlug` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SpellSlug` edge in the connection. */
export type SpellSlugsEdge = {
  __typename?: 'SpellSlugsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SpellSlug` at the end of the edge. */
  node?: Maybe<SpellSlug>;
};

/** Methods to use when ordering `SpellSlug`. */
export enum SpellSlugsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ComponentsAsc = 'COMPONENTS_ASC',
  ComponentsDesc = 'COMPONENTS_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  LevelIntAsc = 'LEVEL_INT_ASC',
  LevelIntDesc = 'LEVEL_INT_DESC',
  SchoolAsc = 'SCHOOL_ASC',
  SchoolDesc = 'SCHOOL_DESC',
  DndClassAsc = 'DND_CLASS_ASC',
  DndClassDesc = 'DND_CLASS_DESC'
}

/** A connection to a list of `Spell` values. */
export type SpellsConnection = {
  __typename?: 'SpellsConnection';
  /** A list of `Spell` objects. */
  nodes: Array<Maybe<Spell>>;
  /** A list of edges which contains the `Spell` and cursor to aid in pagination. */
  edges: Array<SpellsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Spell` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Spell` edge in the connection. */
export type SpellsEdge = {
  __typename?: 'SpellsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Spell` at the end of the edge. */
  node?: Maybe<Spell>;
};

/** Methods to use when ordering `Spell`. */
export enum SpellsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  PageAsc = 'PAGE_ASC',
  PageDesc = 'PAGE_DESC',
  RangeAsc = 'RANGE_ASC',
  RangeDesc = 'RANGE_DESC',
  ComponentsAsc = 'COMPONENTS_ASC',
  ComponentsDesc = 'COMPONENTS_DESC',
  MaterialAsc = 'MATERIAL_ASC',
  MaterialDesc = 'MATERIAL_DESC',
  RitualAsc = 'RITUAL_ASC',
  RitualDesc = 'RITUAL_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  ConcentrationAsc = 'CONCENTRATION_ASC',
  ConcentrationDesc = 'CONCENTRATION_DESC',
  CastingTimeAsc = 'CASTING_TIME_ASC',
  CastingTimeDesc = 'CASTING_TIME_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  LevelIntAsc = 'LEVEL_INT_ASC',
  LevelIntDesc = 'LEVEL_INT_DESC',
  SchoolAsc = 'SCHOOL_ASC',
  SchoolDesc = 'SCHOOL_DESC',
  HigherLevelAsc = 'HIGHER_LEVEL_ASC',
  HigherLevelDesc = 'HIGHER_LEVEL_DESC',
  DndClassAsc = 'DND_CLASS_ASC',
  DndClassDesc = 'DND_CLASS_DESC',
  ArchetypeAsc = 'ARCHETYPE_ASC',
  ArchetypeDesc = 'ARCHETYPE_DESC',
  CirclesAsc = 'CIRCLES_ASC',
  CirclesDesc = 'CIRCLES_DESC'
}


/** All input for the `updateAttributeById` mutation. */
export type UpdateAttributeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Attribute` being updated. */
  attributePatch: AttributePatch;
  id: Scalars['UUID'];
};

/** The output of our update `Attribute` mutation. */
export type UpdateAttributePayload = {
  __typename?: 'UpdateAttributePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Attribute` that was updated by this mutation. */
  attribute?: Maybe<Attribute>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
};


/** The output of our update `Attribute` mutation. */
export type UpdateAttributePayloadAttributeEdgeArgs = {
  orderBy?: Maybe<Array<AttributesOrderBy>>;
};

/** All input for the `updateBgById` mutation. */
export type UpdateBgByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Bg` being updated. */
  bgPatch: BgPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateBgFeatureById` mutation. */
export type UpdateBgFeatureByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `BgFeature` being updated. */
  bgFeaturePatch: BgFeaturePatch;
  id: Scalars['UUID'];
};

/** The output of our update `BgFeature` mutation. */
export type UpdateBgFeaturePayload = {
  __typename?: 'UpdateBgFeaturePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BgFeature` that was updated by this mutation. */
  bgFeature?: Maybe<BgFeature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `BgFeature`. May be used by Relay 1. */
  bgFeatureEdge?: Maybe<BgFeaturesEdge>;
};


/** The output of our update `BgFeature` mutation. */
export type UpdateBgFeaturePayloadBgFeatureEdgeArgs = {
  orderBy?: Maybe<Array<BgFeaturesOrderBy>>;
};

/** The output of our update `Bg` mutation. */
export type UpdateBgPayload = {
  __typename?: 'UpdateBgPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Bg` that was updated by this mutation. */
  bg?: Maybe<Bg>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByBackgroundFeature?: Maybe<BgFeature>;
  /** Reads a single `BgFeature` that is related to this `Bg`. */
  bgFeatureByAlternateBackgroundFeature?: Maybe<BgFeature>;
  /** An edge for our `Bg`. May be used by Relay 1. */
  bgEdge?: Maybe<BgsEdge>;
};


/** The output of our update `Bg` mutation. */
export type UpdateBgPayloadBgEdgeArgs = {
  orderBy?: Maybe<Array<BgsOrderBy>>;
};

/** All input for the `updateEquipmentById` mutation. */
export type UpdateEquipmentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Equipment` being updated. */
  equipmentPatch: EquipmentPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Equipment` mutation. */
export type UpdateEquipmentPayload = {
  __typename?: 'UpdateEquipmentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Equipment` that was updated by this mutation. */
  equipment?: Maybe<Equipment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Equipment`. May be used by Relay 1. */
  equipmentEdge?: Maybe<EquipmentEdge>;
};


/** The output of our update `Equipment` mutation. */
export type UpdateEquipmentPayloadEquipmentEdgeArgs = {
  orderBy?: Maybe<Array<EquipmentOrderBy>>;
};

/** All input for the `updateFeatById` mutation. */
export type UpdateFeatByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Feat` being updated. */
  featPatch: FeatPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Feat` mutation. */
export type UpdateFeatPayload = {
  __typename?: 'UpdateFeatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feat` that was updated by this mutation. */
  feat?: Maybe<Feat>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Feat`. May be used by Relay 1. */
  featEdge?: Maybe<FeatsEdge>;
};


/** The output of our update `Feat` mutation. */
export type UpdateFeatPayloadFeatEdgeArgs = {
  orderBy?: Maybe<Array<FeatsOrderBy>>;
};

/** The output of our update `Spell` mutation. */
export type UpdateSpellPayload = {
  __typename?: 'UpdateSpellPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spell` that was updated by this mutation. */
  spell?: Maybe<Spell>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Spell`. May be used by Relay 1. */
  spellEdge?: Maybe<SpellsEdge>;
};


/** The output of our update `Spell` mutation. */
export type UpdateSpellPayloadSpellEdgeArgs = {
  orderBy?: Maybe<Array<SpellsOrderBy>>;
};

/** All input for the `updateSpellSlugById` mutation. */
export type UpdateSpellSlugByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SpellSlug` being updated. */
  spellSlugPatch: SpellSlugPatch;
  id: Scalars['UUID'];
};

/** The output of our update `SpellSlug` mutation. */
export type UpdateSpellSlugPayload = {
  __typename?: 'UpdateSpellSlugPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SpellSlug` that was updated by this mutation. */
  spellSlug?: Maybe<SpellSlug>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SpellSlug`. May be used by Relay 1. */
  spellSlugEdge?: Maybe<SpellSlugsEdge>;
};


/** The output of our update `SpellSlug` mutation. */
export type UpdateSpellSlugPayloadSpellSlugEdgeArgs = {
  orderBy?: Maybe<Array<SpellSlugsOrderBy>>;
};

/** All input for the `updateSkillById` mutation. */
export type UpdateSkillByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Skill` being updated. */
  skillPatch: SkillPatch;
  id: Scalars['UUID'];
};

/** The output of our update `Skill` mutation. */
export type UpdateSkillPayload = {
  __typename?: 'UpdateSkillPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Skill` that was updated by this mutation. */
  skill?: Maybe<Skill>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Attribute` that is related to this `Skill`. */
  attributeByAttrId?: Maybe<Attribute>;
  /** An edge for our `Skill`. May be used by Relay 1. */
  skillEdge?: Maybe<SkillsEdge>;
};


/** The output of our update `Skill` mutation. */
export type UpdateSkillPayloadSkillEdgeArgs = {
  orderBy?: Maybe<Array<SkillsOrderBy>>;
};

/** All input for the `updateLanguageById` mutation. */
export type UpdateLanguageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Language` being updated. */
  languagePatch: LanguagePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateSpellById` mutation. */
export type UpdateSpellByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Spell` being updated. */
  spellPatch: SpellPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateKnexMigrationsLockByIndex` mutation. */
export type UpdateKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
  index: Scalars['Int'];
};

/** All input for the `updateKnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
};

/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayload = {
  __typename?: 'UpdateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was updated by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
};


/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `updateKnexMigrationById` mutation. */
export type UpdateKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
  id: Scalars['Int'];
};

/** All input for the `updateKnexMigration` mutation. */
export type UpdateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
};

/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayload = {
  __typename?: 'UpdateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was updated by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
};


/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>;
};

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Language` that was updated by this mutation. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>;
};


/** The output of our update `Language` mutation. */
export type UpdateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: Maybe<Array<LanguagesOrderBy>>;
};

export type AllAttributesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAttributesQuery = (
  { __typename?: 'Query' }
  & { allAttributes?: Maybe<(
    { __typename?: 'AttributesConnection' }
    & { attributes: Array<Maybe<(
      { __typename?: 'Attribute' }
      & Pick<Attribute, 'attribute'>
      & { skillsByAttrId: (
        { __typename?: 'SkillsConnection' }
        & { nodes: Array<Maybe<(
          { __typename?: 'Skill' }
          & Pick<Skill, 'skill'>
        )>> }
      ) }
    )>> }
  )> }
);

export type AllBgFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBgFeaturesQuery = (
  { __typename?: 'Query' }
  & { allBgFeatures?: Maybe<(
    { __typename?: 'BgFeaturesConnection' }
    & { bgFeatures: Array<Maybe<(
      { __typename?: 'BgFeature' }
      & Pick<BgFeature, 'conferringBg' | 'description' | 'name'>
    )>> }
  )> }
);

export type AllBgsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBgsQuery = (
  { __typename?: 'Query' }
  & { allBgs?: Maybe<(
    { __typename?: 'BgsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Bg' }
      & Pick<Bg, 'name' | 'description' | 'numberOfExtraLanguages' | 'languageOptions' | 'numberOfSkillsGranted' | 'skillOptions' | 'numberOfToolsGranted' | 'toolOptions'>
      & { bgFeatureByAlternateBackgroundFeature?: Maybe<(
        { __typename?: 'BgFeature' }
        & Pick<BgFeature, 'name' | 'description'>
      )>, bgFeatureByBackgroundFeature?: Maybe<(
        { __typename?: 'BgFeature' }
        & Pick<BgFeature, 'name' | 'description'>
      )> }
    )>> }
  )> }
);

export type AllEquipmentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEquipmentQuery = (
  { __typename?: 'Query' }
  & { allEquipment?: Maybe<(
    { __typename?: 'EquipmentConnection' }
    & { items: Array<Maybe<(
      { __typename?: 'Equipment' }
      & Pick<Equipment, 'name' | 'type'>
    )>> }
  )> }
);

export type AllFeatsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFeatsQuery = (
  { __typename?: 'Query' }
  & { allFeats?: Maybe<(
    { __typename?: 'FeatsConnection' }
    & { feats: Array<Maybe<(
      { __typename?: 'Feat' }
      & Pick<Feat, 'id' | 'name' | 'desc' | 'points' | 'prereq'>
    )>> }
  )> }
);

export type GetAllLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQuery = (
  { __typename?: 'Query' }
  & { allLanguages?: Maybe<(
    { __typename?: 'LanguagesConnection' }
    & { languages: Array<Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'name' | 'script' | 'type' | 'typicalSpeakers'>
    )>> }
  )> }
);

export type AllSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSkillsQuery = (
  { __typename?: 'Query' }
  & { allSkills?: Maybe<(
    { __typename?: 'SkillsConnection' }
    & { skills: Array<Maybe<(
      { __typename?: 'Skill' }
      & Pick<Skill, 'skill'>
      & { attributeByAttrId?: Maybe<(
        { __typename?: 'Attribute' }
        & Pick<Attribute, 'attribute'>
      )> }
    )>> }
  )> }
);

export type GetAllSpellsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpellsQuery = (
  { __typename?: 'Query' }
  & { allSpells?: Maybe<(
    { __typename?: 'SpellsConnection' }
    & { spells: Array<Maybe<(
      { __typename?: 'Spell' }
      & Pick<Spell, 'archetype' | 'castingTime' | 'circles' | 'components' | 'concentration' | 'desc' | 'dndClass' | 'duration' | 'higherLevel' | 'levelInt' | 'level' | 'material' | 'name' | 'page' | 'range' | 'ritual' | 'school' | 'slug'>
    )>> }
  )> }
);


export const AllAttributesDocument = gql`
    query AllAttributes {
  allAttributes {
    attributes: nodes {
      attribute
      skillsByAttrId {
        nodes {
          skill
        }
      }
    }
  }
}
    `;

/**
 * __useAllAttributesQuery__
 *
 * To run a query within a React component, call `useAllAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAttributesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAttributesQuery(baseOptions?: Apollo.QueryHookOptions<AllAttributesQuery, AllAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAttributesQuery, AllAttributesQueryVariables>(AllAttributesDocument, options);
      }
export function useAllAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAttributesQuery, AllAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAttributesQuery, AllAttributesQueryVariables>(AllAttributesDocument, options);
        }
export type AllAttributesQueryHookResult = ReturnType<typeof useAllAttributesQuery>;
export type AllAttributesLazyQueryHookResult = ReturnType<typeof useAllAttributesLazyQuery>;
export type AllAttributesQueryResult = Apollo.QueryResult<AllAttributesQuery, AllAttributesQueryVariables>;
export const AllBgFeaturesDocument = gql`
    query AllBgFeatures {
  allBgFeatures {
    bgFeatures: nodes {
      conferringBg
      description
      name
    }
  }
}
    `;

/**
 * __useAllBgFeaturesQuery__
 *
 * To run a query within a React component, call `useAllBgFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBgFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBgFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBgFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<AllBgFeaturesQuery, AllBgFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBgFeaturesQuery, AllBgFeaturesQueryVariables>(AllBgFeaturesDocument, options);
      }
export function useAllBgFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBgFeaturesQuery, AllBgFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBgFeaturesQuery, AllBgFeaturesQueryVariables>(AllBgFeaturesDocument, options);
        }
export type AllBgFeaturesQueryHookResult = ReturnType<typeof useAllBgFeaturesQuery>;
export type AllBgFeaturesLazyQueryHookResult = ReturnType<typeof useAllBgFeaturesLazyQuery>;
export type AllBgFeaturesQueryResult = Apollo.QueryResult<AllBgFeaturesQuery, AllBgFeaturesQueryVariables>;
export const AllBgsDocument = gql`
    query AllBgs {
  allBgs {
    nodes {
      name
      description
      numberOfExtraLanguages
      languageOptions
      numberOfSkillsGranted
      skillOptions
      numberOfToolsGranted
      toolOptions
      bgFeatureByAlternateBackgroundFeature {
        name
        description
      }
      bgFeatureByBackgroundFeature {
        name
        description
      }
    }
  }
}
    `;

/**
 * __useAllBgsQuery__
 *
 * To run a query within a React component, call `useAllBgsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBgsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBgsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBgsQuery(baseOptions?: Apollo.QueryHookOptions<AllBgsQuery, AllBgsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBgsQuery, AllBgsQueryVariables>(AllBgsDocument, options);
      }
export function useAllBgsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBgsQuery, AllBgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBgsQuery, AllBgsQueryVariables>(AllBgsDocument, options);
        }
export type AllBgsQueryHookResult = ReturnType<typeof useAllBgsQuery>;
export type AllBgsLazyQueryHookResult = ReturnType<typeof useAllBgsLazyQuery>;
export type AllBgsQueryResult = Apollo.QueryResult<AllBgsQuery, AllBgsQueryVariables>;
export const AllEquipmentDocument = gql`
    query AllEquipment {
  allEquipment {
    items: nodes {
      name
      type
    }
  }
}
    `;

/**
 * __useAllEquipmentQuery__
 *
 * To run a query within a React component, call `useAllEquipmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEquipmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEquipmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEquipmentQuery(baseOptions?: Apollo.QueryHookOptions<AllEquipmentQuery, AllEquipmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllEquipmentQuery, AllEquipmentQueryVariables>(AllEquipmentDocument, options);
      }
export function useAllEquipmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllEquipmentQuery, AllEquipmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllEquipmentQuery, AllEquipmentQueryVariables>(AllEquipmentDocument, options);
        }
export type AllEquipmentQueryHookResult = ReturnType<typeof useAllEquipmentQuery>;
export type AllEquipmentLazyQueryHookResult = ReturnType<typeof useAllEquipmentLazyQuery>;
export type AllEquipmentQueryResult = Apollo.QueryResult<AllEquipmentQuery, AllEquipmentQueryVariables>;
export const AllFeatsDocument = gql`
    query AllFeats {
  allFeats {
    feats: nodes {
      id
      name
      desc
      points
      prereq
    }
  }
}
    `;

/**
 * __useAllFeatsQuery__
 *
 * To run a query within a React component, call `useAllFeatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFeatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFeatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFeatsQuery(baseOptions?: Apollo.QueryHookOptions<AllFeatsQuery, AllFeatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllFeatsQuery, AllFeatsQueryVariables>(AllFeatsDocument, options);
      }
export function useAllFeatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFeatsQuery, AllFeatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllFeatsQuery, AllFeatsQueryVariables>(AllFeatsDocument, options);
        }
export type AllFeatsQueryHookResult = ReturnType<typeof useAllFeatsQuery>;
export type AllFeatsLazyQueryHookResult = ReturnType<typeof useAllFeatsLazyQuery>;
export type AllFeatsQueryResult = Apollo.QueryResult<AllFeatsQuery, AllFeatsQueryVariables>;
export const GetAllLanguagesDocument = gql`
    query GetAllLanguages {
  allLanguages {
    languages: nodes {
      name
      script
      type
      typicalSpeakers
    }
  }
}
    `;

/**
 * __useGetAllLanguagesQuery__
 *
 * To run a query within a React component, call `useGetAllLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>(GetAllLanguagesDocument, options);
      }
export function useGetAllLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>(GetAllLanguagesDocument, options);
        }
export type GetAllLanguagesQueryHookResult = ReturnType<typeof useGetAllLanguagesQuery>;
export type GetAllLanguagesLazyQueryHookResult = ReturnType<typeof useGetAllLanguagesLazyQuery>;
export type GetAllLanguagesQueryResult = Apollo.QueryResult<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>;
export const AllSkillsDocument = gql`
    query AllSkills {
  allSkills {
    skills: nodes {
      skill
      attributeByAttrId {
        attribute
      }
    }
  }
}
    `;

/**
 * __useAllSkillsQuery__
 *
 * To run a query within a React component, call `useAllSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSkillsQuery(baseOptions?: Apollo.QueryHookOptions<AllSkillsQuery, AllSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSkillsQuery, AllSkillsQueryVariables>(AllSkillsDocument, options);
      }
export function useAllSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSkillsQuery, AllSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSkillsQuery, AllSkillsQueryVariables>(AllSkillsDocument, options);
        }
export type AllSkillsQueryHookResult = ReturnType<typeof useAllSkillsQuery>;
export type AllSkillsLazyQueryHookResult = ReturnType<typeof useAllSkillsLazyQuery>;
export type AllSkillsQueryResult = Apollo.QueryResult<AllSkillsQuery, AllSkillsQueryVariables>;
export const GetAllSpellsDocument = gql`
    query GetAllSpells {
  allSpells {
    spells: nodes {
      archetype
      castingTime
      circles
      components
      concentration
      desc
      dndClass
      duration
      higherLevel
      levelInt
      level
      material
      name
      page
      range
      ritual
      school
      slug
    }
  }
}
    `;

/**
 * __useGetAllSpellsQuery__
 *
 * To run a query within a React component, call `useGetAllSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSpellsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSpellsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSpellsQuery, GetAllSpellsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSpellsQuery, GetAllSpellsQueryVariables>(GetAllSpellsDocument, options);
      }
export function useGetAllSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSpellsQuery, GetAllSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSpellsQuery, GetAllSpellsQueryVariables>(GetAllSpellsDocument, options);
        }
export type GetAllSpellsQueryHookResult = ReturnType<typeof useGetAllSpellsQuery>;
export type GetAllSpellsLazyQueryHookResult = ReturnType<typeof useGetAllSpellsLazyQuery>;
export type GetAllSpellsQueryResult = Apollo.QueryResult<GetAllSpellsQuery, GetAllSpellsQueryVariables>;