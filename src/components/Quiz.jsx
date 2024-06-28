import { useState } from "react";
import { Grid, Box } from "@mui/material";
import { QACards } from "./QACards";
import {
  prevArrow,
  prevArrowDisabled,
  nextArrow,
  staticQAndA,
} from "../assets";
import { CustomArrowButton } from "../utils/CustomArrowButton";

export const Quiz = ({ ismobile, toggleActiveId }) => {
  const [slide, setSlide] = useState(0);
  const [questions, setQuestions] = useState(staticQAndA);
  const [showAnswer, setShowAnswer] = useState(false);
  const [direction, setDirection] = useState("idle");

  const toggleDirection = (val) => {
    setDirection(val);
  };

  const toggleSlides = (val) => {
    setSlide(val);
  };

  const toggleAnswerVisibility = (val) => {
    direction !== "idle" && toggleDirection("idle");
    val ? setShowAnswer(val) : setShowAnswer((prev) => !prev);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item sm={12} md={3}>
        {!ismobile && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CustomArrowButton
              type="prev"
              slide={slide}
              icon={slide === 0 ? prevArrowDisabled : prevArrow}
              altText="prev_arrow_icon"
              onClick={() => {
                showAnswer && toggleAnswerVisibility(false);
                if (slide > 0) {
                  toggleDirection("prev");
                  setSlide((prev) => prev - 1);
                }
              }}
            />
          </Box>
        )}
      </Grid>
      <Grid item sm={12} md={6}>
        <QACards
          ismobile={ismobile}
          slide={slide}
          questions={questions}
          showAnswer={showAnswer}
          direction={direction}
          toggleSlides={toggleSlides}
          toggleDirection={toggleDirection}
          toggleAnswerVisibility={toggleAnswerVisibility}
        />
      </Grid>
      <Grid item width="inherit" p={ismobile ? 2 : 0} sm={12} md={3}>
        {ismobile ? (
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Box display="flex" justifyContent="start">
              <CustomArrowButton
                type="prev"
                slide={slide}
                icon={slide === 0 ? prevArrowDisabled : prevArrow}
                altText="prev_arrow_icon"
                onClick={() => {
                  showAnswer && toggleAnswerVisibility(false);
                  if (slide > 0) {
                    toggleDirection("prev");
                    setSlide((prev) => prev - 1);
                  }
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end">
              <CustomArrowButton
                type="next"
                slide={slide}
                icon={nextArrow}
                altText="next_arrow_icon"
                onClick={() => {
                  showAnswer && toggleAnswerVisibility(false);
                  if (slide < questions?.length - 1) {
                    toggleDirection("next");
                    setSlide((prev) => prev + 1);
                  } else {
                    toggleActiveId(2);
                  }
                }}
              />
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CustomArrowButton
              type="next"
              slide={slide}
              icon={nextArrow}
              altText="next_arrow_icon"
              onClick={() => {
                showAnswer && toggleAnswerVisibility(false);
                if (slide < questions?.length - 1) {
                  toggleDirection("next");
                  setSlide((prev) => prev + 1);
                } else {
                  toggleActiveId(2);
                }
              }}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
