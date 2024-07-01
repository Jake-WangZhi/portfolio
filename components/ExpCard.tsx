import { Chip, Grid, Paper } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  time: string;
  title: string;
  company: string;
  description: Array<string>;
  techStacks: Array<string>;
  url: string;
}

export default function ExpCard({
  time,
  title,
  company,
  description,
  techStacks,
  url,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <a href={url} target="_blank">
      <Paper
        sx={{
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.15)",
          },
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="text-slate-400 p-2">
          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              <div className="text-sm pt-0.5">{time}</div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className="flex flex-col gap-2 text-base">
                <h1
                  className={`font-medium ${
                    hover ? "text-teal-300" : "text-slate-200"
                  }`}
                >
                  {title}
                </h1>
                <div
                  className={`flex text-sm justify-end gap-1 items-center ${
                    hover ? "text-teal-300" : "text-slate-200"
                  }`}
                >
                  {company}
                  <ArrowOutwardIcon />
                </div>
                <ul className="list-disc pl-5">
                  {description.map((desc, index) => (
                    <li key={index} className="tracking-tight">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-2 flex-wrap">
                  {techStacks.map((tech, index) => (
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
      </Paper>
    </a>
  );
}
