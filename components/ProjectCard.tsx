import { Chip, Grid } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  time: string;
  title: string;
  description: Array<string>;
  techStacks: Array<string>;
  url: string;
}

export default function ProjectCard({
  time,
  title,
  description,
  techStacks,
  url,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      className="group rounded-md bg-transparent hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="text-slate-400 p-2">
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <div className="text-sm pt-0.5">{time}</div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="flex flex-col gap-2">
              <h1
                className={`text-lg font-medium flex items-center ${
                  hover ? "text-teal-300 underline" : "text-slate-200"
                }`}
              >
                {title}
                <ArrowOutwardIcon className="text-xl transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
              </h1>
              <ul className="list-disc pl-5">
                {description?.map((desc, index) => (
                  <li key={index} className="tracking-tight">
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 pt-2 flex-wrap">
                {techStacks?.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    className="bg-teal-400/10 text-teal-300 text-xs font-normal leading-5"
                    style={{
                      fontFamily: "inherit",
                    }}
                  />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </a>
  );
}
