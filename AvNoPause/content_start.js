function MissAV_nopause() {
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
//https://ch.cuteasiangirl.net
function CuteAsainGirl_nopause(){
    document.addEventListener("scroll",(event)=>{
        console.log("I am scrolle")
        event.stopImmediatePropagation();
        event.stopPropagation()
    });
}
function run(){
    MissAV_nopause()
    CuteAsainGirl_nopause()
}
run()//run_at document_start






















