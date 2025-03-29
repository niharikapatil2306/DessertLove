import { Card, Col, Container, Row } from "react-bootstrap";

import BookTableForm from "../components/BookTableForm";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Reservations(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={false}
            heading={'RESERVATIONS'} 
            infoline={'For banquet inquiries, please call at (+91) 1234567890'} />

            <Container fluid className="mt-16 px-8">
                <Row className="">
                    
                    <Col xxl={2} xs={12}  className="my-2">
                        <Card className="bg-transparent text-center py-20 h-full border-2 border-rose-700">
                            <div className="my-auto">
                                <Card.Header className="bg-transparent border-0 text-4xl head font-bold">
                                    ADDRESS
                                </Card.Header>
                                <Card.Body>
                                72 Madison Avenue 
                                <br />
                                (Between 27th & 28th Street)
                                <br />
                                New York, NY 10016
                                <br />
                                <br />
                                Phone: (212) 555-6767
                                <br />
                                <button className="my-4 font-bold text-black bg-transparent border-b-4 hover:border-b-0 border-b-rose-500">
                                    DISCOVER MORE
                                </button>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>

                    <Col className="my-2">
                        <Card className="bg-transparent text-center h-full py-8 border-2 border-rose-700">
                            <Card.Header className="bg-transparent border-0 text-lg font-bold text-rose-600">
                            ONLINE RESERVATION
                            <br />
                            <p className="text-6xl head text-black "> 
                                Book a Table 
                            </p>
                            </Card.Header>
                            <Card.Body>
                            <BookTableForm />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={2} xs={12}  className="my-2">
                        <Card className="bg-transparent text-center h-full py-8 border-2 border-rose-700">
                            <div className="my-auto">
                                <Card.Header className="bg-transparent border-0 text-4xl head font-bold">
                                    OPENING HOURS
                                </Card.Header>
                                <Card.Body>
                                LUNCH
                                <br />
                                Monday – Friday
                                <br />
                                12 pm to 3:30 pm
                                <br />
                                <br />
                                DINNER
                                <br />
                                Monday – Saturday
                                <br />
                                4 pm to 11 pm
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>

            <Footer />
        </>
    );
}