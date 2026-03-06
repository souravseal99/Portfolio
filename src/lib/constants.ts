export const DEV_TERMINOLOGY = {
    about: "bio.md",
    experience: "career.log",
    projects: "apps.json",
    skills: "arsenal.txt",
    contact: "connect.sh",
    education: "edu.conf",
    boot: "npm start",
};

export const FILE_SYSTEM = {
    "bio.md": "about",
    "career.log": "experience",
    "apps.json": "projects",
    "arsenal.txt": "skills",
    "connect.sh": "contact",
    "edu.conf": "education",
};

export const RESUME_DATA = {
    name: "Sourav Seal",
    title: "Full-Stack Developer",
    location: "Kolkata, India",
    email: "sourav.seal1999@gmail.com",
    github: "souravseal99",
    linkedin: "in/sourav-seal",
    phone: "+91 6296822691",
    bio: [
        "Full-stack engineer with 3+ years of experience bridging the gap between robust backends and high-fidelity frontends.",
        "Currently building PROD-Ready web systems at CloudKaptan, with a deep focus on TypeScript, React, and Node.js.",
        "Dedicated open-source contributor and Hacktoberfest maintainer, driven by the philosophy that scalable architecture starts with clean, maintainable code.",
    ],
    experience: [
        {
            company: "CloudKaptan",
            role: "Software Engineer",
            duration: "June 2023 -- Present",
            location: "Kolkata, India",
            points: [
                "Built and maintained full-stack web applications using React, Node.js, and MongoDB/PostgreSQL.",
                "Developed RESTful APIs and integrated third-party services for client projects.",
                "Implemented JWT authentication systems and optimized database queries for performance.",
                "Collaborated with cross-functional teams to deliver feature-rich applications on time.",
            ],
        },
    ],
    projects: [
        {
            title: "RoomMate",
            summary: "Makes shared living space less chaotic_.",
            description: "Full-stack web application designed to help roommates manage shared living more easily. It features modules for tracking expenses, assigning chores, and managing shared inventory with real-time household statistics.",
            stack: "React, Vite, TypeScript, Express, Prisma, PostgreSQL",
            links: {
                github: "https://github.com/souravseal99/RoomMate",
            },
            featured: true,
            stats: "182 commits, 26 forks, 12.4k lines changed",
            ownership: 98,
        },
        {
            title: "FunwithPhysics",
            summary: "Complex physics calculations made simple_.",
            description: "An educational physics calculator that allows users to enter values and obtain results instantly using verified formulas. Features a responsive UI and accurate calculation backend.",
            stack: "HTML5, CSS3, React, Bootstrap, PHP",
            links: {
                github: "https://github.com/souravseal99/FunwithPhysics",
            },
            stats: "1.5k commits, 214 forks, 8.2k lines changed",
            ownership: 94,
        },
        {
            title: "E-Com",
            summary: "Complete E-commerce solution with backend and frontend_.",
            description: "A comprehensive MERN stack e-commerce platform featuring a robust backend API and a dynamic frontend. Includes product management, shopping cart functionality, and user authentication.",
            stack: "JavaScript, React, Node.js, Express, MongoDB",
            links: {
                github: "https://github.com/souravseal99/E-Com",
            },
            stats: "96 commits, 0 forks, 4.8k lines changed",
            ownership: 88,
        },
    ],
    skills: {
        frontend: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "React Native"],
        backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "REST APIs"],
        tools: ["Git", "GitHub", "Docker", "Postman", "Figma", "Linux"],
        languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
    },
    education: {
        degree: "Bachelor of Technology in Computer Science",
        duration: "2019 -- 2023",
        institution: "Maulana Abul Kalam Azad University of Technology",
        location: "West Bengal, India",
    },
    certifications: [
        "Hacktoberfest Maintainer & Contributor",
        "Winter of Code Social 2025 - Project Admin",
        "DevIncept Contribution Program 2021",
        "Mexili Winter of code - 2021",
    ],
};
