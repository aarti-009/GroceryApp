import React,{useEffect} from "react";

const Contact=()=>{
    useEffect(()=>{
        document.title="Contact Us";
    },[]);

    
        return(
            <div class="p-3 mb-2 bg-light text-dark">
                <h1>Contact Us</h1>
                <p>WhatsApp us: 70003 70003 <br/>
                    Call us: 1800 890 1222<br/>
                    8:00 AM to 8:00 PM, 365 days<br/>
                    Please note that you are accessing the BETA version.
                    Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@mart.com
                    </p>
            </div>
        );
};
export default Contact;