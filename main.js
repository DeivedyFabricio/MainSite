function addNewTask() {
var list = document.getElementById("list");
var text = document.getElementById("task_name").value;

if(text.length === 0) {
    alert('Característica precisa ter alguma letra');
    return
}

var listItem = document.createElement("li");
listItem.className = "Style02";

const textElement = document.createTextNode(text);
listItem.appendChild(textElement);
list.appendChild(listItem);
}


document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggleButton");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreInfo = this.nextElementSibling; // A próxima div é a moreInfo
            const isHidden = moreInfo.style.display === "none" || moreInfo.style.display === "";

            if (isHidden) {
                moreInfo.style.display = "block";
                this.textContent = "▲"; // Muda a seta para cima
            } else {
                moreInfo.style.display = "none";
                this.textContent = "▼"; // Muda a seta para baixo
            }
        });
    });
});