export {};

/*
クラスのプロパティを読み取り専用にする
メンバー変数名の前に readonly をつけることで、private + get と同様の仕様になる
省略記法の場合、publicとインスタンス名の前に書く。（この場合publicを記述省略可能）
*/

class VisaCard  {
  constructor(public readonly owner: string) {};
}

let myVisaCard = new VisaCard('Hum');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'おにく'; <-- readonlyプロパティを変更できないのでエラーになる