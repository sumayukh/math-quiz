import React from "react";
import { Grid, Box } from "@mui/material";
import { CustomPlayButton, CustomTypography } from "../utils";
import { playIcon } from "../assets";

export const LetsPlay = ({ ismobile, toggleActiveId }) => {
  return (
    <Grid container justifyContent="center" pt={2} alignItems="center">
      <Grid item xs={12}>
        <CustomTypography
          flexWrap="wrap"
          size={ismobile ? 30 : 60}
          lineHeight={ismobile ? "40px" : "80px"}
          weight={700}
          textAlign="center"
          color="white"
        >
          Addition and Subtraction
          <br />
          Facts within 20
        </CustomTypography>
      </Grid>
      <Grid item xs={12}>
        <CustomTypography
          flexWrap="wrap"
          size={ismobile ? 12 : 24}
          lineHeight={ismobile ? "18px" : "36px"}
          weight={500}
          textAlign="center"
          color="white"
        >
          Test your knowledge with the following questions, tap a card to
          <br />
          flip it and uncover the answer, good luck!
        </CustomTypography>
      </Grid>
      <Grid item xs={12} py={4}>
        <Box display="flex" justifyContent="center">
          <CustomPlayButton
            ismobile={ismobile}
            disableElevation
            disableRipple
            label="Let's play"
            icon={playIcon}
            onClick={() => toggleActiveId(1)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
