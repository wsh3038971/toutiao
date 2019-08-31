<template>
<!-- el-card是包裹el-form和el-form-item和el-inout -->
<!-- el-form表单的容器 -->
  <div class="login">
       <el-card class="box-card">
            <!-- 顶部图片 -->
            <img src="../../assets/img/logo_index.png" alt="黑马头条号">
            <!-- 表单 -->
            <!-- 数据校验需要先给el-form绑定数据对象 -->
            <!-- rules绑定验证规则 -->
            <el-form :model="loginForm" :rules="rules" style="margin-top:20px">
                <!-- 添加prop属性,绑定需要校验的字段名 -->
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
                    <el-button v-model="loginForm.check" style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item prop="check">
                    <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <!-- type="primary"element里的按钮组件 -->
                    <el-button style="width:100%;" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
       </el-card>
  </div>
</template>

<script>
export default {
  // 表单校验,先将数据和视图双向绑定,页面数据变化data里的属性可以立刻取到值
  // 定义表单内的数据(初始为空)
  data () {
    return {
      // 定义loginForm可以通过loginForm拿取到整个数据
      // 需要将loginForm数据对象绑定给el-form
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选协议
      },
      // 定义验证规则
      rules: {
        mobile: [
          // 验证表单是否填写内容,required为true表示必须有内容,message表示没有输入内容时的提示信息
          { required: true, message: '请输入手机号' },
          // 验证手机号格式是否正确,pattern正则表达式
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        // 验证码不能为空
        code: [{ required: true, message: '请输入验证码' },
          // 验证码为六位
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }],
        check: []
      }
    }
  }
}
</script>

<style lang='less' scoped>
// lang 为指定css语言
// scoped 为只针对当前组件样式求起作用,要不然会全局生效
    .login {
        background-image: url('../../assets/img/login_bg.jpg');
        /* vh单位为相对于可视区域的高度的百分比 */
        height: 100vh;
        // cover 将背景图片设置为覆盖整个可视区域
        background-size: cover;
        // flex布局,x\y轴水平居中
        display: flex;
        justify-content: center;
        align-items: center;
        .box-card {
            width: 400px;
            height: 330px;
            img {
                display: block;
                width: 200px;
                margin: 10px auto;
            }
        }
    }

</style>
