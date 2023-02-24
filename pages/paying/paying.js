// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../cgi/index")), n = require("../../lib/number-precision"), i = require("../../utils/pay"), u = e(require("../../utils/report"));

Page({
    data: {
        shopName: "富佳菜蔬",
        shopImg: "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        nickName: "BigFa",
        value: ""
    },
    onLoad: function() {
        // u.default.reportPV(), this.getMerchantInfo();
    },
    getMerchantInfo: function() {
        // var e = this;
        // return t(a.default.mark(function t() {
        //     var n, i, u, o;
        //     return a.default.wrap(function(a) {
        //         for (;;) switch (a.prev = a.next) {
        //           case 0:
        //             return a.next = 2, r.default.mmpaysmbpminiappweb.miniappPay.getPayeeInfo({});

        //           case 2:
        //             n = a.sent, i = n.shop_name, u = n.shop_img, o = n.nick_name, e.setData({
        //                 shopName: i,
        //                 shopImg: u,
        //                 nickName: o
        //             });

        //           case 7:
        //           case "end":
        //             return a.stop();
        //         }
        //     }, t);
        // }))();
    },
    confirm: function(e) {
      console.log(e)
        var a = e.detail.value;
        this.updateVal(a)
        
        wx.navigateTo({
            url: "/pages/paySuccess/paySuccess"
        });
        // 微信内部面对面支付接口
        //  (0, i.requestFacetoFacePayment)({
        //     amount: (0, n.times)(Number(a), 100)
        // });
    },
    // 弹框输入值回调
    moneyChange: function(e) {
        var a = e.detail.value;
        this.updateVal(a);
    },
    // 金额值改变
    updateVal: function(e) {
        this.setData({
            value: e
        });
    },
    onShareAppMessage: function() {
        return u.default.reportEvent("点击转发"), {
            title: "点击这里可以直接向我付款",
            // path: "/wxpay/pages/paying/paying",
            // imageUrl: "https://wx.gtimg.com/resource/feuploader/202106/07b589a08feb98736c6cbc623be6ec3e_424x342.png"
        };
    }
});