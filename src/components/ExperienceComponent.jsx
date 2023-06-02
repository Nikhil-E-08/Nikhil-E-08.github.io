import TimeLine from "./TimeLineComponent";

const EXPERIENCE = [
  {
    id: 1,
    name: "Comcast India Engineering Center",
    place: "Chennai",
    content: "Intern",
    period: "2023 - Present",
  },
];

const Experience = () => {
  return <TimeLine title={"Experience"} data={EXPERIENCE} />;
};

export default Experience;
