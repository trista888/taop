/**
 * 直接更新state的多个方法对象
 */
import {
    RECEIVE_USERINFO,
    RECEIVE_DEVICECITIES,
    RECEIVE_DEVICESINFO
} from './mutation-types'
export default {
    [RECEIVE_USERINFO] (state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RECEIVE_DEVICECITIES] (state, {deviceCities}) {
        state.deviceCities = deviceCities
    },
    [RECEIVE_DEVICESINFO] (state, {devicesInfo}) {
        state.devicesInfo = devicesInfo
    },
}