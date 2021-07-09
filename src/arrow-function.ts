export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
  ): number => weight / (height * height);
console.log(bmi(1.73, 55));


/*
アロー関数のアノテーション
返り値の型定義は引数の直後にコロンで繋げる
無名関数bmi()自体に型定義するには引数の前に()内に引数の型定義、=>あとに返り値の型定義を記述する
*/