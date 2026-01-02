// App State
const state = {
  projects: [],
  filteredProjects: [],
  currentFilter: "all",
  activeSection: "header",

  // Pagination states
  projectsPerPage: 6,
  currentProjectsPage: 1,
  totalProjectsPages: 1,

  skillsPerPage: 6,
  currentSkillsPage: 1,
  totalSkillsPages: 1,

  experiencePerPage: 3,
  currentExperiencePage: 1,
  totalExperiencePages: 1,
};

// Technical terms to highlight
const technicalTerms = [
  // Programming Languages
  "Python",
  "JavaScript",
  "Django",
  "Flask",
  "HTMX",
  "PyTorch",
  // Web Technologies
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Tailwind",
  "WebSockets",
  "Redis",
  "REST",
  "RESTful",
  "APIs",
  "API",
  "CI/CD",
  "Git",
  "GitHub Actions",
  // Databases & Storage
  "PostgreSQL",
  "MariaDB",
  "MySQL",
  "Amazon RDS",
  "SQL",
  "localStorage",
  // Cloud & DevOps
  "AWS",
  "EC2",
  "AWS EC2",
  "Oracle Cloud",
  "cPanel",
  "Nginx",
  "Gunicorn",
  "Linux",
  "SSL",
  // Frameworks & Libraries
  "Django CMS",
  "server-side rendering",
  "async",
  // Security & Auth
  "CSRF protection",
  "role-based authentication",
  "authentication",
  // Other Technical Terms
  "full-stack",
  "frontend",
  "backend",
  "deployment",
  "e-commerce",
  "CMS",
  "dashboards",
  "real-time",
  // Miscellaneous
  "dartmouth-langchain",
  "Stripe",
  "Colorstack",
  "tech",
  "technical",
];

// Function to highlight technical terms in text
function highlightTechnicalTerms(text) {
  let result = text;
  // Sort by length descending to match longer phrases first
  const sortedTerms = [...technicalTerms].sort((a, b) => b.length - a.length);

  sortedTerms.forEach((term) => {
    // Create a case-insensitive regex that matches whole words/phrases
    const regex = new RegExp(`\\b(${term})\\b`, "gi");
    result = result.replace(
      regex,
      '<b class="font-semibold text-gray-700">$1</b>'
    );
  });

  return result;
}

// Experience data
const experiences = [
  {
    period: "Oct 2025 - Present",
    title: "Software Development Engineering (SDE) Intern",
    company: "Dartmouth Evergreen AI Project",
    location: "Hanover, NH",
    type: "Campus Job",
    current: true,
    bullets: [
      "Maintained a full-stack Flask web application for Evergreen, Dartmouth's student wellness AI app, streamlining data flow, test dialogues, from 400+ users to train AI models (dartmouth-langchain); improved processing efficiency by 40%",
      "Built a real-time dialogue coauthoring chat feature using WebSockets and Redis for live updates, async JavaScript GET/POST API calls for messaging, and localStorage caching to reduce redundant requests and optimize performance",
      "Deployed on AWS EC2 with Amazon RDS backend, configured Nginx and Gunicorn for production reliability, and implemented CI/CD pipelines via GitHub Actions for automated, zero-downtime deployments",
    ],
  },
  {
    period: "Oct 2025 - Present",
    title: "ColorStack First Year Representative",
    company: "Dartmouth ColorStack Chapter",
    location: "Hanover, NH",
    type: "Leadership",
    current: true,
    bullets: [
      "Advocating for 20+ first-year students at Dartmouth in ColorStack chapter meetings; improved tech-mentoring initiatives that focused on community building, professional development, and peer support for underrepresented students in CS by 30%",
      "Organized 3+ technical workshops and networking events, connecting 200+ members with mentorship and internship opportunities, resulting in 70% of participants securing networking and internship opportunities",
    ],
  },
  {
    period: "Jul 2025 - Sep 2025",
    title: "Software Development Intern",
    company: "North and Beyond Heights",
    location: "Dar es Salaam, Tanzania",
    type: "Internship",
    current: false,
    bullets: [
      "Developed a self-editable Django CMS utilizing Python programming with secure role-based authentication, cutting operational costs by 70% while supporting 20+ weekly content updates",
      "Designed a responsive, intuitive Tailwind CSS frontend that reduced content publishing time by 70%; deployed on cPanel with MariaDB, SSL configuration, and automated backups for 99%+ uptime",
    ],
  },
  {
    period: "Dec 2024 - Jul 2025",
    title: "Software Development Intern",
    company: "Tanzania Students' Achievement Foundation",
    location: "Dar es Salaam, Tanzania",
    type: "Internship",
    current: false,
    bullets: [
      "Built an admissions portal on Django with role-based authentication and CSRF protection, improving application processing efficiency by 60% for 300+ applicants, while also operating within a secure Linux environment",
      "Engineered an HTMX staff dashboard with server-side rendering, which increased review throughput by 60% for 20+ reviewers and streamlined document management workflow",
      "Deployed the solution on cPanel with MariaDB integration to ensure reliable hosting and secure data access for multiple admission cycles",
    ],
  },
  {
    period: "Apr 2025 - Jun 2025",
    title: "Software Development Freelancer",
    company: "Being That Guy",
    location: "Arusha, Tanzania",
    type: "Freelance",
    current: false,
    bullets: [
      "Built a full-stack Django e-commerce platform integrating Django RESTful APIs with PostgreSQL and real-time order tracking, supporting 50+ active users and 30+ orders per month; incorporated elements of PyTorch for data handling where applicable",
      "Developed a responsive, minimalist Tailwind storefront featuring an automated GitHub actions CI/CD pipeline to Oracle Cloud that reduced deployment time by 60% with zero manual intervention",
    ],
  },
];

