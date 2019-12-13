// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     activeKey: 0,
    //  传输数据的id、默认第一个id
     listid: 1,
    //  左侧导航栏数据
     list:[
       {title:'产品中心',id:'1'}, 
       {title:'夏季',id:'2'},
       {title:'秋冬',id:'3'}
    ],
    //  右侧商品数据
    goods:[
      {text:'非常帅气的校服',id:'1',img:'../../images/1.jpg'},
      {text:'春季校服',id:'2',img:'../../images/2.jpg'},
      {text:'秋冬校服',id:'3',img:'../../images/3.jpg'}
    ]
  },

  click(e){
    console.log(e.target.id)
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