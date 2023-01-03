
import Image from "./Image";
import { useContext } from "react";
import { ImageContext } from "../App";
import Skeleton from "./Skeleton";
import None from "./None"
const Images =()=>{
    const {response,isLoading,searchImage}=useContext(ImageContext);

    // console.log(response);
    // console.log(response.length);
    return(
        <>
     
        <h1 className="text-center mt-6 underline text-2xl">
            Results for {searchImage||"Office"}
        </h1>
        
            {
                isLoading?<div
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto  px-4"
                > <Skeleton item={10} />
                </div>:
                response && response.length!==0?
                <div
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-4"
                >
                {response.map((data,key)=>
                   <Image key={key} data={data}/>
                
               )
                }
               </div>
                 :
                <None /> 

            }

        
          
           

       
        
        
        </>
    )
}

export default Images;