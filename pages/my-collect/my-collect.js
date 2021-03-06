// wx-js
// var app = getApp()
import utils from '../../utils/util'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    products: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this;
    console.log("options", options);
    wx.request({
      url: 'https://hackathon.jd.com/hackaton/collects/query',
      data: {
        userPin: 'test1'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success(res) {
        let data = res.data;
        if (data && data.success) {
          utils.formatImageUrl(data.data.products);
          _this.setData({
            products: data && data.data
          });
        }
      },
    });
  },
  /**
   * 去商品详情页
   */
  onGoDeatil() {
    wx.navigateTo({
      url: '/pages/product-detail/product-detail'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
