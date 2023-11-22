

const ErrorPage = () => {
    const realoadBtn = ()=>{
        window.location.href = "/";
    }
    return (
        <div>
           
      
        <div className="max-w-[1300px] mx-auto">
            <div className="  mt-10 text-gray-700 font-thin  ml-10 md:ml-64 lg:ml-80 lg:mt-24 text-lg md:text-xl lg:text-5xl ">
            <h1>Oops.. An Error has Occured</h1>
            <h2 className=" ml-10 md:ml-10 lg:ml-28">Please Try Again</h2>
            <button onClick={realoadBtn} className=" ml-14 md:ml-16 lg:ml-64 mt-10  btn btn-accent">Reload</button>
        </div>
        </div>
        </div>
    );
};

export default ErrorPage;