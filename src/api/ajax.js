/**
 * ajax请求模块
 * 返回： promise 对象(异步返回的数据是：response.data)
 */
import axios from 'axios';
import qs from 'qs';
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
 axios.defaults.withCredentials = true;
export default function ajax (url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        // 执行异步ajax请求
        let promise;
        if ( type === 'GET') {
            // 准备url query 参数数据
            let dataStr= ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' +data[key] + '&';
            });
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            // 发送 GET 请求
            promise = axios.get(url);
        } else {
            // 发送 POST 请求
            promise = axios.post(url, qs.stringify(data));
        }
        
        promise.then(function (response) {
            // 成功了调用resolve
            resolve(response.data);
        }).catch(function (error) {
            //失败了调用reject
            reject(error);
        });
    });

    
}