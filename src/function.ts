export {};

// 名前付き関数
function bmi1(height: number , weight: number): number {
  return weight / (height * height);
}
console.log(bmi1(1.73, 56));

// 無名関数
// let bmi2 = function(height: number, weight: number): number {
let bmi2: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
}
console.log(bmi2(1.73, 56));


/*
関数の型定義について
引数と返り値に型定義をする
関数に対する型アノテーションは()の後に: xxx と記述する

anonymous-function（無名関数）
引数アノテーション => 返り値アノテーション = function(引数)

*/