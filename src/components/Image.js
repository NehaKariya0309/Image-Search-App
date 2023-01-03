import "../App.css"

const Image=({key,data})=>{
    return(
        
        <a href={data.urls.regular} target="_blank">
            <figure className="container-img">
            <img className="h-72 w-full object-cover rounded-lg shadow-md search-img" src={data.urls.small} alt={data.alt_description} />
            </figure>
        </a>
    )
}
export default Image