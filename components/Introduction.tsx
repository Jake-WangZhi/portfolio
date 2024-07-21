import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const Introduction = () => {
  const resumeUrl = "/ZhiWang_Resume.pdf";

  return (
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
  );
};