!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=60)}({60:function(t,e,n){t.exports=n(61)},61:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r={"初期化":{type:"func",josi:[],fn:function(t){t._turtle||(t._turtle={list:[],target:-1,ctx:null,canvas:null,canvas_r:{left:0,top:0,width:640,height:400},clearAll:function(){var t=this;console.log("[TURTLE] clearAll");for(var e=0;e<t.list.length;e++){var n=t.list[e];n.mlist=[],document.body.removeChild(n.canvas)}t.list=[],null!==t.canvas&&t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height),t.target=-1,t.flagSetTimer=!1},drawTurtle:function(t){var e=this.list[t],n=this.canvas_r;if(e.canvas.style.left=n.left+e.x-e.cx+"px",e.canvas.style.top=n.top+e.y-e.cx+"px",e.f_update&&e.flagLoaded&&(e.f_update=!1,e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.f_visible))if(270!==e.dir){var r=.017453292519943295*(e.dir+90);e.ctx.save(),e.ctx.translate(e.cx,e.cy),e.ctx.rotate(r),e.ctx.translate(-e.cx,-e.cy),e.ctx.drawImage(e.img,0,0),e.ctx.restore()}else e.ctx.drawImage(e.img,0,0)},getCur:function(){if(0===this.list.length)throw Error("最初に『カメ作成』命令を呼び出してください。");return this.list[this.target]},flagSetTimer:!1,setTimer:function(){var e=this;this.flagSetTimer||(this.flagSetTimer=!0,setTimeout((function(){var n=e.getCur();console.log("[TURTLE] Let's go! job=",n.mlist.length),t._turtle.play()}),1))},line:function(t,e,n,r,i){if(!t||t.flagDown){var l=this.ctx;l.beginPath(),l.lineWidth=t.lineWidth,l.strokeStyle=t.color,l.moveTo(e,n),l.lineTo(r,i),l.stroke()}},doMacro:function(e,n){if(!e.flagLoaded&&n>0)return console.log("[TURTLE] waiting ..."),!0;var r=e.mlist.shift();switch(void 0!==r?r[0]:""){case"xy":e.x=r[1],e.y=r[2];break;case"mv":this.line(e,e.x,e.y,r[1],r[2]);var i=Math.atan2(r[1]-e.x,r[2]-e.y);e.dir=57.29577951308232*i,e.f_update=!0,e.x=r[1],e.y=r[2];break;case"fd":var l=r[1]*r[2],u=.017453292519943295*e.dir,o=e.x+Math.cos(u)*l,a=e.y+Math.sin(u)*l;this.line(e,e.x,e.y,o,a),e.x=o,e.y=a;break;case"angle":var c=r[1];e.dir=(c-90+360)%360,e.f_update=!0;break;case"rotr":var s=r[1];e.dir=(e.dir+s)%360,e.f_update=!0;break;case"rotl":var f=r[1];e.dir=(e.dir-f+360)%360,e.f_update=!0;break;case"color":e.color=r[1];break;case"size":e.lineWidth=r[1];break;case"penOn":e.flagDown=r[1];break;case"visible":e.f_visible=r[1],e.f_update=!0;break;case"changeImage":e.flagLoaded=!1,e.img.src=r[1]}return e.flagLoaded&&t._turtle.drawTurtle(e.id),e.mlist.length>0},doMacroAll:function(e){for(var n=!1,r=0;r<t._turtle.list.length;r++){var i=t._turtle.list[r];this.doMacro(i,e)&&(n=!0)}return n},play:function(){var e=this,n=t.__getSysValue("カメ速度",100),r=this.doMacroAll(n);if(n<=0)for(;r;)r=this.doMacroAll(n);else if(r)return void setTimeout((function(){return e.play()}),n);console.log("[TURTLE] finished."),e.flagSetTimer=!1},createTurtle:function(t,e){var n=e._turtle.list.length,r={id:n,img:null,canvas:null,ctx:null,dir:270,cx:32,cy:32,x:0,y:0,color:"black",lineWidth:4,flagDown:!0,f_update:!0,flagLoaded:!1,f_visible:!0,mlist:[]};e._turtle.list.push(r),e._turtle.target=n,r.img=document.createElement("img"),r.canvas=document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),r.canvas.id=n,r.img.src=t,r.img.onload=function(){r.cx=r.img.width/2,r.cy=r.img.height/2,r.canvas.width=r.img.width,r.canvas.height=r.img.height,r.flagLoaded=!0,e._turtle.drawTurtle(r.id),console.log("turtle.onload")},r.img.onerror=function(){console.log("カメの読み込みに失敗"),r.flagLoaded=!0,r.f_visible=!1,e._turtle.drawTurtle(r.id)},r.canvas.style.position="absolute",document.body.appendChild(r.canvas);var i=e.__getSysValue("カメ描画先","turtle_cv");"string"==typeof i&&(i=document.getElementById(i)||document.querySelector(i),e.__v0["カメ描画先"]=i),console.log("カメ描画先=",i);var l=e._turtle.canvas=i;if(l){var u=e._turtle.ctx=e._turtle.canvas.getContext("2d");u.lineWidth=4,u.strokeStyle="black",u.lineCap="round";var o=l.getBoundingClientRect(),a=o.left+window.pageXOffset,c=o.top+window.pageYOffset;return e._turtle.canvas_r={left:a,top:c,width:o.width,height:o.height},r.x=o.width/2,r.y=o.height/2,n}console.log("[ERROR] カメ描画先が見当たりません。"+i)}})}},"カメ作成":{type:"func",josi:[],fn:function(t){var e=t.__getSysValue("カメ画像URL","turtle.png");return t._turtle.createTurtle(e,t)}},"ゾウ作成":{type:"func",josi:[],fn:function(t){return t._turtle.createTurtle("turtle-elephant.png",t)}},"パンダ作成":{type:"func",josi:[],fn:function(t){return t._turtle.createTurtle("turtle-panda.png",t)}},"カメ操作対象設定":{type:"func",josi:[["に","へ","の"]],fn:function(t,e){e._turtle.target=t},return_none:!0},"カメ描画先":{type:"var",value:"turtle_cv"},"カメ画像URL":{type:"var",value:"turtle.png"},"カメ画像変更":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["changeImage",t]),e._turtle.setTimer()},return_none:!0},"カメ速度":{type:"const",value:100},"カメ速度設定":{type:"func",josi:[["に","へ"]],fn:function(t,e){e.__varslist[0]["カメ速度"]=t}},"カメ移動":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["mv",t[0],t[1]]),e._turtle.setTimer()},return_none:!0},"カメ起点移動":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["xy",t[0],t[1]]),e._turtle.setTimer()},return_none:!0},"カメ進":{type:"func",josi:[["だけ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["fd",t,1]),e._turtle.setTimer()},return_none:!0},"カメ戻":{type:"func",josi:[["だけ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["fd",t,-1]),e._turtle.setTimer()},return_none:!0},"カメ角度設定":{type:"func",josi:[["に","へ","の"]],fn:function(t,e){e._turtle.getCur().mlist.push(["angle",parseFloat(t)]),e._turtle.setTimer()},return_none:!0},"カメ右回転":{type:"func",josi:[["だけ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["rotr",t]),e._turtle.setTimer()},return_none:!0},"カメ左回転":{type:"func",josi:[["だけ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["rotl",t]),e._turtle.setTimer()},return_none:!0},"カメペン色設定":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["color",t]),e._turtle.setTimer()},return_none:!0},"カメペンサイズ設定":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["size",t]),e._turtle.setTimer()}},"カメペン設定":{type:"func",josi:[["に","へ"]],fn:function(t,e){e._turtle.getCur().mlist.push(["penOn",t]),e._turtle.setTimer()}},"カメ全消去":{type:"func",josi:[],fn:function(t){t._turtle.clearAll()},return_none:!0},"カメ非表示":{type:"func",josi:[],fn:function(t){t._turtle.getCur().mlist.push(["visible",!1]),t._turtle.setTimer()},return_none:!0},"カメ表示":{type:"func",josi:[],fn:function(t){t._turtle.getCur().mlist.push(["visible",!0]),t._turtle.setTimer()},return_none:!0},"カメクリック時":{type:"func",josi:[["を"]],fn:function(t,e){t=e.__findVar(t,null);var n=e._turtle.target;e._turtle.list[n].canvas.onclick=function(n){return e.__v0["対象"]=n.target,t(n,e)}},return_none:!0}};t.exports=r,"object"===("undefined"==typeof navigator?"undefined":n(navigator))&&navigator.nako3.addPluginObject("PluginTurtle",r)}});