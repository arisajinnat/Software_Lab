import { Link } from "react-router-dom";

const Message = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/dJ4FfJ3/home-main-image-2-removebg-preview.png" className=" max-w-xs lg:max-w-sm  " />
    <div>
      <h1 className=" text-3xl ml-10 lg:ml-none lg:text-5xl font-bold font-quicksand">Our Message </h1>
      <p className="py-6 px-6 lg:px-none "> Our mission is simple: to turn your dreams into reality. We are here to be your partners, your confidants, and your trusted guides throughout this exciting adventure. We take immense pride in curating unforgettable moments, crafting enchanting atmospheres, and ensuring that your day is nothing short of perfection.</p>
     <Link to={'/register'}> <button className="btn bg-orange-300 normal-case ">Register Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Message;