//  SÂN BAY ĐÀ NẴNG

// thanh toán tiền vé dựa trên số người:  
    //lấy thẻ p 'số hành khách'
    var passengerCount1 = document.querySelector('.number-passenger1'); 
    var passengerCount2 = document.querySelector('.number-passenger2'); 
    var passengerCount3 = document.querySelector('.number-passenger3'); 
    var passengerCount4 = document.querySelector('.number-passenger4'); 
    
        //lấy các button '+' từ các form:
    const addButton1 = document.getElementById('add1');
    const addButton2 = document.getElementById('add2');
    const addButton3 = document.getElementById('add3');
    const addButton4 = document.getElementById('add4');
    
        //lấy các button '-' từ các form:
    const subtractButton1 = document.getElementById('subtract1');
    const subtractButton2 = document.getElementById('subtract2');
    const subtractButton3 = document.getElementById('subtract3');
    const subtractButton4 = document.getElementById('subtract4');
    
        // Lấy các phần tử p 'total' để cập nhật số tiền
    const cost1 = document.getElementById('total1'); 
    const cost2 = document.getElementById('total2');
    const cost3 = document.getElementById('total3');
    const cost4 = document.getElementById('total4');
    
    // Thiết lập sự kiện khi nhấn nút '+':
    addButton1.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount1.textContent);
        // Tăng giá trị lên 1:
        passengerCount1.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost1.textContent);
          cost1.textContent  = currentCost + 1261000 + ' đ';
    });
    
    addButton2.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount2.textContent);
        // Tăng giá trị lên 1:
        passengerCount2.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost2.textContent);
          cost2.textContent  = currentCost + 716000 + ' đ';
    });
    
    addButton3.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount3.textContent);
        // Tăng giá trị lên 1:
        passengerCount3.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost3.textContent);
          cost3.textContent  = currentCost + 1300000 + ' đ';
    });
    
    addButton4.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount4.textContent);
        // Tăng giá trị lên 1:
        passengerCount4.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost4.textContent);
          cost4.textContent  = currentCost + 2000000 + ' đ';
    });
    
    // Thiết lập sự kiện khi nhấn nút '-':
    subtractButton1.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount1.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount1.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost1.textContent);
            cost1.textContent  = currentCost - 1261000 + ' đ';
        }
    });
    
    subtractButton2.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount2.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount2.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost2.textContent);
            cost2.textContent  = currentCost - 716000 + ' đ';
        }
    });
    
    subtractButton3.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount3.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount3.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost3.textContent);
            cost3.textContent  = currentCost - 1300000 + ' đ';
        }
    });
    
    subtractButton4.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount4.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount4.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost4.textContent);
            cost4.textContent  = currentCost - 2000000 + ' đ';
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.button-places');
    
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
    
                // Lấy form tương ứng
                const formId = button.getAttribute('data-form');
                const formBooking = document.getElementById(formId);
    
                // Ẩn tất cả các form khác trước khi hiển thị form mới
                const forms = document.querySelectorAll('.formBooking');
                forms.forEach(form => {
                    if (form !== formBooking) {
                        form.style.display = 'none';
                    }
                });
    
                // Hiển thị form bằng cách thay đổi vị trí và kiểu hiển thị
                const container = button.closest('.container-places');
                const rect = container.getBoundingClientRect();
    
                formBooking.style.position = 'absolute';
                formBooking.style.top = rect.top + window.scrollY + 'px'; // Thêm window.scrollY để điều chỉnh vị trí form theo trang
                formBooking.style.left = rect.left + 'px';
                formBooking.style.width = '80%'; // Đặt chiều rộng tùy chỉnh
                formBooking.style.maxWidth = '280px'; // Đặt chiều rộng tối đa
                formBooking.style.display = 'block';
                formBooking.style.zIndex = 1000; // Đảm bảo form hiển thị phía trên
    
                // Ngăn chặn sự kiện click lan ra các phần tử cha
                formBooking.addEventListener('click', function(event) {
                    event.stopPropagation();
                });
            });
        });
    
        // Thêm sự kiện để ẩn form khi click ra ngoài form
        document.addEventListener('click', function(event) {
            const forms = document.querySelectorAll('.formBooking');
            forms.forEach(form => {
                // Kiểm tra xem click có không phải là trong form hay button-places
                if (!form.contains(event.target) && !event.target.classList.contains('button-places')) {
                    form.style.display = 'none';
                }
            });
        });
    });


    