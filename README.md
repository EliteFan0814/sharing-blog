## sharing-blog
> A blog sharing platform built using vue.js.
> 一个使用 Vue 全家桶搭建的想法分享平台。

## 后端接口概览
1. 用户注册：POST /auth/register
2. 用户登陆：POST /auth/login
3. 判断登陆：GET /auth
4. 注销登陆：GET /auth/logout
5. 获取列表：GET /blog
6. 获取详情：GET /blog/:blogId
7. 创建博客：POST /blog
8. 修改博客：PATCH /blog/:blogId
9. 删除博客：DELETE /blog/:blogId

## 前端页面通览
1. index  首页
2. detail 想法详情页
3. users  用户详情页
4. regist 注册
5. login  登陆
6. myblog 我发布的想法
7. edit   编辑/发布我的想法
8. logout 退出登陆

## 项目建设过程

1. 使用 vue-cli 创建项目模板
   ```bash
   npm install -g vue-cli 全局安装 vue-cli
   vue init wepack sharing-blog 初始化 webpack 环境
   ...
   npm run dev
   ```
2. 根据页面构建 vue-router 路由和 vuex 状态管理
   vue-router 使用全局前置守卫
      
