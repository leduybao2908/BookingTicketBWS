// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Lấy kích thước của phần tử marquee
    var marquee = document.getElementById("marquee");
    var marqueeWidth = marquee.clientWidth;

    // Lấy kích thước của phần tử con bên trong
    var content = document.querySelector(".plane-with-banner");
    var contentWidth = content.offsetWidth;

    // Tính toán và thiết lập tốc độ cuộn
    var speed = 10 * (contentWidth / marqueeWidth);

    // Thiết lập tốc độ cuộn
    marquee.setAttribute("scrollamount", speed);
});

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItemms = items.length-1;

next.onclick = function() {
    if(active + 1 > lengthItemms){
        active = 0;
    }else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function() {
    if(active - 1 < 0){
        active = lengthItemms;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

// Tự động chuyển slide sau 3s
let refreshSlider = setInterval(()=> {next.click()}, 3000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    // xóa hiệu ứng active của li cũ
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    
    // active cho li mới
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// bấm nút xem thêm sẽ chuyển trang sân bay
document.getElementById("xemthembuttonTSN").addEventListener("click", function() {
    window.location.href = "sanbayTANSONNHAT.html";
});
document.getElementById("xemthembuttonNB").addEventListener("click", function() {
    window.location.href = "sanbayNOIBAI.html";
});
document.getElementById("xemthembuttonPB").addEventListener("click", function() {
    window.location.href = "sanbayPHUBAI.html";
});
document.getElementById("xemthembuttonDN").addEventListener("click", function() {
    window.location.href = "sanbayDANANG.html";
});
document.getElementById("xemthembuttonPQ").addEventListener("click", function() {
    window.location.href = "sanbayPHUQUOC.html";
});





function dynamicDropDown(listIndex) {

    document.getElementById("infants").length = 0;
    document.getElementById("children").length = 0;
  
    for (let i = 0; i < Number(listIndex) + 1; i++) {
      document.getElementById("infants").options[i] = new Option(i.toString(), i);
    }
  
    for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
      document.getElementById("children").options[i] = new Option(i.toString(), i);
    }
  }