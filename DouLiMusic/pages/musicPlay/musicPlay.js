// pages/musicPlay/musicPlay.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        musicArr: [],
        musicIndex: 0,
        now_music: {},
        duration: 30000,
        currentTime: 0,
        btn_src: '/image/play_icon.png',
        storyContent: [],                   // 歌词数组
        nowtextIndex: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.pageInit(options.id)
    },

    pageInit: function(opid){
        this.setData({ musicArr: app.globalData.musicArr })                 // 同步全局数据
        const index = this.data.musicArr.findIndex(s => s.id == opid)
        this.setData({
            musicIndex: index
        })
        this.musicRefresh(this.data.musicArr[index])
    },

    musicRefresh: function(music){
        this.setData({
            now_music: {
                id: music.id,
                poster: music.poster,
                name: music.name,
                author: music.author,
                src: 'http://music.163.com/song/media/outer/url?id=' +  music.id + '.mp3'
            },
            nowtextIndex: 0,
            currentTime: 0,
        })
        this.lyricInit(music.musicLrc)
        this.audioInit()
    },

    lyricInit: function(musicLrc){
        let _this = this
        this.setData({
            storyContent: _this.sliceNull(_this.parseLyric(musicLrc))
        })
    },

    // src = http://music.163.com/song/media/outer/url?id= .mp3

    audioInit: function(){
        this.audioCtx = wx.createInnerAudioContext()
        this.audioCtx.src = this.data.now_music.src

        this.setData({ currentTime: 0 })
        this.audioCtx.onCanplay(()=>{
            this.audioCtx.duration                              // 初始化，否则无法读取duration
            console.log('oncanplay')
            let _this = this
            let intervalID = setInterval(()=>{
                if (_this.audioCtx.duration !== 0) {
                    this.setData({ duration: this.audioCtx.duration })
                    clearInterval(intervalID);
                }
            }, 500);
        })
        this.audioCtx.onPlay(()=>{
            this.setData({ btn_src: '/image/timeOut_icon.png' })
        })
        this.audioCtx.onTimeUpdate(()=>{
            this.setData({ currentTime: this.audioCtx.currentTime })
            this.lyricRefresh()
        })
        this.audioCtx.onPause(()=>{
            this.setData({ btn_src: '/image/play_icon.png' })
        })
        this.audioCtx.onEnded(()=>{
            this.cutSongBindtap()
        })
    },

    beginBindtap: function(){
        this.audioCtx.paused ? this.audioCtx.play() : this.audioCtx.pause()
    },

    cutSongBindtap: function(){
        const ind = (this.data.musicIndex+1)%this.data.musicArr.length
        this.changeSong(ind)
    },

    lastSongBindtap: function(){
        const ind = this.data.musicIndex-1 >= 0 ? this.data.musicIndex-1 : this.data.musicArr.length-1
        this.changeSong(ind)
    },

    changeSong(ind){
        this.setData({ musicIndex: ind })
        this.audioCtx.pause()
        this.musicRefresh(this.data.musicArr[ind])
    },

    progressBarBindchange: function(e){
        this.audioCtx.seek(e.detail.value)
        this.setData({ currentTime: e.detail.value })
    },
    
    lyricRefresh: function(){
        const ind = this.binarySearch(this.audioCtx.currentTime,this.data.storyContent)
        this.setData({
            nowtextIndex: ind
        })
    },

    parseLyric: function (text) {
        var lines = text.split('\n')
		var	pattern = /\[\d{2}:\d{2}.\d{2}\]/g
		var	result = []
		while (!pattern.test(lines[0]) ) {
			lines = lines.slice(1)
        }
		lines[lines.length - 1].length === 0 && lines.pop();
		lines.forEach((v , i , a )=>{
			var time = v.match(pattern)
			var	value = v.replace(pattern, '')
			time.forEach( (v1, i1, a1)=>{
				var t = v1.slice(1, -1).split(':')
				result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
			})
        })
		result.sort( (a, b) => {
			return a[0] - b[0]
        })
		return result
    },

    sliceNull: function (lrc) {
        let result = []
        lrc.map((item,index)=>{
            if(item[1] !== ""){
                result.push(lrc[index])
            }
        })
        return result
    },

    binarySearch: function(target,arr){
        // 找到最后一个小于target的值
        let less = -1
        let greater = arr.length
        while(less+1 != greater){
            const mid = parseInt((less+greater)/2)
            arr[mid][0]<=target ? less = mid : greater = mid
        }
        return less
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
        this.audioCtx.pause()
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        this.audioCtx.pause()
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