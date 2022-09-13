const addBtn = document.querySelector('#addToDo');
const input = document.querySelector('#inputfield');
const todoList = document.querySelector('#todoList');

addBtn.onclick = ()=>{

    if (input.value.length === 0) {
        alert('PLEASE ADD A TASK');
    }else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        todoList.appendChild(li);
        input.value = "";
    
        li.onclick = ()=>{
            if (li.style.textDecoration === "none") {
                li.style.textDecoration = "line-through";
            }else{
                li.style.textDecoration = "none";
            }
            
        }
    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);
    
        deleteBtn.onclick = ()=>{
            li.remove();
        }
    }
}





// ENTER - QISAYOL DUYMESI ELAVE ETMEK ADD BUTONUNA ===========================================================

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("addToDo").click();
    }
  });

// ENTER - QISAYOL DUYMESI ELAVE ETMEK ADD BUTONUNA ===========================================================