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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
  }
})
