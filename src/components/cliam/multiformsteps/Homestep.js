import React from 'react';
import {styled} from "@mui/material";
import LinearStepper from './LinearStepper';
import Sidetable from './Sidetable';
import Navbar from '../Navbar';
const Containerwrapper=styled('div')(({theme})=>({

    background:"#F5F5F5",
    padding:"0px 120px",
    [theme.breakpoints.down('md')]:{
        padding:"0px 20px"
    }


}))
function Homestep() {
  return (<>
<Navbar style={{background:"#0d6efd"}}></Navbar>
    <Containerwrapper>
    <div className="row">
    
    <div className="col-lg-8">
    <LinearStepper></LinearStepper>
    
    </div>
    <div className="col-lg-4">
   <Sidetable/>
    </div>
    </div>
    </Containerwrapper>
    </> )
}

export default Homestep
