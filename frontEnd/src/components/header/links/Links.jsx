import { useTheme } from "@emotion/react";
import { Box, Link } from "@mui/material";

const Links = () => {
  const theme = useTheme();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
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
        Home{" "}
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
  );
};

export default Links;
