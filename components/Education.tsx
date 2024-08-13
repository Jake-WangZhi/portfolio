import { CourseChip } from "./CourseChip";

export const Education = () => {
  const UIUC_COURSES = [
    {
      title: "Database Systems",
      link: "https://siebelschool.illinois.edu/academics/courses/cs411",
    },
    {
      title: "Applied Machine Learning",
      link: "https://siebelschool.illinois.edu/academics/courses/cs441",
    },
    {
      title: "Cloud Networking",
      link: "https://siebelschool.illinois.edu/academics/courses/cs435",
    },
    {
      title: "Cloud Computing Applications",
      link: "https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=510",
    },
  ];

  const UMN_COURSES = [
    // {
    //   title: "Intro to Algs. & Program Dev.",
    //   link: "https://umtc.catalog.prod.coursedog.com/courses/8096671",
    // },
    {
      title: "Algs. & Data Str.",
      link: "https://umtc.catalog.prod.coursedog.com/courses/0036751",
    },
    {
      title: "Intro to OS",
      link: "https://umtc.catalog.prod.coursedog.com/courses/0021871",
    },
    {
      title: "Internet Programming",
      link: "https://umtc.catalog.prod.coursedog.com/courses/7906541",
    },
    {
      title: "Intro: AI",
      link: "https://umtc.catalog.prod.coursedog.com/courses/8039561",
    },
    {
      title: "Robotics",
      link: "https://umtc.catalog.prod.coursedog.com/courses/0045181",
    },
    {
      title: "Comp Arch & Machine Org",
      link: "https://umtc.catalog.prod.coursedog.com/courses/7932041",
    },
    {
      title: "Form Lang and Autom.",
      link: "https://umtc.catalog.prod.coursedog.com/courses/0021891",
    },
    {
      title: "Animation & Planning in Games",
      link: "https://umtc.catalog.prod.coursedog.com/courses/8103481",
    },

    {
      title: "Programming Graphics and Games",
      link: "https://umtc.catalog.prod.coursedog.com/courses/8103621",
    },
  ];

  return (
    <div className="text-slate-400 text-base flex flex-col gap-4 leading-7 pt-4">
      <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-2xl max-sm:py-4 max-sm:z-50 max-sm:sticky max-sm:top-0 max-sm:bg-background">
        EDUCATION
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h1 className={`text-slate-200 text-lg font-medium`}>
              University of Illinois Urbana - Champaign
            </h1>
            <h3>Expected May 2025</h3>
          </div>
          <div className="flex justify-between">
            <h3>Master of Computer Science</h3>
            <h3 className="text-slate-200 font-medium">GPA: 4.0</h3>
          </div>
          <h3 className="text-slate-200 font-medium">Relevant Courses:</h3>
          <div className="flex gap-2 flex-wrap">
            {UIUC_COURSES.map((course, index) => (
              <CourseChip title={course.title} link={course.link} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h1 className={`text-slate-200 text-lg font-medium`}>
              University of Minnesota - Twin Cities
            </h1>
            <h3>Dec 2020</h3>
          </div>
          <div className="flex justify-between">
            <h3>Bachelor of Computer Engineering</h3>
            <h3 className="text-slate-200 font-medium">GPA: 3.5</h3>
          </div>
          <h3 className="text-slate-200 font-medium">Relevant Courses:</h3>
          <div className="flex gap-2 flex-wrap">
            {UMN_COURSES.map((course, index) => (
              <CourseChip title={course.title} link={course.link} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