// Interests data
const interests = [
  {
    name: "Soccer",
    description:
      "Soccer is simple, but it is difficult to play simple... As an amateur, I often wish it were the former.",
    icon: "fas fa-futbol",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Amapiano",
    description:
      "South African beats' vibes are just unmatched. 'Dzungu' (you fly, man!) ",
    icon: "fas fa-music",
    image:
      "https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=1920/https://www.ballantines.com/wp-content/uploads/2021/04/ballantines-boiler-room-true-music-africa-johannesburg-maphorisa-aspect-ratio-16-9.jpg",
  },
  {
    name: "Board Games",
    description:
      "I like cards. But I may teach you a game, and you'd still beat me to it 😅.",
    icon: "fas fa-chess",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/06/cardgames-2048px-9173-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
  },
  {
    name: "Music Production",
    description:
      "I mistakenly installed FL Studio once, and now I'm an official addict to it.",
    icon: "fas fa-headphones",
    image:
      "https://go.grammy.com/wp-content/uploads/2024/10/Screenshot-2024-10-04-at-1.47.57-PM.png",
  },
  {
    name: "Anime",
    description: '"My soldiers RAGEEEEEE!"',
    icon: "fas fa-tv",
    image:
      "https://preview.redd.it/why-do-so-many-people-hate-eren-yaeger-and-what-would-make-v0-zyem4dlyltkd1.png?width=640&crop=smart&auto=webp&s=c4004752d10d3ecf58ee9306f241835961b1acb4",
  },
];

