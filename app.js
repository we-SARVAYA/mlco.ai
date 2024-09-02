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
	}, 500);

    
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
	}, 500);
});

// let copyText3 = document.querySelector(".copy-text-3");
// copyText3.querySelector("button").addEventListener("click", function () {
// 	let input = copyText3.querySelector("input.text");
// 	input.select();
// 	document.execCommand("copy");
// 	copyText3.classList.add("active");
// 	window.getSelection().removeAllRanges();
// 	setTimeout(function () {
// 		copyText3.classList.remove("active");
// 	}, 500);
// });



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

// ------------------------------------------------------------------------


document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
    });

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// ---------------------------------------

document.getElementById('openModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'flex';
    });

document.getElementById('closeModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'none';
});

// ---------------------------------------

document.getElementById('openModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'flex';
    });

document.getElementById('closeModal-2').addEventListener('click', function() {
    document.getElementById('modal-2').style.display = 'none';
});

// ---------------------------------------

// document.getElementById('openModal-3').addEventListener('click', function() {
//     document.getElementById('modal-3').style.display = 'flex';
//     });

// document.getElementById('closeModal-3').addEventListener('click', function() {
//     document.getElementById('modal-3').style.display = 'none';
// });

// ------------------------------------------------------------------------


var exploreMore = document.querySelector('.course-enroll-button');
var longDc = document.querySelector('.long-dc');
var shortDc = document.querySelector('.short-dc');
var webinarImg = document.querySelector('.webinar-img');
var webinarBackBtn = document.querySelector('.webinar-back-btn');

exploreMore.addEventListener('click',()=>{
    longDc.style.display='block';
    shortDc.style.display='none';
    webinarImg.style.display='none';
})

webinarBackBtn.addEventListener('click',()=>{
    longDc.style.display='none';
    shortDc.style.display='block';
    webinarImg.style.display='block';
})

// ---------------------------------------

var exploreMore2 = document.querySelector('.course-enroll-button-2');
var longDc2 = document.querySelector('.long-dc-2');
var shortDc2 = document.querySelector('.short-dc-2');
var webinarImg2 = document.querySelector('.webinar-img-2');
var webinarBackBtn2 = document.querySelector('.webinar-back-btn-2');

exploreMore2.addEventListener('click',()=>{
    longDc2.style.display='block';
    shortDc2.style.display='none';
    webinarImg2.style.display='none';
})

webinarBackBtn2.addEventListener('click',()=>{
    longDc2.style.display='none';
    shortDc2.style.display='block';
    webinarImg2.style.display='block';
})

var courseBox = document.querySelector('.course-box');
var shortDc = document.querySelector('.short-dc');
var longDc = document.querySelector('.long-dc');

courseBox.addEventListener('click',()=>{
    
})

// ---------------------------------------

// var exploreMore3 = document.querySelector('.course-enroll-button-3');
// var longDc3 = document.querySelector('.long-dc-3');
// var shortDc3 = document.querySelector('.short-dc-3');
// var webinarImg3 = document.querySelector('.webinar-img-3');
// var webinarBackBtn3 = document.querySelector('.webinar-back-btn-3');

// exploreMore3.addEventListener('click',()=>{
//     longDc3.style.display='block';
//     shortDc3.style.display='none';
//     webinarImg3.style.display='none';
// })

// webinarBackBtn3.addEventListener('click',()=>{
//     longDc3.style.display='none';
//     shortDc3.style.display='block';
//     webinarImg3.style.display='block';
// })

// ------------------------------------------------------------------------
