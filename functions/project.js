// Get the modal
// export var modal = document.getElementById("myModal");
export const modal = document.querySelector('.modal')
// Get the <span> element that closes the modal
export var span = document.getElementsByClassName("close")[0];
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  if (!isMobile()) {
  //place script you don't want to run on mobile here
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
document.querySelectorAll('.bento-img').forEach(img => {
  img.onclick = () =>{
    modal.style.display = "block";
    document.querySelector(".modal-content").src = img.getAttribute('src');
    document.getElementById("caption").src = img.getAttribute('alt');
  }
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}}