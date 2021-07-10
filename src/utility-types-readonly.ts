export {};

/*
ReadOnly : 読み取り専用の型定義、書換え無効
*/

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 28,
};

me.age++; // 28 + 1 = 29
console.log(me.age); // ちゃんと描き変わっている

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 58,
};

// friend.age++; <-- readonlyで読み取り専用となっているためエラー

/* Readonlyの内容 */
type Yomisen<T> = {
  readonly [P in keyof T]: T[P];
}
type YomisenProfile = Yomisen<Profile>;