<template>
    <div class="header">
      <el-row>
          <el-col :span="4">
            <a class="brand" href="javascript:viod(0)"><img src="../assets/img/taop_logo.png" alt="淘屏网"> </a>
          </el-col>
           <el-col :span="20">
              <div class="navbar">
                <div class="nav-wrap">
                    <div>
                        <img src="../assets/img/index-pt.png">
                        <p class="pt">点位列表</p>
                    </div>
                    <div>
                        <img src="../assets/img/index-um.png">
                        <p>上传素材</p>
                    </div>
                    <div>
                        <img src="../assets/img/index-ca.png">
                        <p>制作广告</p>
                    </div>
                    <div>
                        <img src="../assets/img/index-ia.png">
                        <p>投放广告</p>
                    </div>
                </div>
                <div class="user">
                    <div class="avator">
                        <img src="../assets/img/avator-default.png" alt="用户头像">
                    </div>
                    <div class="avator-info">
                        <p>屏主账号</p>
                        <p class="balance">余额：￥8568.83元</p>
                    </div>
                    <div class="iconfont icon-menu_logo" @click="showMenuDropdown = !showMenuDropdown"></div>
                    <el-collapse-transition>
                        <ul v-show="showMenuDropdown" class="menu-dropdown" :class="{'menu-active':showMenuDropdown}">
                            <li><span class="iconfont icon-material">我的素材</span></li>
                            <li><span class="iconfont icon-adv">我的广告</span></li>
                            <li><span class="iconfont icon-order">我的订单</span></li>
                            <li><span class="iconfont icon-inspect">我的监播</span></li>
                            <li><span class="iconfont icon-shop">优选店铺</span></li>
                            <li><span class="iconfont icon-avator">个人信息</span></li>
                            <li><span class="iconfont icon-out">退出</span></li>
                        </ul>
                    </el-collapse-transition>            
                </div>
            </div>
          </el-col>
      </el-row>
    </div>
</template>

<script>
import Vue from 'vue'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition)
export default {
  data(){
    return {
      showMenuDropdown: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.transition {
  -webkit-transition: all .2s;
  transition: all .2s;
}
.header {  
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1200px;
    height: 75px;
    padding-left: 20px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    z-index: 1;
    .brand {
      float: left;
      margin-top: 19px;
    }
    .navbar {
        float: right;
        .nav-wrap{
            float: left;
            margin-top: 6.5px;
            border-right: 1px solid #E5E5E5;
            >div{
                float: left;
                margin-left: 10px;
                margin-right: 20px;
                text-align: center;
                cursor: pointer;
                >p {
                    margin-top: 6px;
                    &.pt {
                        margin-top: 0;
                    }
                }
            }
        }
        .user {
            position: relative;
            float: left;
            .avator {
                float: left;
                padding-left: 20px;
                height: 56px;
                cursor: auto;
                >img {
                    float: left;
                    width: 50px;
                    height: 50px;
                    margin-top: 12.5px;
                    margin-right: 10px;
                    border-radius: 50%;
                    border: 1px solid #b3b3b3;
                }
            }
            .avator-info {
              float: left;
              margin: 18.5px 10px;
              cursor: auto;
              p {
                text-align: left;
                &.balance {
                  margin-top: 10px;
                }
              }
            }
            .icon-menu_logo {
              float: left;
              margin-top: 18.5px;
              padding-right: 10px;
              font-size: 36px;
              color: #F29956;
              cursor: pointer;
            }
            .menu-dropdown {
              position: absolute;
              top: 68px;
              width: 100%;
              max-height: 350px;
              box-shadow: 5px 0px 26px rgba(123,123,123,0.2);
              overflow: auto;
              z-index: 100;
              span {
                display: inline-block;
                width: 100%;
                height: 50px;
                line-height: 50px;
                padding-left: 80px;
                padding-right: 80px;
                text-align: left;
                font-size: 18px;
                .transition;
                &:before {
                  margin-right: 6px;
                  font-size: 22px;
                }
                &:hover {
                  background-color: #F8B551;
                  color: #FFF;
                }
              }
            }
        }
        
    }
}
</style>