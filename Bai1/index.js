// input: Nhập 3 số nguyên
// So sánh các giá trị
// output: Sắp xếp theo thứ tự tăng dần

document.getElementById("calculate").onclick=function(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let result;
    if(a<b && a<c)  
    {
        if(b<c)
        {
            console.log(a,b,c); 
            result=Array(a,b,c);
        }
        else
        {
            console.log(a,c,b);
            result=Array(a,c,b);
        }
    }
    else if(b<a && b<c)
    {
        if(a<c)
        {
            console.log(b,a,c);
            result=Array(b,a,c);
        }
        else
        {
            console.log(b,c,a);
            result=Array(b,c,a);
        }
    }
    else
    {
        if (a<b)
        {
            console.log(c,a,b);
            result=Array(c,a,b);
        }
        else
        {
            console.log(c,b,a);
            result=Array(c,b,a);
        }
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML ="Sắp xếp: "+ result;
}