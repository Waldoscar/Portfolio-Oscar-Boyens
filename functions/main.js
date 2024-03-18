//liquid nav

export let item = $(".item");
export let slider = $(".slider");
 
item.on('click', function(){
    item.removeClass("current");
    $(this).addClass ("current");
})

item.on("click", function(){
    moveSlider($(this));
});


export function moveSlider (target){
    let linkWidth = target.innerWidth();
    let linkOffset = target.offset().left;
    let navigationOffset = $(".navigation").offset().left;
    let leftPosition = linkOffset - navigationOffset
    slider.css('width', linkWidth);
    slider.css('left', leftPosition)
}

window.addEventListener("resize", function(){
    moveSlider($(".current"))
});


//automatic slider

export const sectionHi = document.querySelector(".main-heading");
export const sectionSkills = document.querySelector(".skills");
export const sectionWork = document.getElementById("work");

export const SectionHiOptions = {threshold:0};


export const sectionHiObserver = new IntersectionObserver(function 
    (entries){
        entries.forEach(entry => {
             if(entry.isIntersecting){
                console.log(entry.target);
                item.removeClass("current");
                $('.HiSection').addClass ("current");
                moveSlider($(".current"));

             }
        });
    },SectionHiOptions);

sectionHiObserver.observe(sectionHi);

export const SectionSkillsOptions = {
    threshold: 0.35
};

export const sectionSkillsObserver = new IntersectionObserver(function 
    (entries){
        entries.forEach(entry => {
             if(entry.isIntersecting){
                console.log(entry.target);
                item.removeClass("current");
                $('.SkillsSection').addClass ("current");
                moveSlider($(".current"));

             }
        });
    },SectionSkillsOptions);


    
 export let exception = document.getElementById("SkillsSection")

export function checker(){
if(exception.classList.contains(".current") ){
    console.log("ham wa");
}}


sectionSkillsObserver.observe(sectionSkills);



export const SectionWorkOptions = {threshold: 0.25 };

export const sectionWorkObserver = new IntersectionObserver(function 
    (entries){
        entries.forEach(entry => {
             if(entry.isIntersecting){
                console.log(entry.target);
                item.removeClass("current");
                $('.WorkSection').addClass ("current");
                moveSlider($(".current"));

             }
        });
    },SectionWorkOptions);

sectionWorkObserver.observe(sectionWork);



//mehr Button

export let mehrButton = document.querySelector(".mehr-weniger-btn");
export let expand = document.querySelector('.expand');
export let more = document.querySelector('.more');

mehrButton.addEventListener ('click',()=>{
    expand.classList.toggle ('expanded');
    more.classList.toggle('margin');
    if (mehrButton.innerHTML === "mehr"){
    mehrButton.innerHTML="weniger";
}   else {mehrButton.innerHTML="mehr";
}})

//load animation
gsap.from('.navigation',{duration:.8,x:-200});
gsap.from('.button',{duration:.8,x:200})
gsap.from('.portrait',{y:100,opacity:0.4})
gsap.from('.main-heading',{text:'bn hc s iiHica,Or',duration:1})
gsap.from('.paragraph',{duration:2,text:'lruitiaoKeiS,uHiit  ictb,efn2seii,mvsfreercuürbnshr   hJirrce  .  dae Bdhiecurlkehli   e0lmänc sd suh bniinuDe s hn t zt iebet meb nsg eiet duestwacsie i.lgnken scnahrii nhhte   lnfwganmecI,dwcenn',duration:1})

//scroll animation

gsap.utils.toArray('.anim').forEach((anim) => {

let tl  = gsap.timeline({
    scrollTrigger:{
        trigger: anim,
        start:'top 75%',
        toggleActions:'play none none reverse',
    }
})

tl.from (anim,{
    opacity:0,
    y:100,
})
})



//custom cursor


// const bound = $(".img-wrapper");
// const customCursor = $(".custom-cursor .on-hover");

// const customCursor = document.querySelector('.custom-cursor .on-hover');

// document.addEventListener('mouseenter',() => {
//     customCursor.css.display = 'block';
// });
// document.addEventListener('mouseleave',() => {
//     customCursor.css.display = 'none';
// });

// document.addEventListener('mousemove',TrackCursor);

// function TrackCursor(evt){
//     customCursor.style.transform = `translate(${evt.clientX}px,${evt.clientY}px)`;
// }

// const customCursor = document. querySelector (".custom-cursor");
// const bound = document. querySelectorAll(".img-wrapper");

// document.addEventListener('mouseenter',function() {
//     customCursor.css.display = 'block';
// });
// document.addEventListener('mouseleave', function() {
//     customCursor.css.display = 'none';
// });
// document.addEventListener("mouseleave", function (e) {
//     customCursor. style. cssText = "display: " + "none"
// }); 
 

// window.addEventListener("mousemove", function (e) {
//     customCursor. style. cssText = "left: " + e.clientX
//     + "px; top: " + e.clientY + "px;";
// }); 