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

# React五步法
Step 1: Break the UI into a component hierarchy. ...
Step 2: Build a static version in React. ...
Step 3: Find the minimal but complete representation of UI state. ...
Step 4: Identify where your state should live. ...
Step 5: Add inverse data flow.