// Your GitHub projects data
const githubProjects = [
  {
    name: "Edupayy",
    description:
      "A comprehensive student billing and fee management system for educational institutions, streamlining financial workflows from invoicing to payment tracking and reporting.",
    url: "https://edupayy-railway.onrender.com/",
    codeUrl: "https://github.com/gcl140/edupayy-railway",
    tech: ["Django", "Stripe API", "Python", "JavaScript"],
    type: "fullstack",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "ForumAbroad",
    description:
      "A community-driven platform for students navigating international opportunities, featuring discussion forums, resource sharing, and AI-powered answer discovery.",
    url: "https://tztoabroad.tech/",
    codeUrl: "https://github.com/gcl140/abroad-forum",
    tech: ["Django", "Google VertexAI", "Python", "JavaScript"],
    type: "fullstack",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Maghettoni",
    description:
      "A student-focused housing platform helping university students find and book rooms near campuses with location-based search and distance filtering.",
    url: "https://maghettoni.com/",
    codeUrl: "https://github.com/gcl140/maghettoni.com",
    tech: ["Django", "Google Maps API", "Python"],
    type: "fullstack",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "TanSAF Application Portal",
    description:
      "A multi-step online application system for scholarship programs with form validation, user authentication, admin review tools, and dynamic progress saving.",
    url: "https://apply.tansaf.or.tz/",
    codeUrl: "https://github.com/gcl140/TanSAF-Application-Portal",
    tech: ["Django", "TypeScript", "MySQL"],
    type: "django",
    year: "2024",
    image:
      "https://github.com/gcl140/gcl140.github.io/blob/main/images/tansaf.png?raw=true",
  },
  {
    name: "DALI Social",
    description:
      "A full-stack social platform for the DALI Lab community with member discovery, posts, connections, and rich profiles.",
    url: "https://maghettoni.pythonanywhere.com/",
    codeUrl: "https://github.com/gcl140/dali_social",
    tech: ["Django", "REST API", "Tailwind CSS"],
    type: "fullstack",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Dad Jokes",
    description:
      "A Django-based web application for sharing and enjoying dad jokes with custom styling, likes, comments, and social authentication.",
    url: "https://gcloo.live/",
    codeUrl: "https://github.com/gcl140/dadjokes",
    tech: ["Django", "Google OAuth", "Python", "APIs"],
    type: "fullstack",
    year: "2024",
    image:
      "https://dadblog.co.uk/wp-content/uploads/2024/09/91-best-worst-dad-jokes.jpg",
  },
  {
    name: "Climate Research",
    description:
      "A web-based research presentation platform assessing youth knowledge on climate change mitigation effectiveness.",
    url: "https://climatenyouth.netlify.app/",
    codeUrl: "https://github.com/gcl140/climate-research",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "frontend",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1584266463340-53b684c6ee9c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Eversource; Evergreen AI",
    description:
      "A web-based ML training platform to power generative AI and build on decades of Dartmouth research on student wellness",
    url: "https://eversource.dartmouth.edu/",
    codeUrl: "https://github.com/Dartmouth-Evergreen/EvergreenTranscript",
    tech: ["HTML", "Flask", "JavaScript", "Python", "Bootstrap CSS"],
    type: "fullstack",
    year: "2024",
    image: "https://evergreenai.dartmouth.edu/files/2025/08/Vector.png",
  },
  {
    name: "CS01 Projects",
    description:
      "Collection of programming projects from Dartmouth's CS 1 course including graphics, algorithms, and interactive applications.",
    url: "https://projectpython.net/",
    codeUrl: "https://github.com/gcl140/cs01",
    tech: ["Python", "cs1lib", "OOP"],
    type: "academic",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "GOD.GOALS.GLORY",
    description:
      "A full-featured Django-based e-commerce platform designed for managing products, orders, reviews, testimonials, and user accounts.",
    url: "https://beingthatguy.com/",
    codeUrl: "https://github.com/gcl140/god.goals.glory",
    tech: ["Django", "Tailwind CSS", "E-commerce"],
    type: "fullstack",
    year: "2025",
    image: "https://beingthatguy.com/static/images/run.jpg",
  },
  {
    name: "pdf-reader",
    description:
      "A powerful and user-friendly PDF reader designed to help students and professionals efficiently manage their reading assignments and documents.",
    url: "https://gcl.pythonanywhere.com/",
    codeUrl: "https://github.com/gcl140/pdf-reader",
    tech: ["Django", "Tailwind CSS", "Google Voice API"],
    type: "fullstack",
    year: "2025",
    image:
      "https://www.narakeet.com/assets/howto/2023-03-26-pdf-audio-reader-poster.png",
  },
  {
    name: "IG-Post-Generator",
    description:
      "A powerful auto posting tool designed to help users efficiently manage their Instagram posts and engagement with daily posts for reels.",
    url: "https://www.instagram.com/gcme.mes2025/",
    codeUrl: "https://github.com/gcl140/igmimz",
    tech: ["python", "api", "Authentication"],
    type: "fullstack",
    year: "2025",
    image:
      "https://cdn.prod.website-files.com/64baacfcb337b7364622226f/66fc3cec142d82d7e94725fb_styled-instagram-icon.jpg",
  },
];

