import React,{useEffect} from "react";

const About=()=>{
    useEffect(()=>{
        document.title="About Us";
    },[]);

    
        return(
            <div class="p-3 mb-2 bg-light text-dark">
                <h1>About Us</h1>
                <h6 className="text-center">India’s Favorite Online Shopping Platform.</h6>
                <p>
                Here our goal is to make shopping easier, faster, and more convenient 
                than ever before for our customers. We are committed in our mission to build a trustworthy
                 online marketplace which offers the widest range of products across the country. With our 
                 proven user experience and reliable services, we are committed to provide customers in India 
                 with a trusted and hassle-free one-stop-shop for all their shopping needs across various 
                 categories such as Electronics, Grocery, Fashion, Home & Kitchen, etc.
                    </p>

            </div>
        );
};
export default About;