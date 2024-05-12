// tự động cập nhật ngày tháng 
var currentDateElements = document.getElementsByClassName('currentDate');
for (var i=0; i<currentDateElements.length; i++) {
    var currentDateElement = currentDateElements[i];
    function updateDate() {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var formatDate = day + '/0' + month + '/' + year;
        currentDateElement.textContent = formatDate; 
    }
    updateDate();
}

// thanh toán tiền vé dựa trên số người
var passengerCount = document.querySelector('.number-passenger'); //lấy thẻ p 'số hành khách'
var cost = document.getElementById('total'); // lấy thẻ p 'thanh toán'

var addButton = document.getElementById('add'); // lấy button "+"
addButton.addEventListener('click', function() {
    // Lấy giá trị hiện tại của số hành khách
    var currentPassenger = parseInt(passengerCount.textContent);
    // Tăng giá trị lên 1
    passengerCount.textContent =  currentPassenger + 1;
    // lấy giá trị giá vé hiện tại
    var currentCost = parseInt(cost.textContent);
    // Tăng giá vé +1.261.000đ
    cost.textContent = currentCost + 1261000 + ' đ';
})
var subtractButton = document.getElementById('subtract'); // lấy button "-"
subtractButton.addEventListener('click', function() {
    // Lấy giá trị hiện tại của số hành khách
    var  currentPassenger = parseInt(passengerCount.textContent);
    // Đảm bảo giá trị không bị âm
    if (currentPassenger > 1) {
        // Giảm giá trị đi 1
        passengerCount.textContent =  currentPassenger - 1;
         // lấy giá trị giá vé hiện tại
        var currentCost = parseInt(cost.textContent);
        // Giảm giá vé -1.261.000đ
        cost.textContent = currentCost - 1261000 + ' đ';
    }
});

let activeContainer = null; // Biến để theo dõi container-places đang được tương tác

document.querySelectorAll('.button-places').forEach(function(button) {
    button.addEventListener('click', function() {
        const containerPlaces = this.closest('.container-places'); // Tìm thẻ cha gần nhất có class "container-places"
        const formBooking = document.querySelector('.formBooking');
        
        // Ẩn formBooking nếu nó đang được hiển thị trên một container khác
        if (activeContainer && activeContainer !== containerPlaces) {
            formBooking.style.display = 'none';
            formBooking.style.zIndex = '-1';
        }
        
        // Hiển thị formBooking và đặt z-index cao hơn để hiển thị trên container-places
        formBooking.style.display = 'inline-block';
        formBooking.style.zIndex = '999';
        
        // Di chuyển formBooking vào container-places tương ứng
        containerPlaces.appendChild(formBooking);
        
        // Lưu container-places đang được tương tác
        activeContainer = containerPlaces;
        
        // Ngăn sự kiện lan truyền đến các phần tử cha
        event.stopPropagation();
    });
});

// Ẩn formBooking khi nhấp ra chỗ trống của trang web
document.addEventListener('click', function(event) {
    const formBooking = document.querySelector('.formBooking');
    if (!formBooking.contains(event.target) && activeContainer) {
        formBooking.style.display = 'none';
        formBooking.style.zIndex = '-1';
        activeContainer = null;
    }
});
