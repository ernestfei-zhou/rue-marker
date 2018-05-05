//index.js
var util = require('./../../utils/util.js');
//获取应用实例
const app = getApp()

var curIndex = 0;

Page({
  data: {
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true
    },
    buttonClicked: false, //是否点击跳转
    funcs:[
      {
        name: '前端',
        url: 'schedule',
        icon: 'schedule',
        bg: '#eacdd1',
        type: 'login'
      },
      {
        name: '后端',
        url: 'schedule',
        icon: 'search',
        bg: '#857e95',
        type: 'login'
      },
      {
        name: '数据库',
        url: 'schedule',
        icon: 'loan',
        bg: '#ab96c5',
        type: 'login'
      },
      {
        name: '门店',
        url: 'schedule',
        icon: 'classroom',
        bg: '#ab96c5',
        type: 'login'
      },
      {
        name: '品牌',
        url: 'schedule',
        icon: 'grade',
        bg: '#ab96c5',
        type: 'login'
      }
    ],
    motto: 'Hello World',
    userInfo: {
      avatarUrl: 'http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg'
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    autoplay: false,
    curIndex: 0,
    isEmpty: false, //当前查询出来的数据是否为空
    postsShowSwiperList: [
      {
        id:"1",
        publisherId:"1",
        title:"聚合支付轻松对接",
        actPic:"http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
      },
      {
        id: "2",
        publisherId: "2",
        title: "优秀品牌打造",
        actPic: "http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
      },
      {
        id: "2",
        publisherId: "2",
        title: "优秀品牌打造",
        actPic: "http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
      }
    ], //轮播图显示活动信息
    postsList:[
      {
        id:"1",
        actPic: "http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
        publisherId:"1",
        content:"芸创客空间初次见面，请多多包涵！",
        publisherPic:"http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
        publisherName:"飞飞的🐷",
        pubtime:"23",
        commentnum:"0",
        likenum:"0",
        acttype:"1",
        acttypename:"个人",
        title:"这是信息的标题",
        endtime:"2018-05-06",
        address:"浙江杭州",
      }
    ],//最新动态
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //点击搜索
  click_search: function () {
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      // console.log(getCurrentPages())
      // wx.navigateTo({
      //   url: '/pages/search/search',
      // });
    }
  },

  //首页切换图片
  onSwiperChange: function (event) {
    curIndex = event.detail.current
    this.changeCurIndex()
  },
  changeCurIndex: function () {
    this.setData({
      curIndex: curIndex
    })
  },
  onHide: function () {
    this.setData({
      autoplay: false
    })
  },

  //加载下一页
  loadMore: function () {
    wx.showLoading({
      title: '正在加载',
      mask: true
    });
    //一秒后关闭加载提示框
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var self = this;
    self.setData({
      isEmpty: true
    });
  },

  //-------

  //------------------------------------------------------------------------------

  handlerAvatarTap: function (e) {
    let { ui } = this.data;
    if (ui.offsetLeft == 0) {
      ui.offsetLeft = ui.menuWidth;
      this.setData({ ui: ui })
    }
  },


})
