//app.js
App({
  globalData: {
    first:true,
    if_doctor:false,//医生信息
    if_information: false,//身份信息
    information:{},
    userInfo: {},//个人信息
    time:0,
    know:wx.getStorageSync('know')||false,
    if_test:true,
    //需要上传的数据
    data:{
      /*面积,红斑,鳞屑,厚度 */
      'result1':['','','',''],
      'level': '',//生活质量评分
      'result2': ['', '', '', '', '', '', ''],
      'checkvalue1': '',//是否诊断银屑病
      'time1': '',//诊断银屑病时间
      'checkvalue2': '',//是否诊断银屑病关节炎
      'time2': '',//诊断银屑病关节炎时间
    },
    evaluationResult:'',
    shareMessage: {
      title: '银屑病智能风险管理',
      imageUrl: '/images/share_img.png',
      path: '/pages/personal/index?sence='+wx.getStorageSync('scene')||wx.getStorageSync('appOpenid'),
    } 
  },
  onLaunch: function(e) {
    console.log(e);
    let userInfo = wx.getStorageSync('userInfo')||{};
    try {
      this.globalData.userInfo = userInfo;
    } catch (e) {
      console.log(e);
    }
  }
})