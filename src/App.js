import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ErrorBoundary from "./utils/ErrorBoundary";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | " defaultTitle="Quiz"></Helmet>
      </HelmetProvider>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </>
  );
};

export default App;
