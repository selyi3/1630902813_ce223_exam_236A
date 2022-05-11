function grade(){
    var score =  document.getElementById("data").value;
    if(score == 413){
        document.getElementById("ex13-3").innerHTML = "คุณถูกรางวัลเลขท้าย 3 ตัว ได้รับรางวัลจำนวน 4,000 บาท";
    }
    else if(score == 508){
        document.getElementById("ex13-3").innerHTML = "คุณถูกรางวัลเลขท้าย 3 ตัว ได้รับรางวัลจำนวน 4,000 บาท";
    }
    else{
        document.getElementById("ex13-3").innerHTML = "คุณไม่ถูกรางวัล";
    }
}