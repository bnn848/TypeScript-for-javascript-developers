export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch(error) {
  console.error({ error });
}

let foo: void = undefined; // nullでもOK
// let bar: never = undefined; // nullでもエラーになる
let foobar: never = error('only me'); // errorのような処理のみを許容する

/*
予備もとに戻って来ない
例外処理(Error Handling)を記述する際に使う
try文の処理がされない場合（今回はthrowされないから）、catchが実行される


*/