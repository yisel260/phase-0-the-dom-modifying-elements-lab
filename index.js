// Write your code here!
const element = document.getElementById("main");
element.remove("main");
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent =  "Yisel is the champion";
document.body.append(newHeader);