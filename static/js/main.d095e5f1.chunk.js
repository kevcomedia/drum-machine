(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t(14)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),m=(t(10),t(1));t(11);var s=function(e){var a,t,r=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){c(!1)},100);return function(){return clearTimeout(e)}},[t]),[t,c]}(),o=Object(m.a)(r,2),s=o[0],u=o[1],i=Object(n.useRef)(null),d=function(){var a;(a=i.current).currentTime=0,a.play(),e.onActivate(e.audioName),u(!0)};return a=e.label,t=d,Object(n.useEffect)(function(){var e=function(e){e.keyCode===a.charCodeAt()&&t()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:s?"drum-pad drum-pad_active":"drum-pad",onClick:d},e.label),c.a.createElement("audio",{className:"clip",src:e.audioSrc,preload:"auto",ref:i}))},u={Q:["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","Heater 1"],W:["https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","Heater 2"],E:["https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","Heater 3"],A:["https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","Heater 4"],S:["https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","Clap"],D:["https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","Open HH"],Z:["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","Kick n' Hat"],X:["https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","Kick"],C:["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","Closed HH"]},i=(t(12),["Q","W","E","A","S","D","Z","X","C"]);var d=function(e){return c.a.createElement("div",{className:"drum-pads"},i.map(function(a){return c.a.createElement(s,{key:a,label:a,audioSrc:u[a][0],audioName:u[a][1],onActivate:e.onActivate})}))};t(13);var p=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement(d,{onActivate:r}),c.a.createElement("div",{className:"display"},t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.d095e5f1.chunk.js.map