// var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/objectSpread2"), a = e(require("../../../../@babel/runtime/regenerator")), i = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../../utils/system"), s = require("../../../config/takeaway"), n = require("../../../utils/redirectTo"), o = e(require("dayjs")), d = e(require("../../../frame/frame")), c = e(require("../../../utils/report")), u = require("../../../config/version"), h = require("../../../../utils/merchant"), l = require("../../../utils/takeaway/detail"), p = require("../address/index"), m = require("../../../utils/takeaway/request"), f = require("../../../utils/serverStorage"), g = getApp();

Page({
  data: {
    canSubmit: !0,//能否点击取支付
    tab: 1,//配送方式2自提 1外送 4堂食 8取货点
    tabList:[//配送方式列表
      {
        text:"外送",
        bit:1,//2自提 1外送 4堂食 8取货点

      },
      {
        text:"自提",
        bit:2,//2自提 1外送 4堂食 8取货点
      },
    ],
      // isIPhoneX: (0, r.isIphonex)(),
      isIPhoneX: !1,
      mch_store_address: "",
      customerRemark: "",
      menu: [],
      orderFeeList: [],
      totalNum: 0,
      totalPrice: 0,
      goodPrice: 0,
      dicountPrice: 0,
      showMoreText: "展开更多",
      showAll: !1,
      supportOrderType: 0,


      address: "",
      phone: "",
      name: "",
      latitude: "",
      longitude: "",
      pickerTime: "",
      pickerArray: [ [ "今天", "明天", "后天" ], [] ],
      pickerIndex: [ 0, 0 ],
      isShowVersionDialog: !1,
      textVersionDialog: "",
      minimumDeliveryAmount: 0,
      freeShippingFeeOrderAmount: 0,
      showPayment: !1,
      // supportPayonDelivery: s.takeaway.supportPayonDelivery,
      supportPayonDelivery: '',
      showSelectAddr: !1,
      // showUnifiedTip: (0, l.getShowUnifiedTip)(s.takeaway.orderFeeList),
      showUnifiedTip: '',
      unifiedAddrList: [],
      selectAddrIndex: -1,
      tableNo: void 0,
      instorePackage: !1,
      isShowInstorePackage: !1,
      showInstorePackageNew: !1,
      // showPackageFeeTip: "EN_PACKAGE_FEE_CALC_TYPE_BYGOODS" === s.takeaway.packageFeeType,
      showPackageFeeTip: !1,
      showPackageFeeText: !1,
      // fimActive: s.takeaway.fimActive,
      fimActive:!1,
      exclusionFriend: !1,
      outofRange: !1,
      needNewAddr: !1,
      isPreOrder: !1
  },
  params: {
      mark: new Date().getTime(),
      pickUpTimeSelector: [],
      pickup_time: 0,
      mch_store_lat: "",
      mch_store_lon: "",
      mch_store_address: "",
      mch_store_name: "",
      from: "",
      checkSameCity: !0
  },
  onLoad: function(e) {
      // var t = this;
      // this.setData({
      //     supportOrderType: s.takeaway.supportOrderType,
      //     minimumDeliveryAmount: s.takeaway.minimumDeliveryAmount,
      //     freeShippingFeeOrderAmount: s.takeaway.freeShippingFeeOrderAmount,
      //     tableNo: s.takeaway.tableNo,
      //     isPreOrder: s.takeaway.isPreOrderTime,
      //     nextBusinessTime: s.takeaway.nextBusinessTime
      // }), this.params.from = (null == e ? void 0 : e.from) || "", this.setFrontData(), 
      // this.getMerchantInfo(), this.handleInitTime(), this.handleInitAddress(), this.handleUnifiedAddr(), 
      // d.default.event.on("selectAddr", function(e) {
      //     e.latitude ? (t.setData({
      //         name: e.name,
      //         phone: e.phone,
      //         address: e.address + (e.address_house_number || ""),
      //         latitude: e.latitude,
      //         longitude: e.longitude,
      //         needNewAddr: !1
      //     }), t.checkOutofRange()) : (t.setData({
      //         name: "",
      //         phone: "",
      //         address: "",
      //         latitude: "",
      //         longitude: ""
      //     }), t.refreshCansubmit()), t.setAddress({
      //         name: e.name || "",
      //         phone: e.phone || "",
      //         address: (e.address || "") + (e.address_house_number || ""),
      //         latitude: e.latitude || "",
      //         longitude: e.longitude || ""
      //     });
      // }), this.setNew(), c.default.reportPV({
      //     page: "wxpay/pages/takeaway/detail/detail"
      // });
  },
  onShow: function() {
      // this.setData({
      //     customerRemark: s.takeaway.customerRemark
      // });
  },
  onUnload: function() {
      // (0, m.clearTabInfo)();
  },
  getMerchantInfo: function() {
      // var e = this;
      // (0, h.getMerchantInfo)({
      //     success: function(t) {
      //         e.setData({
      //             mch_store_address: t.mch_store_address
      //         }), e.params.mch_store_lat = t.mch_store_lat || "", e.params.mch_store_lon = t.mch_store_lon || "", 
      //         e.params.mch_store_address = t.mch_store_address || "", e.params.mch_store_name = t.mch_store_name || "";
      //     },
      //     fail: function(e) {
      //         c.default.reportEvent("getMerchantInfoFail", e);
      //     }
      // });
  },
  setNew: function() {
      // wx.getStorageSync("showInstorePackageNew") || (this.setData({
      //     showInstorePackageNew: !0
      // }), wx.setStorage({
      //     key: "showInstorePackageNew",
      //     data: !0
      // }));
  },
  notifyServer: function() {
      // this.data.tab === s.OrderType.Instore && this.data.instorePackage && (0, f.setServerStorage)("customerFirstRecommendPickUpViewed", "true", !1);
  },
  setFrontData: function() {
      // this.setFrontTab(), this.setBookingGood();
  },
  setFrontTab: function() {
      // this.setData({
      //     tabList: (0, l.getFrontTab)()
      // });
  },
  setBookingGood: function() {
      // var e = this.getShoppingCart(), t = (0, l.calShowMenu)(e);
      // this.setData({
      //     menu: t,
      //     totalNum: (0, l.getTotalNum)(e),
      //     goodPrice: (0, l.getGoodPrice)(e)
      // }), this.setFriendInfo(e), this.setServerData(t);
  },
  setFriendInfo: function(e) {
      // var t = e.some(function(e) {
      //     return e.discount_price;
      // });
      // s.takeaway.fimActive && t && "EN_MARKETING_TYPE_EXCLUSION_FRIEND" === s.takeaway.marketingType && this.setData({
      //     exclusionFriend: !0
      // });
  },
  setServerData: function(e) {
      // var t = this;
      // return i(a.default.mark(function i() {
      //     var r, n, o, d;
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             return a.next = 2, (0, l.getServerTab)();

      //           case 2:
      //             return r = a.sent, a.next = 5, (0, l.getDefaultTab)();

      //           case 5:
      //             return n = a.sent, a.next = 8, (0, l.getInstorePackageInfo)();

      //           case 8:
      //             o = a.sent, d = "AT_PACKAGE" === o, t.setData({
      //                 tab: n,
      //                 tabList: r,
      //                 totalPrice: (0, l.getTotalPrice)(n, s.takeaway.orderFeeList, e, {
      //                     instorePackage: d
      //                 }),
      //                 orderFeeList: (0, l.getOrderFeeList)(n, s.takeaway.orderFeeList, e, {
      //                     instorePackage: d
      //                 }),
      //                 discountPrice: (0, l.getDiscountPrice)(n, s.takeaway.orderFeeList),
      //                 instorePackage: d
      //             }), t.refreshCansubmit(), t.notifyServer();

      //           case 13:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, i);
      // }))();
  },
  getShoppingCart: function() {
      // var e = wx.getStorageSync("menuToOrder");
      // if (s.takeaway.shelfInfo === e.shelf_info) return e.menu;
  },
  handleUnifiedAddr: function() {
      // var e = this;
      // return i(a.default.mark(function t() {
      //     var i, r;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return i = (0, l.handleUnifiedAddr)(), t.next = 3, (0, l.selectDefaultAddrIndex)(i);

      //           case 3:
      //             r = t.sent, e.setData({
      //                 unifiedAddrList: i,
      //                 selectAddrIndex: r
      //             }), e.refreshCansubmit();

      //           case 6:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
  },
  handleInitTime: function() {
      // var e = this, t = new Date().getTime();
      // this.params.mark = t;
      // var a = (0, o.default)(t + 864e5), i = (0, o.default)(t + 1728e5), r = [];
      // s.TimeArr.forEach(function(t) {
      //     e.isInBusinessHour(Number(t.replace(":", ""))) && r.push(t);
      // }), this.genTodayTimeArr(r), this.genTimeArrCommon(a, r), this.genTimeArrCommon(i, r);
      // var n = [];
      // this.params.pickUpTimeSelector.forEach(function(e) {
      //     n.push(e.dayShow);
      // }), this.setData({
      //     "pickerArray[0]": n
      // });
  },
  handleInitAddress: function() {
      // var e = this;
      // return i(a.default.mark(function t() {
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             if (!(s.takeaway.shippingDist || s.takeaway.stepShippingFee.step_fee)) {
      //                 t.next = 7;
      //                 break;
      //             }
      //             return t.next = 4, e.getServerAddress();

      //           case 4:
      //             e.data.address || e.getStorageAddress(), t.next = 8;
      //             break;

      //           case 7:
      //             e.getStorageAddress();

      //           case 8:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
  },
  getServerAddress: function() {
      // var e = this;
      // return i(a.default.mark(function t() {
      //     var i, r, n, o;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return i = s.takeaway.shippingDist || s.takeaway.stepShippingFee.step_fee, t.prev = 1, 
      //             r = {}, t.next = 5, (0, p.getAllAddr)();

      //           case 5:
      //             (n = t.sent) && n.length && (o = n.findIndex(function(e) {
      //                 return e.is_recent_use;
      //             }), r = o >= 0 ? n[o] : n[0]), e.setData({
      //                 name: r.name || "",
      //                 phone: r.phone || "",
      //                 address: (r.address || "") + (r.address_house_number || ""),
      //                 longitude: r.longitude || "",
      //                 latitude: r.latitude || ""
      //             }), r.latitude && i && e.checkOutofRange(), e.refreshCansubmit(), t.next = 15;
      //             break;

      //           case 12:
      //             t.prev = 12, t.t0 = t.catch(1), c.default.reportEvent("getAllAddrError", JSON.stringify(t.t0));

      //           case 15:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t, null, [ [ 1, 12 ] ]);
      // }))();
  },
  getStorageAddress: function() {
      // var e = this;
      // wx.getStorage({
      //     key: "customer_addr",
      //     success: function(t) {
      //         var a, i;
      //         (null == t ? void 0 : t.data) && (e.setData({
      //             name: t.data.name || "",
      //             phone: t.data.phone || "",
      //             address: t.data.address || ""
      //         }), (s.takeaway.shippingDist || s.takeaway.stepShippingFee.step_fee) && (null === (a = null == t ? void 0 : t.data) || void 0 === a ? void 0 : a.name) && !(null === (i = null == t ? void 0 : t.data) || void 0 === i ? void 0 : i.latitude) && e.setData({
      //             needNewAddr: !0
      //         }), e.refreshCansubmit());
      //     },
      //     fail: function(e) {
      //         c.default.reportEvent("getStorageFail", e);
      //     }
      // });
  },
  checkOutofRange: function() {
      // var e = this;
      // (0, m.refreshCart)({
      //     customer_addr: {
      //         address: this.data.address,
      //         lon: this.data.longitude,
      //         lat: this.data.latitude
      //     }
      // }).then(function(t) {
      //     e.setData({
      //         outofRange: !1
      //     }), t.distance && s.takeaway.stepShippingFee.step_fee && e.setStepFee(t), e.refreshCansubmit();
      // }).catch(function(t) {
      //     var a;
      //     268488681 === (null === (a = null == t ? void 0 : t.data) || void 0 === a ? void 0 : a.errcode) && (e.setData({
      //         outofRange: !0
      //     }), e.refreshCansubmit());
      // });
  },
  setStepFee: function(e) {
      // var t = 0;
      // if ((e.distance || 0) <= s.takeaway.stepShippingFee.base_dist) t = s.takeaway.stepShippingFee.base_fee; else {
      //     var a = Math.ceil(((e.distance || 0) - s.takeaway.stepShippingFee.base_dist) / 1e3);
      //     t = a * s.takeaway.stepShippingFee.step_fee + s.takeaway.stepShippingFee.base_fee;
      // }
      // s.takeaway.orderFeeList.forEach(function(e) {
      //     "EN_ORDER_FEE_CATEGORY_SHIPPING" !== e.fee_category && "EN_ORDER_FEE_CATEGORY_SHIPPING_FEE_FULL_REDUCTION" !== e.fee_category || (e.fee_amount = t);
      // }), this.setData({
      //     orderFeeList: (0, l.getOrderFeeList)(this.data.tab, s.takeaway.orderFeeList, this.data.menu, {
      //         instorePackage: this.data.instorePackage
      //     }),
      //     totalPrice: (0, l.getTotalPrice)(this.data.tab, s.takeaway.orderFeeList, this.data.menu, {
      //         instorePackage: this.data.instorePackage
      //     }),
      //     discountPrice: (0, l.getDiscountPrice)(this.data.tab, s.takeaway.orderFeeList)
      // });
  },
  goAddress: function() {
      // s.takeaway.shippingDist || s.takeaway.stepShippingFee.step_fee ? this.data.address && this.data.latitude ? wx.navigateTo({
      //     url: "../address/list/list"
      // }) : this.data.latitude || (this.data.address ? wx.navigateTo({
      //     url: "../address/edit/edit?name=".concat(encodeURIComponent(this.data.name), "&phone=").concat(this.data.phone)
      // }) : wx.navigateTo({
      //     url: "../address/edit/edit"
      // })) : this.goOldAddress();
  },
  goOldAddress: function() {
      // var e = this;
      // wx.getSetting({
      //     success: function(t) {
      //         (null == t ? void 0 : t.authSetting) && !1 === t.authSetting["scope.address"] ? e.openSetting() : e.selectAddress();
      //     },
      //     fail: function(e) {
      //         wx.showModal({
      //             content: "获取授权信息失败，请稍后再试",
      //             showCancel: !1
      //         }), c.default.reportEvent("getSetting fail", JSON.stringify(e));
      //     }
      // });
  },
  openSetting: function() {
      // wx.showModal({
      //     title: "",
      //     content: "此功能需获得你的收货地址，请先授权",
      //     confirmText: "立即授权",
      //     success: function(e) {
      //         e.confirm && wx.openSetting({
      //             fail: function(e) {
      //                 wx.showModal({
      //                     content: "授权失败，请稍后再试",
      //                     showCancel: !1
      //                 }), c.default.reportEvent("openSetting fail", JSON.stringify(e));
      //             }
      //         });
      //     }
      // });
  },
  selectAddress: function() {
      // var e = this;
      // wx.chooseAddress({
      //     success: function(t) {
      //         e.setAddress({
      //             name: t.userName,
      //             phone: t.telNumber,
      //             address: t.provinceName + t.cityName + t.countyName + t.detailInfo
      //         });
      //     },
      //     fail: function(e) {
      //         var t;
      //         -1 === (null === (t = null == e ? void 0 : e.errMsg) || void 0 === t ? void 0 : t.indexOf("cancel")) && wx.showModal({
      //             content: "获取地址信息失败，请稍后再试",
      //             showCancel: !1
      //         }), c.default.reportEvent("selectAddress fail", JSON.stringify(e));
      //     }
      // });
  },
  setAddress: function(e) {
      // this.setData(e), (s.takeaway.shippingDist || s.takeaway.stepShippingFee.step_fee) && this.checkOutofRange(), 
      // this.refreshCansubmit(), wx.setStorage({
      //     key: "customer_addr",
      //     data: e
      // });
  },
  changeTab: function(e) {
      var t = Number(e.currentTarget.dataset.tab);
      this.setData({
          tab: t,
          // orderFeeList: (0, l.getOrderFeeList)(t, s.takeaway.orderFeeList, this.data.menu, {
          //     instorePackage: this.data.instorePackage
          // }),
          // totalPrice: (0, l.getTotalPrice)(t, s.takeaway.orderFeeList, this.data.menu, {
          //     instorePackage: this.data.instorePackage
          // }),
          // discountPrice: (0, l.getDiscountPrice)(t, s.takeaway.orderFeeList)
      })
      // this.refreshCansubmit();
  },
  initPicker: function() {
      // this.setData({
      //     "pickerArray[1]": this.params.pickUpTimeSelector[this.data.pickerIndex[0]].timeArrShow
      // });
  },
  isInBusinessHour: function(e) {
      // var t = s.takeaway.business.businessHourJudgeList, a = function(e) {
      //     for (var a = 0; a < t.length; ++a) if (Number(t[a].business_hours_begin) <= e && e <= Number(t[a].business_hours_end)) return !0;
      //     return !1;
      // };
      // return a(e) || a(e + 2400);
  },
  genTodayTimeArr: function(e) {
      // var t = new Date(), a = (0, o.default)(t.getTime()), i = t.getHours(), r = t.getMinutes(), s = {
      //     dayShow: "今天"
      // };
      // if (s.dayTime = a.format("YYYY/MM/DD"), s.timeArr = [], s.timeArrShow = [], this.isInBusinessHour(Number(a.format("HHmm")))) {
      //     s.timeArrShow.push("立即自提");
      //     var n = {};
      //     n.time = a.format("HH:mm"), n.type = "TYPE_NOW", s.timeArr.push(n);
      // }
      // var d = (0, o.default)(t.getTime() + 18e5);
      // if (this.isInBusinessHour(Number(d.format("HHmm")))) {
      //     s.timeArrShow.push("30分钟后");
      //     var c = {};
      //     c.time = d.format("HH:mm"), c.type = "TYPE_30MIN_LATER", s.timeArr.push(c);
      // }
      // var u = (0, o.default)(t.getTime() + 36e5);
      // if (this.isInBusinessHour(Number(u.format("HHmm")))) {
      //     s.timeArrShow.push("1小时后");
      //     var h = {};
      //     h.time = u.format("HH:mm"), h.type = "TYPE_1HOUR_LATER", s.timeArr.push(h);
      // }
      // e.forEach(function(e) {
      //     if (Number(e.replace(":", "")) >= 100 * i + r) {
      //         s.timeArrShow.push(e);
      //         var t = {};
      //         t.time = e, t.type = "TYPE_NORMAL", s.timeArr.push(t);
      //     }
      // }), 0 !== s.timeArrShow.length && this.params.pickUpTimeSelector.push(s);
  },
  genTimeArrCommon: function(e, t) {
      // var a = {};
      // a.dayShow = e.format("MM月DD日"), a.dayTime = e.format("YYYY/MM/DD"), a.timeArr = [], 
      // a.timeArrShow = [], t.forEach(function(e) {
      //     a.timeArrShow.push(e);
      //     var t = {};
      //     t.time = e, t.type = "TYPE_NORMAL", a.timeArr.push(t);
      // }), 0 !== a.timeArrShow.length && this.params.pickUpTimeSelector.push(a);
  },
  bindTimePickerChange: function(e) {
      // var t = e.detail.value, a = this.params.pickUpTimeSelector[t[0]], i = "".concat(a.dayShow, " ").concat(a.timeArrShow[t[1]]);
      // this.setData({
      //     pickerIndex: e.detail.value,
      //     pickerTime: i
      // }), this.refreshCansubmit();
  },
  bindTimePickerColumnChange: function(e) {
      // 0 === e.detail.column && this.setData({
      //     "pickerArray[1]": this.params.pickUpTimeSelector[e.detail.value].timeArrShow
      // });
  },
  showMoreGood: function() {
      // this.setData({
      //     showAll: !this.data.showAll,
      //     showMoreText: this.data.showAll ? "展开更多" : "收起更多"
      // });
  },
  gotoRemark: function() {
      // wx.navigateTo({
      //     url: "/wxpay/pages/takeaway/remark/remark?tab=".concat(this.data.tab)
      // });
  },
  finish: function() {
      // this.clearShoppingCart(), s.takeaway.customerRemark = "", d.default.event.emit("createOrderSucc");
  },
  // 
  submitOrder: function() {
    wx.redirectTo({
        url: "/pages/status/status?id=".concat('11', "&nopay=1")
    })

      // var e = this;
      // return i(a.default.mark(function t() {
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             if (e.validateInfo()) {
      //                 t.next = 2;
      //                 break;
      //             }
      //             return t.abrupt("return");

      //           case 2:
      //             return t.next = 4, (0, r.getSystemInfo)();

      //           case 4:
      //             if (t.t0 = t.sent, t.t0) {
      //                 t.next = 7;
      //                 break;
      //             }
      //             t.t0 = {};

      //           case 7:
      //             if ("devtools" === t.t0.platform) {
      //                 t.next = 14;
      //                 break;
      //             }
      //             return t.next = 11, e.checkVersion();

      //           case 11:
      //             if (t.sent) {
      //                 t.next = 14;
      //                 break;
      //             }
      //             return t.abrupt("return");

      //           case 14:
      //             s.takeaway.supportPayonDelivery ? e.setData({
      //                 showPayment: !0
      //             }) : e.sendCreateOrderReq("pay"), e.reportSouce(), e.updatePhone();

      //           case 17:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
  },
  sendCreateOrderReq: function(e) {
      // var a = this, i = this.getSubmitReq(e);
      // i.goods_list.length ? (0, m.createOrder)(i).then(function(r) {
      //     var n, o;
      //     "pay" === e ? a.callAppPay(r) : (a.finish(), wx.redirectTo({
      //         url: "/wxpay/pages/takeaway/status/status?id=".concat(r.order_no, "&nopay=1")
      //     })), c.default.reportEvent("createOrderSucc", JSON.stringify(t(t({}, {
      //         fimDiscount: !!s.takeaway.fimActive,
      //         exclusionFriend: a.data.exclusionFriend,
      //         marketingType: s.takeaway.marketingType
      //     }), i))), (null === (n = null == i ? void 0 : i.unified_shipping_addr) || void 0 === n ? void 0 : n.addr_id) && wx.setStorage({
      //         key: "selectedUnifiedAddrId",
      //         data: null === (o = null == i ? void 0 : i.unified_shipping_addr) || void 0 === o ? void 0 : o.addr_id
      //     });
      // }).catch(function(t) {
      //     if (t && "isCreating" === t) return console.log("repeatCreating"), void c.default.reportEvent("repeatCreating");
      //     a.createOrderFailHandle(t, i, e);
      // }) : wx.showToast({
      //     icon: "none",
      //     title: "请挑选商品"
      // });
  },
  createOrderFailHandle: function(e, t, a) {
      // var i, r, s, o = this, u = null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.msg, h = null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.errcode;
      // if (273021952 === h) wx.showModal({
      //     content: u,
      //     showCancel: !1,
      //     success: function() {
      //         wx.reLaunch({
      //             url: "/wxa/pages/offlinePay/index?scene=SLF"
      //         });
      //     }
      // }), c.default.reportEvent("createOrderFail-refresh"); else if (273021976 === h) {
      //     wx.showModal({
      //         content: u,
      //         showCancel: !1,
      //         success: function() {}
      //     });
      //     var l = (null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.data) || {};
      //     this.updateOrderInfo(l.unified_shipping_addr_list || [], l.order_spu_list, l.setting_info, t.fee_list, l.order_fee_list || []), 
      //     c.default.reportEvent("createOrderFail-update");
      // } else if (273021974 === h) {
      //     var p = new Date().getTime();
      //     this.params.mark = p, this.sendCreateOrderReq(a), c.default.reportEvent("createOrderFail-mark");
      // } else 268476758 === h ? wx.showModal({
      //     content: u,
      //     confirmText: "取消下单",
      //     cancelText: "确认",
      //     success: function(e) {
      //         e.cancel && (o.params.checkSameCity = !1, o.sendCreateOrderReq(a)), c.default.reportEvent("checkSameCity", e);
      //     }
      // }) : 268499549 === h ? wx.showModal({
      //     content: u,
      //     showCancel: !1,
      //     success: function(e) {
      //         e.confirm && (d.default.event.emit("addNecessaryGood"), (0, n.redirectToSinglePage)({
      //             url: "/wxa/pages/offlinePay/index",
      //             complete: function() {}
      //         }));
      //     }
      // }) : wx.showModal({
      //     content: u,
      //     showCancel: !1
      // });
  },
  callAppPay: function(e) {
      // var t;
      // c.default.reportEvent("callAppPay"), (null === (t = e.sjt_pay_info) || void 0 === t ? void 0 : t.sign_pkg) ? this.paySjt(e) : this.payFacetoface(e);
  },
  paySjt: function(e) {
      // var t, a, i, r, s, n = this, o = e.sjt_pay_info;
      // wx.requestPayment({
      //     timeStamp: String(null === (t = o.sign_pkg) || void 0 === t ? void 0 : t.timestamp),
      //     nonceStr: null === (a = o.sign_pkg) || void 0 === a ? void 0 : a.noncestr,
      //     package: null === (i = o.sign_pkg) || void 0 === i ? void 0 : i.package,
      //     signType: null === (r = o.sign_pkg) || void 0 === r ? void 0 : r.sign_type,
      //     paySign: null === (s = o.sign_pkg) || void 0 === s ? void 0 : s.pay_sign,
      //     success: function() {
      //         c.default.reportEvent("sjtpaySuccess"), n.finish(), setTimeout(function() {
      //             wx.redirectTo({
      //                 url: "/wxpay/pages/takeaway/status/status?id=".concat(e.order_no, "&pay=1")
      //             });
      //         }, 1e3), (0, m.paySuccNotify)(e.order_no, e.confirm_id);
      //     },
      //     fail: function(e) {
      //         c.default.reportEvent("requestsjtPayment-fail", JSON.stringify(e));
      //     }
      // });
  },
  payFacetoface: function(e) {
      // var t = this;
      // wx.requestFacetoFacePayment({
      //     confirm_token: e.confirm_id,
      //     success: function() {
      //         c.default.reportEvent("paySuccess"), t.finish(), setTimeout(function() {
      //             wx.redirectTo({
      //                 url: "/wxpay/pages/takeaway/status/status?id=".concat(e.order_no, "&pay=1")
      //             });
      //         }, 1e3), (0, m.paySuccNotify)(e.order_no, e.confirm_id);
      //     },
      //     fail: function(e) {
      //         c.default.reportEvent("requestFacetoFacePayment-fail", JSON.stringify(e)), "requestFacetoFacePayment:fail cancel" !== (null == e ? void 0 : e.errMsg) && c.default.reportEvent("requestFacetoFacePayment-failnocancel", JSON.stringify(e));
      //     }
      // });
  },
  reportSouce: function() {
      // try {
      //     d.default.getActiveTab(function(e) {
      //         e.spu_id && c.default.reportEvent("createOrderFromSinglePoster");
      //     }), this.params.from && "selfShare" === this.params.from && c.default.reportEvent("createOrderFromSingleCard");
      // } catch (e) {
      //     e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
      //     c.default.reportEvent("reportError");
      // }
  },
  selectPayment: function(e) {
      // var t, a = (null === (t = null == e ? void 0 : e.currentTarget) || void 0 === t ? void 0 : t.dataset).payment;
      // this.sendCreateOrderReq(a), this.hidePayment();
  },
  hidePayment: function() {
      this.setData({
          showPayment: !1
      });
  },
  hideSelectAddr: function() {
      this.setData({
          showSelectAddr: !1
      });
  },
  checkVersion: function() {
      // var e = this;
      // return i(a.default.mark(function t() {
      //     var i, s;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return t.next = 2, (0, r.checkPayVersion)();

      //           case 2:
      //             if (t.sent) {
      //                 t.next = 6;
      //                 break;
      //             }
      //             return e.setData({
      //                 isShowVersionDialog: !0,
      //                 textVersionDialog: u.PAY_VERSION_DIALOG_TEXT
      //             }), t.abrupt("return", !1);

      //           case 6:
      //             if (wx.requestFacetoFacePayment) {
      //                 t.next = 10;
      //                 break;
      //             }
      //             e.setData({
      //                 isShowVersionDialog: !0,
      //                 textVersionDialog: u.PAY_SDKVERSION_DIALOG_TEXT
      //             });
      //             try {
      //                 i = wx.getSystemInfoSync(), s = "version: ".concat(i.version, ", SDKVersion: ").concat(i.SDKVersion, ", platform: ").concat(i.platform, ", model: ").concat(i.model, ", system: ").concat(i.system), 
      //                 c.default.reportEvent("no-requestFacetoFacePayment", s);
      //             } catch (e) {
      //                 e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
      //                 c.default.reportEvent("getSystemInfoSync-error", JSON.stringify(e));
      //             }
      //             return t.abrupt("return", !1);

      //           case 10:
      //             return t.abrupt("return", !0);

      //           case 11:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
  },
  getSubmitReq: function(e) {
      // var a = this.data.menu.filter(function(e) {
      //     return "noPurchase" !== e.changeState;
      // }) || [];
      // a = a.map(function(e) {
      //     return e.has_spec ? t(t({}, e), e.checked_sku_item) : e;
      // });
      // var i = {
      //     shelf_info: s.takeaway.shelfInfo,
      //     total_amount: this.data.totalPrice,
      //     customer_remark: this.data.customerRemark,
      //     mark: this.params.mark,
      //     goods_list: a,
      //     fee_list: this.data.orderFeeList,
      //     order_type: s.OrderTypeMap[this.data.tab],
      //     customer_addr: {
      //         name: this.data.tab === s.OrderType.Delivery ? this.data.name : "",
      //         phone: this.data.tab !== s.OrderType.Instore ? this.data.phone : "",
      //         address: this.data.tab === s.OrderType.Delivery ? this.data.address : "",
      //         lon: this.data.tab === s.OrderType.Delivery ? this.data.longitude : "",
      //         lat: this.data.tab === s.OrderType.Delivery ? this.data.latitude : ""
      //     },
      //     pickup_time: 0,
      //     is_pay_on_delivery: "pay" !== e,
      //     unified_shipping_addr: {},
      //     over_discount_price_limit_version: !0,
      //     miniapp_scene: null == g ? void 0 : g.scene,
      //     miniapp_entry_time: s.takeaway.entryTime,
      //     check_same_city: this.params.checkSameCity
      // };
      // this.data.tab === s.OrderType.Instore && (this.data.tableNo && (i.table_no = Number(this.data.tableNo)), 
      // i.is_instore_package = this.data.instorePackage), this.data.tableNo && this.data.tab === s.OrderType.Instore && (i.table_no = Number(this.data.tableNo)), 
      // this.params.pickup_time && this.data.tab === s.OrderType.Pickup && (i.pickup_time = this.params.pickup_time);
      // var r = (0, l.getSingleFee)("EN_ORDER_FEE_CATEGORY_SHIPPING", s.takeaway.orderFeeList).fee_amount;
      // if (this.data.tab === s.OrderType.Delivery && s.takeaway.freeShippingFeeOrderAmount && s.takeaway.freeShippingFeeOrderAmount <= (0, 
      // l.getGoodPrice)() && r) {
      //     var n = (0, l.getSingleFee)("EN_ORDER_FEE_CATEGORY_SHIPPING_FEE_FULL_REDUCTION", s.takeaway.orderFeeList);
      //     i.fee_list = i.fee_list.concat(n);
      // }
      // if (this.data.tab === s.OrderType.Unified && this.data.selectAddrIndex >= 0) {
      //     var o = this.data.unifiedAddrList[this.data.selectAddrIndex];
      //     i.unified_shipping_addr = {
      //         addr_id: o.addrId,
      //         address: o.address,
      //         lon: o.lon,
      //         lat: o.lat,
      //         distribution_time: o.distributionTime / 1e3
      //     };
      // }
      // return i;
  },
  updatePhone: function() {
      // if (this.data.tab === s.OrderType.Pickup || this.data.tab === s.OrderType.Unified) {
      //     try {
      //         (0, l.updatePhoneUtil)(this.data.phone);
      //     } catch (e) {
      //         e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
      //         c.default.reportEvent("updatePhoneError", JSON.stringify(e));
      //     }
      //     (0, l.updatePhoneUtil)(this.data.phone);
      // }
  },
  clearShoppingCart: function() {
      wx.removeStorage({
          key: "menuToOrder"
      });
  },
  validateInfo: function() {
      // if (this.data.customerRemark.length > 48) return this.showModal("备注信息过长", "备注信息长度不能超过48个字符"), 
      // !1;
      // if (this.getSubmitPickupTime(), this.data.tab === s.OrderType.Delivery) {
      //     if (!this.data.name || !this.data.phone || !this.data.address) return this.showModal("请先完善收货资料", "请先完善收货资料再重试"), 
      //     !1;
      //     if ((0, l.getGoodPrice)() < this.data.minimumDeliveryAmount) return this.showModal("不足起送价", "请挑选商品至起送价再提交"), 
      //     !1;
      //     if (this.data.outofRange) return this.showModal("超出配送范围", "建议更换收货地址后重试"), !1;
      //     if (this.data.needNewAddr) return this.showModal("请先完善收货资料", "请重新定位收货地址"), !1;
      // }
      // return this.data.tab !== s.OrderType.Pickup || this.params.pickup_time && this.data.phone ? this.data.tab === s.OrderType.Unified && (this.data.selectAddrIndex < 0 || !this.data.phone) ? (this.showModal("请先完善收货资料", "请先完善配送信息再提交"), 
      // !1) : this.data.phone && this.data.phone.length < 11 ? (this.showModal("请先完善信息", "请先确认手机号码再提交"), 
      // !1) : !(this.data.isPreOrder && !(0, l.isSupportPreorder)(this.data.tab)) || (this.showModal("", "商家休息中，暂时无法下单"), 
      // !1) : (this.showModal("请先完善自提信息", "请先完善自提信息再提交"), !1);
  },
  getSubmitPickupTime: function() {
      // if (this.data.pickerTime) {
      //     var e = this.params.pickUpTimeSelector[this.data.pickerIndex[0]], t = e.timeArr[this.data.pickerIndex[1]];
      //     "TYPE_NORMAL" === t.type ? this.params.pickup_time = (0, o.default)("".concat(e.dayTime, " ").concat(e.timeArr[this.data.pickerIndex[1]].time, ":00")).unix() : "TYPE_NOW" === t.type ? this.params.pickup_time = (0, 
      //     o.default)().unix() : "TYPE_30MIN_LATER" === t.type ? this.params.pickup_time = (0, 
      //     o.default)(new Date().getTime() + 18e5).unix() : "TYPE_1HOUR_LATER" === t.type && (this.params.pickup_time = (0, 
      //     o.default)(new Date().getTime() + 36e5).unix());
      // }
  },
  showModal: function(e, t) {
      wx.showModal({
          title: e,
          content: t,
          showCancel: !1
      });
  },
  phoneInput: function(e) {
      // var t, a = this, i = this.data.phone, r = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.value;
      // this.setData({
      //     phone: r
      // }, function() {
      //     (!i && r || i && !r) && a.refreshCansubmit();
      // });
  },
  closeDialog: function() {
      this.setData({
          isShowVersionDialog: !1
      });
  },
  showMap: function() {
      // wx.openLocation({
      //     latitude: parseFloat(this.params.mch_store_lat),
      //     longitude: parseFloat(this.params.mch_store_lon),
      //     address: this.params.mch_store_address,
      //     name: this.params.mch_store_name
      // });
  },
  goBack: function(e) {
      // var t, a;
      // wx.navigateBack();
      // var i = null === (a = null === (t = null == e ? void 0 : e.target) || void 0 === t ? void 0 : t.dataset) || void 0 === a ? void 0 : a.key;
      // c.default.reportEvent("goBackToIndex", i);
  },
  refreshCansubmit: function() {
      // var e = (0, l.getSubmitStatus)(this.data);
      // this.setData({
      //     canSubmit: e
      // });
  },
  updateOrderInfo: function(e, t) {
      // var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0, n = this.getShoppingCart(), o = s.takeaway.freeShippingFeeOrderAmount && (0, 
      // l.getGoodPrice)(n) >= s.takeaway.freeShippingFeeOrderAmount, c = (0, l.getUpdateOrderList)(n, t), u = (0, 
      // l.getNewShoppingCart)(n, t), h = (0, l.getTotalNum)(c), p = (0, l.getGoodPrice)(u);
      // a.minimum_delivery_amount && (s.takeaway.minimumDeliveryAmount = a.minimum_delivery_amount, 
      // this.setData({
      //     minimumDeliveryAmount: a.minimum_delivery_amount
      // }), this.refreshCansubmit()), void 0 !== a.free_shipping_fee_order_amount && (this.setData({
      //     freeShippingFeeOrderAmount: a.free_shipping_fee_order_amount
      // }), s.takeaway.freeShippingFeeOrderAmount = a.free_shipping_fee_order_amount), a.package_fee_calc_type && (s.takeaway.packageFeeType = a.package_fee_calc_type);
      // var m = s.takeaway.freeShippingFeeOrderAmount && p >= s.takeaway.freeShippingFeeOrderAmount, f = (0, 
      // l.getOrderFeeList)(this.data.tab, r, c, {
      //     instorePackage: this.data.instorePackage
      // });
      // (0, l.getFeeChangeState)(i, f, m !== o), e.length && (s.takeaway.unifiedShippingAddrList = e, 
      // this.handleUnifiedAddr()), this.setData({
      //     menu: c,
      //     totalNum: h,
      //     goodPrice: p,
      //     totalPrice: (0, l.getTotalPrice)(this.data.tab, s.takeaway.orderFeeList, c, {
      //         instorePackage: this.data.instorePackage
      //     }),
      //     orderFeeList: f,
      //     discountPrice: (0, l.getDiscountPrice)(this.data.tab, s.takeaway.orderFeeList),
      //     showUnifiedTip: (0, l.getShowUnifiedTip)(s.takeaway.orderFeeList),
      //     showPackageFeeTip: "EN_PACKAGE_FEE_CALC_TYPE_BYGOODS" === s.takeaway.packageFeeType
      // }), d.default.event.emit("goodChanged", u);
  },
  selectUnifiedAddr: function() {
      // this.data.unifiedAddrList.length <= 1 || this.setData({
      //     showSelectAddr: !0
      // });
  },
  selectAddr: function(e) {
      // var t = e.currentTarget.dataset.index;
      // this.setData({
      //     selectAddrIndex: Number(t)
      // }), this.refreshCansubmit(), this.closeSelectDialog();
  },
  closeSelectDialog: function() {
      this.setData({
          showSelectAddr: !1
      });
  },
  clickPackageFeeText: function() {
      this.setData({
          showPackageFeeText: !0
      });
  },
  closePackageFeeTip: function() {
      this.setData({
          showPackageFeeText: !1
      });
  },
  showInstorePackage: function() {
      // this.setData({
      //     isShowInstorePackage: !0
      // }), this.data.showInstorePackageNew && this.setData({
      //     showInstorePackageNew: !1
      // });
  },
  closeInstorePackage: function() {
      this.setData({
          isShowInstorePackage: !1
      });
  },
  choseInstorePackage: function(e) {
      // var t, a, i = null === (a = null === (t = null == e ? void 0 : e.currentTarget) || void 0 === t ? void 0 : t.dataset) || void 0 === a ? void 0 : a.value;
      // this.data.instorePackage !== !!i ? (this.setData({
      //     instorePackage: !!i,
      //     orderFeeList: (0, l.getOrderFeeList)(this.data.tab, s.takeaway.orderFeeList, this.data.menu, {
      //         instorePackage: !!i
      //     }),
      //     totalPrice: (0, l.getTotalPrice)(this.data.tab, s.takeaway.orderFeeList, this.data.menu, {
      //         instorePackage: !!i
      //     })
      // }), this.closeInstorePackage()) : this.closeInstorePackage();
  }
});