// Skills data
const skills = [
  { name: "Python", icon: "fab fa-python", category: "backend", rating: 5 },
  { name: "JavaScript", icon: "fab fa-js", category: "frontend", rating: 4 },
  { name: "Java", icon: "fab fa-java", category: "backend", rating: 4 },
  { name: "C", icon: "fab fa-cuttlefish", category: "backend", rating: 4 },
  { name: "MySQL", icon: "fas fa-database", category: "backend", rating: 4 },
  { name: "Git", icon: "fab fa-git-alt", category: "tools", rating: 5 },
  { name: "Figma", icon: "fa-brands fa-figma", category: "design", rating: 3 },
  { name: "APIs", icon: "fas fa-code", category: "backend", rating: 5 },
  { name: "AWS", icon: "fab fa-aws", category: "cloud", rating: 4 },
  { name: "Docker", icon: "fab fa-docker", category: "devops", rating: 3 },
  { name: "Linux", icon: "fab fa-linux", category: "devops", rating: 4 },
  { name: "Redis", icon: "fas fa-memory", category: "backend", rating: 4 },
  {
    name: "Hugging Face",
    icon: "fas fa-face-smile",
    category: "backend",
    rating: 3,
  },
  {
    name: "PostgreSQL",
    icon: "fas fa-database",
    category: "backend",
    rating: 4,
  },
  { name: "Flask", icon: "fas fa-flask", category: "backend", rating: 5 },
  { name: "Django", icon: "fas fa-leaf", category: "backend", rating: 5 },
  { name: "TypeScript", icon: "fab fa-js", category: "frontend", rating: 3 },
  { name: "Node.js", icon: "fab fa-node-js", category: "backend", rating: 4 },
  { name: "React.js", icon: "fab fa-react", category: "frontend", rating: 4 },
  { name: "Next.js", icon: "fas fa-bolt", category: "frontend", rating: 4 },
  { name: "HTML5", icon: "fab fa-html5", category: "frontend", rating: 5 },
  { name: "CSS3", icon: "fab fa-css3-alt", category: "frontend", rating: 5 },
  {
    name: "Tailwind CSS",
    icon: "fas fa-wind",
    category: "frontend",
    rating: 5,
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    category: "frontend",
    rating: 4,
  },
  { name: "SQLite", icon: "fas fa-database", category: "backend", rating: 4 },
  {
    name: "Adobe Illustrator",
    icon: "fa-solid fa-palette",
    category: "design",
    rating: 3,
  },
  {
    name: "GraphQL",
    icon: "fas fa-code-branch",
    category: "backend",
    rating: 3,
  },
];

