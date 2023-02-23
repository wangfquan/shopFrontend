// var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../@babel/runtime/helpers/objectSpread2"), n = require("../../../@babel/runtime/helpers/typeof"), o = require("../../../@babel/runtime/helpers/defineProperty"), r = t(require("../../../wxpay/utils/request")), s = t(require("../../../wxpay/api/fim")), u = t(require("../../../wxpay/utils/report")), c = require("../../../wxpay/config/takeaway"), h = t(require("../../../wxpay/config/global")), p = require("../../config/status"), d = require("./frame"), l = t(require("../../config/tabs")), f = require("../../../utils/merchant"), m = require("../../../utils/system"), v = t(require("../../../utils/update-manager")), g = require("../../../wxpay/utils/pay"), b = require("../../../wxpay/utils/redirectTo"), y = t(require("../../../utils/timer")), T = require("../../../utils/notice"), S = require("../../config/notice"), _ = require("../../../wxpay/lib/number-precision"), w = {
//   signInfo: "商家签名加载中…",
//   shopName: "商家信息加载中…",
//   mchIdentify: !0,
//   shopPhoto: "",
//   shopHeadimg: "",
//   shopPhone: "",
//   shopWechat: "",
//   shopAddress: "",
//   shopLat: "",
//   shopLon: ""
// };

