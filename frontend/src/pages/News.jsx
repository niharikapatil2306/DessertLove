import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ReservationContainer from "../components/ReservationContainer";

import { useRef } from 'react';

import m1 from "../assets/img/dessert52.png";
import m2 from "../assets/img/dessert51.png";
import m3 from "../assets/img/dessert50.png";

import { Container, Row } from "react-bootstrap";

import Pictureleft from "../components/Pictureleft";


export default function News(props){

    const head = ['WONDERFUL EATING EXPERIENCE', 
                  'FOOD IS THE FOUNDATION OF TRUE HAPPINESS', 
                  'LOVE AND FOOD']; 

    const img = [m1, m2, m3];
    
    const ItemList = () => {
        const itemsRef = useRef([]);
        head.forEach((h, i) => {
            let imgSrc = img[i];
            itemsRef.current.push( 
                <Pictureleft key={i} image={[imgSrc]}
                    subhead={"NEWS"}
                    head={h}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"}
                    left={true}
                    button={"READ MORE"}
                    val={3}
                />
            )
        });
        return(
            <Row className='my-12'>
                {itemsRef.current}
            </Row>
        );
    }
    return(
        <>
            <Navigation bg={props.bg} 
            info={false} 
            buttonShow={false}
            heading={'NEWS'} />

            <Container>
                <ItemList />
            </Container>

            <ReservationContainer />
            <Footer />
        </>
    );
}