export interface ProfileTitle {
  label: string;
  color: string; // Tailwind color classes: bg, text, border
}

export const profileTitles: ProfileTitle[] = [
  {
    label: 'Software Engineer',
    color: 'bg-amber-100/80 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-500/30',
  },
  {
    label: 'Fullstack Engineer',
    color: 'bg-indigo-100/80 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-500/30',
  },
  {
    label: 'AI Engineer',
    color: 'bg-emerald-100/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-500/30',
  },
];

export const profileInfo = {
  name: 'Julius Dsouza',
  /** Long-form one-liner (used in metadata / og). */
  tagline: 'Builds human-first products at scale.',
  /** Three-part tagline for the home hero: lead + highlighted phrase + trail. */
  taglineParts: {
    lead: 'Builds',
    highlight: 'human-first',
    trail: 'products at scale.',
  },
  bio: "I'm a Senior Software Engineer specializing in scalable systems, automation, and AI-powered products. With experience across web, mobile, cloud, and platform engineering, I build solutions that streamline operations, accelerate development, and create exceptional user experiences.",
  currentRole: 'Software Engineer at Meta',
  focus: {
    title: 'Platform & Product Engineering',
    description: 'Building scalable systems, intelligent workflows, and AI-powered products that drive business impact.',
  },
  stack: {
    title: 'Systems, Workflows & Intelligence',
    description: 'Web, mobile, cloud, automation, and AI technologies powering modern digital products.',
  },
  openTo: 'Open to meaningful collaborations, mentoring, and ambitious product ideas.',
  social: {
    github: 'https://github.com/KingJulius',
    linkedin: 'https://www.linkedin.com/in/julius-dsouza/',
    email: 'jsdsz1996@gmail.com',
  },
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
  accent: string; // Tailwind color key: blue, violet, emerald, amber, rose, cyan, slate
}

