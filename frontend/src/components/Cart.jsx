import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { SessionContext } from "./Context";
import axios from "axios";

export default function Cart(props){

    // const {user} = useContext(SessionContext);
    // const user_id = localStorage.getItem('userid')


    // const [quant, setQuant] = useState([]);

    
    
    // useEffect( () => {
    //     axios.get('http://127.0.0.1:8000/home/cart', {
    //             params: {
    //                 user_id: user_id,
    //             }
    //         })
    //         .then((response) => {
    //             setQuant(response.data)
    //         });
    // }, [user_id, props.show] )

    // const [img, setImg] = useState([]);

    // const fetchCartImageURL = async (menu_item_id) => {
    //     try {
    //         const response = await axios.get(`http://127.0.0.1:8000/home/menuimg/${menu_item_id}/`);
    //         const url = `http://127.0.0.1:8000/${response.data.img}`;
    //         return url;
    //     } catch (error) {
    //         console.error(`Error fetching cart image for menu_item_id ${menu_item_id}:`, error);
    //         return null;
    //     }
    // };

    // useEffect(() => {
    //     const menu_item_ids = quant.map((item) => item.menu_item);
        
    //     const fetchImageURLs = async () => {
    //         const imageUrls = await Promise.all(menu_item_ids.map(fetchCartImageURL));
    //         setImg(imageUrls);
    //     };

    //     fetchImageURLs();
    // }, [quant]);

    return(

        <Offcanvas show={props.show} 
            onHide={props.hide} 
            placement="end" 
            className="bg-rose-100" >

            <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />

            <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
                <div className="font-bold">
                    HELLO,&nbsp;
                    {/* {user} */}
                </div>
                <div className="">
                    YOUR CART
                </div>
            </OffcanvasTitle>

            <OffcanvasBody>
            <Container fluid>
                {/* <Row className="mt-4">
                    {quant.map((item, index) => (
                        
                        <Row key={item.menu_item} className="my-2 g-0 ">
                            <Card className="border-rose-800">
                                <Row>
                                    <Col lg={3} className="pr-0 border-r-2 border-rose-800" >
                                        <Card.Body className="bg-cover h-full rounded-l" style={{ backgroundImage: `url(${img[index]})` }} />
                                    </Col>
                                    <Col className="pl-0">
                                        <Card.Header> 
                                            {item.menu_name} 
                                        </Card.Header>
                                        <Card.Footer className="bg-transparent text-rose-800 border-rose-800 fw-bold d-flex justify-content-between align-items-center">
                                            <div>
                                                ${item.price}
                                            </div>
                                            <Button className="bg-rose-600 hover:bg-rose-600 border-0 text-white py-1 px-3" >
                                                {item.quantity}
                                            </Button>
                                        </Card.Footer>
                                        
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    ))}
                </Row> */}
            </Container>

            </OffcanvasBody>

        </Offcanvas>
    );
}