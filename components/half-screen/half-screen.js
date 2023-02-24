var e = !1;

wx.getSystemInfo({
    success: function(t) {
        var a = t.model.toLowerCase();
        (~a.indexOf("iphone x") || ~a.indexOf("iphone 11")) && (e = !0);
    }
}), Component({
    options: {
        multipleSlots: !0
    },
    data: {
        swiperCurrentIndex: 0,
        isPhoneX: e,
        animationClass: "",
        showMask: !0
    },
    properties: {
        show: {
            type: Boolean,
            observer: function(e) {
                var t = this;
                e ? (this.setData({
                    showMask: !0
                }), setTimeout(function() {
                    t.setData({
                        animationClass: "receiptSheetDialog-on"
                    });
                }, 100)) : this.setData({
                    animationClass: "receiptSheetDialog-leave"
                });
            }
        },
        titleIcon: {
            type: String,
            value: ""
        },
        titleText: {
            type: String,
            value: ""
        },
        titleInfo: {
            type: String,
            value: ""
        },
        titleTextArray: {
            type: Array,
            value: []
        },
        contentText: {
            type: String,
            value: ""
        },
        contentTextArray: {
            type: Array,
            value: []
        },
        contentImage: {
            type: Array,
            value: []
        },
        cancelText: {
            type: String,
            value: ""
        },
        cancelColor: {
            type: String,
            value: "#efb600"
        },
        cancelBackgroundColor: {
            type: String,
            value: "rgba(0,0,0,.05)"
        },
        confirmText: {
            type: String,
            value: ""
        },
        confirmColor: {
            type: String,
            value: "#ffffff"
        },
        confirmBackgroundColor: {
            type: String,
            value: "#efb600"
        },
        swiperHeight: {
            type: String,
            value: ""
        },
        duration: {
            type: Number,
            value: 200
        },
        autoplay: {
            type: Boolean,
            value: !1
        },
        interval: {
            type: Number,
            value: 5e3
        },
        indicatorDots: {
            type: Boolean,
            value: !0
        },
        imageMode: {
            type: String,
            value: "widthFix"
        },
        showOperateArea: {
            type: Boolean,
            value: !1
        },
        operateAction: {
            type: String,
            value: "close"
        },
        customStyle: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        clickConfirm: function() {
            this.triggerEvent("confirm");
        },
        clickCancel: function() {
            this.triggerEvent("cancel");
        },
        clickOperateArea: function() {
            this.triggerEvent("operateClick");
        },
        swiperIndexChange: function(e) {
            this.setData({
                swiperCurrentIndex: e.detail.current
            });
        },
        hide: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("hide");
        },
        innerClick: function() {},
        preventTouchMove: function() {},
        changeMaskDisplay: function() {
            "receiptSheetDialog-leave" === this.data.animationClass && this.setData({
                showMask: !1
            });
        }
    }
});