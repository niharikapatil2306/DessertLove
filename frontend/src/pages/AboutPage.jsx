import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRef } from 'react';

import Column from '../components/Column';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Pictureleft from '../components/Pictureleft';
import ReservationContainer from '../components/ReservationContainer';

import cafe from "../assets/img/cafe1.png";
import dessert1 from "../assets/img/dessert11.png";
import d1 from "../assets/img/dessert15.png";
import d2 from "../assets/img/dessert20.png";
import d3 from "../assets/img/dessert26.png";
import d4 from "../assets/img/dessert7.png";
import m1 from "../assets/img/dessert42.png";
import m2 from "../assets/img/dessert45.png";


import medal from "../assets/svg/medal.svg";

export default function AboutPage(props) {

    const head = ['NEW YORK TIMES', 'NEW YORK TIMES', 'NEW YORK TIMES', 'NEW YORK TIMES']; 

    const ItemList = () => {
        const itemsRef = useRef([]);
        head.forEach((h, i) => {
            itemsRef.current.push( 
                <Column key={i} classCol={'text-center my-4'}
                    card={"d-none"}
                    icon={medal}
                    classIcon={"h-8 d-inline mx-2"}
                    desc={"text-lg fw-bold head my-2"}
                    desc1={"Best Patiserie & Deserts Cafe"}
                    desc2={"New York, NY"}
                    classH={'text-4xl head'}
                    head={h} 
                /> 
            )
        });
        return(
            <Row className='my-12'>
                {itemsRef.current}
            </Row>
        );
    }

    return (
        <>
            <Navigation bg={props.bg}
                info={true}
                buttonShow={false}
                heading={'ABOUT US'}
                infoline={'A PATISSERIE CAFE'} />

            <Container className='text-center'>

                <Row className='lg:px-36'>
                    <Col>

                        <p className='text-6xl head fs4 my-8 mt-28'>
                            MORE THAN 30 YEARS OF RICH TRADITION
                        </p>

                        <p className='my-12 fs2 text-2xl'>
                            Since opening our first restaurant in New York City in 1989,
                            The DessertLove has brought together our passion for quality pasteries and cakes,
                            family values, and sweet cafe experience. Every time you eat with us,
                            you’re tasting years of hard work, innovation, and commitment to good desserts.
                        </p>
                        <Image src={cafe} fluid className='mb-8' />

                    </Col>
                </Row>

                <ItemList />

                <Pictureleft image={[dessert1]}
                    subhead={"ROSE CUPCAKE'S"}
                    head={"SWEET DELICACY"}
                    description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"}
                    left={true}
                    button={"DISCOVER MORE"}
                    val={6}
                />

                <Pictureleft image={[d1, d2, d3, d4]}
                    subhead={"THE CLASSIC FLAVOUR"}
                    head={"DISCOVER OUR DESSERTS"}
                    description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"}
                    left={false}
                    button={"VIEW FULL MENU"}
                    val={6}
                />

                <Pictureleft image={[m1,m2]}
                    subhead={"SWEET REFRESHING DRINKS"}
                    head={"IMPECABBLE SMOOTHIES & SHAKES"}
                    description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"}
                    left={true}
                    button={"DISCOVER MORE"}
                    val={6}
                />

            </Container>

            <ReservationContainer />
            <Footer />
        </>
    );
}