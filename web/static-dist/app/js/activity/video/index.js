!function(c){function t(t){for(var e,n,r=t[0],i=t[1],a=t[2],o=0,l=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(c[e]=i[e]);for(y&&y(t);l.length;)l.shift()();return p.push.apply(p,a||[]),u()}function u(){for(var t,e=0;e<p.length;e++){for(var n=p[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(r=!1)}r&&(p.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},s={46:0},p=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=c,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var y=r;p.push([736,0]),u()}({736:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(1),o=n.n(a),l=(n(138),function(){function e(t){i()(this,e),this.container=t,this.interval=$(this.container).data("watchTimeSec"),this.playerCounter=0,this.activityId=$(this.container).data("id")}return o()(e,[{key:"addVideoPlayerCounter",value:function(t,e){var n=store.get("activity_id_"+this.activityId+"_playing_counter");if(n||(this.playerCounter=0),!e||!e.playing)return!1;n>=this.interval?this.watching(t):e.playing&&this.playerCounter++,store.set("activity_id_"+this.activityId+"_playing_counter",this.playerCounter)}},{key:"watching",value:function(t){var e=store.get("activity_id_"+this.activityId+"_playing_counter");console.log(e),t.emit("watching",{watchTime:e}).then(function(){var t=$("#video-content").data("watchUrl");$.post(t,function(t){t&&"error"==t.status&&window.location.reload()})}).catch(function(t){console.error(t)}),this.playerCounter=0}}]),e}()),c=n(65),u=n.n(c),s=n(89),p=n(135);new(function(){function e(t){i()(this,e),this.player={},this.intervalId=null,this.recorder=t,this.emitter=new p.a}return o()(e,[{key:"play",value:function(){$("#swf-player").length?this._playerSwf():this._playVideo(),this.record()}},{key:"record",value:function(){var t=this;this.intervalId=setInterval(function(){t.recorder.addVideoPlayerCounter(t.emitter,t.player)},1e3)}},{key:"getPlay",value:function(){return this.player}},{key:"_playerSwf",value:function(){var t="swf-player";u.a.embedSWF($("#"+t).data("url"),t,"100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"})}},{key:"_playVideo",value:function(){var e=this,t=new s.a({name:"partner",project:"PlayerProject",children:[],type:"parent"});t.on("ended",function(t){e.player.playing=!1,e._onFinishLearnTask(t)}),t.on("playing",function(t){e.player.playing=!0}),t.on("paused",function(t){e.player.playing=!1,e.recorder.watching(e.emitter)}),t.on("timechange",function(t){e.player.currentTime=t.currentTime})}},{key:"_onFinishLearnTask",value:function(t){var e=this;this.emitter.emit("finish",{data:t}).then(function(){clearInterval(e.intervalId)}).catch(function(t){console.error(t)})}}]),e}())(new l("#video-content")).play()}});