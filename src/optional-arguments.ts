export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  
  if(printable) {
  console.log({bmi});
  }
  return bmi;
}


// 目標
// bmi(身長, 体重, console.logで出力するかどうか?) 3番目の引数をオプショナルに設定する
// bmi(1.74, 55, true)
// bmi(1.74, 55, false)
bmi(1.74, 55)



/*
オプション引数？
引数を省略してもエラーにならないように設定することができる
引数名のあとに？を加えることでオプショナルにできる

*/