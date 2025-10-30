
    // Data for the website content
    const portfolioData = {
      roles: ["Problem Solver", "Fresher SDE", "Web Developer", "Creative Coder", "Front-End Designer", "UX Enthusiast"],
      skills: [
        { name: "Data Structures & Algorithms", icon: "fas fa-brain" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Tailwind CSS", icon: "fas fa-wind" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Git", icon: "fab fa-git-alt" },
      ],
    //   projects: [
    //     {
    //       title: "💬 Real-Time Chat App",
    //       description: "A secure, real-time messaging platform with user authentication, private rooms, and a clean, modern UI.",
    //       tech: "Tech Stack: JavaScript, Node.js, WebSockets",
    //       icon: "fas fa-comments"
    //     },
    //     {
    //       title: "🚀 Mars Landing Simulator",
    //       description: "A 3D simulation of a Mars rover landing, created using Three.js and Cannon.js for physics.",
    //       tech: "Tech Stack: HTML5, CSS3, JavaScript, Three.js",
    //       icon: "fas fa-rocket"
    //     },
    //     {
    //       title: "🎵 Music Playlist App",
    //       description: "A responsive web application that allows users to create, share, and manage personal music playlists.",
    //       tech: "Tech Stack: React, Redux, Tailwind CSS",
    //       icon: "fas fa-music"
    //     },
    //     {
    //       title: "🧠 AI-Powered Note Taker",
    //       description: "An application that transcribes voice notes and uses AI to summarize key points and action items.",
    //       tech: "Tech Stack: Python, Flask, Google Speech-to-Text API",
    //       icon: "fas fa-brain"
    //     },
    //     {
    //       title: "📈 Financial Dashboard",
    //       description: "A data visualization dashboard displaying real-time stock market data with interactive charts and analytics.",
    //       tech: "Tech Stack: D3.js, Chart.js, REST API",
    //       icon: "fas fa-chart-line"
    //     }
    //   ]
    // };
// projects: [
//   {
//     title: "📂 File Backup Tool",
//     description: "Implemented file backup, restore functionality, and action logging using OOP, file handling, and directory management in C++.",
//     tech: "C++, OOP, fstream, dirent.h",
//     icon: "fas fa-folder"
//   },
//   {
//     title: "💬 Real-Time Chat App",
//     description: "A secure, real-time messaging platform with user authentication, private rooms, and a clean, modern UI.",
//     tech: "JavaScript, Node.js, WebSockets",
//     icon: "fas fa-comments"
//   },
//   {
//     title: "💻 Personal Portfolio Website",
//     description: "Created a personal website to showcase projects and posts, focusing on frontend design and user interaction.",
//     tech: "HTML, CSS, JavaScript, React",
//     icon: "fas fa-user"
//   },
//   {
//     title: "📝 Todo App",
//     description: "Built a task management system with interactive frontend where users can add, update, and delete tasks.",
//     tech: "HTML, CSS, JavaScript, React",
//     icon: "fas fa-tasks"
//   },
//   {
//     title: "🌱 Green Earth Website",
//     description: "Designed a website to submit eco-friendly ideas with form submissions stored using MySQL, focusing on frontend and user interaction.",
//     tech: "HTML, CSS, JavaScript, Flask, REST API, MySQL",
//     icon: "fas fa-leaf"
//   }
// ]};
projects: [
  {
    title: "📂 File Backup Tool",
    description: "Implemented file backup, restore functionality, and action logging using OOP, file handling, and directory management in C++.",
    tech: "C++, OOP, fstream, dirent.h",
    icon: "fas fa-folder"
  },
  {
    title: "💬 Real-Time Chat App",
    description: "A secure, real-time messaging platform with user authentication, private rooms, and a clean, modern UI.",
    tech: "JavaScript, Node.js, WebSockets",
    icon: "fas fa-comments"
  },
  {
    title: "💻 Personal Portfolio Website",
    description: "Created a personal website to showcase projects and posts, focusing on frontend design and user interaction.",
    tech: "HTML, CSS, JavaScript, React",
    icon: "fas fa-user"
  },
  {
    title: "🕵️ Whistleblow – (Security-Focused Web App)",
    description: "A secure system enabling anonymous and metadata-free reporting of corruption cases. Designed a privacy-first architecture using Flask and MySQL, ensuring complete identity protection with custom metadata elimination mechanisms. Includes multi-layered logging for transparency without compromising anonymity.",
    tech: "Python, Flask, MySQL, HTML, CSS, JavaScript",
    icon: "fas fa-shield-alt"
  },
  {
    title: "🌱 Green Earth Website",
    description: "Designed a website to submit eco-friendly ideas with form submissions stored using MySQL, focusing on frontend and user interaction.",
    tech: "HTML, CSS, JavaScript, Flask, REST API, MySQL",
    icon: "fas fa-leaf"
  }
]};


    // DOM Elements
    const typingElement = document.getElementById("typing-text");
    const projectsContainer = document.getElementById("projects-container");
    const skillsContainer = document.getElementById("skills-container");

    // Typewriter effect function
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

    // Deleting effect function
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

    // Main animation loop
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

    // Function to render projects dynamically
    const renderProjects = () => {
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

    // Function to copy email to clipboard
    const copyEmail = () => {
      const email = "gouravds02@gmail.com";
      const el = document.createElement('textarea');
      el.value = email;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      
      const copyBtn = document.getElementById('copy-email-btn');
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    };

    // Event listener for the copy button
    document.addEventListener('DOMContentLoaded', () => {
      const copyBtn = document.getElementById('copy-email-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', copyEmail);
      }
    });

    // Initialize on window load
    window.onload = () => {
      renderProjects();
      renderSkills();
      animateRoles();
    };