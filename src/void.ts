export {};

function returnNothing(): void {
  console.log("I don't return anything.");
  // return undefined;
}

console.log(returnNothing());

/*
返り値がvoidまたはanyを返さない関数は値を返す必要がある
明示的にreturn undefined; を記述する必要がある
return undefined は本来の目的から逸れているので、voidを返すのが適当

*/