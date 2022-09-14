
let Result = document.getElementById("output");
function display(num){
    Result.value += num;
}
function Calculate(){
    try{
        Result.value = eval(Result.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    Result.value = "";  
}
function del(){
    Result.value = Result.value.slice(0,-1);
}