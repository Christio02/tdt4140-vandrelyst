import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Searchbar = () => {
  const [searchText, setSearchText] = useState(""); // save input text in hook

  const trackSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // function that tracks every letter user types in
    setSearchText(event.target.value);
    // console.log(searchText)
  };
  
  const sendSearch = () => {
    console.log(searchText)
  }

  return (
    <div className="searchbar-container">
      <Form className="search">
        <Form.Control
          type="text"
          placeholder="Søk på et reisemål!"
          className="search-bar"
          value={searchText}
          onChange={trackSearch}
        ></Form.Control>
        <Button variant="outline-success" onClick={sendSearch}>Søk</Button>
      </Form>
    </div>
  );
};

export default Searchbar;
