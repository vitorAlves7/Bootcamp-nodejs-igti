let fsList = document.querySelectorAll(".multiple-field");

const initMultipleFieldSet = (fs) => {
    
    let addButton = document.createElement("button");
    addButton.textContent = "Adicionar";
    addButton.type = "button";

    fs.appendChild(addButton);

    let firstInput = fs.querySelector("input")

    addButton.addEventListener("click", () => {
        let div = document.createElement("div");
        let newInput = document.createElement("input");

        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.type = "button";
        
        div.appendChild(newInput);
        div.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            div.remove();
        });

        fs.insertBefore(div,addButton);
    });
}

for(let i = 0; i < fsList.length; i++){
    initMultipleFieldSet(fsList[i]);
}