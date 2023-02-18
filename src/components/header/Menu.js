import React from 'react'
import {Typography,Box,styled} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Wraper=styled(Box)(({theme})=>({
    display:'flex',
   
[theme.breakpoints.down('md')]:{
    flexDirection:"column",
    justifyContent:'center',
    alignItems:"center"
}

}))

const Links=styled(Typography)(({theme})=>({

marginLeft:20,
fontSize:18,
cursor:'pointer',
[theme.breakpoints.down('md')]:{
    marginLeft:0,
    marginTop:10
}

}))



const Tvicon=styled(Box)`
border-left:1px solid #4444;
padding-left:8px;


`
function Menu() {
  return (
    <>
    
    
    <Wraper>
<Links>
Home
</Links>
<Links>
Account
</Links>
<Links>
My Devices
</Links>
<Links>
File claim
</Links>
<Links>
<Tvicon>

<img src="./tvicon.png" width='20px' height="20px" alt="" />
<ArrowDropDownIcon></ArrowDropDownIcon>
</Tvicon>


</Links>
</Wraper>
    
    
    
    </>
  )
}

export default Menu;