import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ColImage from '../components/ColImage';

export default function Pictureleft(props) {
    const items = props.image; 

    let mdVal = 6;

    if(items.length === 1){
        mdVal = 12;
    }

    const ItemList = () => {
        const itemsRef = useRef([]);
        items.forEach((item, i) => {
            itemsRef.current.push( <ColImage key={i} image={item} mdVal={mdVal} /> )
        });
        return(
            <Row>
                {itemsRef.current}
            </Row>
        );
    }
    
    return (
        <div className={props.display}>
            <Row className="pb-20 text-start">

                <Col lg={props.val} className={`${props.left? "lg:mr-12" : "d-none"} `}>
                    <ItemList />    
                </Col>

                <Col className="my-auto">

                    <p className="font-bold text-2xl text-rose-500 my-3">
                        {props.subhead}
                    </p>

                    <p className="text-3xl md:text-6xl head my-2" >
                        {props.head}
                    </p>

                    <p className="font-semibold my-3 ">
                        {props.description}
                    </p>

                    <button 
                    className="my-4 font-bold text-black bg-transparent border-b-4 hover:border-b-0 border-b-rose-500">
                        <Link to={props.click} relative="path">
                        {props.button}
                        </Link>
                    </button>

                </Col>

                <Col lg={props.val} className={`${props.left? "d-none" : "lg:ml-12"} `}>
                    <ItemList /> 
                </Col>

            </Row>

        </div>
    );
}