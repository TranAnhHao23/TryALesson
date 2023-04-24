function sendEmail() {
    let phone = document.getElementById("account_phone").value;
    if (phone === '') {
        alert("Số điện thoại không được để trống");
        return;
    }

    let email = 'trananhhaonuce@gmail.com'
    let subject = "Đăng ký học thử với SĐT " + phone;
    let body = "SĐT " + phone + " đã đăng ký học thử. Liên hệ sớm nhất để lấy thông tin"
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.response)
        } else {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({phone, email, subject, body} ))
}
