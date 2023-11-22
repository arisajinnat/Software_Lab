import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const Foundation = () => {
    return (
        <div >
            <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            </div>
          
            <Outlet></Outlet>
        </div>
    );
};

export default Foundation;