export {};

/* 文字列のリテラル型 */
let dayOfTheWeek1: string = '日';
dayOfTheWeek1 = '月';
dayOfTheWeek1 = '31'; // 文字列ではあるので曜日でなくてもエラーにならない

let dayOfTheWeek2: '日' | "月" | "火" | "水" | "木" | "金" | "土" = '日';
dayOfTheWeek2 = '月';
// dayOfTheWeek2 = '31'; <--- これは含まれていないのでエラーになる


/* 数値のリテラル型 */
let month1 = 1;
month1 = 12;
month1 = 13; // 13月などという月はないのでエラーにしたい

let month2: 1 | 2 | 3 | 4 | 5 | 6 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month2 = 12;
// month2 = 13; <--- これは含まれていないのでエラーになる

/* booleanのリテラル型 */
let True: true = true;
// TRUE = false; <--- これは含まれていないのでエラーになる


/*
リテラル型
アノテーションを文字列で定義することもできる
ユニオン型と組み合わせることで複雑な型定義が可能となる

*/