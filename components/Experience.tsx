import Card from "./Card";

export const Experience = () => {
  const EXPERIENCES = [
    {
      time: "May 2025 - Present",
      title: "Founding Engineer",
      company: "OpenLaw",
      description: [
        "Spearheaded full-stack development initiatives using Node.js, Next.js, TypeScript, and Firebase, delivering performant, scalable legal-tech features that enhance attorney-client interactions and reduce operational complexity",
        "Championed engineering best practices to optimize frontend responsiveness and backend reliability—driving down user friction and shaping the foundation of a platform serving underserved legal populations",
        "Collaborated closely with product and design teams in an in-person, high-ownership environment to iterate rapidly and deploy code that directly influenced OpenLaw's growth and vision",
      ],
      techStacks: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
        "NoSQL",
        "Material UI",
        "Git",
        "GitHub",
      ],
      url: "https://www.openlaw.com/",
    },
    {
      time: "May 2024 - May 2025",
      title: "Lead Graduate Course Assistant - Database Systems",
      company: "University of Illinois Urbana-Champaign",
      description: [
        "Support 500+ students in Database Systems by answering database-related questions, providing guidance, and tracking their progress",
        "Design, test, and grade 100+ machine problems in SQL, MySQL, MongoDB, and Neo4j, ensuring alignment with course objectives and student learning outcomes",
        "Collaborate with teaching staff to refine course content and delivery, fostering an engaging and effective learning environment",
      ],
      techStacks: [
        "Sql",
        "NoSQL",
        "MySql",
        "MongoDB",
        "Neo4j",
        "Git",
        "GitHub",
      ],
      url: "https://illinois.edu/",
    },
    {
      time: "Sep 2024 - Dec 2024",
      title: "Tech Lead - Volunteer",
      company: "Illinois Enactus - Jila",
      description: [
        "Led the development of Jila, a multilingual, community-driven app serving 1,000+ Q’anjob’al users, using Next.js, React Native, and PostgreSQL, in collaboration with a cross-functional team",
        "Designed the core app architecture, optimizing database design, API integration, and scalability to streamline team-led feature development and seamless feature integration",
        "Mentored and delegated tasks to 5 junior developers, fostering their technical growth while ensuring alignment with project objectives and cross-functional collaboration",
      ],
      techStacks: [
        "React Native",
        "Expo",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "PostgreSQL",
        "AWS",
        "Vercel",
        "Git",
        "GitHub",
      ],
      url: "https://www.illinoisenactus.com/jila",
    },
    {
      time: "Jun 2021 - Aug 2023",
      title: "Software Engineer",
      company: "Foundry Co",
      description: [
        "Operated efficiently in a fast-paced startup environment, managing up to 8 different projects, requiring the use of various languages and tech stacks",
        "Collaborated with UX and engineering teams to plan and implement numerous in-demand features across 6 concurrent apps, employing technologies such as Next.js, Node.js, Nest.js, and React.js",
        "Engaged in full-stack web development and maintenance for a high-traffic Java site serving over 50,000 users with Spring and Vue.js",
        "Implemented a client portal website within a month to improve communication and better monitor project progress between project managers and clients, using React.js & Node.js",
        "Enhanced features and resolved bugs for a biking mobile app on the App Store, utilizing React Native and Expo for the front-end and NestJS and PostgreSQL for the back-end, integrating Google Maps for route calculations",
        "Developed a Slack app within two weeks, providing an efficient solution for recording pool matches through Supabase serverless functions",
        "Reduced web page response times by over 10 seconds by refactoring a complex Express.js & MongoDB back-end to Nest.js & PostgreSQL, leveraging Prisma ORM for data management and Jest for unit testing",
        "Contributed to software design, conducted code reviews, and provided constructive feedback to improve code quality and maintainability",
        "Designed and built quality RESTful APIs for various applications and integrated APIs across multiple projects",
        "Coordinated with the team to define execution plans and managed tasks effectively using Jira & Favro",
        "Interacted professionally with clients to understand their needs and provide daily technical assistance",
      ],
      techStacks: [
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL",
        "React.js",
        "Node.js",
        "Next.js",
        "Nest.js",
        "Express.js",
        "Expo",
        "React Native",
        "Mongodb",
        "PostgreSQL",
        "Firebase",
        "Supabase",
        "Spring",
        "Vue.js",
        "Redux",
        "Jest",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Heroku",
        "BitBucket",
        "GitLab",
        "Monorepo",
        "Jira",
        "Favro",
      ],
      url: "https://x.com/foundrymakes",
    },
    {
      time: "Feb 2018 - Aug 2018",
      title: "Undergraduate Research Assistant",
      company: "University of St. Thomas",
      description: [
        "Studied defects in ferroelectric materials by analyzing data and change-related parameters in Fortran",
        "Used Matlab to develop graphs to map data, and assist the team to better visualize the data",
        "Submitted formulas to Minnesota SuperComputing Institute for more efficient processing",
        "Collaborated with other research assistants to combine and analyze our results",
        "Designed and wrote a manual for further research",
      ],
      techStacks: ["Linux", "Fortran", "Matlab"],
      url: "https://www.stthomas.edu",
    },
    {
      time: "Jul 2017 - Aug 2017",
      title: "Undergraduate Research Assistant",
      company: "University of St. Thomas",
      description: [
        "Simulated various magnetic fields to research the relationship between different shapes of magnetic materials and their unique properties on OOMMF (The Object Oriented Micromagnetic Framework)",
        "Independently recorded, analyzed and summarized results; contributed to published research",
        "Designed professional presentations to present findings to the professor and the research team",
      ],
      techStacks: ["Linux", "Fortran", "Matlab"],
      url: "https://www.stthomas.edu",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-2xl max-sm:py-4 max-sm:z-50 max-sm:sticky max-sm:top-0 max-sm:bg-background">
        EXPERIENCE
      </div>
      {EXPERIENCES.map((exp, index) => (
        <Card
          key={index}
          time={exp.time}
          title={exp.title}
          company={exp.company}
          description={exp.description}
          techStacks={exp.techStacks}
          url={exp.url}
        />
      ))}
    </div>
  );
};
