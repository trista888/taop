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
                        <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="loginForm">
                            <el-form-item label="用户名" prop="userName">
                                <el-input v-model.trim="loginForm.userName" autocomplete="on" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="密  码"  prop="password">
                                <el-input type="password" v-model.trim="loginForm.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="验证码"  prop="checkCode">
                                <el-input v-model.trim="loginForm.checkCode" placeholder="请输入验证码" class="check-code"></el-input>
                                <img class="code-img" :src="checkCodeUrl" title="点击更换" @click="createAuthCode()"/>
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
        return {
            loginForm: {
                userName: '',
                password: '',
                checkCode: ''
            },
            checkCodeUrl: 'https://120.79.90.12/cloudPublish/getCheckCode'
        }
    },

    methods: {
        /*
         * 更新验证码 
         */
        createAuthCode () {
           this.loginForm.checkCode = '';
           this.checkCodeUrl = this.checkCodeUrl+'?r='+ Math.random();
        },
        /**
         * 请求登录
         */
        submitForm (){
            const url = '/api/taoping/taopingController/login' ;
            let params = {};
            params.userName = this.loginForm.userName;
            params.password = md5.hex(this.loginForm.password);
            params.checkCode = this.loginForm.checkCode;
            

            // 发送ajax 请求
            this.$axios.post(url,this.$qs.stringify(params)).then(response => {
                window.console.log(response.data) // 得到返回结果数据
            })
            .catch(error => {
                window.console.log(error.message)
            })
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