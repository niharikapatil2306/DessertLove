import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { Col, Container, Row } from "react-bootstrap";
import { auth, db } from "../firebase";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

export default function MenuItem({category}) {

    const [item, setItem] = useState([]);

    const getMenu = async () => {
        try {
            const q = category ? query(collection(db, "MenuItems"), where("category", "==", category)) : collection(db, "MenuItems");
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setItem(newData);

        } catch (error) {
            console.error("Error fetching menu items: ", error);
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "MenuItems"), (snapshot) => {
            getMenu();
        });
    
        return () => unsubscribe();
    }, []);

    return (
        <Container>
            <Row>
                {item.map((menu) =>
                    <Col xs={12} sm={6} lg={4} className="my-10 flex flex-wrap" key={menu.id}>
                        <Item id={menu.id} name={menu.itemName} price={menu.itemPrice} desc={menu.itemDesc} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}