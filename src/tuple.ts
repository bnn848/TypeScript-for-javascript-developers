export {};

// tuple型()
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'] <--- これはエラーになる

/*
ユニオン型だと配列ないの要素の順番を指定できない = ゆるい
より制約を強くしたいときに順番を指定したタプル型が有効
型推論では出てこない

*/
