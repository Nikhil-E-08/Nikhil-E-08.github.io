import { Box, Grid } from "@mui/material";
import Education from "../components/EducationComponent";
import Experience from "../components/ExperienceComponent";
import Skills from "../components/SkillsComponent";

const About = () => {
  return (
    <Box
      sx={{
        marginX: { xs: "10px", sm: "50px" },
        marginY: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Education />
        </Grid>
        <Grid item md={6} xs={12}>
          <Skills />
        </Grid>
        <Grid item md={6} xs={12}>
          <Experience />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
