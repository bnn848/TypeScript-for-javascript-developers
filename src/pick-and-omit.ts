export {};

/*
Pick<参照する型セット, 使いたい型制約> : 必要な型セットのみ利用する
Omit<参照する型セット, 不要な型制約> : 不要な型定義を除外する
*/

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick  nameとweightだけ利用したい場合
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

  //pickの処理内容
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

// Omit  
type SmallProfile = Omit<DetailedProfile, 'height'>

  //Omitの処理内容
  type MyOmit<T> = MyPick<DetailedProfile, 'name' | 'weight'>;
  // type MySmallProfile = MyOmit;