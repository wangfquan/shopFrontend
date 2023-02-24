Component({
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: function(t) {
              console.log(t)
                var e = this;
                setTimeout(function() {
                    e.setData({
                        animationClassActionSheet: t
                    });
                }, t ? 100 : 0);
            }
        },
        value: {
            type: String,
            value: ""
        }
    },
    data: {
        animationClassActionSheet: !1
    },
    methods: {
        confirm: function(t) {
            var e = t.detail.value;
            this.updateVal(e), this.triggerEvent("confirm", {
                value: e
            });
        },
        // 弹框输入金额回调改变值
        moneyChange: function(t) {
            var e = t.detail.value;
            this.updateVal(e);
        },
        // 改变金额值
        updateVal: function(t) {
            this.setData({
                value: t
            });
        },
        // 关闭支付弹框
        close: function() {
            this.setData({
                show: !1,
                value: ""
            }), this.triggerEvent("close");
        }
    }
});