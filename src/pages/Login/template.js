import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(['login']),

    onLogin() {
      // 调用 Vuex 中的 login 函数，登陆并设置登录状态
      this.login({username: this.username, password: this.password})
        .then(()=>{
          // 登陆成功后跳转到之前页面，若路由没有记录则跳转到首页
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
}