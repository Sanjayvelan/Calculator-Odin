const display = document.querySelector(".evaluation");
const input1 = document.querySelector(".input-1");
const operation = document.querySelector(".operation");
const input2 = document.querySelector(".input-2");
const clear = document.querySelector("#ac");

const numbers = document.querySelectorAll(".number-btn");
const operands = document.querySelectorAll(".operand-btn");

let calc = {
    inp1 : {value: null,dec : false, entry : false},
    inp2 : {value: null,dec : false, entry : false},
    op : { value : null, entry : false},
}

let ans = 0;

numbers.forEach((number)=>{
    number.addEventListener("click",e=>{
        switch (e.target.id) {
            case "0":
                if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 0;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}0`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 0;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}0`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;
            case "1":
                if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 1;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}1`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 1;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}1`;
                    input2.innerHTML = calc.inp2.value;
                }

                break;
            case "2":
                if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 2;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}2`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 2;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}2`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "3":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 3;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}3`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 3;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}3`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "4":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 4;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}4`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 4;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}4`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "5":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 5;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}5`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 5;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}5`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "6":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 6;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}6`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 6;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}6`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "7":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 7;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}7`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 7;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}7`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "8":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 8;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}8`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 8;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}8`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;
            
            case "9":
                 if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 9;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp1.entry === false && calc.inp1.dec === true){
                    calc.inp1.value = `${calc.inp1.value}9`;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 9;
                    input2.innerHTML = calc.inp2.value;
                }
                else{
                    calc.inp2.value = `${calc.inp2.value}9`;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case ".":
                if(calc.inp1.value === null){
                    calc.inp1.value = `0.`;
                    input1.innerHTML = calc.inp1.value;
                    calc.inp1.dec = true;

                }
            
                else if(calc.inp1.entry === false && calc.inp1.dec === false){
                    calc.inp1.value = `${calc.inp1.value}.`;
                    input1.innerHTML = calc.inp1.value;
                    calc.inp1.dec = true;
                }
                else if((calc.inp1.entry === false && calc.inp1.dec === true) || (calc.inp2.entry === false && calc.inp2.dec === true) ){
                    alert("INVALID ENTRY!!!");
                }
                else if(calc.inp2.value === null){
                    calc.inp2.value = `0.`;
                    input2.innerHTML = calc.inp2.value;
                    calc.inp2.dec = true;
                }
                else if(calc.inp2.entry === false && calc.inp2.dec === false){
                    calc.inp2.value = `${calc.inp2.value}.`;
                    input2.innerHTML = calc.inp2.value;
                    calc.inp2.dec = true;
                }

                break;
            default:
                break;
        }
    })
})

clear.addEventListener("click",()=>{
    input1.innerHTML = "";
    input2.innerHTML = "";
    operation.innerHTML = "";
    calc.inp1.value = null;
    calc.inp1.entry = false;
    calc.inp1.dec = false;
    calc.inp2.value = null;
    calc.inp2.entry = false;
    calc.inp2.dec = false;
    calc.op.value = null;
    calc.op.entry = false;
});

