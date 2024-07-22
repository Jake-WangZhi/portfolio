import { Chip } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  title: string;
  link: string;
}

export const CourseChip = ({ title, link }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <Chip
      label={
        <div className="flex gap-1 items-center">
          {title}
          {!!hover && <ArrowOutwardIcon style={{ fontSize: 20 }} />}
        </div>
      }
      className={`bg-teal-400/10 text-teal-300 text-xs font-normal leading-5 ${
        hover ? "underline" : ""
      }`}
      style={{
        fontFamily: "inherit",
      }}
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
};
