/**
 * 直接更新state的多个方法对象
 */
import {
    RECEIVE_USER_INFO,
    RECEIVE_DEVICE_CITIES,
    RECEIVE_DEVICES_INFO
} from './mutation-types'
export default {
    [RECEIVE_USER_INFO] (state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RECEIVE_DEVICE_CITIES] (state, {deviceCities}) {
        state.deviceCities = deviceCities
    },
    [RECEIVE_DEVICES_INFO] (state, {devicesInfo}) {
        state.devicesInfo = devicesInfo
    },
}