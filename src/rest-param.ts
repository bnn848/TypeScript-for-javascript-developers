export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  let result = values.reduce(reducer)
  return result;
}

console.log(sum(1, 2, 3, 4, 5));


/*
デフォルト引数と同様、JS
引数の数が予測できない場合、...xxと書くことで全てを受け取ることができる
.reduce = 配列に対する処理
.reducer = 現在の数値と次の数値を評価する
*/