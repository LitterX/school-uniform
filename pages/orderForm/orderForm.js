// pages/orderForm/orderForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    overMoney:0,
    freight:0.00,
    current:0,
    max:150,
    discounts:true,
    site:[]
  },

  goSite(){
    if(this.data.site==""){
      wx.navigateTo({
        url:"../site/site"
      })
    }else{
      wx.navigateTo({
        url:"../siteList/siteList"
      })
    }
    
  },

  limit: function (e)  {
    var value = e.detail.value;
    var length = parseInt(value.length);

    if  (length > this.data.noteMaxLen) {
      return;
    }

    this.setData({
      current: length
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})