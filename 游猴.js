// ==UserScript==
// @name         MissavNoPause
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Missav切换页面或者失去焦点都会自动暂停，此插件就是组织视频自动暂停，不影响空格或者单击导致的暂停。源码地址：https://github.com/ChangShaJackMa/MissavNoPause。
// @author       ChangShaJackMa
// @match        https://missav.com/*
// @icon         https://github.com/ChangShaJackMa/MissavNoPause/blob/main/noPause.png
// @grant        none
// @run-at       document-start
// ==/UserScript==
function run() {
    code = "{" +
        function work() {
            console.log("I am work")
            document.addEventListener("visibilitychange",(event)=>{
                // console.log("I am document.visibilitychange")
                event.stopImmediatePropagation();
                event.stopPropagation()
            });
            window.addEventListener("blur",(event)=>{
                // console.log("I am window.blur")
                event.stopImmediatePropagation();
                event.stopPropagation()
            });
            document.addEventListener("blur",(event)=>{
                //console.log("I am documetn.blur")
                event.stopImmediatePropagation();
                event.stopPropagation()
            });
        } + "work()};";
    //var scriptTag = document.createElement("script");
    //scriptTag.textContent = code;
    //document.head.appendChild(scriptTag);
    window.eval(code);
//script.remove();
}
run()//run_at document_start

















