operands.forEach((operand)=>{
    operand.addEventListener("click",e=>{
        calc.inp1.entry = true;
        switch (e.target.id) {
            case "+":
                if(calc.op.entry === false){
                    calc.op.value = "+ ";
                    operation.innerHTML = calc.op.value;
                    calc.op.entry = true;

                    if(calc.inp1.entry === true){
                        input1.innerHTML = calc.inp1.value;
                    }
                }
                else if(calc.op.entry === true && calc.inp2.entry === false && calc.inp2.value !== null){
                    ans = calculate(Number(calc.inp1.value), Number(calc.inp2.value), calc.op.value);
                    calc.inp1.value = Math.round(ans * 100) / 100;
                    input1.innerHTML = calc.inp1.value;
                    if(!Number.isInteger(calc.inp1.value)){
                        calc.inp1.dec = true;
                    }
                    else{
                        calc.inp1.dec = false;
                    }
                    calc.op.value = "+ ";
                    operation.innerHTML = calc.op.value;
                    calc.inp2.value = null;
                    calc.inp2.dec = false;
                    input2.innerHTML = "";
                }
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
            case "-":
                if(calc.op.entry === false){
                    calc.op.value = "- ";
                    operation.innerHTML = calc.op.value;
                    calc.op.entry = true;


                    if(calc.inp1.entry === true){
                        input1.innerHTML = calc.inp1.value;
                    }
                }
                else if(calc.op.entry === true && calc.inp2.entry === false && calc.inp2.value !== null){
                    ans = calculate(Number(calc.inp1.value), Number(calc.inp2.value), calc.op.value);
                    calc.inp1.value = Math.round(ans * 100) / 100;
                    input1.innerHTML = calc.inp1.value;
                    if(!Number.isInteger(calc.inp1.value)){
                        calc.inp1.dec = true;
                    }
                    else{
                        calc.inp1.dec = false;
                    }
                    calc.op.value = "- ";
                    operation.innerHTML = calc.op.value;
                    calc.inp2.value = null;
                    calc.inp2.dec = false;
                    input2.innerHTML = "";
                }
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
            case "*":
                if(calc.op.entry === false){
                    calc.op.value = "* ";
                    operation.innerHTML = calc.op.value;
                    calc.op.entry = true;


                    if(calc.inp1.entry === true){
                        input1.innerHTML = calc.inp1.value;
                    }
                }
                else if(calc.op.entry === true && calc.inp2.entry === false && calc.inp2.value !== null){
                    ans = calculate(Number(calc.inp1.value), Number(calc.inp2.value), calc.op.value);
                    calc.inp1.value = Math.round(ans * 100) / 100;
                    input1.innerHTML = calc.inp1.value;
                    if(!Number.isInteger(calc.inp1.value)){
                        calc.inp1.dec = true;
                    }
                    else{
                        calc.inp1.dec = false;
                    }
                    calc.op.value = "* ";
                    operation.innerHTML = calc.op.value;
                    calc.inp2.value = null;
                    calc.inp2.dec = false;
                    input2.innerHTML = "";
                }
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
            case "/":
                if(calc.op.entry === false){
                    calc.op.value = "/ ";
                    operation.innerHTML = calc.op.value;
                    calc.op.entry = true;


                    if(calc.inp1.entry === true){
                        input1.innerHTML = calc.inp1.value;
                    }
                }
                else if(calc.op.entry === true && calc.inp2.entry === false && calc.inp2.value !== null){
                    ans = calculate(Number(calc.inp1.value), Number(calc.inp2.value), calc.op.value);
                    calc.inp1.value = Math.round(ans * 100) / 100;
                    input1.innerHTML = calc.inp1.value;
                    if(!Number.isInteger(calc.inp1.value)){
                        calc.inp1.dec = true;
                    }
                    else{
                        calc.inp1.dec = false;
                    }
                    calc.op.value = "/ ";
                    operation.innerHTML = calc.op.value;
                    calc.inp2.value = null;
                    calc.inp2.dec = false;
                    input2.innerHTML = "";
                }
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
            case "=":
                calc.inp2.entry = true;
                if(calc.inp1.entry === true && calc.op.entry === true && calc.inp2.entry === true && calc.inp2.value !== null){
                    ans = calculate(Number(calc.inp1.value), Number(calc.inp2.value), calc.op.value);

                    input2.innerHTML = "";
                    operation.innerHTML = "";

                    calc.inp1.value = Math.round(ans * 100) / 100;
                    input1.innerHTML = calc.inp1.value;

                    if(!Number.isInteger(calc.inp1.value)){
                        calc.inp1.dec = true;
                    }
                    else{
                        calc.inp1.dec = false;
                    }
                    calc.inp1.entry = false;
                    calc.inp2.value = null;
                    calc.inp2.entry = false;
                    calc.inp2.dec = false;
                    calc.op.value = null;
                    calc.op.entry = false;


                }
                else{
                    alert("INVALID ENTRY!!!");
                    calc.inp2.entry = false;
                }
                break;
            
            case "del":
                if (calc.op.entry && (calc.inp2.value === null || calc.inp2.value === "")) {
                    calc.op.value = null;
                    calc.op.entry = false;
                    operation.innerHTML = "";
                    return;
                }

                // Case: Editing input2
                if (calc.op.entry === true) {
                    if (calc.inp2.value !== null) {
                        calc.inp2.value = calc.inp2.value.toString().slice(0, -1);
                        input2.innerHTML = calc.inp2.value;
                        calc.inp2.entry = false;

                        if (calc.inp2.value.includes(".")) {
                            calc.inp2.dec = true;
                        } else {
                            calc.inp2.dec = false;
                        }

                        if (calc.inp2.value === "") {
                            calc.inp2.value = null;
                            input2.innerHTML = "";
                        }
                    }
                }
                // Case: Editing input1
                else {
                    if (calc.inp1.value !== null) {
                        calc.inp1.value = calc.inp1.value.toString().slice(0, -1);
                        input1.innerHTML = calc.inp1.value;
                        calc.inp1.entry = false;

                        if (calc.inp1.value.includes(".")) {
                            calc.inp1.dec = true;
                        } else {
                            calc.inp1.dec = false;
                        }

                        if (calc.inp1.value === "") {
                            calc.inp1.value = null;
                            input1.innerHTML = "";
                        }
                    }
                }
            default:
                break;
        }
    })
}
)


function calculate(a, b, c) {
    let str = c.trimEnd();
    switch (str) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            break;
    }
}



