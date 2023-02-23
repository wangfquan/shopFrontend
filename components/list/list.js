// var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), n = require("../../../../@babel/runtime/helpers/slicedToArray"), i = require("../../../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../../../@babel/runtime/helpers/defineProperty"), a = require("../../../../@babel/runtime/helpers/typeof"), s = require("../../../../@babel/runtime/helpers/objectSpread2"), r = require("../../../../@babel/runtime/helpers/objectWithoutProperties"), c = require("../../../utils/redirectTo"), l = require("../utils/announcement"), h = require("../../../config/announcement"), u = require("../../../../utils/system"), d = e(require("dayjs")), f = e(require("../../../frame/frame")), g = e(require("../../../utils/report")), m = e(require("../../../utils/drawPic")), p = e(require("../../../utils/imgSaver")), S = require("../../../utils/commonMethod"), w = [ "init", "complete" ], v = [ "init", "success", "complete" ], A = "";

Component({
    properties: {
        pageSize: {
            type: Number,
            value: 10
        },
        state: {
            type: Object,
            value: {}
        }
    },
    data: {
        list: void 0,
        descBeginID: 0,
        finish: !1,
        loading: !1,
        sideLength: 452,
        contentHeight: 0,
        lastScrollTop: 0,
        triggered: !1,
        isCollapsed: !1,
        times: 0,
        loadError: !1,
        count: 0,
        // TAP_TAIL_TYPE: h.TAP_TAIL_TYPE,
        TAP_TAIL_TYPE: "",
        // ANNOUNCEMENT_TAIL_TYPE: h.ANNOUNCEMENT_TAIL_TYPE,
        ANNOUNCEMENT_TAIL_TYPE: "",
        isShowHalfScreen: !1,
        halfScreen: {
            title: "",
            text: ""
        },
        annoActionSheet: {},
        // descQRCode: h.QRCODE_DESC[h.SCENE_ENUM.ANNOUNCE],
        descQRCode: "",
        qrcode: "",
        optionShareImg: {
            width: 100,
            height: 100,
            picZoom: 4
        },
        isShowActionSheet: !1,
        isShowShareImgDialog: !1
    },
    attached: function() {
        // console.log("商家公告插件加载"), this.checkAnnoId(), this.load(), this.registerListeners();
    },
    detached: function() {
        // this.removeListeners();
    },
    methods: {
        load: function() {
            // var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.init, n = void 0 !== t && t, i = e.complete, o = r(e, w), a = this.data, c = a.finish, l = a.loading;
            // (!c && !l || n) && (n && this.setData({
            //     descBeginID: 0
            // }), this.getList(s({
            //     init: n,
            //     complete: i
            // }, o)), this.getShareInfo());
        },
        onTabShow: function() {
            // this.refreshScrollViewHeight(), this.checkCollapseStatus();
        },
        registerListeners: function() {
            // var e = this;
            // f.default.event.on("disableAnnoTail", function() {
            //     var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.index, i = t.halfScreen, o = e.data.list;
            //     e.setData({
            //         isShowHalfScreen: !0,
            //         halfScreen: i,
            //         list: (o || []).map(function(e) {
            //             return e && e.id === n ? s(s({}, e), {}, {
            //                 jump_link: s(s({}, e.jump_link), {}, {
            //                     type: h.ANNOUNCEMENT_TAIL_TYPE.DISABLED
            //                 })
            //             }) : e;
            //         })
            //     });
            // });
        },
        removeListeners: function() {
            // f.default.event.off("disableAnnoTail");
        },
        getList: function() {
            // var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.init, i = void 0 !== n && n, o = t.success, a = t.complete, c = r(t, v), h = this.data, u = h.descBeginID, f = h.pageSize, m = h.times, p = h.list, S = void 0 === p ? [] : p;
            // this.setData({
            //     loading: !0,
            //     times: i ? 1 : m + 1
            // }), g.default.reportEvent("1", {
            //     times: this.data.times
            // }), (0, l.getList)(s({
            //     data: {
            //         descBeginID: u,
            //         pageSize: f
            //     },
            //     success: function(t) {
            //         var n = t.announcement_info;
            //         if (n.length) {
            //             var a = n[n.length - 1].id - 1, r = (i ? [] : S).concat(n.map(function(t) {
            //                 return s(s({}, t), {}, {
            //                     beginTime: (0, d.default)(1e3 * t.begin_time).format("YYYY-MM-DD HH:mm"),
            //                     key: "".concat(t.id, "-").concat(+new Date()),
            //                     jump_link: e.getFormatJumpLink(t.jump_link)
            //                 });
            //             }));
            //             e.setData({
            //                 list: r,
            //                 descBeginID: a,
            //                 finish: !a || r.length < f,
            //                 loadError: !1
            //             });
            //         } else e.setData({
            //             finish: !0,
            //             loadError: !1,
            //             list: S || []
            //         });
            //         "function" == typeof o && o();
            //     },
            //     fail: function() {
            //         var t = e.data.list;
            //         e.setData({
            //             loadError: !0
            //         }), (null == t ? void 0 : t.length) && wx.showModal({
            //             showCancel: !1,
            //             content: "动态内容加载失败",
            //             confirmText: "确定"
            //         });
            //     },
            //     complete: function() {
            //         e.setData({
            //             loading: !1
            //         }), "function" == typeof a && a();
            //     }
            // }, c));
        },
        getFormatJumpLink: function(e) {
            // if ("object" === a(e) && Object.getOwnPropertyNames(e).length) {
            //     var t = Number(e.scene), n = "";
            //     switch (t) {
            //       case h.SCENE_ENUM.TAKEAWAY:
            //       case h.SCENE_ENUM.LOTTERY:
            //       case h.SCENE_ENUM.FRIEND:
            //         return !1 === e.is_link_effective ? n = h.ANNOUNCEMENT_TAIL_TYPE.DISABLED : e.is_discount && (n = h.ANNOUNCEMENT_TAIL_TYPE.TAKEAWAY_DISCOUNT), 
            //         {
            //             show: !0,
            //             scene: t,
            //             type: n,
            //             content: e.content
            //         };

            //       default:
            //         return {};
            //     }
            // }
            // return {};
        },
        getShareInfo: function() {
            // var e = this;
            // (0, l.getListCount)().then(function(t) {
            //     t && t.showing_announcement_count && e.setData({
            //         count: t.showing_announcement_count
            //     }), e.drawSharePic();
            // });
        },
        checkAnnoId: function() {
            // var e = this, t = this.data.descBeginID;
            // 0 === t && f.default.getActiveTab(function(n) {
            //     e.setData({
            //         descBeginID: "number" == typeof n.announce_id ? n.announce_id : t
            //     });
            // });
        },
        onShareAppMessage: function() {
            // return {
            //     title: "快来看看这家店最新的动态信息",
            //     path: "/wxa/pages/offlinePay/index?scene=ANNOUNCE",
            //     imageUrl: A
            // };
        },
        drawSharePic: function() {
            // var e = {
            //     width: 750,
            //     height: 600,
            //     element: "canvas",
            //     background: "#ffffff",
            //     obj: this
            // };
            // (0, m.default)(e, {
            //     list: [ {
            //         type: "wxml",
            //         class: ".canvas",
            //         limit: ".dynamicHShare",
            //         x: 0,
            //         y: 0
            //     } ]
            // }).then(function(e) {
            //     console.log(e, "xxxxxxxxxxxxx"), A = e;
            // }).catch(function(e) {
            //     console.log("drawSharePic出错", e);
            // });
        },
        previewImage: function(e) {
            // var t = this.data.list, n = e.currentTarget.dataset, i = n.id, o = n.url, a = (t || []).find(function(e) {
            //     return e.id === Number(i);
            // });
            // a && (g.default.reportEvent("2", {
            //     length: (a.images || []).length
            // }), wx.previewImage({
            //     urls: (a.images || []).map(function(e) {
            //         return "".concat(e, "/0");
            //     }),
            //     current: "".concat(o, "/0")
            // }));
        },
        onImageLoad: function(e) {
            // console.log("onImageLoad"), console.log(e);
            // var t, n = e.currentTarget.dataset.id, i = e.detail, a = i.width, s = i.height, r = this.data, c = r.sideLength, l = r.list, h = (void 0 === l ? [] : l).findIndex(function(e) {
            //     return e.id === n;
            // }), u = c, d = c;
            // -1 !== h && (a / s > 3 || a / s < 1 / 3 ? a > s ? d = Math.floor(u / 3) : u = Math.floor(d / 3) : a > s ? d = Math.floor(u * s / a) : u = Math.floor(d * a / s), 
            // this.setData((o(t = {}, "list[".concat(h, "].images_width"), u), o(t, "list[".concat(h, "].images_height"), d), 
            // t)));
        },
        hideHalfScreen: function() {
            // this.setData({
            //     isShowHalfScreen: !1
            // });
        },
        releaseAnno: function() {
            // var e = wx.getAccountInfoSync().miniProgram.appId;
            // (0, c.openReceipt)("/pages/announcement/edit/edit?appid=".concat(e, "&path=").concat(encodeURIComponent("/wxa/pages/offlinePay/index?scene=ANNOUNCE")));
        },
        onContentRefresh: function() {
            // var e = this;
            // console.log("onContentRefresh"), this.load({
            //     init: !0,
            //     complete: function() {
            //         e.setData({
            //             triggered: !1
            //         });
            //     }
            // });
        },
        onContentReachBottom: function() {
            // console.log("onContentReachBottom"), this.load();
        },
        onContentScroll: function(e) {
            // if (console.log(e), f.default.getContextExist()) {
            //     var t = e.detail.scrollTop, n = this.data, i = n.contentHeight, o = n.lastScrollTop;
            //     this.setData({
            //         lastScrollTop: t
            //     });
            //     var a = f.default.getHeaderStatus();
            //     1 === a && o < t && t > i ? this.collapse() : 0 === a && o > t && t < 100 && this.expand();
            // }
        },
        checkCollapseStatus: function() {
            // this.setData({
            //     isCollapsed: 1 !== f.default.getHeaderStatus()
            // });
        },
        collapse: function() {
            // this.refreshScrollViewHeight(), this.setData({
            //     isCollapsed: !0
            // }), f.default.collapseHeader();
        },
        expand: function() {
            // var e = this;
            // this.setData({
            //     isCollapsed: !1
            // }), f.default.expandHeader(function() {
            //     e.refreshScrollViewHeight();
            // });
        },
        refreshScrollViewHeight: function() {
            // var e = this;
            // return i(t.default.mark(function i() {
            //     var o, a;
            //     return t.default.wrap(function(t) {
            //         for (;;) switch (t.prev = t.next) {
            //           case 0:
            //             return t.next = 2, (0, u.getSystemInfo)();

            //           case 2:
            //             if (t.t0 = t.sent, t.t0) {
            //                 t.next = 5;
            //                 break;
            //             }
            //             t.t0 = {};

            //           case 5:
            //             o = t.t0, a = o.screenHeight || 0, wx.createSelectorQuery().in(e).selectAll("#list-container").boundingClientRect(function(t) {
            //                 if (t && 0 !== t.length) {
            //                     var i = n(t, 1)[0];
            //                     e.setData({
            //                         contentHeight: a - i.top
            //                     });
            //                 }
            //             }).exec();

            //           case 8:
            //           case "end":
            //             return t.stop();
            //         }
            //     }, i);
            // }))();
        },
        operateAnnouncement: function(e) {
            // var t = (e.currentTarget.dataset || {}).id;
            // this.showActionSheet(t);
        },
        showActionSheet: function(e) {
            // var t = this, i = (this.data.list || []).filter(function(t) {
            //     return t.id === e;
            // }), o = n(i, 1)[0];
            // this.setData({
            //     isShowActionSheet: !0,
            //     annoActionSheet: o ? s(s({}, o), {}, {
            //         textArray: (o.text || "").split("\n")
            //     }) : {}
            // }), setTimeout(function() {
            //     t.setData({
            //         animationClassActionSheet: !0
            //     });
            // }, 100);
        },
        hideActionSheet: function() {
            // var e = this;
            // this.setData({
            //     animationClassActionSheet: !1
            // }), setTimeout(function() {
            //     e.setData({
            //         isShowActionSheet: !1
            //     });
            // }, 300);
        },
        showShareImgDialog: function() {
            // var e = this;
            // this.hideActionSheet();
            // var t = this.data.annoActionSheet;
            // (0, l.getQRcode)({
            //     id: t.id,
            //     showLoading: !0,
            //     success: function(n) {
            //         e.setData({
            //             qrcode: n.qrcode ? "data:image/png;base64,".concat(n.qrcode) : "",
            //             isShowShareImgDialog: !0,
            //             descQRCode: t.jump_link && t.jump_link.scene && h.QRCODE_DESC[t.jump_link.scene] || h.QRCODE_DESC[h.SCENE_ENUM.ANNOUNCE]
            //         });
            //     }
            // });
        },
        hideShareImgDialog: function() {
            // this.setData({
            //     isShowShareImgDialog: !1,
            //     qrcode: ""
            // });
        },
        saveShareImg: function() {
            // var e = this;
            // if (this.data.qrcode) {
            //     wx.showLoading({
            //         title: "生成中",
            //         mask: !0
            //     });
            //     var t = new p.default({
            //         obj: this,
            //         limit: ".dialog-share__bd"
            //     }, function(t) {
            //         var n = t || {}, i = n.status, o = n.data, a = void 0 === o ? {} : o;
            //         switch (i) {
            //           case "success":
            //             wx.showLoading({
            //                 title: "保存中",
            //                 mask: !0
            //             }), (0, S.doAuthorize)("writePhotosAlbum", function() {
            //                 wx.saveImageToPhotosAlbum({
            //                     filePath: a.url,
            //                     success: function() {
            //                         e.hideShareImgDialog(), wx.showToast({
            //                             icon: "success",
            //                             title: "已保存到相册",
            //                             duration: 2e3
            //                         });
            //                     },
            //                     fail: function() {
            //                         wx.showToast({
            //                             icon: "none",
            //                             title: "图片保存失败",
            //                             duration: 2e3
            //                         });
            //                     }
            //                 });
            //             });
            //             break;

            //           case "fail":
            //           case "version-error":
            //             wx.hideLoading(), wx.showToast({
            //                 icon: "none",
            //                 title: "图片保存失败",
            //                 duration: 2e3
            //             });
            //         }
            //     });
            //     wx.createSelectorQuery().in(this).selectAll(".dialog-share__bd").boundingClientRect(function(i) {
            //         if (i && 0 !== i.length) {
            //             var o = n(i, 1)[0];
            //             e.setData({
            //                 optionShareImg: {
            //                     width: o.width,
            //                     height: o.height,
            //                     picZoom: 4
            //                 }
            //             }, function() {
            //                 var n = e.data.optionShareImg;
            //                 t.save(n);
            //             });
            //         } else wx.showToast({
            //             icon: "none",
            //             title: "图片保存失败",
            //             duration: 2e3
            //         });
            //     }).exec();
            // } else wx.showToast({
            //     icon: "none",
            //     title: "小程序码加载完成后才能开启下载",
            //     duration: 2e3
            // });
        },
        stopPageScroll: function() {},
        remove: function() {
            // var e = this;
            // this.hideActionSheet();
            // var t = this.data.annoActionSheet;
            // wx.showModal({
            //     content: "删除后，顾客将无法查看此动态",
            //     showCancel: !0,
            //     confirmText: "删除",
            //     cancelText: "取消",
            //     confirmColor: "#FA5151",
            //     success: function(n) {
            //         n.confirm && (0, l.removeAnno)({
            //             id: t.id,
            //             showLoading: !0,
            //             success: function() {
            //                 var n = e.data.list;
            //                 e.setData({
            //                     list: (n || []).filter(function(e) {
            //                         return e.id !== t.id;
            //                     })
            //                 });
            //             }
            //         });
            //     }
            // });
        }
    }
});