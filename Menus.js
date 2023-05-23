import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/view-grocery">View Grocery</ListGroupItem>
            <ListGroupItem tag="a" href="/add-grocery">Add Grocery</ListGroupItem>
            <ListGroupItem tag="a" href="/about-us">About</ListGroupItem>
            <ListGroupItem tag="a" href="/contact-us">Contact</ListGroupItem>

        </ListGroup>
    );
}
export default Menus;