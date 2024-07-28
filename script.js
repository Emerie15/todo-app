

document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const mybtn = document.getElementById('mybtn');
    const myForm = document.getElementById('myForm');
    const addbtn = document.getElementById('addbtn');
    const taskInput = document.getElementById('task');
    const taskDateInput = document.getElementById('taskDate');
    const taskamtSpan = document.getElementById('taskamt');
    const mytasksDiv = document.querySelector('.mytasks');
    
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('mybtn1').addEventListener('click', function() {
            window.location.href = 'index.html.';
        });
    });
    



    let taskCount = 0;

    // Toggle Navbar
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Close Navbar when clicking outside
    document.addEventListener('click', (event) => {
        if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
            navbarMenu.classList.remove('active');
        }
    });

    // Toggle Form Visibility
    mybtn.addEventListener('click', () => {
        myForm.classList.toggle('show');
    });

    // Add Task Button Event Listener
    addbtn.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        const taskDateValue = taskDateInput.value;

        // Validation
        if (taskValue.length < 3) {
            alert('Task name must be at least 3 characters long.');
            return;
        }
        if (!taskDateValue) {
            alert('Please select a valid date.');
            return;
        }

        // Create and Append Task
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        const taskParagraph = document.createElement('p');
        const dateParagraph = document.createElement('p');
        const lineBreak = document.createElement('br');

        taskParagraph.textContent = `Task: ${taskValue}`;
        dateParagraph.textContent = `Date: ${taskDateValue}`;

        taskDiv.appendChild(taskParagraph);
        taskDiv.appendChild(lineBreak);
        taskDiv.appendChild(dateParagraph);
        mytasksDiv.appendChild(taskDiv);

        // Update Task Count
        taskCount++;
        if (taskamtSpan) {
            taskamtSpan.textContent = `Goals: ${taskCount}`;
        }

        // Clear Form Inputs
        taskInput.value = '';
        taskDateInput.value = '';
    });
});
