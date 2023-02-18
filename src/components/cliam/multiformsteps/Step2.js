import React from 'react';
import { Divider,styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Cardofstep2 from './Cardofstep2';
const Wrapper=styled('div')({

background:"#DEE0E9",
borderRadius:"8px",
padding:"10px"

});
const Mapicon=styled(PlaceIcon)`
color:#6E736E


`




const cardarr = [{
    title: "Mail in repair",
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores!",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsch_qGFrcHQxEha2tCgIA_dT4eDXMwZ5UpA&usqp=CAU",
    price: "$100",
    option: true

},
{
    title: "in store repair",
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores!",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsch_qGFrcHQxEha2tCgIA_dT4eDXMwZ5UpA&usqp=CAU",
    price: "$100",
    option: true

},
{
    title: "reimbursement",
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores!",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsch_qGFrcHQxEha2tCgIA_dT4eDXMwZ5UpA&usqp=CAU",
    price: "$100",
    option: false


}



]



function Step2({ settitle }) {
    const maplogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgffaaitQZe_bptO93kMae5v0EM0LySdCJLA&usqp=CAU";
    settitle(" Service Option")
    return (
        <>

            <Wrapper className="row">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <div>
                            <Mapicon ></Mapicon>
                        </div>
                        <div className="paras">
                            <p className='p-0 m-0'>Service option(s) are for your product located at:</p>
                            <h6 className='m-0 p-0'>1155 Ponce DeLeon Long address name Ave. Atlanta GA, 12345</h6>
                        </div>

                    </div>
                    <p>Not your product's location? <a href=''>Enter a new address</a></p>

                        <Divider></Divider>
                    

                </div>

            </Wrapper>
            <div className="row mt-4">






                {
                    cardarr.map((item, ind) => {
                        return <div className="col-md-6 ">

                            <  Cardofstep2 title={item.title} url={item.url} price={item.price} para={item.para} option={item.option} />

                        </div>
                    })
                }












            </div>




        </>
    )
}

export default Step2
