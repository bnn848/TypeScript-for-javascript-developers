export {};

// 関数の方だけ宣言する(シグネチャ)
function double(value: number): number;
function double(value: string): string;

// 数値
function double(value: any): any {
  console.log(typeof value);

  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  } 
  // else {
  //   throw 'numberでもstringでもないので、引数の型を確認してください'
  // }
}

// 文字列 <--- doubleは数値で定義しているのでエラーになる
// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go! '))
// console.log(double(true)) <--- numberでもstringでもない場合、シグネチャで弾かれてエラーになる


/*
引数と返り値の型が異なるので、シグネチャを作成
関数内での型定義はしない、any型にしておく
typeofで条件分岐する
*/