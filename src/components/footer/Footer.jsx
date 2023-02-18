import React from 'react';
import { styled } from "@mui/material";
import {Link} from "react-router-dom";

const FooterStyle = styled('footer')({

    marginTop: 20,
    padding: "16px 20px"
});



function Footer() {
    return (
        <>


            <FooterStyle className='bg-primary'>

                <div className="d-flex justify-content-between">
                    <div className="">
                        <img src="./assurant-footer-logo.png" alt="" srcset="" />

                    </div>
                    <div className="right">
                        <img src="./ssl-logo.jpeg" alt="" />
                        <img src="./pci-logo.jpeg" alt="" />

                    </div>

                </div>

                <div className=" mt-3 d-flex justify-content-between">
                    <div className="left">

                    
                    @Copy write by webcollect
                    </div>
                    <div className="">

                <Link to='#' className='text-light mx-2'>Support Details</Link>
                <Link to='#' className='text-light mx-2'>Privacy Policy</Link>
                <Link to='#' className='text-light mx-2'>Terms of Service</Link>
                    
                    
                    
                    
                    </div>

                </div>
            </FooterStyle>





        </>
    )
}

export default Footer