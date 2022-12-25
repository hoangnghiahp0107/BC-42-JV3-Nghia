// Input: Nhập vào 3 số nguyên
// Dùng if để kiểm tra số chẵn or số lẻ
// Output: Xuất ra có bao nhiêu số chẵn, bao nhiêu số lẻ
document.getElementById("d").onclick=function(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let count=0 ;
    let dem=0;
    if (a%2===0)
    {
        count++;
    }
    if (b%2===0)
    {
        count++;
    }
    if (c%2===0)
    {
        count++;
        console.log("Số chẵn: "+count);
        console.log("Số lẻ: "+dem);
    }
    else
    {
        dem=3-count;
        console.log("Số chẵn: "+count);
        console.log("Số lẻ: "+dem);
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result1").innerHTML ="Số chẵn: "+ count;
    document.getElementById("result2").innerHTML ="Số lẻ: "+ dem;
}