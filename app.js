history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0,0);
};

let projects = [
    {
        name: 'To-Do List',
        category: 'javascript',
        description: 'Task management app that lets users add, complete, and delete tasks with data stored using LocalStorage.',
        image: './images/to-do list.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sai0566/To-Do-List.git',
        demo: 'https://sai0566.github.io/To-Do-List/'
    },
    {
        name: 'Calculator',
        category: 'javascript',
        description: 'Web-based calculator that performs basic arithmetic operations with a responsive and user-friendly interface.',
        image: './images/calculator.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sai0566/calculator.git',
        demo: 'https://sai0566.github.io/calculator/'
    },
    {
        name: 'Rock-Paper-Scissor',
        category: 'javascript',
        description: 'Interactive Rock Paper Scissors game where the user plays against the computer with real-time results and score tracking.',
        image: './images/rock-paper-scissor.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sai0566/Rock_paper_scissor.git',
        demo: 'https://sai0566.github.io/Rock_paper_scissor/'
    },
    {
        name: 'Mind Games',
        category: 'javascript',
        description: 'A web-based gaming platform featuring 2048 and Tic Tac Toe built with HTML, CSS, and JavaScript.',
        image: './images/mind games.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/sai0566/web.git',
        demo: 'https://sai0566.github.io/web/'
    },
    {
        name: 'google Translator',
        category: 'django',
        description: 'Django web application that translates text between multiple languages using a third-party Google Translator Python module.',
        image: './images/google translator.png',
        tech: ['HTML', 'CSS', 'python', 'django'],
        repo: 'https://github.com/sai0566/googletranslator.git',
        demo: 'https://googletranslator.onrender.com/'
    },
    {
        name: 'Banking Management System',
        category: 'python',
        description: 'A console-based Banking Management System built using Python and MySQL. The application allows users to create accounts, deposit money, withdraw funds, check account balance, and view account details. It also records all activities using a logging system.',
        image: './images/bank.png',
        tech: ['Python', 'MySQL', 'MySQLdb', 'Logging'],
        repo: 'https://github.com/sai0566/banking_application.git'
    },
     
]

let container = document.getElementById('projects-container')
function displayproject(projectlist) {
    container.innerHTML = ''
    projectlist.forEach(element => {
        container.innerHTML += `
        <div class="project-card">
        <div class='card-image'>
            <img src="${element.image}" alt="${element.name}">
            </div>
            <div class='card-content'>
            <h3>${element.name}</h3>
            <p>${element.description}</p>
                <div class="tech">
                    ${element.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
           <div class="card-buttons">
                ${element.demo ? `<a href="${element.demo}" target="_blank" class="demo">Live demo</a>` : ""}
                <a href="${element.repo}" target="_blank" class="repo">Repo</a>
            </div>
        </div>
        `
    });
}



function filterProjects(category) {

    if (category === "all") {
        displayproject(projects);
    }
    else {

        let filtered = projects.filter(project => project.category === category);

        displayproject(filtered);

    }

}
displayproject(projects)


let toggle = document.getElementById("theme-toggle");

// Function to apply mode based on localStorage
function applyTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        toggle.textContent = "🌙";
    }
}

// Initial call on page load
applyTheme();

// Toggle button click
toggle.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
};