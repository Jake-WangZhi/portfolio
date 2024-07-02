import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 sm:py-4">
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
          className="text-slate-400 cursor-pointer hover:text-teal-300"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/jake0wang/"
          target="_blank"
          className="text-slate-400 cursor-pointer hover:text-teal-300"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};
