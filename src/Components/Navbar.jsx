import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleSignOut = () =>{
    logOut()
    .then(result => {console.log('logged out',result);})
    .catch(error =>{console.log(error);})

  }
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about-us'}>About Us</Link></li>
      <li><Link to={'/gallery'}>Gallery</Link></li>
      <li> <Link to={'/register'}>Register</Link></li>
      <li><Link to={'login'}>Login</Link></li>
      <li><Link to={'testimonials'}>Testimonials</Link></li>
      <li><Link to={'blog'}>Blog</Link></li>
      </ul>
    </div>
    <a className="font-cursive text-xl lg:text-3xl">
       Ananda
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 lg:gap-5 uppercase ">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about-us'}>About Us</Link></li>
      <li><Link to={'/gallery'}>Gallery</Link></li>
      <li> <Link to={'/register'}>Register</Link></li>
      <li><Link to={'login'}>Login</Link></li>
      <li><Link to={'testimonials'}>Testimonials</Link></li>
      <li><Link to={'blog'}>Blog</Link></li>
    </ul>
    <p className="flex justify-center items-center text-gray-400 ml-2 lg:ml-16">|</p>
  </div>
  <div className="navbar-end">
                    {
                        user ?
                            <p className="">{user.displayName}</p>
                            :
                            ''

                    }
                    {
                        user ?
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-7 lg:w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            :
                            ''

                    }
                    {
                        user ?
                            <button onClick={handleSignOut} className='btn bg-orange-300 normal-case'>SignOut</button>
                            :
                            <Link to='/login'>
                                <button className='btn bg-orange-300 normal-case'>Login</button>
                            </Link>

                    }

                </div>
</div>
        </div>
    );
};

export default Navbar;