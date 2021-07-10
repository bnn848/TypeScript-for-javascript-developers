export {};

/*
ユーティリィタイプ
便利な型定義
Partial<型> : 型にtype Profileを受け取ることで、オプショナルな型定義として使える
Required<型> : 型にtype Profileを受け取ることで、必須要素として型定義できる

コンディショナルタイプ(必須)
三項演算子を用いながら、条件分岐を使った動的な型定義
*/

/* 型定義をまとめてするところ */
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

/* Partial型(全てオプショナル) */
type PartialType = Partial<Profile>;

/* Require型(全て必須) */
type RequiredType = Required<Profile>;