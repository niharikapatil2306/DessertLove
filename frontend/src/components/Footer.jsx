import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <Container fluid className="pt-16 px-10 md:px-16">
            <Row className="text-center head text-xl">
                <Col md={true}>
                    ADDRESS
                    <div className="text-base py-4">
                        72 Madison Avenue New York, NY 10016
                    </div>
                </Col>
                <Col md={true}>
                    CALL
                    <div className="text-base py-4">
                        (+91) 1234567890
                    </div>
                </Col>
                <Col md={true}>
                    EMAIL
                    <div className="text-base py-4">
                        admin@example.com
                    </div>
                </Col>
                <Col md={true}>
                    RESERVE
                    <br />
                    <button
                    className="my-4 text-base bg-transparent border-b-4 hover:border-0 border-b-rose-500">
                        <Link to='/reservations' className="hover:text-black">
                        DISCOVER MORE
                        </Link>
                    </button>
                </Col>
                <Col md={true} className="">
                    FOLLOW
                    <div className="text-base py-4">
                        <button className="bg-transparent pr-1">
                            <svg className=" fill-[#3c5a9a] hover:fill-black" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="28" height="28" 
                            viewBox="88.428 12.828 107.543 207.085">
                            <path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 
                            2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 
                            17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>
                            </svg>
                        </button>
                        <button className="bg-transparent px-1">
                            <svg className=" fill-[#03A9F4] hover:fill-black" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="28" height="28" 
                            viewBox="0 0 16 16">
                            <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 
                            0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 
                            0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 
                            2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 
                            0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 
                            6.544 0 0 0 16 3.539z"/>
                            </svg>
                        </button>
                        <button className="bg-transparent pl-1">
                        <svg className=" fill-[#FF8A80] hover:fill-black" 
                        xmlns="http://www.w3.org/2000/svg" 
                        data-name="Layer 1" 
                        width="28" height="28" 
                        viewBox="0 0 24 24"><path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,
                        0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,
                        0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,
                        0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,
                        22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,
                        .42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,
                        19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,
                        1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,
                        7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,
                        0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,
                        3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,
                        4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,
                        2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,
                        0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,
                        8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"/>
                        </svg>
                        </button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row className="py-8 text-center mx-0 text-md">
                <Col lg={5} xs={12} className="lg:text-start my-2">
                    ©2022 DESSERT.LOVE PATISSERIE.
                </Col>
                <Col className="my-2">
                    NEWSLETTER
                </Col>
                <Col className="my-2">
                    CAREERS
                </Col>
                <Col className="my-2">
                    PRIVACY
                </Col>
                <Col className="my-2">
                    TERMS OF USE
                </Col>
            </Row>
        </Container>
    );
}