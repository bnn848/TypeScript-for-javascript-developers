export {};

/*
抽象クラスとは...プロパティの存在を宣言するだけ。必ず具体的にオーバーライドされる必要がある
シグネチャという抽象宣言を用いる -> 抽象メソッドは抽象クラスにしか使えないので、クラス名にもabstractをつける
メソッドを継承してないとエラーになるので、漏れを防いで大規模開発の時にべんり
*/

// 抽象クラス
abstract class Animal {
  abstract cry(): string;
}

// 具体クラスA
class Lion extends Animal {
  cry() {
    return 'Roar !!';
  }
}

// 具体クラスB
// class Tiger extends Animal {} <-- 親クラスで定義した抽象メソッドを実装してないとエラー
class Tiger extends Animal {
  cry() {
    return 'Gaaaar !!';
  }
}