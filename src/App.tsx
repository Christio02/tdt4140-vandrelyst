import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Frontpage from "./pages/Frontpage";
import DestinationPage from "./pages/DestinationPage"

function App() {
  return (
    <div className="App">
      {/* <Frontpage /> */}
      <DestinationPage/>
    </div>
  );
}

export default App;
