import ExpCard from "./ExpCard";

export const Experience = () => {
  const EXPERIENCES = [
    {
      time: "June 2024 - Present",
      title: "Graduate Course Assistant",
      company: "University of Illinois Urbana-Champaign",
      description: [
        "Assisted in teaching CS411 - Database Systems, supporting students in their learning journey by answering questions and monitoring their progress",
        "Designed, tested, and graded coursework to ensure alignment with course objectives and student learning outcomes",
        "Collaborated closely with teaching staff to enhance course content and delivery, contributing to a dynamic learning environment",
      ],
      techStacks: ["Sql", "MySql", "MongoDB", "Neo4j"],
      url: "https://illinois.edu/",
    },
    {
      time: "Jun 2021 - Aug 2023",
      title: "Full Stack Software Engineer",
      company: "Foundry Co",
      description: [
        "Engaged in full-stack web development and maintenance for a high-traffic site, serving over 50,000 users, utilizing Spring and Vue.js",
        "Collaborated across teams, including UX and engineering, to plan and implement numerous in-demand features across 6 apps, utilizing technologies like Next.js, Node.js, Nest.js, and React.js",
        "Independently developed a multi-platform Progressive Web App using Next.js and a native mobile app using Expo to help people form networking habits",
        "Teamed up with another engineer to rapidly create a Slack app to providing an efficient solution for recording pool matches, leveraging Supabase serverless functions",
        "Improved page response times by over 10 seconds by refactoring a complex express.js and MongoDB back-end into Nest.js and Prisma",
        "Coordinated with the team to define execution plans and efficiently managed tasks using Jira and Favro",
        "Professionally interacted with clients to grasp their needs and provide daily technical assistance",
      ],
      techStacks: [
        "Javascript",
        "Typescript",
        "React.js",
        "Node.js",
        "Next.js",
        "Nest.js",
        "Expo",
        "Mongodb",
        "Supabase",
        "Postgresql",
        "Spring",
        "Vue.js",
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
      techStacks: ["Linux", "Fortran"],
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
      techStacks: ["Linux", "Fortran"],
      url: "https://www.stthomas.edu",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {EXPERIENCES.map((exp, index) => (
        <ExpCard
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
