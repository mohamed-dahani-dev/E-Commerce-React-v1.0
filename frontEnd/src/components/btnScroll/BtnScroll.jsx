import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BtnScroll = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 400 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 30, right: 15 }}
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default BtnScroll;
