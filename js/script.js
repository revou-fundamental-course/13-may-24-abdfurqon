// The javascript
let isKelilingVisible = false;
function hideOrShow(){
    if (isKelilingVisible == false) {
        isKelilingVisible = true;
        document.getElementById("luas-section").style.display = "none";
        document.getElementById("keliling-section").style.display = "block";
        document.querySelector("button").innerHTML = "Switch ke Luas Segitiga";
    } else {
        isKelilingVisible = false;
        document.getElementById("luas-section").style.display = "block";
        document.getElementById("keliling-section").style.display = "none";
        document.querySelector("button").innerHTML = "Switch ke Keliling Segitiga";
    }
}

function validation() {
    let alasValue = document.getElementById("alas-input").value;
    let tinggiValue = document.getElementById("tinggi-input").value;
    document.getElementById("show-alas").innerHTML = alasValue;
    document.getElementById("show-tinggi").innerHTML = tinggiValue;

    if (alasValue != '' && tinggiValue != '') {
        let hasil = 0.5 * alasValue * tinggiValue;
        document.getElementById("show-result").style.display = "block";
        document.getElementById("show-hasil").innerHTML = hasil;
    } else {
        alert('Input tidak valid, silakan masukkan angka')
    }
}

function resetValue() {
    document.getElementById("show-result").style.display = "none";
}

function hitungKeliling() {
    let sisiAValue = document.getElementById("sisi-a").value;
    let sisiBValue = document.getElementById("sisi-b").value;
    let sisiCValue = document.getElementById("sisi-c").value;
    
    document.getElementById("show-sisi-a").innerHTML = sisiAValue;
    document.getElementById("show-sisi-b").innerHTML = sisiBValue;
    document.getElementById("show-sisi-c").innerHTML = sisiCValue;

    if (sisiAValue != '' && sisiBValue != '' && sisiCValue != '') {
        let hasilKeliling = parseFloat(sisiAValue)+ parseFloat(sisiBValue) + parseFloat(sisiCValue);
        document.getElementById("show-result-keliling").style.display = "block";
        document.getElementById("show-hasil-keliling").innerHTML = hasilKeliling;
    } else {
        alert('Input tidak valid, silakan masukkan angka')
    }
}

function resetValueKeliling() {
    document.getElementById("show-result-keliling").style.display = "none";
}
