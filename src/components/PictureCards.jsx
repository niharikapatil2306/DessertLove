import { Col, Container, Image, Row } from "react-bootstrap";

import d1 from "../assets/img/dessert25.png";
import d2 from "../assets/img/dessert17.png";
import d3 from "../assets/img/dessert12.png";
import d4 from "../assets/img/dessert8.png";

export default function PictureCards(){
    return(
        <Container fluid className="p-0 g-0">
            <Row className=" p-0 g-0" xs >
                <Col lg={5}>
                    <Image src={d1} className=" g-0 h-full" fluid />
                </Col>
                <Col>
                    <Row className="gx-0">
                        <Col md>
                            <Image src={d2} fluid className=" g-0 h-full" />
                        </Col>
                        <Col className="bg-rose-50">
                            <p className="text-4xl mx-12 mt-4 xl:pt-12 head">
                                Red Velvet Cupcake 
                            </p>
                            <p className="mx-12 my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate 
                                eaque, ratione vel facere iure tempore veniam nobis. 
                            </p>
                            <button className="my-4 mx-12 font-bold text-black bg-transparent border-b-4 hover:border-b-0 border-b-rose-600">
                                DISCOVER MORE
                            </button>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col md={{span: 6 ,order:2}} xs={12}>
                            <Image src={d3} fluid className=" g-0 h-full"/>
                        </Col>
                        <Col xs className="bg-rose-50">
                            <p className="text-4xl mx-12 mt-4 xl:pt-12 head">
                                Minty Macroons
                            </p>
                            <p className="mx-12 my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate 
                                eaque, ratione vel facere iure tempore veniam nobis. 
                            </p>
                            <button className="my-4 mx-12 font-bold text-black bg-transparent border-b-4 hover:border-b-0 border-b-rose-600">
                                DISCOVER MORE
                            </button>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={{span: 12 ,order:2}} md={6} className="bg-rose-50">
                            <p className="text-4xl mx-12 mt-4 xl:pt-12 head">
                                Blueberry Cake 
                            </p>
                            <p className="mx-12 my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate 
                                eaque, ratione vel facere iure tempore veniam nobis. 
                            </p>
                            <button className="my-4 mx-12 font-bold text-black bg-transparent border-b-4 hover:border-b-0 border-b-rose-600">
                                DISCOVER MORE
                            </button>
                        </Col>
                        <Col md>
                            <Image src={d4} fluid className=" g-0 h-full"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
