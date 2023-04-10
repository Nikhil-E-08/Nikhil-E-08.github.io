import { Call, Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const socialMedia = [
  {
    id: 1,
    icon: LinkedIn,
    contact: "www.linkedin.com/in/nikhil-e-956116224",
  },
  {
    id: 2,
    icon: Email,
    contact: "nikhil882001@gmail.com",
  },
  {
    id: 3,
    icon: Call,
    contact: "+91 9092766131",
  },
  {
    id: 4,
    icon: GitHub,
    contact: "https://github.com/Nikhil-E-08",
  },
];

const ContactDetail = () => {
  return (
    <Box sx={{ borderStyle: "groove", p: "10px" }}>
      <Typography variant="h6">Contact Information</Typography>
      <hr />
      <TableContainer>
        <Table>
          <TableBody>
            {socialMedia.map((media) => (
              <TableRow
                key={media.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th">
                  <Icon component={media.icon} sx={{ color: "#cc5500" }} />
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{media.contact}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContactDetail;
