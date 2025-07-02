const display = document.querySelector(".evaluation");
const input1 = document.querySelector(".input-1");
const operation = document.querySelector(".operation");
const input2 = document.querySelector(".input-2");
const result = document.querySelector(".result");
const clear = document.querySelector("#ac");

const numbers = document.querySelectorAll(".number-btn");
const operands = document.querySelectorAll(".operand-btn");

let calc = {
    inp1 : {value: null, entry : false},
    inp2 : {value: null, entry : false},
    op : { value : null, entry : false}
}
numbers.forEach((number)=>{
    number.addEventListener("click",e=>{
        result.innerHTML = "";
        switch (e.target.id) {
            case "0":
                if(calc.inp1.entry === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 0;
                    input1.innerHTML = calc.inp1.value;
                }
                else if(calc.inp2.entry === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 0;
                    input2.innerHTML = calc.inp2.value;
                }

                break;
            case "1":
                if(calc.inp1.entry === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 1;
                    input1.innerHTML = calc.inp1.value;
                }

                else if(calc.inp2.entry === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 1;
                    input2.innerHTML = calc.inp2.value;
                }

                break;
            case "2":
                if(calc.inp1.entry === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 2;
                    input1.innerHTML = calc.inp1.value;
                }

                else if(calc.inp2.entry === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 2;
                    input2.innerHTML = calc.inp2.value;
                }
                break;

            case "3":
                if(calc.inp1.entry === false){
                    calc.inp1.value = (calc.inp1.value * 10) + 3;
                    input1.innerHTML = calc.inp1.value;
                }

                else if(calc.inp2.entry === false){
                    calc.inp2.value = (calc.inp2.value * 10) + 3;
                    input2.innerHTML = calc.inp2.value;
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
    result.innerHTML = "";
    calc.inp1.value = null;
    calc.inp1.entry = false;
    calc.inp2.value = null;
    calc.inp2.entry = false;
    calc.op.value = null;
    calc.op.entry = false;
});

operands.forEach((operand)=>{
    operand.addEventListener("click",e=>{
        calc.inp1.entry = true;
        result.innerHTML = "";
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
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
            case "=":
                calc.inp2.entry = true;
                if(calc.inp1.entry === true && calc.op.entry === true && calc.inp2.entry === true && calc.inp2.value !== null){
                    let ans = calculate(calc.inp1.value, calc.inp2.value, calc.op.value);
                    input1.innerHTML = "";
                    input2.innerHTML = "";
                    operation.innerHTML = "";
                    result.innerHTML = ans;

                    calc.inp1.value = Math.round(ans);
                    calc.inp1.entry = false;
                    calc.inp2.value = null;
                    calc.inp2.entry = false;
                    calc.op.value = null;
                    calc.op.entry = false;
                }
                else{
                    alert("INVALID ENTRY!!!");
                }
                break;
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



