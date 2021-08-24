// promise形式login
export const login = ()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            time:10000,
            success:(result)=>{
                resolve(result)
            },
            fail:(err)=>{
                rejected(err)
            }
        })
    })
}

// 微信支付
export const requestPayment = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.requestPayment({
            ...params,
            success: (result)=>{
              resolve(result)
            },
            fail: (err)=>{
                console.log(err);
            },
          });
    })
}