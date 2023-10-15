// ==UserScript==
// @name         MissavNoPause
// @namespace    http://tampermonkey.net/
// @version      3
// @description  Missav切换页面或者失去焦点都会自动暂停，此插件就是阻止视频自动暂停，不影响空格或者单击导致的暂停。注意：使用manifestV3实现后，可能每次需要手动授权才会运行，首次使用，如果需要授权，请选择总是允许(chrome不需要，firefox需要)，这样下次打开页面就会自动运行了。源码地址：https://github.com/ChangShaJackMa/MissavNoPause。
// @author       ChangShaJackMa
// @match        https://missav.com/*
// @icon         https://github.com/ChangShaJackMa/MissavNoPause/blob/main/noPause.png
// @grant        none
// @run-at       document-start
// ==/UserScript==
// 此文件不会同步更新，有需要自己根据content_start.js去改
function run() {
    console.log("I am work")
    document.addEventListener("visibilitychange",(event)=>{
        //console.log("I am document.visibilitychange")
        event.stopImmediatePropagation();
        event.stopPropagation()
    });
    window.addEventListener("blur",(event)=>{
        //console.log("I am window.blur")
        event.stopImmediatePropagation();
        event.stopPropagation()
    });
    document.addEventListener("blur",(event)=>{
        //console.log("I am documetn.blur")
        event.stopImmediatePropagation();
        event.stopPropagation()
    });
};
run()//run_at document_start

















































