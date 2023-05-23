import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";

import base_url from "../api/bootapi";

const Grocery=({grocery,update})=>{
    //delete course
    const deleteGrocery=(id)=>{
        axios.delete(`${base_url}/groceries/${id}`).then(
            (response)=>{
                toast.success("Grocery deleted successfully");
                update(id);
            },
            (error)=>{
                toast.error("Grocery not deleted");
            }
        )
    }
    //form handler function
    const handleForm=(e)=>{
        console.log(grocery);
        postDatatoServer(grocery);
        e.preventDefault();
    }
    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/groceries`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Grocery deleted successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };
return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold"><b>{grocery.productName}</b></CardSubtitle>
            <CardText>{grocery.productDescription}</CardText>
            <CardSubtitle className="font-weight-bold"> Quantity : {grocery.quantity}</CardSubtitle>
            <CardSubtitle className="font-weight-bold"><b>Price : ₹{grocery.price}</b></CardSubtitle>
            <br/>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteGrocery(grocery.id);
                }}>Delete</Button>{' '}

                <Button color="warning ml-5" type="submit" href="/update-grocery">Update</Button>
            </Container>
        </CardBody>
    </Card>
);
};
export default Grocery;