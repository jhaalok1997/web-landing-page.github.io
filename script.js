
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursur-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})


gsap.to("#nav",{
    /*backgroundColor:"#000",*/
    duration:0.5,
    height:"70px",
    scrolltrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
         end:"top -11%",
         scrub:3
    
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})

gasp.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})