import React from 'react';
import {styled,Box, Typography} from "@mui/material";


const Tablestyle=styled('table')({
    width:"90%",
    padding:"20px 0px",
    marginTop:"20px",
  
    boxShadow:"2px 2px 2px 2px #9E9999",
    margin:'auto',
    background:"#fff"
    
    })
function Sidetable() {
  return (
   <>
   <Box style={{marginTop:"20px"}}>
   <Tablestyle className='table'>
   <tbody>
    <tr>
     <td colSpan='2' >
     <Box style={{display:"flex",alignItems:"center"}}>
     <Box>
     <img src="./shopping.png" style={{width:"50px"}} alt="" srcset="" />
     </Box>
     <Box style={{marginLeft:"10px"}}>
     <Typography variant='h6'>Daine'smackbook</Typography>
     <Typography >mackbook pro</Typography>
     </Box>
     </Box>
     </td>
    </tr>
 
 
    <tr>
     
      <td>Policy Number</td>
      <td>9858947398</td>
     
    </tr>
    <tr>
    
    <td>Serial Number</td>
    <td>9858947398</td>
      
    </tr>
    <tr>
     
      <td>Policy Start Date</td>
      <td>23/23/23</td>
     
    </tr>
    <tr>
     
    <td>Policy End Date</td>
    <td>23/23/23</td>
   
  </tr>
  </tbody>
</Tablestyle>
   
</Box>
   
   </>
  )
}

export default Sidetable