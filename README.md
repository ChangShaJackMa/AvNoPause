# MissavNoPause
Missav切换页面或者失去焦点都会自动暂停，此插件就是阻止视频自动暂停，不影响空格或者单击导致的暂停。注意：使用manifestV3实现后，可能每次需要手动授权才会运行，首次使用，如果需要授权，请选择总是允许(chrome可能不需要，firefox可能需要)，这样下次打开页面插件就会自动运行了。


各浏览器安装插件：
chrome：只能通过临时加载插件来加载，因为谷歌开发者注册要5美元，注册也不一定能通过审核，所以未经上架的xx.crx文件不能运行，虽然叫临时加载插件，但是加载一次以后就不用再次加载了。把xx.xpi解压到a文件夹，然后在chrome里直接添加该文件夹a就行，也可以直接加载extensionSource文件夹，详细操作，请见Loading an unpacked extension一节：https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
    
firefox：xx.xpi文件就是离线安装包，直接拖拽到firefox浏览器就行（如果开启隐私模式，需要允许在隐私模式下运行）,firefox默认每次都需要授权，请选择总是允许
![img.png](img.png)
Edge:用不了，审核不过

国产浏览器：如果是chrome系列的如360浏览器，都是使用crx文件，国产的直接拖拽crx文件到浏览器就行，如果可以用就ok，如果不可以加载crx文件（因为没有审核，所以加载以后可能不允许运行）那就只能通过加载临时插件了，步骤同chrome

firefox扩展教程：https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

firefox打包教程：https://requestly.io/blog/self-host-mozilla-add-on（因为是访问黄网，所以addon中心拒绝了此插件，只能自己安装）

firefox开发者中心：https://addons.mozilla.org/zh-CN/developers/

游猴.js是用于游猴的脚本，内容基本和content.js一样，只不过把manifest中的设置搬到了脚本里面
