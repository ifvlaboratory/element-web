(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[5385],{"./src/languageHandler.tsx":(e,t,n)=>{"use strict";n.d(t,{P7:()=>r,_t:()=>o});var s=n("./node_modules/matrix-react-sdk/src/languageHandler.tsx");class r extends s.P7{constructor(e,t){super(e,t)}}function o(e,t,n){return(0,s._t)(e,t,n)}},"./src/vector/init.tsx":(e,t,n)=>{"use strict";n.d(t,{_t:()=>N._t,extractErrorMessageFromError:()=>te.$,loadApp:()=>ce,loadConfig:()=>oe,loadLanguage:()=>ae,loadModules:()=>ue,loadTheme:()=>ie,preparePlatform:()=>se,rageshakePromise:()=>ne,setupLogStorage:()=>re,showError:()=>le,showIncompatibleBrowser:()=>de});var s=n("./node_modules/react-dom/index.js"),r=n("./node_modules/react/index.js"),o=n("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),a=n("./node_modules/matrix-react-sdk/src/settings/SettingsStore.ts"),i=n("./node_modules/matrix-react-sdk/src/PlatformPeg.ts"),c=n("./node_modules/matrix-react-sdk/src/SdkConfig.ts"),l=n("./node_modules/matrix-react-sdk/src/theme.ts"),d=n("./node_modules/matrix-js-sdk/src/logger.ts"),u=n("./node_modules/matrix-react-sdk/src/modules/ModuleRunner.ts"),h=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),p=n("./node_modules/matrix-react-sdk/src/BasePlatform.ts"),g=n("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"),m=n("./node_modules/matrix-react-sdk/src/rageshake/rageshake.ts"),w=n("./node_modules/matrix-react-sdk/src/Modal.tsx"),v=n("./node_modules/matrix-react-sdk/src/components/views/dialogs/InfoDialog.tsx"),y=n("./node_modules/matrix-react-sdk/src/components/views/elements/Spinner.tsx"),f=n("./node_modules/matrix-js-sdk/src/randomstring.ts"),b=n("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts"),x=n("./node_modules/matrix-react-sdk/src/toasts/UpdateToast.tsx"),k=n("./node_modules/matrix-react-sdk/src/stores/ToastStore.ts"),C=n("./node_modules/matrix-react-sdk/src/components/views/toasts/GenericExpiringToast.tsx"),S=n("./node_modules/matrix-react-sdk/src/stores/BreadcrumbsStore.ts"),A=n("./node_modules/matrix-react-sdk/src/stores/AsyncStore.ts"),E=n("./node_modules/matrix-react-sdk/src/Avatar.ts"),I=n("./node_modules/matrix-react-sdk/src/components/views/elements/DesktopCapturerSourcePicker.tsx"),O=n("./node_modules/matrix-react-sdk/src/MatrixClientPeg.ts");async function _(e){const t=new URL(e,window.location.href);t.searchParams.set("cachebuster",Date.now().toString());const n=await fetch(t,{cache:"no-cache",method:"GET"});return 404===n.status||0===n.status?{}:n.ok?n.json():void 0}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,h.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const D={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontWeight:"bold",isUp:!1,isLeft:!1};class j{constructor(e={}){(0,h.A)(this,"browser",{ff:void 0!==window.InstallTrigger,opera:!!window.opera||navigator.userAgent.includes("Opera")}),(0,h.A)(this,"params",void 0),(0,h.A)(this,"canvas",void 0),(0,h.A)(this,"baseImage",void 0),(0,h.A)(this,"context",void 0),(0,h.A)(this,"icons",void 0),(0,h.A)(this,"isReady",!1),(0,h.A)(this,"readyCb",void 0),this.params=U(U({},D),e),this.icons=j.getIcons(),this.canvas=document.createElement("canvas"),this.baseImage=document.createElement("img");const t=this.icons[this.icons.length-1];t.hasAttribute("href")?(this.baseImage.setAttribute("crossOrigin","anonymous"),this.baseImage.onload=()=>{this.canvas.height=this.baseImage.height>0?this.baseImage.height:32,this.canvas.width=this.baseImage.width>0?this.baseImage.width:32,this.context=this.canvas.getContext("2d"),this.ready()},this.baseImage.setAttribute("src",t.getAttribute("href"))):(this.canvas.height=this.baseImage.height=32,this.canvas.width=this.baseImage.width=32,this.context=this.canvas.getContext("2d"),this.ready())}reset(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height)}options(e,t){const n={n:"number"==typeof e?Math.abs(e):e,len:(""+e).length,x:.4,y:.4,w:.6,h:.6};return t.isUp&&(n.y<.6?n.y=n.y-.4:n.y=n.y-2*n.y+(1-n.w)),t.isLeft&&(n.x<.6?n.x=n.x-.4:n.x=n.x-2*n.x+(1-n.h)),n.x=this.canvas.width*n.x,n.y=this.canvas.height*n.y,n.w=this.canvas.width*n.w,n.h=this.canvas.height*n.h,n}circle(e,t){const n=U(U({},this.params),t),s=this.options(e,n);let r=!1;2===s.len?(s.x=s.x-.4*s.w,s.w=1.4*s.w,r=!0):s.len>=3&&(s.x=s.x-.65*s.w,s.w=1.65*s.w,r=!0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height),this.context.beginPath();const o=Math.floor(s.h*("number"==typeof s.n&&s.n>99?.85:1))+"px";if(this.context.font=`${n.fontWeight} ${o} ${n.fontFamily}`,this.context.textAlign="center",r?(this.context.moveTo(s.x+s.w/2,s.y),this.context.lineTo(s.x+s.w-s.h/2,s.y),this.context.quadraticCurveTo(s.x+s.w,s.y,s.x+s.w,s.y+s.h/2),this.context.lineTo(s.x+s.w,s.y+s.h-s.h/2),this.context.quadraticCurveTo(s.x+s.w,s.y+s.h,s.x+s.w-s.h/2,s.y+s.h),this.context.lineTo(s.x+s.h/2,s.y+s.h),this.context.quadraticCurveTo(s.x,s.y+s.h,s.x,s.y+s.h-s.h/2),this.context.lineTo(s.x,s.y+s.h/2),this.context.quadraticCurveTo(s.x,s.y,s.x+s.h/2,s.y)):this.context.arc(s.x+s.w/2,s.y+s.h/2,s.h/2,0,2*Math.PI),this.context.fillStyle=n.bgColor,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.stroke(),this.context.fillStyle=n.textColor,"number"==typeof s.n&&s.n>999){const e=(s.n>9999?9:Math.floor(s.n/1e3))+"k+";this.context.fillText(e,Math.floor(s.x+s.w/2),Math.floor(s.y+s.h-.2*s.h))}else this.context.fillText(""+s.n,Math.floor(s.x+s.w/2),Math.floor(s.y+s.h-.15*s.h));this.context.closePath()}ready(){var e;this.isReady||(this.isReady=!0,null===(e=this.readyCb)||void 0===e||e.call(this))}setIcon(e){setTimeout((()=>{this.setIconSrc(e.toDataURL("image/png"))}),0)}setIconSrc(e){if(this.browser.ff||this.browser.opera){var t;const n=this.icons[this.icons.length-1],s=window.document.createElement("link");this.icons=[s],s.setAttribute("rel","icon"),s.setAttribute("type","image/png"),window.document.getElementsByTagName("head")[0].appendChild(s),s.setAttribute("href",e),null===(t=n.parentNode)||void 0===t||t.removeChild(n)}else this.icons.forEach((t=>{t.setAttribute("href",e)}))}badge(e,t){this.isReady?("string"==typeof e||e>0?this.circle(e,t):this.reset(),this.setIcon(this.canvas)):this.readyCb=()=>{this.badge(e,t)}}static getLinks(){const e=[],t=window.document.getElementsByTagName("head")[0].getElementsByTagName("link");for(const n of t)n.hasAttribute("rel")&&/(^|\s)icon(\s|$)/i.test(n.getAttribute("rel"))&&e.push(n);return e}static getIcons(){let e=j.getLinks();return 0===e.length&&(e=[window.document.createElement("link")],e[0].setAttribute("rel","icon"),window.document.getElementsByTagName("head")[0].appendChild(e[0])),e.forEach((e=>{e.setAttribute("type","image/png")})),e}}var N=n("./src/languageHandler.tsx");class R extends p.Ay{constructor(...e){super(...e),(0,h.A)(this,"_favicon",void 0)}async getConfig(){return async function(e=""){""===e||e.endsWith("/")||(e+="/");let t=window.location.hostname.trimEnd();"."===t[t.length-1]&&(t=t.slice(0,-1));const n=_(`${e}config.${t}.json`),s=_(e+"config.json");try{const e=await n;if(!e||0===Object.keys(e).length)throw new Error;return e}catch(e){return s}}()}getHumanReadableName(){return"Vector Base Platform"}get favicon(){return this._favicon||(this._favicon=new j),this._favicon}updateFavicon(){let e="#d00",t=this.notificationCount;this.errorDidOccur&&(t=t||"×",e="#f00"),this.favicon.badge(t,{bgColor:e})}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),this.updateFavicon())}setErrorStatus(e){this.errorDidOccur!==e&&(super.setErrorStatus(e),this.updateFavicon())}startUpdater(){}getDefaultDeviceDisplayName(){return(0,N._t)("unknown_device")}}var T=n("./node_modules/matrix-react-sdk/src/indexing/BaseEventIndexManager.ts"),M=n("./node_modules/matrix-js-sdk/src/utils.ts");class L{constructor(e="ipcCall",t="ipcReply"){if(this.sendChannel=e,this.recvChannel=t,(0,h.A)(this,"pendingIpcCalls",{}),(0,h.A)(this,"nextIpcCallId",0),(0,h.A)(this,"onIpcReply",((e,t)=>{if(void 0===t.id)return void d.v.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void d.v.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)})),!window.electron)throw new Error("Cannot instantiate ElectronPlatform, window.electron is not set");window.electron.on(this.recvChannel,this.onIpcReply)}async call(e,...t){const n=++this.nextIpcCallId,s=(0,M.v6)();return this.pendingIpcCalls[n]=s,window.electron.send(this.sendChannel,{id:n,name:e,args:t}),s.promise}}class B extends T.A{constructor(...e){super(...e),(0,h.A)(this,"ipc",new L("seshat","seshatReply"))}async supportsEventIndexing(){return this.ipc.call("supportsEventIndexing")}async initEventIndex(e,t){return this.ipc.call("initEventIndex",e,t)}async addEventToIndex(e,t){return this.ipc.call("addEventToIndex",e,t)}async deleteEvent(e){return this.ipc.call("deleteEvent",e)}async isEventIndexEmpty(){return this.ipc.call("isEventIndexEmpty")}async isRoomIndexed(e){return this.ipc.call("isRoomIndexed",e)}async commitLiveEvents(){return this.ipc.call("commitLiveEvents")}async searchEventIndex(e){return this.ipc.call("searchEventIndex",e)}async addHistoricEvents(e,t,n){return this.ipc.call("addHistoricEvents",e,t,n)}async addCrawlerCheckpoint(e){return this.ipc.call("addCrawlerCheckpoint",e)}async removeCrawlerCheckpoint(e){return this.ipc.call("removeCrawlerCheckpoint",e)}async loadFileEvents(e){return this.ipc.call("loadFileEvents",e)}async loadCheckpoints(){return this.ipc.call("loadCheckpoints")}async closeEventIndex(){return this.ipc.call("closeEventIndex")}async getStats(){return this.ipc.call("getStats")}async getUserVersion(){return this.ipc.call("getUserVersion")}async setUserVersion(e){return this.ipc.call("setUserVersion",e)}async deleteEventIndex(){return this.ipc.call("deleteEventIndex")}}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,h.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W="element-desktop-ssoid",K=navigator.platform.toUpperCase().includes("MAC");function $(e){["call_state"].includes(e.action)&&window.electron.send("app_onAction",e)}class H extends R{constructor(){if(super(),(0,h.A)(this,"ipc",new L("ipcCall","ipcReply")),(0,h.A)(this,"eventIndexManager",new B),(0,h.A)(this,"ssoID",(0,f.DU)(32)),(0,h.A)(this,"onBreadcrumbsUpdate",(()=>{const e=S.Y.instance.rooms.slice(0,7).map((e=>({roomId:e.roomId,avatarUrl:(0,E.ze)(e,Math.floor(60*window.devicePixelRatio),Math.floor(60*window.devicePixelRatio),"crop"),initial:(0,E.$R)(e.name)})));this.ipc.call("breadcrumbs",e)})),(0,h.A)(this,"onUpdateDownloaded",(async(e,{releaseNotes:t,releaseName:n})=>{g.Ay.dispatch({action:b.r.CheckUpdates,status:p.Kn.Ready}),this.shouldShowUpdate(n)&&(0,x.P)(await this.getAppVersion(),n,t)})),!window.electron)throw new Error("Cannot instantiate ElectronPlatform, window.electron is not set");g.Ay.register($),window.electron.on("check_updates",((e,t)=>{g.Ay.dispatch(F({action:b.r.CheckUpdates},function(e){return!0===e?{status:p.Kn.Downloading}:!1===e?{status:p.Kn.NotAvailable}:{status:p.Kn.Error,detail:e}}(t)))})),window.electron.on("userAccessToken",(()=>{var e;window.electron.send("userAccessToken",null===(e=O.J.get())||void 0===e?void 0:e.getAccessToken())})),window.electron.on("serverSupportedVersions",(async()=>{var e;window.electron.send("serverSupportedVersions",await(null===(e=O.J.get())||void 0===e?void 0:e.getVersions()))})),window.electron.on("before-quit",(function(){d.v.log("element-desktop closing"),m.bX()})),window.electron.on("update-downloaded",this.onUpdateDownloaded),window.electron.on("preferences",(()=>{g.Ay.fire(b.r.ViewUserSettings)})),window.electron.on("userDownloadCompleted",((e,{id:t,name:n})=>{const s=`DOWNLOAD_TOAST_${t}`;k.A.sharedInstance().addOrReplaceToast({key:s,title:(0,N._t)("download_completed"),props:{description:n,acceptLabel:(0,N._t)("action|open"),onAccept:()=>{window.electron.send("userDownloadAction",{id:t,open:!0}),k.A.sharedInstance().dismissToast(s)},dismissLabel:(0,N._t)("action|dismiss"),onDismiss:()=>{window.electron.send("userDownloadAction",{id:t})},numSeconds:10},component:C.A,priority:99})})),window.electron.on("openDesktopCapturerSourcePicker",(async()=>{const{finished:e}=w.Ay.createDialog(I.Ay),[t]=await e;await this.ipc.call("callDisplayMediaCallback",null!=t?t:{id:"",name:"",thumbnailURL:""})})),this.ipc.call("startSSOFlow",this.ssoID),S.Y.instance.on(A.H,this.onBreadcrumbsUpdate)}async getConfig(){return this.ipc.call("getConfig")}getHumanReadableName(){return"Electron Platform"}supportsSpellCheckSettings(){return!0}allowOverridingNativeContextMenus(){return!0}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),window.electron.send("setBadgeCount",e))}supportsNotifications(){return!0}maySendNotifications(){return!0}displayNotification(e,t,n,s,r){navigator.userAgent.includes("Linux")&&(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const o=super.displayNotification(e,t,n,s,r),a=o.onclick;return o.onclick=()=>{null==a||a(),this.ipc.call("focusWindow")},o}loudNotification(e,t){window.electron.send("loudNotification")}needsUrlTooltips(){return!0}async getAppVersion(){return this.ipc.call("getAppVersion")}supportsSetting(e){switch(e){case"Electron.showTrayIcon":case"Electron.alwaysShowMenuBar":return!K;default:return!0}}getSettingValue(e){return this.ipc.call("getSettingValue",e)}setSettingValue(e,t){return this.ipc.call("setSettingValue",e,t)}async canSelfUpdate(){const e=await this.ipc.call("getUpdateFeedUrl");return Boolean(e)}startUpdateCheck(){super.startUpdateCheck(),window.electron.send("check_updates")}installUpdate(){window.electron.send("install_update")}getDefaultDeviceDisplayName(){const e=c.Ay.get().brand;return(0,N._t)("desktop_default_device_name",{brand:e,platformName:navigator.userAgent.includes("Macintosh")?"macOS":navigator.userAgent.includes("FreeBSD")?"FreeBSD":navigator.userAgent.includes("OpenBSD")?"OpenBSD":navigator.userAgent.includes("SunOS")?"SunOS":navigator.userAgent.includes("Windows")?"Windows":navigator.userAgent.includes("Linux")?"Linux":"Unknown"})}requestNotificationPermission(){return Promise.resolve("granted")}reload(){window.location.reload()}getEventIndexingManager(){return this.eventIndexManager}async setLanguage(e){return this.ipc.call("setLanguage",e)}setSpellCheckEnabled(e){this.ipc.call("setSpellCheckEnabled",e).catch((e=>{d.v.log("Failed to send setSpellCheckEnabled IPC to Electron"),d.v.error(e)}))}async getSpellCheckEnabled(){return this.ipc.call("getSpellCheckEnabled")}setSpellCheckLanguages(e){this.ipc.call("setSpellCheckLanguages",e).catch((e=>{d.v.log("Failed to send setSpellCheckLanguages IPC to Electron"),d.v.error(e)}))}async getSpellCheckLanguages(){return this.ipc.call("getSpellCheckLanguages")}async getDesktopCapturerSources(e){return this.ipc.call("getDesktopCapturerSources",e)}supportsDesktopCapturer(){return!0}supportsJitsiScreensharing(){return!1}async getAvailableSpellCheckLanguages(){return this.ipc.call("getAvailableSpellCheckLanguages")}getSSOCallbackUrl(e){const t=super.getSSOCallbackUrl(e);return t.protocol="element",t.searchParams.set(W,this.ssoID),t}startSingleSignOn(e,t,n,s){super.startSingleSignOn(e,t,n,s),w.Ay.createDialog(v.A,{title:(0,N._t)("auth|sso_complete_in_browser_dialog_title"),description:r.createElement(y.A,null)})}navigateForwardBack(e){this.ipc.call(e?"navigateBack":"navigateForward")}overrideBrowserShortcuts(){return!0}async getPickleKey(e,t){try{return await this.ipc.call("getPickleKey",e,t)}catch(e){return null}}async createPickleKey(e,t){try{return await this.ipc.call("createPickleKey",e,t)}catch(e){return null}}async destroyPickleKey(e,t){try{await this.ipc.call("destroyPickleKey",e,t)}catch(e){}}async clearStorage(){try{await super.clearStorage(),await this.ipc.call("clearStorage")}catch(e){}}get baseUrl(){var e;return null!==(e=c.Ay.get().web_base_url)&&void 0!==e?e:"https://app.element.io"}get defaultOidcClientUri(){return"https://element.io"}async getOidcClientMetadata(){return F(F({},await super.getOidcClientMetadata()),{},{applicationType:"native"})}getOidcClientState(){return`:${W}:${this.ssoID}`}getOidcCallbackUrl(){const e=super.getOidcCallbackUrl();return e.protocol="io.element.desktop",e}}var q=n("./node_modules/ua-parser-js/src/ua-parser.js"),Y=n.n(q),G=n("./src/vector/url_utils.ts");function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function X(e){return/^v\d+.\d+.\d+(-.+)?$/.test(e)?e.substring(1):e}class z extends R{constructor(){super(),(0,h.A)(this,"pollForUpdate",((e,t)=>this.getMostRecentVersion().then((n=>{const s=X(z.VERSION);return s!==n?(this.shouldShowUpdate(n)?(console.log("Update available to "+n+", will notify user"),e(s,n)):console.log("Update available to "+n+" but won't be shown"),{status:p.Kn.Ready}):(console.log("No update available, already on "+n),null==t||t(),{status:p.Kn.NotAvailable})}),(e=>(d.v.error("Failed to poll for update",e),{status:p.Kn.Error,detail:e.message||(e.status?e.status.toString():"Unknown Error")}))))),this.tryRegisterServiceWorker().catch((e=>console.error("Error registering/updating service worker:",e)))}async tryRegisterServiceWorker(){if(!("serviceWorker"in navigator))return;const e=await navigator.serviceWorker.register("sw.js");e&&(await e.update(),navigator.serviceWorker.addEventListener("message",this.onServiceWorkerPostMessage.bind(this)))}onServiceWorkerPostMessage(e){try{var t,n;if("userinfo"===(null===(t=e.data)||void 0===t?void 0:t.type)&&null!==(n=e.data)&&void 0!==n&&n.responseKey){const t=localStorage.getItem("mx_user_id"),n=localStorage.getItem("mx_device_id");e.source.postMessage({responseKey:e.data.responseKey,userId:t,deviceId:n})}}catch(e){console.error("Error responding to service worker: ",e)}}getHumanReadableName(){return"Web Platform"}supportsNotifications(){return Boolean(window.Notification)}maySendNotifications(){return"granted"===window.Notification.permission}requestNotificationPermission(){return new Promise((function(e,t){window.Notification.requestPermission((t=>{e(t)})).catch(t)}))}async getMostRecentVersion(){const e=await fetch("version",{method:"GET",cache:"no-cache"});if(e.ok){return X((await e.text()).trim())}return Promise.reject({status:e.status})}getAppVersion(){return Promise.resolve(X(z.VERSION))}startUpdater(){console.log("startUpdater, current version is "+X(z.VERSION)),this.pollForUpdate(((e,t)=>{if((0,G.u)(location).updated)return console.log("Update reloaded but still on an old version, stopping"),void(0,x.P)(e,t);const n=new URL(window.location.href);n.searchParams.set("updated",t),console.log("Update reloading to "+n.toString()),window.location.href=n.toString()})),setInterval((()=>this.pollForUpdate(x.P,x.Y)),6e5)}async canSelfUpdate(){return!0}startUpdateCheck(){super.startUpdateCheck(),this.pollForUpdate(x.P,x.Y).then((e=>{g.Ay.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,h.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:b.r.CheckUpdates},e))}))}installUpdate(){window.location.reload()}getDefaultDeviceDisplayName(){const e=new URL(window.location.href),t=[e.host,e.pathname.replace(/\/$/,"")].join(""),n=new(Y()),s=n.getBrowser().name||"unknown browser";let r=n.getOS().name||"unknown OS";return"Mac OS"===r&&(r="macOS"),(0,N._t)("web_default_device_name",{appName:t,browserName:s,osName:r})}reload(){window.location.reload()}}(0,h.A)(z,"VERSION","v1.11.73");class Q extends z{setNotificationCount(e){if(!navigator.setAppBadge)return super.setNotificationCount(e);this.notificationCount!==e&&(this.notificationCount=e,navigator.setAppBadge(e).catch((e=>{d.v.error("Failed to update PWA app badge",e)})))}}var Z=n("./node_modules/matrix-react-sdk/src/rageshake/submit-rageshake.ts");window.mxSendRageshake=function(e,t){const n=c.Ay.get().bug_report_endpoint_url;n?(void 0===t&&(t=!0),e&&e.trim()?(0,Z.Ay)(n,{userText:e,sendLogs:t,progressCallback:d.v.log.bind(console)}).then((()=>{d.v.log("Bug report sent!")}),(e=>{d.v.error(e)})):d.v.error("Cannot send a rageshake without a message - please tell us what went wrong")):d.v.error("Cannot send a rageshake - no bug_report_endpoint_url configured")};const ee=[];var te=n("./node_modules/matrix-react-sdk/src/components/views/dialogs/ErrorDialog.tsx");const ne=function(){const e=m.Ts(!1);return e.then((async()=>{d.v.log("Initialised rageshake."),d.v.log("To fix line numbers in Chrome: Meatball menu → Settings → Ignore list → Add /rageshake\\.ts & /logger\\.ts$"),window.addEventListener("beforeunload",(()=>{d.v.log("element-web closing"),m.bX()})),await m.tP()}),(e=>{d.v.error("Failed to initialise rageshake: "+e)})),e}();function se(){window.electron?(d.v.log("Using Electron platform"),i.A.set(new H)):window.matchMedia("(display-mode: standalone)").matches?(d.v.log("Using PWA platform"),i.A.set(new Q)):(d.v.log("Using Web platform"),i.A.set(new z))}function re(){return c.Ay.get().bug_report_endpoint_url?m.fd():(d.v.warn("No bug report endpoint set - logs will not be persisted"),Promise.resolve())}async function oe(){var e;const t=await(null===(e=i.A.get())||void 0===e?void 0:e.getConfig());t?c.Ay.put(t):c.Ay.reset()}async function ae(){const e=a.A.getValue("language",null,!0);let t=[];e?t=[e]:o.yR().forEach((e=>{t.push(...o.Ev(e))}));try{await o.xC(t),document.documentElement.setAttribute("lang",o.UK())}catch(e){d.v.error("Unable to set language",e)}}async function ie(){return(0,l.Yl)()}async function ce(e){const t=await Promise.all([n.e(6889),n.e(1237),n.e(1869),n.e(1326),n.e(2702)]).then(n.bind(n,"./src/vector/app.tsx"));s.render(await t.loadApp(e,(function(e){window.matrixChat=e})),document.getElementById("matrixchat"))}async function le(e,t){const o=(await n.e(5607).then(n.bind(n,"./src/async-components/structures/ErrorView.tsx"))).default;window.matrixChat=s.render(r.createElement(o,{title:e,messages:t}),document.getElementById("matrixchat"))}async function de(e){const t=(await n.e(6145).then(n.bind(n,"./src/async-components/structures/CompatibilityView.tsx"))).default;window.matrixChat=s.render(r.createElement(t,{onAccept:e}),document.getElementById("matrixchat"))}async function ue(){for(const e of ee)u.r.instance.registerModule((t=>new e(t)))}},"./webapp/i18n/languages.json":(e,t,n)=>{"use strict";n.d(t,{A:()=>s});const s=n.p+"i18n/languages.165f50e.json"},"?c838":()=>{},"?b1db":()=>{},"?0784":()=>{},"?1873":()=>{},"?2904":()=>{}}]);
//# sourceMappingURL=init.js.map