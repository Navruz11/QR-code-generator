let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");
let qrP = document.getElementById("qrP");
let qrImage = document.getElementById("qrImage");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
        + qrText.value;
        qrCode.classList.add("show-img");
    } else {
        setTimeout(() => {
            qrText.classList.add("error");
            qrP.classList.add("error");
        }, 1000);
    }
}
