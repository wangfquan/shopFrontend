var e = require("./keyboard.helper"), t = getApp().systemInfo;

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmColor: {
            type: String,
            value: "#07c160"
        },
        integralLimit: {
            type: Number,
            value: 7
        },
        value: {
            type: String,
            value: "",
            observer: function(e) {
                this.inputVaildate(Number(e));
            }
        },
        maxValue: {
            type: Number,
            value: Number.MAX_SAFE_INTEGER
        },
        minValue: {
            type: Number,
            value: Number.MIN_SAFE_INTEGER
        }
    },
    data: {
        confirmDisabled: !0,
        numberArr: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "." ]
    },
    methods: {
      // 确定
        confirm: function() {
            var e = this.data, t = e.value;
            e.confirmDisabled || this.triggerEvent("confirm", {
                value: t
            });
        },
        // 点击弹框数字按钮事件
        keyTap: function(a) {
          console.log(a)
            var i = a.currentTarget.dataset.key, r = this.data, n = r.value, u = r.integralLimit, l = n.toString();
            l = (0, e.input)(i, l, u), this.setData({
                value: l
            }), "devtools" !== (null == t ? void 0 : t.brand) && wx.vibrateShort({
                type: "light"
            }), this.triggerEvent("change", {//进行输入值触发回调
                value: l
            });
        },
        inputVaildate: function(e) {
            console.log(e);
            var t = e <= this.data.maxValue && e >= this.data.minValue, a = !(String(e).indexOf(".") > -1) || String(e).split(".")[1].length <= 2, i = !(t && a && 0 !== e);
            return this.setData({
                confirmDisabled: i
            }), !i;
        }
    }
});