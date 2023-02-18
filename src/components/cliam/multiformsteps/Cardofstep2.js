import React from 'react';


function Cardofstep2({ title, url, price, para, option }) {
    return (
        <>

   
   
            <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>

                <div className="card-body ">
                    <div className="d-flex align-items-center">
                        <div>
                            <img src={url} alt="" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <h5 className="card-title">{title}</h5>
                    </div>

                    <p className="card-text">{para}</p>
                    {
                        option &&
                        <div className="d-flex justify-content-between">

                        <p>Dedicated</p>
                        <p>{price}</p>


                    </div>
                        }
                    

                </div>
            </div>

        </>
    )
}

export default Cardofstep2