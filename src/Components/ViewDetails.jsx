import {  useLoaderData} from "react-router-dom";
import EachDetail from "./EachDetail";


const ViewDetails = () => {
   
    const services = useLoaderData()
   
  
    return (
        <div>
       
     {
        services.map(service => <EachDetail key={service.id} services={service} ></EachDetail>)
       }
        </div>
    );
};

export default ViewDetails;