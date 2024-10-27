let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let qrLink = document.getElementById('qrLink');
let closeBtn = document.getElementById('closeBtn'); 

function generateQR() {
    if (qrText.value.length > 0) {
        let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        
        qrImage.src = qrUrl;
        qrLink.href = qrUrl;

        imgBox.classList.add('show-img');

        
        closeBtn.style.display = 'block';
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

function goHome() {
    window.location.href = "index.html"; 
}
