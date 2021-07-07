import axios from 'axios';
export {};

let url: string = 'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

// any型（型が不明）
axios.get(url)
  .then(function (response) { // jsonで取得する

    // インターフェイスで配列内のそれぞれの型を指定できる
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    
    // let data: any = response.data
    // let data: object[] = response.data
    let data: Article[] = response.data
    data = [
      {
        id: 1,
        title: 'title',
        description: 'desc'
      }
    ]
    console.log(data);
  })

/*
axios => HTTP通信できるもの
Promiseはいろいろ入ったオブジェクト型
*/
