import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { Col, Container, Row } from "react-bootstrap";

export default function MenuItem() {

    const [item, setItem] = useState([]);

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/home/menu')
        .then((response) => {
            setItem(response.data)
        })
    }, [])
    
    return(
        <Container>
            <Row>
                { item.map((item, index) => 
                    <Col xs={12} sm={6} lg={3} className="my-10" key={index}>
                        <Item id={item.id} name={item.name} price={item.price} desc={item.description} />
                    </Col>
                )}
            </Row>  
        </Container>
    );

}