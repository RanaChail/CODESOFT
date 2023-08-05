const inputbox = document.querySelector('#inputbox');
const buttons = document.querySelectorAll('button');
const specialChars = ["%", "/", "*", "-", "+", "="];
let output = "";

//Calculate function
const calculate = (btnValue) => {
    try {
        if(btnValue === "=" && output !== ""){
            //if output has % , relace with "/100" before evaluating.
            output = eval(output.replace("%", "/100"));
        }else if(btnValue === "AC"){
            output = "";
        }else if(btnValue === "DEL"){
            output = output.toString().slice(0, -1);
        }else{
            if(output === "" && specialChars.includes(btnValue)){
                return;
            }
            output += btnValue;
        }
        
    } catch (error) {
        output = "Invalid";
    }
    inputbox.value = output;
}

//Add event listner to buttons, call calculate onclick()
buttons.forEach((button) => {
    //Button click listener calls calculate with dataset value.
    button.addEventListener('click', (e) => {
        calculate(e.target.dataset.value);
    })
})