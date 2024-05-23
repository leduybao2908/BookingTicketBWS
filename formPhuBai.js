//  SÂN BAY PHÚ BÀI

// thanh toán tiền vé dựa trên số người:  
    //lấy thẻ p 'số hành khách'
    var passengerCount9 = document.querySelector('.number-passenger9'); 
    var passengerCount10 = document.querySelector('.number-passenger10'); 
    var passengerCount11 = document.querySelector('.number-passenger11'); 
    var passengerCount12 = document.querySelector('.number-passenger12'); 
    
        //lấy các button '+' từ các form:
    const addButton9 = document.getElementById('add9');
    const addButton10 = document.getElementById('add10');
    const addButton11 = document.getElementById('add11');
    const addButton12 = document.getElementById('add12');
    
        //lấy các button '-' từ các form:
    const subtractButton9 = document.getElementById('subtract9');
    const subtractButton10 = document.getElementById('subtract10');
    const subtractButton11 = document.getElementById('subtract11');
    const subtractButton12 = document.getElementById('subtract12');
    
        // Lấy các phần tử p 'total' để cập nhật số tiền
    const cost9 = document.getElementById('total9'); 
    const cost10 = document.getElementById('total10');
    const cost11 = document.getElementById('total11');
    const cost12 = document.getElementById('total12');
    
    // Thiết lập sự kiện khi nhấn nút '+':
    addButton9.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount9.textContent);
        // Tăng giá trị lên 1:
        passengerCount9.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost9.textContent);
          cost9.textContent  = currentCost + 1350000 + ' đ';
    });
    
    addButton10.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount10.textContent);
        // Tăng giá trị lên 1:
        passengerCount10.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost10.textContent);
          cost10.textContent  = currentCost + 716000 + ' đ';
    });
    
    addButton11.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount11.textContent);
        // Tăng giá trị lên 1:
        passengerCount11.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost11.textContent);
          cost11.textContent  = currentCost + 1100000 + ' đ';
    });
    
    addButton12.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount12.textContent);
        // Tăng giá trị lên 1:
        passengerCount12.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost12.textContent);
          cost12.textContent  = currentCost + 1216000 + ' đ';
    });
    
    // Thiết lập sự kiện khi nhấn nút '-':
    subtractButton9.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount9.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount9.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost9.textContent);
            cost9.textContent  = currentCost - 1350000 + ' đ';
        }
    });
    
    subtractButton10.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount10.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount10.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost10.textContent);
            cost10.textContent  = currentCost - 716000 + ' đ';
        }
    });
    
    subtractButton11.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount11.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount11.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost11.textContent);
            cost11.textContent  = currentCost - 1100000 + ' đ';
        }
    });
    
    subtractButton12.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount12.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount12.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost12.textContent);
            cost12.textContent  = currentCost - 1216000 + ' đ';
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
                formBooking.style.maxWidth = '320px'; // Đặt chiều rộng tối đa
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


