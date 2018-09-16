<template>
    <el-form ref="form"
        :rules="rules"
        :model="form"
        @submit.native.prevent
        :class="[$style['form']]">
        <header :class="$style['header']">欢迎登录</header>
        <el-form-item prop="loginName">
            <el-input v-model="form.loginName"
                placeholder="登录名"
                maxlength="30"
                prefix-icon="bs-icon-user1">
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password"
                type="password"
                placeholder="密码"
                maxlength="30"
                prefix-icon="bs-icon-password">
            </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
            <captcha :change="onCaptchaChange" icon="bs-icon-captcha"></captcha>
        </el-form-item>
        <el-form-item>
            <loading-button
                :click="submit"
                label="登录"
                labelOnLoading="正在登录"
                :loading="isSubmitting"></loading-button>
        </el-form-item>
        <div :class="$style['links']">
            <router-link class="link" to="/">忘记密码</router-link>
            <span :class="$style['divider']">|</span>
            <router-link class="link" to="/">返回首页</router-link>
        </div>
    </el-form>
</template>

<script>
import IOT from 'IOT';
import captcha from './captcha.vue';
import loadingButton from '../common/loading_button.vue';

export default {
  components: {
    captcha,
    'loading-button': loadingButton
  },
  data() {
    return {
      form: {
        loginName: '',
        password: '',
        captcha: '',
      },
      isSubmitting: false,
      rules: {
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    onCaptchaChange(captcha) {
      this.form.captcha = captcha;
    },
    submit() {
      const thiz = this;
      thiz.$refs.form.validate(async (valid) => {
        if (valid) {
          thiz.isSubmitting = true;
          const ret = await IOT.postServerData('/login', Object.assign({}, thiz.form));
          thiz.isSubmitting = false;
          IOT.log(ret);
        }
      });
    }
  }
};
</script>

<style lang="scss" module>
    @import '@common-vars';

    .form {
        position: relative;
        top: 50%;
        transform: translateY(20%);
        background: #fff;
        margin: 0 auto;
        width: 396px;
        box-shadow: 0 0 5px #ccc;
        box-sizing: border-box;
        padding: 20px 50px;
        border-radius: 4px;
        & :global(.bs-icon-user1) {
            font-size: 20px;
            position: relative;
            top: 4px;
            left: -3px;
        }
        & :global(.bs-icon-captcha) {
            position: relative;
            top: 1px;
            font-size: 16px;
        }
        & :global(.bs-icon-password) {
            position: relative;
            top: 1px;
            left: 1px;
        }
        & :global(.el-input__icon) {
            color: $second-font-color;
        }
    }
    .header {
        text-align: center;
        font-size: 20px;
        margin: 10px 0 20px;
    }
    .links {
        text-align: center;
        padding: 5px;
        font-size: 14px;
    }
    .divider {
        margin: 0 10px;
    }
</style>
