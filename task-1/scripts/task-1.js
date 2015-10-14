var list = document.querySelector('ul');
var input = document.querySelector('#task');
var form = document.querySelector('form');

function submitFormHandler(event){
  event.preventDefault();
  console.log("event: ", event);
  createTaskElement(input.value);
  input.value = "";
}

function createTaskElement(task){
  var listItem = document.createElement('li');
  var input = document.createElement('input');
  var label = document.createElement('label');
  input.type = 'checkbox';
  label.innerHTML = task;
  listItem.appendChild(input)
  listItem.appendChild(label);
  
  list.appendChild(listItem);
}

form.addEventListener('submit', submitFormHandler);

