export {};

/*
マイナンバーカードを作る
名前とナンバーという２つのインスタンスを持つ
  owner : 所有者 * 名前を文字列で定義する
          初期化時に設定できる * constructorで初期値を設定
          途中で変更できない * privateかつget
          参照できる * getterメソッドを実装
  secretNumber : 個人番号
                初期化時に設定できる
                途中で変更できる
                参照できない

アクセサリーメソッド
private変数へ外から参照するための入り口出口

*/

class MyNumberCard {
  // メンバー変数
  // private owner: string; <-- getterメソッドと重複しているというエラーになる
  private _owner: string; // <-- 慣習的にアンダースコアをつけて識別する
  private _secretNumber: number;

  // インスタンスの初期化
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  /* 参照するためのgetterメソッド */
  get owner() {
    return this._owner;
  }

  /* 変更を可能にするためのsetterメソッド */
  set secretNumber(secretNumber: number) { // 外部で定義したnumberを受け取ることができる
    this._secretNumber = secretNumber; // 受け取ったnumberをクラスのプロパティに代入する
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Hum', 1234);
// card.owner = 'はむ'; <-- setterメソッドに含まれないのでエラー
// console.log(card._secretNumber); <-- getterメソッドに含まれないのでエラー
console.log(card.owner); // 参照可
card.secretNumber = 9876; // 変更可
console.log(card.debugPrint()); // 変更後のsecretNumberを表示
console.log(card.secretNumber) // undefined