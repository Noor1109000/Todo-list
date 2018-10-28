// User clicked on the add button
// If there is any text inside the item field, add that text id the todo List


function clickBtn(){
    var value = document.querySelector("#item").value;
    if(value){
        addItemTodo(value);
    }
    
    
}
document.querySelector("#add").addEventListener('click', clickBtn);

// removeItem node
function removeItem(){
    var items = this.parentNode.parentNode;
    var parent = items.parentNode;
    parent.removeChild(items)
    
    
}


// function bgColor(){
    
    
// }


// completed the item
function completeItem(e){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    // var addBtn = document.querySelector(".addBtn").querySelector(".fa-check");
    var addBtn = document.querySelector(".buttons");
    


    var target = (id==='todo')?document.getElementById("completed"):document.getElementById("todo");
    parent.removeChild(item)
    target.insertBefore(item, target.childNodes[0])

    // addBtn.addEventListener('click', bgColor)
    
    console.log(e.target);
    
    
    

   
}





function addItemTodo(item){

    var todo = document.querySelector(".todo");

    var list = document.createElement("li");
    list.innerText = item;

    var buttons = document.createElement("div");
    buttons.classList.add('buttons');

    //remove item node
    var remove = document.createElement('button');
    remove.addEventListener('click', removeItem);
    remove.classList.add("removeBtn")
    remove.innerHTML = '<i class="fa fa-trash"></i>'

    // complete item node
    var complete = document.createElement("button")
    complete.classList.add("addBtn");
    complete.innerHTML = '<i class="fa fa-check"></i>'


    //Add click event for completing items
    complete.addEventListener('click', completeItem)

    
    buttons.appendChild(remove)
    buttons.appendChild(complete)
    list.appendChild(buttons)
    // todo.appendChild(list);
    todo.insertBefore(list, todo.childNodes[0]);
    var inputValue = document.querySelector("#item");
    inputValue.value = ""

}