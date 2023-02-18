import React from 'react';
import Common4and5 from './Common4and5';
import { Divider,styled } from '@mui/material';
const Wrapper=styled('div')({
    background:"#fafafa",
    padding:"10px",
    boxShadow:"2px 2px 2px 2px #fafafa"
});
const PaymentImage=styled('img')(({theme})=>({

    [theme.breakpoints.down('md')]:{
        width:"80vw"
    }
}));

function Step5() {
    return (<>
        <h6><strong>Claim number: DX543291RDS</strong></h6>
        <p style={{ textAlign: "justify" }}>

            Your claim has been submitted and we're just checking the last few details. If your claim is approved, we will send you a shipping label so you can send us your defective device for repair
            We will be back in touch within 1-2 working days with your claim decision. In the meantime you can check the status of your claim on your dashboard.

        </p>
        <h6><strong>
            Deductible Fee</strong></h6>
        <Wrapper className="row">
            <div className="col-12 text-center">
                <p><img src="./tick.png" width="20px" alt="" />
                    Thank you - your payment details have been confirmed</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <PaymentImage src="./payment.PNG" className='image' alt="" srcset="" />
            </div>
            <div className="col-12">
            </div>
            <p>In the event you are unable to sumafully sulumit your deductible payment, please contact us-</p>
        </Wrapper>

        <Common4and5 option={true}></Common4and5>
        <button className="btn btn-primary ">Go to Claim Dashboard</button>
       
    </>
    )
}

export default Step5