// Function to render projects
function renderProjects() {
  const projectsContainer = document.getElementById("projectsContainer");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  // Calculate pagination
  const startIdx = (state.currentProjectsPage - 1) * state.projectsPerPage;
  const endIdx = startIdx + state.projectsPerPage;
  const projectsToShow = githubProjects.slice(startIdx, endIdx);
  state.totalProjectsPages = Math.ceil(
    githubProjects.length / state.projectsPerPage
  );

  projectsToShow.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "flex flex-col gap-6 group cursor-pointer h-full";
    projectCard.onclick = () => window.open(project.url, "_blank");

    projectCard.innerHTML = `
                    <div class="overflow-hidden rounded-lg relative h-64">
                        <img
                            src="${project.image}"
                            alt="${project.name}"
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'"
                        />
                        <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="flex flex-col gap-2 flex-1">
                        <div class="flex items-center justify-between">
                            <h5 class="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                                ${project.name}
                            </h5>
                            <svg class="w-8 h-8 text-black group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </div>
                        <p class="text-secondary text-sm sm:text-base line-clamp-4">${
                          project.description
                        }</p>
                        <div class="flex flex-wrap gap-2 mt-2">
                            ${project.tech
                              .slice(0, 3)
                              .map(
                                (tech) => `
                                <span class="px-3 py-1 bg-primary text-xs sm:text-sm text-white rounded-full">${tech}</span>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                `;

    projectsContainer.appendChild(projectCard);
  });

  // Update pagination info
  updateProjectsPagination();
}

// Function to update projects pagination UI
function updateProjectsPagination() {
  const prevBtn = document.getElementById("prevProjectsBtn");
  const nextBtn = document.getElementById("nextProjectsBtn");
  const pageInfo = document.getElementById("projectsPageInfo");

  if (prevBtn) prevBtn.disabled = state.currentProjectsPage === 1;
  if (nextBtn)
    nextBtn.disabled = state.currentProjectsPage === state.totalProjectsPages;
  if (pageInfo)
    pageInfo.textContent = `Page ${state.currentProjectsPage} of ${state.totalProjectsPages}`;
}

// Function to change projects page
function changeProjectsPage(direction) {
  const newPage = state.currentProjectsPage + direction;
  if (newPage >= 1 && newPage <= state.totalProjectsPages) {
    state.currentProjectsPage = newPage;
    renderProjects();
    // Scroll to projects section
    document
      .getElementById("projectsContainer")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Function to render skills
function renderSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;

  skillsContainer.innerHTML = "";

  // Calculate pagination
  const startIdx = (state.currentSkillsPage - 1) * state.skillsPerPage;
  const endIdx = startIdx + state.skillsPerPage;
  const skillsToShow = skills.slice(startIdx, endIdx);
  state.totalSkillsPages = Math.ceil(skills.length / state.skillsPerPage);

  skillsToShow.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.className =
      "border border-muted rounded-lg p-6 flex flex-col gap-10 items-center justify-between hover:border-primary transition-colors duration-300 h-full";

    // Use the skill's actual rating
    const rating = skill.rating || 3;

    skillCard.innerHTML = `
                    <div class="flex flex-col items-center gap-5">
                        <i class="${
                          skill.icon
                        } text-5xl sm:text-6xl text-primary"></i>
                        <p class="text-lg sm:text-xl font-medium text-center">${
                          skill.name
                        }</p>
                    </div>
                    <div class="flex gap-1">
                        ${Array(5)
                          .fill(0)
                          .map(
                            (_, i) => `
                            <div class="w-2 h-2 rounded-full ${
                              i < rating ? "bg-primary" : "bg-border"
                            }"></div>
                        `
                          )
                          .join("")}
                    </div>
                `;

    skillsContainer.appendChild(skillCard);
  });

  // Update pagination info
  updateSkillsPagination();
}

// Function to update skills pagination UI
function updateSkillsPagination() {
  const prevBtn = document.getElementById("prevSkillsBtn");
  const nextBtn = document.getElementById("nextSkillsBtn");
  const pageInfo = document.getElementById("skillsPageInfo");

  if (prevBtn) prevBtn.disabled = state.currentSkillsPage === 1;
  if (nextBtn)
    nextBtn.disabled = state.currentSkillsPage === state.totalSkillsPages;
  if (pageInfo)
    pageInfo.textContent = `Page ${state.currentSkillsPage} of ${state.totalSkillsPages}`;
}

// Function to change skills page
function changeSkillsPage(direction) {
  const newPage = state.currentSkillsPage + direction;
  if (newPage >= 1 && newPage <= state.totalSkillsPages) {
    state.currentSkillsPage = newPage;
    renderSkills();
    // Scroll to skills section
    document
      .getElementById("skillsContainer")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Function to render experience
function renderExperience() {
  const experienceContainer = document.getElementById("experienceContainer");
  if (!experienceContainer) return;

  experienceContainer.innerHTML = "";

  // Calculate pagination
  const startIdx = (state.currentExperiencePage - 1) * state.experiencePerPage;
  const endIdx = startIdx + state.experiencePerPage;
  const experienceToShow = experiences.slice(startIdx, endIdx);
  state.totalExperiencePages = Math.ceil(
    experiences.length / state.experiencePerPage
  );

  experienceToShow.forEach((exp, index) => {
    const experienceItem = document.createElement("div");
    experienceItem.className =
      "flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8";

    const isHighlighted = exp.current;
    const timelineDotClass = isHighlighted ? "border-primary" : "border-black";
    const timelineDotInnerClass = isHighlighted
      ? "w-1.5 h-1.5 rounded-full bg-primary"
      : "w-1.5 h-1.5 rounded-full";

    experienceItem.innerHTML = `
            <div class="lg:col-span-1">
              <h3 class="text-2xl sm:text-3xl font-bold mb-2 text-black">${
                exp.period
              }</h3>
              <h4 class="text-lg sm:text-xl font-normal text-primary">${
                exp.title
              }</h4>
            </div>

            <div class="lg:col-span-1 ${
              index < experienceToShow.length - 1 ? "timeline-line" : ""
            } pl-7 relative">
              <div class="absolute left-0 top-0 -translate-x-1/2 w-3.5 h-3.5 ${timelineDotClass} bg-white rounded-full flex items-center justify-center border">
                <div class="${timelineDotInnerClass}"></div>
              </div>
              <div>
                <span class="text-xl block mb-1 text-primary">${
                  exp.company
                }</span>
                <p class="text-secondary text-base">${exp.location}</p>
                <p class="text-secondary text-sm mt-1">${exp.type}</p>
              </div>
            </div>

            <div class="lg:col-span-1 lg:pl-8">
              <ul class="space-y-3 experience-bullets-${startIdx + index}">
                ${exp.bullets
                  .map(
                    (bullet, bulletIndex) => `
                  <li class="text-secondary text-base leading-relaxed flex gap-2 ${
                    bulletIndex > 0 ? "hidden" : ""
                  } bullet-item">
                    <span class="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>${highlightTechnicalTerms(bullet)}</span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
              ${
                exp.bullets.length > 1
                  ? `
                <button 
                  class="read-more-btn mt-4 text-primary hover:text-black transition-colors duration-300 font-medium flex items-center gap-2"
                  onclick="toggleExperienceDescription(${startIdx + index})"
                >
                  <span class="read-more-text">Read More</span>
                  <svg class="w-4 h-4 transition-transform duration-300 read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
              `
                  : ""
              }
            </div>
          `;

    experienceContainer.appendChild(experienceItem);
  });

  // Update pagination info
  updateExperiencePagination();
}

