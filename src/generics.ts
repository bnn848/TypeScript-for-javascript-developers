export {};

/*
ジェネリクス型
一般的(汎用的)なメソッドを抽象化することができる
抽象的な型
*/

// ================二つは型以外は同じ処理===================
// 数値を受け取り数値を返す
const echo1 = (arg: number):number => {
  return arg;
};
// 文字列を受け取り文字列を返す
const echo2 = (arg:string): string => {
  return arg;
};
// =========================================================

// 引数の前に<T>をつける。(慣習的にTypeのTを用いる)
const echo3 = <T>(arg: T): T => {
  return arg;
}
// メソッド名＜型＞(引数)
console.log(echo3<number>(100));
console.log(echo3<string>('Hello!'));
console.log(echo3<boolean>(true));


// クラスの場合のジェネリクス
// 初期化時の型を汎用化する場合
class Mirror<T> { // クラス名<T> {型定義の際にTを用いることで型を抽象化できる}
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

// 実行の際にTに実際の型を代入する
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Good Morning!!').echo());
console.log(new Mirror<boolean>(false).echo());