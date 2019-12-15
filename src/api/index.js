/**
 * 包含 n 个接口请求函数的模块
 * 函数的返回值依然是 promise 对象
 */
import ajax from './ajax'
const BASE_URL = '/cloudPublish'

// 1.用户名密码验证验证码登录
export const reqLogin = ({userName, password, checkCode}) => ajax(BASE_URL+`/taoping/taopingController/login`, {userName, password, checkCode}, 'POST');

//2.获取用户信息
export const reqUserInfo = () => ajax(`${BASE_URL}taoping/taopingController/getUserInfo`);

//3.获取所有的终端城市
export const reqDeviceCities = () => ajax(`${BASE_URL}/taoping/taopingController/getCountryIndex`);

//4.根据城市获取终端信息
export const reqDevicesByCity = ({city}) => ajax(`${BASE_URL}/taoping/taopingController/getCityIndexPage`, {city});
