import React from 'react';
import Button from 'react-bootstrap/Button';

type AddDestinationButtonProps = {
    className: string;
}

/*
Gives us a button of type primary, which was found in the react-bootstrap library
The button will have the text "Add Destination"
*/
const AddDestinationButton: React.FC<AddDestinationButtonProps> = ({ className }) => {
    return (
        <Button className={className} variant="primary">
            Add Destination
        </Button>
    ); 
};


export default AddDestinationButton;