import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export const LeftPanel = () => {
  const resumeUrl = "/ZhiWang_Resume.pdf";

  return (
    <div className="flex flex-col justify-between py-24 sticky top-0 md:h-screen md:pb-20">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          &quot;Jake&quot; Zhi Wang
        </div>
        <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Software Engineer
        </div>
        <p className="text-slate-400">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <a
          href={resumeUrl}
          target="_blank"
          className="text-lg tracking-wider font-bold text-slate-200 hover:underline hover:text-teal-300"
        >
          View My Resume
          <ArrowOutwardIcon style={{ fontSize: 20 }} />
        </a>
      </div>

      <div className="flex flex-col gap-4 sm:py-4">
        {/* <a
          href="mailto:jakewangzhi@gmail.com"
          target="_blank"
          className="text-slate-400 cursor-pointer hover:text-slate-200"
        >
          <EmailIcon fontSize="large" />
        </a> */}
        <a
          href="mailto:jakewangzhi@gmail.com"
          target="_blank"
          className="flex items-center gap-1 tracking-widest font-bold text-slate-400 hover:underline hover:text-teal-300"
        >
          <p>jakewangzhi@gmail.com</p>
          <SendIcon fontSize="small" />
        </a>
        <div className="flex gap-4">
          <a
            href="https://github.com/Jake-WangZhi"
            target="_blank"
            className="text-slate-400 cursor-pointer hover:text-slate-200"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/jake0wang/"
            target="_blank"
            className="text-slate-400 cursor-pointer hover:text-slate-200"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};
