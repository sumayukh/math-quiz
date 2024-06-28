import { Grid, styled, keyframes, Box } from "@mui/material";
import { layoutImage } from "../assets";
import { Header } from "./Header";
import { Footer } from "./Footer";

const pulse = keyframes`
0%{
  transform: scale(1);
}
100%{
  transform: scale(1.3);
}
`;

const childPulse = keyframes`
0%{
  transform: scale(1);
}
100%{
  transform: scale(0.8);
}
`;

export const Layout = ({ activePulse, children }) => {
  const CustomLayoutContainer = styled(Box)(() => ({
    position: "relative",
    width: "100%",
    height: "auto",
    overflow: "clip",
  }));

  const LayoutGrid = styled(Grid)(() => ({
    background: `url(${layoutImage}) center fixed no-repeat`,
    backgroundSize: "cover",
    animation: activePulse
      ? `${pulse} 12s linear 0s infinite alternate`
      : `none`,
  }));

  const ChildGrid = styled(Grid)(() => ({
    position: "relative",
    backdropFilter: "brightness(40%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "inherit",
    animation: activePulse
      ? `${childPulse} 12s linear 0s infinite alternate`
      : `none`,
  }));

  return (
    <CustomLayoutContainer>
      <Header />
      <LayoutGrid
        height="100vh"
        container
        justifyContent="center"
        alignItems="center"
      >
        <ChildGrid item sm={12}>
          {children}
        </ChildGrid>
      </LayoutGrid>
      <Footer />
    </CustomLayoutContainer>
  );
};
