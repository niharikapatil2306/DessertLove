import m1 from "../assets/img/dessert34.png";
import m2 from "../assets/img/dessert39.png";
import m3 from "../assets/img/dessert40.png";
import m4 from "../assets/img/dessert37.png";
import shop from "../assets/img/shop1.png";

import { useRef } from 'react';
import { Container, Row } from "react-bootstrap";

import Pictureleft from "../components/Pictureleft";
import Column from "../components/Column";

export default function MenuCards(props){

    const head = ['Pastry', 'Milkshakes', 'Cupcakes', 'Donuts']; 
    const img = [m1, m4, m2, m3];

    const ItemList = () => {
        const itemsRef = useRef([]);
        head.forEach((h, i) => {
            let imgSrc = img[i];
            itemsRef.current.push( 
                <Column key={i} 
                    classCol={'text-center mx-auto my-4'} 
                    card={"transition mb-3 ease-in-out hover:-translate-y-4 border-2 rounded-2 border-rose-600"}
                    img={imgSrc}
                    classImg={"g-0"}
                    classIcon={"d-none"}
                    desc={"d-none"}
                    head={h} 
                /> 
            )
        });
        return(
            <Row className="my-8 mb-20 fs3 text-4xl head">
                {itemsRef.current}
            </Row>
        );
    }

    return(
        <Container fluid className={props.containerC}>

            <ItemList />

            <Pictureleft display={props.display}
                image={[shop]} 
                subhead={"OUR SHOP"} 
                head={"PÂTISSERIE "} 
                description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"} 
                left={true}
                button={"DISCOVER MORE"}
                val={6}
            />
        
    </Container>
    );
}