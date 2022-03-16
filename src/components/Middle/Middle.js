import React,{Fragment} from "react";
import lego from "../images/Lego@2x.png";
import "./Middle.css";

const Middle=()=>{
    return(
   <Fragment>
       <div className="container">
           <div className="row text-center">
               <div className="col-lg-4 col-sm-12">
               <img className="lego img-fluid" src={lego} />
               </div>
               <div className="col-lg-4 col-sm-12 text-center">
                   <h1 className="description"><span className="buy">buy</span> and <span className="buy">own </span>digital art.</h1>
                   <p className="create">Create and sell, you're an artist</p>
                   <button className="become">Become a creator</button>
               </div>
               <div className="col-lg-4 col-sm-12">
               <img className="lego-2 img-fluid" src={lego} />
               </div>
           </div>
       </div>
   </Fragment>
    )
}

export default Middle;