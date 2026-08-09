const projects = [
    {
        id: 1,
        name: 'ResolveAI',
        category: 'full stack',
        description: 'AI-powered automated issue resolution platform featuring intelligent ticket routing, real-time analytics dashboard, and LLM-assisted support workflows.',
        image: './images/resolveai.png',
        tech: ['React', 'Python', 'Django REST', 'Gemini API', 'PostgreSQL'],
        demo: 'https://resolveai-zeta.vercel.app/login',
        repo: 'https://github.com/sai0566/resolveai'
    },
    {
        id: 2,
        name: 'Expense Tracker',
        category: 'full stack',
        description: 'Full-stack expense management app built with React & Django REST Framework featuring JWT authentication, protected routes, and PostgreSQL persistence.',
        image: './images/expense tracker.png',
        tech: ['React', 'Django REST', 'JWT', 'PostgreSQL', 'CSS'],
        frontendDemo: 'https://expenses-frontend-ochre.vercel.app/',
        backendDemo: 'https://expense-backend-ve9q.onrender.com/',
        frontendRepo: 'https://github.com/sai0566/expense_tracker',
        backendRepo: 'https://github.com/sai0566/expense_tracker'
    },
    {
        id: 3,
        name: 'Edu Track',
        category: 'full stack',
        description: 'Role-based academic management platform with Admin, Teacher, and Student portals for attendance, marks tracking, and course management.',
        image: './images/edutrack.png',
        tech: ['Python', 'Django', 'SQLite', 'HTML5', 'Bootstrap'],
        demo: 'https://studenthub-4fsq.onrender.com/',
        repo: 'https://github.com/sai0566/studenthub'
    },
    {
        id: 4,
        name: 'Hospital Management System',
        category: 'react',
        description: 'Comprehensive healthcare dashboard with CRUD operations to manage doctors, patients, appointments, bed availability, and billing.',
        image: './images/hsm1.png',
        tech: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'Vercel'],
        demo: 'https://hospital-management-system-8yen.vercel.app/',
        repo: 'https://github.com/sai0566/Hospital_Management_system.git'
    },
    {
        id: 5,
        name: 'Weather Forecast',
        category: 'django',
        description: 'Real-time weather application fetching dynamic atmospheric data and presenting 5-day forecasts based on user city queries.',
        image: './images/weather.png',
        tech: ['Python', 'Django', 'OpenWeather API', 'HTML/CSS'],
        demo: 'https://weatherforecast-3jrh.onrender.com/',
        repo: 'https://github.com/sai0566/weatherforecast.git'
    },
    {
        id: 6,
        name: 'Google Translator App',
        category: 'django',
        description: 'Translation web service leveraging Django and Google Translate modules for multi-language real-time text translation.',
        image: './images/google translator.png',
        tech: ['Python', 'Django', 'Googletrans API', 'CSS3'],
        demo: 'https://googletranslator.onrender.com/',
        repo: 'https://github.com/sai0566/googletranslator.git'
    },
    {
        id: 7,
        name: 'Banking Management System',
        category: 'python',
        description: 'Console-based banking platform using Python OOP & MySQL database to manage accounts, deposits, withdrawals, balances, and audit logs.',
        image: './images/bank.png',
        tech: ['Python 3', 'MySQL', 'MySQLdb', 'Logging System'],
        repo: 'https://github.com/sai0566/banking_application.git'
    },
    {
        id: 8,
        name: 'Mind Games (2048 & Tic Tac Toe)',
        category: 'javascript',
        description: 'Web gaming suite featuring tile-sliding 2048 and classic Tic-Tac-Toe games with real-time score keeping and responsive UI.',
        image: './images/mind games.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
        demo: 'https://sai0566.github.io/web/',
        repo: 'https://github.com/sai0566/web.git'
    },
    {
        id: 9,
        name: 'To-Do List Manager',
        category: 'javascript',
        description: 'Interactive productivity application featuring task creation, status filtering, completion toggles, and browser LocalStorage persistence.',
        image: './images/to-do list.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
        demo: 'https://sai0566.github.io/To-Do-List/',
        repo: 'https://github.com/sai0566/To-Do-List.git'
    },
    {
        id: 10,
        name: 'Calculator App',
        category: 'javascript',
        description: 'Sleek web-based arithmetic calculator supporting keyboard input, expression evaluations, and clear/delete functions.',
        image: './images/calculator.png',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        demo: 'https://sai0566.github.io/calculator/',
        repo: 'https://github.com/sai0566/calculator.git'
    },
    {
        id: 11,
        name: 'Rock Paper Scissors',
        category: 'javascript',
        description: 'Interactive game allowing users to play against computer AI logic with automated score tracking and animated match results.',
        image: './images/rock-paper-scissor.png',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        demo: 'https://sai0566.github.io/Rock_paper_scissor/',
        repo: 'https://github.com/sai0566/Rock_paper_scissor.git'
    }
];

