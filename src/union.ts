export {};

let value1 = 1;
// value1 = 'foo'; <--- 型推論numberなので文字列を代入するとエラーになる

let value2: number | string = 1;
value2 = 'foo';

/*
ユニオン型
orを示す | で型定義を連結することで、複数の型を許容することが可能
*/