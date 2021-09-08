<template>
  <div id="app">
    <MhForm :model="model" :rules="rules" ref="mform"
      ><MhFormItem label="用户" prop="user"
        ><LInput v-model="model.user"></LInput></MhFormItem
      ><MhFormItem label="密码" prop="password"
        ><LInput v-model="model.password"></LInput
      ></MhFormItem>
      <MhFormItem label="Email" prop="email"
        ><LInput v-model="model.email"></LInput
      ></MhFormItem>
    </MhForm>
    <button @click="test">111</button>
    <button @click="test1">222清空</button>
  </div>
</template>

<script>
import Button from './components/button/button.vue'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      value1: '',
      show: true,
      model: { user: '', password: '', email: '' },
      rules: {
        user: [{ required: true, message: '请输入用户名' }],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
        ],
        email: [
          {
            type: 'email',
            required: true,
            message: '请输入邮箱',
          },
        ],
      },
      // rules: {
      //   name: {
      //     type: 'string',
      //     required: true,
      //     validator: (rule, value) => value === 'muji',
      //   },
      //   age: {
      //     type: 'number',
      //     asyncValidator: (rule, value) => {
      //       return new Promise((resolve, reject) => {
      //         if (value < 18) {
      //           reject('too young') // reject with error message
      //         } else {
      //           resolve()
      //         }
      //       })
      //     },
      //   },
      // },
    }
  },
  methods: {
    test() {
      this.$refs.mform.validate((valid) => {
        if (valid) {
          console.log(valid)
          console.log('ok')
        } else {
          console.log(valid)

          console.log('error')
        }
      })
      // this.$refs.mform.resetFields()
    },
    test1() {
      this.$refs.mform.resetFields()
    },
  },
  created() {},
}
</script>

<style lang="scss"></style>
