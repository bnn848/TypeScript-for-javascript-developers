export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));


/*
関数に値が渡されない or undefinedの場合の初期値を設定する
アノテーションに = で値を設定する
引数に渡されなかった場合に初期値が使われる
*/