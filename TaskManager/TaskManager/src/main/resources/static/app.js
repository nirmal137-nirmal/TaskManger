let token = localStorage.getItem("token") || "";

// REGISTER
function register() {
    fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: regUser.value,
            password: regPass.value
        })
    })
    .then(res => res.text())
    .then(data => alert(data));
}

// LOGIN
function login() {
    fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: loginUser.value,
            password: loginPass.value
        })
    })
    .then(res => res.json())
    .then(data => {
        token = data.token;
        localStorage.setItem("token", token); // ✅ save token
        alert("Login Success");
    });
}

// LOGOUT
function logout() {
    localStorage.removeItem("token");
    token = "";
    alert("Logged out");
}

// ADD TASK
function addTask() {
    fetch("/api/v1/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            title: title.value,
            description: desc.value
        })
    })
    .then(() => {
        alert("Task Added");
        getTasks();
    });
}

// GET TASKS
function getTasks() {
    fetch("/api/v1/tasks", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("taskList");
        list.innerHTML = "";

        data.forEach(task => {
            let li = document.createElement("li");

            li.innerHTML = `
                ${task.title} - ${task.description}
                <button class="deleteBtn" onclick="deleteTask(${task.id})">X</button>
            `;

            list.appendChild(li);
        });
    });
}

// DELETE TASK
function deleteTask(id) {
    fetch(`/api/v1/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(() => {
        alert("Deleted");
        getTasks();
    });
}