export {};

class Person {
  // public name: string;
  // public age: number;

  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }

}

const me = new Person('Ham', 28);
console.log(me);

/*
コンストラクタの引数にアクセス修飾子をつけて初期化することができる
constructor内で初期化していなくても大丈夫
ただしこの場合はpublicを省略できない

*/