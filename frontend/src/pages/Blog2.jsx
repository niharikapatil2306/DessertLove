import Navigation from "../components/Navigation";
import bg from "../assets/img/dessert80.png";
import ReservationContainer from "../components/ReservationContainer";
import Footer from "../components/Footer";
import { Button, Col, Container, Form, FormControl, FormLabel, Row } from "react-bootstrap";

import velvet from "../assets/img/dessert74.png";
import cafe1 from "../assets/img/cafe13.png";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import { Link } from "react-router-dom";

export default function Blog2() {

    return (
        <>
            <Navigation bg={bg}
                info={true}
                buttonShow={false}
                heading={'VELVET TRUFFLE'}
                infoline={'BY ELISE CARSTAIR . JUN 23, 2022 . NEWS'} />

            <Container fluid className="bg-pink-100 py-20 g-0 text-justify px-4 md:px-12">
                <Row className="">
                    <Col xs={4} className="px-10">

                        <div className="font-bold text-lg text-opacity-70 text-rose-800">
                            OUR MISSION
                        </div>
                        <img className="py-6" src={cafe1} alt="" />
                        <p className="text-sm text-opacity-75 text-gray-900 font-semibold">
                            Our desserts are not just treats for the taste buds; they are an art form,
                            a visual and gastronomic delight that will leave you craving for more.
                        </p>

                        <div className="text-base py-4">
                            <button className="bg-transparent pr-1">
                                <svg className="h-6 fill-[#3c5a9a] hover:fill-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28" height="28"
                                    viewBox="88.428 12.828 107.543 207.085">
                                    <path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 
                            2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 
                            17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>
                                </svg>
                            </button>
                            <button className="bg-transparent px-1">
                                <svg className="h-6 fill-[#03A9F4] hover:fill-black"
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
                                <svg className="h-6 fill-[#FF8A80] hover:fill-black"
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

                        <div className="mb-8">
                            <p className="font-bold text-md text-opacity-70 text-rose-800">
                                OPENING HOURS
                            </p>
                            <div className="text-sm mt-2 font-semibold">
                                <Row>
                                    <Col className="flex justify-between">
                                        <div>
                                            Monday - Friday
                                        </div>
                                        <div>
                                            09:00 - 22:00
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="">
                                    <Col className="flex justify-between">
                                        <div>
                                            Saturday
                                        </div>
                                        <div>
                                            11:00 - 00:00
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="">
                                    <Col className="flex justify-between">
                                        <div>
                                            Sunday
                                        </div>
                                        <div>
                                            11:00 - 23:00
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>
                    <Col className="px-8">

                        <div className="font-serif font-medium mb-8 text-lg">
                            Introducing our latest indulgence, the "Velvet Truffle." Immerse yourself in a world of opulence
                            as layers of smooth dark chocolate ganache, luscious raspberry coulis, and a velvety chocolate mousse
                            come together in a flawless dance of flavors. Encased in a dark chocolate shell, this exquisite
                            truffle is a testament to the art of dessert craftsmanship.
                        </div>
                        <div className="font-serif font-medium mb-8 text-lg">
                            At our dessert haven, we believe in crafting experiences that transcend the ordinary. Velvet
                            Truffle is not just a dessert; it's a luxurious journey into the heart of flavor. The seamless blend
                            of rich chocolate and vibrant raspberry creates a symphony of tastes that promises to leave a lasting
                            impression.
                        </div>
                        <img src={velvet} alt="" className="mb-12" />

                        <div className="font-serif font-medium mb-8 text-2xl">
                            EXPERIENCE DECADENCE LIKE NEVER BEFORE WITH VELVET TRUFFLE, WHERE THE ALLURE OF DARK
                            CHOCOLATE MEETS THE SEDUCTION OF RASPBERRY IN A DANCE OF PURE INDULGENCE.
                        </div>
                        <div className="font-serif font-medium mb-8 text-lg">
                            Stay tuned as we unravel more tales from our dessert laboratory, where passion and precision
                            converge to create extraordinary treats. Indulge in the richness of Velvet Truffle and
                            witness dessert artistry at its finest. Every bite is an invitation to savor the luxury
                            of our culinary creations, and each visit to our haven is a promise of unparalleled delight.
                        </div>
                        <div className="border-t-2 border-gray-400 border-dotted">
                        </div>
                        <div className="mb-8 mt-2 md:flex justify-between">
                            <div>
                                <Button className="hover:bg-rose-300 my-2 mx-2 font-semibold text-black border-0 bg-gray-700 bg-opacity-30 rounded-full ">
                                    Food Philosophy
                                </Button>
                                <Button className="hover:bg-rose-300 my-2 mx-2 font-semibold text-black border-0 bg-gray-700 bg-opacity-30 rounded-full ">
                                    Our Story
                                </Button>
                            </div>
                            <div className="my-2">
                                <Button className="justify-end hover:bg-gray-700 hover:bg-opacity-50 mx-2 p-2 hover:border-gray-700 font-semibold text-black border-1 border-opacity-50 border-gray-700 rounded-full ">
                                    <img className="h-5" src={facebook} alt="" />
                                </Button>
                                <Button className="justify-end hover:bg-gray-700 hover:bg-opacity-50 mx-2 p-2 hover:border-gray-700 font-semibold text-black border-1 border-opacity-50 border-gray-700 rounded-full ">
                                    <img className="h-5" src={twitter} alt="" />
                                </Button>
                                <Button className="justify-end hover:bg-gray-700 hover:bg-opacity-50 mx-2 p-2 hover:border-gray-700 font-semibold text-black border-1 border-opacity-50 border-gray-700 rounded-full ">
                                    <img className="h-5" src={instagram} alt="" />
                                </Button>
                            </div>
                        </div>
                        <div className="mb-10 flex justify-between">
                            <Link to="/news/brewed-euphoria" path="relative">
                                <div>
                                    <p className="text-sm mb-2 font-semibold font-mono text-gray-700 text-opacity-75">
                                        {`<`} PREVIOUS POST
                                    </p>
                                    <p className="text-lg font-semibold font-serif text-black text-opacity-85">
                                        BREWED EUPHORIA
                                    </p>
                                </div>
                            </Link>
                            <Link to="/news/sweet-symphony" path="relative">
                                <div>
                                    <p className="flex justify-end text-sm mb-2 font-semibold font-mono text-gray-700 text-opacity-75">
                                        NEXT POST {`>`}
                                    </p>
                                    <p className="text-lg font-semibold font-serif text-black text-opacity-85">
                                        SWEET SYMPHONY
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <hr className="h-1 bg-black bg-opacity-100 mb-16"></hr>
                        <div className="mb-16">
                            <p className="text-3xl font-medium font-serif mb-4">
                                LEAVE A REPLY
                            </p>
                            <p className="font-medium">
                                Your email address will not be published. Required fields are marked *
                            </p>
                            <Form className="my-4">
                                <Row className="mb-4">
                                    <Col>
                                        <FormLabel className="font-medium">
                                            Name *
                                        </FormLabel>
                                        <FormControl className="bg-transparent border-b-1 border-transparent border-b-black rounded-none" type="text" />
                                    </Col>
                                    <Col>
                                        <FormLabel className="font-medium">
                                            Email *
                                        </FormLabel>
                                        <FormControl className="bg-transparent border-b-1 border-transparent border-b-black rounded-none" type="email" />
                                    </Col>
                                    <Col>
                                        <FormLabel className="font-medium">
                                            Website
                                        </FormLabel>
                                        <FormControl className="bg-transparent border-b-1 border-transparent border-b-black rounded-none" type="text" />
                                    </Col>
                                </Row>
                                <Row>
                                    <FormLabel className="font-medium">
                                        Comment *
                                    </FormLabel>
                                    <FormControl className="bg-transparent mx-2 border-b-1 pb-3 border-transparent border-b-black rounded-none" as="textarea" rows="3" />
                                </Row>
                                <Row>
                                    <Button className="text-black mt-8 w-fit mx-2 px-8 text-sm py-2 bg-rose-300 border-transparent hover:border-white rounded-none fw-bold hover:bg-rose-300"
                                        type="submit">
                                        POST COMMENT
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ReservationContainer />
            <Footer />
        </>
    )

}