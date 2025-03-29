import { Container, Row, Col } from "react-bootstrap";
import location from "../assets/svg/location1.svg";
import phone from "../assets/svg/phone.svg";
import mail from "../assets/svg/mail1.svg";
import PageInfo from "../components/PageInfo";
import NavigationBar from "./NavigationBar";

export default function Navigation(props) {

    return (
        <Container fluid className="bg-cover bg-no-repeat container1 g-0 position-relative"
            style={{ backgroundImage: `url(${props.bg})` }}>

            <Container fluid className="py-4 px-6 d-none d-xl-block">

                <Row>
                    <Col xs={7}>
                        <img src={location} className="h-5 d-inline mx-2" alt="" />
                        Silk St, Barbican, London EC2Y 8DS, UK
                    </Col>
                    <Col className="text-center">
                        <img src={phone} className="h-5 d-inline mx-2" alt="" />
                        (+91) 1234567890
                    </Col>
                    <Col className="text-center">
                        <img src={mail} className="h-5 d-inline mx-2" alt="" />
                        admin@example.com
                    </Col>
                </Row>

            </Container>

            <hr className="border-black" />

            <NavigationBar />

            <PageInfo info={props.info}
                buttonShow={props.buttonShow}
                heading={props.heading}
                infoline={props.infoline} />

        </Container>
    );
}