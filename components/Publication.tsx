import Card from "./Card";

export const Publication = () => {
  const PUBLICATION = {
    time: "2020",
    title:
      "Numerical Simulations of Hydrogen Interstitial Diffusion and Ferroelectricity Degradation in Lead Titanate Films",
    company: "Journal of Physics D: Applied Physics",
    url: "https://iopscience.iop.org/article/10.1088/1361-6463/abd65c",
  };

  return (
    <div className="pb-24">
      <Card
        time={PUBLICATION.time}
        title={PUBLICATION.title}
        company={PUBLICATION.company}
        url={PUBLICATION.url}
      />
    </div>
  );
};
