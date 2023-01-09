import React from "react";
// import '../../public/confused.webp'
import '../App.css'

const None=()=>{
        console.log("No image");
    return(
    <div className="None">
       <div className="text-center mt-1 font-bold text-2xl">Sorry! No Images Found</div>
        <figure className="none-img">
        {/* <img src="D:/parallax/img-search/img-app/public/confused.webp" /> */}
        <img src={require('./confused.webp')} />

        </figure>
        
    </div>
    )
}

export default None
