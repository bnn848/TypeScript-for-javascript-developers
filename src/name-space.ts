export {};

/*
名前空間について
同じ名前のものを同じ場所には作れない、という制約をつけることができる
フォルダ（名前空間）を分ければ同名のクラス（ファイル）を作れる

ただし、名前空間を用いると、インスタンス化する際にクラス名だけでは判別できなくなる
クラス名.プロパティ名 のように、名前空間名.クラス名で呼び出す
そのためには、クラスをexportする必要がある
名前空間はネストすることができる（呼び出し時にもドットで連結する必要がある）
*/

namespace Japanese { // フォルダA
  export namespace Tokyo {
    export class Person { // 外部アクセス可能にするにはexportする必要あり
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person { // 外部アクセス可能にするにはexportする必要あり
      constructor(public name: string) {}
    }
  }
}

namespace English { // フォルダB
  export class Person { // 外部アクセス可能にするにはexportする必要あり
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// JapaneseのPerson
const meTokyo = new Japanese.Tokyo.Person('ぼく'); // 名前空間.名前空間.クラス名(引数)
console.log(meTokyo.name); // インスタンス名.プロパティ名
const meOsaka = new Japanese.Osaka.Person('わい'); // 名前空間.名前空間.クラス名(引数)
console.log(meOsaka.name); // インスタンス名.プロパティ名

// EnglishのPerson
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);