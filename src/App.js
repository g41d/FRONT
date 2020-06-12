import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={IndexPage} />
    </Router>
  );
}

export default App;
