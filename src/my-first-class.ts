export {};

/* 元となるクラスを定義する */
class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) { // 二つの引数を受け取る
    this.name = name;
    this.age = age;
  }

  profile() { // profile() : インスタンスメソッド
    return `name: ${this.name}, age: ${this.age}`
  }

}


let taro = new Person('Taro', 30); // new クラス名() でクラスのインスタンス化する
console.log(taro.profile());


/*
クラス定義で型定義する
constructorメソッドで初期化するもの、returnは不要
型定義はクラス内のconstructorの前に行う



*/