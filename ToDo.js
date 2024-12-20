let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("please Enter Task")
    }else{
        let newEle = document.cresteElement("ul");
        newEle.innerHTML='${inputs.value}';
        text.appendChild(newEle);
    }
}