/* ファイルをモジュール化することでグローバル空間で利用している変数とバッティングしないようにする */
export {};

let name = 'typescript';

/* boolean値 */
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1; <--- これはエラーになる
console.log({ isFinished });

