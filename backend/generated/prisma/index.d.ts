
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ingamedata
 * 
 */
export type Ingamedata = $Result.DefaultSelection<Prisma.$IngamedataPayload>
/**
 * Model Characterfriend
 * 
 */
export type Characterfriend = $Result.DefaultSelection<Prisma.$CharacterfriendPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingamedata`: Exposes CRUD operations for the **Ingamedata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingamedata
    * const ingamedata = await prisma.ingamedata.findMany()
    * ```
    */
  get ingamedata(): Prisma.IngamedataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterfriend`: Exposes CRUD operations for the **Characterfriend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characterfriends
    * const characterfriends = await prisma.characterfriend.findMany()
    * ```
    */
  get characterfriend(): Prisma.CharacterfriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Ingamedata: 'Ingamedata',
    Characterfriend: 'Characterfriend',
    Inventory: 'Inventory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ingamedata" | "characterfriend" | "inventory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ingamedata: {
        payload: Prisma.$IngamedataPayload<ExtArgs>
        fields: Prisma.IngamedataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngamedataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngamedataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          findFirst: {
            args: Prisma.IngamedataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngamedataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          findMany: {
            args: Prisma.IngamedataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>[]
          }
          create: {
            args: Prisma.IngamedataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          createMany: {
            args: Prisma.IngamedataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngamedataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>[]
          }
          delete: {
            args: Prisma.IngamedataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          update: {
            args: Prisma.IngamedataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          deleteMany: {
            args: Prisma.IngamedataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngamedataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngamedataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>[]
          }
          upsert: {
            args: Prisma.IngamedataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngamedataPayload>
          }
          aggregate: {
            args: Prisma.IngamedataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngamedata>
          }
          groupBy: {
            args: Prisma.IngamedataGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngamedataGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngamedataCountArgs<ExtArgs>
            result: $Utils.Optional<IngamedataCountAggregateOutputType> | number
          }
        }
      }
      Characterfriend: {
        payload: Prisma.$CharacterfriendPayload<ExtArgs>
        fields: Prisma.CharacterfriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterfriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterfriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          findFirst: {
            args: Prisma.CharacterfriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterfriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          findMany: {
            args: Prisma.CharacterfriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>[]
          }
          create: {
            args: Prisma.CharacterfriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          createMany: {
            args: Prisma.CharacterfriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterfriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>[]
          }
          delete: {
            args: Prisma.CharacterfriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          update: {
            args: Prisma.CharacterfriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          deleteMany: {
            args: Prisma.CharacterfriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterfriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterfriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>[]
          }
          upsert: {
            args: Prisma.CharacterfriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterfriendPayload>
          }
          aggregate: {
            args: Prisma.CharacterfriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterfriend>
          }
          groupBy: {
            args: Prisma.CharacterfriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterfriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterfriendCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterfriendCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ingamedata?: IngamedataOmit
    characterfriend?: CharacterfriendOmit
    inventory?: InventoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ingamedata: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingamedata?: boolean | UserCountOutputTypeCountIngamedataArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIngamedataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngamedataWhereInput
  }


  /**
   * Count Type IngamedataCountOutputType
   */

  export type IngamedataCountOutputType = {
    characterfriend: number
    inventory: number
  }

  export type IngamedataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterfriend?: boolean | IngamedataCountOutputTypeCountCharacterfriendArgs
    inventory?: boolean | IngamedataCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * IngamedataCountOutputType without action
   */
  export type IngamedataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngamedataCountOutputType
     */
    select?: IngamedataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngamedataCountOutputType without action
   */
  export type IngamedataCountOutputTypeCountCharacterfriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterfriendWhereInput
  }

  /**
   * IngamedataCountOutputType without action
   */
  export type IngamedataCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    password: string | null
    name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    ingamedata?: boolean | User$ingamedataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingamedata?: boolean | User$ingamedataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ingamedata: Prisma.$IngamedataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      password: string | null
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingamedata<T extends User$ingamedataArgs<ExtArgs> = {}>(args?: Subset<T, User$ingamedataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ingamedata
   */
  export type User$ingamedataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    where?: IngamedataWhereInput
    orderBy?: IngamedataOrderByWithRelationInput | IngamedataOrderByWithRelationInput[]
    cursor?: IngamedataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngamedataScalarFieldEnum | IngamedataScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ingamedata
   */

  export type AggregateIngamedata = {
    _count: IngamedataCountAggregateOutputType | null
    _avg: IngamedataAvgAggregateOutputType | null
    _sum: IngamedataSumAggregateOutputType | null
    _min: IngamedataMinAggregateOutputType | null
    _max: IngamedataMaxAggregateOutputType | null
  }

  export type IngamedataAvgAggregateOutputType = {
    characterHp: number | null
    characterLevel: number | null
    attack: number | null
    defense: number | null
    crit: number | null
    critChance: number | null
    accuracy: number | null
    evasion: number | null
  }

  export type IngamedataSumAggregateOutputType = {
    characterHp: number | null
    characterLevel: number | null
    attack: number | null
    defense: number | null
    crit: number | null
    critChance: number | null
    accuracy: number | null
    evasion: number | null
  }

  export type IngamedataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    characterName: string | null
    characterHp: number | null
    characterLevel: number | null
    attack: number | null
    defense: number | null
    crit: number | null
    critChance: number | null
    accuracy: number | null
    evasion: number | null
    type: string | null
    imagetype: string | null
  }

  export type IngamedataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    characterName: string | null
    characterHp: number | null
    characterLevel: number | null
    attack: number | null
    defense: number | null
    crit: number | null
    critChance: number | null
    accuracy: number | null
    evasion: number | null
    type: string | null
    imagetype: string | null
  }

  export type IngamedataCountAggregateOutputType = {
    id: number
    userId: number
    characterName: number
    characterHp: number
    characterLevel: number
    attack: number
    defense: number
    crit: number
    critChance: number
    accuracy: number
    evasion: number
    type: number
    imagetype: number
    _all: number
  }


  export type IngamedataAvgAggregateInputType = {
    characterHp?: true
    characterLevel?: true
    attack?: true
    defense?: true
    crit?: true
    critChance?: true
    accuracy?: true
    evasion?: true
  }

  export type IngamedataSumAggregateInputType = {
    characterHp?: true
    characterLevel?: true
    attack?: true
    defense?: true
    crit?: true
    critChance?: true
    accuracy?: true
    evasion?: true
  }

  export type IngamedataMinAggregateInputType = {
    id?: true
    userId?: true
    characterName?: true
    characterHp?: true
    characterLevel?: true
    attack?: true
    defense?: true
    crit?: true
    critChance?: true
    accuracy?: true
    evasion?: true
    type?: true
    imagetype?: true
  }

  export type IngamedataMaxAggregateInputType = {
    id?: true
    userId?: true
    characterName?: true
    characterHp?: true
    characterLevel?: true
    attack?: true
    defense?: true
    crit?: true
    critChance?: true
    accuracy?: true
    evasion?: true
    type?: true
    imagetype?: true
  }

  export type IngamedataCountAggregateInputType = {
    id?: true
    userId?: true
    characterName?: true
    characterHp?: true
    characterLevel?: true
    attack?: true
    defense?: true
    crit?: true
    critChance?: true
    accuracy?: true
    evasion?: true
    type?: true
    imagetype?: true
    _all?: true
  }

  export type IngamedataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingamedata to aggregate.
     */
    where?: IngamedataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingamedata to fetch.
     */
    orderBy?: IngamedataOrderByWithRelationInput | IngamedataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngamedataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingamedata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingamedata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingamedata
    **/
    _count?: true | IngamedataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngamedataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngamedataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngamedataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngamedataMaxAggregateInputType
  }

  export type GetIngamedataAggregateType<T extends IngamedataAggregateArgs> = {
        [P in keyof T & keyof AggregateIngamedata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngamedata[P]>
      : GetScalarType<T[P], AggregateIngamedata[P]>
  }




  export type IngamedataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngamedataWhereInput
    orderBy?: IngamedataOrderByWithAggregationInput | IngamedataOrderByWithAggregationInput[]
    by: IngamedataScalarFieldEnum[] | IngamedataScalarFieldEnum
    having?: IngamedataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngamedataCountAggregateInputType | true
    _avg?: IngamedataAvgAggregateInputType
    _sum?: IngamedataSumAggregateInputType
    _min?: IngamedataMinAggregateInputType
    _max?: IngamedataMaxAggregateInputType
  }

  export type IngamedataGroupByOutputType = {
    id: string
    userId: string
    characterName: string | null
    characterHp: number | null
    characterLevel: number | null
    attack: number | null
    defense: number | null
    crit: number | null
    critChance: number | null
    accuracy: number | null
    evasion: number | null
    type: string | null
    imagetype: string | null
    _count: IngamedataCountAggregateOutputType | null
    _avg: IngamedataAvgAggregateOutputType | null
    _sum: IngamedataSumAggregateOutputType | null
    _min: IngamedataMinAggregateOutputType | null
    _max: IngamedataMaxAggregateOutputType | null
  }

  type GetIngamedataGroupByPayload<T extends IngamedataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngamedataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngamedataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngamedataGroupByOutputType[P]>
            : GetScalarType<T[P], IngamedataGroupByOutputType[P]>
        }
      >
    >


  export type IngamedataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterName?: boolean
    characterHp?: boolean
    characterLevel?: boolean
    attack?: boolean
    defense?: boolean
    crit?: boolean
    critChance?: boolean
    accuracy?: boolean
    evasion?: boolean
    type?: boolean
    imagetype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterfriend?: boolean | Ingamedata$characterfriendArgs<ExtArgs>
    inventory?: boolean | Ingamedata$inventoryArgs<ExtArgs>
    _count?: boolean | IngamedataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingamedata"]>

  export type IngamedataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterName?: boolean
    characterHp?: boolean
    characterLevel?: boolean
    attack?: boolean
    defense?: boolean
    crit?: boolean
    critChance?: boolean
    accuracy?: boolean
    evasion?: boolean
    type?: boolean
    imagetype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingamedata"]>

  export type IngamedataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    characterName?: boolean
    characterHp?: boolean
    characterLevel?: boolean
    attack?: boolean
    defense?: boolean
    crit?: boolean
    critChance?: boolean
    accuracy?: boolean
    evasion?: boolean
    type?: boolean
    imagetype?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingamedata"]>

  export type IngamedataSelectScalar = {
    id?: boolean
    userId?: boolean
    characterName?: boolean
    characterHp?: boolean
    characterLevel?: boolean
    attack?: boolean
    defense?: boolean
    crit?: boolean
    critChance?: boolean
    accuracy?: boolean
    evasion?: boolean
    type?: boolean
    imagetype?: boolean
  }

  export type IngamedataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "characterName" | "characterHp" | "characterLevel" | "attack" | "defense" | "crit" | "critChance" | "accuracy" | "evasion" | "type" | "imagetype", ExtArgs["result"]["ingamedata"]>
  export type IngamedataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    characterfriend?: boolean | Ingamedata$characterfriendArgs<ExtArgs>
    inventory?: boolean | Ingamedata$inventoryArgs<ExtArgs>
    _count?: boolean | IngamedataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngamedataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IngamedataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IngamedataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingamedata"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      characterfriend: Prisma.$CharacterfriendPayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      characterName: string | null
      characterHp: number | null
      characterLevel: number | null
      attack: number | null
      defense: number | null
      crit: number | null
      critChance: number | null
      accuracy: number | null
      evasion: number | null
      type: string | null
      imagetype: string | null
    }, ExtArgs["result"]["ingamedata"]>
    composites: {}
  }

  type IngamedataGetPayload<S extends boolean | null | undefined | IngamedataDefaultArgs> = $Result.GetResult<Prisma.$IngamedataPayload, S>

  type IngamedataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngamedataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngamedataCountAggregateInputType | true
    }

  export interface IngamedataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingamedata'], meta: { name: 'Ingamedata' } }
    /**
     * Find zero or one Ingamedata that matches the filter.
     * @param {IngamedataFindUniqueArgs} args - Arguments to find a Ingamedata
     * @example
     * // Get one Ingamedata
     * const ingamedata = await prisma.ingamedata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngamedataFindUniqueArgs>(args: SelectSubset<T, IngamedataFindUniqueArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingamedata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngamedataFindUniqueOrThrowArgs} args - Arguments to find a Ingamedata
     * @example
     * // Get one Ingamedata
     * const ingamedata = await prisma.ingamedata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngamedataFindUniqueOrThrowArgs>(args: SelectSubset<T, IngamedataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingamedata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataFindFirstArgs} args - Arguments to find a Ingamedata
     * @example
     * // Get one Ingamedata
     * const ingamedata = await prisma.ingamedata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngamedataFindFirstArgs>(args?: SelectSubset<T, IngamedataFindFirstArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingamedata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataFindFirstOrThrowArgs} args - Arguments to find a Ingamedata
     * @example
     * // Get one Ingamedata
     * const ingamedata = await prisma.ingamedata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngamedataFindFirstOrThrowArgs>(args?: SelectSubset<T, IngamedataFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingamedata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingamedata
     * const ingamedata = await prisma.ingamedata.findMany()
     * 
     * // Get first 10 Ingamedata
     * const ingamedata = await prisma.ingamedata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingamedataWithIdOnly = await prisma.ingamedata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngamedataFindManyArgs>(args?: SelectSubset<T, IngamedataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingamedata.
     * @param {IngamedataCreateArgs} args - Arguments to create a Ingamedata.
     * @example
     * // Create one Ingamedata
     * const Ingamedata = await prisma.ingamedata.create({
     *   data: {
     *     // ... data to create a Ingamedata
     *   }
     * })
     * 
     */
    create<T extends IngamedataCreateArgs>(args: SelectSubset<T, IngamedataCreateArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingamedata.
     * @param {IngamedataCreateManyArgs} args - Arguments to create many Ingamedata.
     * @example
     * // Create many Ingamedata
     * const ingamedata = await prisma.ingamedata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngamedataCreateManyArgs>(args?: SelectSubset<T, IngamedataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingamedata and returns the data saved in the database.
     * @param {IngamedataCreateManyAndReturnArgs} args - Arguments to create many Ingamedata.
     * @example
     * // Create many Ingamedata
     * const ingamedata = await prisma.ingamedata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingamedata and only return the `id`
     * const ingamedataWithIdOnly = await prisma.ingamedata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngamedataCreateManyAndReturnArgs>(args?: SelectSubset<T, IngamedataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingamedata.
     * @param {IngamedataDeleteArgs} args - Arguments to delete one Ingamedata.
     * @example
     * // Delete one Ingamedata
     * const Ingamedata = await prisma.ingamedata.delete({
     *   where: {
     *     // ... filter to delete one Ingamedata
     *   }
     * })
     * 
     */
    delete<T extends IngamedataDeleteArgs>(args: SelectSubset<T, IngamedataDeleteArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingamedata.
     * @param {IngamedataUpdateArgs} args - Arguments to update one Ingamedata.
     * @example
     * // Update one Ingamedata
     * const ingamedata = await prisma.ingamedata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngamedataUpdateArgs>(args: SelectSubset<T, IngamedataUpdateArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingamedata.
     * @param {IngamedataDeleteManyArgs} args - Arguments to filter Ingamedata to delete.
     * @example
     * // Delete a few Ingamedata
     * const { count } = await prisma.ingamedata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngamedataDeleteManyArgs>(args?: SelectSubset<T, IngamedataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingamedata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingamedata
     * const ingamedata = await prisma.ingamedata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngamedataUpdateManyArgs>(args: SelectSubset<T, IngamedataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingamedata and returns the data updated in the database.
     * @param {IngamedataUpdateManyAndReturnArgs} args - Arguments to update many Ingamedata.
     * @example
     * // Update many Ingamedata
     * const ingamedata = await prisma.ingamedata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingamedata and only return the `id`
     * const ingamedataWithIdOnly = await prisma.ingamedata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngamedataUpdateManyAndReturnArgs>(args: SelectSubset<T, IngamedataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingamedata.
     * @param {IngamedataUpsertArgs} args - Arguments to update or create a Ingamedata.
     * @example
     * // Update or create a Ingamedata
     * const ingamedata = await prisma.ingamedata.upsert({
     *   create: {
     *     // ... data to create a Ingamedata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingamedata we want to update
     *   }
     * })
     */
    upsert<T extends IngamedataUpsertArgs>(args: SelectSubset<T, IngamedataUpsertArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingamedata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataCountArgs} args - Arguments to filter Ingamedata to count.
     * @example
     * // Count the number of Ingamedata
     * const count = await prisma.ingamedata.count({
     *   where: {
     *     // ... the filter for the Ingamedata we want to count
     *   }
     * })
    **/
    count<T extends IngamedataCountArgs>(
      args?: Subset<T, IngamedataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngamedataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingamedata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngamedataAggregateArgs>(args: Subset<T, IngamedataAggregateArgs>): Prisma.PrismaPromise<GetIngamedataAggregateType<T>>

    /**
     * Group by Ingamedata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngamedataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngamedataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngamedataGroupByArgs['orderBy'] }
        : { orderBy?: IngamedataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngamedataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngamedataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingamedata model
   */
  readonly fields: IngamedataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingamedata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngamedataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    characterfriend<T extends Ingamedata$characterfriendArgs<ExtArgs> = {}>(args?: Subset<T, Ingamedata$characterfriendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Ingamedata$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Ingamedata$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingamedata model
   */
  interface IngamedataFieldRefs {
    readonly id: FieldRef<"Ingamedata", 'String'>
    readonly userId: FieldRef<"Ingamedata", 'String'>
    readonly characterName: FieldRef<"Ingamedata", 'String'>
    readonly characterHp: FieldRef<"Ingamedata", 'Int'>
    readonly characterLevel: FieldRef<"Ingamedata", 'Int'>
    readonly attack: FieldRef<"Ingamedata", 'Int'>
    readonly defense: FieldRef<"Ingamedata", 'Int'>
    readonly crit: FieldRef<"Ingamedata", 'Int'>
    readonly critChance: FieldRef<"Ingamedata", 'Int'>
    readonly accuracy: FieldRef<"Ingamedata", 'Int'>
    readonly evasion: FieldRef<"Ingamedata", 'Int'>
    readonly type: FieldRef<"Ingamedata", 'String'>
    readonly imagetype: FieldRef<"Ingamedata", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingamedata findUnique
   */
  export type IngamedataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter, which Ingamedata to fetch.
     */
    where: IngamedataWhereUniqueInput
  }

  /**
   * Ingamedata findUniqueOrThrow
   */
  export type IngamedataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter, which Ingamedata to fetch.
     */
    where: IngamedataWhereUniqueInput
  }

  /**
   * Ingamedata findFirst
   */
  export type IngamedataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter, which Ingamedata to fetch.
     */
    where?: IngamedataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingamedata to fetch.
     */
    orderBy?: IngamedataOrderByWithRelationInput | IngamedataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingamedata.
     */
    cursor?: IngamedataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingamedata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingamedata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingamedata.
     */
    distinct?: IngamedataScalarFieldEnum | IngamedataScalarFieldEnum[]
  }

  /**
   * Ingamedata findFirstOrThrow
   */
  export type IngamedataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter, which Ingamedata to fetch.
     */
    where?: IngamedataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingamedata to fetch.
     */
    orderBy?: IngamedataOrderByWithRelationInput | IngamedataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingamedata.
     */
    cursor?: IngamedataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingamedata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingamedata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingamedata.
     */
    distinct?: IngamedataScalarFieldEnum | IngamedataScalarFieldEnum[]
  }

  /**
   * Ingamedata findMany
   */
  export type IngamedataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter, which Ingamedata to fetch.
     */
    where?: IngamedataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingamedata to fetch.
     */
    orderBy?: IngamedataOrderByWithRelationInput | IngamedataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingamedata.
     */
    cursor?: IngamedataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingamedata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingamedata.
     */
    skip?: number
    distinct?: IngamedataScalarFieldEnum | IngamedataScalarFieldEnum[]
  }

  /**
   * Ingamedata create
   */
  export type IngamedataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingamedata.
     */
    data: XOR<IngamedataCreateInput, IngamedataUncheckedCreateInput>
  }

  /**
   * Ingamedata createMany
   */
  export type IngamedataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingamedata.
     */
    data: IngamedataCreateManyInput | IngamedataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingamedata createManyAndReturn
   */
  export type IngamedataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * The data used to create many Ingamedata.
     */
    data: IngamedataCreateManyInput | IngamedataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingamedata update
   */
  export type IngamedataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingamedata.
     */
    data: XOR<IngamedataUpdateInput, IngamedataUncheckedUpdateInput>
    /**
     * Choose, which Ingamedata to update.
     */
    where: IngamedataWhereUniqueInput
  }

  /**
   * Ingamedata updateMany
   */
  export type IngamedataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingamedata.
     */
    data: XOR<IngamedataUpdateManyMutationInput, IngamedataUncheckedUpdateManyInput>
    /**
     * Filter which Ingamedata to update
     */
    where?: IngamedataWhereInput
    /**
     * Limit how many Ingamedata to update.
     */
    limit?: number
  }

  /**
   * Ingamedata updateManyAndReturn
   */
  export type IngamedataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * The data used to update Ingamedata.
     */
    data: XOR<IngamedataUpdateManyMutationInput, IngamedataUncheckedUpdateManyInput>
    /**
     * Filter which Ingamedata to update
     */
    where?: IngamedataWhereInput
    /**
     * Limit how many Ingamedata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingamedata upsert
   */
  export type IngamedataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingamedata to update in case it exists.
     */
    where: IngamedataWhereUniqueInput
    /**
     * In case the Ingamedata found by the `where` argument doesn't exist, create a new Ingamedata with this data.
     */
    create: XOR<IngamedataCreateInput, IngamedataUncheckedCreateInput>
    /**
     * In case the Ingamedata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngamedataUpdateInput, IngamedataUncheckedUpdateInput>
  }

  /**
   * Ingamedata delete
   */
  export type IngamedataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    /**
     * Filter which Ingamedata to delete.
     */
    where: IngamedataWhereUniqueInput
  }

  /**
   * Ingamedata deleteMany
   */
  export type IngamedataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingamedata to delete
     */
    where?: IngamedataWhereInput
    /**
     * Limit how many Ingamedata to delete.
     */
    limit?: number
  }

  /**
   * Ingamedata.characterfriend
   */
  export type Ingamedata$characterfriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    where?: CharacterfriendWhereInput
    orderBy?: CharacterfriendOrderByWithRelationInput | CharacterfriendOrderByWithRelationInput[]
    cursor?: CharacterfriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterfriendScalarFieldEnum | CharacterfriendScalarFieldEnum[]
  }

  /**
   * Ingamedata.inventory
   */
  export type Ingamedata$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Ingamedata without action
   */
  export type IngamedataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
  }


  /**
   * Model Characterfriend
   */

  export type AggregateCharacterfriend = {
    _count: CharacterfriendCountAggregateOutputType | null
    _min: CharacterfriendMinAggregateOutputType | null
    _max: CharacterfriendMaxAggregateOutputType | null
  }

  export type CharacterfriendMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    imagetype: string | null
    ingamedataId: string | null
  }

  export type CharacterfriendMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    imagetype: string | null
    ingamedataId: string | null
  }

  export type CharacterfriendCountAggregateOutputType = {
    id: number
    name: number
    type: number
    imagetype: number
    ingamedataId: number
    _all: number
  }


  export type CharacterfriendMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imagetype?: true
    ingamedataId?: true
  }

  export type CharacterfriendMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imagetype?: true
    ingamedataId?: true
  }

  export type CharacterfriendCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    imagetype?: true
    ingamedataId?: true
    _all?: true
  }

  export type CharacterfriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characterfriend to aggregate.
     */
    where?: CharacterfriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterfriends to fetch.
     */
    orderBy?: CharacterfriendOrderByWithRelationInput | CharacterfriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterfriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterfriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterfriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characterfriends
    **/
    _count?: true | CharacterfriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterfriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterfriendMaxAggregateInputType
  }

  export type GetCharacterfriendAggregateType<T extends CharacterfriendAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterfriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterfriend[P]>
      : GetScalarType<T[P], AggregateCharacterfriend[P]>
  }




  export type CharacterfriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterfriendWhereInput
    orderBy?: CharacterfriendOrderByWithAggregationInput | CharacterfriendOrderByWithAggregationInput[]
    by: CharacterfriendScalarFieldEnum[] | CharacterfriendScalarFieldEnum
    having?: CharacterfriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterfriendCountAggregateInputType | true
    _min?: CharacterfriendMinAggregateInputType
    _max?: CharacterfriendMaxAggregateInputType
  }

  export type CharacterfriendGroupByOutputType = {
    id: string
    name: string | null
    type: string | null
    imagetype: string | null
    ingamedataId: string | null
    _count: CharacterfriendCountAggregateOutputType | null
    _min: CharacterfriendMinAggregateOutputType | null
    _max: CharacterfriendMaxAggregateOutputType | null
  }

  type GetCharacterfriendGroupByPayload<T extends CharacterfriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterfriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterfriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterfriendGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterfriendGroupByOutputType[P]>
        }
      >
    >


  export type CharacterfriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    imagetype?: boolean
    ingamedataId?: boolean
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }, ExtArgs["result"]["characterfriend"]>

  export type CharacterfriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    imagetype?: boolean
    ingamedataId?: boolean
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }, ExtArgs["result"]["characterfriend"]>

  export type CharacterfriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    imagetype?: boolean
    ingamedataId?: boolean
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }, ExtArgs["result"]["characterfriend"]>

  export type CharacterfriendSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    imagetype?: boolean
    ingamedataId?: boolean
  }

  export type CharacterfriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "imagetype" | "ingamedataId", ExtArgs["result"]["characterfriend"]>
  export type CharacterfriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }
  export type CharacterfriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }
  export type CharacterfriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ingamedata?: boolean | Characterfriend$IngamedataArgs<ExtArgs>
  }

  export type $CharacterfriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characterfriend"
    objects: {
      Ingamedata: Prisma.$IngamedataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      type: string | null
      imagetype: string | null
      ingamedataId: string | null
    }, ExtArgs["result"]["characterfriend"]>
    composites: {}
  }

  type CharacterfriendGetPayload<S extends boolean | null | undefined | CharacterfriendDefaultArgs> = $Result.GetResult<Prisma.$CharacterfriendPayload, S>

  type CharacterfriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterfriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterfriendCountAggregateInputType | true
    }

  export interface CharacterfriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characterfriend'], meta: { name: 'Characterfriend' } }
    /**
     * Find zero or one Characterfriend that matches the filter.
     * @param {CharacterfriendFindUniqueArgs} args - Arguments to find a Characterfriend
     * @example
     * // Get one Characterfriend
     * const characterfriend = await prisma.characterfriend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterfriendFindUniqueArgs>(args: SelectSubset<T, CharacterfriendFindUniqueArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Characterfriend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterfriendFindUniqueOrThrowArgs} args - Arguments to find a Characterfriend
     * @example
     * // Get one Characterfriend
     * const characterfriend = await prisma.characterfriend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterfriendFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterfriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characterfriend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendFindFirstArgs} args - Arguments to find a Characterfriend
     * @example
     * // Get one Characterfriend
     * const characterfriend = await prisma.characterfriend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterfriendFindFirstArgs>(args?: SelectSubset<T, CharacterfriendFindFirstArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characterfriend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendFindFirstOrThrowArgs} args - Arguments to find a Characterfriend
     * @example
     * // Get one Characterfriend
     * const characterfriend = await prisma.characterfriend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterfriendFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterfriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characterfriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characterfriends
     * const characterfriends = await prisma.characterfriend.findMany()
     * 
     * // Get first 10 Characterfriends
     * const characterfriends = await prisma.characterfriend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterfriendWithIdOnly = await prisma.characterfriend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterfriendFindManyArgs>(args?: SelectSubset<T, CharacterfriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Characterfriend.
     * @param {CharacterfriendCreateArgs} args - Arguments to create a Characterfriend.
     * @example
     * // Create one Characterfriend
     * const Characterfriend = await prisma.characterfriend.create({
     *   data: {
     *     // ... data to create a Characterfriend
     *   }
     * })
     * 
     */
    create<T extends CharacterfriendCreateArgs>(args: SelectSubset<T, CharacterfriendCreateArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characterfriends.
     * @param {CharacterfriendCreateManyArgs} args - Arguments to create many Characterfriends.
     * @example
     * // Create many Characterfriends
     * const characterfriend = await prisma.characterfriend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterfriendCreateManyArgs>(args?: SelectSubset<T, CharacterfriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characterfriends and returns the data saved in the database.
     * @param {CharacterfriendCreateManyAndReturnArgs} args - Arguments to create many Characterfriends.
     * @example
     * // Create many Characterfriends
     * const characterfriend = await prisma.characterfriend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characterfriends and only return the `id`
     * const characterfriendWithIdOnly = await prisma.characterfriend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterfriendCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterfriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Characterfriend.
     * @param {CharacterfriendDeleteArgs} args - Arguments to delete one Characterfriend.
     * @example
     * // Delete one Characterfriend
     * const Characterfriend = await prisma.characterfriend.delete({
     *   where: {
     *     // ... filter to delete one Characterfriend
     *   }
     * })
     * 
     */
    delete<T extends CharacterfriendDeleteArgs>(args: SelectSubset<T, CharacterfriendDeleteArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Characterfriend.
     * @param {CharacterfriendUpdateArgs} args - Arguments to update one Characterfriend.
     * @example
     * // Update one Characterfriend
     * const characterfriend = await prisma.characterfriend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterfriendUpdateArgs>(args: SelectSubset<T, CharacterfriendUpdateArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characterfriends.
     * @param {CharacterfriendDeleteManyArgs} args - Arguments to filter Characterfriends to delete.
     * @example
     * // Delete a few Characterfriends
     * const { count } = await prisma.characterfriend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterfriendDeleteManyArgs>(args?: SelectSubset<T, CharacterfriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characterfriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characterfriends
     * const characterfriend = await prisma.characterfriend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterfriendUpdateManyArgs>(args: SelectSubset<T, CharacterfriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characterfriends and returns the data updated in the database.
     * @param {CharacterfriendUpdateManyAndReturnArgs} args - Arguments to update many Characterfriends.
     * @example
     * // Update many Characterfriends
     * const characterfriend = await prisma.characterfriend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characterfriends and only return the `id`
     * const characterfriendWithIdOnly = await prisma.characterfriend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterfriendUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterfriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Characterfriend.
     * @param {CharacterfriendUpsertArgs} args - Arguments to update or create a Characterfriend.
     * @example
     * // Update or create a Characterfriend
     * const characterfriend = await prisma.characterfriend.upsert({
     *   create: {
     *     // ... data to create a Characterfriend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characterfriend we want to update
     *   }
     * })
     */
    upsert<T extends CharacterfriendUpsertArgs>(args: SelectSubset<T, CharacterfriendUpsertArgs<ExtArgs>>): Prisma__CharacterfriendClient<$Result.GetResult<Prisma.$CharacterfriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characterfriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendCountArgs} args - Arguments to filter Characterfriends to count.
     * @example
     * // Count the number of Characterfriends
     * const count = await prisma.characterfriend.count({
     *   where: {
     *     // ... the filter for the Characterfriends we want to count
     *   }
     * })
    **/
    count<T extends CharacterfriendCountArgs>(
      args?: Subset<T, CharacterfriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterfriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characterfriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterfriendAggregateArgs>(args: Subset<T, CharacterfriendAggregateArgs>): Prisma.PrismaPromise<GetCharacterfriendAggregateType<T>>

    /**
     * Group by Characterfriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterfriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterfriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterfriendGroupByArgs['orderBy'] }
        : { orderBy?: CharacterfriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterfriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterfriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characterfriend model
   */
  readonly fields: CharacterfriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characterfriend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterfriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ingamedata<T extends Characterfriend$IngamedataArgs<ExtArgs> = {}>(args?: Subset<T, Characterfriend$IngamedataArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Characterfriend model
   */
  interface CharacterfriendFieldRefs {
    readonly id: FieldRef<"Characterfriend", 'String'>
    readonly name: FieldRef<"Characterfriend", 'String'>
    readonly type: FieldRef<"Characterfriend", 'String'>
    readonly imagetype: FieldRef<"Characterfriend", 'String'>
    readonly ingamedataId: FieldRef<"Characterfriend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Characterfriend findUnique
   */
  export type CharacterfriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter, which Characterfriend to fetch.
     */
    where: CharacterfriendWhereUniqueInput
  }

  /**
   * Characterfriend findUniqueOrThrow
   */
  export type CharacterfriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter, which Characterfriend to fetch.
     */
    where: CharacterfriendWhereUniqueInput
  }

  /**
   * Characterfriend findFirst
   */
  export type CharacterfriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter, which Characterfriend to fetch.
     */
    where?: CharacterfriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterfriends to fetch.
     */
    orderBy?: CharacterfriendOrderByWithRelationInput | CharacterfriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characterfriends.
     */
    cursor?: CharacterfriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterfriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterfriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characterfriends.
     */
    distinct?: CharacterfriendScalarFieldEnum | CharacterfriendScalarFieldEnum[]
  }

  /**
   * Characterfriend findFirstOrThrow
   */
  export type CharacterfriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter, which Characterfriend to fetch.
     */
    where?: CharacterfriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterfriends to fetch.
     */
    orderBy?: CharacterfriendOrderByWithRelationInput | CharacterfriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characterfriends.
     */
    cursor?: CharacterfriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterfriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterfriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characterfriends.
     */
    distinct?: CharacterfriendScalarFieldEnum | CharacterfriendScalarFieldEnum[]
  }

  /**
   * Characterfriend findMany
   */
  export type CharacterfriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter, which Characterfriends to fetch.
     */
    where?: CharacterfriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characterfriends to fetch.
     */
    orderBy?: CharacterfriendOrderByWithRelationInput | CharacterfriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characterfriends.
     */
    cursor?: CharacterfriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characterfriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characterfriends.
     */
    skip?: number
    distinct?: CharacterfriendScalarFieldEnum | CharacterfriendScalarFieldEnum[]
  }

  /**
   * Characterfriend create
   */
  export type CharacterfriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Characterfriend.
     */
    data?: XOR<CharacterfriendCreateInput, CharacterfriendUncheckedCreateInput>
  }

  /**
   * Characterfriend createMany
   */
  export type CharacterfriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characterfriends.
     */
    data: CharacterfriendCreateManyInput | CharacterfriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characterfriend createManyAndReturn
   */
  export type CharacterfriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * The data used to create many Characterfriends.
     */
    data: CharacterfriendCreateManyInput | CharacterfriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Characterfriend update
   */
  export type CharacterfriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Characterfriend.
     */
    data: XOR<CharacterfriendUpdateInput, CharacterfriendUncheckedUpdateInput>
    /**
     * Choose, which Characterfriend to update.
     */
    where: CharacterfriendWhereUniqueInput
  }

  /**
   * Characterfriend updateMany
   */
  export type CharacterfriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characterfriends.
     */
    data: XOR<CharacterfriendUpdateManyMutationInput, CharacterfriendUncheckedUpdateManyInput>
    /**
     * Filter which Characterfriends to update
     */
    where?: CharacterfriendWhereInput
    /**
     * Limit how many Characterfriends to update.
     */
    limit?: number
  }

  /**
   * Characterfriend updateManyAndReturn
   */
  export type CharacterfriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * The data used to update Characterfriends.
     */
    data: XOR<CharacterfriendUpdateManyMutationInput, CharacterfriendUncheckedUpdateManyInput>
    /**
     * Filter which Characterfriends to update
     */
    where?: CharacterfriendWhereInput
    /**
     * Limit how many Characterfriends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Characterfriend upsert
   */
  export type CharacterfriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Characterfriend to update in case it exists.
     */
    where: CharacterfriendWhereUniqueInput
    /**
     * In case the Characterfriend found by the `where` argument doesn't exist, create a new Characterfriend with this data.
     */
    create: XOR<CharacterfriendCreateInput, CharacterfriendUncheckedCreateInput>
    /**
     * In case the Characterfriend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterfriendUpdateInput, CharacterfriendUncheckedUpdateInput>
  }

  /**
   * Characterfriend delete
   */
  export type CharacterfriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
    /**
     * Filter which Characterfriend to delete.
     */
    where: CharacterfriendWhereUniqueInput
  }

  /**
   * Characterfriend deleteMany
   */
  export type CharacterfriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characterfriends to delete
     */
    where?: CharacterfriendWhereInput
    /**
     * Limit how many Characterfriends to delete.
     */
    limit?: number
  }

  /**
   * Characterfriend.Ingamedata
   */
  export type Characterfriend$IngamedataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingamedata
     */
    select?: IngamedataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingamedata
     */
    omit?: IngamedataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngamedataInclude<ExtArgs> | null
    where?: IngamedataWhereInput
  }

  /**
   * Characterfriend without action
   */
  export type CharacterfriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characterfriend
     */
    select?: CharacterfriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characterfriend
     */
    omit?: CharacterfriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterfriendInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    ingamedataId: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    ingamedataId: string | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    quantity: number
    ingamedataId: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    ingamedataId?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    ingamedataId?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    ingamedataId?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    quantity: number | null
    ingamedataId: string
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    ingamedataId?: boolean
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    ingamedataId?: boolean
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    ingamedataId?: boolean
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    ingamedataId?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "quantity" | "ingamedataId", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingamedata?: boolean | IngamedataDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      ingamedata: Prisma.$IngamedataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      quantity: number | null
      ingamedataId: string
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingamedata<T extends IngamedataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngamedataDefaultArgs<ExtArgs>>): Prisma__IngamedataClient<$Result.GetResult<Prisma.$IngamedataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly name: FieldRef<"Inventory", 'String'>
    readonly description: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly ingamedataId: FieldRef<"Inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IngamedataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    characterName: 'characterName',
    characterHp: 'characterHp',
    characterLevel: 'characterLevel',
    attack: 'attack',
    defense: 'defense',
    crit: 'crit',
    critChance: 'critChance',
    accuracy: 'accuracy',
    evasion: 'evasion',
    type: 'type',
    imagetype: 'imagetype'
  };

  export type IngamedataScalarFieldEnum = (typeof IngamedataScalarFieldEnum)[keyof typeof IngamedataScalarFieldEnum]


  export const CharacterfriendScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    imagetype: 'imagetype',
    ingamedataId: 'ingamedataId'
  };

  export type CharacterfriendScalarFieldEnum = (typeof CharacterfriendScalarFieldEnum)[keyof typeof CharacterfriendScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    ingamedataId: 'ingamedataId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    ingamedata?: IngamedataListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    ingamedata?: IngamedataOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    ingamedata?: IngamedataListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type IngamedataWhereInput = {
    AND?: IngamedataWhereInput | IngamedataWhereInput[]
    OR?: IngamedataWhereInput[]
    NOT?: IngamedataWhereInput | IngamedataWhereInput[]
    id?: StringFilter<"Ingamedata"> | string
    userId?: StringFilter<"Ingamedata"> | string
    characterName?: StringNullableFilter<"Ingamedata"> | string | null
    characterHp?: IntNullableFilter<"Ingamedata"> | number | null
    characterLevel?: IntNullableFilter<"Ingamedata"> | number | null
    attack?: IntNullableFilter<"Ingamedata"> | number | null
    defense?: IntNullableFilter<"Ingamedata"> | number | null
    crit?: IntNullableFilter<"Ingamedata"> | number | null
    critChance?: IntNullableFilter<"Ingamedata"> | number | null
    accuracy?: IntNullableFilter<"Ingamedata"> | number | null
    evasion?: IntNullableFilter<"Ingamedata"> | number | null
    type?: StringNullableFilter<"Ingamedata"> | string | null
    imagetype?: StringNullableFilter<"Ingamedata"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    characterfriend?: CharacterfriendListRelationFilter
    inventory?: InventoryListRelationFilter
  }

  export type IngamedataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterName?: SortOrderInput | SortOrder
    characterHp?: SortOrderInput | SortOrder
    characterLevel?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    crit?: SortOrderInput | SortOrder
    critChance?: SortOrderInput | SortOrder
    accuracy?: SortOrderInput | SortOrder
    evasion?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imagetype?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    characterfriend?: CharacterfriendOrderByRelationAggregateInput
    inventory?: InventoryOrderByRelationAggregateInput
  }

  export type IngamedataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngamedataWhereInput | IngamedataWhereInput[]
    OR?: IngamedataWhereInput[]
    NOT?: IngamedataWhereInput | IngamedataWhereInput[]
    userId?: StringFilter<"Ingamedata"> | string
    characterName?: StringNullableFilter<"Ingamedata"> | string | null
    characterHp?: IntNullableFilter<"Ingamedata"> | number | null
    characterLevel?: IntNullableFilter<"Ingamedata"> | number | null
    attack?: IntNullableFilter<"Ingamedata"> | number | null
    defense?: IntNullableFilter<"Ingamedata"> | number | null
    crit?: IntNullableFilter<"Ingamedata"> | number | null
    critChance?: IntNullableFilter<"Ingamedata"> | number | null
    accuracy?: IntNullableFilter<"Ingamedata"> | number | null
    evasion?: IntNullableFilter<"Ingamedata"> | number | null
    type?: StringNullableFilter<"Ingamedata"> | string | null
    imagetype?: StringNullableFilter<"Ingamedata"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    characterfriend?: CharacterfriendListRelationFilter
    inventory?: InventoryListRelationFilter
  }, "id">

  export type IngamedataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    characterName?: SortOrderInput | SortOrder
    characterHp?: SortOrderInput | SortOrder
    characterLevel?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    defense?: SortOrderInput | SortOrder
    crit?: SortOrderInput | SortOrder
    critChance?: SortOrderInput | SortOrder
    accuracy?: SortOrderInput | SortOrder
    evasion?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imagetype?: SortOrderInput | SortOrder
    _count?: IngamedataCountOrderByAggregateInput
    _avg?: IngamedataAvgOrderByAggregateInput
    _max?: IngamedataMaxOrderByAggregateInput
    _min?: IngamedataMinOrderByAggregateInput
    _sum?: IngamedataSumOrderByAggregateInput
  }

  export type IngamedataScalarWhereWithAggregatesInput = {
    AND?: IngamedataScalarWhereWithAggregatesInput | IngamedataScalarWhereWithAggregatesInput[]
    OR?: IngamedataScalarWhereWithAggregatesInput[]
    NOT?: IngamedataScalarWhereWithAggregatesInput | IngamedataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingamedata"> | string
    userId?: StringWithAggregatesFilter<"Ingamedata"> | string
    characterName?: StringNullableWithAggregatesFilter<"Ingamedata"> | string | null
    characterHp?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    characterLevel?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    attack?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    defense?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    crit?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    critChance?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    accuracy?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    evasion?: IntNullableWithAggregatesFilter<"Ingamedata"> | number | null
    type?: StringNullableWithAggregatesFilter<"Ingamedata"> | string | null
    imagetype?: StringNullableWithAggregatesFilter<"Ingamedata"> | string | null
  }

  export type CharacterfriendWhereInput = {
    AND?: CharacterfriendWhereInput | CharacterfriendWhereInput[]
    OR?: CharacterfriendWhereInput[]
    NOT?: CharacterfriendWhereInput | CharacterfriendWhereInput[]
    id?: UuidFilter<"Characterfriend"> | string
    name?: StringNullableFilter<"Characterfriend"> | string | null
    type?: StringNullableFilter<"Characterfriend"> | string | null
    imagetype?: StringNullableFilter<"Characterfriend"> | string | null
    ingamedataId?: StringNullableFilter<"Characterfriend"> | string | null
    Ingamedata?: XOR<IngamedataNullableScalarRelationFilter, IngamedataWhereInput> | null
  }

  export type CharacterfriendOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imagetype?: SortOrderInput | SortOrder
    ingamedataId?: SortOrderInput | SortOrder
    Ingamedata?: IngamedataOrderByWithRelationInput
  }

  export type CharacterfriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterfriendWhereInput | CharacterfriendWhereInput[]
    OR?: CharacterfriendWhereInput[]
    NOT?: CharacterfriendWhereInput | CharacterfriendWhereInput[]
    name?: StringNullableFilter<"Characterfriend"> | string | null
    type?: StringNullableFilter<"Characterfriend"> | string | null
    imagetype?: StringNullableFilter<"Characterfriend"> | string | null
    ingamedataId?: StringNullableFilter<"Characterfriend"> | string | null
    Ingamedata?: XOR<IngamedataNullableScalarRelationFilter, IngamedataWhereInput> | null
  }, "id">

  export type CharacterfriendOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    imagetype?: SortOrderInput | SortOrder
    ingamedataId?: SortOrderInput | SortOrder
    _count?: CharacterfriendCountOrderByAggregateInput
    _max?: CharacterfriendMaxOrderByAggregateInput
    _min?: CharacterfriendMinOrderByAggregateInput
  }

  export type CharacterfriendScalarWhereWithAggregatesInput = {
    AND?: CharacterfriendScalarWhereWithAggregatesInput | CharacterfriendScalarWhereWithAggregatesInput[]
    OR?: CharacterfriendScalarWhereWithAggregatesInput[]
    NOT?: CharacterfriendScalarWhereWithAggregatesInput | CharacterfriendScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Characterfriend"> | string
    name?: StringNullableWithAggregatesFilter<"Characterfriend"> | string | null
    type?: StringNullableWithAggregatesFilter<"Characterfriend"> | string | null
    imagetype?: StringNullableWithAggregatesFilter<"Characterfriend"> | string | null
    ingamedataId?: StringNullableWithAggregatesFilter<"Characterfriend"> | string | null
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    name?: StringNullableFilter<"Inventory"> | string | null
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntNullableFilter<"Inventory"> | number | null
    ingamedataId?: StringFilter<"Inventory"> | string
    ingamedata?: XOR<IngamedataScalarRelationFilter, IngamedataWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    ingamedataId?: SortOrder
    ingamedata?: IngamedataOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    name?: StringNullableFilter<"Inventory"> | string | null
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntNullableFilter<"Inventory"> | number | null
    ingamedataId?: StringFilter<"Inventory"> | string
    ingamedata?: XOR<IngamedataScalarRelationFilter, IngamedataWhereInput>
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    ingamedataId?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    name?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    description?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
    ingamedataId?: StringWithAggregatesFilter<"Inventory"> | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    ingamedata?: IngamedataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    ingamedata?: IngamedataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ingamedata?: IngamedataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ingamedata?: IngamedataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngamedataCreateInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    user: UserCreateNestedOneWithoutIngamedataInput
    characterfriend?: CharacterfriendCreateNestedManyWithoutIngamedataInput
    inventory?: InventoryCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataUncheckedCreateInput = {
    id?: string
    userId: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    characterfriend?: CharacterfriendUncheckedCreateNestedManyWithoutIngamedataInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutIngamedataNestedInput
    characterfriend?: CharacterfriendUpdateManyWithoutIngamedataNestedInput
    inventory?: InventoryUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    characterfriend?: CharacterfriendUncheckedUpdateManyWithoutIngamedataNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataCreateManyInput = {
    id?: string
    userId: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
  }

  export type IngamedataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngamedataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendCreateInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
    Ingamedata?: IngamedataCreateNestedOneWithoutCharacterfriendInput
  }

  export type CharacterfriendUncheckedCreateInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
    ingamedataId?: string | null
  }

  export type CharacterfriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    Ingamedata?: IngamedataUpdateOneWithoutCharacterfriendNestedInput
  }

  export type CharacterfriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    ingamedataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendCreateManyInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
    ingamedataId?: string | null
  }

  export type CharacterfriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    ingamedataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
    ingamedata: IngamedataCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
    ingamedataId: string
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    ingamedata?: IngamedataUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    ingamedataId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
    ingamedataId: string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    ingamedataId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IngamedataListRelationFilter = {
    every?: IngamedataWhereInput
    some?: IngamedataWhereInput
    none?: IngamedataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IngamedataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CharacterfriendListRelationFilter = {
    every?: CharacterfriendWhereInput
    some?: CharacterfriendWhereInput
    none?: CharacterfriendWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type CharacterfriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngamedataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterName?: SortOrder
    characterHp?: SortOrder
    characterLevel?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    crit?: SortOrder
    critChance?: SortOrder
    accuracy?: SortOrder
    evasion?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
  }

  export type IngamedataAvgOrderByAggregateInput = {
    characterHp?: SortOrder
    characterLevel?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    crit?: SortOrder
    critChance?: SortOrder
    accuracy?: SortOrder
    evasion?: SortOrder
  }

  export type IngamedataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterName?: SortOrder
    characterHp?: SortOrder
    characterLevel?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    crit?: SortOrder
    critChance?: SortOrder
    accuracy?: SortOrder
    evasion?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
  }

  export type IngamedataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    characterName?: SortOrder
    characterHp?: SortOrder
    characterLevel?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    crit?: SortOrder
    critChance?: SortOrder
    accuracy?: SortOrder
    evasion?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
  }

  export type IngamedataSumOrderByAggregateInput = {
    characterHp?: SortOrder
    characterLevel?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    crit?: SortOrder
    critChance?: SortOrder
    accuracy?: SortOrder
    evasion?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IngamedataNullableScalarRelationFilter = {
    is?: IngamedataWhereInput | null
    isNot?: IngamedataWhereInput | null
  }

  export type CharacterfriendCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
    ingamedataId?: SortOrder
  }

  export type CharacterfriendMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
    ingamedataId?: SortOrder
  }

  export type CharacterfriendMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    imagetype?: SortOrder
    ingamedataId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IngamedataScalarRelationFilter = {
    is?: IngamedataWhereInput
    isNot?: IngamedataWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    ingamedataId?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    ingamedataId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    ingamedataId?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IngamedataCreateNestedManyWithoutUserInput = {
    create?: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput> | IngamedataCreateWithoutUserInput[] | IngamedataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngamedataCreateOrConnectWithoutUserInput | IngamedataCreateOrConnectWithoutUserInput[]
    createMany?: IngamedataCreateManyUserInputEnvelope
    connect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
  }

  export type IngamedataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput> | IngamedataCreateWithoutUserInput[] | IngamedataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngamedataCreateOrConnectWithoutUserInput | IngamedataCreateOrConnectWithoutUserInput[]
    createMany?: IngamedataCreateManyUserInputEnvelope
    connect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IngamedataUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput> | IngamedataCreateWithoutUserInput[] | IngamedataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngamedataCreateOrConnectWithoutUserInput | IngamedataCreateOrConnectWithoutUserInput[]
    upsert?: IngamedataUpsertWithWhereUniqueWithoutUserInput | IngamedataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngamedataCreateManyUserInputEnvelope
    set?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    disconnect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    delete?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    connect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    update?: IngamedataUpdateWithWhereUniqueWithoutUserInput | IngamedataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngamedataUpdateManyWithWhereWithoutUserInput | IngamedataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngamedataScalarWhereInput | IngamedataScalarWhereInput[]
  }

  export type IngamedataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput> | IngamedataCreateWithoutUserInput[] | IngamedataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IngamedataCreateOrConnectWithoutUserInput | IngamedataCreateOrConnectWithoutUserInput[]
    upsert?: IngamedataUpsertWithWhereUniqueWithoutUserInput | IngamedataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IngamedataCreateManyUserInputEnvelope
    set?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    disconnect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    delete?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    connect?: IngamedataWhereUniqueInput | IngamedataWhereUniqueInput[]
    update?: IngamedataUpdateWithWhereUniqueWithoutUserInput | IngamedataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IngamedataUpdateManyWithWhereWithoutUserInput | IngamedataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IngamedataScalarWhereInput | IngamedataScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIngamedataInput = {
    create?: XOR<UserCreateWithoutIngamedataInput, UserUncheckedCreateWithoutIngamedataInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngamedataInput
    connect?: UserWhereUniqueInput
  }

  export type CharacterfriendCreateNestedManyWithoutIngamedataInput = {
    create?: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput> | CharacterfriendCreateWithoutIngamedataInput[] | CharacterfriendUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: CharacterfriendCreateOrConnectWithoutIngamedataInput | CharacterfriendCreateOrConnectWithoutIngamedataInput[]
    createMany?: CharacterfriendCreateManyIngamedataInputEnvelope
    connect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutIngamedataInput = {
    create?: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput> | InventoryCreateWithoutIngamedataInput[] | InventoryUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutIngamedataInput | InventoryCreateOrConnectWithoutIngamedataInput[]
    createMany?: InventoryCreateManyIngamedataInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type CharacterfriendUncheckedCreateNestedManyWithoutIngamedataInput = {
    create?: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput> | CharacterfriendCreateWithoutIngamedataInput[] | CharacterfriendUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: CharacterfriendCreateOrConnectWithoutIngamedataInput | CharacterfriendCreateOrConnectWithoutIngamedataInput[]
    createMany?: CharacterfriendCreateManyIngamedataInputEnvelope
    connect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutIngamedataInput = {
    create?: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput> | InventoryCreateWithoutIngamedataInput[] | InventoryUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutIngamedataInput | InventoryCreateOrConnectWithoutIngamedataInput[]
    createMany?: InventoryCreateManyIngamedataInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutIngamedataNestedInput = {
    create?: XOR<UserCreateWithoutIngamedataInput, UserUncheckedCreateWithoutIngamedataInput>
    connectOrCreate?: UserCreateOrConnectWithoutIngamedataInput
    upsert?: UserUpsertWithoutIngamedataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIngamedataInput, UserUpdateWithoutIngamedataInput>, UserUncheckedUpdateWithoutIngamedataInput>
  }

  export type CharacterfriendUpdateManyWithoutIngamedataNestedInput = {
    create?: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput> | CharacterfriendCreateWithoutIngamedataInput[] | CharacterfriendUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: CharacterfriendCreateOrConnectWithoutIngamedataInput | CharacterfriendCreateOrConnectWithoutIngamedataInput[]
    upsert?: CharacterfriendUpsertWithWhereUniqueWithoutIngamedataInput | CharacterfriendUpsertWithWhereUniqueWithoutIngamedataInput[]
    createMany?: CharacterfriendCreateManyIngamedataInputEnvelope
    set?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    disconnect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    delete?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    connect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    update?: CharacterfriendUpdateWithWhereUniqueWithoutIngamedataInput | CharacterfriendUpdateWithWhereUniqueWithoutIngamedataInput[]
    updateMany?: CharacterfriendUpdateManyWithWhereWithoutIngamedataInput | CharacterfriendUpdateManyWithWhereWithoutIngamedataInput[]
    deleteMany?: CharacterfriendScalarWhereInput | CharacterfriendScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutIngamedataNestedInput = {
    create?: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput> | InventoryCreateWithoutIngamedataInput[] | InventoryUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutIngamedataInput | InventoryCreateOrConnectWithoutIngamedataInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutIngamedataInput | InventoryUpsertWithWhereUniqueWithoutIngamedataInput[]
    createMany?: InventoryCreateManyIngamedataInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutIngamedataInput | InventoryUpdateWithWhereUniqueWithoutIngamedataInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutIngamedataInput | InventoryUpdateManyWithWhereWithoutIngamedataInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type CharacterfriendUncheckedUpdateManyWithoutIngamedataNestedInput = {
    create?: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput> | CharacterfriendCreateWithoutIngamedataInput[] | CharacterfriendUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: CharacterfriendCreateOrConnectWithoutIngamedataInput | CharacterfriendCreateOrConnectWithoutIngamedataInput[]
    upsert?: CharacterfriendUpsertWithWhereUniqueWithoutIngamedataInput | CharacterfriendUpsertWithWhereUniqueWithoutIngamedataInput[]
    createMany?: CharacterfriendCreateManyIngamedataInputEnvelope
    set?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    disconnect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    delete?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    connect?: CharacterfriendWhereUniqueInput | CharacterfriendWhereUniqueInput[]
    update?: CharacterfriendUpdateWithWhereUniqueWithoutIngamedataInput | CharacterfriendUpdateWithWhereUniqueWithoutIngamedataInput[]
    updateMany?: CharacterfriendUpdateManyWithWhereWithoutIngamedataInput | CharacterfriendUpdateManyWithWhereWithoutIngamedataInput[]
    deleteMany?: CharacterfriendScalarWhereInput | CharacterfriendScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutIngamedataNestedInput = {
    create?: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput> | InventoryCreateWithoutIngamedataInput[] | InventoryUncheckedCreateWithoutIngamedataInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutIngamedataInput | InventoryCreateOrConnectWithoutIngamedataInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutIngamedataInput | InventoryUpsertWithWhereUniqueWithoutIngamedataInput[]
    createMany?: InventoryCreateManyIngamedataInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutIngamedataInput | InventoryUpdateWithWhereUniqueWithoutIngamedataInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutIngamedataInput | InventoryUpdateManyWithWhereWithoutIngamedataInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type IngamedataCreateNestedOneWithoutCharacterfriendInput = {
    create?: XOR<IngamedataCreateWithoutCharacterfriendInput, IngamedataUncheckedCreateWithoutCharacterfriendInput>
    connectOrCreate?: IngamedataCreateOrConnectWithoutCharacterfriendInput
    connect?: IngamedataWhereUniqueInput
  }

  export type IngamedataUpdateOneWithoutCharacterfriendNestedInput = {
    create?: XOR<IngamedataCreateWithoutCharacterfriendInput, IngamedataUncheckedCreateWithoutCharacterfriendInput>
    connectOrCreate?: IngamedataCreateOrConnectWithoutCharacterfriendInput
    upsert?: IngamedataUpsertWithoutCharacterfriendInput
    disconnect?: IngamedataWhereInput | boolean
    delete?: IngamedataWhereInput | boolean
    connect?: IngamedataWhereUniqueInput
    update?: XOR<XOR<IngamedataUpdateToOneWithWhereWithoutCharacterfriendInput, IngamedataUpdateWithoutCharacterfriendInput>, IngamedataUncheckedUpdateWithoutCharacterfriendInput>
  }

  export type IngamedataCreateNestedOneWithoutInventoryInput = {
    create?: XOR<IngamedataCreateWithoutInventoryInput, IngamedataUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: IngamedataCreateOrConnectWithoutInventoryInput
    connect?: IngamedataWhereUniqueInput
  }

  export type IngamedataUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<IngamedataCreateWithoutInventoryInput, IngamedataUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: IngamedataCreateOrConnectWithoutInventoryInput
    upsert?: IngamedataUpsertWithoutInventoryInput
    connect?: IngamedataWhereUniqueInput
    update?: XOR<XOR<IngamedataUpdateToOneWithWhereWithoutInventoryInput, IngamedataUpdateWithoutInventoryInput>, IngamedataUncheckedUpdateWithoutInventoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IngamedataCreateWithoutUserInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    characterfriend?: CharacterfriendCreateNestedManyWithoutIngamedataInput
    inventory?: InventoryCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataUncheckedCreateWithoutUserInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    characterfriend?: CharacterfriendUncheckedCreateNestedManyWithoutIngamedataInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataCreateOrConnectWithoutUserInput = {
    where: IngamedataWhereUniqueInput
    create: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput>
  }

  export type IngamedataCreateManyUserInputEnvelope = {
    data: IngamedataCreateManyUserInput | IngamedataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IngamedataUpsertWithWhereUniqueWithoutUserInput = {
    where: IngamedataWhereUniqueInput
    update: XOR<IngamedataUpdateWithoutUserInput, IngamedataUncheckedUpdateWithoutUserInput>
    create: XOR<IngamedataCreateWithoutUserInput, IngamedataUncheckedCreateWithoutUserInput>
  }

  export type IngamedataUpdateWithWhereUniqueWithoutUserInput = {
    where: IngamedataWhereUniqueInput
    data: XOR<IngamedataUpdateWithoutUserInput, IngamedataUncheckedUpdateWithoutUserInput>
  }

  export type IngamedataUpdateManyWithWhereWithoutUserInput = {
    where: IngamedataScalarWhereInput
    data: XOR<IngamedataUpdateManyMutationInput, IngamedataUncheckedUpdateManyWithoutUserInput>
  }

  export type IngamedataScalarWhereInput = {
    AND?: IngamedataScalarWhereInput | IngamedataScalarWhereInput[]
    OR?: IngamedataScalarWhereInput[]
    NOT?: IngamedataScalarWhereInput | IngamedataScalarWhereInput[]
    id?: StringFilter<"Ingamedata"> | string
    userId?: StringFilter<"Ingamedata"> | string
    characterName?: StringNullableFilter<"Ingamedata"> | string | null
    characterHp?: IntNullableFilter<"Ingamedata"> | number | null
    characterLevel?: IntNullableFilter<"Ingamedata"> | number | null
    attack?: IntNullableFilter<"Ingamedata"> | number | null
    defense?: IntNullableFilter<"Ingamedata"> | number | null
    crit?: IntNullableFilter<"Ingamedata"> | number | null
    critChance?: IntNullableFilter<"Ingamedata"> | number | null
    accuracy?: IntNullableFilter<"Ingamedata"> | number | null
    evasion?: IntNullableFilter<"Ingamedata"> | number | null
    type?: StringNullableFilter<"Ingamedata"> | string | null
    imagetype?: StringNullableFilter<"Ingamedata"> | string | null
  }

  export type UserCreateWithoutIngamedataInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
  }

  export type UserUncheckedCreateWithoutIngamedataInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
  }

  export type UserCreateOrConnectWithoutIngamedataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIngamedataInput, UserUncheckedCreateWithoutIngamedataInput>
  }

  export type CharacterfriendCreateWithoutIngamedataInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
  }

  export type CharacterfriendUncheckedCreateWithoutIngamedataInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
  }

  export type CharacterfriendCreateOrConnectWithoutIngamedataInput = {
    where: CharacterfriendWhereUniqueInput
    create: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput>
  }

  export type CharacterfriendCreateManyIngamedataInputEnvelope = {
    data: CharacterfriendCreateManyIngamedataInput | CharacterfriendCreateManyIngamedataInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutIngamedataInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
  }

  export type InventoryUncheckedCreateWithoutIngamedataInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
  }

  export type InventoryCreateOrConnectWithoutIngamedataInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput>
  }

  export type InventoryCreateManyIngamedataInputEnvelope = {
    data: InventoryCreateManyIngamedataInput | InventoryCreateManyIngamedataInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIngamedataInput = {
    update: XOR<UserUpdateWithoutIngamedataInput, UserUncheckedUpdateWithoutIngamedataInput>
    create: XOR<UserCreateWithoutIngamedataInput, UserUncheckedCreateWithoutIngamedataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIngamedataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIngamedataInput, UserUncheckedUpdateWithoutIngamedataInput>
  }

  export type UserUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendUpsertWithWhereUniqueWithoutIngamedataInput = {
    where: CharacterfriendWhereUniqueInput
    update: XOR<CharacterfriendUpdateWithoutIngamedataInput, CharacterfriendUncheckedUpdateWithoutIngamedataInput>
    create: XOR<CharacterfriendCreateWithoutIngamedataInput, CharacterfriendUncheckedCreateWithoutIngamedataInput>
  }

  export type CharacterfriendUpdateWithWhereUniqueWithoutIngamedataInput = {
    where: CharacterfriendWhereUniqueInput
    data: XOR<CharacterfriendUpdateWithoutIngamedataInput, CharacterfriendUncheckedUpdateWithoutIngamedataInput>
  }

  export type CharacterfriendUpdateManyWithWhereWithoutIngamedataInput = {
    where: CharacterfriendScalarWhereInput
    data: XOR<CharacterfriendUpdateManyMutationInput, CharacterfriendUncheckedUpdateManyWithoutIngamedataInput>
  }

  export type CharacterfriendScalarWhereInput = {
    AND?: CharacterfriendScalarWhereInput | CharacterfriendScalarWhereInput[]
    OR?: CharacterfriendScalarWhereInput[]
    NOT?: CharacterfriendScalarWhereInput | CharacterfriendScalarWhereInput[]
    id?: UuidFilter<"Characterfriend"> | string
    name?: StringNullableFilter<"Characterfriend"> | string | null
    type?: StringNullableFilter<"Characterfriend"> | string | null
    imagetype?: StringNullableFilter<"Characterfriend"> | string | null
    ingamedataId?: StringNullableFilter<"Characterfriend"> | string | null
  }

  export type InventoryUpsertWithWhereUniqueWithoutIngamedataInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutIngamedataInput, InventoryUncheckedUpdateWithoutIngamedataInput>
    create: XOR<InventoryCreateWithoutIngamedataInput, InventoryUncheckedCreateWithoutIngamedataInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutIngamedataInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutIngamedataInput, InventoryUncheckedUpdateWithoutIngamedataInput>
  }

  export type InventoryUpdateManyWithWhereWithoutIngamedataInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutIngamedataInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    name?: StringNullableFilter<"Inventory"> | string | null
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntNullableFilter<"Inventory"> | number | null
    ingamedataId?: StringFilter<"Inventory"> | string
  }

  export type IngamedataCreateWithoutCharacterfriendInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    user: UserCreateNestedOneWithoutIngamedataInput
    inventory?: InventoryCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataUncheckedCreateWithoutCharacterfriendInput = {
    id?: string
    userId: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    inventory?: InventoryUncheckedCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataCreateOrConnectWithoutCharacterfriendInput = {
    where: IngamedataWhereUniqueInput
    create: XOR<IngamedataCreateWithoutCharacterfriendInput, IngamedataUncheckedCreateWithoutCharacterfriendInput>
  }

  export type IngamedataUpsertWithoutCharacterfriendInput = {
    update: XOR<IngamedataUpdateWithoutCharacterfriendInput, IngamedataUncheckedUpdateWithoutCharacterfriendInput>
    create: XOR<IngamedataCreateWithoutCharacterfriendInput, IngamedataUncheckedCreateWithoutCharacterfriendInput>
    where?: IngamedataWhereInput
  }

  export type IngamedataUpdateToOneWithWhereWithoutCharacterfriendInput = {
    where?: IngamedataWhereInput
    data: XOR<IngamedataUpdateWithoutCharacterfriendInput, IngamedataUncheckedUpdateWithoutCharacterfriendInput>
  }

  export type IngamedataUpdateWithoutCharacterfriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutIngamedataNestedInput
    inventory?: InventoryUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataUncheckedUpdateWithoutCharacterfriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: InventoryUncheckedUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataCreateWithoutInventoryInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    user: UserCreateNestedOneWithoutIngamedataInput
    characterfriend?: CharacterfriendCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataUncheckedCreateWithoutInventoryInput = {
    id?: string
    userId: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
    characterfriend?: CharacterfriendUncheckedCreateNestedManyWithoutIngamedataInput
  }

  export type IngamedataCreateOrConnectWithoutInventoryInput = {
    where: IngamedataWhereUniqueInput
    create: XOR<IngamedataCreateWithoutInventoryInput, IngamedataUncheckedCreateWithoutInventoryInput>
  }

  export type IngamedataUpsertWithoutInventoryInput = {
    update: XOR<IngamedataUpdateWithoutInventoryInput, IngamedataUncheckedUpdateWithoutInventoryInput>
    create: XOR<IngamedataCreateWithoutInventoryInput, IngamedataUncheckedCreateWithoutInventoryInput>
    where?: IngamedataWhereInput
  }

  export type IngamedataUpdateToOneWithWhereWithoutInventoryInput = {
    where?: IngamedataWhereInput
    data: XOR<IngamedataUpdateWithoutInventoryInput, IngamedataUncheckedUpdateWithoutInventoryInput>
  }

  export type IngamedataUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutIngamedataNestedInput
    characterfriend?: CharacterfriendUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    characterfriend?: CharacterfriendUncheckedUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataCreateManyUserInput = {
    id?: string
    characterName?: string | null
    characterHp?: number | null
    characterLevel?: number | null
    attack?: number | null
    defense?: number | null
    crit?: number | null
    critChance?: number | null
    accuracy?: number | null
    evasion?: number | null
    type?: string | null
    imagetype?: string | null
  }

  export type IngamedataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    characterfriend?: CharacterfriendUpdateManyWithoutIngamedataNestedInput
    inventory?: InventoryUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
    characterfriend?: CharacterfriendUncheckedUpdateManyWithoutIngamedataNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutIngamedataNestedInput
  }

  export type IngamedataUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    characterHp?: NullableIntFieldUpdateOperationsInput | number | null
    characterLevel?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    defense?: NullableIntFieldUpdateOperationsInput | number | null
    crit?: NullableIntFieldUpdateOperationsInput | number | null
    critChance?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null
    evasion?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendCreateManyIngamedataInput = {
    id?: string
    name?: string | null
    type?: string | null
    imagetype?: string | null
  }

  export type InventoryCreateManyIngamedataInput = {
    id?: string
    name?: string | null
    description?: string | null
    quantity?: number | null
  }

  export type CharacterfriendUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendUncheckedUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterfriendUncheckedUpdateManyWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    imagetype?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUncheckedUpdateWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUncheckedUpdateManyWithoutIngamedataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}