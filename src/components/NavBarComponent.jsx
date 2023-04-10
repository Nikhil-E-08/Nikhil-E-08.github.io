import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = ({ pages }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", sm: "flex" },
        justifyContent: "end",
      }}
    >
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={page.url}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FFE5B4" : "",
            color: isActive ? "black" : "white",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "15px",
            fontFamily: "comic sans ms",
          })}
        >
          {page.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default NavBar;
