(window.webpackJsonp=window.webpackJsonp||[]).push([["pay"],{"38a4":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("e7e5");var i=a("d399"),s=(a("96cf"),a("3b8d")),r=a("bd86"),c=a("3ce7"),n=(a("bc3a"),a("2f62"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{detail:{},payWay:"",selected:!0,paySettings:{},inWechat:this.isWeixinBrowser(),targetType:this.$route.query.targetType,timeoutId:-1}},computed:p(p({},Object(n.d)(["wechatSwitch","isLoading"])),{},{validPayWay:function(){return this.paySettings.wxpayEnabled||this.paySettings.alipayEnabled&&!this.inWechat}}),created:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getSettings({query:{type:"payment"}}).catch((function(t){i.a.fail(t.message)}));case 2:t.paySettings=e.sent,t.paySettings.alipayEnabled&&!t.inWechat?t.payWay="Alipay_LegacyH5":t.paySettings.wxpayEnabled&&(t.payWay="WechatPay_H5"),a=t.$route.query,a.source,a.id,s=a.sn,r=a.targetId,c.a.getOrderDetail({query:{sn:s}}).then((function(e){if("success"===e.status&&r){if(t.wechatSwitch)return void t.$router.replace({path:"/pay_success",query:{targetType:t.targetType,targetId:r}});t.$router.push({path:"/".concat(t.targetType,"/").concat(r)})}t.detail=Object.assign({},e)})).catch((function(t){i.a.fail(t.message)}));case 6:case"end":return e.stop()}}),e)})))()},beforeRouteLeave:function(t,e,a){clearTimeout(this.timeoutId),a()},methods:{handlePay:function(){var t=this;this.validPayWay&&("WechatPay_H5"===this.payWay&&this.inWechat?window.location.href="".concat(window.location.origin,"/pay/center/wxpay_h5?pay_amount=")+"".concat(this.detail.pay_amount,"&title=").concat(this.detail.title,"&sn=").concat(this.detail.sn):c.a.createTrade({data:{gateway:this.payWay,type:"purchase",orderSn:this.detail.sn,app_pay:"Y"}}).then((function(e){"WechatPay_H5"!==t.payWay?window.location.href=e.payUrl:t.getTradeInfo(e.tradeSn).then((function(){window.location.href=e.mwebUrl}))})).catch((function(t){i.a.fail(t.message)})))},isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},getTradeInfo:function(t){var e=this;return c.a.getTrade({query:{tradesSn:t}}).then((function(a){if(a.isPaid)return e.wechatSwitch?void e.$router.replace({path:"/pay_success",query:{paidUrl:window.location.origin+a.paidSuccessUrlH5}}):void(window.location.href=window.location.origin+a.paidSuccessUrlH5);e.timeoutId=setTimeout((function(){e.getTradeInfo(t)}),2e3)})).catch((function(t){i.a.fail(t.message)}))}}},u=a("a6c2"),y=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payPage"},[t.isLoading?a("e-loading"):t._e(),a("div",{staticClass:"payPage__order"},[a("div",{staticClass:"order__head order--line"},[t._v("\n      支付方式\n    ")]),a("div",{staticClass:"order__infomation"},[a("div",{staticClass:"title"},[t._v(t._s(t.detail.title))]),a("div",{staticClass:"sum"},[a("span",[t._v("待支付")]),a("span",{staticClass:"sum__price"},[t._v("¥ "),a("span",{staticClass:"num"},[t._v(t._s(t._f("toMoney")(t.detail.pay_amount)))])])]),a("div",{staticClass:"payWay"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.alipayEnabled&&!t.inWechat,expression:"paySettings.alipayEnabled && !inWechat"}],class:["payWay__item",{"payWay__item--selected":"Alipay_LegacyH5"===t.payWay}],on:{click:function(e){t.payWay="Alipay_LegacyH5",t.selected=!0}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{attrs:{src:"static/images/zfb.png"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.wxpayEnabled,expression:"paySettings.wxpayEnabled"}],class:["payWay__item",{"payWay__item--selected":"WechatPay_H5"===t.payWay}],on:{click:function(e){t.payWay="WechatPay_H5",t.selected=!1}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{attrs:{src:"static/images/wx.png"}})])])])]),a("div",{class:["payPage__payBtn",{disabled:!t.validPayWay}],on:{click:t.handlePay}},[t._v("\n    "+t._s(t.validPayWay?"立即支付":"无可用支付方式")+"\n  ")])],1)}),[],!1,null,null,null);e.default=y.exports},dec6:function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481");var i=a("bd86"),s=a("2f62");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}var c={data:function(){return{targetId:this.$route.query.targetId||"",targetType:this.$route.query.targetType||"",paidUrl:this.$route.query.paidUrl}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.d)(["wechatSwitch","wechatSettings"])),created:function(){this.wechatSwitch||this.$router.replace({path:"/"})},methods:{backToCourse:function(){this.paidUrl?window.location.href=this.paidUrl:this.$router.replace({path:"/".concat(this.targetType,"/").concat(this.targetId)})}}},n=a("a6c2"),o=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-success-container"},[this._m(0),this.wechatSettings?e("div",{staticClass:"qrcode-img-container"},[e("img",{attrs:{src:this.wechatSettings.official_qrcode,alt:""}})]):this._e(),this._m(1),e("van-button",{staticClass:"btn-back-course",attrs:{type:"primary"},on:{click:this.backToCourse}},[this._v("返回课程")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-success-text"},[e("i",{staticClass:"h5-icon h5-icon-check"}),e("span",{staticClass:"text-18 success-text"},[this._v("支付成功！")]),e("div",{staticClass:"mt5 text-14 color-red"},[this._v("为享受更好的教学服务，建议您开启课程通知。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"press-img-container"},[e("img",{attrs:{src:"static/images/wechat_press.png",alt:""}}),e("div",{staticClass:"press-text text-14"},[this._v("请长按二维码开启课程通知")])])}],!1,null,null,null);e.default=o.exports}}]);