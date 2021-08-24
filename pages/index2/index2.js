import {login} from '../../utils/asyncWx';
import {request} from '../../utils/request';
Page({
    async handleGetUserInfo(e) {
        try {
            // 1.获取用户信息
            const {encryptedData,rawData,iv,signature} = e.detail;
            // 2.获取小程序登录后的code
            const {code} = await login();
            const loginParams = {encryptedData,rawData,iv,signature,code}
            // 3.发送请求 获取用户的token
            const res = await request({url:"/users/wxlogin",data:loginParams,methods:"post"})
            console.log(res);
            // 4.把token存入缓存，同时跳转上一层
            wx.setStorageSync("token", token);
            wx.navigateBack({
                delta: 1
            });
        } catch (error) {
            console.log(error);
        }
    }
})