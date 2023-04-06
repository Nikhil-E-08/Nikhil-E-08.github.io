import { Box, Grid } from "@mui/material";
import ContactDetail from "../components/ContactDetailComponent";

const Contact = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginX: { xs: "10px", sm: "50px" },
        marginY: { xs: "10px", sm: "20px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactDetail />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
