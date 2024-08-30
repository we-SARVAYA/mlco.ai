var sideNav = document.querySelector('.side-nav');
var menu = document.querySelector('.bx-menu');
var close = document.querySelector('.bx-x')


menu.addEventListener('click',()=>{
    sideNav.style.display='block';
})
close.addEventListener('click',()=>{
    sideNav.style.display='none';
})


let faqs= document.querySelectorAll(".faq");

faqs.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active");
    });
});




let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});

let copyText2 = document.querySelector(".copy-text-2");
copyText2.querySelector("button").addEventListener("click", function () {
	let input = copyText2.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText2.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText2.classList.remove("active");
	}, 2500);
});



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#FFBD59",
];
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

});
function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
 
    circle.style.scale = (circles.length - index) / circles.length;
 
    circle.x = x;
    circle.y = y;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}
animateCircles();



// --------------------------


window.onload = function() {
  const upScrollContent = document.querySelector('.up-scroll .auto-scroll-content');
  const upScrollItems = document.querySelectorAll('.up-scroll .auto-scroll-item');
  
  const downScrollContent = document.querySelector('.down-scroll .auto-scroll-content');
  const downScrollItems = document.querySelectorAll('.down-scroll .auto-scroll-item');
  
  let itemHeightUp = upScrollItems[0].offsetHeight;
  let totalHeightUp = itemHeightUp * upScrollItems.length / 2;

  let itemHeightDown = downScrollItems[0].offsetHeight;
  let totalHeightDown = itemHeightDown * downScrollItems.length / 2;

  // Initialize positions for seamless scrolling
  upScrollContent.style.bottom = `-${totalHeightUp}px`;
  downScrollContent.style.top = `-${totalHeightDown}px`;

  function startUpScroll() {
      let currentBottom = parseInt(upScrollContent.style.bottom);
      if (Math.abs(currentBottom) >= totalHeightUp) {
          upScrollContent.style.bottom = '0px'; // Reset to bottom
      } else {
          upScrollContent.style.bottom = `${currentBottom - 1}px`; // Move upwards
      }
  }

  function startDownScroll() {
      let currentTop = parseInt(downScrollContent.style.top);
      if (Math.abs(currentTop) >= totalHeightDown) {
          downScrollContent.style.top = '0px'; // Reset to top
      } else {
          downScrollContent.style.top = `${currentTop - 1}px`; // Move upwards
      }
  }

  setInterval(startUpScroll, 20); // Adjust the speed by changing the interval
  setInterval(startDownScroll, 20); // Adjust the speed by changing the interval
};


document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
    });

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('openModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'flex';
    });

document.getElementById('closeModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'none';
});


