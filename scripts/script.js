function cursor(){
    let mouseCursor = document.querySelector(".cursor");
    let btn = document.querySelectorAll("button");

    window.addEventListener("mousemove", cursor);

    function cursor(cursorPointer){
        gsap.to(mouseCursor, 0.4, {
            x: cursorPointer.clientX,
            y: cursorPointer.clientY,
        });
    }

    btn.forEach(function(link) {
        link.addEventListener("mouseover", function(){
            mouseCursor.classList.add("scale-cursor");
            gsap.to(mouseCursor, 0.4, {
            scale: 4
            });
        });

        link.addEventListener("mouseleave", function(){
            mouseCursor.classList.remove("scale-cursor");
            gsap.to(mouseCursor, 0.4, {
            scale: 1
            });
        });
    });
}
cursor()



function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();




function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            var time = gsap.timeline()
            time.to("#loader",{
                height:0,
                duration:2,
                ease:Expo.easeInOut,
                opacity:0
            })

            time.from('#page1',{
                y:200,
                duration:1.5,
                opacity:0,
                scale: .7, 
            })
        }
    })
}
loader();




function initialize() {
    const canvas = document.querySelector("#page1 canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `https://zelt.app/assets/img/home/hero/sequence/1.webp
        https://zelt.app/assets/img/home/hero/sequence/2.webp
        https://zelt.app/assets/img/home/hero/sequence/3.webp
        https://zelt.app/assets/img/home/hero/sequence/4.webp
        https://zelt.app/assets/img/home/hero/sequence/5.webp
        https://zelt.app/assets/img/home/hero/sequence/6.webp
        https://zelt.app/assets/img/home/hero/sequence/7.webp
        https://zelt.app/assets/img/home/hero/sequence/8.webp
        https://zelt.app/assets/img/home/hero/sequence/9.webp
        https://zelt.app/assets/img/home/hero/sequence/10.webp
        https://zelt.app/assets/img/home/hero/sequence/11.webp
        https://zelt.app/assets/img/home/hero/sequence/12.webp
        https://zelt.app/assets/img/home/hero/sequence/13.webp
        https://zelt.app/assets/img/home/hero/sequence/14.webp
        https://zelt.app/assets/img/home/hero/sequence/15.webp
        https://zelt.app/assets/img/home/hero/sequence/16.webp
        https://zelt.app/assets/img/home/hero/sequence/17.webp
        https://zelt.app/assets/img/home/hero/sequence/18.webp
        https://zelt.app/assets/img/home/hero/sequence/19.webp
        https://zelt.app/assets/img/home/hero/sequence/20.webp
        https://zelt.app/assets/img/home/hero/sequence/21.webp
        https://zelt.app/assets/img/home/hero/sequence/22.webp
        https://zelt.app/assets/img/home/hero/sequence/23.webp
        https://zelt.app/assets/img/home/hero/sequence/24.webp
        https://zelt.app/assets/img/home/hero/sequence/25.webp
        https://zelt.app/assets/img/home/hero/sequence/26.webp
        https://zelt.app/assets/img/home/hero/sequence/27.webp
        https://zelt.app/assets/img/home/hero/sequence/28.webp
        https://zelt.app/assets/img/home/hero/sequence/29.webp
        https://zelt.app/assets/img/home/hero/sequence/30.webp
        https://zelt.app/assets/img/home/hero/sequence/31.webp
        https://zelt.app/assets/img/home/hero/sequence/32.webp
        https://zelt.app/assets/img/home/hero/sequence/33.webp
        https://zelt.app/assets/img/home/hero/sequence/34.webp
        https://zelt.app/assets/img/home/hero/sequence/35.webp
        https://zelt.app/assets/img/home/hero/sequence/36.webp
        https://zelt.app/assets/img/home/hero/sequence/37.webp
        https://zelt.app/assets/img/home/hero/sequence/38.webp
        https://zelt.app/assets/img/home/hero/sequence/39.webp
        https://zelt.app/assets/img/home/hero/sequence/40.webp
        https://zelt.app/assets/img/home/hero/sequence/41.webp
        https://zelt.app/assets/img/home/hero/sequence/42.webp
        https://zelt.app/assets/img/home/hero/sequence/43.webp
        https://zelt.app/assets/img/home/hero/sequence/44.webp
        https://zelt.app/assets/img/home/hero/sequence/45.webp
        https://zelt.app/assets/img/home/hero/sequence/46.webp
        https://zelt.app/assets/img/home/hero/sequence/47.webp
        https://zelt.app/assets/img/home/hero/sequence/48.webp
        https://zelt.app/assets/img/home/hero/sequence/49.webp
        https://zelt.app/assets/img/home/hero/sequence/50.webp
        https://zelt.app/assets/img/home/hero/sequence/51.webp
        https://zelt.app/assets/img/home/hero/sequence/52.webp
        https://zelt.app/assets/img/home/hero/sequence/53.webp
        https://zelt.app/assets/img/home/hero/sequence/54.webp
        https://zelt.app/assets/img/home/hero/sequence/55.webp
        https://zelt.app/assets/img/home/hero/sequence/56.webp
        https://zelt.app/assets/img/home/hero/sequence/57.webp
        https://zelt.app/assets/img/home/hero/sequence/58.webp
        https://zelt.app/assets/img/home/hero/sequence/59.webp
        https://zelt.app/assets/img/home/hero/sequence/60.webp
        https://zelt.app/assets/img/home/hero/sequence/61.webp
        https://zelt.app/assets/img/home/hero/sequence/62.webp
        https://zelt.app/assets/img/home/hero/sequence/63.webp
        https://zelt.app/assets/img/home/hero/sequence/64.webp
        https://zelt.app/assets/img/home/hero/sequence/65.webp
        https://zelt.app/assets/img/home/hero/sequence/66.webp
        https://zelt.app/assets/img/home/hero/sequence/67.webp
        https://zelt.app/assets/img/home/hero/sequence/68.webp
        https://zelt.app/assets/img/home/hero/sequence/69.webp
        https://zelt.app/assets/img/home/hero/sequence/70.webp
        https://zelt.app/assets/img/home/hero/sequence/71.webp
        https://zelt.app/assets/img/home/hero/sequence/72.webp
        https://zelt.app/assets/img/home/hero/sequence/73.webp
        https://zelt.app/assets/img/home/hero/sequence/74.webp
        https://zelt.app/assets/img/home/hero/sequence/75.webp
        https://zelt.app/assets/img/home/hero/sequence/76.webp
        https://zelt.app/assets/img/home/hero/sequence/77.webp
        https://zelt.app/assets/img/home/hero/sequence/78.webp
        https://zelt.app/assets/img/home/hero/sequence/79.webp
        https://zelt.app/assets/img/home/hero/sequence/80.webp
        https://zelt.app/assets/img/home/hero/sequence/81.webp
        https://zelt.app/assets/img/home/hero/sequence/82.webp
        https://zelt.app/assets/img/home/hero/sequence/83.webp
        https://zelt.app/assets/img/home/hero/sequence/84.webp
        https://zelt.app/assets/img/home/hero/sequence/85.webp
        https://zelt.app/assets/img/home/hero/sequence/86.webp
        https://zelt.app/assets/img/home/hero/sequence/87.webp
        https://zelt.app/assets/img/home/hero/sequence/88.webp
        https://zelt.app/assets/img/home/hero/sequence/89.webp
        https://zelt.app/assets/img/home/hero/sequence/90.webp
        https://zelt.app/assets/img/home/hero/sequence/91.webp
        https://zelt.app/assets/img/home/hero/sequence/92.webp
        https://zelt.app/assets/img/home/hero/sequence/93.webp
        https://zelt.app/assets/img/home/hero/sequence/94.webp
        https://zelt.app/assets/img/home/hero/sequence/95.webp
        https://zelt.app/assets/img/home/hero/sequence/96.webp
        https://zelt.app/assets/img/home/hero/sequence/97.webp
        https://zelt.app/assets/img/home/hero/sequence/98.webp
        https://zelt.app/assets/img/home/hero/sequence/99.webp
        https://zelt.app/assets/img/home/hero/sequence/100.webp
        https://zelt.app/assets/img/home/hero/sequence/101.webp
        https://zelt.app/assets/img/home/hero/sequence/102.webp
        https://zelt.app/assets/img/home/hero/sequence/103.webp
        https://zelt.app/assets/img/home/hero/sequence/104.webp
        https://zelt.app/assets/img/home/hero/sequence/105.webp
        https://zelt.app/assets/img/home/hero/sequence/106.webp
        https://zelt.app/assets/img/home/hero/sequence/107.webp
        https://zelt.app/assets/img/home/hero/sequence/108.webp
        https://zelt.app/assets/img/home/hero/sequence/109.webp
        https://zelt.app/assets/img/home/hero/sequence/110.webp
        https://zelt.app/assets/img/home/hero/sequence/111.webp
        https://zelt.app/assets/img/home/hero/sequence/112.webp
        https://zelt.app/assets/img/home/hero/sequence/113.webp
        https://zelt.app/assets/img/home/hero/sequence/114.webp
        https://zelt.app/assets/img/home/hero/sequence/115.webp
        https://zelt.app/assets/img/home/hero/sequence/116.webp
        https://zelt.app/assets/img/home/hero/sequence/117.webp
        https://zelt.app/assets/img/home/hero/sequence/118.webp`;
        return data.split("\n")[index];
    }

    const frameCount = 118;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "#page1",
            start: "bottom 90%",
            scroller:"#main",
            scrub: 0.5,
            // markers:true
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    // gsap.to("#page1 canvas", {
    //     scale: 0.8,
    //     scrollTrigger: {
    //         // scroller:"#main",
    //         trigger: "#page1",
    //         start: "bottom 20%",
    //         scrub: 0.8,
    //         markers:true,
    //         // pin:true
    //     }
    // })

    ScrollTrigger.create({
        scroller:"#main",
        pin: true,
        trigger: "#page1",
        start: "bottom 100%",
        end:"bottom top",
        // markers:true
    })


}
initialize();


