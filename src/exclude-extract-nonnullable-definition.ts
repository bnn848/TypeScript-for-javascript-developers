export {};

/*
exclude : 型セットから指定の型を除外する
extract : 型セットから抽出する
nonnullable : 型セットからnullだけ除外する
*/

type DebugType = () => void; // 関数型
type SomeTypes = string | number | DebugType; // string or number or DebugType

// Exclude<引数1, 引数2> : 引数1の型セットから引数2の型を除外
// SomeTypesからstringとnumberを除外する
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 大文字Functionは全ての関数型を指す

// Extract<引数1, 引数2> : 引数2を抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// NonNullable<引数1> : 引数1からnullを除外する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;