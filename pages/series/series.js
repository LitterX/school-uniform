// pages/series/series.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectId:0,
    tops:[
      {title:'销量',id:0},
      {title:'新品',id:1},
      {title:'价格',id:2},
    ],
    goods:[
      {image:"../../images/1.jpg",name:"中小学战术衣",newMoney:"399",oldMoney:"1999",time:"123",amount:"123",id:1},
      {image:"../../images/1.jpg",name:"中小学战术衣",newMoney:"299",oldMoney:"999",time:"123",amount:"123",id:2}
    ]
  },
  
  selectBtn(e){
    console.log(e.target.id);
    this.setData({
      selectId: e.target.id
    })
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