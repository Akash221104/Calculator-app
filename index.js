let result= document.querySelector('.input');
function display(number){
   result.value= result.value+number;

}
function calculate(){
    let final=result.value;
    let fianlresult=eval(final);
    result.value =fianlresult;
}
function clr(){
    result.value="";
}