function songaunhien(){
    let x = prompt("Nhập giới hạn số cần đoán: ");
    let rnd = Math.round (Math.random()* x )+1;
    let guessNum
    
    do {
    guessNum = Number(prompt("Nhập số dự đoán: "))

    if (guessNum == rnd) {
        alert ("Bạn đã đoán đúng");
    } else if (guessNum < rnd ){
        alert("Số dự đoán nhỏ hơn số bí mật");
    } else {
        alert("Số dự đoán lớn hơn số bí mật");
    }
}while(rnd !=guessNum)

}