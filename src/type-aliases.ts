export {};

type Mojiretsu = string; // Chamelcase
const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 28
};

// 型定義でexample1と同じ構成のprofile2に適用できる
type profile = {
  name: string;
  age: number;
};

const example2: profile2 = {
  name: 'Ham',
  age: 28
};

// profile2の型をexample1の構造と同じにする
type profile2 = typeof example1;


/*
型の別名をつけることができる
type xxx = 型
型設定を連動させることができる typeof xxx

*/