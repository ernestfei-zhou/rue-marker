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
        id:'1',
        name: '翻译',
        url: 'open',
        icon: 'schedule',
        bg: '#eacdd1',
        type: 'open'
      },
      {
        id: '2',
        name: '搜索',
        url: 'schedule',
        icon: 'search',
        bg: '#857e95',
        type: 'search'
      },
      {
        id: '3',
        name: '数据库',
        url: 'schedule',
        icon: 'loan',
        bg: '#ab96c5',
        type: 'dbase'
      },
      {
        id: '4',
        name: '门店',
        url: 'schedule',
        icon: 'classroom',
        bg: '#ab96c5',
        type: 'store'
      },
      {
        id: '5',
        name: '品牌',
        url: 'schedule',
        icon: 'grade',
        bg: '#ab96c5',
        type: 'brand'
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
        acttypename:"翻译插件",
        title:"面对面翻译",
        actPic:"http://p9qjq59o4.bkt.clouddn.com/f2f.jpg",
      },
      {
        id: "2",
        publisherId: "2",
        acttypename: "个人",
        title: "优秀品牌打造",
        actPic: "http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
      }
    ], //轮播图显示活动信息
    postsList:[
      {
        id:"1",
        actPic: "http://p9qjq59o4.bkt.clouddn.com/f2f.jpg",
        publisherId:"1",
        content:"芸创客最新集成微信开源的面对面中英翻译插件，很棒的一个工具哟！",
        publisherPic:"http://p815u5i8v.bkt.clouddn.com/webwxgetmsgimgdog.jpeg",
        publisherName:"飞飞的🐷",
        pubtime:"23",
        commentnum:"0",
        likenum:"0",
        acttype:"1",
        acttypename:"翻译插件",
        title:"中英文对话神器，麻麻再也不用担心我的English啦！！！",
        endtime:"2018-06-4",
        address:"浙江杭州",
      }
    ],//最新动态
  },
  click_activity:function(e){
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      let actid = e.currentTarget.dataset.actid;
      let pubid = e.currentTarget.dataset.pubid;
      if (pubid === '1'){
        let re_url = '../model/f2f/index/index';
        wx.navigateTo({
          url: re_url
        });
      }else{
        wx.showModal({
          title: '提示',
          content: '功能后续更新，敬请期待哟！'
        })
      }
    }
  },
  //事件处理函数
  bindViewTap: function(e) {
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      let actid = e.currentTarget.dataset.actid;
      let pubid = e.currentTarget.dataset.pubid;
      if (pubid === 'open') {
        let re_url = '../model/f2f/index/index';
        wx.navigateTo({
          url: re_url
        });
      } else {
        wx.showModal({
          title: '提示',
          content: '功能后续更新，敬请期待哟！'
        })
      }
    }
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
