webpackJsonp([4],{159:function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=C.language||navigator.language;return x()(A,[n,t],e.notfailback?"":[t," "].join(""))}function i(){var t={};C.rpcList.forEach(function(e,n){var o=e.url.match(/^(http|ws)(s)?(?:\:\/\/)(token\:[^@]*)?@?([^\:\/]*)\:?(\d*)(\/[^\/]*)/),i={host:o[4],port:o[5]||6800,secure:!(!o||!o[2]),secret:o[3]?o[3].split(":")[1]:"",path:o[6]||"/jsonrpc"};if(j[e.url])t[e.url]=j[e.url],delete j[e.url];else{var r=new I.Aria2(i);t[e.url]={aria2:r,rpc:e,push:e.push}}e.push&&a(t[e.url],e.name)});for(var e in j){var n=j[e].aria2;n&&n.socket&&1===n.socket.readyState&&j[e].aria2.close()}j=t}function a(t,e){var n=t.aria2;return!(!t.aria2||!t.aria2.socket||1!==n.socket.readyState)||(n.open().then(function(){s(t,e),t.reconnect&&(delete t.reconnect,R.success([o("Successful links to"),e]))}).catch(function(n){x()(safari,"application.activeBrowserWindow.activeTab.url")&&(!t.reconnect&&R.error([o("Make sure the aria2 is running, every 10 seconds will automatically retry")],[e,o("Connection fail")]),t.reconnect=!0),P=P||setInterval(function(){var t=0;S()(j,function(e){t+=a(e)?0:1}),t||clearInterval(P)},1e4)}),!1)}function r(){x()(safari,"extension.popovers[0].contentWindow.tlwin.refreshTaskList")&&safari.extension.popovers[0].contentWindow.tlwin.refreshTaskList()}function s(t,e){var n=t.aria2,i=function(t){r()},a=function(t){r()},s=function(t,e){r(),c(n,t.gid).then(function(t){R.show(e?"error":"success",[t,o("Download"),o(e?"error":"success")])})};n.onDownloadStart=i,n.onDownloadPause=a,n.onDownloadStop=a,n.onDownloadComplete=s,n.onBtDownloadComplete=s,n.onDownloadError=function(t){s(t,!0)}}function c(t,e){return t.tellStatus(e,["bittorrent"]).then(function(n){return t.getFiles(e).then(function(t){return{files:t,bt:n}})}).then(function(t){var e=t.files[0].path,n=e.split("/").pop();return t.bt&&t.bt.info?bt.bittorrent.info.name:n}).catch(function(t){R.error([o("Failed to get task information")])})}function l(t){var e=j[t[0].url],n=!!e&&e.aria2,i=C.enableCookie?"Cookie: "+t[3]:"";n&&t[1]?n.addUri([t[1]],{header:i,timeout:10,"content-disposition-default-utf8":!0,"user-agent":C.userAgent}).then(function(){R.success([o("Successfully added to the"),e.rpc.name,C.enableCookie?"":"(with cookie)"])}).catch(function(t){R.error([o("Fail to Added to the"),e.rpc.name,o("failure",{notfailback:!0}),C.enableCookie?"":"(without cookie)"]),console.log(t)}):R.error(["添加任务失败：没有url或者没有连接aria2"])}function u(t){"showOptions"===t.key&&f()}function f(){safari.application.activeBrowserWindow.openTab().url=safari.extension.baseURI+"options.html"}function d(){C=localStorage.getItem("safari2aria");try{C=JSON.parse(C||"{}")}catch(t){C={defaultRpcIndex:0}}L=C.filetypes?C.filetypes.split(" "):[];for(var t=0;t<L.length;t++)L[t]=L[t].toLowerCase();E=C.rpcList,p("sendToEndScript",C),i(),x()(safari,"extension.popovers[0].contentWindow.tlwin.refreshServerList")&&safari.extension.popovers[0].contentWindow.tlwin.refreshServerList()}function p(t,e,n){e instanceof Function&&(n=e,e={}),n&&(e=Object.assign(e||{},{hasCb:!0}),M[t+"_cb"]=n),window.safari&&x()(safari,"application.browserWindows",[]).forEach(function(n){x()(n,"tabs",[]).forEach(function(n){n.page&&n.page.dispatchMessage(t,e)})})}function h(t){if(O=t.keyPressed||{},O.isShiftPressd&&O.isOptionPressd){for(var e=49;e<=57&&e-49<E.length;e++)if(O[e]){C.defaultRpcIndex=e-49,y({name:"updateSafari2Aria",message:C}),p("changeRpc",E[C.defaultRpcIndex].name);break}O[192]&&p("currentRpc",E[C.defaultRpcIndex].name),O[188]&&f(),O[76]&&safari&&safari.extension&&safari.extension.toolbarItems[0].showPopover()}}function m(t){var e=t.command.split("."),n={showOptions:function(){f()},DownloadWithXunleilixian:function(){safari.application.activeBrowserWindow.openTab().url=["http://lixian.vip.xunlei.com/?furl=",t.userInfo[0]].join("")},DownloadWithBaidulixian:function(){safari.application.activeBrowserWindow.openTab().url="https://pan.baidu.com/disk/home",W.baiduLixian={action:function(){p("baiduLixian",this.param),delete W.baiduLixian},param:{url:t.userInfo[0]}}},DownloadWithAria2:function(){var n=e[1];l([n&&E[n]?E[n]:E[0]].concat(t.userInfo))}};n[e[0]]&&n[e[0]]()}function v(t){var e=t.command&&t.command.match(/^DownloadWith/);if(e&&e.length>=0){var n=t.userInfo;n&&n.length&&n[0]||(t.target.disabled=!0)}}function g(t){n.i(D.a)(t.url,C,O)&&(t.preventDefault(),p("getCookie",function(e){l([E[C.defaultRpcIndex],t.url,t.target.url,e.cookie])}))}function w(t){E.forEach(function(e,n){t.contextMenu.appendContextMenuItem(["DownloadWithAria2",n].join("."),[o("Downloaded to"),e.name].join(""))}),C.enableXunleiLixian&&t.contextMenu.appendContextMenuItem("DownloadWithXunleilixian",[o("Import to thunder lixian")].join("")),C.enableBaiduLixian&&t.contextMenu.appendContextMenuItem("DownloadWithBaidulixian",[o("Import to baidu lixian")].join(""))}function y(t){M[t.name]&&M[t.name](t.message,t)}Object.defineProperty(e,"__esModule",{value:!0});var b=n(18),x=n.n(b),k=n(55),S=n.n(k),I=n(54),D=n(36),C={defaultRpcIndex:0},A={"zh-CN":{"Successful links to":"成功链接","Connection fail":"连接失败",Download:"下载",error:"失败","Import to thunder lixian":"导入至迅雷离线","Import to baidu lixian":"导入至百度离线","Downloaded to":"下载至",success:"成功","Successfully added to the":"成功添加至","Added to the":"添加至",failure:"失败","Failed to get task information":"获取任务信息失败","Make sure the aria2 is running, every 10 seconds will automatically retry":"请确认aria2已经运行,每隔10秒将会自动重试"}},O=void 0,L=[],E=[],j={},W={},P=void 0,M={updateSafari2Aria:function(t){localStorage.setItem("safari2aria",JSON.stringify(t)),d()},keyPress:function(t){h(t)},getConfig:function(){p("sendToEndScript",C)},documentReady:function(){S()(W,function(t){t.action()})},downloadFromIframe:function(t,e){l([E[C.defaultRpcIndex],t.url,e.target.url,t.cookie])}},R={success:function(t,e){R.show("success",t,e)},error:function(t,e){R.show("error",t,e)},show:function(t,e,n){e instanceof Array&&(e=e.join("")),n instanceof Array&&(n=n.join("")),p("showMassage",{action:t||"success",text:e,title:n})}};window.s2a={changeServer:function(t){var e=void 0;S()(E,function(n,o){n.url===t&&(e=o)}),C.defaultRpcIndex=e,y({name:"updateSafari2Aria",message:C})},dispatchMessage:y,openOptions:f,getConfig:function(){return{config:C,aria2Connects:j}}},document.addEventListener("DOMContentLoaded",d),safari.application.addEventListener("message",y,!1),safari.extension.settings.addEventListener("change",u,!1),safari.application.addEventListener("command",m,!1),safari.application.addEventListener("validate",v,!1),safari.application.addEventListener("beforeNavigate",g,!1),safari.application.addEventListener("contextmenu",w,!1)},36:function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t&&!n[82]&&e.enableTypefiles?!n.isCommandPressed:n.isCommandPressed){if(t.match(/magnet:[^\\"]+/))return!0;var o=t.substr(t.lastIndexOf(".")+1);o=o.toLowerCase();for(var i=e.filetypes?e.filetypes.split(" "):[],a=0;a<i.length;a++)if(o===i[a].toLowerCase()||n.isShiftPressd)return!0}}e.a=o},54:function(t,e,n){"use strict";(function(t){var e=n(127),o=n.n(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e){var n=void 0!==t&&t.exports,a=function t(e){this.callbacks=Object.create(null),this.lastId=0;for(var n in t.options)this[n]="object"===(void 0===e?"undefined":i(e))&&n in e?e[n]:t.options[n]};a.prototype.http=function(t,e){var n=this,o={method:t.method,id:t.id};Array.isArray(t.params)&&t.params.length>0&&(o.params=t.params);var i="http"+(this.secure?"s":"")+"://"+this.host+":"+this.port+this.path;fetch(i,{method:"POST",body:JSON.stringify(o),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){n._onmessage(t)}).catch(e)},a.prototype.send=function(t){var e=Array.prototype.slice.call(arguments,1),n="function"==typeof e[e.length-1]?e.pop():null;return this.exec(t,e,n)},a.prototype.exec=function(t,e,n){if("string"!=typeof t)throw new TypeError(t+" is not a string");0!==t.indexOf("system.")&&0!==t.indexOf("aria2.")&&(t="aria2."+t);var i={method:t,"json-rpc":"2.0",id:this.lastId++},a=this.secret?["token:"+this.secret]:[];Array.isArray(e)&&("system.multicall"===t?(Array.isArray(e[0])&&e[0].forEach(function(t){t.params||(t.params=[]),t.params=a.concat(t.params)}),a=e):a=a.concat(e)),a.length>0&&(i.params=a),this.onsend(i);var r=this;return this.socket&&1===this.socket.readyState?this.socket.send(JSON.stringify(i)):this.http(i,function(t){r.callbacks[i.id](t),delete r.callbacks[i.id]}),o()(function(t){r.callbacks[i.id]=t},n)},a.prototype._onmessage=function(t){if(this.onmessage(t),void 0!==t.id){var e=this.callbacks[t.id];e&&(t.error?e(t.error):e(null,t.result),delete this.callbacks[t.id])}else if(t.method){var n=t.method.split("aria2.")[1];0===n.indexOf("on")&&"function"==typeof this[n]&&a.notifications.indexOf(n)>-1&&this[n].apply(this,t.params)}},a.prototype.open=function(t){var e="ws"+(this.secure?"s":"")+"://"+this.host+":"+this.port+this.path,n=this.socket=new WebSocket(e),i=this,a=!1;return n.onmessage=function(t){i._onmessage(JSON.parse(t.data))},o()(function(t){n.onopen=function(){a||(t(),a=!0),i.onopen()},n.onclose=function(e){i.onclose(),1006==e.code&&(a||(t(e),a=!0))},n.onerror=function(e){a||(t(e),a=!0)}},t)},a.prototype.close=function(t){var e=this.socket;return o()(function(t){e?(e.addEventListener("close",function(){t()}),e.close()):t()},t)},a.methods=["addUri","addTorrent","addMetalink","remove","forceRemove","pause","pauseAll","forcePause","forcePauseAll","unpause","unpauseAll","tellStatus","getUris","getFiles","getPeers","getServers","tellActive","tellWaiting","tellStopped","changePosition","changeUri","getOption","changeOption","getGlobalOption","changeGlobalOption","getGlobalStat","purgeDownloadResult","removeDownloadResult","getVersion","getSessionInfo","shutdown","forceShutdown","saveSession","system.multicall","system.listMethods","system.listNotifications"],a.notifications=["onDownloadStart","onDownloadPause","onDownloadStop","onDownloadComplete","onDownloadError","onBtDownloadComplete"],a.events=["onopen","onclose","onsend","onmessage"],a.options={secure:!1,host:"localhost",port:6800,secret:"",path:"/jsonrpc"},a.methods.forEach(function(t){var e=t.indexOf(".")>-1?t.split(".")[1]:t;a.prototype[e]=function(){return this.send.apply(this,[t].concat(Array.prototype.slice.call(arguments)))}}),a.notifications.forEach(function(t){a.prototype[t]=function(){}}),a.events.forEach(function(t){a.prototype[t]=function(){}}),n?t.exports=a:e.Aria2=a}(this)}).call(e,n(132)(t))}},[159]);