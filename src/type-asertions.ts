export {};


/*
型アサーション
型推論に頼らず、更なる制約を加えることができる
互換性ある型（例えばany）に、さらに具体的な型指定をする（stringやnumberなどに変換する）ことができる
any型のlengthはうまく型推論できず、any型と推論されてしまう。
any型をアサーションによってStringと解釈させれば、原則通りstring.length --> number型 となる
インスタンスに型定義するのではなく、データそのもの（右辺）に型を紐付ける
*/

let name: any = 'Ham';
let length = name.length; // 型推論ではany型
length = 'foo'; // any型だと文字列を格納することもできてしまう(文字数はnumberになってほしい)

let length2: number = name.length; // （解決法その1）インスタンスに型定義する
let length3 = name.length as number; // （解決法その2）length自身に型定義する
let length4 = (name as string).length; // （解決法その2）nameに型定義する <--- 推奨
let length5 = (<string>name).length; // （解決法その3）nameに型定義する (as 型名 ではなく、ジェネリクスチックな記述も可能)
