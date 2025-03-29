import About from "../components/About";
import Footer from "../components/Footer";
import MenuCards from "../components/MenuCards";
import Navigation from "../components/Navigation";
import PictureCards from "../components/PictureCards";
import ReservationContainer from "../components/ReservationContainer";

export default function Home(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={true} 
            heading={'A SWEET EXPERIENCE'}
            infoline={'THE FINEST PASTRIES. EXQUISITE SHAKES. GENUINE SERVICE.'} 
            show ={props.show} />
            <About />
            <PictureCards />
            <MenuCards containerC={"pt-20 px-16 bg-rose-100"} />
            <ReservationContainer />
            <Footer />
        </>
    );
}