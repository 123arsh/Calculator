const inputValue = document.getElementById('screen')

const appendresult = (value) =>{
    inputValue.value += value
}
        
const clearfun = () =>{
    inputValue.value = ''
}

const backspace = () =>{
    const currentvalue = document.getElementById('screen').value
    document.getElementById('screen').value = currentvalue.slice(0, -1)
}

if(key === 'Backspace'){
    backspace()
}

const getOutput = () => {
    const result = document.getElementById('screen').value;
    const getresult = eval(result);
    document.getElementById('screen').value = getresult;
} 
if(key === 'Enter'){
    getOutput()
}


document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('screen');

    // Mapping of keypad keycodes to their corresponding numbers
    const keypadMapping = {
        '96': '0',
        '97': '1',
        '98': '2',
        '99': '3',
        '100': '4',
        '101': '5',
        '102': '6',
        '103': '7',
        '104': '8',
        '105': '9',
        '106': '*', // Multiply
        '107': '+', // Add
        '109': '-', // Subtract
        '111': '/', // Divide
        
    };
    
    document.addEventListener('keydown', function(event) {
        const keyCode = event.keyCode.toString();
        if (keypadMapping[keyCode] !== undefined) {
            event.preventDefault(); // Prevent default action (e.g., typing in an input field)
            output.value += keypadMapping[keyCode];
        }
        if (key === 'backspace') {
            inputValue.value = output.value.slice(0, -1); // Remove the last character
        } else if (key === 'enter') {
            // Handle Enter key press if needed
            getOutput();
        } 
    });
});


 





