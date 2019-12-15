/**
 * 通过mutation间接更新state的多个方法对象
 */
import {
    RECEIVE_USER_INFO,
    RECEIVE_DEVICE_CITIES,
    RECEIVE_DEVICES_INFO
    
} from './mutation-types'
import {
    // reqLogin, 
    reqUserInfo,
    reqDeviceCities,
    reqDevicesByCity
} from '../api'

export default {
    
    // //异步登陆
    // async login({commit},{userName, password, checkCode}) {
    //     //发送异步ajax请求
    //     const result = await reqLogin({userName, password, checkCode})
    //     //提交一个mutation
    //     if(result.result === 0) {
    //         const userInfo = result.data
    //         commit(RECEIVE_USER_INFO, {userInfo})
    //     }
    // },
    //异步获取当前登陆的用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        //提交一个mutation
        if(result.result === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, {userInfo})
        }
    },
    // //同步记录用户信息
    // recordUser({commit},userInfo){
    //     commit(RECEIVE_USER_INFO, {userInfo})
    // },
    //异步获取终端城市数组
    async getDeviceCity({commit}) {
        //发送异步ajax请求
        const result = await reqDeviceCities()
        //提交一个mutation
        if(result.result === 0) {
            const deviceCities = result.data
            commit(RECEIVE_DEVICE_CITIES, {deviceCities})
        }
    },
    //异步获取终端城市数组
    async getDevicesInfo({commit},{city}) {
        //发送异步ajax请求
        const result = await reqDevicesByCity({city})
        //提交一个mutation
        if(result.result === 0) {
            const devicesInfo = result.data
            commit(RECEIVE_DEVICES_INFO, {devicesInfo})
        }
    }
}