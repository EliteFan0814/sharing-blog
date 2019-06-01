import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },

  methods: {
    onCreate() {
      blog.createBlog({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then(res => {
          // 如果创建成功，使用 elementui 弹出成功提醒
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
    }
  }
}