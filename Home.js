import { Container,Button,Card,CardTitle,CardBody} from "reactstrap";
import React,{useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home|| Start Shopping";
    },[]);
        return(
            <div >
                <Card className="text-center" border="succsess"> 
                    <CardBody>
                    <img 
                        src={require('./Gro1.jpeg')} 
                        alt="logo" height={385} 
                     />                       
                        <CardTitle><b>!!!GET GROCERIES AT YOUR DOOR STEP!!!</b> </CardTitle>
                        <p>
                        This Grocery application is a online platform from where anyone can buy products related to grocery items. Users can see all the display products in a View Grocery category.                        </p>
                        <Container className="text-center">
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
};
export default Home;