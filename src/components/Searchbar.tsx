import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Searchbar = () => {
  const [searchText, setSearchText] = useState(""); // save input text in hook

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // function that handles search from user
    setSearchText(event.target.value);
  };

  return (
    <div className="    ">
      <Form>
        <Form.Control
          type="text"
          placeholder="Søk på et reisemål!"
          className="search-bar"
          value={searchText}
          onChange={handleSearch}
        ></Form.Control>
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Searchbar;
