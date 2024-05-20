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

document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function() {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active = active + 1;
        }
        reloadSlider();
    }

    prev.onclick = function() {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active = active - 1;
        }
        reloadSlider();
    }

    // Tự động chuyển slide sau 3s
    let refreshSlider = setInterval(() => {
        let formVisible = document.querySelector('.formBooking[style*="display: block"]');
        if (!formVisible) {
            next.click();
        }
    }, 3000);

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        // xóa hiệu ứng active của li cũ
        let lastActiveDot = document.querySelector('.slider .dots li.active');
        if (lastActiveDot) lastActiveDot.classList.remove('active');

        // active cho li mới
        dots[active].classList.add('active');
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', function() {
            active = key;
            reloadSlider();
        });
    });
});


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

  let activeIndex = 0;
  let limit = 0;
  let disabled = false;
  let $stage;
  let $controls;
  let canvas = false;
  
  const SPIN_FORWARD_CLASS = "js-spin-fwd";
  const SPIN_BACKWARD_CLASS = "js-spin-bwd";
  const DISABLE_TRANSITIONS_CLASS = "js-transitions-disabled";
  const SPIN_DUR = 1000;
  
  const appendControls = () => {
    for (let i = 0; i < limit; i++) {
      $(".carousel__control").append(`<a href="#" data-index="${i}"></a>`);
    }
    let height = $(".carousel__control").children().last().outerHeight();
  
    $(".carousel__control").css("height", 30 + limit * height);
    $controls = $(".carousel__control").children();
    $controls.eq(activeIndex).addClass("active");
  };
  
  const setIndexes = () => {
    $(".spinner")
      .children()
      .each((i, el) => {
        $(el).attr("data-index", i);
        limit++;
      });
  };
  
  const duplicateSpinner = () => {
    const $el = $(".spinner").parent();
    const html = $(".spinner").parent().html();
    $el.append(html);
    $(".spinner").last().addClass("spinner--right");
    $(".spinner--right").removeClass("spinner--left");
  };
  
  const paintFaces = () => {
    $(".spinner__face").each((i, el) => {
      const $el = $(el);
      let color = $(el).attr("data-bg");
      $el
        .children()
        .css("backgroundImage", `url(${getBase64PixelByColor(color)})`);
    });
  };
  
  const getBase64PixelByColor = (hex) => {
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.height = 1;
      canvas.width = 1;
    }
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = hex;
      ctx.fillRect(0, 0, 1, 1);
      return canvas.toDataURL();
    }
    return false;
  };
  
  const prepareDom = () => {
    setIndexes();
    paintFaces();
    duplicateSpinner();
    appendControls();
  };
  
  const spin = (inc = 1) => {
    if (disabled) return;
    if (!inc) return;
    activeIndex += inc;
    disabled = true;
  
    if (activeIndex >= limit) {
      activeIndex = 0;
    }
  
    if (activeIndex < 0) {
      activeIndex = limit - 1;
    }
  
    const $activeEls = $(".spinner__face.js-active");
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
    $nextEls.addClass("js-next");
  
    if (inc > 0) {
      $stage.addClass(SPIN_FORWARD_CLASS);
    } else {
      $stage.addClass(SPIN_BACKWARD_CLASS);
    }
  
    $controls.removeClass("active");
    $controls.eq(activeIndex).addClass("active");
  
    setTimeout(
      () => {
        spinCallback(inc);
      },
      SPIN_DUR,
      inc
    );
  };
  
  const spinCallback = (inc) => {
    $(".js-active").removeClass("js-active");
    $(".js-next").removeClass("js-next").addClass("js-active");
    $stage
      .addClass(DISABLE_TRANSITIONS_CLASS)
      .removeClass(SPIN_FORWARD_CLASS)
      .removeClass(SPIN_BACKWARD_CLASS);
  
    $(".js-active").each((i, el) => {
      const $el = $(el);
      $el.prependTo($el.parent());
    });
    setTimeout(() => {
      $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
      disabled = false;
    }, 100);
  };
  
  const attachListeners = () => {
    document.onkeyup = (e) => {
      switch (e.keyCode) {
        case 38:
          spin(-1);
          break;
        case 40:
          spin(1);
          break;
      }
    };
  
    $controls.on("click", (e) => {
      e.preventDefault();
      if (disabled) return;
      const $el = $(e.target);
      const toIndex = parseInt($el.attr("data-index"), 10);
      spin(toIndex - activeIndex);
    });
  };
  
  const assignEls = () => {
    $stage = $(".carousel__stage");
  };
  
  const init = () => {
    assignEls();
    prepareDom();
    attachListeners();
  };
  
  $(() => {
    init();
  });
  

  