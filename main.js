//liquid nav

let item = $(".item");
let slider = $(".slider");
 
item.on('click', function(){
    item.removeClass("current");
    $(this).addClass ("current");
})

item.on("click", function(){
    moveSlider($(this));
});


function moveSlider (target){
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

const sectionHi = document.querySelector(".main-heading");
const sectionSkills = document.querySelector(".skills");
const sectionWork = document.getElementById("work");

const SectionHiOptions = {threshold:0};


const sectionHiObserver = new IntersectionObserver(function 
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

const SectionSkillsOptions = {
    threshold: 0.35
};

const sectionSkillsObserver = new IntersectionObserver(function 
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


    
 let exception = document.getElementById("SkillsSection")

function checker(){
if(exception.classList.contains(".current") ){
    console.log("ham wa");
}}


sectionSkillsObserver.observe(sectionSkills);



const SectionWorkOptions = {threshold: 0.25 };

const sectionWorkObserver = new IntersectionObserver(function 
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

const customCursor = document. querySelector (".custom-cursor");
const bound = document. querySelectorAll(".img-wrapper");

document.addEventListener('mouseenter',function() {
    customCursor.css.display = 'block';
});
document.addEventListener('mouseleave', function() {
    customCursor.css.display = 'none';
});
document.addEventListener("mouseleave", function (e) {
    customCursor. style. cssText = "display: " + "none"
}); 
 

window.addEventListener("mousemove", function (e) {
    customCursor. style. cssText = "left: " + e.clientX
    + "px; top: " + e.clientY + "px;";
}); 