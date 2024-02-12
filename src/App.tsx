import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import TestPage from "./pages/TestPage";
import DestinationPage from "./pages/DestinationPage"

function App() {
  return (
    <div className="App">
      {/* <TestPage />  */}
      {/* <Searchbar /> */}
      <DestinationPage/>
    </div>
  );
}

export default App;
