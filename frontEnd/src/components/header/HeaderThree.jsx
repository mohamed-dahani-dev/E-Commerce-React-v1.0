import {
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import ComputerIcon from "@mui/icons-material/Computer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Links from "./links/Links";

const HeaderThree = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 180,
            bgcolor: theme.palette.backColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: 180,
              bgcolor: theme.palette.backColor.main,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ComputerIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AutoStoriesIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:800px)") && <Links />}
      {useMediaQuery("(max-width:800px)") && (
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuIcon sx={{ fontSize: "33px" }} />
        </IconButton>
      )}

      <Drawer
        sx={{ ".MuiPaper-root": { width: "70%", padding: "10px 5px" } }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box sx={{ width: "100%" }}>
          <IconButton
            sx={{
              "&:hover": {
                transition: ".5s",
                rotate: "180deg",
                color: "#dc143c",
              },
            }}
            onClick={toggleDrawer("right", false)}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              textAlign: "center",
            }}
            onClick={preventDefault}
          >
            <Link
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  bgcolor: theme.palette.backColor.main,
                },
                padding: "10px 25px",
                borderRadius: "10px",
                transition: ".5s",
              }}
              href="#"
            >
              Home
            </Link>
            <Link
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  bgcolor: theme.palette.backColor.main,
                },
                padding: "10px 25px",
                borderRadius: "10px",
                transition: ".5s",
              }}
              href="#"
            >
              About
            </Link>
            <Link
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  bgcolor: theme.palette.backColor.main,
                },
                padding: "10px 25px",
                borderRadius: "10px",
                transition: ".5s",
              }}
              href="#"
            >
              Products
            </Link>
            <Link
              sx={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  bgcolor: theme.palette.backColor.main,
                },
                padding: "10px 25px",
                borderRadius: "10px",
                transition: ".5s",
              }}
              href="#"
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default HeaderThree;
