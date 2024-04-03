//const bodyElement = document.querySelector("body");
const bodyElement2 = document.getElementById("body");
const ChangeBackgroundButton =document.getElementById("change-bg");

const lightToDarkButton = document.getElementById("light-dark-toggle");

const hoverButton = document.getElementById("hover-button");
//function ChangeBackgroundColor(){
//bodyElement.style.backgroundColor ="white";
//}

ChangeBackgroundButton.addEventListener("click", function(){
    console.log(bodyElement2);
    console.log(ChangeBackgroundButton);
    console.log(ChangeBackgroundButton.textContent);
    bodyElement2.style.backgroundColor = "white";
});

let darkMode = false;
function changeToDarkMode (){
   darkMode = !darkMode;
   if (darkMode){
    lightToDarkButton.textContent = "Light";
    lightToDarkButton.style.backgroundColor = "white";
    lightToDarkButton.style.color = "black";
    lightToDarkButton.style.borderWidth = " 1px";
    lightToDarkButton.style.borderColor = "black";
    lightToDarkButton.style.borderBlockStyle = "solid";
    bodyElement2.style.backgroundColor = "pink";
}
else {
   darkMode = false;
    lightToDarkButton.textContent = "Dark";
    lightToDarkButton.style.backgroundColor = "black";
    lightToDarkButton.style.color = "white";
    lightToDarkButton.style.borderWidth = " 0px";
    lightToDarkButton.style.borderColor = "none";
    lightToDarkButton.style.borderBlockStyle = "none";
    bodyElement2.style.backgroundColor = "white";
}
 function handleFormInput(e){
    console.log
 } 
}

lightToDarkButton.addEventListener("click",changeToDarkMode);
hoverButton.addEventListener("mouseover", changeToDarkMode);