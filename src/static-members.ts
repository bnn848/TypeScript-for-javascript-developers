export {};

/*
静的メンバー
毎回newでインスタンスを作らなくてもメンバーへアクセスできる
クラス.メンバー名で呼び出し可能
変数だけでなく、関数も同様に呼び出し可能

*/

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Ryota';
  static lastName: string = 'Hashiba';

  static work() {
    // return `hey guys !! My name is ${firstName}`; <-- クラス名.インスタンス名にしないとエラー
    // return `hey guys !! My name is ${Me.firstName}`; <-- これでもいいが、Meと紐づいているので不自由
    return `hey guys !! My name is ${this.firstName}`; // <-- thisにしておけば、別クラスでも流用可能なのでおすすめ
  }
}

let me = new Me();
console.log(Me.isProgrammer); // expected: true
console.log(Me.work()); // expected: hey guys !! My name is Ryota
