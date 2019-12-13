// pages/goodsCar/goodsCar.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsCar:[
      {title:'校服',money:'200',number:'1',img:'../../images/1.jpg',checked:false,id:'1'},
      {title:'校服',money:'200',number:'1',img:'../../images/1.jpg',checked:true,id:'1'}
    ],
    allChecked: false,
    allMoney:'0',
    number: 0,
    // 弹框
    buttons: [{text: '取消'}, {text: '确定'}],
    dialogShow: false
  },
  // 商品单选
  enChange(e){
      console.log(e.target.dataset.id)
  },
  // 数量选择
  numChange(event) {
    console.log(event.detail);
  }, 
  // 全选
  onChange(e){
    this.setData({
      allChecked: e.detail
    });
  },

  click(e){
    console.log(e)
  },

  close(e){
    console.log(e)
  },
// 删除弹框
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'right':
        this.setData({
          dialogShow: true
      })
        break;
    }
  },
  // 删除确认
  tapDialogButton(e) {
    this.setData({
        dialogShow: false,
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