import React from 'react';
import { styled } from "@mui/material"

const paraarr=[
"123 Main Street",
"Atlanta, Georgia 30031",
"United States",
"steve.smith@email.com"

]

function Step3({ settitle }) {
    settitle("Service Fulfillment")
    return (
        <>


            <h6>Mail In Repair</h6>
            <p className='m-0 p-0'>Once your device is repaired it will be shipped to the ads provided below </p>
            <p className='m-0 p-0'>via standard shipping (1 business day)</p>




            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Same as policy</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">New Address</label>
            </div>

           <h6>Steve Smith</h6>

          
{
    paraarr.map((item)=>(
        <p className='m-0'>
        
        {item}
        </p>
    ))
}
            





        </>
    )
}

export default Step3