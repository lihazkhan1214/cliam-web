import React from 'react';
import {Box,styled} from "@mui/material";
const Wrapper=styled(Box)`

padding:20px 20px

`;

function Navbar({style}) {
  return (
   <>
  <Wrapper style={style}>  
   File a Claim
   </Wrapper>
   
   
   </>
  )
}

export default Navbar