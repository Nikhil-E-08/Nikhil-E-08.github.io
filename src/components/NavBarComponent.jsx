import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#cc5500" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/portfolio"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                fontFamily: "comic sans ms",
                fontWeight: 700,
                textDecoration: "none",
                color: "white",
              }}
            >
              <Avatar
                src=".portfolio/images/profile.png"
                alt="profile"
                sx={{
                  mr: "10px",
                  height: "35px",
                  width: "35px",
                }}
              />
              Nikhil Elavarasu
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.name}
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
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default NavBar;