// State Variables
let currentCategory = 'all';
let currentSearchQuery = '';

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const projectCountSpan = document.getElementById('project-count');
const searchInput = document.getElementById('project-search');
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerCloseBtn = document.getElementById('drawer-close');

// 2. Render Projects
function renderProjects() {
    if (!projectsContainer) return;

    let filtered = projects.filter(project => {
        const matchesCategory = (currentCategory === 'all') || 
            (project.category.toLowerCase() === currentCategory.toLowerCase());
        
        const searchLower = currentSearchQuery.toLowerCase().trim();
        const matchesSearch = !searchLower || 
            project.name.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.tech.some(t => t.toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
    });

    // Update Counter
    if (projectCountSpan) {
        projectCountSpan.textContent = `Showing ${filtered.length} of ${projects.length} Projects`;
    }

    if (filtered.length === 0) {
        projectsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
                <h3>No matching projects found</h3>
                <p>Try clearing your search query or selecting a different category pill.</p>
            </div>
        `;
        return;
    }

    projectsContainer.innerHTML = filtered.map(item => `
        <div class="project-card">
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="card-category-badge">${item.category}</span>
            </div>
            
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.description}</p>
                
                <div class="card-tech-stack">
                    ${item.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
                </div>

                <div class="card-actions">
                    ${item.demo ? `<a href="${item.demo}" target="_blank" class="card-btn card-btn-demo">Live Demo</a>` : ''}
                    ${item.frontendDemo ? `<a href="${item.frontendDemo}" target="_blank" class="card-btn card-btn-demo">Frontend Demo</a>` : ''}
                    ${item.backendDemo ? `<a href="${item.backendDemo}" target="_blank" class="card-btn card-btn-demo">API Service</a>` : ''}
                    ${item.repo ? `<a href="${item.repo}" target="_blank" class="card-btn card-btn-repo">Source Code</a>` : ''}
                    ${item.frontendRepo ? `<a href="${item.frontendRepo}" target="_blank" class="card-btn card-btn-repo">Frontend Repo</a>` : ''}
                    ${item.backendRepo ? `<a href="${item.backendRepo}" target="_blank" class="card-btn card-btn-repo">Backend Repo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Category Filter
function filterProjects(category, event) {
    currentCategory = category;
    
    // Highlight Active Button
    const pills = document.querySelectorAll('.filter-pills .pill-btn');
    pills.forEach(pill => pill.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    renderProjects();
}

// 4. Live Search Input
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        renderProjects();
    });
}

// 5. Theme Toggle Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    });
}

// 6. Mobile Drawer Logic
const drawerBackdrop = document.getElementById('drawer-backdrop');

function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
}

if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// 7. Copy Email Toast Notification
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        showToast('✅ Email copied to clipboard!');
    }).catch(() => {
        showToast('📧 Contact: sreeram0566@gmail.com');
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 8. Scroll Spy (Active Navbar Link)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Initialize Page
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProjects();
});