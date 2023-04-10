import { AppBar, Toolbar, Typography, Container, Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBarComponent";
import DrawerComponent from "./DrawerComponent";

const pages = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#cc5500" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="profile"
              sx={{
                mr: "10px",
                height: "35px",
                width: "35px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/portfolio"
              sx={{
                mr: 2,
                fontFamily: "comic sans ms",
                fontWeight: 700,
                textDecoration: "none",
                color: "white",
              }}
            >
              Nikhil Elavarasu
            </Typography>
            <NavBar pages={pages} />
            <DrawerComponent pages={pages} />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
