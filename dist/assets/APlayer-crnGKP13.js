import{d as e,P as t,ad as a,V as o,j as l,o as n,c as r}from"./index-HlkTBHEd.js";const i=/mobile/i.test(window.navigator.userAgent);function s(e){const t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),o=Math.floor(e-3600*t-60*a);return(t>0?[t,a,o]:[a,o]).map((e=>e<10?"0"+e:""+e)).join(":")}function d(e){let t=e.offsetLeft,a=e.offsetParent;const o=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==a&&a!==e;)t+=a.offsetLeft,a=a.offsetParent;else for(;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t-o}function c(e,t){let a=e.offsetTop,o=e.offsetParent,l=0;for(;null!==o;)a+=o.offsetTop,o=o.offsetParent;return l=document.body.scrollTop+document.documentElement.scrollTop,t?a:a-l}const p={dragStart:i?"touchstart":"mousedown",dragMove:i?"touchmove":"mousemove",dragEnd:i?"touchend":"mouseup"},u='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>',m='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>',v='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>',h='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>',y='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>',g='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>',f='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>',w='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>',b='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>',M={};function L(e){return"string"!=typeof e&&(e=null==e?"":"function"==typeof e?L(e.call(e)):JSON.stringify(e)),e}M.$escape=function(e){return L(e).replace(/[<>&'"]/g,(e=>`&${{"<":"lt",">":"gt","&":"amp","'":"apos",'"':"quot"}[e]};`))},M.$each=function(e,t){if(Array.isArray(e))for(var a=0,o=e.length;a<o;a++)t(e[a],a);else for(var l in e)t(e[l],l)};const x=M.$escape,T=[(e,t)=>{t('<div class="aplayer-body"><div class="aplayer-pic" style="')},(e,t)=>{t('</div></div><div class="aplayer-info"><div class="aplayer-music"><span class="aplayer-title">No audio</span> <span class="aplayer-author"></span></div><div class="aplayer-lrc"><div class="aplayer-lrc-contents" style="transform:translateY(0);-webkit-transform:translateY(0)"></div></div><div class="aplayer-controller"><div class="aplayer-bar-wrap"><div class="aplayer-bar"><div class="aplayer-loaded" style="width:0"></div><div class="aplayer-played" style="width:0;background: ')},(e,t)=>{t('</button></div></div><div class="aplayer-list'),e.listFolded&&t(" aplayer-list-hide"),t('" '),e.listMaxHeight&&(t(' style="max-height: '),t(x(e.listMaxHeight)),t('" ')),t("><ol "),e.listMaxHeight&&(t(' style="max-height: '),t(x(e.listMaxHeight)),t('" ')),t("> "),t(function(e){e=e||{};let t="",a=M.$each,o=e.audio,l=M.$escape,n=e.theme,r=e.index;return a(o,(function(e,a){t+=' <li><span class="aplayer-list-cur" style="background-color: ',t+=l(e.theme||n),t+='"></span> <span class="aplayer-list-index">',t+=l(a+r),t+='</span><span class="aplayer-list-title">',t+=l(e.name),t+='</span><span class="aplayer-list-author">',t+=l(e.artist),t+="</span></li> "})),t}({theme:e.theme,audio:e.audio,index:1})),t(" </ol></div> ")}];function q(e){e=e||{};let t="",a=M.$each,o=e.lyrics,l=M.$escape;return a(o,(function(e,a){t+=" <p ",0===a&&(t+=' class="aplayer-lrc-current" '),t+=">",t+=l(e[1]),t+="</p> "})),t}const k=["destroy","listshow","listhide","listadd","listremove","listswitch","listclear","noticeshow","noticehide","lrcshow","lrchide"],B=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],E=()=>{const e={};return{on:function(t,a){var o;o=t,(-1!==k.indexOf(o)||(-1!==B.indexOf(o)||void 0))&&"function"==typeof a&&(e[t]||(e[t]=[]),e[t].push(a))},trigger:function(t,a){var o;null==(o=e[t])||o.forEach((e=>e(a)))}}},H=[],z=()=>{const e=(()=>{const e={tplRenderers:T,hlsHandler:()=>{},events:E(),mode:"normal",afterInitHooks:[],get duration(){return isNaN(e.audio.duration)?0:e.audio.duration}};return e})();let t,a,o,l,n,r,M=!0,L=null,k=(e=>{let t=0,a=0,o=!1,l=!1,n=setInterval((()=>{l&&(a=e.audio.currentTime,o||a!==t||e.audio.paused||(e.container.classList.add("aplayer-loading"),o=!0),o&&a>t&&!e.audio.paused&&(e.container.classList.remove("aplayer-loading"),o=!1),t=a)}),100);return{enable(){l=!0},disable(){l=!1},destroy(){l=!1,n&&clearInterval(n)}}})(e);function z(){M&&(M=!1,n.button.classList.remove("aplayer-play"),n.button.classList.add("aplayer-pause"),n.button.innerHTML="",setTimeout((()=>{n.button.innerHTML=m}),100),n.skipPlayButton.innerHTML=m),k.enable(),o.mutex&&H.filter((t=>t!==e)).forEach((e=>{e.pause()}))}function O(){M||(M=!0,n.button.classList.remove("aplayer-pause"),n.button.classList.add("aplayer-play"),n.button.innerHTML="",setTimeout((()=>{n.button.innerHTML=g}),100),n.skipPlayButton.innerHTML=g),l.classList.remove("aplayer-loading"),k.disable()}function N(){if(!(r.audios.length>1))return 0;if("list"===o.order)return(r.index+1)%r.audios.length;if("random"===o.order){const t=e.randomOrder.indexOf(r.index);return t===e.randomOrder.length-1?e.randomOrder[0]:e.randomOrder[t+1]}}return e.init=a=>{var m;return o=(e=>{const t={container:e.element||document.getElementsByClassName("aplayer")[0],mini:e.narrow||e.fixed||!1,fixed:!1,autoplay:!1,mutex:!0,lrcType:e.showlrc||e.lrc||0,preload:"auto",theme:"#b7daff",loop:"all",order:"list",volume:.7,listFolded:e.fixed,listMaxHeight:e.listmaxheight||"250px",audio:e.music||[],storageName:"aplayer-setting"};var a;return(e=Object.assign(t,e)).audio=(a=e.audio,"[object Array]"!==Object.prototype.toString.call(a)&&(a=[a]),a.map((e=>({...e,name:e.name||e.title||"Audio name",artist:e.artist||e.author||"Audio artist",cover:e.cover||e.pic,type:e.type||"normal"})))),e.audio.length<=1&&"one"===e.loop&&(e.loop="all"),e})(a),e.options=o,l=o.container,e.container=l,n=function(e,t,a,o){let l="";t.audio.length&&(l="random"===t.order?t.audio[a[0]].cover:t.audio[0].cover),e.innerHTML=function(e,t,a){let o="",l=function(e){return o+=e,o};return a[0](e,l),t&&(o+="background-image:url(&quot;",o+=x(t),o+="&quot;);"),o+="background-color: ",o+=x(e.theme),o+='"><div class="aplayer-button aplayer-play">',o+=g,a[1](e,l),o+=x(e.theme),o+='"><span class="aplayer-thumb" style="background: ',o+=x(e.theme),o+='"><span class="aplayer-loading-icon">',o+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>',o+='</span></span></div></div></div><div class="aplayer-time"><span class="aplayer-time-inner"><span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span> </span><span class="aplayer-icon aplayer-icon-back"> ',o+=h,o+=' </span><span class="aplayer-icon aplayer-icon-play"> ',o+=g,o+=' </span><span class="aplayer-icon aplayer-icon-forward"> ',o+=h,o+=' </span><div class="aplayer-volume-wrap"><button type="button" class="aplayer-icon aplayer-icon-volume-down"> ',o+=v,o+=' </button><div class="aplayer-volume-bar-wrap"><div class="aplayer-volume-bar"><div class="aplayer-volume" style="height:80%;background: ',o+=x(e.theme),o+='"></div></div></div></div><button type="button" class="aplayer-icon aplayer-icon-order"> ',"list"===e.order?o+=f:"random"===e.order&&(o+=u),o+=' </button> <button type="button" class="aplayer-icon aplayer-icon-loop"> ',"one"===e.loop?o+=y:"all"===e.loop?o+=w:"none"===e.loop&&(o+=b),o+=' </button> <button type="button" class="aplayer-icon aplayer-icon-menu"> ',o+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>',o+=' </button> <button type="button" class="aplayer-icon aplayer-icon-lrc"> ',o+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>',o+=' </button></div></div></div><div class="aplayer-notice"></div><div class="aplayer-miniswitcher"><button class="aplayer-icon">',o+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>',a[2](e,l),o}(t,l,o);const n=t=>e.querySelector(t);return{lrc:n(".aplayer-lrc-contents"),lrcWrap:n(".aplayer-lrc"),ptime:n(".aplayer-ptime"),info:n(".aplayer-info"),time:n(".aplayer-time"),barWrap:n(".aplayer-bar-wrap"),button:n(".aplayer-button"),body:n(".aplayer-body"),list:n(".aplayer-list"),listOl:n(".aplayer-list ol"),listCurs:e.querySelectorAll(".aplayer-list-cur"),played:n(".aplayer-played"),loaded:n(".aplayer-loaded"),thumb:n(".aplayer-thumb"),volume:n(".aplayer-volume"),volumeBar:n(".aplayer-volume-bar"),volumeButton:n(".aplayer-time button"),volumeBarWrap:n(".aplayer-volume-bar-wrap"),loop:n(".aplayer-icon-loop"),order:n(".aplayer-icon-order"),menu:n(".aplayer-icon-menu"),pic:n(".aplayer-pic"),title:n(".aplayer-title"),author:n(".aplayer-author"),dtime:n(".aplayer-dtime"),notice:n(".aplayer-notice"),miniSwitcher:n(".aplayer-miniswitcher"),skipBackButton:n(".aplayer-icon-back"),skipForwardButton:n(".aplayer-icon-forward"),skipPlayButton:n(".aplayer-icon-play"),lrcButton:n(".aplayer-icon-lrc")}}(l,o,e.randomOrder,e.tplRenderers),e.template=n,e.controller=(e=>{var t;(t=e).template.pic.addEventListener("click",(()=>{t.toggle()})),function(e){const t=t=>{let a=((t.clientX||t.changedTouches[0].clientX)-d(e.template.barWrap))/e.template.barWrap.clientWidth;a=Math.max(a,0),a=Math.min(a,1),e.bar.set("played",a,"width"),e.lrc&&e.lrc.update(a*e.duration),e.template.ptime.innerHTML=s(a*e.duration)},a=o=>{document.removeEventListener(p.dragEnd,a),document.removeEventListener(p.dragMove,t);let l=((o.clientX||o.changedTouches[0].clientX)-d(e.template.barWrap))/e.template.barWrap.clientWidth;l=Math.max(l,0),l=Math.min(l,1),e.bar.set("played",l,"width"),e.seek(e.bar.get("played","width")*e.duration),e.disableTimeupdate=!1};e.template.barWrap.addEventListener(p.dragStart,(()=>{e.disableTimeupdate=!0,document.addEventListener(p.dragMove,t),document.addEventListener(p.dragEnd,a)}))}(e),function(e){e.template.order.addEventListener("click",(()=>{"list"===e.options.order?(e.options.order="random",e.template.order.innerHTML=u):"random"===e.options.order&&(e.options.order="list",e.template.order.innerHTML=f)}))}(e),function(e){e.template.loop.addEventListener("click",(()=>{e.list.audios.length>1?"one"===e.options.loop?(e.options.loop="none",e.template.loop.innerHTML=b):"none"===e.options.loop?(e.options.loop="all",e.template.loop.innerHTML=w):"all"===e.options.loop&&(e.options.loop="one",e.template.loop.innerHTML=y):"one"===e.options.loop||"all"===e.options.loop?(e.options.loop="none",e.template.loop.innerHTML=b):"none"===e.options.loop&&(e.options.loop="all",e.template.loop.innerHTML=w)}))}(e),function(e){e.template.menu.addEventListener("click",(()=>{e.list.toggle()}))}(e),i||function(e){e.template.volumeButton.addEventListener("click",(()=>{e.audio.muted?(e.audio.muted=!1,e.switchVolumeIcon(),e.bar.set("volume",e.volume(),"height")):(e.audio.muted=!0,e.switchVolumeIcon(),e.bar.set("volume",0,"height"))}));const t=t=>{let a=1-((t.clientY||t.changedTouches[0].clientY)-c(e.template.volumeBar,e.options.fixed))/e.template.volumeBar.clientHeight;a=Math.max(a,0),a=Math.min(a,1),e.volume(a)},a=o=>{e.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener(p.dragEnd,a),document.removeEventListener(p.dragMove,t);let l=1-((o.clientY||o.changedTouches[0].clientY)-c(e.template.volumeBar,e.options.fixed))/e.template.volumeBar.clientHeight;l=Math.max(l,0),l=Math.min(l,1),e.volume(l)};e.template.volumeBarWrap.addEventListener(p.dragStart,(()=>{e.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener(p.dragMove,t),document.addEventListener(p.dragEnd,a)}))}(e),function(e){e.template.miniSwitcher.addEventListener("click",(()=>{e.setMode("mini"===e.mode?"normal":"mini")}))}(e),function(e){e.template.skipBackButton.addEventListener("click",(()=>{e.skipBack()})),e.template.skipForwardButton.addEventListener("click",(()=>{e.skipForward()})),e.template.skipPlayButton.addEventListener("click",(()=>{e.toggle()}))}(e),function(e){e.template.lrcButton.addEventListener("click",(()=>{e.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity")?(e.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"),e.lrc&&e.lrc.show()):(e.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"),e.lrc&&e.lrc.hide())}))}(e)})(e),l.classList.add("aplayer"),o.lrcType&&!o.fixed&&l.classList.add("aplayer-withlrc"),o.audio.length>1&&l.classList.add("aplayer-withlist"),i&&l.classList.add("aplayer-mobile"),l.offsetWidth<=300&&l.classList.add("aplayer-arrow"),o.fixed&&(l.classList.add("aplayer-fixed"),n.body.style.width=n.body.offsetWidth-18+"px"),o.mini&&(e.setMode("mini"),n.info.style.display="block"),n.info.offsetWidth<200&&n.time.classList.add("aplayer-time-narrow"),n.listOl.style.position="relative",e.randomOrder=(m=o.audio.length,function(e){for(let t=e.length-1;t>=0;t--){const a=Math.floor(Math.random()*(t+1)),o=e[a];e[a]=e[t],e[t]=o}return e}([...Array(m)].map((function(e,t){return t})))),t=function(){const e=o.storageName,t=JSON.parse(localStorage.getItem(e))||{};return t.volume||(t.volume=o.volume),{get:()=>t.volume,set(a){t.volume=a,localStorage.setItem(e,JSON.stringify(t))}}}(),function(){if(2===o.lrcType||!0===o.lrcType){const e=l.getElementsByClassName("aplayer-lrc-content");for(let t=0;t<e.length;t++)o.audio[t]&&(o.audio[t].lrc=e[t].innerHTML)}o.lrcType&&(e.lrc=(e=>{const t=e.container,a=e.player,o=e.async;let l=[],n=0,r=[];function i(){a.events.trigger("lrcshow"),a.template.lrcWrap.classList.remove("aplayer-lrc-hide")}function s(){a.events.trigger("lrchide"),a.template.lrcWrap.classList.add("aplayer-lrc-hide")}function d(e=a.audio.currentTime){if(n>r.length-1||e<r[n][0]||!r[n+1]||e>=r[n+1][0])for(let a=0;a<r.length;a++)e>=r[a][0]&&(!r[a+1]||e<r[a+1][0])&&(n=a,t.style.transform=`translateY(${16*-n}px)`,t.style.webkitTransform=`translateY(${16*-n}px)`,t.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),t.getElementsByTagName("p")[a].classList.add("aplayer-lrc-current"))}function c(e){if(e){const t=(e=e.replace(/([^\]^\n])\[/g,((e,t)=>t+"\n["))).split("\n");let a=[];const o=t.length;for(let e=0;e<o;e++){const o=t[e].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),l=t[e].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(o){const e=o.length;for(let t=0;t<e;t++){const e=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(o[t]),n=60*e[1]+parseInt(e[2])+(e[4]?parseInt(e[4])/(2===(e[4]+"").length?100:1e3):0);a.push([n,l])}}}return a=a.filter((e=>e[1])),a.sort(((e,t)=>e[0]-t[0])),a}return[]}return{show:i,hide:s,toggle:function(){a.template.lrcWrap.classList.contains("aplayer-lrc-hide")?i():s()},update:d,switch:function(e){if(!l[e])if(o){l[e]=[["00:00","Loading"]];const o=new XMLHttpRequest;o.onreadystatechange=()=>{e===a.list.index&&4===o.readyState&&(o.status>=200&&o.status<300||304===o.status?l[e]=c(o.responseText):(a.notice(`LRC file request fails: status ${o.status}`),l[e]=[["00:00","Not available"]]),t.innerHTML=q({lyrics:l[e]}),d(0),r=l[e])};const n=a.list.audios[e].lrc;o.open("get",n,!0),o.send(null)}else a.list.audios[e].lrc?l[e]=c(a.list.audios[e].lrc):l[e]=[["00:00","Not available"]];t.innerHTML=q({lyrics:l[e]}),r=l[e]},remove:function(e){l.splice(e,1)},clear:function(){l=[],t.innerHTML=""}}})({container:n.lrc,async:3===o.lrcType,player:e}))}(),e.bar=(e=>{const t={...e};return{get:function(e,a){return parseFloat(t[e].style[a])/100},set:function(e,a,o){a=Math.max(a,0),a=Math.min(a,1),t[e].style[o]=100*a+"%"}}})(n),r=(e=>{let t=0,a=e.options.audio;function o(){e.events.trigger("listshow"),e.template.list.classList.remove("aplayer-list-hide");const t=n();e.template.listOl.scrollTop=t.offsetTop}function l(){e.events.trigger("listhide"),e.template.list.classList.add("aplayer-list-hide")}function n(){return e.container.querySelectorAll(".aplayer-list li")[t]}function r(o){if(e.events.trigger("listswitch",{index:o}),void 0!==o&&a[o]){t=o;const l=a[t];e.template.pic.style.backgroundImage=l.cover?`url('${l.cover}')`:"",e.theme(a[t].theme||e.options.theme,t,!1),e.template.title.innerHTML=l.name,e.template.author.innerHTML=l.artist?" - "+l.artist:"";const r=e.container.getElementsByClassName("aplayer-list-light")[0];r&&r.classList.remove("aplayer-list-light");const i=n();i.classList.add("aplayer-list-light"),i.parentNode.scrollTo({top:i.offsetTop,left:0,behavior:"smooth"}),e.setAudio(l),e.lrc&&e.lrc.switch(t),e.lrc&&e.lrc.update(0),1!==e.duration&&(e.template.dtime.innerHTML=s(e.duration))}}return e.template.list.addEventListener("click",(a=>{let o;o="LI"===a.target.tagName.toUpperCase()?a.target:a.target.parentElement;const l=parseInt(o.getElementsByClassName("aplayer-list-index")[0].innerHTML)-1;l!==t?(r(l),e.play()):e.toggle()})),{get index(){return t},set index(e){t=e},get audios(){return a},set audios(e){a=e},show:o,hide:l,toggle:function(){e.template.list.classList.contains("aplayer-list-hide")?o():l()},switch:r}})(e),e.list=r,e.audio=document.createElement("audio"),e.audio.preload=o.preload,B.forEach((t=>{e.audio.addEventListener(t,(a=>{e.events.trigger(t,a)}))})),e.volume(t.get(),!0),function(){let t;e.on("play",(()=>{M&&z()})),e.on("pause",(()=>{M||O()})),e.on("timeupdate",(()=>{if(!e.disableTimeupdate){e.bar.set("played",e.audio.currentTime/e.duration,"width"),e.lrc&&e.lrc.update();const t=s(e.audio.currentTime);n.ptime.innerHTML!==t&&(n.ptime.innerHTML=t)}})),e.on("durationchange",(()=>{1!==e.duration&&(n.dtime.innerHTML=s(e.duration))})),e.on("progress",(()=>{const t=e.audio.buffered.length?e.audio.buffered.end(e.audio.buffered.length-1)/e.duration:0;e.bar.set("loaded",t,"width")})),e.on("error",(()=>{r.audios.length>1?(e.notice("An audio error has occurred, player will skip forward in 2 seconds."),t=setTimeout((()=>{e.skipForward(),M||e.play()}),2e3)):1===r.audios.length&&e.notice("An audio error has occurred.")})),e.events.on("listswitch",(()=>{t&&clearTimeout(t)})),e.on("ended",(()=>{"none"===o.loop?"list"===o.order?r.index<r.audios.length-1?(r.switch((r.index+1)%r.audios.length),e.play()):(r.switch((r.index+1)%r.audios.length),e.pause()):"random"===o.order&&(e.randomOrder.indexOf(r.index)<e.randomOrder.length-1?(r.switch(N()),e.play()):(r.switch(N()),e.pause())):"one"===o.loop?(r.switch(r.index),e.play()):"all"===o.loop&&(e.skipForward(),e.play())}))}(),"random"===o.order?r.switch(e.randomOrder[0]):r.switch(0),o.autoplay&&e.play(),H.push(e),e.afterInitHooks.forEach((t=>{t(e)})),e},e.setAudio=t=>{L&&(L.destroy(),L=null);let a=t.type;o.customAudioType&&o.customAudioType[a]?"[object Function]"===Object.prototype.toString.call(o.customAudioType[a])?o.customAudioType[a](e.audio,t,e):console.error(`Illegal customType: ${a}`):(a&&"auto"!==a||(a=/m3u8(#|\?|$)/i.exec(t.url)?"hls":"normal"),"hls"===a?L=e.hlsHandler(t):"normal"===a&&(e.audio.src=t.url)),e.seek(0),M||e.audio.play()},e.destroy=()=>{H.splice(H.indexOf(e),1),e.pause(),l.innerHTML="",e.audio.src="",k.destroy(),e.events.trigger("destroy")},e.setMode=(t="normal")=>{e.mode=t,"mini"===t?l.classList.add("aplayer-narrow"):"normal"===t&&l.classList.remove("aplayer-narrow")},e.notice=(t,o=2e3,l=.8)=>{n.notice.innerHTML=t,n.notice.style.opacity=l,a&&clearTimeout(a),e.events.trigger("noticeshow",{text:t}),o&&(a=setTimeout((()=>{n.notice.style.opacity=0,e.events.trigger("noticehide")}),o))},e.theme=(e=r.audios[r.index].theme||o.theme,t=r.index,a=!0)=>{a&&r.audios[t]&&(r.audios[t].theme=e),n.listCurs[t]&&(n.listCurs[t].style.backgroundColor=e),t===r.index&&(n.pic.style.backgroundColor=e,n.played.style.background=e,n.thumb.style.background=e,n.volume.style.background=e)},e.seek=t=>{t=Math.max(t,0),t=Math.min(t,e.duration),e.audio.currentTime=t,e.bar.set("played",t/e.duration,"width"),n.ptime.innerHTML=s(t)},e.play=()=>{z();const t=e.audio.play();t&&t.catch((e=>{console.warn(e),"NotAllowedError"===e.name&&O()}))},e.pause=()=>{O(),e.audio.pause()},e.switchVolumeIcon=()=>{e.volume()>=.95?n.volumeButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>':e.volume()>0?n.volumeButton.innerHTML=v:n.volumeButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},e.volume=(a,o)=>(a=parseFloat(a),isNaN(a)||(a=Math.max(a,0),a=Math.min(a,1),e.bar.set("volume",a,"height"),o||t.set(a),e.audio.volume=a,e.audio.muted&&(e.audio.muted=!1),e.switchVolumeIcon()),e.audio.muted?0:e.audio.volume),e.on=(t,a)=>{e.events.on(t,a)},e.toggle=()=>{n.button.classList.contains("aplayer-play")?e.play():n.button.classList.contains("aplayer-pause")&&e.pause()},e.skipBack=()=>{r.switch(function(){if(!(r.audios.length>1))return 0;if("list"===o.order)return r.index-1<0?r.audios.length-1:r.index-1;if("random"===o.order){const t=e.randomOrder.indexOf(r.index);return 0===t?e.randomOrder[e.randomOrder.length-1]:e.randomOrder[t-1]}}())},e.skipForward=()=>{r.switch(N())},e.use=t=>(t(e),e),e},O=e({__name:"APlayer",props:{songServer:{default:"netease"},songType:{default:"playlist"},songId:{}},async setup(e){let i,s;const d=e,c=t(),p=z(),u=`https://api.liuly.moe/meting-api/?server=${d.songServer}&type=${d.songType}&id=${d.songId}&r=${Math.random()}`,m=([i,s]=a((()=>fetch(u).then((e=>e.json())))),i=await i,s(),i);return o((function(){p.init({container:c.value,theme:"rgba(255,255,255,0.2)",preload:"none",lrcType:3,listFolded:!0,listMaxHeight:"250px",audio:m})})),l((()=>{p.destroy()})),(e,t)=>(n(),r("div",{ref_key:"playerRef",ref:c},null,512))}});export{O as default};
