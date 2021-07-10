export {};

/*
関数の戻り値の型を取得することができる
ReturnType<typeof 関数名>
*/

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1,2));

// ReturnTypeの処理内容
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // 条件の一部としてジェネリクスを宣言できる。 型推論をRに格納する
  ? R // 型が存在する場合、型を返す
  : any;

type ReturnTypeFromAdd = ReturnType<typeof add>;