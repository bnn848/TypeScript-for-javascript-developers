export {};


/*
型の互換性
TypeScriptで記述する場合は、型の互換性に常に気をつける必要がある
ある方を包摂する型（anyとか）以外はエラーになる
代入する型には、代入される型にあるインスタンスがなければならない
〜構造的部分型について〜
オブジェクト間の代入の場合、各々の型が一致しているかは気にしない？
代入されるオブジェクトのメンバーが代入する側のメンバーにもあるか
*/


/* 互換性がある場合 */
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // expected: undefined
fooCompatible = barCompatible; // any型はstring型と互換性がある、といえる。
console.log(typeof fooCompatible); // expected: string

/* 互換性がない場合 */
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible; <-- これはエラーになる

/* 同じ型の変数の代入 */
let fooString: string;
let barString: string = 'string';
fooString = barString; // 問題なく代入できる

/* 文字列リテラル型 */
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列リテラルは文字列として認識されるためエラーは起きない

/* 数値 */
let fooNumber: number;
let fooNumberLiteral: 1993 = 1993;
fooNumber = fooNumberLiteral; // 数値リテラルは数値として認識されるためエラーは起きない

/* インターフェイス */
interface Animal {
  age: number;
  // name: string;
}

class Person { // Animalとは関係ないクラスを定義する
  // constructor(public age: number) {} // <--- nameを持たないとエラーになる
  // constructor(public name: string) {} // <--- nameを持たないとエラーになる
  constructor(public age: number, public name: string) {}
}

let me: Animal; // インターフェイスの型を実装する
me = new Person(28, 'はむ'); // その後Personクラスでインスタンス化 <--- PersonクラスはAnimalのメンバーを持っている必要がある
// me = new Person(28);

