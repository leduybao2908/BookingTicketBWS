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