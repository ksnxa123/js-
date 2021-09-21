import {requestPayment} from '../../utils/asyncWx'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'xa',
    age:23,
    flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('加载中....');
  },

  async clickMe(){
    try {
      // 1.判断缓存中有没有token
      const token = wx.getStorageSync('token');
      // 2.判断
      if(!token){ 
        wx.navigateTo({
          url: '../index2/index2',
        });
        return
      }
      console.log('token已经存在');
      // 3.获取订单。。。略
      // 4.发起预支付接口请求,获取支付参数...
      // 5.发起支付pay
      await requestPayment(pay)
      // 6.查询后台订单信息

      await showToast({title:"支付成功"})
    } catch (error) {
      await showToast({title:"支付失败"})
      console.log(error);
    }
  },
  
  click2(e){
    let age = e.currentTarget.dataset.age;
    wx.navigateTo({
      url: '../index2/index2?age='+age,
    });
  }
})

