import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Message from "../Components/Message";
import Services from "../Components/Services";


const Home = () => {
    return (
        <div className="">
         <Banner></Banner>
         <Services></Services>
         <Message></Message>
       <Faq></Faq>
         <Footer></Footer>
        </div>
    );
};

export default Home;