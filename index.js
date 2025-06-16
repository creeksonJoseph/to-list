const list = document.querySelector("#todo-list");
const input = document.querySelector("#todo-input");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task.");
  } else {
    const names = document.createElement("li");

    names.textContent = input.value;
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    names.append(removeBtn);

    const mark = document.createElement("input");
    mark.type = "checkbox";
    names.append(mark);
    removeBtn.addEventListener("click", () => {
      names.remove();
    });
    list.append(names);
    input.value = "";
  }
});
