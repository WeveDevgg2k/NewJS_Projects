const tasks = document.querySelectorAll('.tasks li')
let draggedTask = null

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i]

  task.addEventListener('dragstart', (ev) => {
    draggedTask = task
    ev.dataTransfer.effectAllowed = "move"
    ev.dataTransfer.setData("text/html", task.innerHTML)
    task.classList.add("dragging")
  })

  task.addEventListener('dragend', () => {
    draggedTask.classList.remove("dragging")
    draggedTask = null
  })
}

const columns = document.querySelectorAll(".tasks")

for (let i = 0; i < columns.length; i++) {
  const column = columns[i]

  column.addEventListener('dragover', (ev) => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "move"
    column.classList.add("dragover")
  })

  column.addEventListener("dragleave", () => {
    column.classList.remove("dragover")
  })

  column.addEventListener("drop", (ev) => {
    ev.preventDefault()
    const task = document.createElement("li")
    task.innerHTML = ev.dataTransfer.getData("text/html")
    task.setAttribute("draggable", true)
    task.addEventListener("dragstart", (ev) => {
      draggedTask = task
      ev.dataTransfer.effectAllowed = "move"
      ev.dataTransfer.setData("text/html", task.innerHTML)
      task.classList.add("dragging")
    })

    column.appendChild(task)
    column.classList.remove("dragover")

    const previousColumn = draggedTask.parentNode
    previousColumn.removeChild(draggedTask)
  })
}

const addTaskForm = document.querySelector("#add-task-form")
const addTaskInput = document.querySelector("input")

addTaskForm.addEventListener("submit", function (ev) {
  ev.preventDefault()

  const newTaskText = addTaskInput.value.trim()
  if (newTaskText !== "") {
    const newTask = document.createElement("li")
    newTask.textContent = newTaskText
    newTask.setAttribute("draggable", true)
    newTask.addEventListener("dragstart", (ev) => {
      draggedTask = newTask
      ev.dataTransfer.effectAllowed = "move"
      ev.dataTransfer.setData("text/html", newTask.innerHTML)
      newTask.classList.add("dragging")
    })

    document.querySelector("#todo").appendChild(newTask)
    addTaskInput.value = ""
  }
})
