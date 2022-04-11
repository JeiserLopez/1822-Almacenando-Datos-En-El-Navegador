import { readTask } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  li.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("task"));
  const index = tasks.findIndex( (item) => item.id === id)
  tasks.splice(index,1);
  localStorage.setItem("task",JSON.stringify(tasks));
  readTask();
};

export default deleteIcon;
