/* eslint-disable no-dupe-keys */
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeroIcons from "./HeroIcons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useTheme } from "@emotion/react";

// import images
import Slide1Img from "../images/heroImages/banner-15.jpg";
import Slide2Img from "../images/heroImages/banner-25.jpg";

const Hero = () => {
  const theme = useTheme();

  const SliderContent = [
    { id: 1, text: "MEN", link: Slide1Img },
    {
      id: 2,
      text: "WOMEN",
      link: Slide2Img,
    },
  ];

  return (
    <Container sx={{ mb: 6 }}>
      <Box className="hero" sx={{ my: 3 }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper left"
        >
          {SliderContent.map((item) => {
            return (
              <SwiperSlide key={item.id} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      py: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#222", fontWeight: 600 }}
                  >
                    LIFE STYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ color: "#222", fontWeight: 600, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography
                      fontWeight={600}
                      color={"#333"}
                      mr={1}
                      variant="h5"
                    >
                      SALE UP TO
                    </Typography>
                    <Typography
                      fontWeight={600}
                      color={"#D23F57"}
                      mr={1}
                      variant="h5"
                    >
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    Get Free Shipping on Orders Over 99.00$
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 1,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "5px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          className="right1"
          sx={{
            position: "relative",
          }}
        >
          <img
            width={"100%"}
            height={"100%"}
            src="src\components\images\heroImages\banner-17.jpg"
            alt=""
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
              maxWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                mt: 1,
                lineHeight: "25px",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#D23F",
                lineHeight: "16px",
                mt: 1,
                fontWeight: 600,
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.3s",
                "&:hover": {
                  color: "#D23F57",
                },
                mt: 1,
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForwardIcon fontSize="10px" />
            </Link>
          </Stack>
        </Box>
        <Box
          className="right2"
          sx={{
            position: "relative",
          }}
        >
          <img
            width={"100%"}
            height={"100%"}
            src="src\components\images\heroImages\banner-16.jpg"
            alt=""
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
              maxWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                mt: 1,
                lineHeight: "25px",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              DESKTOP AND LAPTOPS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#D23F",
                lineHeight: "16px",
                mt: 1,
                fontWeight: 600,
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.3s",
                "&:hover": {
                  color: "#D23F57",
                },
                mt: 1,
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForwardIcon fontSize="10px" />
            </Link>
          </Stack>
        </Box>
      </Box>
      <HeroIcons />
    </Container>
  );
};

export default Hero;
