export {};

/*
Nullable-type
不確定な状態を持ち得る変数の型定義
number型にしたプロパティをnullで初期化すると、strictNullChecks: trueの場合エラーとなる
ただし、strictNullChecks: false とすることは非推奨
そこで、ユニオン型（型1 | 型2）で定義することでNullを許容する
*/

let profile: {name: string; age: number | null} = {
  name: 'Ham',
  age: null
};