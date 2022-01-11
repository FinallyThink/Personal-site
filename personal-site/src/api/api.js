import Axios from './Axios';

const request = new Axios({
   baseUrl:"http://localhost:3000/"
});

//请求my-api案例
export const myApi = ()=>{
  return request.post('./myApi');
}
export const selfIntroductionApi = ()=>{
  return request.post('./post/selfIntroduction');
}
export const indexRequest = ()=>{
  const article = request.post('./post/getArticleList');
  return article;
}
