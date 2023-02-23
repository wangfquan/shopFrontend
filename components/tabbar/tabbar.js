// var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../wxpay/utils/report"));

Component({
    options: {
        styleIsolation: "shared"
    },
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        selected: {
            type: Number
        }
    },
    ready: function() {
        // this.triggerEvent("onTabShow", {
        //     index: this.properties.selected
        // });
    },
    methods: {
        // onTapTab: function(t) {
        //     var r = t.currentTarget.dataset.index;
        //     this.triggerEvent("onTabHide", {
        //         index: this.properties.selected
        //     }), this.triggerEvent("onTabShow", {
        //         index: r
        //     }), e.default.reportEvent("clickTab", r);
        // }
    }
});