import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, LetsPlay, PlayAgain, Quiz } from "../components";
import { useTheme, useMediaQuery } from "@mui/material";

export const HomePage = () => {
  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activePulse, setActivePulse] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const togglePulse = (val) => {
    setActivePulse(val);
  };

  const toggleActiveId = (val) => {
    setActiveId(val);
  };

  const toggleComponent = (id) => {
    if (id === 0) {
      return <LetsPlay ismobile={ismobile} toggleActiveId={toggleActiveId} />;
    } else if (id === 1) {
      return <Quiz ismobile={ismobile} toggleActiveId={toggleActiveId} />;
    } else {
      return <PlayAgain ismobile={ismobile} toggleActiveId={toggleActiveId} />;
    }
  };

  useEffect(() => {
    if (activeId !== 1) {
      togglePulse(true);
    } else {
      togglePulse(false);
    }
  }, [activeId]);

  return (
    <Router>
      <Layout activePulse={activePulse}>
        <Routes>
          <Route path="/math-quiz/" element={toggleComponent(activeId)}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};
