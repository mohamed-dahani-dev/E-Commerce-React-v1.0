import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 12,
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <Typography
        variant="h6"
        color={"HighlightText"}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
        sx={{ fontSize: 17 }}
      >
        Designed and Developed By{" "}
        <Typography variant="6" sx={{ fontSize: 17, color: "#29B6F6", mx: 1 }}>
          Mohamed Dahani
        </Typography>
        © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
