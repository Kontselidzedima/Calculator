let display = document.getElementById("display")

function appendToDisplay(value){
   display.value += value
}
function Clear(){
    display.value = ""
}
function Udris(){
    
    display.value = eval(display.value)
}
