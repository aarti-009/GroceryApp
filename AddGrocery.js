import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddGrocery=()=>{
    useEffect(()=>{
        document.title="ADD Grocery || Grocery Delivery Application";
},[]);

    const [grocery,setgrocery]=useState({});

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
            toast.success("Grocery added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3">Fill Grocery Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="GroceryId">Grocery Id</label>
                <Input
                        Type="text"
                        placeholder="Enter GroceryId here"
                        name="GroceryId"
                        Id="GroceryId"
                        onChange={(e)=>{
                            setgrocery({...grocery,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="productName">Product Name</label>
                <Input
                        Type="text"
                        placeholder="Enter productname here"
                        name="productName"
                        Id="productName"
                        onChange={(e)=>{
                            setgrocery({...grocery,productName:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="productDescription">Product Description</label>
                <Input
                        Type="textarea"
                        placeholder="Enter  productdescription here "
                        Id="productDescription"
                        style={{height:150}}
                        onChange={(e)=>{
                            setgrocery({...grocery,productDescription:e.target.value});
                        }}
                />
                            </FormGroup>
                
                <FormGroup>
                <label for="quantity">Product quantity</label>
                <Input
                        Type="textarea"
                        placeholder="Enter  productquantity here "
                        Id="quantity"
                        //style={{height:150}}
                        onChange={(e)=>{
                            setgrocery({...grocery,quantity:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="price">Product Price</label>
                <Input
                        Type="text"
                        placeholder="Enter  productprice here "
                        Id="price"
                        //style={{height:150}}
                        onChange={(e)=>{
                            setgrocery({...grocery,price:e.target.value});
                        }}
                />

                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Grocery</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddGrocery;