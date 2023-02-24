// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../utils/report")), r = e(require("../../../cgi/index")), u = e(require("dayjs"));

Page({
    data: {
        out_request_no: "",
        type: "success",
        payInfo: {},
        amountShow: 100,
        needExit: !1
    },
    onLoad: function() {
        // var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        // n.default.reportPV(), this.setData({
        //     out_request_no: e.out_request_no,
        //     type: e.type
        // }), this.checkHomePageExit(), this.getMiniAppF2fPayResult();
    },
    checkHomePageExit: function() {
        // var e = n.default.getPageList();
        // console.log(e), this.setData({
        //     needExit: !e.some(function(e) {
        //         return "wxa/pages/offlinePay/index" === e;
        //     })
        // });
    },
    getMiniAppF2fPayResult: function() {
        // var e = this;
        // return a(t.default.mark(function a() {
        //     var n, o;
        //     return t.default.wrap(function(t) {
        //         for (;;) switch (t.prev = t.next) {
        //           case 0:
        //             return n = e.data.out_request_no, t.next = 3, r.default.mmpaysmbpminiappweb.miniappPay.getMiniAppF2fPayResult({
        //                 out_request_no: n
        //             }, {
        //                 showLoading: !0
        //             });

        //           case 3:
        //             if (t.t0 = t.sent, t.t0) {
        //                 t.next = 6;
        //                 break;
        //             }
        //             t.t0 = {};

        //           case 6:
        //             o = t.t0, e.setData({
        //                 payInfo: o,
        //                 amountShow: o.real_pay_amount ? (o.real_pay_amount / 100).toFixed(2) : "",
        //                 payTimeShow: u.default.unix(Number(o.pay_time)).format("YYYY年M月D日 HH:mm:ss")
        //             });

        //           case 8:
        //           case "end":
        //             return t.stop();
        //         }
        //     }, a);
        // }))();
    },
    confirmClick: function() {
        // n.default.reportEvent("点击我知道了"), 
        wx.reLaunch({
            url: "/pages/home/home"
        });
    },
    onShareAppMessage: function() {
        // n.default.reportEvent("点击转发");
        // var e = this.data, t = e.out_request_no, a = e.amountShow;
        // return {
        //     title: "".concat(a ? "我已支付".concat(a, "元") : "我已支付"),
        //     path: "/wxpay/pages/paySuccess/paySuccess?out_request_no=".concat(t, "&type=share")
        // };
    }
});