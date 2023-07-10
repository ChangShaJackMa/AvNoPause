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






















