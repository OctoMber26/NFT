import React,{Fragment} from "react";
import star from "../images/Path 1.svg";
import token from "../images/Token Icon.svg";
import message from "../images/Message.svg";
import scroll from "../images/Scoll.svg";
import "./Footer.css";

const Footer=()=>{
    return(
        <Fragment>
        <div className="container-fluid text-center">
            <div className="row mt-5">
                <div className="col-lg-4 col-sm-12">
                <div class="card-1">
  <img class="img-fluid card-img" src={star}/>
  <div class="card-body">
    <p class="card-text">Take part in NFT's pools
easily</p>
  </div>
</div>
                </div>
                <div className="col-lg-4 col-sm-12 middle-card">
                <div class="card">
  <img class="img-fluid card-img" src={token}/>
  <div class="card-body">
    <p class="card-text">Transform NFT's into
tookens</p>
  </div>
</div>
                </div>
                <div className="col-lg-4 col-sm-12">
                <div class="card-3">
  <img class="img-fluid card-img" src={message}/>
  <div class="card-body">
    <p class="card-text">Join other artists
who will help you</p>
  </div>
</div>
                </div>
            </div>
            <div className="scroll d-flex justify-content-center justify-content-sm-end gx-5">
            <p className="scroll-down">Scoll Down</p>
            <img className="img-fluid scroll-img" src={scroll} />
            </div>
        </div>
        
        </Fragment>
    )
}

export default Footer;