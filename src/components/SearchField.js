import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField=()=>{
    const [term,setTerm]=useState("");
    const {fetchData,setSearchImage}=useContext(ImageContext);

    const handleInputChange=(e)=>{
        setTerm(e.target.value);
    }
    const handleClick=()=>{
        fetchData(`https://api.unsplash.com/search/photos?page=1&query=${term}&per_page=30&client_id=F9y_nacwti27FraKcmFN7tsfDqlRAtTFBVZFvCp-N_s`)
        setSearchImage(term);
        setTerm("");
    }
    const handleEnterSearch=(e)=>{
        if(e.key === 'Enter'){
            handleClick();
        }
    }
    return(
    <div className="flex">
        <input
        className="bg-white-50 border border-gray-300 text-md w-full indent-2 p-2.5 outline-none focus:border-blue-500
        focus:ring-2 rounded-tl rounded-bl" type="search" placeholder="search" value={term}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <button 
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 
        focus:ring-blue-300 diabled-gray-400"
        disabled={!term}
        onClick={handleClick}
        >
            Search</button>
    </div>
    )
}

export default SearchField;