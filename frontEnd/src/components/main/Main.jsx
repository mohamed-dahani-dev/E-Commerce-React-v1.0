/* eslint-disable react/no-unescaped-entities */
import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import mainCardImg1 from "../images/mainCard/2.jpg";
import mainCardImg2 from "../images/mainCard/4.jpg";
import mainCardImgfinal from "../images/mainCard/final.jpg";

import { useGetProductByNameQuery } from "../../redux/Product";

const style = {
  position: "absolute",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: { xs: 8, md: 5.5 },
  width: "80%",
  minWidth: { xs: "90%", md: 900 },
  border: "1px solid #29B6F6",
  borderRadius: 3,
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  gap: 5,
  animation: "movepopup 0.77s 1",
  "@keyframes movepopup": {
    "0%": {
      transform: "scale(0)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
};

const Main = () => {
  const theme = useTheme();

  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const allProducts = "products?populate=*";
  const menCategory = "products?populate=*&filters[category][$eq]=MEN";
  const womenCategory = "products?populate=*&filters[category][$eq]=WOMEN";

  const [myData, setMyData] = useState(allProducts);

  const { data, error, isLoading } = useGetProductByNameQuery(myData);

  if (error) {
    {
      error.message;
    }
  }
  if (isLoading) {
    <Typography variant="h6">LOADUNG........</Typography>;
  }

  if (data) {
    return (
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={4}
        >
          <Box>
            <Typography fontWeight={500} variant="h5">
              Selected Product
            </Typography>
            <Typography fontWeight={300} variant="body1">
              All Our New Arrivals in a exclusive Brand Selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid #29B6F6 !important",
                color: "#29B6F6",
                background: "initial",
              },
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="left"
              aria-label="left aligned"
              onClick={() => {
                setMyData(allProducts);
              }}
            >
              All Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="center"
              aria-label="centered"
              onClick={() => {
                setMyData(menCategory);
              }}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="right"
              aria-label="right aligned"
              onClick={() => {
                setMyData(womenCategory);
              }}
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={7}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 345,
                  mt: 7,
                  flexGrow: 1,
                  "&:hover .MuiCardMedia-root": {
                    scale: "1.05",
                    transition: ".6s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 250 }}
                  image={`${item.attributes.image.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" gutterBottom component="div">
                      {item.attributes.title}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      $ {item.attributes.price}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    ${item.attributes.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleOpen}
                    sx={{
                      border: "1px solid #29B6F6 !important",
                      background: "#29B6F6 !important",
                      color: "#fff",
                      textTransform: "capitalize",
                      transition: "0.5s",
                      "&:hover": {
                        border: "1px solid #29B6F6 !important",
                        color: "#29B6F6",
                        bgcolor: "transparent !important",
                      },
                    }}
                    size="large"
                  >
                    <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                    Add To Cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.rating}
                    readOnly
                  />{" "}
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <IconButton
                sx={{
                  position: "absolute",
                  right: 15,
                  top: 10,
                  "&:hover": {
                    transition: ".5s",
                    rotate: "180deg",
                    color: "#dc143c",
                  },
                }}
                onClick={handleClose}
              >
                <CloseRoundedIcon />
              </IconButton>
              <Box>
                <img
                  style={{ borderRadius: 12 }}
                  width={400}
                  height={400}
                  src="src\components\images\mainCard\1.jpg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={600} letterSpacing={1}>
                  WOMEN'S FASHION
                </Typography>
                <Typography
                  my={1.5}
                  fontSize={"22px"}
                  color={"crimson"}
                  variant="h5"
                  fontWeight={600}
                >
                  $12.99
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum sequi eius corrupti repellat eligendi pariatur
                  tenetur minus, tempore nisi animi!
                </Typography>
                <Stack direction={"row"} gap={1} my={4} flexWrap={"wrap"}>
                  {[mainCardImg1, mainCardImg2, mainCardImgfinal].map(
                    (item) => {
                      return (
                        <img
                          key={item}
                          src={item}
                          style={{
                            borderRadius: 3,
                            cursor: "pointer",
                            ":hover": { scale: "1.1", width: 400 },
                          }}
                          width={80}
                          height={80}
                          alt=""
                        />
                      );
                    }
                  )}
                </Stack>
                <Button
                  onClick={handleOpen}
                  sx={{
                    border: "1px solid #29B6F6 !important",
                    background: "#29B6F6 !important",
                    color: "#fff",
                    textTransform: "capitalize",
                    transition: "0.5s",
                    "&:hover": {
                      border: "1px solid #29B6F6 !important",
                      color: "#29B6F6",
                      bgcolor: "transparent !important",
                    },
                  }}
                  size="large"
                >
                  <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                  By Now
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Container>
    );
  }
};

export default Main;
