import React, { useState,useEffect } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import Grocery from "./Grocery";

const AllGrocery =() => {

    useEffect(() => {
            document.title="All Groceries || Shop grocery ";
    });

    //Function to call servers
    const getAllGroceryFromServer = () => {
        axios.get(`${base_url}/groceries`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Groceries has been loaded",{position:"bottom-center"});
                setgrocery(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllGroceryFromServer();
        },[]);

    const [groceries,setgrocery]=useState([]);

    const updateGrocery=(id)=>{
        setgrocery(groceries.filter((c)=>c.id!=id));
    };

    return(
        
        <div class="p-3 mb-2 bg-light text-dark" >
            <h1>All Grocery</h1>
            <p>list of groceries are as follows.</p>
           {groceries.length > 0 
            ? groceries.map((item) => <Grocery key={item.id} grocery={item}/>) 
            :"No grocery"};
       </div>

    );
};

export default AllGrocery;