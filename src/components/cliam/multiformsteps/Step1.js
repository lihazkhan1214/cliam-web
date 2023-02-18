import React from 'react';
import {styled} from "@mui/material";

const Labletag=styled('label')({
fontSize:"14px",
fontWeight:"400"})



function Step1({settitle}) {
  settitle("incident information")
  return (
    <>
    
    <h6>please tell us what happened</h6>
  <div className="mb-3">
    <Labletag for="exampleInputEmail1" className="form-label">Date of incident</Labletag>
    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <Labletag for="floatingTextarea">Describe the issue or reason for your request</Labletag>
  <div className="form-floating">
 
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  
</div>
<Labletag htmlFor="">select the reason for claim/request</Labletag>
<div className="form-floating">

  <select className="form-select " style={{height:"30px"}} id="floatingSelect" aria-label="Floating label select example">
    <option selected>one</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

</div>




  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <Labletag className="form-check-label" for="exampleCheck1">I agree to the  <strong style={{color:"blue"}}> Terms of use</strong> and acknowledge that i have the rewieved the fraud notice </Labletag>
  </div>




    
    
    </>
  )
}

export default Step1
