export {};

/*
MappedType : Mapメソッドのように、（in keyof 型）で要素を書き換えていくことができる
*/

type Profile = {
  name: string;
  age: number;
}
type PartialProfile = Partial<Profile>;


// keyof (文字列リテラルの型を全て取り出す)
type PropatyTypes = keyof Profile;

// 自分で作れる
type Optional<T> = {
  [P in keyof T]?: T[P] | null; // 繰り返し構文によって、受け取った型を一つずつオプショナルにしていく
};

type OptionalProfile = Optional<Profile>;
