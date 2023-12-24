
//https://javtiful.com
//https://cn.javtiful.com
function Javtiful_copyvideourlOrdownloadvideobybrowser(){
    site=document.domain
    function copyUrl() {
        let video = document.querySelector("video#hls-video")
        if (video != null && video.src !== "") {
            var textarea = document.createElement('textarea');
            textarea.style.visibility="false"
            document.body.appendChild(textarea);
            textarea.value =video.src
            textarea.select();
            document.execCommand('copy', true);
            console.log("copy url:",video.src)
        } else {
            alert("please click player button before copyurl")
        }
    }
    async function downloadByBrowse() {
        let video = document.querySelector("video#hls-video")
        if (video != null && video.src !== "") {
            await window.open(video.src)
            console.log("begin download:", video.src)
        } else {
            alert("please click player button before download")
        }
    }


    document.addEventListener('keydown', function(event) {
        if(event.ctrlKey&&event.shiftKey) {
            console.log("k1:",event.key,"ck:",event.ctrlKey,"sk:",event.shiftKey)
            switch (event.key) {
                case '#':
                    copyUrl()
                    event.stopImmediatePropagation()
                    event.stopPropagation()
                    break;
                case "$":
                    event.stopImmediatePropagation()
                    event.stopPropagation()
                    downloadByBrowse()
                default:
                    break;

            }
           // console.log("after")
        }

    });
}

function run(){
    site=document.domain
    console.log(site,"  i am run")
    if (site.match("javtiful")){
        site="javtiful.com"
    }
    switch (site){
        case "javtiful.com":Javtiful_copyvideourlOrdownloadvideobybrowser()
            break;
    }
}
run()//run_at document_end