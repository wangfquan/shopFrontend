// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../cgi/index")), n = e(require("../../utils/qr")), i = e(require("../../utils/report"));

Page({
    data: {
        shopName: "店铺名称",
        shopImg: "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        recvQrcodeUrl: "https://wx.gtimg.com/resource/feuploader/202205/c6551c49c1ff802fcadf8fa5f3464055_256x256.png",
        qrWidth: 600,
        qrHeight: 600
    },
    onLoad: function() {
        // i.default.reportPV(), 
        this.getRecvQrcodeContent();
    },
    getRecvQrcodeContent: function() {
        var e = this;
        // return t(r.default.mark(function t() {
        //     var n, i, o, c, s;
        //     return r.default.wrap(function(r) {
        //         for (;;) switch (r.prev = r.next) {
        //           case 0:
        //             return r.next = 2, a.default.mmpaysmbpminiappweb.miniappPay.getPayeeInfo({});

        //           case 2:
        //             return n = r.sent, i = n.shop_name, o = n.shop_img, c = n.recv_qrcode_url, e.setData({
        //                 shopName: i,
        //                 shopImg: o
        //             }), r.next = 9, e.drawQrcode(c);

        //           case 9:
        //             s = r.sent, e.setData({
        //                 recvQrcodeUrl: s
        //             });

        //           case 11:
        //           case "end":
        //             return r.stop();
        //         }
        //     }, t);
        // }))();
    },
    drawQrcode: function(e) {
        // var r = this, t = this.data, a = t.qrWidth, i = t.qrHeight;
        // return new Promise(function(t) {
        //     var o = {
        //         context: wx.createCanvasContext("qr", r),
        //         width: a,
        //         height: i,
        //         string: e,
        //         color: "#000000"
        //     };
        //     n.default.draw(o).draw(!1, function() {
        //         var e = {
        //             x: 0,
        //             y: 0,
        //             width: a,
        //             height: i,
        //             destWidth: a,
        //             destHeight: i,
        //             canvasId: "qr",
        //             success: function(e) {
        //                 t((null == e ? void 0 : e.tempFilePath) || "");
        //             },
        //             fail: function(e) {
        //                 throw t(""), Error("绘制二维码失败：".concat(JSON.stringify(e)));
        //             }
        //         };
        //         wx.canvasToTempFilePath(e, r);
        //     });
        // });
    },
    onShareAppMessage: function() {
        return i.default.reportEvent("点击转发"), {
            title: "点击这里可以直接向我付款",
            // path: "/wxpay/pages/paying/paying",
            // imageUrl: "https://wx.gtimg.com/resource/feuploader/202106/07b589a08feb98736c6cbc623be6ec3e_424x342.png"
        };
    }
});