export {};


/*
引数の型を取り出すことができる
Parameters<typeof 取り出し先の型定義>
*/

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}

debugProfile('Ham', 28);

type Profile = Parameters<typeof debugProfile>; // expected : string, number
// const profile: Profile = ['Gloria', true]; <-- 第2引数はnumberとなっているのでエラー
const profile: Profile = ['Gloria', 35];
debugProfile(...profile);

//Parametersの処理内容
type MyParameters<T extends (...args: any) => any> = T extends ( // argumentsの型(any)をreturn
  ...args: infer P // 取得したargsの型推論Pを実行
) => any ? P : never; // 型があればそれを返す