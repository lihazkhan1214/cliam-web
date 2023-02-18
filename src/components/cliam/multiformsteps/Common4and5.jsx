import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import {styled} from "@mui/material";
const Tablestyle=styled('table')(({theme})=>({
    width:"100%",
    [theme.breakpoints.down("md")]:{
      overflowX:"auto"
    }
}))
function Common4and5({option}) {
  return (
  <>
  
  
  <Tablestyle className="table">

  <tbody>
      <tr>

          <th> <strong>
              Claim Details</strong></th>
          <th className='d-flex justify-content-end'><EditIcon color="primary"></EditIcon><strong style={{ color: "blue" }}>Edit</strong></th>
      </tr>

      <tr>

          <td>Date of Incident</td>
          <td className='d-flex justify-content-end '>12/19/2021</td>
      </tr>
      <tr>

          <td>Reason for claim</td>
          <td className='d-flex justify-content-end'>My product is not functioning properly</td>
      </tr>
      <tr>

          <td>Description</td>
          <td className='d-flex justify-content-end'>Lorem mistyped here</td>
      </tr>
      <tr>

          <th> <strong>
              Fulfillment Information</strong>



          </th>
          <th className='d-flex justify-content-end'><span style={{ color: "blue" }}>Need A Different Repair Option</span><br /> Send To Us
          </th>
      </tr>
      <tr>

          <td>Delivery Address</td>
          <td className='d-flex justify-content-end'>
          
          Cherry Road Boston, MA, 02108
          </td>
      </tr>
      <tr>

      <th> <strong>
      Personal Information</strong></th>
      <th className='d-flex justify-content-end'><EditIcon color="primary"></EditIcon><strong style={{ color: "blue" }}>Edit</strong></th>
  </tr>
  <tr>

  <td>FullName</td>
  <td className='d-flex justify-content-end'>
  
  Steve Smith
  </td>
</tr>
<tr>

<td>Address</td>
<td className='d-flex justify-content-end'>

123 Main Street
Atlanta, GA 30031
</td>
</tr>

<tr>

<td>Email Address</td>
<td className='d-flex justify-content-end'>

steve.smith@email.com
</td>
</tr>
<tr>

<td>Contact Number</td>
<td className='d-flex justify-content-end'>


(770) 552-0206
</td>
</tr>
{


    option&&
    <tr>

<td colSpan='2'>
<strong>Claim History</strong>
<br></br>
<span><input type="checkbox" />          Claim Submitted</span><br></br>
Date Reported: August 2nd, 2019
</td>

</tr>



}


  </tbody>
</Tablestyle>
  
  
  
  </>
  )
}

export default Common4and5
