export {};

/* 型定義 */
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1; // 複数の型を&でつなぐことで新たな型を定義

/* 定義 */
const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

// const OchiaiHiromitsu: Batter1 = { <--- これはエラーになる
//   throwingSpeed: 154,
//   battingAverage: 0.367
// };

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}

/*
ピッチャーの球速とバッターの打率について型定義
一つの型定義に含まれていないオブジェクトを作ることができない

インターセクション
既存の複数の型定義を使って新たな型定義をする


*/