Component({
    properties: {
        text: {
            type: String
        },
        width: {
            type: String
        },
        line: {
            type: Number
        }
    },
    data: {
        maxWidth: "100%",
        lineClamp: 1
    },
    observers: {
        width: function(t) {
            this.setData({
                maxWidth: t
            });
        },
        line: function(t) {
            this.setData({
                lineClamp: t
            });
        }
    },
    methods: {}
});