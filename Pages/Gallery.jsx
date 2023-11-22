import EachImage from "../Components/EachImage";
import { useLoaderData } from "react-router-dom";


const Gallery = () => {
    const services = useLoaderData()

    
    return (
        <div>
            <h2 className=" ml-7 lg:ml-none lg:text-center mt-10 text-xl lg:text-3xl font-quicksand font-bold">Welcome to Ananda Gallery</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-screen-sm lg:max-w-screen-xl  mx-auto my-32">
           {
            services.map(service => <EachImage key={services.id } services={service} ></EachImage> )
           }
        </div>
        </div>
    );
};

export default Gallery;