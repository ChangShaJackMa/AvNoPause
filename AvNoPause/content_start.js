//https://thisav.com
//https://missav.com
function MissAV_nopause() {
    site=document.domain
    console.log(site,"_nopause is running")
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
//https://ch.cuteasiangirl.net
function CuteAsainGirl_nopause(){
    site=document.domain
    console.log(site,"_nopause is running")
    document.addEventListener("scroll",(event)=>{
        console.log("stop scroll event")
        event.stopImmediatePropagation();
        event.stopPropagation()
    });
}

function run(){
    site=document.domain
    if (site.match("miss")){
        site="missav.com"
    }
    if (site.match("this")){
        site="thisav.com"
    }
    switch (site){
        case "thisav.com":
        case "missav.com":MissAV_nopause()
            break;
        case "ch.cuteasiangirl.net":CuteAsainGirl_nopause()
            break;
    }
}
run()//run_at document_start






















