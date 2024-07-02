import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const PROJECTS = [
    {
      time: "Sep 2020 - Dec 2020",
      title: "Pronunciation Tool for Learning Tonal Languages",
      description: [
        "Collaborated with my team to upgrade the existing pronunciation tool and increase user-friendliness by organizing all features of the program to be displayed in a single window",
        "Created an upgrade to the program to further improve user experience; this upgrade integrated a tone prediction feedback algorithm, automatically analyzed the audio file that the user recorded, and interpreted the recorded tone using the trained Convolutional Neural Network (CNN)",
        "Improved user experience by providing the user with a score between 0 and 100, and textual feedback based on the difference between the user and reference pitch contours",
        "Implemented a custom search bar for word searching and the “shuffle” function for selecting words randomly, which further improved the user's experience",
      ],
      techStacks: ["Python"],
      url: "https://github.com/Jake-WangZhi/PronunicationTool",
    },
    {
      time: "Nov 2020 - Dec 2020",
      title: "My Own Designed Calendar Website",
      description: [
        "Built a basic web-server using Node.js (Express) and a web-client using Ajax & JavaScript",
        "Designed and implemented a table to display the user's calendar using HTML & CSS",
        "Implemented a form to allow users to easily add events to the calendar using HTML & CSS",
        "Upgraded the website to add a user administration page with functionality that enables superusers to add new users, delete users, or update information on existing users, using XML & SQL & MySQL",
        "Deployed the website to Heroku",
      ],
      techStacks: [
        "Javascript",
        "Express.js",
        "Ajax",
        "HTML",
        "CSS",
        "XML",
        "MYSQL",
        "Heroku",
      ],
      url: "https://github.com/Jake-WangZhi/Calendar-Website",
    },
    {
      time: "Jun 2020",
      title: "Multi-agent Flocking Simulation",
      description: [
        "Coded in Java to create a shoal of simulated fish with flocking behavior in Processing",
        "Designed a game mode so that users can interact with the fish, control a shark chasing the fish, and place obstacles for the fish to swim around",
        "build a website to showcase the project using Google Sites",
      ],
      techStacks: ["Java", "Processing"],
      url: "https://github.com/Jake-WangZhi/Multi-agent-Flocking-Simulation",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-2xl">
        PROJECTS
      </div>
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          time={project.time}
          title={project.title}
          description={project.description}
          techStacks={project.techStacks}
          url={project.url}
        />
      ))}
    </div>
  );
};
