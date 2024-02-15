import DestinationPopUp from "../components/DestinationPopUp";
import Searchbar from "../components/Searchbar";

import "../style/frontpage.css";

const Frontpage = () => {
  /* 
  The return statement contains the JSX that will be rendered to the DOM
  So essentially here we are returning the HTML that will be displayed on the page
  */
  return (
    <div className="main-container">
      {/* AddDestinationButton is a component that we created in the components folder */}
      <Searchbar />

      <DestinationPopUp />
    </div>
  );
};

export default Frontpage;
