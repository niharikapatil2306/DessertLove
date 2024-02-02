import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import bg from "../assets/img/cafe.png"

export default function ReservationContainer(){

    return(
        <Container fluid className="py-16 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
            <Row>
                <Row >
                    <Col className='text-center font-black fs4 text-4xl md:text-5xl my-2 head'>
                        MAKE A RESERVATION
                    </Col>
                </Row>
                <Row className="">
                    <Col className='text-center text-lg fw-bold my-2'>
                        <Button
                        className="my-5 p-2 border-4 fw-bold border-black hover:border-black rounded-none bg-transparent text-black">
                            <Link to='/reservations'  className="hover:text-black">
                                BOOK A TABLE NOW
                            </Link>
                        </Button>
                        <br />
                        <p className= "fs2 text-lg">
                            THE FINEST PASTERIES. EXQUISITE SHAKES. GENUINE SERVICE.
                        </p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}