// Function to update experience pagination UI
function updateExperiencePagination() {
  const prevBtn = document.getElementById("prevExperienceBtn");
  const nextBtn = document.getElementById("nextExperienceBtn");
  const pageInfo = document.getElementById("experiencePageInfo");

  if (prevBtn) prevBtn.disabled = state.currentExperiencePage === 1;
  if (nextBtn)
    nextBtn.disabled =
      state.currentExperiencePage === state.totalExperiencePages;
  if (pageInfo)
    pageInfo.textContent = `Page ${state.currentExperiencePage} of ${state.totalExperiencePages}`;
}

// Function to change experience page
function changeExperiencePage(direction) {
  const newPage = state.currentExperiencePage + direction;
  if (newPage >= 1 && newPage <= state.totalExperiencePages) {
    state.currentExperiencePage = newPage;
    renderExperience();
    // Scroll to experience section
    document
      .getElementById("experienceContainer")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Function to toggle experience description
function toggleExperienceDescription(index) {
  const bulletsContainer = document.querySelector(
    `.experience-bullets-${index}`
  );
  if (!bulletsContainer) return;

  const bullets = bulletsContainer.querySelectorAll(".bullet-item");
  const button = bulletsContainer.parentElement.querySelector(".read-more-btn");
  const buttonText = button.querySelector(".read-more-text");
  const buttonIcon = button.querySelector(".read-more-icon");

  // Check if currently expanded
  const isExpanded = bullets[1] && !bullets[1].classList.contains("hidden");

  // Toggle all bullets except the first one
  bullets.forEach((bullet, idx) => {
    if (idx > 0) {
      bullet.classList.toggle("hidden");
    }
  });

  // Update button text and icon
  if (isExpanded) {
    buttonText.textContent = "Read More";
    buttonIcon.style.transform = "rotate(0deg)";
  } else {
    buttonText.textContent = "Read Less";
    buttonIcon.style.transform = "rotate(180deg)";
  }
}

// Function to render interests
function renderInterests() {
  const interestsContainer = document.getElementById("interestsContainer");
  if (!interestsContainer) return;

  // Target the grid div inside the container
  const gridContainer = interestsContainer.querySelector(".grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  interests.forEach((interest) => {
    const interestCard = document.createElement("div");
    interestCard.className =
      "group h-full bg-white rounded-lg overflow-hidden border border-muted hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer";

    interestCard.innerHTML = `
            <div class="relative overflow-hidden h-64 sm:h-72">
              <img
                src="${interest.image}"
                alt="${interest.name}"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onerror="this.src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'"
              />
              <!-- Title overlay - always visible -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div class="flex items-center gap-3 text-white">
                  <i class="${interest.icon} text-2xl"></i>
                  <h5 class="text-xl sm:text-2xl font-semibold">
                    ${interest.name}
                  </h5>
                </div>
              </div>
              <!-- Description overlay - visible on hover -->
              <div class="absolute inset-0 bg-black/70 p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="text-center text-white space-y-4">
                  <i class="${interest.icon} text-4xl"></i>
                  <h5 class="text-xl sm:text-2xl font-bold">
                    ${interest.name}
                  </h5>
                  <p class="text-sm sm:text-base leading-relaxed">${interest.description}</p>
                </div>
              </div>
            </div>
          `;

    gridContainer.appendChild(interestCard);
  });
}

// Function to toggle interests visibility
function toggleInterests() {
  const container = document.getElementById("interestsContainer");
  const toggleText = document.getElementById("interestsToggleText");
  const toggleIcon = document.getElementById("interestsToggleIcon");
  const isHidden = container.classList.contains("hidden");

  if (isHidden) {
    container.classList.remove("hidden");
    toggleText.textContent = "Hide My Interests";
    toggleIcon.style.transform = "rotate(180deg)";
    // Render interests on first open - check the grid div
    const gridContainer = container.querySelector(".grid");
    if (gridContainer && gridContainer.children.length === 0) {
      renderInterests();
    }
    // Smooth scroll to interests
    setTimeout(() => {
      container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  } else {
    container.classList.add("hidden");
    toggleText.textContent = "View My Interests";
    toggleIcon.style.transform = "rotate(0deg)";
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderSkills();
  renderExperience();
});

// Floating Buttons Functionality
// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide back to top button based on scroll position
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.pointerEvents = "auto";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.pointerEvents = "none";
  }
});
// Initially hide the button
backToTopBtn.style.opacity = "0";
backToTopBtn.style.pointerEvents = "none";



