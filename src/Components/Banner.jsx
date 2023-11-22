import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'


const Banner = () => {
    return (
        <div className='max-w-screen-sm lg:max-w-[1530px]'>
            <div className="   max-w-[1530px] hero min-h-[500px] mb-32">
            <div className="carousel w-[375px] lg:w-full">
  <div id="slide1" className="carousel-item relative w-[375px] lg:w-[1530px] h-[500px]">
    <img src={banner1} className="w-[375px] lg:w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-[375px] lg:w-[1530px] h-[500px]">
    <img src={banner2} className="w-[375px] lg:w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative  w-[375px] lg:w-[1530px] h-[500px]">
    <img src={banner3} className="w-[375px] lg:w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-[375px] lg:w-[1530px] h-[500px]">
    <img src={banner4} className="w-[375px] lg:w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  <div className="hero-overlay bg-white bg-opacity-[0.2]"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-cursive text-slate-800">Wedding Vibes</h1>
      <p className="mb-5 font-quicksand text-stone-900 font-normal text-xs lg:font-semibold">Turning Dreams into Unforgettable Moments</p>
      <button className="btn bg-orange-300  text-gray-900 btn-ghost normal-case">Book Your Happiness</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;