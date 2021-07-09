export {};

type ObjectType =  {
  name: string;
  age: number
};

interface ObjectInterface { // <--- = 不要
  name: string;
  age: number
}

// let object: { name: string; age: number } = {
  // let object: ObjectType = {
let object: ObjectInterface = {
  name: 'Ham',
  age: 28
}

/*
オブジェクトの型エイリアスの作り方（interface）
クラスを作る際に有用

*/