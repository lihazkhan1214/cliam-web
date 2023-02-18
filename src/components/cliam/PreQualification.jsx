import React from 'react'
import { styled, Box, Divider } from '@mui/material';
import Navbar from './Navbar';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';



const Containerwrapper = styled('div')(({ theme }) => ({

  background: "#ffffff",
  padding: "20px 120px",
  [theme.breakpoints.down('md')]: {
    padding: "0px 20px"
  }


}))
const Wrapper = styled(Box)(({ theme }) => ({
     width:"50vw",
  [theme.breakpoints.down('sm')]: {
    width: "90vw"

  }
}))

const Labletag = styled('label')({
  fontSize: "14px",
  fontWeight: "400"
});






function PreQualification() {
 
  
  return (
    <>
      <Navbar style={{ background: "#DFE5EC" }}></Navbar>
      <Containerwrapper>
        <Wrapper>

          <form >
            <div className="d-flex justify-content-between">
              <h6>Claim Pre-Qualification</h6>



              <p><ListIcon color="primary"></ListIcon>Claims History & Status</p>



            </div>
            <Divider color="primary"></Divider>
            <p>To get started with the claim process, please answer the following questions.</p>
            <h6>Do you still have possession of the device?</h6>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label className="form-check-label" for="exampleRadios1">
                Yes, I have the device
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                No, I do not have the device
              </label>
            </div>
            <Divider color="primary"/>
            <h6>Is your device damaged in some way?</h6>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                Yes, I have the device
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                O No, I do not have the device
              </label>
            </div>
            <Divider color="primary"/>
            <h6>Confirm the device Category, Brand and Model or select this information below.</h6>




            <Labletag htmlFor="">Device Type</Labletag>
            <div className="form-floating">

              <select className="form-select " style={{ height: "30px" }} id="floatingSelect" aria-label="Floating label select example">
                <option selected>laptop</option>
                <option value="1">mobile</option>
                <option value="2">one</option>
                <option value="3">Three</option>
              </select>

            </div>


            <div className="mb-3">
              <Labletag for="exampleInputEmail1" className="form-label">Brand</Labletag>
              <input type="text" className="form-control" placeholder='apple' id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>

            <div className="mb-3">
              <Labletag for="exampleInputEmail1" className="form-label">Model</Labletag>
              <input type="text" className="form-control" placeholder='Macbook pro' id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <Labletag for="exampleInputEmail1" className="form-label">Device Nickname</Labletag>
              <input type="text" className="form-control" placeholder="Diane's Macbook" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>

            <div className="mb-3">
              <Labletag for="exampleInputEmail1" className="form-label">Serial Number (Optional)</Labletag>
              <input type="Number" className="form-control" placeholder="98383721037777365" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>


            <div className="mb-3">
              <Labletag for="exampleInputEmail1" className="form-label">Purchase Price, $</Labletag>
              <input type="Number" className="form-control" placeholder="$2000" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
            <Labletag for="exampleInputEmail1" className="form-label">Purchase Date</Labletag>
            <input type="date" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
           
            <p>Upon completion you'll be taken to our Assurant claims site.</p>




            <div className="d-flex justify-content-end">
            
            <button className="btn btn-primary" ><Link style={{color:"#ffffff",textDecoration:"none"}} to='/formstep'> Start A Claim</Link></button>
            
            </div>



           












          </form>










        </Wrapper>

      </Containerwrapper>
    </>
  )
}

export default PreQualification
