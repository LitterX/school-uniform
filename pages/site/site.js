// pages/site/site.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check:false,
    address:false,
    name:"",
    nameShow:true,
    site:"",
    siteShow:true,
    phone:"",
    phoneShow:true,
    // 地区选择
    region: [],
  },
  //  地区
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      address:true
    })
  },

  // 姓名验证
  inputName(e){
    // console.log(e.detail.value);
    let name = e.detail.value;
    if(name==""){
       this.setData({
         nameShow:true
       })
    }else{
      this.setData({
        name:name,
        nameShow:false
      })
    }
  },
  // 地址验证
  inputSite(e){
    let site = e.detail.value;
    if(site==""){
      this.setData({
        siteShow:true
      })
    }else{
      this.setData({
        siteShow:false,
        site:site
      })
    }
  },
  // 电话验证
  inputPhone(e){
    let phoneNumber = e.detail.value;
    if(phoneNumber.length === 11){
      var checked = this.checkPhoneNum(phoneNumber);
    }
    if(checked){
       this.setData({
         phone:phoneNumber,
         phoneShow:false
       })
    }else{
      this.setData({
        phoneShow:true
      })
    }
  },
  checkPhoneNum(phoneNumber){
    let str = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if(str.test(phoneNumber)){
      return true
    }else{
      return false
    }
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