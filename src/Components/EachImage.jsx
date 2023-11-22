import PropTypes from "prop-types";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EachImage = ({services}) => {
    const {image} = services
    useEffect(() => {
        AOS.init();
        return ()=>{}
      }, []);
    return (
        <div data-aos="zoom-out-down">
            <div className="card card-compact w-[320px] lg:w-[400px] h-[400px] mb-5  rounded-none ml-3 bg-base-100 shadow-xl ">
  <figure><img className=" w-[320px] lg:w-[400px] h-[400px]" src={image} /></figure>
 
</div>
        </div>
    );
};
EachImage.propTypes={
    services : PropTypes.object.isRequired
}

export default EachImage;