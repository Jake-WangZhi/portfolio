import Card from "./Card";

export const Experience = () => {
  const EXPERIENCES = [
    {
      time: "June 2024 - Present",
      title: "Graduate Course Assistant",
      company: "University of Illinois Urbana-Champaign",
      description: [
        "Assisted in teaching Database Systems, supporting students in their learning journey by answering database-related questions and monitoring their progress",
        "Designed, tested, and graded SQL, MySQL, MongoDB, and Neo4j machine problems to ensure alignment with course objectives and student learning outcomes",
        "Collaborated closely with teaching staff to enhance course content and delivery, contributing to a dynamic learning environment",
      ],
      techStacks: ["Sql", "NoSQL", "MySql", "MongoDB", "Neo4j", "GitHub"],
      url: "https://illinois.edu/",
    },
    {
      time: "Jun 2021 - Aug 2023",
      title: "Full Stack Software Engineer",
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
        "Javascript",
        "Typescript",
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
