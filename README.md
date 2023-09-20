# Twitter-frontend
基于 react 的仿生twitter的前端项目

# 执行
cd twitter-frontend
npm start

# 发送接口
request: get, post, put, patch, delete这样，就是一个工具类
service：const getUser = (params) = get('/user', params).then((res) => {
  return res;
});

# 后端的一个web server
使用的json-server，本质就是一个用node的后端服务