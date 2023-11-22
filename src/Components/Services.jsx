import { useLoaderData } from "react-router-dom";
import EachService from "./EachService";


const Services = () => {
    const services = useLoaderData()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 ml-2 lg:ml-10">
            {
                services.map(service => <EachService key={service.id} services={service}></EachService>)
            }
        </div>
    );
};

export default Services;