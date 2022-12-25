// input:Chọn Bố, Mẹ, Anh Trai, Em gái
// Dùng if để kiểm tra các giá trị trong option value
// output: Xin chào ...
document.getElementById("calculate").onclick=function(){
    let result;
    switch(area.value){
        case "X":
            console.log("Xin chào Người lạ ơi!");
            result="Xin chào Người lạ ơi!";
            break;
            case "A":
                console.log("Xin chào Bố!");
                result="Xin chào Bố!";
                break;
                case "B":
                    console.log("Xin chào Mẹ!");
                    result="Xin chào Mẹ!"
                    break;
                    case "C":
                        console.log("Xin chào Anh Trai!");
                        result="Xin chào Anh Trai";
                        break;
                        case "D":
                            console.log("Xin chào Em Gái!");
                            result="Xin chào Em Gái!";
                            break;                                     
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML =result;

}