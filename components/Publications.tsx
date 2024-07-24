import Card from "./Card";

export const Publications = () => {
  const PUBLICATION = {
    time: "2020",
    title:
      "Numerical Simulations of Hydrogen Interstitial Diffusion and Ferroelectricity Degradation in Lead Titanate Films",
    company: "Journal of Physics D: Applied Physics",
    url: "https://iopscience.iop.org/article/10.1088/1361-6463/abd65c",
  };

  return (
    <div className="flex flex-col gap-4 pt-4 pb-32">
      <div className="text-lg font-medium tracking-tight text-slate-200 sm:text-2xl max-sm:py-4 max-sm:z-50 max-sm:sticky max-sm:top-0 max-sm:bg-background">
        PUBLICATIONS
      </div>
      <Card
        time={PUBLICATION.time}
        title={PUBLICATION.title}
        company={PUBLICATION.company}
        url={PUBLICATION.url}
      />
    </div>
  );
};
