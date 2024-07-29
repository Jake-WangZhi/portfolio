import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const PROJECTS = [
    {
      time: "May 2023 - Present",
      title: "Lil Networking",
      description: [
        "Designed and implemented a multi-platform Progressive Web App using Next.js and a native mobile app using Expo to help people form networking habits",
        "Created user-friendly interfaces using TailwindCSS and Material-UI to facilitate easy navigation and interaction",
        "Utilized OAuth login thru LinkedIn and Google for secure user authentication and personalized configurations",
        "Leveraged Prisma ORM for seamless interaction with PostgreSQL, enabling efficient data management and retrieval",
        "Enabled Progressive Web App (PWA) capabilities for an enhanced user experience on all devices",
        "Set up push notifications using web-push to keep users engaged and informed about networking opportunities",
        "Deployed the application and added analytics on Vercel to better understand user preferences",
      ],
      techStacks: [
        "Typescript",
        "Next.js",
        "React",
        "PostgreSQL",
        "Vercel",
        "TailwindCSS",
        "MUI",
        "Prisma",
        "Expo",
      ],
      url: "https://lil-networking.vercel.app/",
    },
    {
      time: "April 2024 - May 2024",
      title: "StockScope360",
      description: [
        "Designed and implemented a comprehensive stock market visualization application with a user-friendly interface",
        "Accumulated stock prices into a single graph, enabling users to compare and analyze different stocks efficiently",
        "Utilized Single Sign-On (SSO) through Google for secure user authentication and personalized configurations",
        "Developed features allowing users to view stock prices for various stocks in one place, customize time frames and data frequencies, and create personalized lists of favorite stocks",
        "Implemented currency conversion for stock prices and integrated a search bar for detailed stock information",
        "Stored and managed all stock price data and user information using MySQL on Google Cloud Platform (GCP)",
        "Deployed the application on Vercel",
      ],
      techStacks: [
        "Typescript",
        "Next.js",
        "React",
        "MySql",
        "GCP",
        "Vercel",
        "TailwindCSS",
        "MUI",
      ],
      url: "https://stockscope360.vercel.app",
    },
    {
      time: "Dec 2022",
      title: "Chinese Tutoring Service Website",
      description: [
        "Designed and implemented a comprehensive static website for a Chinese language tutor using the Docusaurus framework",
        "Developed user-friendly interfaces to facilitate easy navigation and access to tutoring resources",
        "Integrated scheduling, booking, and emailing functionalities to streamline the tutor's appointment management",
        "Implemented functionality allowing the client to update YouTube lessons on the site, utilizing the serverless function on Supabase to interact with YouTube lesson info data",
        "Collaborated with the client to gather requirements and ensure the website met their needs",
        "Deployed the website on Netlify",
      ],
      techStacks: ["Javascript", "React", "Supabase", "Netlify", "Docusaurus"],
      url: "https://chinesetutoringservice.netlify.app",
    },
    // {
    //   time: "Nov 2020 - Dec 2020",
    //   title: "My Own Designed Calendar Website",
    //   description: [
    //     "Built a basic web-server using Node.js (Express) and a web-client using Ajax & JavaScript",
    //     "Designed and implemented a table to display the user's calendar using HTML & CSS",
    //     "Implemented a form to allow users to easily add events to the calendar using HTML & CSS",
    //     "Upgraded the website to add a user administration page with functionality that enables superusers to add new users, delete users, or update information on existing users, using XML & SQL & MySQL",
    //     "Deployed the website to Heroku",
    //   ],
    //   techStacks: [
    //     "Javascript",
    //     "Express.js",
    //     "Ajax",
    //     "HTML",
    //     "CSS",
    //     "XML",
    //     "MYSQL",
    //     "Heroku",
    //   ],
    //   url: "https://github.com/Jake-WangZhi/Calendar-Website",
    // },
    // {
    //   time: "Sep 2020 - Dec 2020",
    //   title: "Pronunciation Tool for Learning Tonal Languages",
    //   description: [
    //     "Collaborated with my team to upgrade the existing pronunciation tool and increase user-friendliness by organizing all features of the program to be displayed in a single window",
    //     "Created an upgrade to the program to further improve user experience; this upgrade integrated a tone prediction feedback algorithm, automatically analyzed the audio file that the user recorded, and interpreted the recorded tone using the trained Convolutional Neural Network (CNN)",
    //     "Improved user experience by providing the user with a score between 0 and 100, and textual feedback based on the difference between the user and reference pitch contours",
    //     "Implemented a custom search bar for word searching and the “shuffle” function for selecting words randomly, which further improved the user's experience",
    //   ],
    //   techStacks: ["Python"],
    //   url: "https://github.com/Jake-WangZhi/PronunicationTool",
    // },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-2xl max-sm:py-4 max-sm:z-50 max-sm:sticky max-sm:top-0 max-sm:bg-background">
        PERSONAL PROJECTS
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
