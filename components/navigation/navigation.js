// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../utils/navigation"), a = e(require("../../utils/report")), i = require("../../utils/redirectTo"), o = "wxa/pages/offlinePay/index";

Component({
  properties: {
    text: {
      type: String,
      value: ""
    },
    color: {
      type: String,
      value: ""
    },
    mode: {
      type: Number,
      value: 1
    },
    isShow: {
      type: Boolean,
      value: !0
    },
    isShowNavigateButton: {
      type: Boolean,
      value: !0
    },
    isShowCustomService: {
      type: Boolean,
      value: !1
    },
    isShowReceiptEntance: {
      type: Boolean,
      value: !1
    },
    isSjt: {
      type: Boolean,
      value: !1
    },
    navbarZindex: {
      type: Number,
      value: 999999
    }
  },
  data: {
    isShow: !0,
    statusBarHeight: "".concat(50, "px"),
    navigationBarHeight: "".concat(100, "px")
    // statusBarHeight: "".concat((0, t.getStatusBarHeight)(), "px"),
    // navigationBarHeight: "".concat((0, t.getNavigationBarHeight)(), "px")
  },
  externalClasses: ["extra-class"],
  attached: function () {
    // var e = (0, t.getPageList)(), a = !0;
    // e.indexOf(o) >= 0 && (a = !1), this.setData({
    //     home: a,
    //     back: e.length > 1,
    //     isShow: (0, t.getCustomNavStatus)()
    // });
  },
  methods: {
    backHome: function () {
      // wx.reLaunch({
      //     url: "/".concat(o)
      // });
    },
    back: function () {
      // wx.navigateBack({
      //     delta: 1
      // });
    },
    handleContact: function (e) {
      // console.log(e.detail.path, e.detail.query), a.default.reportEvent("customClickContact");
    },
    goReceipt: function () {
      // this.properties.isSjt ? (0, i.openReceipt)("/pages/shelf/index/index") : (0, i.openReceipt)(), 
      // a.default.reportEvent("openReceipt");
    }
  }
});