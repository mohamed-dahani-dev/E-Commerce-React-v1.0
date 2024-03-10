/* eslint-disable react/prop-types */
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useTheme } from "@emotion/react";

const HeroIcons = () => {
  return (
    <Box>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        sx={{
          flexWrap: "wrap",
        }}
      >
        <MyBox
          icon={<ElectricBoltIcon sx={{ fontSize: "30px" }} />}
          title={"Fast Delivery"}
          subtitle={"Start From 10$"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: "30px" }} />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmsIcon sx={{ fontSize: "30px" }} />}
          title={"365 Days"}
          subtitle={"For Free Return"}
        />
        <MyBox
          icon={<CreditScoreIcon sx={{ fontSize: "30px" }} />}
          title={"Payment"}
          subtitle={"Secure System"}
        />
      </Stack>
    </Box>
  );
};

export default HeroIcons;

const MyBox = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: useMediaQuery("(min-width:600px)")
          ? "center"
          : "flex-start",
        width: 250,
        flexGrow: 1,
        gap: 3,
        py: 2,
        pl: useMediaQuery("(min-width:600px)") ? "0px" : "20px",
        mb: useMediaQuery("(min-width:535px)") ? "0px" : "8px",
        bgcolor: theme.palette.primary.contrastText,
      }}
    >
      {props.icon}
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: 17,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 14,
            color: theme.palette.text.secondary,
          }}
        >
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
