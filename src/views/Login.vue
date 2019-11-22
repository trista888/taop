<template>
    <div class="container">
        <div class="header">
            <img src="../assets/img/taop_logo.png" alt="淘屏网">
        </div>
        <div class="section">
             <el-row>
                 <el-col :span="10">
                     <img src="../assets/img/login-text.png" alt="点位随意选 广告轻松投">
                     <img src="../assets/img/login-img.png">
                 </el-col>
                 <el-col :span="4">
                     <div class="code">
                        <img src="../assets/img/login-code.png" alt="淘屏商家App 二维码">
                        <p>扫描二维码下载</p>
                        <p>淘屏商家App</p>
                     </div>
                 </el-col>
                 <el-col :span="10">
                     <div class="login-wrap">
                        <h1>登录</h1>
                        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
                            <el-form-item label="手机号" prop="userName">
                                <el-input type="tel" v-model.trim="loginForm.userName" autocomplete="on" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                            <el-form-item label="密  码"  prop="password">
                                <el-input type="password" v-model.trim="loginForm.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="验证码"  prop="checkCode">
                                <el-input v-model.trim="loginForm.checkCode" placeholder="请输入验证码" class="check-code"></el-input>
                                <img class="code-img" src="/cloudPublish/getCheckCode" alt="captcha" @click="getCaptcha" ref="captcha"/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm()">登录</el-button>
                                <el-button @click="register()">注册</el-button>
                            </el-form-item>
                        </el-form>
                     </div>
                     
                 </el-col>
             </el-row>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer'
import md5 from 'js-md5';
export default {
    components: {
        Footer
    },
    data () {
        var validatUserName = (rule, value, callback) => {
            if (!(/^1\d{10}$/.test(value))) {
                callback(new Error('手机号格式不正确!'));
            }else {
                callback();
            }
        };
        return {
            loginForm: {
                userName: '', //用户名/手机号
                password: '', //密码
                checkCode: '' //验证码
            },
            rules: { // 表单验证规则
                userName: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: validatUserName, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                checkCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ]
            },
            checkCodeUrl:  ''
        }
    },
    //测试接口
    mounted () {
        //this.$store.dispatch('getDeviceCity');
        //const city = '深圳市';
        //this.$store.dispatch('getDevicesInfo', {city});
    },
    methods: {
        /*
         * 更新验证码 
         */
        getCaptcha () {
            // 每次指定的src要不一样
           this.$refs.captcha.src = '/cloudPublish/getCheckCode?r='+ Math.random()
           this.loginForm.checkCode = '';
        },
        /**
         * 请求登录
         */
        async submitForm (){
            let {userName, password, checkCode} = this.loginForm;
            password = md5.hex(password);
            this.$store.dispatch('getUserInfo', {userName, password, checkCode});
        },
        /**
         * 跳转注册页面
         */
        register () {
            window.open('https://account.pubds.com/userRegister/registerController/toRegisterPage');
        }
    }
}
</script>
<style lang="less">
.container {
    width: 100%;
    height: 100%;;
    min-width: 1200px;
}
.header {
    width: 1200px;
    height: 75px;
    line-height: 75px;
    margin: 0 auto;
}
.section {
    width: 100%;
    height: 722px;
    background: url(../assets/img/login-bg.jpg) no-repeat 100% 100%;
    .el-row {
        height: 100%;
        .el-col {
            margin-top: 5%;
            text-align: center;
            .code {
                float: right;
                width: 156px;
                padding: 15px;
                margin-right: 15px;
                background-color: #FFF;
                border-radius: 10px;
                img {
                    width: 100%;
                }
                p {
                    margin-top: 8px;
                }
            }
            .login-wrap {
                width: 400px;
                padding: 22px 35px 22px 15px;
                background-color: #FFF;
                border-radius: 10px;
                h1 {
                    padding-left: 45px;
                    margin-bottom: 40px;
                    text-align: left;
                    font-size: 24px;
                    font-weight: normal;
                    color: #333;
                }
                .loginForm {
                    .el-form-item__label {
                        text-align: center;
                        font-size: 16px;
                        color: #333;
                    }
                    .el-form-item__content {
                        text-align: left;
                    }
                    .el-input.is-active .el-input__inner, .el-input__inner:focus {
                        border-color: #fec013;
                        outline: 0;
                    }
                    .check-code {
                        width: 53%;
                        margin-right: 10px;
                    }
                    .code-img {
                        display: inline-block;
                        height: 38px;
                        border-radius: 4px;
                        vertical-align: middle;
                        cursor:pointer;
                    }
                    .el-button {
                        width: 100%;
                        span {
                            font-size: 18px;
                        }
                        &.el-button--primary {
                            margin-bottom: 22px;
                            background-color: rgba(253,205,71,.9);
                            border-color: #fec013;
                            &:hover {
                                background-color: #fccc44;
                            }
                            span {
                                color: #fff;
                                font-size: 18px;
                            }
                        }
                        &.el-button--default {
                            margin-left: 0;
                            border: 1px solid #fec013;
                            span {
                                color: #fec013;
                            }
                        }
                    }
                    
                }
            }
        }
            
    }
}
</style>