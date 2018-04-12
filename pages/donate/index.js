function gotoscan(){

    wx.showModal({
      title: '去扫描支付',
      content: '请从相册中选择二维码',
      success: function (res) {
        if (res.confirm) {
          // 只允许从相机扫码
          wx.scanCode({
            success: (res) => {
              console.log(res)
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
}

// pages/cashier/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  click_img: function (e) { 

    wx.saveImageToPhotosAlbum({
      filePath: '/image/donate_receive.png',
      success: function (res) {

        if (res.errMsg == 'saveImageToPhotosAlbum:ok') {
          gotoscan();
        }
      },
      fail: function (res) {
        console.error(res)
        wx.showToast({
          title: '图片保存失败',
          icon: 'none',
          duration: 2000
        })
       },
      complete: function (res) { },
    })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          console.log('保存图片未授权')
        } else {
          console.log('保存图片已授权')
        }
      }
    })
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