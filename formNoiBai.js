//  SÂN BAY NỘI BÀI

// thanh toán tiền vé dựa trên số người:  
    //lấy thẻ p 'số hành khách'
    var passengerCount5 = document.querySelector('.number-passenger5'); 
    var passengerCount6 = document.querySelector('.number-passenger6'); 
    var passengerCount7 = document.querySelector('.number-passenger7'); 
    var passengerCount8 = document.querySelector('.number-passenger8'); 
    
        //lấy các button '+' từ các form:
    const addButton5 = document.getElementById('add5');
    const addButton6 = document.getElementById('add6');
    const addButton7 = document.getElementById('add7');
    const addButton8 = document.getElementById('add8');
    
        //lấy các button '-' từ các form:
    const subtractButton5 = document.getElementById('subtract5');
    const subtractButton6 = document.getElementById('subtract6');
    const subtractButton7 = document.getElementById('subtract7');
    const subtractButton8 = document.getElementById('subtract8');
    
        // Lấy các phần tử p 'total' để cập nhật số tiền
    const cost5 = document.getElementById('total5'); 
    const cost6 = document.getElementById('total6');
    const cost7 = document.getElementById('total7');
    const cost8 = document.getElementById('total8');
    
    // Thiết lập sự kiện khi nhấn nút '+':
    addButton5.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount5.textContent);
        // Tăng giá trị lên 1:
        passengerCount5.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost5.textContent);
          cost5.textContent  = currentCost + 3000000 + ' đ';
    });
    
    addButton6.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount6.textContent);
        // Tăng giá trị lên 1:
        passengerCount6.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost6.textContent);
          cost6.textContent  = currentCost + 1100000 + ' đ';
    });
    
    addButton7.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount7.textContent);
        // Tăng giá trị lên 1:
        passengerCount7.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost7.textContent);
          cost7.textContent  = currentCost + 1300000 + ' đ';
    });
    
    addButton8.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount8.textContent);
        // Tăng giá trị lên 1:
        passengerCount8.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost8.textContent);
          cost8.textContent  = currentCost + 3500000 + ' đ';
    });
    
    // Thiết lập sự kiện khi nhấn nút '-':
    subtractButton5.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount5.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount5.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost5.textContent);
            cost5.textContent  = currentCost - 3000000 + ' đ';
        }
    });
    
    subtractButton6.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount6.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount6.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost6.textContent);
            cost6.textContent  = currentCost - 1100000 + ' đ';
        }
    });
    
    subtractButton7.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount7.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount7.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost7.textContent);
            cost7.textContent  = currentCost - 1300000 + ' đ';
        }
    });
    
    subtractButton8.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount8.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount8.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost8.textContent);
            cost8.textContent  = currentCost - 3500000 + ' đ';
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.button-places');
    
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
    
                // Ẩn tất cả các form khác
                const forms = document.querySelectorAll('.formBooking');
                forms.forEach(form => form.style.display = 'none');
    
                // Lấy form tương ứng
                const formId = button.getAttribute('data-form');
                const formBooking= document.getElementById(formId);
    
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
            });
        });

// Thêm sự kiện để ẩn form khi click ra ngoài form
    document.addEventListener('click', function() {
        const forms = document.querySelectorAll('.formBooking');
        forms.forEach(form => form.style.display = 'none');
    });
    
    const forms = document.querySelectorAll('.formBooking');
        forms.forEach(form => {
            form.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
    });


