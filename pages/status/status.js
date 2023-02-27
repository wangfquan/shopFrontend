// var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../config/takeaway"), a = t(require("../../../utils/drawPic")), i = t(require("dayjs")), s = t(require("../../../utils/request")), o = t(require("../../../utils/report")), n = t(require("../../../frame/frame")), r = require("../../../utils/redirectTo");

Page({
    data: {
      order_create_time_text:"2022-08-29 18:00:00",
      done: !0,//显示支付详情
        mch_wechat_head_img: "",
        mch_wechat_nickname: "",
        mch_contact_wechat: "wangfuquan001",//商家微信号
        mch_contact_phone: "13882198375",//商家电话
        mch_store_address: "成都市天府大道环球中心101号11楼808号",//商家地址
        wx_head_img_url: "",//顾客头像
        wx_nickname: "",//顾客微信号
        is_boss: !1,//true是老板，false是顾客，是否是老板，根据不同状态显示不同
        mch_store_name:"富佳菜蔬",//店铺名称
        address: {//地址信息
            address: "",
            phone: 0,
            name: ""
        },
        order_create_time: 0,//订单创建时间
        state: "SHELF_ORDER_STATE_CONFIRM",//支付完成
        status_text: "已完成",//支付状态文案
        status_tips: "联系老板并通过微信转账等方式收款",//支付说明
        total_num: 10,//商品总数
        total_amount: 1000,//总金额
        customer_remark: "34234",//顾客留言
        goods_list: [//商品列表
          {
            image_url:"",//商品url
            is_flash_sale:!1,//是否秒杀标识
            total_original_price:"",//是否优惠价格
            name:"商品名称",//商品名称
            spec_value_name:"属性名称",
            prop_value_name_list:['属性1','属性2'],
            num:"3",//商品数量
            amount:"40",//总金额
          },
          {
            image_url:"",//商品url
            is_flash_sale:!0,//是否秒杀标识
            total_original_price:"",//是否优惠价格
            name:"商品名称2",//商品名称
            spec_value_name:"属性名称1",
            prop_value_name_list:['属性3','属性4'],
            num:"3",//商品数量
            amount:"40",//总金额
          }
        ],
        order_list: [],//订单列表
        fee_list: [//优惠列表
          {
            fee_name:"打包费",//优惠文案
            fee_category:"EN_ORDER_FEE_CATEGORY_PACKAGE",//优惠类型
            fee_calc_rule:"EN_ORDER_FEE_CALC_RULE_PACKAGE_BY_GOODS",//优惠规则
            fee_amount:444,//优惠金额展示
          },
          {
            fee_name:"满减送10元优惠",//优惠文案
            fee_category:"EN_ORDER_FEE_CATEGORY_SHIPPING",//优惠类型
            fee_calc_rule:"",//优惠规则
            fee_amount:6666,//优惠金额展示
          },
        ],
        id: "656504036423002342",//订单编号
        pickup_time_text:"今天",//自提时间
        daily_seq_code: "成都市天府大道环球中心101号",//商家地址
        //订单状态类型
        //ORDER_TYPE_PICKUP 到点自提
        //ORDER_TYPE_DELIVERY 商家外送
        //ORDER_TYPE_INSTORE 堂食点餐
        //ORDER_TYPE_UNIFIED_SHIPPING 定点取货
        order_type: "ORDER_TYPE_PICKUP",
        pickup_time: 0,
        unified_shipping_addr: {},
        table_no: void 0,
        prop_value_name_list: [],

        isShowActivityHalfScreen: !1,
        infoHalfScreen: {
            title: "",
            icon: "",
            content: "",
            description: "",
            cancel_text: "",
            btn_text: "",
            btn_path: ""
        },
        freeDeliveryFee: 200,//满减送减配送费金额
        isShowGuide: !1,
        isShowContact: !1,
        // isFriends: e.takeaway.isFriends,
        isFriends: !1,
        showPackageFeeText: !1,
        orderPic: "",
        canvasWidth: 0,
        canvasHeight: 0,
        isShowJoiningHalfScreen: !1,
        animationClassActionSheet: !1,
        customerGroupQrCode: "",
        can_join: !0,//是否可以加入群
        join_hint: "哈哈哈哈",//加群名称
        groupCodeReady: !0//群逻辑是否准备
    },
    params: {
        shareImgUrl: "",
        merchantInfo: {
            mch_store_lat: "",
            mch_store_lon: "",
            mch_store_address: "",
            mch_store_name: ""
        },
        orderId: "",
        checkNum: 0
    },
    static: {
        isLongPress: !1,
        longPressTimer: null
    },
    onLoad: function() {
        // var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.id || "";
        // this.params.orderId = a;
        // var i = t.shelf_info, s = void 0 === i ? "" : i;
        // s && (e.takeaway.shelfInfo = s), this.getOrderInfo(a, t.pay), this.getMerchantInfo(s), 
        // t.nopay && this.guideShare(), o.default.reportPV({
        //     page: "wxpay/pages/takeaway/status/status",
        //     options: t
        // }), this.getNewestGroupJoinCode();
    },
    checkActivity: function(t) {
        // var e = this;
        // s.default.request({
        //     url: "smbpappslf/order/getpaysuccesspage",
        //     data: {
        //         order_no: t
        //     },
        //     success: function(t) {
        //         var a = (t || {}).operation_type;
        //         (void 0 === a ? 0 : a) && e.setData({
        //             infoHalfScreen: t || {},
        //             isShowActivityHalfScreen: !0
        //         });
        //     },
        //     fail: function() {}
        // });
    },
    hideActivityHalfScreen: function() {
        // this.setData({
        //     isShowActivityHalfScreen: !1
        // });
    },
    gotoActivity: function() {
        // this.hideActivityHalfScreen();
        // var t = (this.data.infoHalfScreen || {}).btn_path, e = void 0 === t ? "" : t;
        // if (e) {
        //     var a = (e.split("?")[1] || "").split("&") || [], i = a.findIndex(function(t) {
        //         return 0 === t.indexOf("scene");
        //     });
        //     if (-1 !== i && i < a.length) {
        //         var s = a[i].split("=")[1] || "";
        //         s && n.default.setActiveTab({
        //             scene: s
        //         });
        //     }
        //     var o = a.findIndex(function(t) {
        //         return 0 === t.indexOf("from");
        //     }), c = {
        //         from: "TAKEAWAY_STATUS"
        //     };
        //     -1 === o ? (e = -1 === e.indexOf("?") ? "".concat(e, "?from=").concat(c.from) : "".concat(e, "&from=").concat(c.from), 
        //     n.default.event.emit("onLotteryTabShow", {
        //         from: "takeawayStatus"
        //     })) : c = {
        //         from: a[o].split("=")[1] || ""
        //     }, (0, r.redirectToSinglePage)({
        //         url: e,
        //         complete: function() {
        //             n.default.event.emit("onTabOptionsChange", c);
        //         }
        //     });
        // }
    },
    getOrderInfo: function(t, e) {
        // var a = this;
        // this.sendGetOrderReq().then(function(s) {
        //     var o, n = s;
        //     if ((n = a.getStatusDes(n)).order_create_time_text = i.default.unix(s.order_create_time).format("YYYY/MM/DD HH:mm"), 
        //     s.pickup_time) {
        //         var r = i.default.unix(s.pickup_time).format("YYYY/MM/DD") === (0, i.default)(new Date().getTime()).format("YYYY/MM/DD");
        //         n.pickup_time_text = r ? "今天 ".concat(i.default.unix(s.pickup_time).format("HH:mm")) : i.default.unix(s.pickup_time).format("YYYY/MM/DD HH:mm");
        //     }
        //     (null === (o = null == s ? void 0 : s.unified_shipping_addr) || void 0 === o ? void 0 : o.order_distribution_time) && n.unified_shipping_addr && (n.unified_shipping_addr.distribution_time_text = i.default.unix(s.unified_shipping_addr.order_distribution_time).format("YYYY/MM/DD HH:mm"));
        //     var c = n.fee_list, d = 0;
        //     if ("ORDER_TYPE_DELIVERY" === n.order_type) {
        //         var _ = c.findIndex(function(t) {
        //             return "EN_ORDER_FEE_CATEGORY_SHIPPING_FEE_FULL_REDUCTION" === t.fee_category;
        //         });
        //         -1 !== _ && (c.splice(_, 1), c.forEach(function(t) {
        //             "EN_ORDER_FEE_CATEGORY_SHIPPING" === t.fee_category && (d = t.fee_amount);
        //         }));
        //     }
        //     a.setData({
        //         order_create_time: n.order_create_time,
        //         order_create_time_text: n.order_create_time_text,
        //         state: n.state,
        //         address: n.address,
        //         status_text: n.status_text,
        //         status_tips: n.status_tips,
        //         total_num: n.total_num,
        //         total_amount: n.total_amount,
        //         customer_remark: n.customer_remark,
        //         goods_list: n.goods_list,
        //         order_list: n.goods_list.slice(0, Math.min(3, n.total_num)),
        //         fee_list: c,
        //         id: n.order_no,
        //         daily_seq_code: n.daily_seq_code,
        //         order_type: n.order_type,
        //         pickup_time: n.pickup_time,
        //         pickup_time_text: n.pickup_time_text,
        //         wx_nickname: n.wx_nickname,
        //         wx_head_img_url: n.wx_head_img_url,
        //         unified_shipping_addr: n.unified_shipping_addr,
        //         is_boss: n.is_boss,
        //         is_pay_order: n.is_pay_order,
        //         table_no: n.table_no,
        //         payed: n.is_pay_order && "SHELF_ORDER_STATE_COMMIT" !== n.state,
        //         is_bind_printer: n.is_bind_printer,
        //         is_instore_package: n.is_instore_package,
        //         done: !0,
        //         freeDeliveryFee: d,
        //         can_join: n.can_join,
        //         join_hint: n.join_hint
        //     }, function() {
        //         a.drawSharePic();
        //     }), e && a.checkStatus(n, t);
        //     var u = n.is_pay_order && "SHELF_ORDER_STATE_COMMIT" === n.state, h = !n.daily_seq_code;
        //     (u || h) && a.handleAbnormalOrder(n);
        // });
    },
    sendGetOrderReq: function() {
        // var t = this, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        // return new Promise(function(i) {
        //     s.default.request({
        //         url: "smbpappslf/order/get",
        //         data: {
        //             shelf_info: e.takeaway.shelfInfo,
        //             order_no: t.params.orderId
        //         },
        //         method: "POST",
        //         showLoading: a,
        //         success: function(t) {
        //             return i(t);
        //         },
        //         fail: function(t) {
        //             o.default.reportEvent("order/get-fail", JSON.stringify(t)), wx.reLaunch({
        //                 url: "/wxa/pages/offlinePay/index?scene=SLF"
        //             });
        //         }
        //     });
        // });
    },
    checkStatus: function(t, e) {
        // var a = this, i = t.state, s = t.order_type, o = t.is_bind_printer;
        // "SHELF_ORDER_STATE_UNCONFIRM" === i && "ORDER_TYPE_INSTORE" !== s && o ? (wx.showToast({
        //     title: "商家已出单",
        //     icon: "success",
        //     duration: 1500
        // }), setTimeout(function() {
        //     a.checkActivity(e);
        // }, 1500)) : this.checkActivity(e);
    },
    getMerchantInfo: function(t) {
        // var a = this;
        // s.default.request({
        //     url: "smbpappslf/common/merchantinfo",
        //     method: "POST",
        //     data: {
        //         shelf_info: t || e.takeaway.shelfInfo
        //     },
        //     success: function(t) {
        //         a.params.merchantInfo = {
        //             mch_store_name: t.mch_store_name,
        //             mch_store_address: t.mch_store_address,
        //             mch_store_lon: t.mch_store_lon,
        //             mch_store_lat: t.mch_store_lat
        //         }, a.setData({
        //             mch_wechat_head_img: t.mch_wechat_head_img,
        //             mch_wechat_nickname: t.mch_wechat_nickname,
        //             mch_contact_wechat: t.mch_contact_wechat,
        //             mch_contact_phone: t.mch_contact_phone,
        //             mch_store_address: t.mch_store_address,
        //             mch_store_name: t.mch_store_name
        //         });
        //     }
        // });
    },
    getStatusDes: function(t) {
        // var e = t, a = t.is_pay_order && "SHELF_ORDER_STATE_COMMIT" !== t.state, i = t.is_bind_printer ? "商家已出单，" : "";
        // return t.is_boss ? a ? (e.status_text = "已收款", e.status_tips = {
        //     ORDER_TYPE_PICKUP: "".concat(i, "请及时准备商品，顾客将到店自提商品"),
        //     ORDER_TYPE_DELIVERY: "".concat(i, "请及时准备商品及配送订单"),
        //     ORDER_TYPE_UNIFIED_SHIPPING: "".concat(i, "请及时准备商品及配送订单"),
        //     ORDER_TYPE_INSTORE: "请及时准备商品，联系顾客取餐"
        // }[t.order_type]) : (e.status_text = "ORDER_TYPE_INSTORE" === t.order_type ? "待收款" : "货到收款", 
        // e.status_tips = "ORDER_TYPE_INSTORE" === t.order_type ? "顾客就餐后，线下或微信联系顾客付款" : "".concat(i, "联系顾客并通过微信转账等方式收款")) : a ? (e.status_text = "已付款", 
        // e.status_tips = {
        //     ORDER_TYPE_PICKUP: "".concat(i, "请根据编号和时间到店自提"),
        //     ORDER_TYPE_DELIVERY: "".concat(i, "请等待商家配送"),
        //     ORDER_TYPE_UNIFIED_SHIPPING: "".concat(i, "请等待商家配送"),
        //     ORDER_TYPE_INSTORE: "请注意商家叫号取餐"
        // }[t.order_type]) : (e.status_text = "ORDER_TYPE_INSTORE" === t.order_type ? "待付款" : "货到付款", 
        // e.status_tips = "ORDER_TYPE_INSTORE" === t.order_type ? "餐后线下联系商家付款" : "".concat(i, "联系老板并通过微信转账等方式收款")), 
        // "SHELF_ORDER_STATE_CONFIRM" === t.state && (e.status_tips = "该笔订单已完成"), e;
    },
    handleAbnormalOrder: function(t) {
        // var e = this;
        // this.params.checkNum += 1, setTimeout(function() {
        //     e.sendGetOrderReq(!1).then(function(t) {
        //         if ("SHELF_ORDER_STATE_COMMIT" !== t.state && t.daily_seq_code) {
        //             var a = e.getStatusDes(t);
        //             e.setData({
        //                 status_text: a.status_text,
        //                 status_tips: a.status_tip,
        //                 daily_seq_code: t.daily_seq_code
        //             });
        //         } else e.params.checkNum < 3 ? e.handleAbnormalOrder() : (e.setData({
        //             status_text: "未支付",
        //             status_tips: "如未付款请重新下单，如已付款，请稍后查看订单"
        //         }), o.default.reportEvent("payOrderCommitAgain", t));
        //     });
        // }, 500), o.default.reportEvent("payOrderCommit", t);
    },
    setNavigationBar: function(t) {
        wx.setNavigationBarColor({
            frontColor: t ? "#ffffff" : "#000000",
            backgroundColor: "#ffffff"
        });
    },
    onShareAppMessage: function() {
        // return {
        //     title: "顾客".concat(this.data.wx_nickname, "的订单"),
        //     path: "/wxpay/pages/takeaway/status/status?id=".concat(this.data.id, "&shelf_info=").concat(e.takeaway.shelfInfo),
        //     imageUrl: this.params.shareImgUrl
        // };
    },
    drawSharePic: function() {
        // var t = this, e = {
        //     width: 420,
        //     height: 336,
        //     element: "canvas",
        //     background: "#F5F5F5",
        //     obj: this.selectComponent("#ordershare")
        // };
        // (0, a.default)(e, {
        //     list: [ {
        //         type: "wxml",
        //         class: ".canvas",
        //         limit: ".share-pic",
        //         x: 0,
        //         y: 0
        //     } ]
        // }).then(function(e) {
        //     console.log(e, "url"), t.params.shareImgUrl = e;
        // }).catch(function(t) {
        //     o.default.reportEvent("drawOrderSharePicFail", JSON.stringify(t)), console.log(t);
        // }), o.default.reportEvent("drawSharePic");
    },
    drawOrderPic: function() {
        // var t = this;
        // this.data.orderPic ? this.previewImage() : (wx.showLoading({
        //     title: "图片生成中",
        //     mask: !0
        // }), wx.createSelectorQuery().select(".sharepic").boundingClientRect(function(e) {
        //     t.setData({
        //         canvasHeight: e.height,
        //         canvasWidth: e.width
        //     }), setTimeout(function() {
        //         var e = {
        //             width: t.data.canvasWidth,
        //             height: t.data.canvasHeight,
        //             delaySaveCanvas: 5,
        //             zoom: 1,
        //             element: "orderStatus",
        //             background: "#ffffff"
        //         };
        //         (0, a.default)(e, {
        //             list: [ {
        //                 type: "wxml",
        //                 class: ".canvas",
        //                 limit: ".sharepic",
        //                 x: 0,
        //                 y: 0
        //             } ]
        //         }).then(function(e) {
        //             t.setData({
        //                 orderPic: e
        //             }), wx.hideLoading(), t.previewImage();
        //         }).catch(function(t) {
        //             o.default.reportEvent("drawOrderPicFail", JSON.stringify(t)), console.log(t);
        //         });
        //     }, 200);
        // }).exec(), o.default.reportEvent("drawOrderPic"));
    },
    previewImage: function() {
        wx.previewImage({
            current: this.data.orderPic,
            urls: [ this.data.orderPic ]
        });
    },
    makePhoneCall: function() {
        // var t = "";
        // t = this.data.is_boss ? String(this.data.address.phone) : this.data.mch_contact_phone, 
        // wx.makePhoneCall({
        //     phoneNumber: t
        // }), o.default.reportEvent("makePhoneCall", this.data.is_boss ? "Customer" : "Merchant");
    },
    copyWechatName: function() {
        // var t = "";
        // t = this.data.is_boss ? this.data.wx_nickname : this.data.mch_wechat_nickname, wx.setClipboardData({
        //     data: t
        // }), o.default.reportEvent("copyWechat", this.data.is_boss ? "Customer" : "Merchant");
    },
    copyWechatId: function() {
        // wx.setClipboardData({
        //     data: this.data.mch_contact_wechat
        // });
    },
    copyAddress: function() {
        // wx.setClipboardData({
        //     data: "".concat(this.data.address.address, " ").concat(this.data.address.name, " ").concat(this.data.address.phone)
        // });
    },
    copyUnifiedAddress: function() {
        // wx.setClipboardData({
        //     data: "".concat(this.data.unified_shipping_addr.address)
        // });
    },
    showMap: function() {
        // wx.openLocation({
        //     latitude: parseFloat(this.params.merchantInfo.mch_store_lat),
        //     longitude: parseFloat(this.params.merchantInfo.mch_store_lon),
        //     address: this.params.merchantInfo.mch_store_address,
        //     name: this.params.merchantInfo.mch_store_name
        // });
    },
    guideShare: function() {
        this.setData({
            isShowGuide: !0
        });
    },
    hideGuide: function() {
        this.setData({
            isShowGuide: !1
        });
    },
    showContact: function() {
        this.setData({
            isShowContact: !0,
            isShowGuide: !1
        })
        // , o.default.reportEvent("contact", this.data.is_boss ? "Customer" : "Merchant");
    },
    hideContact: function() {
        this.setData({
            isShowContact: !1
        });
    },
    contactMerchant: function() {
        // this.data.mch_contact_wechat ? this.copyWechatId() : this.makePhoneCall();
    },
    goIndex: function() {
        wx.reLaunch({
            url: "/wxa/pages/offlinePay/index?scene=SLF&from=status"
        });
    },
    signComplete: function() {
        // var t = this;
        // s.default.request({
        //     url: "smbpappslf/order/complete",
        //     data: {
        //         shelf_info: e.takeaway.shelfInfo,
        //         order_no: this.data.id
        //     },
        //     method: "POST",
        //     showLoading: !0,
        //     success: function() {
        //         t.setData({
        //             state: "SHELF_ORDER_STATE_CONFIRM",
        //             status_tips: "该笔订单已完成"
        //         }), o.default.reportEvent("signComplete", "orderStatus:".concat(t.data.id));
        //     }
        // });
    },
    sendOrderToMerchant: function() {
        // o.default.reportEvent("sendOrderToMerchant");
    },
    clickPackageFeeTip: function() {
        this.setData({
            showPackageFeeText: !0
        });
    },
    closePackageFeeTip: function() {
        this.setData({
            showPackageFeeText: !1
        });
    },
    joinCustomerGroup: function() {
        // var t = this;
        // this.setData({
        //     isShowJoiningHalfScreen: !0
        // }), setTimeout(function() {
        //     t.setData({
        //         animationClassActionSheet: !0
        //     });
        // }, 100);
    },
    hideJoiningHalfScreen: function() {
        // var t = this;
        // this.setData({
        //     animationClassActionSheet: !1
        // }), setTimeout(function() {
        //     t.setData({
        //         isShowJoiningHalfScreen: !1
        //     });
        // }, 300);
    },
    preventTouchMove: function() {},
    getNewestGroupJoinCode: function() {
        // var t = this;
        // s.default.request({
        //     url: "smbpappweb/customergroup/getnewestgroupjoincode",
        //     method: "POST",
        //     showLoading: !0,
        //     success: function(e) {
        //         t.setData({
        //             customerGroupQrCode: e.group_join_code,
        //             groupCodeReady: !0
        //         });
        //     },
        //     fail: function(e) {
        //         t.setData({
        //             groupCodeReady: !1
        //         }), o.default.reportEvent("getNewestGroupJoinCodeError", JSON.stringify(e));
        //     }
        // });
    },
    longPressTouchstart: function() {
        // var t = this;
        // clearTimeout(this.static.longPressTimer), this.static.longPressTimer = setTimeout(function() {
        //     o.default.reportEvent("longTouchGroupJoinCodeSuccess"), t.static.isLongPress = !0, 
        //     clearTimeout(t.static.longPressTimer);
        // }, 1e3);
    },
    longPressTouchEnd: function() {
        // clearTimeout(this.static.longPressTimer);
    }
});