import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormSelect, Row } from "react-bootstrap";
import Cart from "../components/Cart";
import NavigationBar from "../components/NavigationBar";
import { collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";

export default function CartPage() {

    const [totalCost, setTotalCost] = useState(0.0);
    const [charge, setCharge] = useState(0.0);
    const [total, setTotal] = useState(0.0);

    const fetchCartItems = async () => {
        try {

            const cart = doc(collection(db, 'cart'), auth.currentUser.uid)
            const cartDoc = await getDoc(cart);

            if (cartDoc.exists()) {
                setTotalCost(cartDoc.data().totalCost)
                setTotal(cartDoc.data().totalCost + charge)
                updateDoc(cart, {
                    total: cartDoc.data().totalCost + charge
                })

            }

        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        if (auth.currentUser) {
            const cartDocRef = doc(collection(db, 'cart'), auth.currentUser.uid);
            const unsubscribe = onSnapshot(cartDocRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    fetchCartItems();
                }
            });
    
            return () => unsubscribe();
        }
    }, [auth.currentUser, charge]);

    return (
        <>
            <NavigationBar />
            <Container className="my-8 g-0">
                <Row className="g-0 mx-4">
                    <Col xs={12} md={8} className="md:mx-2 mt-4 bg-rose-50 p-8 shadow-rose-900 shadow-xl">
                        <Cart show={false} />
                    </Col>
                    <Col className="md:mx-2 h-fit my-4 bg-rose-50 p-8 shadow-rose-900 shadow-2xl">
                        <Card className="bg-transparent border-0">
                            <CardHeader className="bg-transparent font-bold text-rose-950 text-2xl">
                                TOTAL
                            </CardHeader>
                            <CardBody>
                                <div className="flex justify-between">
                                    <p>
                                        SubTotal
                                    </p>
                                    <p>
                                        ${totalCost}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Delivery
                                    </p>
                                    <p>
                                        ${charge}
                                    </p>
                                </div>
                                <div>
                                    <FormSelect className="mt-4 bg-transparent border-transparent border-b-rose-950 rounded-none"
                                        value={charge}
                                        onChange={(e) => setCharge(parseFloat(e.target.value))}>

                                        <option value={0.0}>STANDARD DELIVERY</option>
                                        <option value={19.0}>EXPRESS DELIVERY</option>

                                    </FormSelect>
                                </div>
                            </CardBody>
                            <CardFooter className="bg-transparent font-bold text-rose-950 text-2xl">
                                <div className="flex justify-between">
                                    <p>
                                        Total
                                    </p>
                                    <p>
                                        ${total}
                                    </p>
                                </div>

                                <Button className="bg-rose-300 w-full my-4 border-0 rounded-none font-bold hover:bg-rose-400">
                                    Checkout
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}