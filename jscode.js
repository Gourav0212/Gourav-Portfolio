// jscode.js

// ----------------------------------------------------------------------
// I. Data for the website content
// ----------------------------------------------------------------------
const portfolioData = {
  roles: ["Problem Solver", "Fresher SDE", "Web Developer", "Creative Coder", "Front-End Designer", "UX Enthusiast"],
    skills: [
        { name: "Data Structures & Algorithms", icon: "fas fa-brain" },
        { name: "C++", icon: "fas fa-cogs" }, // ADDED: Based on 'File Backup Tool'
        { name: "Python", icon: "fab fa-python" }, // ADDED: Based on 'Whistleblow' and 'Green Earth'
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Flask", icon: "fas fa-flask" }, // REPLACED Vue.js
        { name: "MySQL", icon: "fas fa-database" }, // ADDED: Based on project tech stacks
        { name: "Tailwind CSS", icon: "fas fa-wind" },
        { name: "REST APIs", icon: "fas fa-network-wired" }, // ADDED: Essential for your web apps
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Git", icon: "fab fa-git-alt" },
    ],
    projects: [
        {
            title: "📂 File Backup Tool",
            description: "Implemented file backup, restore functionality, and action logging using OOP, file handling, and directory management in C++.",
            tech: "C++, OOP, fstream, dirent.h",
            icon: "fas fa-folder"
        },
        {
            title: "💻 Personal Portfolio Website",
            description: "Created a personal website to showcase projects and posts, focusing on frontend design and user interaction.",
            tech: "HTML, CSS, JavaScript",
            icon: "fas fa-user"
        },
        {
    title: "🕵️ Secure Anonymous Reporting System",
    description: "Developed a privacy-conscious web application for secure and anonymous reporting. Focused on identity protection and secure data handling, implementing best practices in backend architecture and encryption. Features an admin dashboard for managing submissions and ensuring integrity.",
    tech: "Python, Flask, MySQL, HTML, CSS, JavaScript",
    icon: "fas fa-shield-alt"
},

        {
            title: "🌱 Green Earth Website",
            description: "Designed a website to submit eco-friendly ideas with form submissions stored using MySQL, focusing on frontend and user interaction.",
            tech: "HTML, CSS, JavaScript, Flask, REST API, MySQL",
            icon: "fas fa-leaf"
        }
    ]
};


// ----------------------------------------------------------------------
// II. DOM Element Selection
// ----------------------------------------------------------------------
const typingElement = document.getElementById("typing-text");
const projectsContainer = document.getElementById("projects-container");
const skillsContainer = document.getElementById("skills-container");
const copyBtn = document.getElementById('copy-email-btn');


// ----------------------------------------------------------------------
// III. Typewriter Effect Logic
// ----------------------------------------------------------------------

// Typewriter effect function (typing)
const typewriter = (text, element, callback) => {
    let i = 0;
    element.textContent = ''; // Clear content before typing
    let interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(callback, 1500); // Pause before deleting
        }
    }, 70); // Typing speed
};

// Deleting effect function (deleting)
const deleter = (element, callback) => {
    let text = element.textContent;
    let i = text.length;
    let interval = setInterval(() => {
        if (i >= 0) {
            element.textContent = text.substring(0, i);
            i--;
        } else {
            clearInterval(interval);
            setTimeout(callback, 500); // Pause before typing next
        }
    }, 40); // Deleting speed
};

// Main animation loop to cycle through roles
let roleIndex = 0;
const animateRoles = () => {
    const currentRole = portfolioData.roles[roleIndex];
    typewriter(currentRole, typingElement, () => {
        deleter(typingElement, () => {
            roleIndex = (roleIndex + 1) % portfolioData.roles.length;
            animateRoles();
        });
    });
};


// ----------------------------------------------------------------------
// IV. Content Rendering Logic
// ----------------------------------------------------------------------

// Function to render projects dynamically
const renderProjects = () => {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = ''; // Clear existing content
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-xl p-6 md:p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-opacity-20 transform cursor-pointer flex flex-col items-center text-center';
        card.innerHTML = `
            <i class="${project.icon} text-4xl mb-4 text-gradient-blue"></i>
            <h3 class="text-2xl font-semibold mb-2 text-gradient-blue">${project.title}</h3>
            <p class="text-sm text-gray-300 mb-4">${project.description}</p>
            <p class="text-xs font-light italic text-gray-400">${project.tech}</p>
        `;
        projectsContainer.appendChild(card);
    });
};

// Function to render skills dynamically
const renderSkills = () => {
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'flex flex-col items-center justify-center p-4 glass-card rounded-xl shadow-lg transition-transform duration-300 hover:scale-110';
        skillItem.innerHTML = `
            <i class="${skill.icon} text-3xl text-white mb-2"></i>
            <span class="text-sm font-light">${skill.name}</span>
        `;
        skillsContainer.appendChild(skillItem);
    });
};


// ----------------------------------------------------------------------
// V. Utility Functions & Event Listeners
// ----------------------------------------------------------------------

// Function to copy email to clipboard
const copyEmail = () => {
    const email = "gouravds02@gmail.com";
    const el = document.createElement('textarea');
    el.value = email;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    
    // Copy logic (modern)
    navigator.clipboard.writeText(email).then(() => {
        document.body.removeChild(el);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
};

// Event listener for the copy button
document.addEventListener('DOMContentLoaded', () => {
    if (copyBtn) {
        copyBtn.addEventListener('click', copyEmail);
    }
});


// ----------------------------------------------------------------------
// VI. Initialization
// ----------------------------------------------------------------------

// Initialize on window load
window.onload = () => {
    renderProjects();
    renderSkills();
    // Only start the animation if the element exists
    if (typingElement) {
        animateRoles();
    }
};