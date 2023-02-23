// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../wxpay/utils/report")), a = e(require("../../../utils/timer")), i = require("../../../wxpay/utils/redirectTo"), n = require("../../../utils/merchant");

Component({
    options: {
        styleIsolation: "apply-shared"
    },
    properties: {
        headerExpand: {
            type: Boolean
        },
        headerData: {
            type: Object
        },
        isMaster: {
            type: Boolean
        },
        labelArr: {
            type: Array
        },
        canMiniapppay: {
            type: Boolean,
            value: !1
        },
        isSjt: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        showProfile: !1,
        isShowPreview: !1
    },
    lifetimes: {
        ready: function() {
            // this.continueTimer();
        }
    },
    methods: {
        openMerchantProfile: function() {
            // this.data.headerData.mchIdentify && (this.setData({
            //     showProfile: !0
            // }), this.interruptTimer(), t.default.reportEvent("openMerchantProfile"));
        },
        closeProfile: function() {
            // this.setData({
            //     showProfile: !1
            // }), this.continueTimer();
        },
        clickPhone: function() {
            // var e = this.data.headerData.shopPhone;
            // wx.makePhoneCall({
            //     phoneNumber: e
            // }), t.default.reportEvent("makePhoneCallInMerchantProfile");
        },
        clickAddress: function() {
            // var e = this.data.headerData;
            // wx.openLocation({
            //     latitude: parseFloat(e.shopLat),
            //     longitude: parseFloat(e.shopLon),
            //     address: e.shopAddress,
            //     name: e.shopName
            // });
        },
        clickWechat: function() {
            // var e = this.data.headerData.shopWechat;
            // wx.setClipboardData({
            //     data: e
            // }), t.default.reportEvent("copyWechatInMerchantProfile");
        },
        continueTimer: function() {
            // a.default.continue();
        },
        goProfile: function() {
            // (0, i.openReceipt)("pages/merchantManage2/info/info"), t.default.reportEvent("goProfile");
        },
        previewQrcode: function() {
            // var e = this;
            // (0, n.getQrcode)().then(function(t) {
            //     t ? (e.setData({
            //         currentPreview: t,
            //         urlsPreview: [ t ]
            //     }), e.setData({
            //         isShowPreview: !0
            //     })) : wx.showToast({
            //         icon: "none",
            //         title: "加载失败，请稍后再试"
            //     });
            // }), t.default.reportEvent("previewQrcode");
        },
        goSetting: function() {
            // (0, n.getMerchantId)().then(function(e) {
            //     return e ? wx.navigateToMiniProgram({
            //         appId: "wx4aedf8c9edf9fd72",
            //         path: "wxpay/pages/landing/landing?merchantid=".concat(e)
            //     }) : wx.showToast({
            //         icon: "none",
            //         title: "加载失败，请稍后再试"
            //     });
            // }), t.default.reportEvent("goSetting");
        },
        interruptTimer: function() {
            // a.default.interrupt();
        },
        hidePreview: function() {
            // this.setData({
            //     isShowPreview: !1
            // });
        },
        tapRightBtn: function() {
            // this.triggerEvent("tapRightBtn");
        }
    }
});