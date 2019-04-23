export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Profile = {
  name: Scalars["String"];
  age: Scalars["Int"];
};

export type Query = {
  hello: Scalars["String"];
};

export type User = {
  id: Scalars["String"];
  username: Scalars["String"];
  email: Scalars["String"];
  profile: Profile;
  friendsCount: Scalars["Int"];
  friends: Array<Maybe<User>>;
};

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
  AdditionalEntityFields: AdditionalEntityFields;
  CacheControlScope: CacheControlScope;
  Profile: Profile;
  Int: Scalars["Int"];
  Upload: Scalars["Upload"];
  User: User;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    discriminatorField?: Maybe<Maybe<Scalars["String"]>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    discriminatorField?: Maybe<Scalars["String"]>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    embedded?: Maybe<Maybe<Scalars["Boolean"]>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { overrideType?: Maybe<Maybe<Scalars["String"]>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { overrideType?: Maybe<Maybe<Scalars["String"]>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { path?: Maybe<Scalars["String"]> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    maxAge?: Maybe<Maybe<Scalars["Int"]>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProfileResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Profile"]
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  age?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Query"]
> = {
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversTypes["User"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  friendsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  friends?: Resolver<
    Array<Maybe<ResolversTypes["User"]>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
import { ObjectID } from "mongodb";
