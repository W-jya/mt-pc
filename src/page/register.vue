<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link to="/index" class="site-logo"></router-link>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{name: 'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm">

        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
           <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from "@/api/index"
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if(value.length < 4 || value.legnth > 16){
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      }
      callback();
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value.length < 4 || value.legnth > 16){
        callback(new Error("密码必须为4-16位的字母数字下划线组成"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
        
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      msg:'',
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
            if (valid) {
              api.register(this.registerForm).then(res => {
                if(res.data.status == "success"){
                  this.msg = res.data.msg
                  this.open2();
                  this.$router.push({name:'login'});
                }else{
                  this.msg = res.data.msg
                  this.open4();
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
      });
    },
    input () {
      let reg = /^[A-Za-z0-9]+$/;
      let str = this.registerForm.password;
      if(str.length > 13 && str.match(reg)){
        this.strengthClass = 'strong'
      }else if(str.length > 8 && str.match(reg)){
        this.strengthClass = 'normal'
      }else if(str.length < 8 && str.match(reg)){
        this.strengthClass = 'week'
      }
    },
    open2() {
        this.$message({
          message: this.msg,
          type: 'success',
          duration:1000
        });
    },
    open4() {
        this.$message({
          message:this.msg,
          type: 'error',
          duration:1000,
        })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>