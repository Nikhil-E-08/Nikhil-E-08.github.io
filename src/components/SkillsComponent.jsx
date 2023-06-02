import {
  Box,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const SKILLS = [
  {
    id: 1,
    name: "Python",
    rating: 4,
  },
  {
    id: 2,
    name: "C++",
    rating: 3,
  },
  {
    id: 3,
    name: "JavaScript",
    rating: 3,
  },
  {
    id: 4,
    name: "Java",
    rating: 3,
  },
];

// const TOOLS_AND_LIBRARIES = [
//   {
//     id: 1,
//     name: "Concourse CI",
//   },
//   {
//     id: 2,
//     name: "Spring Boot",
//   },
//   {
//     id: 3,
//     name: "Terraform",
//   },
//   {
//     id: 4,
//     name: "Bash Scripting",
//   },
//   {
//     id: 5,
//     name: "React",
//   },
// ];

// const INTEREST = [
//   {
//     id: 1,
//     name: "Web Development",
//   },
//   {
//     id: 2,
//     name: "Machine Learning",
//   },
// ];

const Skills = () => {
  return (
    <>
      <Typography variant="h6">Skills</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {SKILLS.map((skill) => (
              <TableRow
                key={skill.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th">
                  <Typography variant="body1">{skill.name}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Rating
                    name={skill.name}
                    defaultValue={skill.rating}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {SKILLS.map((skill) => (
        <Box
          key={skill.id}
          sx={{ display: "flex", flexDirection: "row" }}
        ></Box>
      ))}
    </>
  );
};

export default Skills;
