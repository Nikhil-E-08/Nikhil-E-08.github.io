import { Box, Grid } from "@mui/material";
import ContactDetail from "../components/ContactDetailComponent";
import ContactForm from "../components/ContactFormComponent";

const Contact = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginX: { xs: "10px", sm: "50px" },
        marginY: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactDetail />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
