// var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../utils/takeaway/index"), a = require("../../config/takeaway"), r = t(require("../../utils/report"));

Component({
    options: {
        multipleSlots: !0
    },
    data: {
        showSalesCount: !1
    },
    properties: {
        isOpening: {
            type: Boolean,
            value: !1
        },
        good: {
            type: Object,
            value: {}
        },
        cateindex: {
            type: String,
            value: ""
        },
        goodindex: {
            type: String,
            value: ""
        },
        shoppingCart: {
            type: Array,
            value: []
        },
        highLightNecessary: {
            type: Boolean,
            value: !1
        },
        catetype: {
            type: String,
            value: ""
        }
    },
    attached: function() {
        // a.takeaway.showSalesCount !== this.data.showSalesCount && this.setData({
        //     showSalesCount: a.takeaway.showSalesCount
        // });
    },
    methods: {
        previewDetail: function(t) {
            // this.triggerEvent("previewDetail", {
            //     good: t.currentTarget.dataset.good,
            //     cateindex: t.currentTarget.dataset.cateindex,
            //     goodindex: t.currentTarget.dataset.goodindex
            // });
        },
        add: function(t) {
            // this.data.isOpening && ((0, e.canBuyUtil)(this.data.good, 1, -1, this.data.shoppingCart) && ((0, 
            // e.checkDiscountLimitTip)(this.data.good), this.triggerEvent("add", {
            //     skuid: t.currentTarget.dataset.skuid,
            //     spuid: t.currentTarget.dataset.spuid,
            //     good: t.currentTarget.dataset.good
            // })), r.default.reportEvent("addFromList", t.currentTarget.dataset.good));
        },
        minus: function(t) {
            // this.data.isOpening && (this.triggerEvent("minus", {
            //     skuid: t.currentTarget.dataset.skuid,
            //     spuid: t.currentTarget.dataset.spuid,
            //     good: t.currentTarget.dataset.good
            // }), r.default.reportEvent("minusFromList", t.currentTarget.dataset.good));
        },
        chooseProp: function(t) {
            // this.data.isOpening && (this.triggerEvent("chooseProp", {
            //     skuid: t.currentTarget.dataset.skuid,
            //     spuid: t.currentTarget.dataset.spuid,
            //     cateindex: t.currentTarget.dataset.cateindex,
            //     goodindex: t.currentTarget.dataset.goodindex,
            //     good: t.currentTarget.dataset.good
            // }), r.default.reportEvent("addFromList", t.currentTarget.dataset.good));
        }
    }
});