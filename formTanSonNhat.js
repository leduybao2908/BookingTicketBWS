//  SÂN BAY PHÚ BÀI

// thanh toán tiền vé dựa trên số người:  
    //lấy thẻ p 'số hành khách'
    var passengerCount17 = document.querySelector('.number-passenger17'); 
    var passengerCount18 = document.querySelector('.number-passenger18'); 
    var passengerCount19 = document.querySelector('.number-passenger19'); 
    var passengerCount20 = document.querySelector('.number-passenger20'); 
    
        //lấy các button '+' từ các form:
    const addButton17 = document.getElementById('add17');
    const addButton18 = document.getElementById('add18');
    const addButton19 = document.getElementById('add19');
    const addButton20 = document.getElementById('add20');
    
        //lấy các button '-' từ các form:
    const subtractButton17 = document.getElementById('subtract17');
    const subtractButton18 = document.getElementById('subtract18');
    const subtractButton19 = document.getElementById('subtract19');
    const subtractButton20 = document.getElementById('subtract20');
    
        // Lấy các phần tử p 'total' để cập nhật số tiền
    const cost17 = document.getElementById('total17'); 
    const cost18 = document.getElementById('total18');
    const cost19 = document.getElementById('total19');
    const cost20 = document.getElementById('total20');
    
    // Thiết lập sự kiện khi nhấn nút '+':
    addButton17.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount17.textContent);
        // Tăng giá trị lên 1:
        passengerCount17.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p
          let currentCost = parseInt(cost17.textContent);
          cost17.textContent  = currentCost + 1216000 + ' đ';
    });
    
    addButton18.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount18.textContent);
        // Tăng giá trị lên 1:
        passengerCount18.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p
          let currentCost = parseInt(cost18.textContent);
          cost18.textContent  = currentCost + 1350000 + ' đ';
    });
    
    addButton19.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount19.textContent);
        // Tăng giá trị lên 1:
        passengerCount19.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost19.textContent);
          cost19.textContent  = currentCost + 3000000 + ' đ';
    });
    
    addButton20.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount20.textContent);
        // Tăng giá trị lên 1:
        passengerCount20.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost20.textContent);
          cost20.textContent  = currentCost + 800000 + ' đ';
    });
    
    // Thiết lập sự kiện khi nhấn nút '-':
    subtractButton17.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount17.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount17.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost17.textContent);
            cost17.textContent  = currentCost - 1216000 + ' đ';
        }
    });
    
    subtractButton18.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount18.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount18.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost18.textContent);
            cost18.textContent  = currentCost - 1350000 + ' đ';
        }
    });
    
    subtractButton19.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount19.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount19.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost19.textContent);
            cost19.textContent  = currentCost - 3000000 + ' đ';
        }
    });
    
    subtractButton20.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount20.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount20.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost20.textContent);
            cost20.textContent  = currentCost - 800000 + ' đ';
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