// =============================================================================================
// =============================================================================================

gsap.to('.text-box-1', {
    y:-600,
    opacity:0,
    scrollTrigger:{
        scroller: `#main`,
        trigger:'.text-box-1',
        start:'top 25%',
        scrub:1,
        // markers:true,
    }
})
gsap.to('.text-box-2', {
    y:-1100,
    opacity:1,
    scrollTrigger:{
        scroller: `#main`,
        trigger:'.text-box-2',
        start:'bottom 93%',
        end:'bottom 20%',  
        scrub:1,
        // markers:true,
    }
})




function p4(){
    
    const tabs = document.querySelectorAll('[data-target]'),
    tabContent= document.querySelectorAll('[data-content]');

    tabs.forEach(function(tab){
        tab.addEventListener("click", function(){
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(function(tabContents){
                    tabContents.classList.remove('userBox_active')
                })
                target.classList.add('userBox_active')
                target.style.scale = .5 
                setTimeout(() => {
                    target.style.scale = 1
                }, 100);


                tabs.forEach(function(tab){
                    tab.classList.remove('userBox_active')
                })
    
                tab.classList.add('userBox_active')
                tab.style.scale = .5
                setTimeout(() => {
                    tab.style.scale = 1
                }, 100);
            })
    })


}
p4()



