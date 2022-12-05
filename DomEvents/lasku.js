let form = document.getElementById("calc");
let result = document.getElementById("result");

form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();
    //estää sivun automaattisen päivittymisen//

    let fData = new FormData(form);
    let num1 = Number(fData.get("num1"));
    let num2 = Number(fData.get("num2"));
    let sum = num1+num2;

    result.textContent = "Tulos on "+sum

    let arit = fData.get("arit");

    let res = arit === "sum" ? num1+num2 : num1-num2;
    //on sama kuin alla oleva//
   // if(arit === "sum"){
     // res = num1+num2;
    //}else{
      //res = num1-num2;}

    result.textContent = "Tulos on "+ res;
}