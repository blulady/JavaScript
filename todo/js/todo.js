/*this function gets the task from input*/

function gets_todos() {
    /*this creates an array of task that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null the JSON.parse will communicate with the web browswer to make the task a JS object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/* this function adds the inputed task to the get_dodos function array*/
function add() {
    /*this takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = gets_todos();
    /*this adds a new task the end of the array*/
    todos.push(task);
    /*this converts the task input to a json string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    
    return false;
}

/*this function keeps the tasks permanently displayed on the screen*/
function show() {
    /*this sets up the task that was retrieved as a variable*/
    var todos = gets_todos();

    /*this sets the task that was tertrieved as a variable*/
    var html= '<ul>';
    /*this displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++) {
        /* this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /*this displays the task as a list*/
    document.getElementById('todos').innerHTML = html;
}

/*this displays the inputed task when the 'add item' button is clicked*/
document.getElementById('add').addEventListener('click',add);
/*this will keep the inputs displayed permantaly on the screen*/
show();