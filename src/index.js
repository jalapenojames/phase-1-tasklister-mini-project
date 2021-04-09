document.addEventListener("DOMContentLoaded", () => {
  // As a user, I should be able to type a task into the input field.
  
  // Puts what we enter into the DOM
  document.addEventListener("submit", function(event) {
    let inputTask = document.getElementById('new-task-description').value
    event.preventDefault()
    console.log(`You submitted ${inputTask}`)
    addTask(inputTask)
  })

  // append submitted tasks to the dom
  
});

// When we press button, the value inside is sent to the DOM
function addTask (task) {
  let newLi = document.createElement('li')
  newLi.innerText = task
  document.getElementById('tasks').appendChild(newLi)
}


