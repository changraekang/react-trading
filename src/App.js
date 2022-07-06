import React from "react";

// TradingView 컴포넌트 임포트

import "./App.css";
import "./error.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Depth from "./components/Depth";
import Chart from "./components/Chart";
import { TVChartContainer } from "./components/TVChartContainer/index";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Depth></Depth>
      <TVChartContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
