export {};

/* Array(配列)型 */
let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3]; // <--- 非推奨だが、型名<ジェネリクス>内に要素の型を記述できる
let string2: Array<string> = ['りんご', 'アップル', 'あぽー', ]

// string型の配列
let strings: string[] = ['新潟', '金沢', '福井'];

// 二次元配列
let nijigenHAiretsu: number[][] = [
  [50, 100],
  [50, 100]
];

// 複数の型を含む配列
let lethairetsu: (string | number | boolean)[] = [7, 'japan', false];
