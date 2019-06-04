<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/"><img src="../assets/sharing.png" alt="logo"></router-link></h1>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>

    <template v-if="isLogin">
      <h1>
        <router-link to="/"><img src="../assets/sharing.png" alt="logo"></router-link>
      </h1>
      <router-link to="/create">
        <i class="edit el-icon-plus"></i>
      </router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import auth from "@/api/auth";
window.auth = auth;

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isLogin", "user"])
  },

  methods: {
    ...mapActions(["checkLogin", "logout"]),

    onLogout() {
      this.logout();
    }
  },
  
  created() {
    this.checkLogin();
  }
};
</script>


<style lang="less">
@import "../assets/base.less";

header.no-login {
  padding: 10px 5%;
  background: @bgColor;
  display: grid;
  grid-template-columns: 50% 50%;
  h1{
    margin: 0;
    img{
      display: block;
      width: 80px;
    }
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns a{
    display: block;
    float: right;
  }
  
  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  padding: 10px 5%;
  align-items: center;
  background: @bgColor;

  h1 {
    margin: 0;
    padding: 0;
    flex: 1;
    img{
      display: block;
      width: 50px;
    }
    a {
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
}

@media(max-width: 768px){
  header.no-login .btns a{
    display: block;
    float: right;
  }
  .el-button{
    padding: 5px;
  }
  header.no-login button{
    margin: 30px 5px 0;
  }
  }
  
</style>