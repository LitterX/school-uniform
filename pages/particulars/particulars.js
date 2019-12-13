// pages/particulars/particulars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heardTitle:"商品详情",
    images:["../../images/1.jpg"],
    name:"好看的衣服",
    money:'199',
    oldMoney:'299',
    order:'3',
    expressFee:'10.00',
    goodsId:1,
    // 用户评价
    user:[],
     selects:[
      {title:'图文详情',id:0},
      {title:'用户评价',id:1}
    ],
    selectId:0,
    // 上拉菜单
    show:false,
    smallImage:'',
    buttonName:'',
  },

  selectBtn(e){
    console.log(e.target.id);
    this.setData({
      selectId: e.target.id
    })
  },
  onClickCart(){
    wx.switchTab({
      url:'../goodsCar/goodsCar'
    })
  },

  onClickShop(){
    this.setData({
      show:true,
      buttonName:"加入购物车"
    })
  },
  onClickBuy(){
    this.setData({
      show:true,
      buttonName:"立即购买"
    })
  },
  // 上拉菜单关闭
  close(){
    this.setData({ show: false });
  },

  onClose() {
    this.setData({ show: false });
  },
  // 上拉菜单中的商品数量
  onChange(event) {
    console.log(event.detail);
  },
   
  onGoto(e){
    let id = e.target.id
    wx.navigateTo({
      url:'../orderForm/orderForm?id='+id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let images = []
    let img = ''
    images = this.data.images
    for(var i=0;i<images.length;i++){
      img = images[0]
    }
    this.setData({
      heardTitle:this.data.name,
      smallImage:img
    })
    wx.setNavigationBarTitle({
      title: this.data.heardTitle
    })
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