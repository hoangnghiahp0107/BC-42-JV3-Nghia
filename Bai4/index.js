// Input: Nhập 3 cạnh tam giác
// Dùng if để kiểm tra xem đó là tam giác gì
// Output: Tam giác...
document.getElementById("d").onclick=function(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let result;
    if (a+b>c && a+c>b && b+c>a)
    {
        if(a===b && b===c && c===a)
        {
            result="Tam giác đều";
            console.log("Tam giác đều");
        }
        else if (a*a===b*b+c*c || b*b===a*a+c*c || c*c===a*a+b*b)
        {
            result="Tam giác vuông";
            console.log("Tam giác vuông");
        }
        else if (a===b || b===c || c===a)
        {
            result="Tam giác cân";
            console.log("Tam giác cân");
        }
        else
        {
            result="Tam giác khác";
            console.log("Tam giác khác");
        }   
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = result;
}