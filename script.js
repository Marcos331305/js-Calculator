// Adding the Buttons values to Input Field (Text-Area)
const textArea = document.querySelector("#text-area");

// function to add the Values
function addToTextarea(e){
    let input = e.innerText;
    textArea.value = textArea.value + input;
}

// Adding functionality to all-clear btn 
function allClear(){
    textArea.value = "";
}

// Adding functionality to CE btn
function ce(){
    let string = textArea.value;
    let newString = string.slice(0,((string.length)-1));
    textArea.value = newString;
}

// Adding the Calculating functionality
function calculate(){
    try{
        let result = math.evaluate(textArea.value);
        textArea.value = result;
    }
    catch(e){
       textArea.value = "Not a valid Input";
    }
}