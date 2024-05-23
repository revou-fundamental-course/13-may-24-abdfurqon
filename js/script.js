// ini js

let isKelilingVisible = false; //Keliling is Hide
function hideOrShow(){
    if (isKelilingVisible == false) {
        isKelilingVisible = true;
        document.getElementById("luas-section").style.display = "none";
        document.getElementById("keliling-section").style.display = "block";
    } else {
        isKelilingVisible = false;
        document.getElementById("luas-section").style.display = "block";
        document.getElementById("keliling-section").style.display = "none";
    }
    
}

function validation() {
    let alasValue = document.getElementById("alas-input").value;
    let tinggiValue = document.getElementById("tinggi-input").value;
    // console.log(alasValue);
    // console.log(tinggiValue);

    if (alasValue != '' && tinggiValue != '') {
        // console.log('sukses validasi');
        let hasil = 0.5 * alasValue * tinggiValue;
        console.log(hasil)
    } else {
        alert('Data belum terisi, silakan masukkan angka')
    }
}