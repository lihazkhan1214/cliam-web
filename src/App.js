import Header from "./components/header/Header";
import PreQualification from "./components/cliam/PreQualification";
import {Box} from "@mui/material";
import "./App.css"
import Homestep from "./components/cliam/multiformsteps/Homestep";
import Footer from "./components/footer/Footer";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
   <>
   
   <Header></Header>
   <Box style={{marginTop:"60px"}}>
 
   <Routes>
   <Route path='/' element={<PreQualification/>}/>
   <Route path='/formstep' element={<Homestep/>}/>
   
   </Routes>



<Footer></Footer>
   
   </Box>

   
   
   </>)
}

export default App;