const downloadPdfBtn = document.getElementById("downloadPdfBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    downloadPdfBtn.style.opacity = "1";
    downloadPdfBtn.style.pointerEvents = "auto";
  } else {
    downloadPdfBtn.style.opacity = "0";
    downloadPdfBtn.style.pointerEvents = "none";
  }
});
// Initially hide the button
downloadPdfBtn.style.opacity = "0";
downloadPdfBtn.style.pointerEvents = "none";


// Download Resume as PDF
function downloadResumePDF() {
  const downloadBtn = document.getElementById("downloadPdfBtn");
  const originalContent = downloadBtn.innerHTML;

  // Show loading state
  downloadBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin text-sm"></i><span class="text-sm font-medium hidden sm:inline ml-2">Downloading...</span>';
  downloadBtn.disabled = true;

  // Create a temporary link to download the PDF file
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Update this path to your actual PDF file location
  link.download = "Gift_Christian_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Restore button after a short delay
  setTimeout(() => {
    downloadBtn.innerHTML = originalContent;
    downloadBtn.disabled = false;
  }, 1000);
}

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop the form from submitting normally

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("https://maghettoni.com/home/send-gift-text/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, message }),
    });

    const data = await res.json();

    Toastify({
      text: data.message,
      duration: 3000,
      gravity: "top",
      position: "right",
      close: true,
      backgroundColor: data.status === "success" ? "green" : "red",
    }).showToast();

    // Optionally, reset the form after successful send
    if (data.status === "success") form.reset();
  } catch (err) {
    Toastify({
      text: "Something went wrong. Try again.",
      duration: 3000,
      gravity: "top",
      position: "right",
      close: true,
      backgroundColor: "red",
    }).showToast();
    console.error(err);
  }
});

form.addEventListener("submit", (e) => {
  const response = grecaptcha.getResponse();

  if (response.length === 0) {
    e.preventDefault();
    Toastify({
      text: "Please complete the reCAPTCHA first!",
      duration: 3000,
      gravity: "top",
      position: "right",
      close: true,
      backgroundColor: "red",
    }).showToast();
  }  else {
    const token = 'what you lookin at?';
    console.log("Form ready to submit with token:", token);
  };
});
