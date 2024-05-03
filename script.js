// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Lấy kích thước của phần tử marquee
    var marquee = document.getElementById("marquee");
    var marqueeWidth = marquee.clientWidth;

    // Lấy kích thước của phần tử con bên trong
    var content = document.querySelector(".plane-with-banner");
    var contentWidth = content.offsetWidth;

    // Tính toán và thiết lập tốc độ cuộn
    var speed = 30 * (contentWidth / marqueeWidth);

    // Thiết lập tốc độ cuộn
    marquee.setAttribute("scrollamount", speed);
});
