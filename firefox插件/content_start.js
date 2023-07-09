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






