function split(){
    function h1split1() {
        var clutter;
        document.querySelectorAll(".split1").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split("").forEach(function(char){
                clutter += `<span>${char}</span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split1();
    function h1split2(){
        var clutter;
        document.querySelectorAll(".split2").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split(" ").forEach(function(char){
                clutter += `<span> ${char} </span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split2();
}
split();



function page2(){
    gsap.from("#page2 h1 span , #page2 h5 span", {
        scrollTrigger:{
            trigger:"#page2 h1 span , #page2 h5 span",
            start:"top 90%",
            end:'top 40%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        duration:3,
        opacity: 0,
        stagger:0.2
    })
}
page2()

function page3(){
    gsap.from("#page3 p span", {
        scrollTrigger:{
            trigger:"#page3 p span",
            start:"top bottom",
            end:'top 60%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        duration:3,
        opacity: 0,
        stagger:0.2
    })

    gsap.from("#page3 .moving-item img", {
        scrollTrigger:{
            trigger:"#page3 .moving-item img",
            start:"top bottom",
            end:'top 60%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        y:50,
        duration:2,
        opacity: 0,
        stagger:0.5
    })
}
page3()

function page4(){
    gsap.from("#page4 .p4-heading h1 span", {
        scrollTrigger:{
            trigger:"#page4 .p4-heading h1 span",
            start:"top 90%",
            end:'top 50%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        duration:3,
        opacity: 0,
        stagger:0.2
    })
    gsap.from("#page4 .p4-box", {
        scrollTrigger:{
            trigger:"#page4 .p4-box",
            start:"top 95%",
            end:'top 80%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        y:100,
        duration:3,
        opacity: 0,
    })
}
page4()

function page5(){
    gsap.from("#page5 .p5-heading h1 span", {
        scrollTrigger:{
            trigger:"#page5 .p5-heading h1 span",
            start:"top 85%",
            end:'top 45%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        duration:3,
        opacity: 0,
        stagger:0.2
    })

    
}
page5()

function page6(){
    gsap.from("#page6 .p678-left", {
        scrollTrigger:{
            trigger:"#page6 .p678-left",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:-600,
        duration:2
    })
    gsap.from("#page6 .p678-right", {
        scrollTrigger:{
            trigger:"#page6 .p678-right",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:600,
        duration:2
    })
}
page6()

function page7(){
    gsap.from("#page7 .p678-left", {
        scrollTrigger:{
            trigger:"#page7 .p678-left",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:-600,
        duration:2
    })
    gsap.from("#page7 .p678-right", {
        scrollTrigger:{
            trigger:"#page7 .p678-right",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:600,
        duration:2
    })
}
page7()

function page8(){
    gsap.from("#page8 .p678-left", {
        scrollTrigger:{
            trigger:"#page8 .p678-left",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:-600,
        duration:2
    })
    gsap.from("#page8 .p678-right", {
        scrollTrigger:{
            trigger:"#page8 .p678-right",
            start:"top 60%",
            end:'top 20%',
            scroller : "#main",
            scrub:0.5,
            // markers:true
        },
        x:600,
        duration:2
    })
}
page8()
