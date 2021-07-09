export {};

let profile1: object = { name: 'Hum' };
// profile1 = { birthYear: 1993 }; ---> 上書きできてしまう上、エラーが発生しない

let profile2: { // {} = object
  name: string
} = { name: 'Ham' };
// profile2 = { birthYear: 1993 }; ---> これはエラーになる
profile2 = { name: 'Has' }

/*
{}でアノテーションを指定すると、設定したプロパティしか代入できない

*/