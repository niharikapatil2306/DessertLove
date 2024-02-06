import Footer from '../components/Footer';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Navigation from '../components/Navigation';
import ReservationContainer from '../components/ReservationContainer';

export default function Menus(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={false} 
            heading={'PATISSERIES'}
            infoline={'DISCOVER OUR EXQUISITE MENU'} />

            <Menu />
            <ReservationContainer />
            <Footer />
        </>
    );
}