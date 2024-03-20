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
gsap.from('.paragraph',{duration:.8,y:100, opacity:0, text:{padSpace:true, value:'asfsdiufaposdihfasdhgoiasdghpo asdopghasopdig sdpogh asdhgoasd hgopsadh ghsadghsadpoghsapdnjdahgdos g sdo ghsadgh ölsadhgl h o'}})



//scroll animation

gsap.utils.toArray('.anim').forEach((anim) => {

let tl  = gsap.timeline({
    scrollTrigger:{
        trigger: anim,
        start:'top 80%',
    }
})

tl.from (anim,{
    opacity:0,
    y:100,
})
})

let tl  = gsap.timeline({
    scrollTrigger:{
        trigger: ('.progress-bar'),
        start:'top 90%',
    }
})

tl.from (('.progress-bar'),{
    width: '0%',
    duration:1.3,
    stagger:0.1,
})

var images = gsap.utils.toArray('.img-wrapper');

images.forEach((image) => {
  
  gsap.from(image, { 
    y:100,
    opacity:0,
    blur:1,
    duration:0.6,
    
    scrollTrigger: {
        trigger: image,
        fastScrollEnd:700,
        start:'top 78%',
        end:'bottom 20%',
    }
});
})

var logos = gsap.utils.toArray('.logo');

logos.forEach((logo) => {

let tl2  = gsap.timeline({
    scrollTrigger:{
        trigger: logo,
        start:'-40% top',
        end:'bottom top',
        scrub:true
    }
})
tl2.to (logo,{
    rotation:360,
    duration:1,
    ease: 'circ.inOut'
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