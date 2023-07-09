# MissavNoPause
很简单的插件，用来阻止missav自动暂停，此插件不会影响手动空格暂停或者单击视频暂停。用的manifestV2，没用V3，当浏览器不再支持v2的时候此插件将失效，不是不想用v3，而是百度了个把星期都没找到在v3中eval的替代品，然后放弃chrome，转用的v2，只有firefox支持v2 原理很简单，就是设置content scripts run_at document.start，然后拦截window.blur/document.blur/document.visibilitychange事件传递给网页自带的js，因为网页就是通过这三个事件来自动暂停.
MissavNoPause.xpi就是打包以后的插件，直接拖拽到firefox即可自动安装（如果开启隐私模式，需要允许在隐私模式下运行）

firefox扩展教程：https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
firefox打包教程：https://requestly.io/blog/self-host-mozilla-add-on（因为是访问黄网，所以addon中心拒绝了此插件，只能自己安装）
