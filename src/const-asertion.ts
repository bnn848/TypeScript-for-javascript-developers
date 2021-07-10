export {};

/*
型推論をさらに制約する as const
定数化することで readonly にできる
各プロパティにいちいちreadonlyを書く必要がない、ということ
オブジェクトがネストしている場合、配下の全ての要素をreadonlyにできるメリットがある
*/

let name = 'Ham'; // nameは型推論でstring型になる
name = 'Hash'; // 文字列型であれば上書き可能

let nickName = 'Bob' as const; // nameはそのまま文字列リテラル型で型推論される
// nickName = 'Tak'; <-- Bobでないのでエラー


/* オブジェクトの場合 */
let profile = {
  name: 'Ryota',
  height: 173
} as const;

// profile.name = 'Ham' <-- 'Ryota'でないのでエラー
// profile.height = 185 <-- 173でないのでエラー
