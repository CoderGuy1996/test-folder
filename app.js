// To-Do List Application

// Sample data to begin with
let tasks = [
    { id: 1, description: "Buy groceries", completed: false },
    { id: 2, description: "Complete homework", completed: true },
    { id: 3, description: "Read a book", completed: false }
];

// Function to add a new task
function addTask(description) {
    const newTask = {
        id: tasks.length + 1,
        description: description,
        completed: false
    };
    tasks.push(newTask);
    displayTasks();
}

// Function to delete a task by ID
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

// Function to toggle the completion status of a task by ID
function toggleTaskCompletion(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    displayTasks();
}

// Function to filter tasks by completion status
function filterTasks(status) {
    let filteredTasks = tasks;
    if (status === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (status === 'incomplete') {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    displayTasks(filteredTasks);
}

// Function to display tasks in the console
function displayTasks(displayedTasks = tasks) {
    console.clear();
    console.log("To-Do List:");
    displayedTasks.forEach(task => {
        console.log(
            `${task.id}. [${task.completed ? 'X' : ' '}] ${task.description}`
        );
    });
}

// Function to handle user input
function handleInput(input) {
    const command = input.split(" ")[0];
    const args = input.split(" ").slice(1).join(" ");
    
    switch (command) {
        case "add":
            addTask(args);
            break;
        case "delete":
            deleteTask(Number(args));
            break;
        case "toggle":
            toggleTaskCompletion(Number(args));
            break;
        case "filter":
            filterTasks(args);
            break;
        default:
            console.log("Unknown command. Try 'add', 'delete', 'toggle', or 'filter'.");
    }
}

// Display initial tasks
displayTasks();

// Simulated user commands
setTimeout(() => handleInput("add Walk the dog"), 1000);
setTimeout(() => handleInput("toggle 1"), 2000);
setTimeout(() => handleInput("delete 2"), 3000);
setTimeout(() => handleInput("filter completed"), 4000);
setTimeout(() => handleInput("filter incomplete"), 5000);
