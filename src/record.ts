export {};

/*
Record型 : 2つの型引数を持つ特殊な型
再起的に共通の型指定を行う

Record<K, T>
K: Union(複数選択)型
T: 共有させたい型定義
*/

// type Prefectures = 'Tokyo' | 'Osaka' | 'Fukuoka'; <-- Niigataが含まれないというエラー
type Prefectures = 'Tokyo' | 'Osaka' | 'Fukuoka' | 'Niigata';
type InfectionInfo = {
  pref_name: string;
  confirmed_cases: number
};

// 共通の型定義を持ちたい
// 一つずつアノテーションするのはキツイ
// const japan: {
//   Tokyo: InfectionInfo;
//   Osaka: InfectionInfo;
//   Fukuoka: InfectionInfo;
//   ...
// } = {
const japan: Record<Prefectures, InfectionInfo> = { // Record<K, T>
  Tokyo: {pref_name: '東京', confirmed_cases: 1990},
  Osaka: {pref_name: '大阪', confirmed_cases: 20},
  Fukuoka: {pref_name: '福岡', confirmed_cases: 800},
  // Niigata: {pref_name: '新潟', confirmed_cases: true}, <-- InfectionInfo.confirmed_casesにbooleanがないのでエラー
  Niigata: {pref_name: '新潟', confirmed_cases: 5}
}

console.log(japan);