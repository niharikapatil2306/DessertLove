import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import star from "../assets/svg/star1.svg";

export default function PageInfo(props) {

    return (
        <Container className="h-4/5 contain" fluid>
            <Row className="mx-0">
                <Row >
                    <Col className='text-center fs1 text-5xl head'>
                        {props.heading}
                    </Col>
                    <img src={star} alt="" className={`h-24 d-inline mx-2 ${props.info? '':'d-none'}`} />
                </Row>
                <Row className="">
                    <Col className= "text-center fs2 text-lg fw-bold my-1" >
                        
                        <div className={`${props.info? 'show': ' show d-none'}`}>
                            {props.infoline} 
                        </div>
                        <Button 
                        className={`${props.buttonShow? 
                        'space p-2 border-2 fw-bold border-black hover:border-black rounded-none bg-transparent text-black' : 
                        'd-none' }`} >
                            <Link to='/menus'  className="hover:text-black">
                                DISCOVER MENUS
                            </Link>

                        </Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}