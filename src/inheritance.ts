export {};

/*
クラスの継承
親クラスにより抽象的なメソッドを記述した上で、子クラスでオーバーライドする
super() は親クラスのメソッドである
*/

// 親クラス
class Animal {
  constructor(public name: string) {};
  
  run(): string {
    return 'I can run';
  }
}

// 子クラス
class Lion extends Animal {
  public speed: number;
  
  // constructor(public name: string) {}; <-- super() 親クラスのコンストラクタを呼び出さないとエラー
  constructor(name: string, speed: number) {
    super(name); // 親クラスのコンストラクタそのものなので、nameの引数が必要

    this.speed = speed; // 新しいプロパティであるspeedをLionクラス内で初期化することを明示
  };
  
  run(): string {
    const parentMessage = super.run() // 親クラスのメソッドを実行できる 'I can run'
    return `${parentMessage} ${this.speed}km/h`;
  }
}

console.log(new Animal('Micky').run())
console.log(new Lion('Simba', 80).run())