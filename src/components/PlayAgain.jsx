import React from "react";
import { Grid, Box } from "@mui/material";
import { CustomPlayButton, CustomTypography } from "../utils";
import { playAgainIcon, quizCompleteImage } from "../assets";

export const PlayAgain = ({ ismobile, toggleActiveId }) => {
  return (
    <Grid container justifyContent="center" pt={2} alignItems="center">
      <Grid item xs={12} py={4}>
        <Box display="flex" justifyContent="center">
          <img src={quizCompleteImage} alt="quiz_complete_image" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CustomTypography
          flexWrap="wrap"
          size={ismobile ? 15 : 30}
          lineHeight={ismobile ? "10px" : "20px"}
          weight={600}
          textAlign="center"
          color="white"
        >
          Hope you learned something new!
        </CustomTypography>
      </Grid>
      <Grid item xs={12} py={4}>
        <Box display="flex" justifyContent="center">
          <CustomPlayButton
            ismobile={ismobile}
            disableElevation
            disableRipple
            label="Play again"
            icon={playAgainIcon}
            onClick={() => toggleActiveId(0)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
