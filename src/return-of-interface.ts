export {};

/*
インターフェイスで型定義
一つのクラスしか継承できない
implements : 複数クラスのインターフェイスを継承(実装)することはできる（つまみ食いできる）
*/

// 親クラス
class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

// インターフェイス
interface Kenja {
  ionazun(): void; // シグネチャ = 実装側で具体的にオーバーライドする
}
interface Senshi {
  kougeki(): void; // シグネチャ = 実装側で具体的にオーバーライドする
}

// 子クラス
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun'); // 内容を定義
  }
  kougeki(): void {
    console.log('kougeki'); // 内容を定義
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();