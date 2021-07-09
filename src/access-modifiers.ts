export {};

/* 元となるクラスを定義する */
class Person {
  public name: string; // アクセス修飾子
  // private age: number;
  protected age: number;
  protected nationality: string;
  
  // コンストラクタ
  constructor(name: string, age: number, nationality: string) { // 二つの引数を受け取る
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // メソッド
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}` // ここではageにアクセスできる
  }
}

/* Personクラスの子クラス */
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality) // 親クラスのconstructorメソッドに渡すことができる
  }
  
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}` //<--- ageにアクセスできないのでエラーになる
  }
}


let taro = new Person('Taro', 30, 'japan'); // new クラス名() でクラスのインスタンス化する
console.log(taro.name);
// console.log(taro.age); <--- private修飾子にアクセスしているためエラーとなる
console.log(taro.profile()); // <--- メソッド経由ならageプロパティを読み取ることができる

/*
クラスの中身に対して外部からのアクセスに制約を設けることができる
メンバー修飾子を定義しているところでアクセス修飾子を記述する
privateはクラス内ならアクセスできる
protectedはクラス内+派生クラス（子孫クラス）からもアクセスできる

*/