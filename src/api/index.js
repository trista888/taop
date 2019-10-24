/**
 * 包含 n 个接口请求函数的模块
 * 函数的返回值依然是 promise 对象
 */
import ajax from './ajax'

// 1.用户名密码验证验证码登录
// reqLogin = (userName, password, checkCode)是对应参数的值比如 18022302572 12345 876f
//{userName, password, checkCode} 相当于 {userName: userName, password: password, checkCode: checkCode}
export const reqLogin = (userName, password, checkCode) => ajax(`/taoping/taopingController/login`, {userName, password, checkCode}, 'POST');

// 2.获取一次性验证码
export const reqCHeckCode = () => ajax(`/getCheckCode`);
