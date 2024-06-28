import React from "react";
import { Grid, Box, styled, keyframes } from "@mui/material";
import { CustomTypography } from "../utils";
import { activeSlideMarkerIcon, slideMarkerIcon, tapIcon } from "../assets";

export const QACards = ({
  ismobile,
  slide,
  questions,
  showAnswer,
  direction,
  toggleSlides,
  toggleDirection,
  toggleAnswerVisibility,
}) => {
  const slideAnimate = keyframes`
0%{
  transform: translateX(0);
  opacity:1;
}
25%{
  transform: ${direction === "next" ? "translateX(-100%)" : "translateX(100%)"};
  opacity:0;
}
50% {
  transform: ${direction === "next" ? "translateX(100%)" : "translateX(-100%)"};
  opacity:0;
}
100%{
  transform: translateX(0);
  opacity:1;
}
`;

  const CustomSlideMarker = styled("img")(({ ismobile }) => ({
    cursor: "pointer",
    maxWidth: ismobile ? "6px" : "8px",
    maxHeight: ismobile ? "6px" : "8px",
  }));

  const CustomQACard = styled(Box)(({ ismobile, displayprop }) => ({
    display: displayprop,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: ismobile ? "10px" : "20px",
    rowGap: showAnswer ? `16px` : ismobile ? `64px` : `80px`,
    padding: `${showAnswer ? `4px` : ismobile ? `0px` : `32px`} ${
      showAnswer ? `4px` : ismobile ? `0px` : `48px`
    }`,
    cursor: "pointer",
    animation:
      direction !== "idle" ? `${slideAnimate} linear 0.5s forwards` : `none`,
  }));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      pt={ismobile ? 4 : 0}
      rowGap={ismobile ? 0 : 4}
    >
      <Grid item sm={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={ismobile ? 1.2 : 1.5}
        >
          <CustomTypography
            color="white"
            size={ismobile ? 14 : 18}
            weight={700}
            lineHeight={ismobile ? "14px" : "18px"}
          >
            {slide + 1}&nbsp;/&nbsp;{questions?.length}&nbsp;
          </CustomTypography>
          {questions?.map((_, index) => {
            if (index === slide) {
              return (
                <Box key={index}>
                  <CustomSlideMarker
                    ismobile={ismobile}
                    src={activeSlideMarkerIcon}
                    alt="active_slide_marker_icon"
                    onClick={() => {
                      showAnswer && toggleAnswerVisibility(false);
                      direction !== idle && toggleDirection("idle");
                      toggleSlides(index);
                    }}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={index}>
                  <CustomSlideMarker
                    ismobile={ismobile}
                    src={slideMarkerIcon}
                    alt="slide_marker_icon"
                    onClick={() => {
                      showAnswer && toggleAnswerVisibility(false);
                      slide !== index
                        ? slide > index
                          ? toggleDirection("prev")
                          : toggleDirection("next")
                        : toggleDirection("idle");
                      toggleSlides(index);
                    }}
                  />
                </Box>
              );
            }
          })}
        </Box>
      </Grid>
      <Grid item sm={12} px={ismobile ? 2 : 0} py={ismobile ? 2 : 4}>
        {questions?.map((item, index) => {
          return (
            <CustomQACard
              ismobile={ismobile}
              displayprop={slide === index ? "flex" : "none"}
              key={index}
              onClick={() => {
                showAnswer
                  ? toggleAnswerVisibility()
                  : toggleAnswerVisibility(slide === index);
              }}
              // sx={{
              //   animation: slide === index
              //     ? direction === "next"
              //       ? `${slideInNext} 0.5s forwards`
              //       : `${slideInPrev} 0.5s forwards`
              //     : direction === "next"
              //     ? `${slideOutNext} 0.5s forwards`
              //     : `${slideOutPrev} 0.5s forwards`,
              // }}
            >
              {showAnswer ? (
                <>
                  <Box display="flex">
                    <img width="100%" height="100%" src={item?.image} />
                  </Box>
                  <CustomTypography
                    textAlign="center"
                    color="#000000"
                    size={ismobile ? 17 : 26}
                    weight={600}
                    lineHeight={ismobile ? "32px" : "42px"}
                    px={ismobile ? 1 : 0}
                    pb={2}
                  >
                    {item?.answer}
                  </CustomTypography>
                </>
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="center"
                    px={ismobile ? 2 : 5}
                    pt={ismobile ? 8 : 10}
                  >
                    <CustomTypography
                      textAlign="center"
                      color="#000000"
                      size={ismobile ? 27 : 40}
                      weight={500}
                      lineHeight={ismobile ? "39.6px" : "55px"}
                    >
                      {item?.question}
                    </CustomTypography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    pb={ismobile ? 3 : 0}
                  >
                    <CustomTypography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      color="#000000"
                      size={ismobile ? 12 : 14}
                      weight={500}
                      lineHeight={ismobile ? "12px" : "14px"}
                    >
                      <img src={tapIcon} alt="tap_icon" />
                      &nbsp;Tap to reveal the answer
                    </CustomTypography>
                  </Box>
                </>
              )}
            </CustomQACard>
          );
        })}
      </Grid>
    </Grid>
  );
};