Page({
  data: {
    canMiniapppay:!0,
      tabList: [
        {
         name:"下单" 
        }
      ],
      headerData: {
        signInfo: "本店主营新鲜蔬菜，海鲜等，无配送费",
        shopName: "BigFa蔬菜店 | 石羊店",
        mchIdentify: !0,
        shopPhoto: "http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",
        shopHeadimg: "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        shopPhone: "",
        shopWechat: "",
        shopAddress: "",
        shopLat: "",
        shopLon: ""
      },
      actInfo: {},
      activeTab: "EN_TAB_KEY_SLF",
      activedTabs: [],
      // pluginStatusTip: p.PLUGIN_LOAD_STATUS[p.LOADING],
      pluginStatusTip: "",
      options: {},
      currentTabIndex: 0,
      headerExpand: !0,
      loginDialogShow: !1,
      isMaster: !1,
      customServiceAuth: void 0,
      labelArr: [],
      showApplyGuide: !1,
      applyGuideInfo: {},
      state: {
          isMaster: !1,
          options: {}
      },
      paymentAmount: "",
      haveFimTab: !1,
      animateExpandClass: "",
      headerWrapHeight: 86,
      isSjt: !1
  },
  params: {
      onShowCount: 0
  },
  onLoad: function(t) {
      // var e = this;
      // this.setData({
      //     options: t
      // }), this.setState({
      //     options: t
      // }), this.getHeaderData(), this.getLabel(), this.getMenuButtonBoundingClientRect(), 
      // this.getTabData(t).then(function(t) {
      //     var a, i, n = t.tabList, r = t.current, s = t.can_miniapppay, u = t.haveFimTab, c = t.isSjt;
      //     e.initFrame();
      //     var h = (n[r] || {}).key || "";
      //     e.setData((o(a = {
      //         tabList: n,
      //         currentTabIndex: r,
      //         activeTab: h
      //     }, "activedTabs.".concat(h), !0), o(a, "canMiniapppay", s), o(a, "haveFimTab", u), 
      //     o(a, "isSjt", c), a)), e.onTabShowReport(h, (null === (i = n[r]) || void 0 === i ? void 0 : i.name) || ""), 
      //     e.setData({
      //         pluginStatusTip: p.PLUGIN_LOAD_STATUS[n && n.length ? p.SUCCESS : p.EMPTY]
      //     }), d.frame.event.emit("onAfterUpdateTabItems", e.tab);
      // }).catch(function(t) {
      //     e.setData({
      //         pluginStatusTip: p.PLUGIN_LOAD_STATUS[p.FAIL]
      //     });
      // }), this.applyPageMethod("onLoad"), (0, T.getNoticeList)().then(function(t) {
      //     if (t.length) {
      //         var a = t.find(function(t) {
      //             return t.module_id === S.NoticeIdMap.applyMinipro.module_id;
      //         });
      //         a && (e.setData({
      //             applyGuideInfo: a
      //         }), e.setApplyGuide(1e3 * a.delay_appear_time), u.default.reportEvent("showApplyGuide"));
      //     }
      // });
  },
  setApplyGuide: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3;
      // y.default.start(t, this.showApplyGuide);
  },
  interruptTimer: function() {
      // y.default.interrupt();
  },
  continueTimer: function() {
      // y.default.continue();
  },
  setState: function(t) {
      // if ("object" === n(t)) {
      //     var e = {};
      //     for (var a in t) this.data.state.hasOwnProperty(a) && (e[a] = t[a]);
      //     var o = i(i({}, this.data.state), e);
      //     this.setData({
      //         state: o
      //     });
      // }
  },
  getMenuButtonBoundingClientRect: function() {
      // var t = wx.getMenuButtonBoundingClientRect();
      // this.setData({
      //     headerWrapHeight: t.height + t.top + 20
      // });
  },
  getHeaderData: function() {
      // var t = this;
      // (0, f.getMerchantInfo)({
      //     success: function(e) {
      //         t.updateMerchant(e), t.setData({
      //             isMaster: e.is_master,
      //             customServiceAuth: e.is_auth_kf_msg
      //         }), t.setState({
      //             isMaster: e.is_master
      //         }), t.setCustomService();
      //     },
      //     fail: function(t) {
      //         u.default.reportEvent("getMerchantInfoFail", t);
      //     }
      // });
  },
  getLabel: function() {
      // var t = this;
      // (0, f.getlabels)().then(function(e) {
      //     t.setData({
      //         labelArr: e
      //     });
      // });
  },
  getTabData: function(t) {
      // return new Promise(function(e, a) {
      //     var n = t.scene ? {
      //         scene: t.scene
      //     } : {};
      //     r.default.request({
      //         url: "smbpappweb/main/home",
      //         data: n,
      //         success: function(t) {
      //             var a, n = t.tab_list || [], o = 0;
      //             a = n.some(function(t) {
      //                 return "EN_TAB_KEY_FRIEND" === t.tab_key;
      //             });
      //             var r = n.filter(function(t) {
      //                 return l.default.TAB_KEY.indexOf(t.tab_key) > -1 && "EN_TAB_KEY_FRIEND" !== t.tab_key;
      //             }).map(function(e, a) {
      //                 return e.tab_key === t.cur_item && (o = a), i(i({}, e), {}, {
      //                     key: e.tab_key,
      //                     name: e.tab_name,
      //                     scene: e.scene
      //                 });
      //             }), s = n.find(function(t) {
      //                 return "EN_TAB_KEY_SLF" === t.tab_key;
      //             });
      //             return c.takeaway.shelfInfo = (null == s ? void 0 : s.shelf_info) || "", h.default.isSjt = !!t.is_sjt, 
      //             (0, v.default)(t.key_version || ""), t.tips && wx.showToast({
      //                 icon: "none",
      //                 title: t.tips,
      //                 duration: 2e3
      //             }), e({
      //                 tabList: r,
      //                 current: o,
      //                 can_miniapppay: t.can_miniapppay,
      //                 haveFimTab: a,
      //                 isSjt: t.is_sjt
      //             });
      //         },
      //         fail: function(t) {
      //             return a(t);
      //         }
      //     });
      // });
  },
  getActivityInfo: function() {
      // var t = this;
      // return a(e.default.mark(function a() {
      //     var i;
      //     return e.default.wrap(function(e) {
      //         for (;;) switch (e.prev = e.next) {
      //           case 0:
      //             return e.next = 2, s.default.getActivityInfo({
      //                 force: !0
      //             });

      //           case 2:
      //             i = e.sent, t.setData({
      //                 actInfo: i
      //             });

      //           case 4:
      //           case "end":
      //             return e.stop();
      //         }
      //     }, a);
      // }))();
  },
  setAnimateTime: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.detail, a = void 0 === e ? {
      //     indexPageAnimateTime: .3
      // } : e, i = a.indexPageAnimateTime;
      // this.setData({
      //     animateExpandClass: "hd-wrap-expand".concat(i)
      // });
  },
  initFrame: function() {
      // d.frame.init(this);
  },
  toggleHeader: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
      // this.setData({
      //     headerExpand: !this.data.headerExpand
      // }), this.applyHeaderAnimateCallback(t);
  },
  collapseHeader: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
      // this.setData({
      //     headerExpand: !1
      // }), this.applyHeaderAnimateCallback(t);
  },
  expandHeader: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
      // this.setData({
      //     headerExpand: !0
      // }), this.applyHeaderAnimateCallback(t);
  },
  applyHeaderAnimateCallback: function() {
      // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
      // setTimeout(function() {
      //     t();
      // }, 400);
  },
  getHeaderStatus: function() {
      // return +this.data.headerExpand;
  },
  onPageScroll: function(t) {
      // this.applyPageMethod("onPageScroll", t);
  },
  applyPageMethod: function(t, e) {
      // var a = this.data.activeTab, i = this.selectComponent("#".concat(a));
      // if (i && "function" == typeof i[t]) return i[t].call(i, e);
  },
  applyTabMethod: function(t, e) {
      // var a = this.selectComponent("#".concat(e));
      // if (a && "function" == typeof a[t]) return a[t].apply(a);
  },
  onShow: function() {
      // if (this.getActivityInfo(), this.applyPageMethod("onShow"), 0 !== this.params.onShowCount) {
      //     var t = this.getCurTabItem();
      //     this.onTabShow({
      //         detail: t,
      //         type: "onShow"
      //     }), this.updateSignature(), this.continueTimer();
      // } else this.params.onShowCount = 1;
  },
  onReady: function() {
      // var t = this, e = setInterval(function() {
      //     var a = t.data.activeTab;
      //     a && (t.applyTabMethod("onTabShow", a), clearInterval(e));
      // }, 100);
      // this.applyPageMethod("onReady");
  },
  onHide: function() {
      // this.applyPageMethod("onHide");
      // var t = this.getCurTabItem();
      // this.onTabHide({
      //     detail: t
      // }), this.interruptTimer();
  },
  onUnload: function() {
      // this.applyPageMethod("onUnload");
      // var t = this.getCurTabItem();
      // this.onTabHide({
      //     detail: t
      // }), this.setData({
      //     pluginTabData: {},
      //     pluginFrames: {},
      //     tabList: [],
      //     headerData: w,
      //     currentTabIndex: 0,
      //     headerExpand: !0,
      //     loginDialogShow: !1
      // }), this.params.onShowCount = 0, (0, f.clearMerchantInfo)();
  },
  onPullDownRefresh: function() {
      // this.applyPageMethod("onPullDownRefresh");
  },
  onReachBottom: function() {
      // this.applyPageMethod("onReachBottom");
  },
  onShareAppMessage: function(t) {
      // return this.applyPageMethod("onShareAppMessage", t);
  },
  onResize: function(t) {
      // this.applyPageMethod("onResize", t);
  },
  onTabItemTap: function(t) {
      // this.applyPageMethod("onTabItemTap", t);
  },
  setActiveTab: function(t) {
      // var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      // if (this.data.tabList.length) {
      //     "number" != typeof t && u.default.reportEvent("setActiveTabError", {
      //         index: t
      //     });
      //     var a = this.data.tabList[t].key;
      //     if (e) {
      //         var i = this.getCurTabItem();
      //         this.onTabHide({
      //             detail: i
      //         }), this.onTabShow({
      //             detail: {
      //                 index: t
      //             }
      //         });
      //     }
      //     this.setData(o({
      //         currentTabIndex: t,
      //         activeTab: a
      //     }, "activedTabs.".concat(a), !0));
      // }
  },
  onTabShow: function(t) {
      // var e, a, i;
      // if (this.data.tabList.length) {
      //     var n = null === (e = null == t ? void 0 : t.detail) || void 0 === e ? void 0 : e.index, o = this.getCurTabItem();
      //     (t.type || n !== o.index) && (this.setActiveTab(n), this.applyTabMethod("onTabShow", this.data.tabList[n].key), 
      //     this.onTabShowReport((null === (a = this.data.tabList[n]) || void 0 === a ? void 0 : a.key) || "", (null === (i = this.data.tabList[n]) || void 0 === i ? void 0 : i.name) || ""));
      // }
  },
  onTabHide: function(t) {
      // var e;
      // if (this.data.tabList.length) {
      //     var a = null === (e = null == t ? void 0 : t.detail) || void 0 === e ? void 0 : e.index;
      //     "number" == typeof a && (this.applyTabMethod("onTabHide", this.data.tabList[a].key), 
      //     u.default.reportPageTime("pages/index/index?tab=".concat(this.data.tabList[a].key)));
      // }
  },
  onTabShowReport: function(t, e) {
      // u.default.reportPV({
      //     page: "pages/index/index?tab=".concat(t),
      //     options: this.data.options,
      //     name: e || ""
      // });
  },
  getCurTabItem: function() {
      // var t = this.data, e = t.currentTabIndex, a = t.tabList;
      // return i(i({}, a[e]), {
      //     index: e
      // });
  },
  updateSignature: function() {
      // var t = this;
      // (0, f.getMerchantInfo)({
      //     force: !0,
      //     success: function(e) {
      //         t.updateMerchant(e);
      //     },
      //     fail: function(t) {
      //         u.default.reportEvent("getMerchantInfoFail", t);
      //     }
      // });
  },
  updateMerchant: function(t) {
      // this.setData({
      //     headerData: {
      //         shopPhoto: "".concat(t.mch_shop_photo, "/0"),
      //         shopHeadimg: t.mch_store_icon || "",
      //         shopName: t.mch_store_name || "",
      //         signInfo: t.mch_sign_info || "",
      //         shopPhone: t.mch_contact_phone || "",
      //         shopWechat: t.mch_contact_wechat || "",
      //         shopAddress: t.mch_store_address || "",
      //         shopLat: t.mch_store_lat || "",
      //         shopLon: t.mch_store_lon || "",
      //         mchIdentify: t.mch_identify || !1
      //     }
      // });
  },
  setCustomService: function() {
      // var t = wx.getStorageSync("showCustomServiceGuide");
      // !1 === this.data.customServiceAuth && !t && this.data.isMaster && (this.setData({
      //     showGuide: !0
      // }), wx.setStorage({
      //     key: "showCustomServiceGuide",
      //     data: !0
      // }), u.default.reportEvent("contactAuthDialogExpose"));
  },
  hideGuide: function() {
      // this.setData({
      //     showGuide: !1
      // });
  },
  goSetCustomServiceAuth: function() {
      // wx.navigateToMiniProgram({
      //     appId: "wx277c9f1d194fce2f",
      //     path: "",
      //     success: function() {},
      //     fail: function(t) {
      //         u.default.reportEvent("goSettingCustomServiceFail", JSON.stringify(t));
      //     }
      // }), u.default.reportEvent("merchantClickContactAuth");
  },
  showApplyGuide: function() {
      // var t = this;
      // this.setData({
      //     showApplyGuide: !0
      // }), setTimeout(function() {
      //     t.setData({
      //         animationClass: "guide-apply-appear"
      //     });
      // }, 1e3), (0, T.clearNoticeRemind)(S.NoticeIdMap.applyMinipro.module_id).then(function() {
      //     u.default.reportEvent("clearNoticeRemind", "module_id: ".concat(S.NoticeIdMap.applyMinipro.module_id));
      // });
  },
  closeGuideApply: function() {
      // var t = this;
      // this.setData({
      //     animationClass: ""
      // }), setTimeout(function() {
      //     t.setData({
      //         showApplyGuide: !1
      //     });
      // }, 1e3), u.default.reportEvent("closeGuideApply");
  },
  goApplyMinipro: function() {
      // var t, e = (null === (t = this.data.tabList[this.data.currentTabIndex]) || void 0 === t ? void 0 : t.scene) || "";
      // (0, b.openReceipt)("".concat(this.data.applyGuideInfo.jump_path, "?from=minipro&type=minipro&appid=").concat((0, 
      // m.getAppid)(), "&origin=/wxa/pages/offlinePay/index?scene=").concat(e)), this.closeGuideApply(), 
      // u.default.reportEvent("goGuideApply");
  },
  merchantTapRightBtn: function() {
      // this.data.isMaster ? wx.navigateTo({
      //     url: "/wxpay/pages/qrcode/qrcode"
      // }) : this.showPaymentHalfScreen();
  },
  showPaymentHalfScreen: function() {
      // this.setData({
      //     isShowPaymentHalfScreen: !0
      // });
  },
  hidePaymentHalfScreen: function() {
      // this.setData({
      //     isShowPaymentHalfScreen: !1,
      //     paymentAmount: ""
      // });
  },
  confirmPay: function(t) {
      // var i = this;
      // return a(e.default.mark(function a() {
      //     var n;
      //     return e.default.wrap(function(e) {
      //         for (;;) switch (e.prev = e.next) {
      //           case 0:
      //             n = t.detail.value, (0, g.requestFacetoFacePayment)({
      //                 amount: (0, _.times)(Number(n), 100)
      //             }), i.hidePaymentHalfScreen();

      //           case 3:
      //           case "end":
      //             return e.stop();
      //         }
      //     }, a);
      // }))();
  }
});