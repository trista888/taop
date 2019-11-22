/**
 * 通过mutation间接更新state的多个方法对象
 */
import {
    RECEIVE_USERINFO,
    RECEIVE_DEVICECITIES,
    RECEIVE_DEVICESINFO
    
} from './mutation-types'
import {
    reqUserInfo, 
    reqDeviceCities,
    reqDevicesByCity
} from '../api'

export default {
    
    //异步获取用户信息
    async getUserInfo({commit},{userName, password, checkCode}) {
        //发送异步ajax请求
        const result = await reqUserInfo({userName, password, checkCode})
        //提交一个mutation
        if(result.result === 0) {
            const userInfo = result.data
            commit(RECEIVE_USERINFO, {userInfo})
        }
    },
    //异步获取终端城市数组
    async getDeviceCity({commit}) {
        //发送异步ajax请求
        const result = await reqDeviceCities()
        //提交一个mutation
        if(result.result === 0) {
            const deviceCities = result.data
            commit(RECEIVE_DEVICECITIES, {deviceCities})
        }
    },
    //异步获取终端城市数组
    async getDevicesInfo({commit},{city}) {
        //发送异步ajax请求
        const result = await reqDevicesByCity({city})
        //提交一个mutation
        if(result.result === 0) {
            const devicesInfo = result.data
            commit(RECEIVE_DEVICESINFO, {devicesInfo})
        }
    }
}