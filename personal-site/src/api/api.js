import Axios from './Axios';

const request = new Axios({
   baseUrl:"http://localhost:3000/"
});
//获取首页的自我介绍
export const selfIntroductionApi = ()=>{
  return request.post('./post/selfIntroduction');
}
//获取文章列表
export const indexRequest = ()=>{
  const article = request.post('./post/getArticleList');
  return article;
}
//获取文章实例
export const getArticle = (file)=>{
   return request.post('./Article/' + file);
}
//获取首页推荐列表
export const getIndexRecommend = ()=>{
  return request.post('./publicApi/indexRecommend');
}
//获取文章推荐列表
export const getArticleRecommend = ()=>{
  return request.post('./publicApi/articleRecommend');
}