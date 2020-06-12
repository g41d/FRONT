import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import IndexPage from "./pages/IndexPage";
import FundingDetail from "./pages/FundingDetail";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/detail/:idx" component={FundingDetail} />
    </Router>
  );
}

export default App;
