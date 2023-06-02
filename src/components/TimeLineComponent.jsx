import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

const TimeLine = ({ title, data }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Timeline position="alternate">
        {data.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent color="textSecondary">
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2">{item.place}</Typography>
              <Typography variant="body2">{item.content}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default TimeLine;
