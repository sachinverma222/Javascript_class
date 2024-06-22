// let result = document.querySelector("#result").innerText;
// console.log(result);

// let addtionSign = document.getElementsByTagName('button')[1].value;
// console.log(addtionSign);

let result = document.querySelector("#result").innerText;
// console.log(result);
function appendCharacter(a){
    document.querySelector(".output").style.backgroundColor = "black";
    document.querySelector(".output").style.color = "#0df";
    result = result + a;
    // console.log(result)
    document.querySelector("#result").innerText = result;
}

function calculateResult(){
    try{
    document.querySelector("#result").innerText = eval(result);
    result = eval(result);
    }
    catch(err){
        // result = err;
        document.querySelector("#result").innerText = "syntax error";
        result = '';
    }
}

function clearDisplay(){
    document.querySelector("#result").innerText = '';
    result = '';
    document.querySelector(".output").style.backgroundColor = " rgba(255, 0, 0, 0.548)";
    document.querySelector(".output").style.color = "white";
    // document.querySelector(".cal-content").style.display = "none"
}