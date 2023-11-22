import PropTypes from "prop-types";
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import { Link } from "react-router-dom";
// import EachDetail from "./EachDetail";




const EachService = ({services}) => {

    useEffect(() => {
        AOS.init();
        return ()=>{}
      }, []);


    const {name,image,price,short_description,button_text,id}= services
    return (
    <div>
     
      
      <div className=" ml-5 lg:max-w-[1530px] mx-auto" data-aos="zoom-in-up">
            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl rounded-none mb-5">
  <figure><img className=" w-[400px] lg:w-[500px] h-[200px] lg:h-[300px]" src={image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
    <p>{price}</p>{
      
        
          <Link key={services.id} to={`eachDetail/${id}`}> <div className="card-actions justify-end">
          <button 
           className="btn bg-orange-300 normal-case">{button_text }</button>
        </div></Link>
         
    
       
      
    }
    
  </div>
</div>
        </div>
    </div>
    );
};
EachService.propTypes={
    services : PropTypes.object.isRequired
}

export default EachService;