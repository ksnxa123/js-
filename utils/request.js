// 同时发送异步请求的次数
let ajaxTimes = 0;
export const request = (params)=>{
    ajaxTimes++;
    const baseurl = 'https://api-hmugo-web.itheima.net/api/public/v1';
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseurl+params.url,
            success:(result)=>{
                resolve(result)
            },
            fail:(err)=>{
                reject(err)
            }
        })
    })
}