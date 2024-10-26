document.getElementById("addButton").addEventListener("click", addTodo);

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a valid item.");
    return;
  }

  const random1 = Math.floor(Math.random() * 11);

  if (random1 > 6) { 
    const todoList = document.getElementById("todoList");
    const listItem = document.createElement("li");

    listItem.textContent = todoText;
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "x";
    removeBtn.className = "remove";
    removeBtn.onclick = () => listItem.remove();
    listItem.appendChild(removeBtn);

    todoList.appendChild(listItem);
    input.value = "";

    setTimeout(() => {
      if (listItem.parentNode === todoList) {
        listItem.remove();
      }
    }, 40000);
  } else {
    alert('Error!');
  }
}
