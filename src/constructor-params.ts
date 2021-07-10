export {};

/*
コンストラクタメソッドの中身について型を取り出す
ConstructorParameters<PersonType>

*/

class Person {
  name: string;
  age: number;

  // 初期化
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// インスタンスの作成
let taro = new Person('Taro', 30);
console.log(taro); // 出力

type PersonType = typeof Person; // Personクラスの型セットを引用
type Profile = ConstructorParameters<PersonType>; // コンストラクタの型を流用できるようにする
const profile: Profile = ['Ham', 28]; // Personクラスのコンストラクタメソッドで定義した型セットをprofileの配列に適用する
const ham = new Person(...profile); // 引用した型制約にて新たなクラスをインスタンス化
console.log(ham); // 出力

// 処理内容
type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (
  ...args: infer P // Pは引数の型
) => any 
  ? P 
  : never;