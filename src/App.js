import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import IndexPage from "./pages/IndexPage";
import FundingDetail from "./pages/FundingDetail";
import MoreList from "./pages/MoreList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/detail/:idx" component={FundingDetail} />
      <Route exact path="/more/:type" component={MoreList} />
      <Footer />
    </Router>
  );
}

export default App;
