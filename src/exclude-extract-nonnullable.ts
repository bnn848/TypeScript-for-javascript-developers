export {};

/*
Distributive Conditional Types
評価値が大元と互換性があるかどうかで三項演算子を用いて条件分岐させる
左辺が右辺と互換性がある（含まれている）場合、true = never と評価される
never = ないものとして評価される（nullでもundefinedでもない）
*/

type DebugType = () => void; // 関数型
type SomeTypes = string | number | DebugType; // string or number or DebugType

// Excludeの処理内容
type MyExclude =   
  | (string extends string | number ? never : string) // never
  | (number extends string | number ? never : number) // never
  | (DebugType extends string | number ? never : DebugType) // DebugType
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
