// var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/defineProperty"), a = e(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../@babel/runtime/helpers/objectSpread2"), n = e(require("../../frame/frame")), r = require("../../config/takeaway"), s = require("../../utils/takeaway/index"), d = require("../../utils/takeaway/request"), u = require("../../utils/takeaway/detail"), l = e(require("../../utils/takeaway/share")), c = e(require("../../utils/takeaway/dom")), h = e(require("../../utils/takeaway/lazyLoading")), f = e(require("../../utils/frequencyLimit")), g = e(require("../../utils/report")), p = require("../../utils/redirectTo"), v = require("../../../utils/merchant"), m = e(require("../../config/global")), _ = wx.getSystemInfoSync(), S = 0, y = {
//   buyNum: 1,
//   checkedSkuIndex: 0,
//   checkedProps: []
// };

Component({
  properties: {
    state: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 店铺营业时间信息等
    business: {
      openSwitch: !0, //店铺是否营业
      isInBusinessHours: "",
      businessNum: 5, //小于3显示营业时间，大于3缩略显示营业时间
      businessTip: "08:00-18:00",
      briefTip: "说明详情"
    },
    // 是否在营业时间
    isPreOrderTime: !0,
    // 购物车商品是否能够提交支付
    lackNecessary: !1,
    // 购物车列表
    shoppingCart: [{}],
    scrollCateId: "",
    // 是否在营业中
    isOpening: !0,
    curCateIndex: 0,
    shelf: [{
        category_id: 1,
        category_type: 'EN_CATEGORY_TYPE_FlASHSALE',
        category_name: '限量秒杀',
        goods_list: [{
            flash_sale_price: 1000, //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.I4Wbl105--tdrKkO0ZsgXAHaE6?w=265&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量秒杀商品", //超长文本
            name: "秒杀商品", //正常商品名称
            stock_num: "", //库存数量
            flash_sale_stock_num: '3', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: 1200, //秒杀价格
            image_url: "https://ts1.cn.mm.bing.net/th/id/R-C.5d5a334d8503410eb10ffbbb8e8107f2?rik=BqYlFKJThI%2fyPg&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20171014%2f7124472_091040976000_2.jpg&ehk=nPjsgni7TR%2f%2bYyASo1dbCdwxQW6QaKThH4YAA8jLASw%3d&risl=&pid=ImgRaw&r=0", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "正常秒杀商品", //正常商品名称
            stock_num: "", //库存数量
            flash_sale_stock_num: '13', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: 1800, //秒杀价格
            image_url: "https://ts1.cn.mm.bing.net/th/id/R-C.b9359d960d013d5b280866bf4fc20479?rik=Zq5V7faiHcDfJA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50042%2f4307.jpg_wh1200.jpg&ehk=WOOXx2qAjNC%2b3ibrF7j%2boEmP1vyy98frM8Hh%2fPn6t70%3d&risl=&pid=ImgRaw&r=0", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "已售罄商品", //正常商品名称
            stock_num: "", //库存数量
            flash_sale_stock_num: '3', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: 2100, //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.aQMyppAHeoi2Q0WdgV3cYwHaFj?w=232&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "已下架商品", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '3', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ]
      },
      {
        category_id: 2,
        category_type: 'EN_CATEGORY_TYPE_DISCOUNT',
        category_name: '本店优惠',
        goods_list: [{
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.oFCtpAibc60bLGo4nXxexQHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量本店优惠", //超长文本
            name: "本店优惠", //正常商品名称
            stock_num: "20", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '3000', //限购价格
            discount_price_one_order_limit: "10", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.OB_HXYpPf_E4Al-LVdzJHQHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "正常优惠商品", //正常商品名称
            stock_num: "56", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: true, //状态控制库存数量展示为true时有最小价
            min_price: 800, //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.J1xQxbiEW-5-1lCkf9G6pwHaE2?w=285&h=187&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "已售罄优惠商品", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '3', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.F-3Dg7EhQJHT_UOBPShH8QHaHE?w=198&h=189&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "已下架优惠商品", //正常商品名称
            stock_num: "10", //库存数量
            flash_sale_stock_num: '3', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ],
      },
      {
        category_id: 3,
        category_type: '',
        category_name: '新鲜蔬菜',
        goods_list: [{
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.pNjvVHqXWhkzFoZ1IaHAbgHaEK?w=332&h=187&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量新鲜蔬菜", //超长文本
            name: "新鲜蔬菜", //正常商品名称
            stock_num: "200", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 4000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse2-mm.cn.bing.net/th/id/OIP-C._0gHVAdz599KJC4b-soyVAHaD9?w=295&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "正常蔬菜商品", //正常商品名称
            stock_num: "5", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "1000", //月售总数
            num: 0, //选择商品数量
            price: 1000, //商品原价
            has_spec: true, //状态控制库存数量展示为true时有最小价
            min_price: 500, //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.srRiUPHyb85kcZ-bT4Vf2AHaE8?w=284&h=190&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "已售罄蔬菜商品", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.aQMyppAHeoi2Q0WdgV3cYwHaFj?w=232&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "已下架优惠商品", //正常商品名称
            stock_num: "10", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 5000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ],
      },
      {
        category_id: 4,
        category_type: '',
        category_name: '肉类系',
        goods_list: [{
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ZdRcl3C7O5GGcWILO5XauwHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量肉类系", //超长文本
            name: "新鲜蔬菜", //正常商品名称
            stock_num: "200", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 4000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OwNtqiAUwHPnsSE6po-2HAHaE7?w=300&h=200&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "猪肉", //正常商品名称
            stock_num: "5", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "1000", //月售总数
            num: 0, //选择商品数量
            price: 11000, //商品原价
            has_spec: true, //状态控制库存数量展示为true时有最小价
            min_price: 500, //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.wklxsn13fczaQXto1aCMFgHaEp?w=296&h=186&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "牛肉", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 34000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.ciglF9p1nwGMzcMnQk7edQHaFc?w=227&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "羊肉", //正常商品名称
            stock_num: "10", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 7800, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ],
      },
      {
        category_id: 5,
        category_type: '',
        category_name: '海鲜系',
        goods_list: [{
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.rn7QJ5Q6ZW8XwLDGRLpetgHaE7?w=290&h=193&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量螃蟹", //超长文本
            name: "新鲜蔬菜", //正常商品名称
            stock_num: "200", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 4000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.doS_y3-3-_Pwz8Gq-l2MVAHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "大虾", //正常商品名称
            stock_num: "5", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "1000", //月售总数
            num: 0, //选择商品数量
            price: 11000, //商品原价
            has_spec: true, //状态控制库存数量展示为true时有最小价
            min_price: 500, //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.bJzWgcJ3eao1J2-dNZfhjAHaFA?w=256&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "鱼类", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 34000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.m4W6v2UfAgtZmJngZOsmigHaE7?w=277&h=184&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "龟类", //正常商品名称
            stock_num: "10", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 7800, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ],
      },
      {
        category_id: 6,
        category_type: '',
        category_name: '火锅系',
        goods_list: [{
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.52flsmEPIuuvBJ2jm4ZqfwHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "超长限量火锅", //超长文本
            name: "新鲜蔬菜", //正常商品名称
            stock_num: "200", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 4000, //商品原价
            has_spec: false, //正常商品状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.eBRktvsD8TwqZG1dgAk8mgHaE8?w=291&h=193&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_NORMAL", //商品状态
            highName: "", //超长文本
            name: "毛肚", //正常商品名称
            stock_num: "5", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "1000", //月售总数
            num: 0, //选择商品数量
            price: 11000, //商品原价
            has_spec: true, //状态控制库存数量展示为true时有最小价
            min_price: 500, //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.RS0T4FKBvSGCjXONU7ZKEgHaEY?w=278&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_SOLD_OUT", //商品状态
            highName: "", //超长文本
            name: "牛肉火锅", //正常商品名称
            stock_num: "15", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 34000, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          },
          {
            flash_sale_price: '', //秒杀价格
            image_url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.WZur1mxPsN4s9SYHgySX1AHaEW?w=269&h=180&c=7&r=0&o=5&pid=1.7", //商品图片地址
            goods_state: "EN_GOODS_STATE_OUT_OFF_SHELF", //商品状态
            highName: "", //超长文本
            name: "羊肉火锅", //正常商品名称
            stock_num: "10", //库存数量
            flash_sale_stock_num: '', //秒杀库存数量
            sales_count: "2000", //月售总数
            num: 0, //选择商品数量
            price: 7800, //商品原价
            has_spec: false, //状态控制库存数量展示
            min_price: '', //has_spec为true时最小值
            discount_price: '', //限购价格
            discount_price_one_order_limit: "", //限购数量
          }
        ],
      },
    ],
    isGraySearch: !0,
    isNeedPage: !1,
    scrollViewHeight: '',
    feeText: "免配送费",
    curHeaderStatus: 0,
    getDataDone: !0,
    merchantName: "",
    merchantAvatar: "",
    showPrevCate: !1,
    showPreOrder: !1,
    isSjt: !1,
    highLightNecessary: !1
  },
  attached: function () {
    console.log(112)

    // this.init(), this.registerListeners();
  },
  detached: function () {
    // g.default.reportEvent("takeaway-detached"), this.updateHistory(), this.removeListeners(), 
    // l.default.clearPic(), r.takeaway.tableNo = void 0, (0, d.clearTabInfo)();
  },
  ready: function () {
    console.log(2)
    this.calScrollHeight()
    // g.default.reportEvent("takeaway-detached"), this.updateHistory(), this.removeListeners(), 
    // l.default.clearPic(), r.takeaway.tableNo = void 0, (0, d.clearTabInfo)();
  },
  methods: {
    init: function () {
      // var e = this;
      // return o(a.default.mark(function t() {
      //     var o, i;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return r.takeaway.tableNo = null === (i = null === (o = e.data.state) || void 0 === o ? void 0 : o.options) || void 0 === i ? void 0 : i.table_no, 
      //             t.next = 3, e.calShoppingCart();

      //           case 3:
      //             e.getShelfData({
      //                 time: "onload"
      //             }), e.getShareSingle(), (0, v.getMerchantInfo)({
      //                 success: function(t) {
      //                     e.setData({
      //                         merchantName: t.mch_store_name,
      //                         merchantAvatar: t.mch_store_icon
      //                     });
      //                 },
      //                 fail: function(e) {
      //                     g.default.reportEvent("getMerchantInfoFail", e);
      //                 }
      //             }), e.getFimActive(), e.setData({
      //                 isSjt: m.default.isSjt
      //             }), r.takeaway.entryTime = Math.floor(new Date().getTime() / 1e3), (0, u.getServerTab)();

      //           case 10:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
    },
    getFimActive: function () {
      // (0, d.getFimActiveInfo)().then(function(e) {
      //     r.takeaway.fimActive = (null == e ? void 0 : e.member_fav) || "";
      // });
    },
    onTabShow: function () {
      // this.setData({
      //     curHeaderStatus: n.default.getHeaderStatus()
      // }), this.calScrollHeight(), this.updateBusiness();
    },
    registerListeners: function () {
      // var e = this;
      // n.default.event.on("takeawayShareSingle", function() {
      //     e.getShareSingle();
      // }), n.default.event.on("createOrderSucc", function() {
      //     e.setData((0, r.getDefaultData)()), e.getShelfData();
      // }), n.default.event.on("goodChanged", function(t) {
      //     e.updateGoodInfo(t);
      // }), n.default.event.on("addNecessaryGood", function() {
      //     e.updateGoodInfo();
      // }), n.default.event.on("syncShoppingCart", function(t) {
      //     e.updateCartRelated(t);
      // }), n.default.event.on("goNecessary", function() {
      //     e.goNecessary();
      // });
    },
    removeListeners: function () {
      // n.default.event.off("onTakeawayShare"), n.default.event.off("createOrderSucc"), 
      // n.default.event.off("goodChanged");
    },
    updateBusiness: function () {
      // var e = this;
      // Date.now() - r.takeaway.updateBusinessTime > 2e4 && (0, d.getSettingInfo)(!1).then(function(t) {
      //     (null == t ? void 0 : t.business_hours) && (e.handleBusinessHour(t), (0, s.setBusinessInfo)(t.business_hours), 
      //     e.calScrollHeight());
      // });
    },
    calScrollHeight: function () {

      var e = this,
        // t = this.selectComponent("#bottom");
        t = 0;

      wx.createSelectorQuery().in(e).select('#bottom').boundingClientRect(function (rect) {
        console.log(rect)
        if (rect) {
          t = rect.width
        }
        // rect.id      // 节点的ID
        // rect.dataset // 节点的dataset
        // rect.left    // 节点的左边界坐标
        // rect.right   // 节点的右边界坐标
        // rect.top     // 节点的上边界坐标
        // rect.bottom  // 节点的下边界坐标
        // rect.width   // 节点的宽度
        // rect.height  // 节点的高度
      }).exec()
      // t && c.default.getBottomHeight(this.data, t).then(function(t) {
      var a = wx.getSystemInfoSync().screenHeight || 0;
      wx.createSelectorQuery().in(e).select("#container").boundingClientRect(function (o) {
        console.log(a)
        console.log(o)
        console.log(t)
        if (o) {
          var i = a - o.top - t;
          console.log(i)
          e.setData({
            scrollViewHeight: i
          });
        }
      }).exec();
      // }).catch(function(e) {
      //     console.log(e);
      // });
    },
    calShoppingCart: function (e) {
      // var t = this;
      // return o(a.default.mark(function o() {
      //     var i, n, s;
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             i = [];
      //             try {
      //                 (n = wx.getStorageSync("menuToOrder")).shelf_info === r.takeaway.shelfInfo && (i = n.menu.filter(function(e) {
      //                     return "EN_GOODS_STATE_NORMAL" === e.goods_state;
      //                 }));
      //             } catch (e) {
      //                 e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
      //                 console.error(e);
      //             }
      //             if (g.default.reportEvent("calShoppingCart", {
      //                 type: e ? "updateFromCreateOrder" : "getHistoryData",
      //                 newShoppingCart: null == e ? void 0 : e.length,
      //                 historyMenu: i.length
      //             }), e || i.length) {
      //                 a.next = 5;
      //                 break;
      //             }
      //             return a.abrupt("return");

      //           case 5:
      //             if (s = i, !e) {
      //                 a.next = 10;
      //                 break;
      //             }
      //             s = e, a.next = 13;
      //             break;

      //           case 10:
      //             return a.next = 12, (0, d.getCartFromServer)(i);

      //           case 12:
      //             s = a.sent;

      //           case 13:
      //             t.setData({
      //                 shoppingCart: s
      //             }, function() {
      //                 t.calScrollHeight();
      //             });

      //           case 14:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, o);
      // }))();
    },
    updateHistory: function () {
      // wx.setStorage({
      //     key: "menuToOrder",
      //     data: {
      //         shelf_info: r.takeaway.shelfInfo,
      //         menu: this.data.shoppingCart
      //     }
      // });
    },
    getShelfData: function () {
      // var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      //     time: ""
      // }, i = new Date().getTime(), n = [];
      // wx.showLoading({
      //     title: "加载中"
      // }), (0, d.getShelfDetail)().then(function() {
      //     var u = o(a.default.mark(function o(u) {
      //         var l, c, f, p, v, m, _;
      //         return a.default.wrap(function(a) {
      //             for (;;) switch (a.prev = a.next) {
      //               case 0:
      //                 if (c = new Date().getTime(), (0, s.authorizePay)(u.open_mch_miniapp_pay, u.user_type), 
      //                 n = u.union_categorys || [], !u.show_act) {
      //                     a.next = 8;
      //                     break;
      //                 }
      //                 return a.next = 6, (0, d.getFlashSaleGoods)();

      //               case 6:
      //                 (f = a.sent).length && n.unshift({
      //                     category_id: 1,
      //                     category_name: "限量秒杀",
      //                     category_type: "EN_CATEGORY_TYPE_FlASHSALE",
      //                     category_index: 0,
      //                     goods_list: f
      //                 });

      //               case 8:
      //                 p = (0, s.handleFeeText)(u.order_fee_list, u.support_order_type), v = (0, s.getNeedNecessary)(n, e.data.shoppingCart), 
      //                 n = (0, s.handleNumKey)(n, e.data.shoppingCart, "shelf"), u.is_need_page || (n = n.filter(function(e) {
      //                     return e.goods_list.length > 0;
      //                 })), u.is_need_page && u.page_info && h.default.initCateRequestPage(n, u.page_info), 
      //                 e.setShareInfo(n), u.business_hours && e.handleBusinessHour(u, t), m = new Date().getTime(), 
      //                 _ = u.page_info && !u.page_info.is_last_page || !1, 1 === (null === (l = n[0]) || void 0 === l ? void 0 : l.category_id) && (_ = !1), 
      //                 e.setData({
      //                     shelf: n,
      //                     curCateIndex: 0,
      //                     lackNecessary: v,
      //                     feeText: p,
      //                     isNeedPage: u.is_need_page,
      //                     totalGoods: u.total_goods,
      //                     getDataDone: !0,
      //                     hasMoreData: _,
      //                     supportOrderType: u.support_order_type,
      //                     userType: u.user_type,
      //                     nextBusinessTime: r.takeaway.nextBusinessTime
      //                 }, function() {
      //                     var e = new Date().getTime();
      //                     g.default.reportEvent("takeawayTimeRecord", JSON.stringify({
      //                         totalGoods: u.total_goods,
      //                         reqTime: c - i,
      //                         setTime: e - m
      //                     }));
      //                 }), wx.hideLoading(), e.handleHeight(n), e.calScrollHeight(), g.default.reportEvent("supportOrderType", u.support_order_type), 
      //                 (0, s.calTableTip)();

      //               case 24:
      //               case "end":
      //                 return a.stop();
      //             }
      //         }, o);
      //     }));
      //     return function(e) {
      //         return u.apply(this, arguments);
      //     };
      // }()).catch(function(e) {
      //     g.default.reportEvent("getShelfDetailError", e), wx.hideLoading();
      // }), (0, d.getGrayInfo)().then(function(t) {
      //     e.setData({
      //         isGraySearch: t.gray_info.is_gray_search_goods
      //     }), r.grayInfo.is_gray_customer_addr = t.gray_info.is_gray_customer_addr;
      // });
    },
    getPreOrder: function (e) {
      // var t, a = -1 !== [ "miniproShare", "receiptSingleShare", "receiptShare" ].indexOf(null === (t = this.data.state.options) || void 0 === t ? void 0 : t.from);
      // return (0, s.isPreOrderTime)(e) && !a;
    },
    closePreOrder: function () {
      // this.setData({
      //     showPreOrder: !1
      // });
    },
    getShareSingle: function () {
      // var e, t, a, o, i, r, s = this;
      // n.default.getActiveTab(function(e) {
      //     e.spu_id && ((0, d.getGoodDetail)(e.spu_id, s.data.shoppingCart).then(function(e) {
      //         e.name && s.setGoodDetailMask(e), e.discount_price && g.default.reportEvent("enterFromSingleCardDiscount");
      //     }), g.default.reportEvent("enterFromSingleCard"));
      // }), (null === (e = this.data.state.options) || void 0 === e ? void 0 : e.from) && "selfShare" === (null === (t = this.data.state.options) || void 0 === t ? void 0 : t.from) && (0, 
      // d.getGoodDetail)(null === (a = this.data.state.options) || void 0 === a ? void 0 : a.spuId, this.data.shoppingCart).then(function(e) {
      //     var t = !!e.flash_sale_price, a = "EN_GOODS_STATE_SOLD_OUT" === e.goods_state || 0 === e.flash_sale_stock_num;
      //     t && a ? s.setData({
      //         showSoldOutDialog: !0,
      //         soldOutGood: e
      //     }) : (e.name && s.setGoodDetailMask(e), e.discount_price && g.default.reportEvent("enterFromSingleMiniproDiscount"));
      // }), ("receiptSingleShare" === (null === (o = this.data.state.options) || void 0 === o ? void 0 : o.from) || "receiptShare" === (null === (i = this.data.state.options) || void 0 === i ? void 0 : i.from)) && (0, 
      // d.getGoodDetail)(null === (r = this.data.state.options) || void 0 === r ? void 0 : r.spuId, this.data.shoppingCart).then(function(e) {
      //     if (e.name) {
      //         var t = s.selectComponent("#singleshare"), a = l.default.getShareText("single", "EN_USER_TYPE_BOSS", {
      //             curGood: e
      //         });
      //         s.setData({
      //             showShareSingleMask: !0,
      //             curGood: e,
      //             singleShareText: a
      //         }), l.default.setSharePic("single", t, e.spu_id);
      //     }
      // });
    },
    handleBusinessHour: function (e) {
      // var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      //     time: ""
      // }, a = (0, s.getBusinessHour)(e.business_hours);
      // this.setData(i(i({}, a), {
      //     isPreOrderTime: (0, s.isPreOrderTime)(e),
      //     isOpening: a.isOpening || (0, s.isPreOrderTime)(e),
      //     showPreOrder: "onload" === (null == t ? void 0 : t.time) && this.getPreOrder(e)
      // })), r.takeaway.isPreOrderTime = (0, s.isPreOrderTime)(e);
    },
    // 切换分类
    changeCate: function (e) {
      console.log(e)
      this.setData({
        curCateIndex: e.currentTarget.dataset.index,
        scrollCateId: `cate-${e.currentTarget.dataset.id}`

      })
      // var t;
      // return g.default.reportEvent("changeCateTab", JSON.stringify(null === (t = null == e ? void 0 : e.currentTarget) || void 0 === t ? void 0 : t.dataset)), 
      // this.data.isNeedPage ? this.changeCatePage(e) : this.changeCateNoPage(e);
    },
    changeCateNoPage: function (e) {
      // var t, a, o, i, n = null === (a = null === (t = null == e ? void 0 : e.currentTarget) || void 0 === t ? void 0 : t.dataset) || void 0 === a ? void 0 : a.index, r = "cate-".concat(null === (i = null === (o = null == e ? void 0 : e.currentTarget) || void 0 === o ? void 0 : o.dataset) || void 0 === i ? void 0 : i.id);
      // return "number" == typeof n && this.setData({
      //     scrollCateId: r,
      //     curCateIndex: n
      // }), Promise.resolve();
    },
    changeCatePage: function (e) {
      // var t = this, a = e.currentTarget.dataset.id, o = e.currentTarget.dataset.index, i = this.data.shelf[o].goods_list.length;
      // return new Promise(function(e) {
      //     i > 0 ? (t.setData({
      //         curCateIndex: o,
      //         hasMoreData: h.default.hasMoreCateData(a)
      //     }), wx.hideLoading(), e()) : t.getMoreData(a, o).then(function() {
      //         t.setData({
      //             curCateIndex: o
      //         }), wx.hideLoading(), e();
      //     });
      // });
    },
    goodScroll: function (e) {
      // var t = e.detail.scrollTop;
      // f.default.throttle(this.refreshCurCate(t), 300), f.default.throttle(this.controlHeader(t), 300);
    },
    controlHeader: function (e) {
      // if (n.default.getContextExist()) {
      //     var t = n.default.getHeaderStatus(), a = !1, o = !1;
      //     if ("string" == typeof e) a = 1 === t && "scrolltolower" === e, o = 0 === t && "scrolltoupper" === e; else if ("number" == typeof e) {
      //         var i = this.data.lastScrollTop;
      //         this.setData({
      //             lastScrollTop: e
      //         }), a = 1 === t && e > this.data.scrollViewHeight && i < e, o = 0 === t && e < 100 && i > e;
      //     }
      //     a && this.collapse(), o && this.expand();
      // }
    },
    collapse: function () {
      // this.setData({
      //     curHeaderStatus: 0
      // }), n.default.collapseHeader(), this.calScrollHeight();
    },
    expand: function () {
      // var e = this;
      // this.setData({
      //     curHeaderStatus: 1
      // }), n.default.expandHeader(function() {
      //     e.calScrollHeight();
      // });
    },
    refreshCurCate: function (e) {
      // var t = this.data.shelf, a = this.data.curCateIndex, o = t.findIndex(function(t) {
      //     return t.height && t.height > e;
      // });
      // a !== o && this.changeCate({
      //     currentTarget: {
      //         dataset: {
      //             index: o
      //         }
      //     }
      // });
    },
    previewDetail: function (e) {
      console.log(e)
      // var a = this, o = (null == e ? void 0 : e.detail) || {}, i = o.good, n = o.cateindex, r = o.goodindex;
      // this.isNoNeedGetDetail(i) ? (console.log("从列表打开商品详情浮层，包含属性规格信息"), this.setGoodDetailMask(i)) : (console.log("从列表打开商品详情浮层，缺少属性规格信息"), 
      // (0, d.getGoodDetail)(i.spu_id, this.data.shoppingCart).then(function(e) {
      //     a.setGoodDetailMask(e), a.setData(t({}, "shelf[".concat(n, "].goods_list[").concat(r, "]"), e));
      // }).catch(function() {
      //     a.setGoodDetailMask(i);
      // }));
    },
    clickDetailDialogButton: function (e) {
      // var t, a, o = this, i = (null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.spuid) || 0;
      // (g.default.reportEvent("clickDetailDialogButton", {
      //     curPage: this.data.showPage,
      //     good: this.data.curGood
      // }), "detail" === this.data.showPage) ? this.isNoNeedGetDetail(this.data.curGood) ? (this.setData({
      //     showPage: "booking"
      // }), console.log("从详情浮层切换到下单浮层，包含属性规格信息")) : (console.log("从详情浮层切换到下单浮层，缺少属性规格信息"), 
      // (0, d.getGoodDetail)(this.data.curGood.spu_id, this.data.shoppingCart).then(function(e) {
      //     o.setData({
      //         curGood: e,
      //         showPage: "booking"
      //     });
      // })) : "booking" === this.data.showPage && (y = null === (a = null == e ? void 0 : e.detail) || void 0 === a ? void 0 : a.choosedInfo, 
      // this.addFromBooking(i));
    },
    addFromBooking: function (e) {
      // this.modifyGood(e, "add", y.buyNum, this.data.curGood), this.hideGoodDetail();
    },
    addFromList: function (e) {
      // var t, a = (null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.spuid) || 0;
      // this.modifyGood(a, "add", 1);
    },
    choosePropFromList: function (e) {
      // var a, o, i, n = this, r = (null === (a = null == e ? void 0 : e.detail) || void 0 === a ? void 0 : a.spuid) || 0, s = Number(null === (o = null == e ? void 0 : e.detail) || void 0 === o ? void 0 : o.cateindex), u = Number(null === (i = null == e ? void 0 : e.detail) || void 0 === i ? void 0 : i.goodindex), l = this.getGood(r);
      // this.isNoNeedGetDetail(l) ? (console.log("从列表直接点击选规格，包含属性规格信息"), this.setGoodDetailMask(l, "booking")) : (console.log("从列表直接点击选规格，缺少属性规格信息"), 
      // (0, d.getGoodDetail)(r, this.data.shoppingCart).then(function(e) {
      //     n.setGoodDetailMask(e, "booking"), n.setData(t({}, "shelf[".concat(s, "].goods_list[").concat(u, "]"), e));
      // }));
    },
    minusFromList: function (e) {
      // var t, a = (null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.spuid) || 0;
      // this.modifyGood(a, "minus", 1);
    },
    addFromShoppingCart: function (e) {
      // var t, a = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.index, o = this.data.shoppingCart || [];
      // o[a] && o[a].num && (o[a].num += 1), this.updateCartRelated(o);
    },
    minusFromShoppingCart: function (e) {
      // var t, a, o, i, n, r = null === (t = null == e ? void 0 : e.detail) || void 0 === t ? void 0 : t.index, s = this.data.shoppingCart;
      // (null === (a = s[r]) || void 0 === a ? void 0 : a.num) && (null === (o = s[r]) || void 0 === o ? void 0 : o.num) > 1 ? s[r].num -= 1 : (null === (i = s[r]) || void 0 === i ? void 0 : i.num) && 1 === (null === (n = s[r]) || void 0 === n ? void 0 : n.num) && s.splice(r, 1), 
      // this.updateCartRelated(s);
    },
    modifyGood: function (e, t, a, o) {
      // e && this.updateShoppingCart(e, t, a, o);
    },
    updateShoppingCart: function (e, t, a, o) {
      // for (var n, r = this.data.shoppingCart, d = !0, u = !1, l = 0, c = a || 1, h = y, f = h.checkedProps, g = h.checkedSkuIndex, p = null == o ? void 0 : o.has_prop, v = null == o ? void 0 : o.has_spec, m = (null == o ? void 0 : o.sku_item_list) && (null == o ? void 0 : o.sku_item_list[g]), _ = 0; _ < r.length; _++) {
      //     var S = !p || p && (0, s.isEqualProps)(r[_].checked_prop_item_list, f), w = !v || v && (null == m ? void 0 : m.sku_id) === (null === (n = r[_].checked_sku_item) || void 0 === n ? void 0 : n.sku_id);
      //     r[_].spu_id === e && S && w && ("add" === t ? r[_].num = (r[_].num || 0) + c : "minus" === t && r[_].num > c ? r[_].num = r[_].num - c : "minus" === t && r[_].num === c && (u = !0, 
      //     l = _), d = !1);
      // }
      // if (d) {
      //     var D = this.getGood(e);
      //     p && D.need_choose_spec && (D.checked_prop_item_list = f), v && (D.checked_sku_item = m), 
      //     r.push(i(i({}, D), {
      //         num: c
      //     }));
      // }
      // u && r.splice(l, c), this.updateCartRelated(r);
    },
    updateCartRelated: function (e) {
      // var t = (0, s.getNeedNecessary)(this.data.shelf, e);
      // this.setData({
      //     shoppingCart: e,
      //     lackNecessary: t,
      //     highLightNecessary: this.data.highLightNecessary && t
      // }), this.calScrollHeight(), this.updateCurGood(), this.updateShelf();
    },
    updateCurGood: function () {
      // if (this.data.curGood.spu_id) {
      //     var e = (0, s.getSpuNum)(this.data.curGood.spu_id, this.data.shoppingCart);
      //     this.setData({
      //         "curGood.num": e
      //     });
      // }
    },
    updateShelf: function () {
      // var e = (0, s.handleNumKey)(this.data.shelf, this.data.shoppingCart, "shelf");
      // this.setData({
      //     shelf: e
      // });
    },
    getGood: function (e) {
      // if (e === this.data.curGood.spu_id) return this.data.curGood;
      // var t = [];
      // return this.data.shelf.forEach(function(e) {
      //     t = t.concat(e.goods_list);
      // }), t.find(function(t) {
      //     return t.spu_id === e;
      // }) || {};
    },
    handleHeight: function (e) {
      // var t = this;
      // return o(a.default.mark(function o() {
      //     var i, n;
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             return i = [], a.next = 3, c.default.batchgetDomInfo(".cate-block", "height", t);

      //           case 3:
      //             n = a.sent, e.forEach(function(e, t) {
      //                 var a = 0;
      //                 t > 0 && (a = i[t - 1].height || 0);
      //                 var o = a + (n[t] || 0);
      //                 i.push(Object.assign(e, {
      //                     height: o
      //                 }));
      //             }), t.setData({
      //                 shelf: i
      //             });

      //           case 6:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, o);
      // }))();
    },
    switchShoppingCart: function () {
      // this.calScrollHeight();
    },
    confirmDelete: function () {
      // this.clearShoppingData();
    },
    clearShoppingData: function () {
      // var e = this, t = this.data.shelf.map(function(e) {
      //     var t = e;
      //     return e && e.goods_list && e.goods_list.length && (t.goods_list = e.goods_list.map(function(e) {
      //         var t = e;
      //         return t.num = 0, t;
      //     })), t;
      // });
      // this.setData({
      //     shelf: t,
      //     shoppingCart: [],
      //     lackNecessary: (0, s.getNeedNecessary)(this.data.shelf, []),
      //     highLightNecessary: !1,
      //     "curGood.num": 0
      // }, function() {
      //     e.calScrollHeight(), e.updateHistory();
      // });
    },
    singleCateScroll: function (e) {
      // var t = e.currentTarget.dataset.category_id, a = this.data.curCateIndex;
      // f.default.throttle(this.getMoreData(t, a), 200), this.checkControlHeader(t, a);
    },
    checkControlHeader: function (e, t) {
      // var a = this;
      // c.default.getSingleItemHeight(this).then(function(o) {
      //     o * a.data.shelf[t].goods_list.length < a.data.scrollViewHeight + 100 && !h.default.hasMoreCateData(e) || f.default.throttle(a.controlHeader("scrolltolower"), 300);
      // });
    },
    singleCateUpper: function () {},
    getMoreData: function (e, t) {
      // var a = this;
      // return new Promise(function(o) {
      //     h.default.getMoreCateData(e).then(function(e) {
      //         var i = (0, s.handleNumKey)(e.goods_list, a.data.shoppingCart, "goods"), n = "shelf[".concat(t, "].goods_list"), r = {}, d = a.data.shelf[t].goods_list.concat(i);
      //         return r[n] = d, e.is_last_page && a.data.hasMoreData ? r.hasMoreData = !1 : e.is_last_page || a.data.hasMoreData || (r.hasMoreData = !0), 
      //         a.setData(r), o();
      //     }).catch(function() {
      //         return o();
      //     });
      // });
    },
    // 回调已选择好商品触发
    next: function () {
      // 
      var e = this;
      wx.navigateTo({
        url: "/pages/shop/detail?from=".concat(e.data.state.options.from, "&tableNo=").concat('')
      });
      // var e = this;
      // this.data.shoppingCart.length && (this.data.lackNecessary ? this.goNecessary() : (wx.setStorage({
      //     key: "menuToOrder",
      //     data: {
      //         shelf_info: r.takeaway.shelfInfo,
      //         menu: this.data.shoppingCart
      //     },
      //     success: function() {
      //         wx.navigateTo({
      //             url: "/wxpay/pages/takeaway/detail/detail?from=".concat(e.data.state.options.from, "&tableNo=").concat(r.takeaway.tableNo)
      //         });
      //     },
      //     fail: function(e) {
      //         g.default.reportEvent("setStorageFail", e);
      //     }
      // }), g.default.reportEvent("goCreateOrder")));
    },
    goNecessary: function () {
      // var e = this.getNecessaryCate();
      // this.changeCate({
      //     currentTarget: {
      //         dataset: {
      //             index: e.category_index,
      //             id: e.category_id
      //         }
      //     }
      // }).then(function() {
      //     setTimeout(function() {
      //         wx.showToast({
      //             icon: "none",
      //             title: "请选择必选商品"
      //         });
      //     }, 200);
      // }), this.setData({
      //     highLightNecessary: !0
      // });
    },
    touchStart: function (e) {
      // var t, a;
      // 1 === (null === (t = null == e ? void 0 : e.touches) || void 0 === t ? void 0 : t.length) && (S = null === (a = null == e ? void 0 : e.touches[0]) || void 0 === a ? void 0 : a.clientY);
    },
    touchMove: function (e) {
      // var t = this;
      // return o(a.default.mark(function o() {
      //     var i;
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             if (i = t.data.curCateIndex, 1 !== e.touches.length) {
      //                 a.next = 8;
      //                 break;
      //             }
      //             if (!(e.touches[0].clientY > S && i > 0)) {
      //                 a.next = 8;
      //                 break;
      //             }
      //             return a.next = 6, t.getTitleStatus();

      //           case 6:
      //             "show" === a.sent && t.setData({
      //                 showPrevCate: !0
      //             });

      //           case 8:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, o);
      // }))();
    },
    touchEnd: function (e) {
      // var t = this;
      // return o(a.default.mark(function o() {
      //     var i, n, r, s, d, u, l, c, h;
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             if (r = t.data.curCateIndex, 1 !== (null === (i = null == e ? void 0 : e.changedTouches) || void 0 === i ? void 0 : i.length)) {
      //                 a.next = 28;
      //                 break;
      //             }
      //             return s = null === (n = e.changedTouches[0]) || void 0 === n ? void 0 : n.clientY, 
      //             a.next = 5, t.getBottomStatus();

      //           case 5:
      //             if (d = a.sent, t.data.hasMoreData || "show" !== d) {
      //                 a.next = 14;
      //                 break;
      //             }
      //             if (!(S - s > 160)) {
      //                 a.next = 14;
      //                 break;
      //             }
      //             if (r !== t.data.shelf.length - 1) {
      //                 a.next = 10;
      //                 break;
      //             }
      //             return a.abrupt("return");

      //           case 10:
      //             wx.showLoading({
      //                 title: "切换分类中"
      //             }), u = r + 1, l = t.data.shelf[u].category_id, t.changeCate({
      //                 currentTarget: {
      //                     dataset: {
      //                         index: u,
      //                         id: l
      //                     }
      //                 }
      //             });

      //           case 14:
      //             return a.next = 16, t.getTitleStatus();

      //           case 16:
      //             if (!("show" === a.sent && s - S > 160)) {
      //                 a.next = 27;
      //                 break;
      //             }
      //             if (0 !== r) {
      //                 a.next = 21;
      //                 break;
      //             }
      //             return t.controlHeader("scrolltoupper"), a.abrupt("return");

      //           case 21:
      //             c = r - 1, h = t.data.shelf[c].category_id, t.changeCate({
      //                 currentTarget: {
      //                     dataset: {
      //                         index: c,
      //                         id: h
      //                     }
      //                 }
      //             }), t.setData({
      //                 showPrevCate: !1
      //             }), a.next = 28;
      //             break;

      //           case 27:
      //             t.data.showPrevCate && t.setData({
      //                 showPrevCate: !1
      //             });

      //           case 28:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, o);
      // }))();
    },
    getBottomStatus: function () {
      // var e = this;
      // return o(a.default.mark(function t() {
      //     var o;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return t.next = 2, c.default.getDomInfo(".bd-menu__bottom", "top", e);

      //           case 2:
      //             if (!((o = t.sent) > 0 && o < _.windowHeight)) {
      //                 t.next = 5;
      //                 break;
      //             }
      //             return t.abrupt("return", "show");

      //           case 5:
      //             return t.abrupt("return", "hidden");

      //           case 6:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
    },
    getTitleStatus: function () {
      // var e = this;
      // return o(a.default.mark(function t() {
      //     var o;
      //     return a.default.wrap(function(t) {
      //         for (;;) switch (t.prev = t.next) {
      //           case 0:
      //             return t.next = 2, c.default.getDomInfo(".menu-title__left", "top", e);

      //           case 2:
      //             if (!((o = t.sent) > 0 && o < _.windowHeight)) {
      //                 t.next = 5;
      //                 break;
      //             }
      //             return t.abrupt("return", "show");

      //           case 5:
      //             return t.abrupt("return", "hidden");

      //           case 6:
      //           case "end":
      //             return t.stop();
      //         }
      //     }, t);
      // }))();
    },
    goMyOrders: function () {
      // if ("EN_USER_TYPE_BOSS" === this.data.userType) {
      //     var e = m.default.isSjt ? "pages/shelf/index/index" : "pages/orderAssistant/index/index";
      //     (0, p.openReceipt)(e);
      // } else wx.navigateTo({
      //     url: "/wxpay/pages/takeaway/orders/orders"
      // });
    },
    manageGood: function () {
      // var e = m.default.isSjt ? "pages/shelf-good/management/index" : "pages/orderAssistant/management/management";
      // (0, p.openReceipt)(e), g.default.reportEvent("goManagement", "from: manageButton");
    },
    onShareAppMessage: function (e) {
      // var t, a;
      // return l.default.getShareAppMessage(e, this.data, null === (t = this.data.state.options) || void 0 === t ? void 0 : t.from, Number(null === (a = this.data.state.options) || void 0 === a ? void 0 : a.unifiedAddrId));
    },
    setShareInfo: function (e) {
      // var t, a, o = l.default.getShareInfo(e), i = l.default.getShareText("minipro", this.data.userType, {
      //     unifiedAddrId: (null === (t = this.data.state.options) || void 0 === t ? void 0 : t.unifiedAddrId) || 0
      // });
      // this.setData({
      //     shareGoodsInfo: o,
      //     shareText: i
      // }), o.list.length && l.default.setSharePic("minipro", this.selectComponent("#miniproshare")), 
      // "miniproShare" === (null === (a = this.data.state.options) || void 0 === a ? void 0 : a.from) && this.setData({
      //     showShareMiniproMask: !0
      // });
    },
    setGoodDetailMask: function (e) {
      // var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "detail";
      // this.setData({
      //     showGoodDetail: !0,
      //     showPage: t,
      //     curGood: e
      // }), l.default.setSharePic("single", this.selectComponent("#singleshare"), e.spu_id), 
      // g.default.reportEvent("showGoodDetail", {
      //     type: t,
      //     good: e
      // }), n.default.interruptTimer();
    },
    hideGoodDetail: function () {
      // this.setData({
      //     showGoodDetail: !1
      // }), n.default.continueTimer();
    },
    isNoNeedGetDetail: function (e) {
      // var t, a;
      // return !e.need_choose_spec || (null === (t = e.prop_item_list) || void 0 === t ? void 0 : t.length) || (null === (a = e.sku_item_list) || void 0 === a ? void 0 : a.length);
    },
    updateGoodInfo: function (e) {
      // var t = this;
      // return o(a.default.mark(function o() {
      //     return a.default.wrap(function(a) {
      //         for (;;) switch (a.prev = a.next) {
      //           case 0:
      //             return t.setData((0, r.getDefaultData)()), a.next = 3, t.calShoppingCart(e);

      //           case 3:
      //             t.getShelfData();

      //           case 4:
      //           case "end":
      //             return a.stop();
      //         }
      //     }, o);
      // }))();
    },
    setNow: function () {
      // var e = m.default.isSjt ? "pages/shelf/index/index" : "pages/orderAssistant/index/index";
      // (0, p.openReceipt)(e), g.default.reportEvent("goReceiptIndex", "from: setNowButton, supportOrderType: ".concat(this.data.supportOrderType, ", totalGoods: ").concat(this.data.totalGoods));
    },
    searchGood: function () {
      // r.takeaway.initialSearchShoppingCart = this.data.shoppingCart;
      // var e = this.getNecessaryCate().category_id || 0;
      // wx.navigateTo({
      //     url: "/wxpay/pages/takeaway/search/search?necessaryCateId=".concat(e)
      // });
    },
    getNecessaryCate: function () {
      // var e = this.data.shelf.findIndex(function(e) {
      //     return "EN_CATEGORY_TYPE_REQUIRED" === e.category_type;
      // });
      // if (-1 === e) return {};
      // var t = this.data.shelf[e];
      // return i(i({}, t), {
      //     category_index: e
      // });
    }
  }
});