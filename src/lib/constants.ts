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
            description: "Full-stack web application for managing shared living spaces - expenses, chores, inventory.",
            stack: "React + Vite + TypeScript, Express, Prisma, PostgreSQL",
            links: {
                github: "https://github.com/souravseal99/RoomMate",
            },
            featured: true,
            stats: "182+ commits, 27 forks",
        },
        {
            title: "FunwithPhysics",
            description: "Contributed to an educational physics application.",
            stack: "JavaScript, React",
            links: {
                github: "https://github.com/souravseal99/FunwithPhysics",
            },
        },
        {
            title: "E-Com",
            description: "E-commerce platform built with JavaScript technologies.",
            stack: "JavaScript, React",
            links: {
                github: "https://github.com/souravseal99/E-Com",
            },
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
