import React, { useState } from 'react';

import { Stepper, styled, Divider, Typography, Box, Button, Step, StepLabel } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';



const Formstyle = styled('form')({
  width: "90%",
  padding: "20px 20px",
  marginTop: "20px",
  borderRadius: "8px",
  boxShadow: "2px 2px 2px 2px #9E9999",
  margin: 'auto',
  background: "#fff"

})





function LinearStepper() {
  const [AcitveState, SetactiveState] = useState(0);
  const [title, settitle] = useState("incident information")
  // const getsteps = () => {
  //   return [
  //     "Basic info",
  //     "Contact info",
  //     "personal info",
  //     "payment"

  //   ];
  // }
  // const steps = getsteps();
  const handlenext = () => {
    SetactiveState(AcitveState + 1);
  }
  const handleback = () => {
    SetactiveState(AcitveState - 1);
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1 settitle={settitle}></Step1>
        );
      case 1:
        return (
          <Step2 settitle={settitle}></Step2>
        );
      case 2:
        return (
          <Step3 settitle={settitle}></Step3>
        );
      case 3:
        return (
          <Step4 settitle={settitle}></Step4>

        );
      default:
        return "nonthni";



    }
  }

  return (
    <>


    <Box style={{ marginTop: "20px" }}>
    <Formstyle>

      {
        AcitveState === 4 ? (
          <Step5></Step5>
        )
          : (
            <>
             
                  <Typography variant='h6'>{title}</Typography>


                  <Stepper activeStep={AcitveState}>


                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                    <Step>
                      <StepLabel></StepLabel>
                    </Step>
                  </Stepper>
                  <Divider style={{ marginTop: "10px" }}></Divider>
                  {
                    getStepContent(AcitveState)
                  }

                  <Box style={{ display: "flex", justifyContent: "space-between" }}>

                    <Button variant='contained' onClick={handleback} disabled={AcitveState === 0}>back</Button>
                    <Button variant='contained' onClick={handlenext}  >
                      {
                        AcitveState === 3 ? "Submit" : "next"
                      }

                    </Button>
                  </Box>
               







            </>)
      }
      </Formstyle>


      </Box>

    </>
  )
}

export default LinearStepper;
