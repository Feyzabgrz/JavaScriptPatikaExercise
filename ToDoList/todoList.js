let btnDom=document.querySelector("#liveToastBtn")
let taskDom=document.querySelector("#task")
let listDom=document.querySelector("#list")
let ulLength=document.querySelector("li")


for (let index = 0; index < ulLength.length; index++) {
   let timesButton= document.createElement("span");
   timesButton.textContent="\u00D7";
   timesButton.classList.add("close");
   timesButton.onclick= removeButton;
   ulLength[index].append(timesButton);
   ulLength[index].onclick=check;
    
}


btnDom.addEventListener("click" ,newElement);

function removeButton() {
    this.parentElement.remove();
}
function check() {
    this.classList.toggle("checkhed");
    
}
function newElement() {
    if (taskDom.value =="") {
        $(".error").toast("show");
    }
    else{
    $(".success").toast("show");

    let liDom= document.createElement('li');
    listDom.appendChild(liDom);
    liDom.innerHTML =task.value;
    taskDom.value="";

    liDom.onclick=check;
    let timesButton = document.createElement("span");
    timesButton.textContent = "\u00D7";
    timesButton.classList.add("close");
    timesButton.onclick = removeButton;
    
    liDom.append(timesButton);
    listDom.append(liDom);
    inputElement.value = ("");
}
}