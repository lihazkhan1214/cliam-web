import React from 'react'
import { styled,Box,Button } from '@mui/material';
const Wrapper=styled(Box)(({theme})=>({
    width:"30vw",
    [theme.breakpoints.down('sm')]:{
        width:"50vw"
    
    }
}))
  
  
  
  
 
  const Inputfields=styled('input')({
    width:"30vw",
    padding:"10px",
    marginTop:"10px"
  });
  const ClaimButton=styled(Button)`
  border-radius:18px;
  text-transform:none;
  width:180px;
  
  `
  

function Formcmp() {
  return (
  <>
  <Wrapper>
<form >
  
  <Inputfields list="browsers" name="browser"/>
  <datalist id="browsers">
    <option value="laptop"/>
    <option value="mobile"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist>
 



<Box style={{marginTop:10}}>
<label htmlFor="">Brand</label>
<br />
<Inputfields type="text"  placeholder='Apple'/>
</Box>
<Box style={{marginTop:10}}>
<label htmlFor="">Model</label>
<br />
<Inputfields type="text"  placeholder='mackbook pro'/>
</Box>
<Box style={{marginTop:10}}>
<label htmlFor="">Device Nickname</label>
<br />
<Inputfields type="text"  placeholder='Diane,s mackbook'/>
</Box>
<Box style={{marginTop:10}}>
<label htmlFor="">Serial Number</label>
<br />
<Inputfields type="text"  placeholder='0045843598859'/>
</Box>
<Box style={{marginTop:10}}>
<label htmlFor="">Purhace Number</label>
<br />
<Inputfields type="text"  placeholder='44'/>
</Box>

<Box style={{marginTop:10}}>
<label htmlFor="">Purhace Date</label>
<br />
<Inputfields type="date"  placeholder=''/>
</Box>
<Box style={{marginTop:10,display:"flex", justifyContent:"end"}}>
<ClaimButton variant='contained'>Start a Claim</ClaimButton>
</Box>
</form>









  
</Wrapper>
  
  
  </>
  )
}

export default Formcmp
