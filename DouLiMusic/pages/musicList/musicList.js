// pages/musicList/musicLsit.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        musicArr: [],
        hour: '',
        minute: '',
        second: '',
        saying: '不要熬夜~',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.pageInit()
    },

    pageInit: function(){
        this.setData({ musicArr: app.globalData.musicArr })                 // 同步全局数据
        wx.setNavigationBarTitle({
          title: '🌙晚安是' + this.data.musicArr.length.toString() + '首歌的时间',
        })
        this.timeUpdata()
    },

    timeUpdata: function(){
        let _this = this
        this.timer = setInterval(function(){
            let date = new Date()
            _this.setData({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            })
        },1000)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})