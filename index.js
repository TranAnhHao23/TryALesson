function sendEmail() {
    let name = document.getElementById("account_name").value;
    let phone = document.getElementById("account_phone").value;
    let regisBranch = document.getElementById("nganh_dang_ky").value;
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

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
