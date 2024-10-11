
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
 * Model towers
 * 
 */
export type towers = $Result.DefaultSelection<Prisma.$towersPayload>
/**
 * Model towerStat
 * 
 */
export type towerStat = $Result.DefaultSelection<Prisma.$towerStatPayload>
/**
 * Model mosters
 * 
 */
export type mosters = $Result.DefaultSelection<Prisma.$mostersPayload>
/**
 * Model monsterStat
 * 
 */
export type monsterStat = $Result.DefaultSelection<Prisma.$monsterStatPayload>
/**
 * Model exp
 * 
 */
export type exp = $Result.DefaultSelection<Prisma.$expPayload>
/**
 * Model stage
 * 
 */
export type stage = $Result.DefaultSelection<Prisma.$stagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AtkType: {
  TARGET: 'TARGET',
  SPLASH: 'SPLASH'
};

export type AtkType = (typeof AtkType)[keyof typeof AtkType]

}

export type AtkType = $Enums.AtkType

export const AtkType: typeof $Enums.AtkType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Towers
 * const towers = await prisma.towers.findMany()
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
   * // Fetch zero or more Towers
   * const towers = await prisma.towers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.towers`: Exposes CRUD operations for the **towers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towers
    * const towers = await prisma.towers.findMany()
    * ```
    */
  get towers(): Prisma.towersDelegate<ExtArgs>;

  /**
   * `prisma.towerStat`: Exposes CRUD operations for the **towerStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TowerStats
    * const towerStats = await prisma.towerStat.findMany()
    * ```
    */
  get towerStat(): Prisma.towerStatDelegate<ExtArgs>;

  /**
   * `prisma.mosters`: Exposes CRUD operations for the **mosters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mosters
    * const mosters = await prisma.mosters.findMany()
    * ```
    */
  get mosters(): Prisma.mostersDelegate<ExtArgs>;

  /**
   * `prisma.monsterStat`: Exposes CRUD operations for the **monsterStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterStats
    * const monsterStats = await prisma.monsterStat.findMany()
    * ```
    */
  get monsterStat(): Prisma.monsterStatDelegate<ExtArgs>;

  /**
   * `prisma.exp`: Exposes CRUD operations for the **exp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exps
    * const exps = await prisma.exp.findMany()
    * ```
    */
  get exp(): Prisma.expDelegate<ExtArgs>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.stageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    towers: 'towers',
    towerStat: 'towerStat',
    mosters: 'mosters',
    monsterStat: 'monsterStat',
    exp: 'exp',
    stage: 'stage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "towers" | "towerStat" | "mosters" | "monsterStat" | "exp" | "stage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      towers: {
        payload: Prisma.$towersPayload<ExtArgs>
        fields: Prisma.towersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.towersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.towersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          findFirst: {
            args: Prisma.towersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.towersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          findMany: {
            args: Prisma.towersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>[]
          }
          create: {
            args: Prisma.towersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          createMany: {
            args: Prisma.towersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.towersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          update: {
            args: Prisma.towersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          deleteMany: {
            args: Prisma.towersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.towersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.towersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towersPayload>
          }
          aggregate: {
            args: Prisma.TowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTowers>
          }
          groupBy: {
            args: Prisma.towersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.towersCountArgs<ExtArgs>
            result: $Utils.Optional<TowersCountAggregateOutputType> | number
          }
        }
      }
      towerStat: {
        payload: Prisma.$towerStatPayload<ExtArgs>
        fields: Prisma.towerStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.towerStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.towerStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          findFirst: {
            args: Prisma.towerStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.towerStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          findMany: {
            args: Prisma.towerStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>[]
          }
          create: {
            args: Prisma.towerStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          createMany: {
            args: Prisma.towerStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.towerStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          update: {
            args: Prisma.towerStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          deleteMany: {
            args: Prisma.towerStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.towerStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.towerStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerStatPayload>
          }
          aggregate: {
            args: Prisma.TowerStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTowerStat>
          }
          groupBy: {
            args: Prisma.towerStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowerStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.towerStatCountArgs<ExtArgs>
            result: $Utils.Optional<TowerStatCountAggregateOutputType> | number
          }
        }
      }
      mosters: {
        payload: Prisma.$mostersPayload<ExtArgs>
        fields: Prisma.mostersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mostersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mostersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          findFirst: {
            args: Prisma.mostersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mostersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          findMany: {
            args: Prisma.mostersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>[]
          }
          create: {
            args: Prisma.mostersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          createMany: {
            args: Prisma.mostersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mostersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          update: {
            args: Prisma.mostersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          deleteMany: {
            args: Prisma.mostersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mostersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mostersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mostersPayload>
          }
          aggregate: {
            args: Prisma.MostersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMosters>
          }
          groupBy: {
            args: Prisma.mostersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MostersGroupByOutputType>[]
          }
          count: {
            args: Prisma.mostersCountArgs<ExtArgs>
            result: $Utils.Optional<MostersCountAggregateOutputType> | number
          }
        }
      }
      monsterStat: {
        payload: Prisma.$monsterStatPayload<ExtArgs>
        fields: Prisma.monsterStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monsterStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monsterStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          findFirst: {
            args: Prisma.monsterStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monsterStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          findMany: {
            args: Prisma.monsterStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>[]
          }
          create: {
            args: Prisma.monsterStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          createMany: {
            args: Prisma.monsterStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.monsterStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          update: {
            args: Prisma.monsterStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          deleteMany: {
            args: Prisma.monsterStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monsterStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.monsterStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterStatPayload>
          }
          aggregate: {
            args: Prisma.MonsterStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonsterStat>
          }
          groupBy: {
            args: Prisma.monsterStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.monsterStatCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterStatCountAggregateOutputType> | number
          }
        }
      }
      exp: {
        payload: Prisma.$expPayload<ExtArgs>
        fields: Prisma.expFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          findFirst: {
            args: Prisma.expFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          findMany: {
            args: Prisma.expFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>[]
          }
          create: {
            args: Prisma.expCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          createMany: {
            args: Prisma.expCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.expDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          update: {
            args: Prisma.expUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          deleteMany: {
            args: Prisma.expDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.expUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expPayload>
          }
          aggregate: {
            args: Prisma.ExpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExp>
          }
          groupBy: {
            args: Prisma.expGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpGroupByOutputType>[]
          }
          count: {
            args: Prisma.expCountArgs<ExtArgs>
            result: $Utils.Optional<ExpCountAggregateOutputType> | number
          }
        }
      }
      stage: {
        payload: Prisma.$stagePayload<ExtArgs>
        fields: Prisma.stageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          findFirst: {
            args: Prisma.stageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          findMany: {
            args: Prisma.stageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>[]
          }
          create: {
            args: Prisma.stageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          createMany: {
            args: Prisma.stageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          update: {
            args: Prisma.stageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          deleteMany: {
            args: Prisma.stageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.stageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.stageCountArgs<ExtArgs>
            result: $Utils.Optional<StageCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model towers
   */

  export type AggregateTowers = {
    _count: TowersCountAggregateOutputType | null
    _avg: TowersAvgAggregateOutputType | null
    _sum: TowersSumAggregateOutputType | null
    _min: TowersMinAggregateOutputType | null
    _max: TowersMaxAggregateOutputType | null
  }

  export type TowersAvgAggregateOutputType = {
    id: number | null
    damage: number | null
    attackSpeed: number | null
    attackRange: number | null
    skillProbability: number | null
    cost: number | null
  }

  export type TowersSumAggregateOutputType = {
    id: number | null
    damage: number | null
    attackSpeed: number | null
    attackRange: number | null
    skillProbability: number | null
    cost: number | null
  }

  export type TowersMinAggregateOutputType = {
    id: number | null
    name: string | null
    damage: number | null
    attackSpeed: number | null
    attackRange: number | null
    skillProbability: number | null
    cost: number | null
    atkType: $Enums.AtkType | null
  }

  export type TowersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    damage: number | null
    attackSpeed: number | null
    attackRange: number | null
    skillProbability: number | null
    cost: number | null
    atkType: $Enums.AtkType | null
  }

  export type TowersCountAggregateOutputType = {
    id: number
    name: number
    damage: number
    attackSpeed: number
    attackRange: number
    skillProbability: number
    cost: number
    atkType: number
    _all: number
  }


  export type TowersAvgAggregateInputType = {
    id?: true
    damage?: true
    attackSpeed?: true
    attackRange?: true
    skillProbability?: true
    cost?: true
  }

  export type TowersSumAggregateInputType = {
    id?: true
    damage?: true
    attackSpeed?: true
    attackRange?: true
    skillProbability?: true
    cost?: true
  }

  export type TowersMinAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    attackSpeed?: true
    attackRange?: true
    skillProbability?: true
    cost?: true
    atkType?: true
  }

  export type TowersMaxAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    attackSpeed?: true
    attackRange?: true
    skillProbability?: true
    cost?: true
    atkType?: true
  }

  export type TowersCountAggregateInputType = {
    id?: true
    name?: true
    damage?: true
    attackSpeed?: true
    attackRange?: true
    skillProbability?: true
    cost?: true
    atkType?: true
    _all?: true
  }

  export type TowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towers to aggregate.
     */
    where?: towersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towersOrderByWithRelationInput | towersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: towersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned towers
    **/
    _count?: true | TowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowersMaxAggregateInputType
  }

  export type GetTowersAggregateType<T extends TowersAggregateArgs> = {
        [P in keyof T & keyof AggregateTowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTowers[P]>
      : GetScalarType<T[P], AggregateTowers[P]>
  }




  export type towersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: towersWhereInput
    orderBy?: towersOrderByWithAggregationInput | towersOrderByWithAggregationInput[]
    by: TowersScalarFieldEnum[] | TowersScalarFieldEnum
    having?: towersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowersCountAggregateInputType | true
    _avg?: TowersAvgAggregateInputType
    _sum?: TowersSumAggregateInputType
    _min?: TowersMinAggregateInputType
    _max?: TowersMaxAggregateInputType
  }

  export type TowersGroupByOutputType = {
    id: number
    name: string
    damage: number
    attackSpeed: number
    attackRange: number
    skillProbability: number
    cost: number
    atkType: $Enums.AtkType
    _count: TowersCountAggregateOutputType | null
    _avg: TowersAvgAggregateOutputType | null
    _sum: TowersSumAggregateOutputType | null
    _min: TowersMinAggregateOutputType | null
    _max: TowersMaxAggregateOutputType | null
  }

  type GetTowersGroupByPayload<T extends towersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowersGroupByOutputType[P]>
            : GetScalarType<T[P], TowersGroupByOutputType[P]>
        }
      >
    >


  export type towersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    damage?: boolean
    attackSpeed?: boolean
    attackRange?: boolean
    skillProbability?: boolean
    cost?: boolean
    atkType?: boolean
    towerStat?: boolean | towers$towerStatArgs<ExtArgs>
  }, ExtArgs["result"]["towers"]>


  export type towersSelectScalar = {
    id?: boolean
    name?: boolean
    damage?: boolean
    attackSpeed?: boolean
    attackRange?: boolean
    skillProbability?: boolean
    cost?: boolean
    atkType?: boolean
  }

  export type towersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towerStat?: boolean | towers$towerStatArgs<ExtArgs>
  }

  export type $towersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "towers"
    objects: {
      towerStat: Prisma.$towerStatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      damage: number
      attackSpeed: number
      attackRange: number
      skillProbability: number
      cost: number
      atkType: $Enums.AtkType
    }, ExtArgs["result"]["towers"]>
    composites: {}
  }

  type towersGetPayload<S extends boolean | null | undefined | towersDefaultArgs> = $Result.GetResult<Prisma.$towersPayload, S>

  type towersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<towersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TowersCountAggregateInputType | true
    }

  export interface towersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['towers'], meta: { name: 'towers' } }
    /**
     * Find zero or one Towers that matches the filter.
     * @param {towersFindUniqueArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends towersFindUniqueArgs>(args: SelectSubset<T, towersFindUniqueArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Towers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {towersFindUniqueOrThrowArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends towersFindUniqueOrThrowArgs>(args: SelectSubset<T, towersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersFindFirstArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends towersFindFirstArgs>(args?: SelectSubset<T, towersFindFirstArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Towers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersFindFirstOrThrowArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends towersFindFirstOrThrowArgs>(args?: SelectSubset<T, towersFindFirstOrThrowArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towers
     * const towers = await prisma.towers.findMany()
     * 
     * // Get first 10 Towers
     * const towers = await prisma.towers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towersWithIdOnly = await prisma.towers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends towersFindManyArgs>(args?: SelectSubset<T, towersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Towers.
     * @param {towersCreateArgs} args - Arguments to create a Towers.
     * @example
     * // Create one Towers
     * const Towers = await prisma.towers.create({
     *   data: {
     *     // ... data to create a Towers
     *   }
     * })
     * 
     */
    create<T extends towersCreateArgs>(args: SelectSubset<T, towersCreateArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Towers.
     * @param {towersCreateManyArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const towers = await prisma.towers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends towersCreateManyArgs>(args?: SelectSubset<T, towersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Towers.
     * @param {towersDeleteArgs} args - Arguments to delete one Towers.
     * @example
     * // Delete one Towers
     * const Towers = await prisma.towers.delete({
     *   where: {
     *     // ... filter to delete one Towers
     *   }
     * })
     * 
     */
    delete<T extends towersDeleteArgs>(args: SelectSubset<T, towersDeleteArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Towers.
     * @param {towersUpdateArgs} args - Arguments to update one Towers.
     * @example
     * // Update one Towers
     * const towers = await prisma.towers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends towersUpdateArgs>(args: SelectSubset<T, towersUpdateArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Towers.
     * @param {towersDeleteManyArgs} args - Arguments to filter Towers to delete.
     * @example
     * // Delete a few Towers
     * const { count } = await prisma.towers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends towersDeleteManyArgs>(args?: SelectSubset<T, towersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towers
     * const towers = await prisma.towers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends towersUpdateManyArgs>(args: SelectSubset<T, towersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Towers.
     * @param {towersUpsertArgs} args - Arguments to update or create a Towers.
     * @example
     * // Update or create a Towers
     * const towers = await prisma.towers.upsert({
     *   create: {
     *     // ... data to create a Towers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Towers we want to update
     *   }
     * })
     */
    upsert<T extends towersUpsertArgs>(args: SelectSubset<T, towersUpsertArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersCountArgs} args - Arguments to filter Towers to count.
     * @example
     * // Count the number of Towers
     * const count = await prisma.towers.count({
     *   where: {
     *     // ... the filter for the Towers we want to count
     *   }
     * })
    **/
    count<T extends towersCountArgs>(
      args?: Subset<T, towersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowersAggregateArgs>(args: Subset<T, TowersAggregateArgs>): Prisma.PrismaPromise<GetTowersAggregateType<T>>

    /**
     * Group by Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towersGroupByArgs} args - Group by arguments.
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
      T extends towersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: towersGroupByArgs['orderBy'] }
        : { orderBy?: towersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, towersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the towers model
   */
  readonly fields: towersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for towers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__towersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    towerStat<T extends towers$towerStatArgs<ExtArgs> = {}>(args?: Subset<T, towers$towerStatArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the towers model
   */ 
  interface towersFieldRefs {
    readonly id: FieldRef<"towers", 'Int'>
    readonly name: FieldRef<"towers", 'String'>
    readonly damage: FieldRef<"towers", 'Int'>
    readonly attackSpeed: FieldRef<"towers", 'Int'>
    readonly attackRange: FieldRef<"towers", 'Int'>
    readonly skillProbability: FieldRef<"towers", 'Int'>
    readonly cost: FieldRef<"towers", 'Int'>
    readonly atkType: FieldRef<"towers", 'AtkType'>
  }
    

  // Custom InputTypes
  /**
   * towers findUnique
   */
  export type towersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where: towersWhereUniqueInput
  }

  /**
   * towers findUniqueOrThrow
   */
  export type towersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where: towersWhereUniqueInput
  }

  /**
   * towers findFirst
   */
  export type towersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where?: towersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towersOrderByWithRelationInput | towersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towers.
     */
    cursor?: towersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towers.
     */
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * towers findFirstOrThrow
   */
  export type towersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where?: towersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towersOrderByWithRelationInput | towersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towers.
     */
    cursor?: towersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towers.
     */
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * towers findMany
   */
  export type towersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where?: towersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towersOrderByWithRelationInput | towersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing towers.
     */
    cursor?: towersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * towers create
   */
  export type towersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * The data needed to create a towers.
     */
    data: XOR<towersCreateInput, towersUncheckedCreateInput>
  }

  /**
   * towers createMany
   */
  export type towersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many towers.
     */
    data: towersCreateManyInput | towersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * towers update
   */
  export type towersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * The data needed to update a towers.
     */
    data: XOR<towersUpdateInput, towersUncheckedUpdateInput>
    /**
     * Choose, which towers to update.
     */
    where: towersWhereUniqueInput
  }

  /**
   * towers updateMany
   */
  export type towersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update towers.
     */
    data: XOR<towersUpdateManyMutationInput, towersUncheckedUpdateManyInput>
    /**
     * Filter which towers to update
     */
    where?: towersWhereInput
  }

  /**
   * towers upsert
   */
  export type towersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * The filter to search for the towers to update in case it exists.
     */
    where: towersWhereUniqueInput
    /**
     * In case the towers found by the `where` argument doesn't exist, create a new towers with this data.
     */
    create: XOR<towersCreateInput, towersUncheckedCreateInput>
    /**
     * In case the towers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<towersUpdateInput, towersUncheckedUpdateInput>
  }

  /**
   * towers delete
   */
  export type towersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
    /**
     * Filter which towers to delete.
     */
    where: towersWhereUniqueInput
  }

  /**
   * towers deleteMany
   */
  export type towersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towers to delete
     */
    where?: towersWhereInput
  }

  /**
   * towers.towerStat
   */
  export type towers$towerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    where?: towerStatWhereInput
  }

  /**
   * towers without action
   */
  export type towersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towers
     */
    select?: towersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towersInclude<ExtArgs> | null
  }


  /**
   * Model towerStat
   */

  export type AggregateTowerStat = {
    _count: TowerStatCountAggregateOutputType | null
    _avg: TowerStatAvgAggregateOutputType | null
    _sum: TowerStatSumAggregateOutputType | null
    _min: TowerStatMinAggregateOutputType | null
    _max: TowerStatMaxAggregateOutputType | null
  }

  export type TowerStatAvgAggregateOutputType = {
    id: number | null
    towerId: number | null
    attakUp: number | null
    attackSpeedUp: number | null
    rangeUp: number | null
    probabilityUp: number | null
  }

  export type TowerStatSumAggregateOutputType = {
    id: number | null
    towerId: number | null
    attakUp: number | null
    attackSpeedUp: number | null
    rangeUp: number | null
    probabilityUp: number | null
  }

  export type TowerStatMinAggregateOutputType = {
    id: number | null
    towerId: number | null
    attakUp: number | null
    attackSpeedUp: number | null
    rangeUp: number | null
    probabilityUp: number | null
  }

  export type TowerStatMaxAggregateOutputType = {
    id: number | null
    towerId: number | null
    attakUp: number | null
    attackSpeedUp: number | null
    rangeUp: number | null
    probabilityUp: number | null
  }

  export type TowerStatCountAggregateOutputType = {
    id: number
    towerId: number
    attakUp: number
    attackSpeedUp: number
    rangeUp: number
    probabilityUp: number
    _all: number
  }


  export type TowerStatAvgAggregateInputType = {
    id?: true
    towerId?: true
    attakUp?: true
    attackSpeedUp?: true
    rangeUp?: true
    probabilityUp?: true
  }

  export type TowerStatSumAggregateInputType = {
    id?: true
    towerId?: true
    attakUp?: true
    attackSpeedUp?: true
    rangeUp?: true
    probabilityUp?: true
  }

  export type TowerStatMinAggregateInputType = {
    id?: true
    towerId?: true
    attakUp?: true
    attackSpeedUp?: true
    rangeUp?: true
    probabilityUp?: true
  }

  export type TowerStatMaxAggregateInputType = {
    id?: true
    towerId?: true
    attakUp?: true
    attackSpeedUp?: true
    rangeUp?: true
    probabilityUp?: true
  }

  export type TowerStatCountAggregateInputType = {
    id?: true
    towerId?: true
    attakUp?: true
    attackSpeedUp?: true
    rangeUp?: true
    probabilityUp?: true
    _all?: true
  }

  export type TowerStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towerStat to aggregate.
     */
    where?: towerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towerStats to fetch.
     */
    orderBy?: towerStatOrderByWithRelationInput | towerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: towerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned towerStats
    **/
    _count?: true | TowerStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TowerStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TowerStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowerStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowerStatMaxAggregateInputType
  }

  export type GetTowerStatAggregateType<T extends TowerStatAggregateArgs> = {
        [P in keyof T & keyof AggregateTowerStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTowerStat[P]>
      : GetScalarType<T[P], AggregateTowerStat[P]>
  }




  export type towerStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: towerStatWhereInput
    orderBy?: towerStatOrderByWithAggregationInput | towerStatOrderByWithAggregationInput[]
    by: TowerStatScalarFieldEnum[] | TowerStatScalarFieldEnum
    having?: towerStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowerStatCountAggregateInputType | true
    _avg?: TowerStatAvgAggregateInputType
    _sum?: TowerStatSumAggregateInputType
    _min?: TowerStatMinAggregateInputType
    _max?: TowerStatMaxAggregateInputType
  }

  export type TowerStatGroupByOutputType = {
    id: number
    towerId: number
    attakUp: number
    attackSpeedUp: number
    rangeUp: number
    probabilityUp: number
    _count: TowerStatCountAggregateOutputType | null
    _avg: TowerStatAvgAggregateOutputType | null
    _sum: TowerStatSumAggregateOutputType | null
    _min: TowerStatMinAggregateOutputType | null
    _max: TowerStatMaxAggregateOutputType | null
  }

  type GetTowerStatGroupByPayload<T extends towerStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowerStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowerStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowerStatGroupByOutputType[P]>
            : GetScalarType<T[P], TowerStatGroupByOutputType[P]>
        }
      >
    >


  export type towerStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    towerId?: boolean
    attakUp?: boolean
    attackSpeedUp?: boolean
    rangeUp?: boolean
    probabilityUp?: boolean
    towers?: boolean | towersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["towerStat"]>


  export type towerStatSelectScalar = {
    id?: boolean
    towerId?: boolean
    attakUp?: boolean
    attackSpeedUp?: boolean
    rangeUp?: boolean
    probabilityUp?: boolean
  }

  export type towerStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towers?: boolean | towersDefaultArgs<ExtArgs>
  }

  export type $towerStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "towerStat"
    objects: {
      towers: Prisma.$towersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      towerId: number
      attakUp: number
      attackSpeedUp: number
      rangeUp: number
      probabilityUp: number
    }, ExtArgs["result"]["towerStat"]>
    composites: {}
  }

  type towerStatGetPayload<S extends boolean | null | undefined | towerStatDefaultArgs> = $Result.GetResult<Prisma.$towerStatPayload, S>

  type towerStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<towerStatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TowerStatCountAggregateInputType | true
    }

  export interface towerStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['towerStat'], meta: { name: 'towerStat' } }
    /**
     * Find zero or one TowerStat that matches the filter.
     * @param {towerStatFindUniqueArgs} args - Arguments to find a TowerStat
     * @example
     * // Get one TowerStat
     * const towerStat = await prisma.towerStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends towerStatFindUniqueArgs>(args: SelectSubset<T, towerStatFindUniqueArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TowerStat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {towerStatFindUniqueOrThrowArgs} args - Arguments to find a TowerStat
     * @example
     * // Get one TowerStat
     * const towerStat = await prisma.towerStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends towerStatFindUniqueOrThrowArgs>(args: SelectSubset<T, towerStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TowerStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatFindFirstArgs} args - Arguments to find a TowerStat
     * @example
     * // Get one TowerStat
     * const towerStat = await prisma.towerStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends towerStatFindFirstArgs>(args?: SelectSubset<T, towerStatFindFirstArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TowerStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatFindFirstOrThrowArgs} args - Arguments to find a TowerStat
     * @example
     * // Get one TowerStat
     * const towerStat = await prisma.towerStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends towerStatFindFirstOrThrowArgs>(args?: SelectSubset<T, towerStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TowerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TowerStats
     * const towerStats = await prisma.towerStat.findMany()
     * 
     * // Get first 10 TowerStats
     * const towerStats = await prisma.towerStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towerStatWithIdOnly = await prisma.towerStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends towerStatFindManyArgs>(args?: SelectSubset<T, towerStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TowerStat.
     * @param {towerStatCreateArgs} args - Arguments to create a TowerStat.
     * @example
     * // Create one TowerStat
     * const TowerStat = await prisma.towerStat.create({
     *   data: {
     *     // ... data to create a TowerStat
     *   }
     * })
     * 
     */
    create<T extends towerStatCreateArgs>(args: SelectSubset<T, towerStatCreateArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TowerStats.
     * @param {towerStatCreateManyArgs} args - Arguments to create many TowerStats.
     * @example
     * // Create many TowerStats
     * const towerStat = await prisma.towerStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends towerStatCreateManyArgs>(args?: SelectSubset<T, towerStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TowerStat.
     * @param {towerStatDeleteArgs} args - Arguments to delete one TowerStat.
     * @example
     * // Delete one TowerStat
     * const TowerStat = await prisma.towerStat.delete({
     *   where: {
     *     // ... filter to delete one TowerStat
     *   }
     * })
     * 
     */
    delete<T extends towerStatDeleteArgs>(args: SelectSubset<T, towerStatDeleteArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TowerStat.
     * @param {towerStatUpdateArgs} args - Arguments to update one TowerStat.
     * @example
     * // Update one TowerStat
     * const towerStat = await prisma.towerStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends towerStatUpdateArgs>(args: SelectSubset<T, towerStatUpdateArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TowerStats.
     * @param {towerStatDeleteManyArgs} args - Arguments to filter TowerStats to delete.
     * @example
     * // Delete a few TowerStats
     * const { count } = await prisma.towerStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends towerStatDeleteManyArgs>(args?: SelectSubset<T, towerStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TowerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TowerStats
     * const towerStat = await prisma.towerStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends towerStatUpdateManyArgs>(args: SelectSubset<T, towerStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TowerStat.
     * @param {towerStatUpsertArgs} args - Arguments to update or create a TowerStat.
     * @example
     * // Update or create a TowerStat
     * const towerStat = await prisma.towerStat.upsert({
     *   create: {
     *     // ... data to create a TowerStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TowerStat we want to update
     *   }
     * })
     */
    upsert<T extends towerStatUpsertArgs>(args: SelectSubset<T, towerStatUpsertArgs<ExtArgs>>): Prisma__towerStatClient<$Result.GetResult<Prisma.$towerStatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TowerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatCountArgs} args - Arguments to filter TowerStats to count.
     * @example
     * // Count the number of TowerStats
     * const count = await prisma.towerStat.count({
     *   where: {
     *     // ... the filter for the TowerStats we want to count
     *   }
     * })
    **/
    count<T extends towerStatCountArgs>(
      args?: Subset<T, towerStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowerStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TowerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowerStatAggregateArgs>(args: Subset<T, TowerStatAggregateArgs>): Prisma.PrismaPromise<GetTowerStatAggregateType<T>>

    /**
     * Group by TowerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerStatGroupByArgs} args - Group by arguments.
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
      T extends towerStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: towerStatGroupByArgs['orderBy'] }
        : { orderBy?: towerStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, towerStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowerStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the towerStat model
   */
  readonly fields: towerStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for towerStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__towerStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    towers<T extends towersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, towersDefaultArgs<ExtArgs>>): Prisma__towersClient<$Result.GetResult<Prisma.$towersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the towerStat model
   */ 
  interface towerStatFieldRefs {
    readonly id: FieldRef<"towerStat", 'Int'>
    readonly towerId: FieldRef<"towerStat", 'Int'>
    readonly attakUp: FieldRef<"towerStat", 'Int'>
    readonly attackSpeedUp: FieldRef<"towerStat", 'Int'>
    readonly rangeUp: FieldRef<"towerStat", 'Int'>
    readonly probabilityUp: FieldRef<"towerStat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * towerStat findUnique
   */
  export type towerStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter, which towerStat to fetch.
     */
    where: towerStatWhereUniqueInput
  }

  /**
   * towerStat findUniqueOrThrow
   */
  export type towerStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter, which towerStat to fetch.
     */
    where: towerStatWhereUniqueInput
  }

  /**
   * towerStat findFirst
   */
  export type towerStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter, which towerStat to fetch.
     */
    where?: towerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towerStats to fetch.
     */
    orderBy?: towerStatOrderByWithRelationInput | towerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towerStats.
     */
    cursor?: towerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towerStats.
     */
    distinct?: TowerStatScalarFieldEnum | TowerStatScalarFieldEnum[]
  }

  /**
   * towerStat findFirstOrThrow
   */
  export type towerStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter, which towerStat to fetch.
     */
    where?: towerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towerStats to fetch.
     */
    orderBy?: towerStatOrderByWithRelationInput | towerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towerStats.
     */
    cursor?: towerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towerStats.
     */
    distinct?: TowerStatScalarFieldEnum | TowerStatScalarFieldEnum[]
  }

  /**
   * towerStat findMany
   */
  export type towerStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter, which towerStats to fetch.
     */
    where?: towerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towerStats to fetch.
     */
    orderBy?: towerStatOrderByWithRelationInput | towerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing towerStats.
     */
    cursor?: towerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towerStats.
     */
    skip?: number
    distinct?: TowerStatScalarFieldEnum | TowerStatScalarFieldEnum[]
  }

  /**
   * towerStat create
   */
  export type towerStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * The data needed to create a towerStat.
     */
    data: XOR<towerStatCreateInput, towerStatUncheckedCreateInput>
  }

  /**
   * towerStat createMany
   */
  export type towerStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many towerStats.
     */
    data: towerStatCreateManyInput | towerStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * towerStat update
   */
  export type towerStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * The data needed to update a towerStat.
     */
    data: XOR<towerStatUpdateInput, towerStatUncheckedUpdateInput>
    /**
     * Choose, which towerStat to update.
     */
    where: towerStatWhereUniqueInput
  }

  /**
   * towerStat updateMany
   */
  export type towerStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update towerStats.
     */
    data: XOR<towerStatUpdateManyMutationInput, towerStatUncheckedUpdateManyInput>
    /**
     * Filter which towerStats to update
     */
    where?: towerStatWhereInput
  }

  /**
   * towerStat upsert
   */
  export type towerStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * The filter to search for the towerStat to update in case it exists.
     */
    where: towerStatWhereUniqueInput
    /**
     * In case the towerStat found by the `where` argument doesn't exist, create a new towerStat with this data.
     */
    create: XOR<towerStatCreateInput, towerStatUncheckedCreateInput>
    /**
     * In case the towerStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<towerStatUpdateInput, towerStatUncheckedUpdateInput>
  }

  /**
   * towerStat delete
   */
  export type towerStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
    /**
     * Filter which towerStat to delete.
     */
    where: towerStatWhereUniqueInput
  }

  /**
   * towerStat deleteMany
   */
  export type towerStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towerStats to delete
     */
    where?: towerStatWhereInput
  }

  /**
   * towerStat without action
   */
  export type towerStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towerStat
     */
    select?: towerStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: towerStatInclude<ExtArgs> | null
  }


  /**
   * Model mosters
   */

  export type AggregateMosters = {
    _count: MostersCountAggregateOutputType | null
    _avg: MostersAvgAggregateOutputType | null
    _sum: MostersSumAggregateOutputType | null
    _min: MostersMinAggregateOutputType | null
    _max: MostersMaxAggregateOutputType | null
  }

  export type MostersAvgAggregateOutputType = {
    id: number | null
    moveSpeed: number | null
    defense: number | null
    hp: number | null
    gold: number | null
  }

  export type MostersSumAggregateOutputType = {
    id: number | null
    moveSpeed: number | null
    defense: number | null
    hp: number | null
    gold: number | null
  }

  export type MostersMinAggregateOutputType = {
    id: number | null
    name: string | null
    moveSpeed: number | null
    defense: number | null
    hp: number | null
    gold: number | null
  }

  export type MostersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    moveSpeed: number | null
    defense: number | null
    hp: number | null
    gold: number | null
  }

  export type MostersCountAggregateOutputType = {
    id: number
    name: number
    moveSpeed: number
    defense: number
    hp: number
    gold: number
    _all: number
  }


  export type MostersAvgAggregateInputType = {
    id?: true
    moveSpeed?: true
    defense?: true
    hp?: true
    gold?: true
  }

  export type MostersSumAggregateInputType = {
    id?: true
    moveSpeed?: true
    defense?: true
    hp?: true
    gold?: true
  }

  export type MostersMinAggregateInputType = {
    id?: true
    name?: true
    moveSpeed?: true
    defense?: true
    hp?: true
    gold?: true
  }

  export type MostersMaxAggregateInputType = {
    id?: true
    name?: true
    moveSpeed?: true
    defense?: true
    hp?: true
    gold?: true
  }

  export type MostersCountAggregateInputType = {
    id?: true
    name?: true
    moveSpeed?: true
    defense?: true
    hp?: true
    gold?: true
    _all?: true
  }

  export type MostersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mosters to aggregate.
     */
    where?: mostersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mosters to fetch.
     */
    orderBy?: mostersOrderByWithRelationInput | mostersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mostersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mosters
    **/
    _count?: true | MostersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MostersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MostersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MostersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MostersMaxAggregateInputType
  }

  export type GetMostersAggregateType<T extends MostersAggregateArgs> = {
        [P in keyof T & keyof AggregateMosters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMosters[P]>
      : GetScalarType<T[P], AggregateMosters[P]>
  }




  export type mostersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mostersWhereInput
    orderBy?: mostersOrderByWithAggregationInput | mostersOrderByWithAggregationInput[]
    by: MostersScalarFieldEnum[] | MostersScalarFieldEnum
    having?: mostersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MostersCountAggregateInputType | true
    _avg?: MostersAvgAggregateInputType
    _sum?: MostersSumAggregateInputType
    _min?: MostersMinAggregateInputType
    _max?: MostersMaxAggregateInputType
  }

  export type MostersGroupByOutputType = {
    id: number
    name: string
    moveSpeed: number
    defense: number
    hp: number
    gold: number
    _count: MostersCountAggregateOutputType | null
    _avg: MostersAvgAggregateOutputType | null
    _sum: MostersSumAggregateOutputType | null
    _min: MostersMinAggregateOutputType | null
    _max: MostersMaxAggregateOutputType | null
  }

  type GetMostersGroupByPayload<T extends mostersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MostersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MostersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MostersGroupByOutputType[P]>
            : GetScalarType<T[P], MostersGroupByOutputType[P]>
        }
      >
    >


  export type mostersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    moveSpeed?: boolean
    defense?: boolean
    hp?: boolean
    gold?: boolean
    monsterStat?: boolean | mosters$monsterStatArgs<ExtArgs>
  }, ExtArgs["result"]["mosters"]>


  export type mostersSelectScalar = {
    id?: boolean
    name?: boolean
    moveSpeed?: boolean
    defense?: boolean
    hp?: boolean
    gold?: boolean
  }

  export type mostersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsterStat?: boolean | mosters$monsterStatArgs<ExtArgs>
  }

  export type $mostersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mosters"
    objects: {
      monsterStat: Prisma.$monsterStatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      moveSpeed: number
      defense: number
      hp: number
      gold: number
    }, ExtArgs["result"]["mosters"]>
    composites: {}
  }

  type mostersGetPayload<S extends boolean | null | undefined | mostersDefaultArgs> = $Result.GetResult<Prisma.$mostersPayload, S>

  type mostersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mostersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MostersCountAggregateInputType | true
    }

  export interface mostersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mosters'], meta: { name: 'mosters' } }
    /**
     * Find zero or one Mosters that matches the filter.
     * @param {mostersFindUniqueArgs} args - Arguments to find a Mosters
     * @example
     * // Get one Mosters
     * const mosters = await prisma.mosters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mostersFindUniqueArgs>(args: SelectSubset<T, mostersFindUniqueArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mosters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mostersFindUniqueOrThrowArgs} args - Arguments to find a Mosters
     * @example
     * // Get one Mosters
     * const mosters = await prisma.mosters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mostersFindUniqueOrThrowArgs>(args: SelectSubset<T, mostersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersFindFirstArgs} args - Arguments to find a Mosters
     * @example
     * // Get one Mosters
     * const mosters = await prisma.mosters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mostersFindFirstArgs>(args?: SelectSubset<T, mostersFindFirstArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mosters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersFindFirstOrThrowArgs} args - Arguments to find a Mosters
     * @example
     * // Get one Mosters
     * const mosters = await prisma.mosters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mostersFindFirstOrThrowArgs>(args?: SelectSubset<T, mostersFindFirstOrThrowArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mosters
     * const mosters = await prisma.mosters.findMany()
     * 
     * // Get first 10 Mosters
     * const mosters = await prisma.mosters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mostersWithIdOnly = await prisma.mosters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mostersFindManyArgs>(args?: SelectSubset<T, mostersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mosters.
     * @param {mostersCreateArgs} args - Arguments to create a Mosters.
     * @example
     * // Create one Mosters
     * const Mosters = await prisma.mosters.create({
     *   data: {
     *     // ... data to create a Mosters
     *   }
     * })
     * 
     */
    create<T extends mostersCreateArgs>(args: SelectSubset<T, mostersCreateArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mosters.
     * @param {mostersCreateManyArgs} args - Arguments to create many Mosters.
     * @example
     * // Create many Mosters
     * const mosters = await prisma.mosters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mostersCreateManyArgs>(args?: SelectSubset<T, mostersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mosters.
     * @param {mostersDeleteArgs} args - Arguments to delete one Mosters.
     * @example
     * // Delete one Mosters
     * const Mosters = await prisma.mosters.delete({
     *   where: {
     *     // ... filter to delete one Mosters
     *   }
     * })
     * 
     */
    delete<T extends mostersDeleteArgs>(args: SelectSubset<T, mostersDeleteArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mosters.
     * @param {mostersUpdateArgs} args - Arguments to update one Mosters.
     * @example
     * // Update one Mosters
     * const mosters = await prisma.mosters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mostersUpdateArgs>(args: SelectSubset<T, mostersUpdateArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mosters.
     * @param {mostersDeleteManyArgs} args - Arguments to filter Mosters to delete.
     * @example
     * // Delete a few Mosters
     * const { count } = await prisma.mosters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mostersDeleteManyArgs>(args?: SelectSubset<T, mostersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mosters
     * const mosters = await prisma.mosters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mostersUpdateManyArgs>(args: SelectSubset<T, mostersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mosters.
     * @param {mostersUpsertArgs} args - Arguments to update or create a Mosters.
     * @example
     * // Update or create a Mosters
     * const mosters = await prisma.mosters.upsert({
     *   create: {
     *     // ... data to create a Mosters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mosters we want to update
     *   }
     * })
     */
    upsert<T extends mostersUpsertArgs>(args: SelectSubset<T, mostersUpsertArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersCountArgs} args - Arguments to filter Mosters to count.
     * @example
     * // Count the number of Mosters
     * const count = await prisma.mosters.count({
     *   where: {
     *     // ... the filter for the Mosters we want to count
     *   }
     * })
    **/
    count<T extends mostersCountArgs>(
      args?: Subset<T, mostersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MostersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MostersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MostersAggregateArgs>(args: Subset<T, MostersAggregateArgs>): Prisma.PrismaPromise<GetMostersAggregateType<T>>

    /**
     * Group by Mosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mostersGroupByArgs} args - Group by arguments.
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
      T extends mostersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mostersGroupByArgs['orderBy'] }
        : { orderBy?: mostersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mostersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMostersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mosters model
   */
  readonly fields: mostersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mosters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mostersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monsterStat<T extends mosters$monsterStatArgs<ExtArgs> = {}>(args?: Subset<T, mosters$monsterStatArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the mosters model
   */ 
  interface mostersFieldRefs {
    readonly id: FieldRef<"mosters", 'Int'>
    readonly name: FieldRef<"mosters", 'String'>
    readonly moveSpeed: FieldRef<"mosters", 'Int'>
    readonly defense: FieldRef<"mosters", 'Int'>
    readonly hp: FieldRef<"mosters", 'Int'>
    readonly gold: FieldRef<"mosters", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mosters findUnique
   */
  export type mostersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter, which mosters to fetch.
     */
    where: mostersWhereUniqueInput
  }

  /**
   * mosters findUniqueOrThrow
   */
  export type mostersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter, which mosters to fetch.
     */
    where: mostersWhereUniqueInput
  }

  /**
   * mosters findFirst
   */
  export type mostersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter, which mosters to fetch.
     */
    where?: mostersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mosters to fetch.
     */
    orderBy?: mostersOrderByWithRelationInput | mostersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mosters.
     */
    cursor?: mostersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mosters.
     */
    distinct?: MostersScalarFieldEnum | MostersScalarFieldEnum[]
  }

  /**
   * mosters findFirstOrThrow
   */
  export type mostersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter, which mosters to fetch.
     */
    where?: mostersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mosters to fetch.
     */
    orderBy?: mostersOrderByWithRelationInput | mostersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mosters.
     */
    cursor?: mostersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mosters.
     */
    distinct?: MostersScalarFieldEnum | MostersScalarFieldEnum[]
  }

  /**
   * mosters findMany
   */
  export type mostersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter, which mosters to fetch.
     */
    where?: mostersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mosters to fetch.
     */
    orderBy?: mostersOrderByWithRelationInput | mostersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mosters.
     */
    cursor?: mostersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mosters.
     */
    skip?: number
    distinct?: MostersScalarFieldEnum | MostersScalarFieldEnum[]
  }

  /**
   * mosters create
   */
  export type mostersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * The data needed to create a mosters.
     */
    data: XOR<mostersCreateInput, mostersUncheckedCreateInput>
  }

  /**
   * mosters createMany
   */
  export type mostersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mosters.
     */
    data: mostersCreateManyInput | mostersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mosters update
   */
  export type mostersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * The data needed to update a mosters.
     */
    data: XOR<mostersUpdateInput, mostersUncheckedUpdateInput>
    /**
     * Choose, which mosters to update.
     */
    where: mostersWhereUniqueInput
  }

  /**
   * mosters updateMany
   */
  export type mostersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mosters.
     */
    data: XOR<mostersUpdateManyMutationInput, mostersUncheckedUpdateManyInput>
    /**
     * Filter which mosters to update
     */
    where?: mostersWhereInput
  }

  /**
   * mosters upsert
   */
  export type mostersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * The filter to search for the mosters to update in case it exists.
     */
    where: mostersWhereUniqueInput
    /**
     * In case the mosters found by the `where` argument doesn't exist, create a new mosters with this data.
     */
    create: XOR<mostersCreateInput, mostersUncheckedCreateInput>
    /**
     * In case the mosters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mostersUpdateInput, mostersUncheckedUpdateInput>
  }

  /**
   * mosters delete
   */
  export type mostersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
    /**
     * Filter which mosters to delete.
     */
    where: mostersWhereUniqueInput
  }

  /**
   * mosters deleteMany
   */
  export type mostersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mosters to delete
     */
    where?: mostersWhereInput
  }

  /**
   * mosters.monsterStat
   */
  export type mosters$monsterStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    where?: monsterStatWhereInput
  }

  /**
   * mosters without action
   */
  export type mostersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mosters
     */
    select?: mostersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mostersInclude<ExtArgs> | null
  }


  /**
   * Model monsterStat
   */

  export type AggregateMonsterStat = {
    _count: MonsterStatCountAggregateOutputType | null
    _avg: MonsterStatAvgAggregateOutputType | null
    _sum: MonsterStatSumAggregateOutputType | null
    _min: MonsterStatMinAggregateOutputType | null
    _max: MonsterStatMaxAggregateOutputType | null
  }

  export type MonsterStatAvgAggregateOutputType = {
    id: number | null
    mosterId: number | null
    defenseUp: number | null
    hpUp: number | null
    goldUp: number | null
    spawnGoblinUp: number | null
  }

  export type MonsterStatSumAggregateOutputType = {
    id: number | null
    mosterId: number | null
    defenseUp: number | null
    hpUp: number | null
    goldUp: number | null
    spawnGoblinUp: number | null
  }

  export type MonsterStatMinAggregateOutputType = {
    id: number | null
    mosterId: number | null
    defenseUp: number | null
    hpUp: number | null
    goldUp: number | null
    spawnGoblinUp: number | null
  }

  export type MonsterStatMaxAggregateOutputType = {
    id: number | null
    mosterId: number | null
    defenseUp: number | null
    hpUp: number | null
    goldUp: number | null
    spawnGoblinUp: number | null
  }

  export type MonsterStatCountAggregateOutputType = {
    id: number
    mosterId: number
    defenseUp: number
    hpUp: number
    goldUp: number
    spawnGoblinUp: number
    _all: number
  }


  export type MonsterStatAvgAggregateInputType = {
    id?: true
    mosterId?: true
    defenseUp?: true
    hpUp?: true
    goldUp?: true
    spawnGoblinUp?: true
  }

  export type MonsterStatSumAggregateInputType = {
    id?: true
    mosterId?: true
    defenseUp?: true
    hpUp?: true
    goldUp?: true
    spawnGoblinUp?: true
  }

  export type MonsterStatMinAggregateInputType = {
    id?: true
    mosterId?: true
    defenseUp?: true
    hpUp?: true
    goldUp?: true
    spawnGoblinUp?: true
  }

  export type MonsterStatMaxAggregateInputType = {
    id?: true
    mosterId?: true
    defenseUp?: true
    hpUp?: true
    goldUp?: true
    spawnGoblinUp?: true
  }

  export type MonsterStatCountAggregateInputType = {
    id?: true
    mosterId?: true
    defenseUp?: true
    hpUp?: true
    goldUp?: true
    spawnGoblinUp?: true
    _all?: true
  }

  export type MonsterStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monsterStat to aggregate.
     */
    where?: monsterStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsterStats to fetch.
     */
    orderBy?: monsterStatOrderByWithRelationInput | monsterStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monsterStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monsterStats
    **/
    _count?: true | MonsterStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterStatMaxAggregateInputType
  }

  export type GetMonsterStatAggregateType<T extends MonsterStatAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterStat[P]>
      : GetScalarType<T[P], AggregateMonsterStat[P]>
  }




  export type monsterStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monsterStatWhereInput
    orderBy?: monsterStatOrderByWithAggregationInput | monsterStatOrderByWithAggregationInput[]
    by: MonsterStatScalarFieldEnum[] | MonsterStatScalarFieldEnum
    having?: monsterStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterStatCountAggregateInputType | true
    _avg?: MonsterStatAvgAggregateInputType
    _sum?: MonsterStatSumAggregateInputType
    _min?: MonsterStatMinAggregateInputType
    _max?: MonsterStatMaxAggregateInputType
  }

  export type MonsterStatGroupByOutputType = {
    id: number
    mosterId: number
    defenseUp: number
    hpUp: number
    goldUp: number
    spawnGoblinUp: number
    _count: MonsterStatCountAggregateOutputType | null
    _avg: MonsterStatAvgAggregateOutputType | null
    _sum: MonsterStatSumAggregateOutputType | null
    _min: MonsterStatMinAggregateOutputType | null
    _max: MonsterStatMaxAggregateOutputType | null
  }

  type GetMonsterStatGroupByPayload<T extends monsterStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterStatGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterStatGroupByOutputType[P]>
        }
      >
    >


  export type monsterStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosterId?: boolean
    defenseUp?: boolean
    hpUp?: boolean
    goldUp?: boolean
    spawnGoblinUp?: boolean
    mosters?: boolean | mostersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monsterStat"]>


  export type monsterStatSelectScalar = {
    id?: boolean
    mosterId?: boolean
    defenseUp?: boolean
    hpUp?: boolean
    goldUp?: boolean
    spawnGoblinUp?: boolean
  }

  export type monsterStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosters?: boolean | mostersDefaultArgs<ExtArgs>
  }

  export type $monsterStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monsterStat"
    objects: {
      mosters: Prisma.$mostersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mosterId: number
      defenseUp: number
      hpUp: number
      goldUp: number
      spawnGoblinUp: number
    }, ExtArgs["result"]["monsterStat"]>
    composites: {}
  }

  type monsterStatGetPayload<S extends boolean | null | undefined | monsterStatDefaultArgs> = $Result.GetResult<Prisma.$monsterStatPayload, S>

  type monsterStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<monsterStatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonsterStatCountAggregateInputType | true
    }

  export interface monsterStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monsterStat'], meta: { name: 'monsterStat' } }
    /**
     * Find zero or one MonsterStat that matches the filter.
     * @param {monsterStatFindUniqueArgs} args - Arguments to find a MonsterStat
     * @example
     * // Get one MonsterStat
     * const monsterStat = await prisma.monsterStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monsterStatFindUniqueArgs>(args: SelectSubset<T, monsterStatFindUniqueArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonsterStat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {monsterStatFindUniqueOrThrowArgs} args - Arguments to find a MonsterStat
     * @example
     * // Get one MonsterStat
     * const monsterStat = await prisma.monsterStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monsterStatFindUniqueOrThrowArgs>(args: SelectSubset<T, monsterStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonsterStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatFindFirstArgs} args - Arguments to find a MonsterStat
     * @example
     * // Get one MonsterStat
     * const monsterStat = await prisma.monsterStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monsterStatFindFirstArgs>(args?: SelectSubset<T, monsterStatFindFirstArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonsterStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatFindFirstOrThrowArgs} args - Arguments to find a MonsterStat
     * @example
     * // Get one MonsterStat
     * const monsterStat = await prisma.monsterStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monsterStatFindFirstOrThrowArgs>(args?: SelectSubset<T, monsterStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonsterStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterStats
     * const monsterStats = await prisma.monsterStat.findMany()
     * 
     * // Get first 10 MonsterStats
     * const monsterStats = await prisma.monsterStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterStatWithIdOnly = await prisma.monsterStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monsterStatFindManyArgs>(args?: SelectSubset<T, monsterStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonsterStat.
     * @param {monsterStatCreateArgs} args - Arguments to create a MonsterStat.
     * @example
     * // Create one MonsterStat
     * const MonsterStat = await prisma.monsterStat.create({
     *   data: {
     *     // ... data to create a MonsterStat
     *   }
     * })
     * 
     */
    create<T extends monsterStatCreateArgs>(args: SelectSubset<T, monsterStatCreateArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonsterStats.
     * @param {monsterStatCreateManyArgs} args - Arguments to create many MonsterStats.
     * @example
     * // Create many MonsterStats
     * const monsterStat = await prisma.monsterStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monsterStatCreateManyArgs>(args?: SelectSubset<T, monsterStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonsterStat.
     * @param {monsterStatDeleteArgs} args - Arguments to delete one MonsterStat.
     * @example
     * // Delete one MonsterStat
     * const MonsterStat = await prisma.monsterStat.delete({
     *   where: {
     *     // ... filter to delete one MonsterStat
     *   }
     * })
     * 
     */
    delete<T extends monsterStatDeleteArgs>(args: SelectSubset<T, monsterStatDeleteArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonsterStat.
     * @param {monsterStatUpdateArgs} args - Arguments to update one MonsterStat.
     * @example
     * // Update one MonsterStat
     * const monsterStat = await prisma.monsterStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monsterStatUpdateArgs>(args: SelectSubset<T, monsterStatUpdateArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonsterStats.
     * @param {monsterStatDeleteManyArgs} args - Arguments to filter MonsterStats to delete.
     * @example
     * // Delete a few MonsterStats
     * const { count } = await prisma.monsterStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monsterStatDeleteManyArgs>(args?: SelectSubset<T, monsterStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterStats
     * const monsterStat = await prisma.monsterStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monsterStatUpdateManyArgs>(args: SelectSubset<T, monsterStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonsterStat.
     * @param {monsterStatUpsertArgs} args - Arguments to update or create a MonsterStat.
     * @example
     * // Update or create a MonsterStat
     * const monsterStat = await prisma.monsterStat.upsert({
     *   create: {
     *     // ... data to create a MonsterStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterStat we want to update
     *   }
     * })
     */
    upsert<T extends monsterStatUpsertArgs>(args: SelectSubset<T, monsterStatUpsertArgs<ExtArgs>>): Prisma__monsterStatClient<$Result.GetResult<Prisma.$monsterStatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonsterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatCountArgs} args - Arguments to filter MonsterStats to count.
     * @example
     * // Count the number of MonsterStats
     * const count = await prisma.monsterStat.count({
     *   where: {
     *     // ... the filter for the MonsterStats we want to count
     *   }
     * })
    **/
    count<T extends monsterStatCountArgs>(
      args?: Subset<T, monsterStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterStatAggregateArgs>(args: Subset<T, MonsterStatAggregateArgs>): Prisma.PrismaPromise<GetMonsterStatAggregateType<T>>

    /**
     * Group by MonsterStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterStatGroupByArgs} args - Group by arguments.
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
      T extends monsterStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monsterStatGroupByArgs['orderBy'] }
        : { orderBy?: monsterStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, monsterStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monsterStat model
   */
  readonly fields: monsterStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monsterStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monsterStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mosters<T extends mostersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mostersDefaultArgs<ExtArgs>>): Prisma__mostersClient<$Result.GetResult<Prisma.$mostersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the monsterStat model
   */ 
  interface monsterStatFieldRefs {
    readonly id: FieldRef<"monsterStat", 'Int'>
    readonly mosterId: FieldRef<"monsterStat", 'Int'>
    readonly defenseUp: FieldRef<"monsterStat", 'Int'>
    readonly hpUp: FieldRef<"monsterStat", 'Int'>
    readonly goldUp: FieldRef<"monsterStat", 'Int'>
    readonly spawnGoblinUp: FieldRef<"monsterStat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * monsterStat findUnique
   */
  export type monsterStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter, which monsterStat to fetch.
     */
    where: monsterStatWhereUniqueInput
  }

  /**
   * monsterStat findUniqueOrThrow
   */
  export type monsterStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter, which monsterStat to fetch.
     */
    where: monsterStatWhereUniqueInput
  }

  /**
   * monsterStat findFirst
   */
  export type monsterStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter, which monsterStat to fetch.
     */
    where?: monsterStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsterStats to fetch.
     */
    orderBy?: monsterStatOrderByWithRelationInput | monsterStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monsterStats.
     */
    cursor?: monsterStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monsterStats.
     */
    distinct?: MonsterStatScalarFieldEnum | MonsterStatScalarFieldEnum[]
  }

  /**
   * monsterStat findFirstOrThrow
   */
  export type monsterStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter, which monsterStat to fetch.
     */
    where?: monsterStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsterStats to fetch.
     */
    orderBy?: monsterStatOrderByWithRelationInput | monsterStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monsterStats.
     */
    cursor?: monsterStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monsterStats.
     */
    distinct?: MonsterStatScalarFieldEnum | MonsterStatScalarFieldEnum[]
  }

  /**
   * monsterStat findMany
   */
  export type monsterStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter, which monsterStats to fetch.
     */
    where?: monsterStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsterStats to fetch.
     */
    orderBy?: monsterStatOrderByWithRelationInput | monsterStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monsterStats.
     */
    cursor?: monsterStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsterStats.
     */
    skip?: number
    distinct?: MonsterStatScalarFieldEnum | MonsterStatScalarFieldEnum[]
  }

  /**
   * monsterStat create
   */
  export type monsterStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * The data needed to create a monsterStat.
     */
    data: XOR<monsterStatCreateInput, monsterStatUncheckedCreateInput>
  }

  /**
   * monsterStat createMany
   */
  export type monsterStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monsterStats.
     */
    data: monsterStatCreateManyInput | monsterStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monsterStat update
   */
  export type monsterStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * The data needed to update a monsterStat.
     */
    data: XOR<monsterStatUpdateInput, monsterStatUncheckedUpdateInput>
    /**
     * Choose, which monsterStat to update.
     */
    where: monsterStatWhereUniqueInput
  }

  /**
   * monsterStat updateMany
   */
  export type monsterStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monsterStats.
     */
    data: XOR<monsterStatUpdateManyMutationInput, monsterStatUncheckedUpdateManyInput>
    /**
     * Filter which monsterStats to update
     */
    where?: monsterStatWhereInput
  }

  /**
   * monsterStat upsert
   */
  export type monsterStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * The filter to search for the monsterStat to update in case it exists.
     */
    where: monsterStatWhereUniqueInput
    /**
     * In case the monsterStat found by the `where` argument doesn't exist, create a new monsterStat with this data.
     */
    create: XOR<monsterStatCreateInput, monsterStatUncheckedCreateInput>
    /**
     * In case the monsterStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monsterStatUpdateInput, monsterStatUncheckedUpdateInput>
  }

  /**
   * monsterStat delete
   */
  export type monsterStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
    /**
     * Filter which monsterStat to delete.
     */
    where: monsterStatWhereUniqueInput
  }

  /**
   * monsterStat deleteMany
   */
  export type monsterStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monsterStats to delete
     */
    where?: monsterStatWhereInput
  }

  /**
   * monsterStat without action
   */
  export type monsterStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monsterStat
     */
    select?: monsterStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monsterStatInclude<ExtArgs> | null
  }


  /**
   * Model exp
   */

  export type AggregateExp = {
    _count: ExpCountAggregateOutputType | null
    _avg: ExpAvgAggregateOutputType | null
    _sum: ExpSumAggregateOutputType | null
    _min: ExpMinAggregateOutputType | null
    _max: ExpMaxAggregateOutputType | null
  }

  export type ExpAvgAggregateOutputType = {
    id: number | null
    level: number | null
    exp: number | null
  }

  export type ExpSumAggregateOutputType = {
    id: number | null
    level: number | null
    exp: number | null
  }

  export type ExpMinAggregateOutputType = {
    id: number | null
    level: number | null
    exp: number | null
  }

  export type ExpMaxAggregateOutputType = {
    id: number | null
    level: number | null
    exp: number | null
  }

  export type ExpCountAggregateOutputType = {
    id: number
    level: number
    exp: number
    _all: number
  }


  export type ExpAvgAggregateInputType = {
    id?: true
    level?: true
    exp?: true
  }

  export type ExpSumAggregateInputType = {
    id?: true
    level?: true
    exp?: true
  }

  export type ExpMinAggregateInputType = {
    id?: true
    level?: true
    exp?: true
  }

  export type ExpMaxAggregateInputType = {
    id?: true
    level?: true
    exp?: true
  }

  export type ExpCountAggregateInputType = {
    id?: true
    level?: true
    exp?: true
    _all?: true
  }

  export type ExpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exp to aggregate.
     */
    where?: expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exps to fetch.
     */
    orderBy?: expOrderByWithRelationInput | expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exps
    **/
    _count?: true | ExpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpMaxAggregateInputType
  }

  export type GetExpAggregateType<T extends ExpAggregateArgs> = {
        [P in keyof T & keyof AggregateExp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExp[P]>
      : GetScalarType<T[P], AggregateExp[P]>
  }




  export type expGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expWhereInput
    orderBy?: expOrderByWithAggregationInput | expOrderByWithAggregationInput[]
    by: ExpScalarFieldEnum[] | ExpScalarFieldEnum
    having?: expScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpCountAggregateInputType | true
    _avg?: ExpAvgAggregateInputType
    _sum?: ExpSumAggregateInputType
    _min?: ExpMinAggregateInputType
    _max?: ExpMaxAggregateInputType
  }

  export type ExpGroupByOutputType = {
    id: number
    level: number
    exp: number
    _count: ExpCountAggregateOutputType | null
    _avg: ExpAvgAggregateOutputType | null
    _sum: ExpSumAggregateOutputType | null
    _min: ExpMinAggregateOutputType | null
    _max: ExpMaxAggregateOutputType | null
  }

  type GetExpGroupByPayload<T extends expGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpGroupByOutputType[P]>
            : GetScalarType<T[P], ExpGroupByOutputType[P]>
        }
      >
    >


  export type expSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    exp?: boolean
  }, ExtArgs["result"]["exp"]>


  export type expSelectScalar = {
    id?: boolean
    level?: boolean
    exp?: boolean
  }


  export type $expPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: number
      exp: number
    }, ExtArgs["result"]["exp"]>
    composites: {}
  }

  type expGetPayload<S extends boolean | null | undefined | expDefaultArgs> = $Result.GetResult<Prisma.$expPayload, S>

  type expCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<expFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpCountAggregateInputType | true
    }

  export interface expDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exp'], meta: { name: 'exp' } }
    /**
     * Find zero or one Exp that matches the filter.
     * @param {expFindUniqueArgs} args - Arguments to find a Exp
     * @example
     * // Get one Exp
     * const exp = await prisma.exp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expFindUniqueArgs>(args: SelectSubset<T, expFindUniqueArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {expFindUniqueOrThrowArgs} args - Arguments to find a Exp
     * @example
     * // Get one Exp
     * const exp = await prisma.exp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expFindUniqueOrThrowArgs>(args: SelectSubset<T, expFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expFindFirstArgs} args - Arguments to find a Exp
     * @example
     * // Get one Exp
     * const exp = await prisma.exp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expFindFirstArgs>(args?: SelectSubset<T, expFindFirstArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expFindFirstOrThrowArgs} args - Arguments to find a Exp
     * @example
     * // Get one Exp
     * const exp = await prisma.exp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expFindFirstOrThrowArgs>(args?: SelectSubset<T, expFindFirstOrThrowArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exps
     * const exps = await prisma.exp.findMany()
     * 
     * // Get first 10 Exps
     * const exps = await prisma.exp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expWithIdOnly = await prisma.exp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expFindManyArgs>(args?: SelectSubset<T, expFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exp.
     * @param {expCreateArgs} args - Arguments to create a Exp.
     * @example
     * // Create one Exp
     * const Exp = await prisma.exp.create({
     *   data: {
     *     // ... data to create a Exp
     *   }
     * })
     * 
     */
    create<T extends expCreateArgs>(args: SelectSubset<T, expCreateArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exps.
     * @param {expCreateManyArgs} args - Arguments to create many Exps.
     * @example
     * // Create many Exps
     * const exp = await prisma.exp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expCreateManyArgs>(args?: SelectSubset<T, expCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exp.
     * @param {expDeleteArgs} args - Arguments to delete one Exp.
     * @example
     * // Delete one Exp
     * const Exp = await prisma.exp.delete({
     *   where: {
     *     // ... filter to delete one Exp
     *   }
     * })
     * 
     */
    delete<T extends expDeleteArgs>(args: SelectSubset<T, expDeleteArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exp.
     * @param {expUpdateArgs} args - Arguments to update one Exp.
     * @example
     * // Update one Exp
     * const exp = await prisma.exp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expUpdateArgs>(args: SelectSubset<T, expUpdateArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exps.
     * @param {expDeleteManyArgs} args - Arguments to filter Exps to delete.
     * @example
     * // Delete a few Exps
     * const { count } = await prisma.exp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expDeleteManyArgs>(args?: SelectSubset<T, expDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exps
     * const exp = await prisma.exp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expUpdateManyArgs>(args: SelectSubset<T, expUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exp.
     * @param {expUpsertArgs} args - Arguments to update or create a Exp.
     * @example
     * // Update or create a Exp
     * const exp = await prisma.exp.upsert({
     *   create: {
     *     // ... data to create a Exp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exp we want to update
     *   }
     * })
     */
    upsert<T extends expUpsertArgs>(args: SelectSubset<T, expUpsertArgs<ExtArgs>>): Prisma__expClient<$Result.GetResult<Prisma.$expPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expCountArgs} args - Arguments to filter Exps to count.
     * @example
     * // Count the number of Exps
     * const count = await prisma.exp.count({
     *   where: {
     *     // ... the filter for the Exps we want to count
     *   }
     * })
    **/
    count<T extends expCountArgs>(
      args?: Subset<T, expCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpAggregateArgs>(args: Subset<T, ExpAggregateArgs>): Prisma.PrismaPromise<GetExpAggregateType<T>>

    /**
     * Group by Exp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expGroupByArgs} args - Group by arguments.
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
      T extends expGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expGroupByArgs['orderBy'] }
        : { orderBy?: expGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, expGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exp model
   */
  readonly fields: expFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the exp model
   */ 
  interface expFieldRefs {
    readonly id: FieldRef<"exp", 'Int'>
    readonly level: FieldRef<"exp", 'Int'>
    readonly exp: FieldRef<"exp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exp findUnique
   */
  export type expFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter, which exp to fetch.
     */
    where: expWhereUniqueInput
  }

  /**
   * exp findUniqueOrThrow
   */
  export type expFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter, which exp to fetch.
     */
    where: expWhereUniqueInput
  }

  /**
   * exp findFirst
   */
  export type expFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter, which exp to fetch.
     */
    where?: expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exps to fetch.
     */
    orderBy?: expOrderByWithRelationInput | expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exps.
     */
    cursor?: expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exps.
     */
    distinct?: ExpScalarFieldEnum | ExpScalarFieldEnum[]
  }

  /**
   * exp findFirstOrThrow
   */
  export type expFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter, which exp to fetch.
     */
    where?: expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exps to fetch.
     */
    orderBy?: expOrderByWithRelationInput | expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exps.
     */
    cursor?: expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exps.
     */
    distinct?: ExpScalarFieldEnum | ExpScalarFieldEnum[]
  }

  /**
   * exp findMany
   */
  export type expFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter, which exps to fetch.
     */
    where?: expWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exps to fetch.
     */
    orderBy?: expOrderByWithRelationInput | expOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exps.
     */
    cursor?: expWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exps.
     */
    skip?: number
    distinct?: ExpScalarFieldEnum | ExpScalarFieldEnum[]
  }

  /**
   * exp create
   */
  export type expCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * The data needed to create a exp.
     */
    data: XOR<expCreateInput, expUncheckedCreateInput>
  }

  /**
   * exp createMany
   */
  export type expCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exps.
     */
    data: expCreateManyInput | expCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exp update
   */
  export type expUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * The data needed to update a exp.
     */
    data: XOR<expUpdateInput, expUncheckedUpdateInput>
    /**
     * Choose, which exp to update.
     */
    where: expWhereUniqueInput
  }

  /**
   * exp updateMany
   */
  export type expUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exps.
     */
    data: XOR<expUpdateManyMutationInput, expUncheckedUpdateManyInput>
    /**
     * Filter which exps to update
     */
    where?: expWhereInput
  }

  /**
   * exp upsert
   */
  export type expUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * The filter to search for the exp to update in case it exists.
     */
    where: expWhereUniqueInput
    /**
     * In case the exp found by the `where` argument doesn't exist, create a new exp with this data.
     */
    create: XOR<expCreateInput, expUncheckedCreateInput>
    /**
     * In case the exp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expUpdateInput, expUncheckedUpdateInput>
  }

  /**
   * exp delete
   */
  export type expDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
    /**
     * Filter which exp to delete.
     */
    where: expWhereUniqueInput
  }

  /**
   * exp deleteMany
   */
  export type expDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exps to delete
     */
    where?: expWhereInput
  }

  /**
   * exp without action
   */
  export type expDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exp
     */
    select?: expSelect<ExtArgs> | null
  }


  /**
   * Model stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    id: number | null
    spawnGoblin: number | null
    totalSpawn: number | null
    spawnInterval: number | null
    limitTime: number | null
  }

  export type StageSumAggregateOutputType = {
    id: number | null
    spawnGoblin: number | null
    totalSpawn: number | null
    spawnInterval: number | null
    limitTime: number | null
  }

  export type StageMinAggregateOutputType = {
    id: number | null
    spawnGoblin: number | null
    totalSpawn: number | null
    spawnInterval: number | null
    limitTime: number | null
  }

  export type StageMaxAggregateOutputType = {
    id: number | null
    spawnGoblin: number | null
    totalSpawn: number | null
    spawnInterval: number | null
    limitTime: number | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    spawnGoblin: number
    totalSpawn: number
    spawnInterval: number
    limitTime: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    id?: true
    spawnGoblin?: true
    totalSpawn?: true
    spawnInterval?: true
    limitTime?: true
  }

  export type StageSumAggregateInputType = {
    id?: true
    spawnGoblin?: true
    totalSpawn?: true
    spawnInterval?: true
    limitTime?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    spawnGoblin?: true
    totalSpawn?: true
    spawnInterval?: true
    limitTime?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    spawnGoblin?: true
    totalSpawn?: true
    spawnInterval?: true
    limitTime?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    spawnGoblin?: true
    totalSpawn?: true
    spawnInterval?: true
    limitTime?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stage to aggregate.
     */
    where?: stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stageOrderByWithRelationInput | stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type stageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stageWhereInput
    orderBy?: stageOrderByWithAggregationInput | stageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: stageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: number
    spawnGoblin: number
    totalSpawn: number
    spawnInterval: number
    limitTime: number
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends stageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type stageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spawnGoblin?: boolean
    totalSpawn?: boolean
    spawnInterval?: boolean
    limitTime?: boolean
  }, ExtArgs["result"]["stage"]>


  export type stageSelectScalar = {
    id?: boolean
    spawnGoblin?: boolean
    totalSpawn?: boolean
    spawnInterval?: boolean
    limitTime?: boolean
  }


  export type $stagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spawnGoblin: number
      totalSpawn: number
      spawnInterval: number
      limitTime: number
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }

  type stageGetPayload<S extends boolean | null | undefined | stageDefaultArgs> = $Result.GetResult<Prisma.$stagePayload, S>

  type stageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<stageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface stageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stage'], meta: { name: 'stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {stageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stageFindUniqueArgs>(args: SelectSubset<T, stageFindUniqueArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {stageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stageFindUniqueOrThrowArgs>(args: SelectSubset<T, stageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stageFindFirstArgs>(args?: SelectSubset<T, stageFindFirstArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stageFindFirstOrThrowArgs>(args?: SelectSubset<T, stageFindFirstOrThrowArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stageFindManyArgs>(args?: SelectSubset<T, stageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stage.
     * @param {stageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
     */
    create<T extends stageCreateArgs>(args: SelectSubset<T, stageCreateArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stages.
     * @param {stageCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stageCreateManyArgs>(args?: SelectSubset<T, stageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stage.
     * @param {stageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
     */
    delete<T extends stageDeleteArgs>(args: SelectSubset<T, stageDeleteArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stage.
     * @param {stageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stageUpdateArgs>(args: SelectSubset<T, stageUpdateArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stages.
     * @param {stageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stageDeleteManyArgs>(args?: SelectSubset<T, stageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stageUpdateManyArgs>(args: SelectSubset<T, stageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {stageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
     */
    upsert<T extends stageUpsertArgs>(args: SelectSubset<T, stageUpsertArgs<ExtArgs>>): Prisma__stageClient<$Result.GetResult<Prisma.$stagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends stageCountArgs>(
      args?: Subset<T, stageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stageGroupByArgs} args - Group by arguments.
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
      T extends stageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stageGroupByArgs['orderBy'] }
        : { orderBy?: stageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stage model
   */
  readonly fields: stageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the stage model
   */ 
  interface stageFieldRefs {
    readonly id: FieldRef<"stage", 'Int'>
    readonly spawnGoblin: FieldRef<"stage", 'Int'>
    readonly totalSpawn: FieldRef<"stage", 'Int'>
    readonly spawnInterval: FieldRef<"stage", 'Int'>
    readonly limitTime: FieldRef<"stage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stage findUnique
   */
  export type stageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter, which stage to fetch.
     */
    where: stageWhereUniqueInput
  }

  /**
   * stage findUniqueOrThrow
   */
  export type stageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter, which stage to fetch.
     */
    where: stageWhereUniqueInput
  }

  /**
   * stage findFirst
   */
  export type stageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter, which stage to fetch.
     */
    where?: stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stageOrderByWithRelationInput | stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stages.
     */
    cursor?: stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * stage findFirstOrThrow
   */
  export type stageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter, which stage to fetch.
     */
    where?: stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stageOrderByWithRelationInput | stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stages.
     */
    cursor?: stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * stage findMany
   */
  export type stageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where?: stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stageOrderByWithRelationInput | stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stages.
     */
    cursor?: stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * stage create
   */
  export type stageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * The data needed to create a stage.
     */
    data?: XOR<stageCreateInput, stageUncheckedCreateInput>
  }

  /**
   * stage createMany
   */
  export type stageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stages.
     */
    data: stageCreateManyInput | stageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stage update
   */
  export type stageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * The data needed to update a stage.
     */
    data: XOR<stageUpdateInput, stageUncheckedUpdateInput>
    /**
     * Choose, which stage to update.
     */
    where: stageWhereUniqueInput
  }

  /**
   * stage updateMany
   */
  export type stageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stages.
     */
    data: XOR<stageUpdateManyMutationInput, stageUncheckedUpdateManyInput>
    /**
     * Filter which stages to update
     */
    where?: stageWhereInput
  }

  /**
   * stage upsert
   */
  export type stageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * The filter to search for the stage to update in case it exists.
     */
    where: stageWhereUniqueInput
    /**
     * In case the stage found by the `where` argument doesn't exist, create a new stage with this data.
     */
    create: XOR<stageCreateInput, stageUncheckedCreateInput>
    /**
     * In case the stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stageUpdateInput, stageUncheckedUpdateInput>
  }

  /**
   * stage delete
   */
  export type stageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
    /**
     * Filter which stage to delete.
     */
    where: stageWhereUniqueInput
  }

  /**
   * stage deleteMany
   */
  export type stageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stages to delete
     */
    where?: stageWhereInput
  }

  /**
   * stage without action
   */
  export type stageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stage
     */
    select?: stageSelect<ExtArgs> | null
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


  export const TowersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    damage: 'damage',
    attackSpeed: 'attackSpeed',
    attackRange: 'attackRange',
    skillProbability: 'skillProbability',
    cost: 'cost',
    atkType: 'atkType'
  };

  export type TowersScalarFieldEnum = (typeof TowersScalarFieldEnum)[keyof typeof TowersScalarFieldEnum]


  export const TowerStatScalarFieldEnum: {
    id: 'id',
    towerId: 'towerId',
    attakUp: 'attakUp',
    attackSpeedUp: 'attackSpeedUp',
    rangeUp: 'rangeUp',
    probabilityUp: 'probabilityUp'
  };

  export type TowerStatScalarFieldEnum = (typeof TowerStatScalarFieldEnum)[keyof typeof TowerStatScalarFieldEnum]


  export const MostersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    moveSpeed: 'moveSpeed',
    defense: 'defense',
    hp: 'hp',
    gold: 'gold'
  };

  export type MostersScalarFieldEnum = (typeof MostersScalarFieldEnum)[keyof typeof MostersScalarFieldEnum]


  export const MonsterStatScalarFieldEnum: {
    id: 'id',
    mosterId: 'mosterId',
    defenseUp: 'defenseUp',
    hpUp: 'hpUp',
    goldUp: 'goldUp',
    spawnGoblinUp: 'spawnGoblinUp'
  };

  export type MonsterStatScalarFieldEnum = (typeof MonsterStatScalarFieldEnum)[keyof typeof MonsterStatScalarFieldEnum]


  export const ExpScalarFieldEnum: {
    id: 'id',
    level: 'level',
    exp: 'exp'
  };

  export type ExpScalarFieldEnum = (typeof ExpScalarFieldEnum)[keyof typeof ExpScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    spawnGoblin: 'spawnGoblin',
    totalSpawn: 'totalSpawn',
    spawnInterval: 'spawnInterval',
    limitTime: 'limitTime'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AtkType'
   */
  export type EnumAtkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AtkType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type towersWhereInput = {
    AND?: towersWhereInput | towersWhereInput[]
    OR?: towersWhereInput[]
    NOT?: towersWhereInput | towersWhereInput[]
    id?: IntFilter<"towers"> | number
    name?: StringFilter<"towers"> | string
    damage?: IntFilter<"towers"> | number
    attackSpeed?: IntFilter<"towers"> | number
    attackRange?: IntFilter<"towers"> | number
    skillProbability?: IntFilter<"towers"> | number
    cost?: IntFilter<"towers"> | number
    atkType?: EnumAtkTypeFilter<"towers"> | $Enums.AtkType
    towerStat?: XOR<TowerStatNullableRelationFilter, towerStatWhereInput> | null
  }

  export type towersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
    atkType?: SortOrder
    towerStat?: towerStatOrderByWithRelationInput
  }

  export type towersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: towersWhereInput | towersWhereInput[]
    OR?: towersWhereInput[]
    NOT?: towersWhereInput | towersWhereInput[]
    damage?: IntFilter<"towers"> | number
    attackSpeed?: IntFilter<"towers"> | number
    attackRange?: IntFilter<"towers"> | number
    skillProbability?: IntFilter<"towers"> | number
    cost?: IntFilter<"towers"> | number
    atkType?: EnumAtkTypeFilter<"towers"> | $Enums.AtkType
    towerStat?: XOR<TowerStatNullableRelationFilter, towerStatWhereInput> | null
  }, "id" | "name">

  export type towersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
    atkType?: SortOrder
    _count?: towersCountOrderByAggregateInput
    _avg?: towersAvgOrderByAggregateInput
    _max?: towersMaxOrderByAggregateInput
    _min?: towersMinOrderByAggregateInput
    _sum?: towersSumOrderByAggregateInput
  }

  export type towersScalarWhereWithAggregatesInput = {
    AND?: towersScalarWhereWithAggregatesInput | towersScalarWhereWithAggregatesInput[]
    OR?: towersScalarWhereWithAggregatesInput[]
    NOT?: towersScalarWhereWithAggregatesInput | towersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"towers"> | number
    name?: StringWithAggregatesFilter<"towers"> | string
    damage?: IntWithAggregatesFilter<"towers"> | number
    attackSpeed?: IntWithAggregatesFilter<"towers"> | number
    attackRange?: IntWithAggregatesFilter<"towers"> | number
    skillProbability?: IntWithAggregatesFilter<"towers"> | number
    cost?: IntWithAggregatesFilter<"towers"> | number
    atkType?: EnumAtkTypeWithAggregatesFilter<"towers"> | $Enums.AtkType
  }

  export type towerStatWhereInput = {
    AND?: towerStatWhereInput | towerStatWhereInput[]
    OR?: towerStatWhereInput[]
    NOT?: towerStatWhereInput | towerStatWhereInput[]
    id?: IntFilter<"towerStat"> | number
    towerId?: IntFilter<"towerStat"> | number
    attakUp?: IntFilter<"towerStat"> | number
    attackSpeedUp?: IntFilter<"towerStat"> | number
    rangeUp?: IntFilter<"towerStat"> | number
    probabilityUp?: IntFilter<"towerStat"> | number
    towers?: XOR<TowersRelationFilter, towersWhereInput>
  }

  export type towerStatOrderByWithRelationInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
    towers?: towersOrderByWithRelationInput
  }

  export type towerStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    towerId?: number
    AND?: towerStatWhereInput | towerStatWhereInput[]
    OR?: towerStatWhereInput[]
    NOT?: towerStatWhereInput | towerStatWhereInput[]
    attakUp?: IntFilter<"towerStat"> | number
    attackSpeedUp?: IntFilter<"towerStat"> | number
    rangeUp?: IntFilter<"towerStat"> | number
    probabilityUp?: IntFilter<"towerStat"> | number
    towers?: XOR<TowersRelationFilter, towersWhereInput>
  }, "id" | "towerId">

  export type towerStatOrderByWithAggregationInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
    _count?: towerStatCountOrderByAggregateInput
    _avg?: towerStatAvgOrderByAggregateInput
    _max?: towerStatMaxOrderByAggregateInput
    _min?: towerStatMinOrderByAggregateInput
    _sum?: towerStatSumOrderByAggregateInput
  }

  export type towerStatScalarWhereWithAggregatesInput = {
    AND?: towerStatScalarWhereWithAggregatesInput | towerStatScalarWhereWithAggregatesInput[]
    OR?: towerStatScalarWhereWithAggregatesInput[]
    NOT?: towerStatScalarWhereWithAggregatesInput | towerStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"towerStat"> | number
    towerId?: IntWithAggregatesFilter<"towerStat"> | number
    attakUp?: IntWithAggregatesFilter<"towerStat"> | number
    attackSpeedUp?: IntWithAggregatesFilter<"towerStat"> | number
    rangeUp?: IntWithAggregatesFilter<"towerStat"> | number
    probabilityUp?: IntWithAggregatesFilter<"towerStat"> | number
  }

  export type mostersWhereInput = {
    AND?: mostersWhereInput | mostersWhereInput[]
    OR?: mostersWhereInput[]
    NOT?: mostersWhereInput | mostersWhereInput[]
    id?: IntFilter<"mosters"> | number
    name?: StringFilter<"mosters"> | string
    moveSpeed?: IntFilter<"mosters"> | number
    defense?: IntFilter<"mosters"> | number
    hp?: IntFilter<"mosters"> | number
    gold?: IntFilter<"mosters"> | number
    monsterStat?: XOR<MonsterStatNullableRelationFilter, monsterStatWhereInput> | null
  }

  export type mostersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
    monsterStat?: monsterStatOrderByWithRelationInput
  }

  export type mostersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: mostersWhereInput | mostersWhereInput[]
    OR?: mostersWhereInput[]
    NOT?: mostersWhereInput | mostersWhereInput[]
    moveSpeed?: IntFilter<"mosters"> | number
    defense?: IntFilter<"mosters"> | number
    hp?: IntFilter<"mosters"> | number
    gold?: IntFilter<"mosters"> | number
    monsterStat?: XOR<MonsterStatNullableRelationFilter, monsterStatWhereInput> | null
  }, "id" | "name">

  export type mostersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
    _count?: mostersCountOrderByAggregateInput
    _avg?: mostersAvgOrderByAggregateInput
    _max?: mostersMaxOrderByAggregateInput
    _min?: mostersMinOrderByAggregateInput
    _sum?: mostersSumOrderByAggregateInput
  }

  export type mostersScalarWhereWithAggregatesInput = {
    AND?: mostersScalarWhereWithAggregatesInput | mostersScalarWhereWithAggregatesInput[]
    OR?: mostersScalarWhereWithAggregatesInput[]
    NOT?: mostersScalarWhereWithAggregatesInput | mostersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mosters"> | number
    name?: StringWithAggregatesFilter<"mosters"> | string
    moveSpeed?: IntWithAggregatesFilter<"mosters"> | number
    defense?: IntWithAggregatesFilter<"mosters"> | number
    hp?: IntWithAggregatesFilter<"mosters"> | number
    gold?: IntWithAggregatesFilter<"mosters"> | number
  }

  export type monsterStatWhereInput = {
    AND?: monsterStatWhereInput | monsterStatWhereInput[]
    OR?: monsterStatWhereInput[]
    NOT?: monsterStatWhereInput | monsterStatWhereInput[]
    id?: IntFilter<"monsterStat"> | number
    mosterId?: IntFilter<"monsterStat"> | number
    defenseUp?: IntFilter<"monsterStat"> | number
    hpUp?: IntFilter<"monsterStat"> | number
    goldUp?: IntFilter<"monsterStat"> | number
    spawnGoblinUp?: IntFilter<"monsterStat"> | number
    mosters?: XOR<MostersRelationFilter, mostersWhereInput>
  }

  export type monsterStatOrderByWithRelationInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
    mosters?: mostersOrderByWithRelationInput
  }

  export type monsterStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mosterId?: number
    AND?: monsterStatWhereInput | monsterStatWhereInput[]
    OR?: monsterStatWhereInput[]
    NOT?: monsterStatWhereInput | monsterStatWhereInput[]
    defenseUp?: IntFilter<"monsterStat"> | number
    hpUp?: IntFilter<"monsterStat"> | number
    goldUp?: IntFilter<"monsterStat"> | number
    spawnGoblinUp?: IntFilter<"monsterStat"> | number
    mosters?: XOR<MostersRelationFilter, mostersWhereInput>
  }, "id" | "mosterId">

  export type monsterStatOrderByWithAggregationInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
    _count?: monsterStatCountOrderByAggregateInput
    _avg?: monsterStatAvgOrderByAggregateInput
    _max?: monsterStatMaxOrderByAggregateInput
    _min?: monsterStatMinOrderByAggregateInput
    _sum?: monsterStatSumOrderByAggregateInput
  }

  export type monsterStatScalarWhereWithAggregatesInput = {
    AND?: monsterStatScalarWhereWithAggregatesInput | monsterStatScalarWhereWithAggregatesInput[]
    OR?: monsterStatScalarWhereWithAggregatesInput[]
    NOT?: monsterStatScalarWhereWithAggregatesInput | monsterStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"monsterStat"> | number
    mosterId?: IntWithAggregatesFilter<"monsterStat"> | number
    defenseUp?: IntWithAggregatesFilter<"monsterStat"> | number
    hpUp?: IntWithAggregatesFilter<"monsterStat"> | number
    goldUp?: IntWithAggregatesFilter<"monsterStat"> | number
    spawnGoblinUp?: IntWithAggregatesFilter<"monsterStat"> | number
  }

  export type expWhereInput = {
    AND?: expWhereInput | expWhereInput[]
    OR?: expWhereInput[]
    NOT?: expWhereInput | expWhereInput[]
    id?: IntFilter<"exp"> | number
    level?: IntFilter<"exp"> | number
    exp?: IntFilter<"exp"> | number
  }

  export type expOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type expWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    level?: number
    AND?: expWhereInput | expWhereInput[]
    OR?: expWhereInput[]
    NOT?: expWhereInput | expWhereInput[]
    exp?: IntFilter<"exp"> | number
  }, "id" | "level">

  export type expOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
    _count?: expCountOrderByAggregateInput
    _avg?: expAvgOrderByAggregateInput
    _max?: expMaxOrderByAggregateInput
    _min?: expMinOrderByAggregateInput
    _sum?: expSumOrderByAggregateInput
  }

  export type expScalarWhereWithAggregatesInput = {
    AND?: expScalarWhereWithAggregatesInput | expScalarWhereWithAggregatesInput[]
    OR?: expScalarWhereWithAggregatesInput[]
    NOT?: expScalarWhereWithAggregatesInput | expScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exp"> | number
    level?: IntWithAggregatesFilter<"exp"> | number
    exp?: IntWithAggregatesFilter<"exp"> | number
  }

  export type stageWhereInput = {
    AND?: stageWhereInput | stageWhereInput[]
    OR?: stageWhereInput[]
    NOT?: stageWhereInput | stageWhereInput[]
    id?: IntFilter<"stage"> | number
    spawnGoblin?: IntFilter<"stage"> | number
    totalSpawn?: IntFilter<"stage"> | number
    spawnInterval?: IntFilter<"stage"> | number
    limitTime?: IntFilter<"stage"> | number
  }

  export type stageOrderByWithRelationInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type stageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stageWhereInput | stageWhereInput[]
    OR?: stageWhereInput[]
    NOT?: stageWhereInput | stageWhereInput[]
    spawnGoblin?: IntFilter<"stage"> | number
    totalSpawn?: IntFilter<"stage"> | number
    spawnInterval?: IntFilter<"stage"> | number
    limitTime?: IntFilter<"stage"> | number
  }, "id">

  export type stageOrderByWithAggregationInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
    _count?: stageCountOrderByAggregateInput
    _avg?: stageAvgOrderByAggregateInput
    _max?: stageMaxOrderByAggregateInput
    _min?: stageMinOrderByAggregateInput
    _sum?: stageSumOrderByAggregateInput
  }

  export type stageScalarWhereWithAggregatesInput = {
    AND?: stageScalarWhereWithAggregatesInput | stageScalarWhereWithAggregatesInput[]
    OR?: stageScalarWhereWithAggregatesInput[]
    NOT?: stageScalarWhereWithAggregatesInput | stageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stage"> | number
    spawnGoblin?: IntWithAggregatesFilter<"stage"> | number
    totalSpawn?: IntWithAggregatesFilter<"stage"> | number
    spawnInterval?: IntWithAggregatesFilter<"stage"> | number
    limitTime?: IntWithAggregatesFilter<"stage"> | number
  }

  export type towersCreateInput = {
    name: string
    damage?: number
    attackSpeed?: number
    attackRange?: number
    skillProbability?: number
    cost?: number
    atkType: $Enums.AtkType
    towerStat?: towerStatCreateNestedOneWithoutTowersInput
  }

  export type towersUncheckedCreateInput = {
    id?: number
    name: string
    damage?: number
    attackSpeed?: number
    attackRange?: number
    skillProbability?: number
    cost?: number
    atkType: $Enums.AtkType
    towerStat?: towerStatUncheckedCreateNestedOneWithoutTowersInput
  }

  export type towersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
    towerStat?: towerStatUpdateOneWithoutTowersNestedInput
  }

  export type towersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
    towerStat?: towerStatUncheckedUpdateOneWithoutTowersNestedInput
  }

  export type towersCreateManyInput = {
    id?: number
    name: string
    damage?: number
    attackSpeed?: number
    attackRange?: number
    skillProbability?: number
    cost?: number
    atkType: $Enums.AtkType
  }

  export type towersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
  }

  export type towersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
  }

  export type towerStatCreateInput = {
    attakUp?: number
    attackSpeedUp?: number
    rangeUp?: number
    probabilityUp?: number
    towers: towersCreateNestedOneWithoutTowerStatInput
  }

  export type towerStatUncheckedCreateInput = {
    id?: number
    towerId: number
    attakUp?: number
    attackSpeedUp?: number
    rangeUp?: number
    probabilityUp?: number
  }

  export type towerStatUpdateInput = {
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
    towers?: towersUpdateOneRequiredWithoutTowerStatNestedInput
  }

  export type towerStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    towerId?: IntFieldUpdateOperationsInput | number
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
  }

  export type towerStatCreateManyInput = {
    id?: number
    towerId: number
    attakUp?: number
    attackSpeedUp?: number
    rangeUp?: number
    probabilityUp?: number
  }

  export type towerStatUpdateManyMutationInput = {
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
  }

  export type towerStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    towerId?: IntFieldUpdateOperationsInput | number
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
  }

  export type mostersCreateInput = {
    name: string
    moveSpeed?: number
    defense?: number
    hp?: number
    gold?: number
    monsterStat?: monsterStatCreateNestedOneWithoutMostersInput
  }

  export type mostersUncheckedCreateInput = {
    id?: number
    name: string
    moveSpeed?: number
    defense?: number
    hp?: number
    gold?: number
    monsterStat?: monsterStatUncheckedCreateNestedOneWithoutMostersInput
  }

  export type mostersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    monsterStat?: monsterStatUpdateOneWithoutMostersNestedInput
  }

  export type mostersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    monsterStat?: monsterStatUncheckedUpdateOneWithoutMostersNestedInput
  }

  export type mostersCreateManyInput = {
    id?: number
    name: string
    moveSpeed?: number
    defense?: number
    hp?: number
    gold?: number
  }

  export type mostersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
  }

  export type mostersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
  }

  export type monsterStatCreateInput = {
    defenseUp?: number
    hpUp?: number
    goldUp?: number
    spawnGoblinUp?: number
    mosters: mostersCreateNestedOneWithoutMonsterStatInput
  }

  export type monsterStatUncheckedCreateInput = {
    id?: number
    mosterId: number
    defenseUp?: number
    hpUp?: number
    goldUp?: number
    spawnGoblinUp?: number
  }

  export type monsterStatUpdateInput = {
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
    mosters?: mostersUpdateOneRequiredWithoutMonsterStatNestedInput
  }

  export type monsterStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosterId?: IntFieldUpdateOperationsInput | number
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
  }

  export type monsterStatCreateManyInput = {
    id?: number
    mosterId: number
    defenseUp?: number
    hpUp?: number
    goldUp?: number
    spawnGoblinUp?: number
  }

  export type monsterStatUpdateManyMutationInput = {
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
  }

  export type monsterStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mosterId?: IntFieldUpdateOperationsInput | number
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
  }

  export type expCreateInput = {
    level: number
    exp?: number
  }

  export type expUncheckedCreateInput = {
    id?: number
    level: number
    exp?: number
  }

  export type expUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
  }

  export type expUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
  }

  export type expCreateManyInput = {
    id?: number
    level: number
    exp?: number
  }

  export type expUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
  }

  export type expUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
  }

  export type stageCreateInput = {
    spawnGoblin?: number
    totalSpawn?: number
    spawnInterval?: number
    limitTime?: number
  }

  export type stageUncheckedCreateInput = {
    id?: number
    spawnGoblin?: number
    totalSpawn?: number
    spawnInterval?: number
    limitTime?: number
  }

  export type stageUpdateInput = {
    spawnGoblin?: IntFieldUpdateOperationsInput | number
    totalSpawn?: IntFieldUpdateOperationsInput | number
    spawnInterval?: IntFieldUpdateOperationsInput | number
    limitTime?: IntFieldUpdateOperationsInput | number
  }

  export type stageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spawnGoblin?: IntFieldUpdateOperationsInput | number
    totalSpawn?: IntFieldUpdateOperationsInput | number
    spawnInterval?: IntFieldUpdateOperationsInput | number
    limitTime?: IntFieldUpdateOperationsInput | number
  }

  export type stageCreateManyInput = {
    id?: number
    spawnGoblin?: number
    totalSpawn?: number
    spawnInterval?: number
    limitTime?: number
  }

  export type stageUpdateManyMutationInput = {
    spawnGoblin?: IntFieldUpdateOperationsInput | number
    totalSpawn?: IntFieldUpdateOperationsInput | number
    spawnInterval?: IntFieldUpdateOperationsInput | number
    limitTime?: IntFieldUpdateOperationsInput | number
  }

  export type stageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spawnGoblin?: IntFieldUpdateOperationsInput | number
    totalSpawn?: IntFieldUpdateOperationsInput | number
    spawnInterval?: IntFieldUpdateOperationsInput | number
    limitTime?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAtkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AtkType | EnumAtkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AtkType[]
    notIn?: $Enums.AtkType[]
    not?: NestedEnumAtkTypeFilter<$PrismaModel> | $Enums.AtkType
  }

  export type TowerStatNullableRelationFilter = {
    is?: towerStatWhereInput | null
    isNot?: towerStatWhereInput | null
  }

  export type towersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
    atkType?: SortOrder
  }

  export type towersAvgOrderByAggregateInput = {
    id?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
  }

  export type towersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
    atkType?: SortOrder
  }

  export type towersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
    atkType?: SortOrder
  }

  export type towersSumOrderByAggregateInput = {
    id?: SortOrder
    damage?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    skillProbability?: SortOrder
    cost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumAtkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtkType | EnumAtkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AtkType[]
    notIn?: $Enums.AtkType[]
    not?: NestedEnumAtkTypeWithAggregatesFilter<$PrismaModel> | $Enums.AtkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtkTypeFilter<$PrismaModel>
    _max?: NestedEnumAtkTypeFilter<$PrismaModel>
  }

  export type TowersRelationFilter = {
    is?: towersWhereInput
    isNot?: towersWhereInput
  }

  export type towerStatCountOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
  }

  export type towerStatAvgOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
  }

  export type towerStatMaxOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
  }

  export type towerStatMinOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
  }

  export type towerStatSumOrderByAggregateInput = {
    id?: SortOrder
    towerId?: SortOrder
    attakUp?: SortOrder
    attackSpeedUp?: SortOrder
    rangeUp?: SortOrder
    probabilityUp?: SortOrder
  }

  export type MonsterStatNullableRelationFilter = {
    is?: monsterStatWhereInput | null
    isNot?: monsterStatWhereInput | null
  }

  export type mostersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
  }

  export type mostersAvgOrderByAggregateInput = {
    id?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
  }

  export type mostersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
  }

  export type mostersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
  }

  export type mostersSumOrderByAggregateInput = {
    id?: SortOrder
    moveSpeed?: SortOrder
    defense?: SortOrder
    hp?: SortOrder
    gold?: SortOrder
  }

  export type MostersRelationFilter = {
    is?: mostersWhereInput
    isNot?: mostersWhereInput
  }

  export type monsterStatCountOrderByAggregateInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
  }

  export type monsterStatAvgOrderByAggregateInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
  }

  export type monsterStatMaxOrderByAggregateInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
  }

  export type monsterStatMinOrderByAggregateInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
  }

  export type monsterStatSumOrderByAggregateInput = {
    id?: SortOrder
    mosterId?: SortOrder
    defenseUp?: SortOrder
    hpUp?: SortOrder
    goldUp?: SortOrder
    spawnGoblinUp?: SortOrder
  }

  export type expCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type expAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type expMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type expMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type expSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    exp?: SortOrder
  }

  export type stageCountOrderByAggregateInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type stageAvgOrderByAggregateInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type stageMaxOrderByAggregateInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type stageMinOrderByAggregateInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type stageSumOrderByAggregateInput = {
    id?: SortOrder
    spawnGoblin?: SortOrder
    totalSpawn?: SortOrder
    spawnInterval?: SortOrder
    limitTime?: SortOrder
  }

  export type towerStatCreateNestedOneWithoutTowersInput = {
    create?: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
    connectOrCreate?: towerStatCreateOrConnectWithoutTowersInput
    connect?: towerStatWhereUniqueInput
  }

  export type towerStatUncheckedCreateNestedOneWithoutTowersInput = {
    create?: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
    connectOrCreate?: towerStatCreateOrConnectWithoutTowersInput
    connect?: towerStatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAtkTypeFieldUpdateOperationsInput = {
    set?: $Enums.AtkType
  }

  export type towerStatUpdateOneWithoutTowersNestedInput = {
    create?: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
    connectOrCreate?: towerStatCreateOrConnectWithoutTowersInput
    upsert?: towerStatUpsertWithoutTowersInput
    disconnect?: towerStatWhereInput | boolean
    delete?: towerStatWhereInput | boolean
    connect?: towerStatWhereUniqueInput
    update?: XOR<XOR<towerStatUpdateToOneWithWhereWithoutTowersInput, towerStatUpdateWithoutTowersInput>, towerStatUncheckedUpdateWithoutTowersInput>
  }

  export type towerStatUncheckedUpdateOneWithoutTowersNestedInput = {
    create?: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
    connectOrCreate?: towerStatCreateOrConnectWithoutTowersInput
    upsert?: towerStatUpsertWithoutTowersInput
    disconnect?: towerStatWhereInput | boolean
    delete?: towerStatWhereInput | boolean
    connect?: towerStatWhereUniqueInput
    update?: XOR<XOR<towerStatUpdateToOneWithWhereWithoutTowersInput, towerStatUpdateWithoutTowersInput>, towerStatUncheckedUpdateWithoutTowersInput>
  }

  export type towersCreateNestedOneWithoutTowerStatInput = {
    create?: XOR<towersCreateWithoutTowerStatInput, towersUncheckedCreateWithoutTowerStatInput>
    connectOrCreate?: towersCreateOrConnectWithoutTowerStatInput
    connect?: towersWhereUniqueInput
  }

  export type towersUpdateOneRequiredWithoutTowerStatNestedInput = {
    create?: XOR<towersCreateWithoutTowerStatInput, towersUncheckedCreateWithoutTowerStatInput>
    connectOrCreate?: towersCreateOrConnectWithoutTowerStatInput
    upsert?: towersUpsertWithoutTowerStatInput
    connect?: towersWhereUniqueInput
    update?: XOR<XOR<towersUpdateToOneWithWhereWithoutTowerStatInput, towersUpdateWithoutTowerStatInput>, towersUncheckedUpdateWithoutTowerStatInput>
  }

  export type monsterStatCreateNestedOneWithoutMostersInput = {
    create?: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
    connectOrCreate?: monsterStatCreateOrConnectWithoutMostersInput
    connect?: monsterStatWhereUniqueInput
  }

  export type monsterStatUncheckedCreateNestedOneWithoutMostersInput = {
    create?: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
    connectOrCreate?: monsterStatCreateOrConnectWithoutMostersInput
    connect?: monsterStatWhereUniqueInput
  }

  export type monsterStatUpdateOneWithoutMostersNestedInput = {
    create?: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
    connectOrCreate?: monsterStatCreateOrConnectWithoutMostersInput
    upsert?: monsterStatUpsertWithoutMostersInput
    disconnect?: monsterStatWhereInput | boolean
    delete?: monsterStatWhereInput | boolean
    connect?: monsterStatWhereUniqueInput
    update?: XOR<XOR<monsterStatUpdateToOneWithWhereWithoutMostersInput, monsterStatUpdateWithoutMostersInput>, monsterStatUncheckedUpdateWithoutMostersInput>
  }

  export type monsterStatUncheckedUpdateOneWithoutMostersNestedInput = {
    create?: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
    connectOrCreate?: monsterStatCreateOrConnectWithoutMostersInput
    upsert?: monsterStatUpsertWithoutMostersInput
    disconnect?: monsterStatWhereInput | boolean
    delete?: monsterStatWhereInput | boolean
    connect?: monsterStatWhereUniqueInput
    update?: XOR<XOR<monsterStatUpdateToOneWithWhereWithoutMostersInput, monsterStatUpdateWithoutMostersInput>, monsterStatUncheckedUpdateWithoutMostersInput>
  }

  export type mostersCreateNestedOneWithoutMonsterStatInput = {
    create?: XOR<mostersCreateWithoutMonsterStatInput, mostersUncheckedCreateWithoutMonsterStatInput>
    connectOrCreate?: mostersCreateOrConnectWithoutMonsterStatInput
    connect?: mostersWhereUniqueInput
  }

  export type mostersUpdateOneRequiredWithoutMonsterStatNestedInput = {
    create?: XOR<mostersCreateWithoutMonsterStatInput, mostersUncheckedCreateWithoutMonsterStatInput>
    connectOrCreate?: mostersCreateOrConnectWithoutMonsterStatInput
    upsert?: mostersUpsertWithoutMonsterStatInput
    connect?: mostersWhereUniqueInput
    update?: XOR<XOR<mostersUpdateToOneWithWhereWithoutMonsterStatInput, mostersUpdateWithoutMonsterStatInput>, mostersUncheckedUpdateWithoutMonsterStatInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAtkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AtkType | EnumAtkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AtkType[]
    notIn?: $Enums.AtkType[]
    not?: NestedEnumAtkTypeFilter<$PrismaModel> | $Enums.AtkType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumAtkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtkType | EnumAtkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AtkType[]
    notIn?: $Enums.AtkType[]
    not?: NestedEnumAtkTypeWithAggregatesFilter<$PrismaModel> | $Enums.AtkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtkTypeFilter<$PrismaModel>
    _max?: NestedEnumAtkTypeFilter<$PrismaModel>
  }

  export type towerStatCreateWithoutTowersInput = {
    attakUp?: number
    attackSpeedUp?: number
    rangeUp?: number
    probabilityUp?: number
  }

  export type towerStatUncheckedCreateWithoutTowersInput = {
    id?: number
    attakUp?: number
    attackSpeedUp?: number
    rangeUp?: number
    probabilityUp?: number
  }

  export type towerStatCreateOrConnectWithoutTowersInput = {
    where: towerStatWhereUniqueInput
    create: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
  }

  export type towerStatUpsertWithoutTowersInput = {
    update: XOR<towerStatUpdateWithoutTowersInput, towerStatUncheckedUpdateWithoutTowersInput>
    create: XOR<towerStatCreateWithoutTowersInput, towerStatUncheckedCreateWithoutTowersInput>
    where?: towerStatWhereInput
  }

  export type towerStatUpdateToOneWithWhereWithoutTowersInput = {
    where?: towerStatWhereInput
    data: XOR<towerStatUpdateWithoutTowersInput, towerStatUncheckedUpdateWithoutTowersInput>
  }

  export type towerStatUpdateWithoutTowersInput = {
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
  }

  export type towerStatUncheckedUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    attakUp?: IntFieldUpdateOperationsInput | number
    attackSpeedUp?: IntFieldUpdateOperationsInput | number
    rangeUp?: IntFieldUpdateOperationsInput | number
    probabilityUp?: IntFieldUpdateOperationsInput | number
  }

  export type towersCreateWithoutTowerStatInput = {
    name: string
    damage?: number
    attackSpeed?: number
    attackRange?: number
    skillProbability?: number
    cost?: number
    atkType: $Enums.AtkType
  }

  export type towersUncheckedCreateWithoutTowerStatInput = {
    id?: number
    name: string
    damage?: number
    attackSpeed?: number
    attackRange?: number
    skillProbability?: number
    cost?: number
    atkType: $Enums.AtkType
  }

  export type towersCreateOrConnectWithoutTowerStatInput = {
    where: towersWhereUniqueInput
    create: XOR<towersCreateWithoutTowerStatInput, towersUncheckedCreateWithoutTowerStatInput>
  }

  export type towersUpsertWithoutTowerStatInput = {
    update: XOR<towersUpdateWithoutTowerStatInput, towersUncheckedUpdateWithoutTowerStatInput>
    create: XOR<towersCreateWithoutTowerStatInput, towersUncheckedCreateWithoutTowerStatInput>
    where?: towersWhereInput
  }

  export type towersUpdateToOneWithWhereWithoutTowerStatInput = {
    where?: towersWhereInput
    data: XOR<towersUpdateWithoutTowerStatInput, towersUncheckedUpdateWithoutTowerStatInput>
  }

  export type towersUpdateWithoutTowerStatInput = {
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
  }

  export type towersUncheckedUpdateWithoutTowerStatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    skillProbability?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    atkType?: EnumAtkTypeFieldUpdateOperationsInput | $Enums.AtkType
  }

  export type monsterStatCreateWithoutMostersInput = {
    defenseUp?: number
    hpUp?: number
    goldUp?: number
    spawnGoblinUp?: number
  }

  export type monsterStatUncheckedCreateWithoutMostersInput = {
    id?: number
    defenseUp?: number
    hpUp?: number
    goldUp?: number
    spawnGoblinUp?: number
  }

  export type monsterStatCreateOrConnectWithoutMostersInput = {
    where: monsterStatWhereUniqueInput
    create: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
  }

  export type monsterStatUpsertWithoutMostersInput = {
    update: XOR<monsterStatUpdateWithoutMostersInput, monsterStatUncheckedUpdateWithoutMostersInput>
    create: XOR<monsterStatCreateWithoutMostersInput, monsterStatUncheckedCreateWithoutMostersInput>
    where?: monsterStatWhereInput
  }

  export type monsterStatUpdateToOneWithWhereWithoutMostersInput = {
    where?: monsterStatWhereInput
    data: XOR<monsterStatUpdateWithoutMostersInput, monsterStatUncheckedUpdateWithoutMostersInput>
  }

  export type monsterStatUpdateWithoutMostersInput = {
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
  }

  export type monsterStatUncheckedUpdateWithoutMostersInput = {
    id?: IntFieldUpdateOperationsInput | number
    defenseUp?: IntFieldUpdateOperationsInput | number
    hpUp?: IntFieldUpdateOperationsInput | number
    goldUp?: IntFieldUpdateOperationsInput | number
    spawnGoblinUp?: IntFieldUpdateOperationsInput | number
  }

  export type mostersCreateWithoutMonsterStatInput = {
    name: string
    moveSpeed?: number
    defense?: number
    hp?: number
    gold?: number
  }

  export type mostersUncheckedCreateWithoutMonsterStatInput = {
    id?: number
    name: string
    moveSpeed?: number
    defense?: number
    hp?: number
    gold?: number
  }

  export type mostersCreateOrConnectWithoutMonsterStatInput = {
    where: mostersWhereUniqueInput
    create: XOR<mostersCreateWithoutMonsterStatInput, mostersUncheckedCreateWithoutMonsterStatInput>
  }

  export type mostersUpsertWithoutMonsterStatInput = {
    update: XOR<mostersUpdateWithoutMonsterStatInput, mostersUncheckedUpdateWithoutMonsterStatInput>
    create: XOR<mostersCreateWithoutMonsterStatInput, mostersUncheckedCreateWithoutMonsterStatInput>
    where?: mostersWhereInput
  }

  export type mostersUpdateToOneWithWhereWithoutMonsterStatInput = {
    where?: mostersWhereInput
    data: XOR<mostersUpdateWithoutMonsterStatInput, mostersUncheckedUpdateWithoutMonsterStatInput>
  }

  export type mostersUpdateWithoutMonsterStatInput = {
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
  }

  export type mostersUncheckedUpdateWithoutMonsterStatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    moveSpeed?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use towersDefaultArgs instead
     */
    export type towersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = towersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use towerStatDefaultArgs instead
     */
    export type towerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = towerStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mostersDefaultArgs instead
     */
    export type mostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mostersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use monsterStatDefaultArgs instead
     */
    export type monsterStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = monsterStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use expDefaultArgs instead
     */
    export type expArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = expDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stageDefaultArgs instead
     */
    export type stageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stageDefaultArgs<ExtArgs>

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