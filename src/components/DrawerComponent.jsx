import { Menu } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const DrawerComponent = ({ pages }) => {
  const location = useLocation();
  const [anchor, setAnchor] = useState(false);

  const handleAnchor = (open) => {
    setAnchor(open);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", sm: "none" },
        justifyContent: "end",
      }}
    >
      <IconButton size="large" onClick={() => handleAnchor(true)}>
        <Menu sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={anchor}
        onClose={() => handleAnchor(false)}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "comic sans ms",
            fontWeight: 700,
            textAlign: "center",
            p: "10px",
          }}
        >
          Portfolio
        </Typography>
        <Divider />
        <List sx={{ width: "200px" }}>
          {pages.map((page) => (
            <ListItem
              key={page.id}
              sx={{ bgcolor: location.pathname === page.url ? "#FFE5B4" : "" }}
            >
              <ListItemButton sx={{ justifyContent: "center" }}>
                <NavLink
                  to={page.url}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    fontFamily: "comic sans ms",
                  }}
                  onClick={() => handleAnchor(false)}
                >
                  {page.name}
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
