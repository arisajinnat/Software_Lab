

const Footer = () => {
    return (
        <div>
            <footer className=" mt-28  max-w-[1530px] footer p-10 bg-gray-200 text-slate-700">
  <aside>
   <h4 className="text-4xl ml-10 lg:ml-20 font-cursive">Ananda</h4>
    <p className="text-xs ml-20">Your Happiness<br/>our responsibility</p>
  </aside> 
  <form>
    <header className=" text-lg lg:text-xl text-slate-950" >Subscribe to our Newsletter</header> 
    <fieldset className="form-control w-64 lg:w-80">
      <label className="label">
        <span className="label-text ">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-orange-300 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
    
</footer>
        </div>
    );
};

export default Footer;