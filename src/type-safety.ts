export {};

let isFinished: boolean = true;
// isFinished = 1; <--- これはエラーになる

// unknown型
const kansu = (): number => 28;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10; // expected 28 + 10 = 38

console.log(typeof numberUnknown); // 型を取得してコンソールに出力 -> 現在のunknown指定の

if(typeof numberUnknown === 'number' ) { // unknownの変数の型で条件分岐することができる
  let sumUnknown = numberUnknown + 10;
}

/*
JavaScriptでは型が意図せずに上書きされてしまうことを防ぐことができない（型安全がない）
TypeScriptはコンパイル時にエラーを出すことで型安全を守ることができる
コーディング中にエラー（unknown型の場合）が出力され流ので型安全を実現できる
タイプガード（typeofで条件分岐）
肩にふさわしい処理をする
実行時エラーになることを極力回避する
*/