import TimeLine from "./TimeLineComponent";

const EDUCATION = [
  {
    id: 1,
    name: "SASTRA Deemed University",
    place: "Thanjavur",
    content: "B.Tech ECE - CGPA: 7.89",
    period: "2019-2023",
  },
  {
    id: 2,
    name: "Velammal Vidhyashram",
    place: "Chennai",
    content: "+2 - Percentage: 89.2",
    period: "2018-2019",
  },
  {
    id: 3,
    name: "Velammal Vidhyashram",
    place: "Chennai",
    content: "10th - CGPA: 10",
    period: "2016-2017",
  },
];

const Education = () => {
  return <TimeLine title={"Education"} data={EDUCATION} />;
};

export default Education;
