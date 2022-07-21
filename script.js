let output = document.getElementById("input-text");

let calculate = (number) =>{
    output.value+=number;
}

function clr(){
    output.value = "";
}



let result=()=>{
    try{
        output.value=eval(output.value)
    }
    catch(err){
        
        alert("Please enter the valid input")
    }
}

function del(){
    output.value=output.value.slice(0,-1)
}
