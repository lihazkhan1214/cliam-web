import React,{useState} from 'react';
import {AppBar,Toolbar,Drawer,Box,styled,List,Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
const Headerstyle=styled(AppBar)`
background:#fff;
height:60px;
border:2px solid #5173CA;
box-shadow: 0%;

`;
const Container=styled(Toolbar)`
dislpay:flex;
color:#000000;
justify-content:space-between;
height:100%;
align-items:center;


`
;
const Logo=styled(Box)`

padding:5

`;
const MenuButton=styled(MenuIcon)(({theme})=>({

  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))

const MenuToggle=styled(Box)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:'none'

  }
}))

function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <Menu/>
              </listItem>
          </List>
      </Box>
  );
  return (
   <>
<Headerstyle>


<Container>

<Logo>
<img src="./pgh-logo.svg" alt="" />

</Logo>
<MenuToggle>
<Menu></Menu>

</MenuToggle>

<MenuButton   onClick={handleOpen} />
<Drawer open={open} onClose={handleClose}>
{list()}
</Drawer>

</Container>




</Headerstyle>
   </>
  )
}

export default Header
