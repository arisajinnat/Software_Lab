import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="max-w-[300px] lg:max-w-none">
        <div className="card card-compact ml-2 lg:ml-none lg:mx-auto w-[300px] lg:w-[1100px] my-20 bg-base-100 shadow-xl">
  <figure><img className=" w-[300px] lg:w-[1100px] h-[200px] lg:h-[500px]" src='https://i.ibb.co/kK8SJDh/card3.jpg' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">About Us</h2>
    <p>Welcome to Ananda Event Planning, where dreams become reality and love stories come to life.

At Ananda, we understand that your wedding day is one of the most significant moments in your life. It is a day filled with love, joy, and the promise of forever. That is why we arere here to make sure your special day is everything you have ever imagined and more.

Our team of passionate and dedicated wedding planners is here to turn your vision into a seamless, stress-free reality. With years of experience in the industry, we bring creativity, attention to detail, and a personal touch to every event we plan.

What sets us apart? Its our commitment to understanding your unique story. We believe that every couple is different, and your wedding should reflect your individual style, personality, and love story. We work closely with you to create a customized plan that captures the essence of who you are as a couple.</p>
    <div className="card-actions justify-center lg:justify-end">
    <Link to={'/register'}>  <button className="btn bg-orange-300 normal-case">Book Now</button>
    </Link> </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;