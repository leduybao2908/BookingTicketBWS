//  SÂN BAY PHÚ BÀI

// thanh toán tiền vé dựa trên số người:  
    //lấy thẻ p 'số hành khách'
    var passengerCount13 = document.querySelector('.number-passenger13'); 
    var passengerCount14 = document.querySelector('.number-passenger14'); 
    var passengerCount15 = document.querySelector('.number-passenger15'); 
    var passengerCount16 = document.querySelector('.number-passenger16'); 
    
        //lấy các button '+' từ các form:
    const addButton13 = document.getElementById('add13');
    const addButton14 = document.getElementById('add14');
    const addButton15 = document.getElementById('add15');
    const addButton16 = document.getElementById('add16');
    
        //lấy các button '-' từ các form:
    const subtractButton13 = document.getElementById('subtract13');
    const subtractButton14 = document.getElementById('subtract14');
    const subtractButton15 = document.getElementById('subtract15');
    const subtractButton16 = document.getElementById('subtract16');
    
        // Lấy các phần tử p 'total' để cập nhật số tiền
    const cost13 = document.getElementById('total13'); 
    const cost14 = document.getElementById('total14');
    const cost15 = document.getElementById('total15');
    const cost16 = document.getElementById('total16');
    
    // Thiết lập sự kiện khi nhấn nút '+':
    addButton13.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount13.textContent);
        // Tăng giá trị lên 1:
        passengerCount13.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost13.textContent);
          cost13.textContent  = currentCost + 800000 + ' đ';
    });
    
    addButton14.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount14.textContent);
        // Tăng giá trị lên 1:
        passengerCount14.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost14.textContent);
          cost14.textContent  = currentCost + 1216000 + ' đ';
    });
    
    addButton15.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount15.textContent);
        // Tăng giá trị lên 1:
        passengerCount15.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost15.textContent);
          cost15.textContent  = currentCost + 3500000 + ' đ';
    });
    
    addButton16.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount16.textContent);
        // Tăng giá trị lên 1:
        passengerCount16.textContent = currentPassenger + 1;
        // Lấy số tiền hiện tại từ p 'total1'
          let currentCost = parseInt(cost16.textContent);
          cost16.textContent  = currentCost + 2000000 + ' đ';
    });
    
    // Thiết lập sự kiện khi nhấn nút '-':
    subtractButton13.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount13.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount13.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost13.textContent);
            cost13.textContent  = currentCost - 800000 + ' đ';
        }
    });
    
    subtractButton14.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount14.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount14.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost14.textContent);
            cost14.textContent  = currentCost - 1216000 + ' đ';
        }
    });
    
    subtractButton15.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount15.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount15.textContent = currentPassenger -1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost15.textContent);
            cost15.textContent  = currentCost - 3500000 + ' đ';
        }
    });
    
    subtractButton16.addEventListener('click', function() {
        // Lấy giá trị hiện tại của số hành khách:
            let currentPassenger = parseInt(passengerCount16.textContent);
        // Giảm giá trị xuống 1 nếu số hành khách > 1:
        if (currentPassenger > 1 ) {
            passengerCount16.textContent = currentPassenger - 1 ;
            // Lấy số tiền hiện tại từ p 'total1'
            let currentCost = parseInt(cost16.textContent);
            cost16.textContent  = currentCost - 2000000 + ' đ';
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
