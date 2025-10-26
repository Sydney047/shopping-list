const button = document.querySelector("#btn");
const list = document.querySelector("#list");
const input = document.querySelector("#addItem");

function addingITems(){
    let inputText = input.value;
    input.value = "";

    let listItem = document.createElement("li");
    let listText = document.createElement("span");
    let listBtn = document.createElement("button");

    listItem.setAttribute("style","color: #4e8ea2; font-size: 1.45rem");
    listBtn.setAttribute("style","color: #650002; margin: 7px; border-radius: 6px; border: solid #400000; opacity: .4");

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    listBtn.addEventListener("click", () => list.removeChild(listItem))

    list.appendChild(listItem);
    listText.textContent = inputText;
}

button.addEventListener("click", addingITems);