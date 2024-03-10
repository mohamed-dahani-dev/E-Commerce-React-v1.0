import { useContext } from "react";
import { ColorModeContext } from "../../theme/Theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  ExpandMore,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

const options = ["EN", "FR", "AR"];

const HeaderOne = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        padding: "5px 0px",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23f57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HOT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: 300,
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "22px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "22px" }} />
              </IconButton>
            )}
          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ margin: 0, padding: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ cursor: "pointer" }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "14px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            sx={{ marginLeft: "5px" }}
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <XIcon
            sx={{
              fontSize: "18px",
              color: "#fff",
            }}
          />
          <FacebookOutlinedIcon
            sx={{
              fontSize: "22px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "22px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderOne;
