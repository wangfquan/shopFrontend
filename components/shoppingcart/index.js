// var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../utils/takeaway/detail"), i = require("../../utils/takeaway/index"), r = require("../../config/takeaway"), n = t(require("../../utils/report"));

Component({
    options: {},
    data: {
        // 合计
        shoppingPrice: 100,
        // 已选择商品数量
        shoppingNum: 10,
        // 未知
        supportUnified: !1,
        //是否可配送
        supportDelivery: !0,
        //支持最小起送金额
        minimumDeliveryAmount:300,
        // 是否可自提
        supportPickup: !0,
        //是否可堂食
        supportInstore: !1,
        // 是否显示已选商品列表
        isShowShoppingCart: !1,
        // 是否清空购物车弹框
        isShowDeleteConfirm: !1,
        // 是否显示完整时间
        showAllTime: !1
    },
    properties: {
        isOpening: {
            type: Boolean,
            value: !1
        },
        business: {
            type: Object,
            value: {}
        },
        isPreOrderTime: {
            type: Boolean,
            value: !1
        },
        shoppingCart: {
            type: Array,
            value: [],
            observer: function(t) {
                // var i = (0, e.getTotalNum)(t), r = (0, e.getGoodPrice)(t);
                // this.setData({
                //     shoppingNum: i,
                //     shoppingPrice: r
                // }), this.data.isShowShoppingCart && 0 === t.length && this.setData({
                //     isShowShoppingCart: !1
                // });
            }
        },
        supportOrderType: {
            type: Number,
            value: 0,
            observer: function(t) {
                // var e = !!(t & r.OrderType.Pickup), i = !!(t & r.OrderType.Instore), n = !!(t & r.OrderType.Delivery), o = !!(t & r.OrderType.Unified);
                // this.setData({
                //     supportPickup: e,
                //     supportInstore: i,
                //     supportDelivery: n,
                //     supportUnified: o
                // });
            }
        },
        lackNecessary: {
            type: Boolean,
            value: !1
        }
    },
    attached: function() {
        // this.setData({
        //     minimumDeliveryAmount: r.takeaway.minimumDeliveryAmount
        // });
    },
    methods: {
        switchShoppingCart: function() {
            // (this.data.shoppingCart.length || this.data.isShowShoppingCart) && (this.setData({
            //     isShowShoppingCart: !this.data.isShowShoppingCart
            // }), n.default.reportEvent("clickShoppingCart", !this.data.isShowShoppingCart), this.triggerEvent("switchShoppingCart"));
        },
        showDeleteConfirm: function() {
            this.setData({
                isShowDeleteConfirm: !0
            });
        },
        confirmDelete: function() {
            this.setData({
                isShowDeleteConfirm: !1
            }), this.triggerEvent("confirmDelete");
        },
        hideDeleteConfirm: function() {
            this.setData({
                isShowDeleteConfirm: !1
            });
        },
        minusFromShoppingCart: function(t) {
            // this.data.isOpening && this.triggerEvent("minusFromShoppingCart", {
            //     index: t.currentTarget.dataset.index
            // });
        },
        addFromShoppingCart: function(t) {
            // var e, r;
            // if (this.data.isOpening) {
            //     var n = t.currentTarget.dataset, o = n.spuid, s = n.index, a = this.data.shoppingCart[s] || {}, p = -1;
            //     (null === (e = a.checked_sku_item) || void 0 === e ? void 0 : e.sku_id) && (null === (r = a.sku_item_list) || void 0 === r ? void 0 : r.length) && (p = a.sku_item_list.findIndex(function(t) {
            //         var e;
            //         return t.sku_id === (null === (e = a.checked_sku_item) || void 0 === e ? void 0 : e.sku_id);
            //     })), (0, i.canBuyUtil)(a, 1, void 0 !== p ? p : -1, this.data.shoppingCart) && ((0, 
            //     i.checkDiscountLimitTip)(a), this.triggerEvent("addFromShoppingCart", {
            //         index: s,
            //         spuid: o
            //     }));
            // }
        },
        // 选择好商品点击触发回调
        next: function() {
            this.triggerEvent("next");
        },
        showMoreTime: function() {
            this.setData({
                showAllTime: !0
            });
        }
    }
});