export const experiences: Experience[] = [
  {
    company: "Meta",
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    location: "California, USA",
    description: [
      "Built and scaled CRUD applications, dashboards, and tracking systems used by several teams, reducing manual workflow time and improving cross-functional operational efficiency.",
      "Developed a testing automation pipeline that asynchronously generates test cases on a daily basis, increasing test coverage across critical workflows, reducing manual QA efforts, and accelerating release cycles.",
      "Shipped a project intelligence system leveraging an AI agent to aggregate information from several internal workstream data channels into insights, reducing manual data extraction and improving cross‑team visibility."
    ],
    tech: ["React", "TypeScript", "Python", "JavaScript", "PHP", "Hack"],
  },
  {
    company: "Apple",
    role: "Software Engineer",
    period: "Jan 2024 – Jul 2025",
    location: "California, USA",
    description: [
      "Engineered and led the development of several projects for the Apple Store and Apple Home applications on WeChat using React.js, Redux, TypeScript, Sass, and the WeChat mini‑program framework.",
      "Led the migration of a large‑scale application from Webpack to Vite, achieving a reduction in build time and an optimization in production bundle size, while enhancing application performance and developer efficiency.",
      "Leveraged Jest and Storybook to boost test coverage and integrated Adobe Analytics, increasing data accuracy for marketing decisions through detailed event tracking and user behavior analysis for multiple applications.",
      "Orchestrated and refined dynamic server‑side templates with Java and the Apache Velocity Template Engine, to generate custom, data‑driven content for various user flows.",
    ],
    tech: ["React Native", "TypeScript", "Swift", "Node.js"],
  },
  {
    company: "Centene Corporation",
    role: "Application Dev Engineer 1",
    period: "Oct 2023 – Dec 2023",
    location: "California, USA",
    description: [
      "Led the development of a log monitoring and analytics feature for the AmBetter Mobile App, to accelerate troubleshooting in real-time. Achieved a reduction in incident resolution time and deployed the solution using AWS Lambda to store logs using an S3 bucket.",
      "Collaborated with the design team to build a unified UI design system by developing a complete framework of reusable CSS styles and by creating modular React Native components using gluestack‑ui, which streamlined the development and ensured a consistent design across several applications.",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    company: "Abbott Laboratories",
    role: "Software Developer",
    period: "Apr 2023 – Oct 2023",
    location: "California, USA",
    description: [
      "Devised UI features for Lingo, a cross‑platform application using React Native and TypeScript, and conducted automated testing with Jest and Appium, resulting in a reduction in crashes and enhanced user experience.",
      "Designed and implemented REST and GraphQL APIs to optimize query mechanisms for a sensor monitoring dashboard, decreasing data retrieval time and enabling faster access to key product metrics.",
      "Enhanced data precision and user impression tracking by integrating Analytics with the Lingo app, resulting in an increase in data accuracy, and informed data‑driven decision‑making."
    ],
    tech: ["React Native", "TypeScript", "Python", "AWS"],
  },
  {
    company: "NBA",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Aug 2022",
    location: "New York, USA",
    description: [
      "Engineered a bug reporting tool for the NBA Application for Smart TVs utilizing the Azure DevOps REST API,  and streamlined the reporting process. This initiative resulted in a noteworthy reduction in operational overhead and significantly improved issue resolution efficiency.",
      "Constructed custom components and features for the Next.js application to improve user experience, and enabled personalized content, targeted recommendations, and push notifications.",
    ],
    tech: ["React", "JavaScript", "Node.js"],
  },
  {
    company: "KPMG",
    role: "Analyst",
    period: "Jul 2018 – Aug 2020",
    location: "Bengaluru, India",
    description: [
      "Spearheaded the development of a library portal for the Digital Automation team, driving an increase in monthly active user engagements across multiple cities.",
      "Built a MERN stack web application and integrated an Object Detection Model to extract details from purchase and sales receipts, achieving a reduction in incorrect entries, and improved data accuracy.",
      "Collaborated with HR to create interactive walkthroughs and custom task lists for an onboarding application, resulting in a reduction in onboarding time for new employees.",
      "Actively participated in ML projects by assisting in data preprocessing, model training, and evaluation, contributing to the development of accurate predictive models.",
    ],
    tech: ["Python", "Java", "SQL", "Azure"],
  },
  {
    company: "Honeywell",
    role: "Software Development Intern",
    period: "Jan 2018 – Jun 2018",
    location: "Bengaluru, India",
    description: [
      "Created a visually engaging landing page for the Digital Technology Team, incorporating interactive elements, increasing conversion rate, and click‑through rate.",
      "Streamlined the vendor purchase tracking process with a real‑time expense visibility web application, achieving a reduction in overhead costs, and improved overall efficiency.",
      "Developed custom data pipelines with Python, Pandas, and Apache Airflow, automating data extraction and transformation processes, reducing data preparation time.",
    ],
    tech: ["Python", "Java", "SQL", "ETL"],
  },
  {
    company: "Elitabi",
    role: "Web Development Intern",
    period: "May 2017 - Jun 2017",
    location: "Kuwait",
    description: [
      "Collaborated with the development team to create a visually appealing and user-friendly interface for an e-commerce website.",
      "Developed and maintained the front end of the e-commerce website, ensuring that the user interface was optimized for speed, efficiency, and ease of use while adhering to best practices in web development.",
      "Conducted rigorous testing and debugging to ensure that the website was fully functional and error-free, and worked closely with the development team to address any issues that arose during the development process."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    company: "Xius",
    role: "Intern",
    period: "May 2016 - Jun 2016",
    location: "Hyderabad, India",
    description: [
      "Assisted the development team in creating technical documentation and user manuals for the socket programming application, helping to ensure that end-users could easily understand and utilize the application's features and functionality.",
      "Participated in code reviews and provided feedback to the development team to improve the quality, readability, and maintainability of the application's codebase.",
      "Researched emerging trends and best practices in socket programming, network protocols, and related technologies, and provided insights and recommendations to the development team to help optimize the application's performance and functionality."
    ],
    tech: ["HTML", "CSS", "Java"],
  },
];

export interface Education {
  school: string;
  degree: string;
  /** Used for chronological sorting alongside experiences. Same format as Experience.period. */
  period: string;
}

export const education: Education[] = [
  {
    school: "New York University",
    degree: "Master of Science in Computer Engineering",
    period: "Jan 2021 – Dec 2022",
  },
  {
    school: "Manipal Academy of Higher Education",
    degree: "Bachelor of Technology in Computer Science",
    period: "Aug 2014 – May 2018",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "PHP"],
    icon: "code",
    accent: "blue",
  },
  {
    category: "Frontend",
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Redux"],
    icon: "layout",
    accent: "violet",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "Spring", "Hack"],
    icon: "server",
    accent: "emerald",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
    icon: "database",
    accent: "amber",
  },
  {
    category: "ML & AI",
    skills: ["TensorFlow", "PyTorch"],
    icon: "brain",
    accent: "rose",
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Azure", "Linux", "Ubuntu"],
    icon: "cloud",
    accent: "cyan",
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Claude Code", "Codex"],
    icon: "wrench",
    accent: "slate",
  },
  {
    category: "Engineering Craft",
    skills: [
      "System Design",
      "Distributed Systems",
      "API Design",
      "Performance Optimization",
      "Code Review",
      "Testing Strategy",
      "CI/CD",
      "Observability",
      "Technical Mentorship",
      "Agile / Scrum",
      "AI Workflows"
    ],
    icon: "compass",
    accent: "indigo",
  },
];
