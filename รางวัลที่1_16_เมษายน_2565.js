function grade(){
    var score =  document.getElementById("data").value;
    if(score == 395919){
        document.getElementById("ex13-3").innerHTML = "คุณถูกรางวัลที่ 1 ได้รับเงินจำนวน 6,000,000";
    }
    else{
        document.getElementById("ex13-3").innerHTML = "คุณไม่ถูกรางวัล";
    }
}