import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ReservationContainer from "../components/ReservationContainer";

import { useRef } from 'react';

import m1 from "../assets/img/dessert56.png";
import m2 from "../assets/img/dessert59.png";
import m3 from "../assets/img/dessert67.png";

import { Container, Row } from "react-bootstrap";

import Pictureleft from "../components/Pictureleft";


export default function News(props) {

    const head = ['SWEET SYMPHONY',
        'VELVET TRUFFLE',
        'BREWED EUPHORIA'];

    const img = [m1, m2, m3];

    const desc = ['Dive into a world of sweetness and sophistication as our dessert haven unveils a mesmerizing array of confectionery wonders. From delectable cakes to exquisite pastries, we bring you an experience that transcends the ordinary and celebrates the extraordinary.',
        'Introducing our latest indulgence, the "Velvet Truffle." Immerse yourself in a world of opulence as layers of smooth dark chocolate ganache, luscious raspberry coulis, and a velvety chocolate mousse come together in a flawless dance of flavors.',
        'Introducing the latest addition to our liquid symphony – "Brewed Euphoria." Immerse yourself in a world of delight as rich, velvety coffee meets the indulgent swirl of caramel, creating a harmonious dance of flavors that transcends the ordinary.'
    ]

    const clickLink = ['sweet-symphony',
        'velvet-truffle',
        'brewed-euphoria'];

    const ItemList = () => {
        const itemsRef = useRef([]);
        head.forEach((h, i) => {
            let imgSrc = img[i];
            let description = desc[i];
            let clickL = clickLink[i];
            itemsRef.current.push(
                <Pictureleft key={i} image={[imgSrc]}
                    subhead={"NEWS"}
                    head={h}
                    description={[description]}
                    left={true}
                    click={clickL}
                    button={"READ MORE"}
                    val={3}
                />
            )
        });
        return (
            <Row className='my-12'>
                {itemsRef.current}
            </Row>
        );
    }
    return (
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