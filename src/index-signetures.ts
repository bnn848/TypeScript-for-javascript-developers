export {};

/*
インデックスシグネチャ
原則：あらかじめ型アノテーションで定義しなければならない
-> プロパティが多くなってくるとメンテナンスが大変になる
Keyに許容する型をオプショナル定義する
*/

// let profile: {name?: string; age?: number} = {}; <-- 普通は変数定義の際のアノテーションを適宜追加していく
let profile: {name?: string; age?: number} = {};
profile.name = 'Ham';
profile.age = 28;

// インデックスシグネチャの書き方
// { [ index: typeForIndex ]: typeForValue }
interface Profile {
  underTwenty: boolean; // 型だけを定義
  name: string
  // [ index: string ]: string | number; <-- シグネチャに含まれない型はエラー
  [ index: string ]: string | number | boolean; // 使う型を列挙
}

let profile2: Profile = { name: 'Ryo' , underTwenty: false}; // 型定義はindexSignatureに任せて、初期化のみ行うことができる

let profile1: { [ index: string ]: string | number } = {};
profile1.name = 'Tom';
profile1.age = 35;
profile1.nationality = 'Japan';