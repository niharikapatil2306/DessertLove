import { Card, CardBody, CardFooter, CardHeader, Button, ButtonGroup, } from "react-bootstrap";
import { auth, db } from "../firebase";
import { collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";


export default function CartItems({ menuItem }) {

    const addToCart = async () => {
        try {
            const cart = doc(collection(db, 'cart'), auth.currentUser.uid)
            const cartItemsCollectionRef = collection(cart, 'cartItems');
            const cartItemDocRef = doc(cartItemsCollectionRef, menuItem.id);

            const cartItemDoc = await getDoc(cartItemDocRef);

            if (cartItemDoc.exists()) {
                await updateDoc(cartItemDocRef, {
                    quantity: cartItemDoc.data().quantity + 1
                });
            }
        }
        catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async () => {
        try {
            const cart = doc(collection(db, 'cart'), auth.currentUser.uid)
    
            const cartItemsCollectionRef = collection(cart, 'cartItems');
            const cartItemDocRef = doc(cartItemsCollectionRef, menuItem.id);

            const cartItemDoc = await getDoc(cartItemDocRef);

            const currentQuantity = cartItemDoc.data().quantity;
            if (currentQuantity > 1) {
                await updateDoc(cartItemDocRef, {
                    quantity: currentQuantity - 1
                });
            } else {
                await deleteDoc(cartItemDocRef);
            }

        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    }

    return (
        <>

            <Card className="w-full my-2 border-1 border-rose-950 font-bold hover:bg-rose-400">
                <CardHeader className="bg-rose-200">
                    {menuItem.name}
                </CardHeader>
                <CardBody className="flex justify-between bg-rose-50">

                    <ButtonGroup>
                        <Button onClick={addToCart}
                            className="bg-rose-400 border-0 hover:bg-rose-300 text-white mx-auto px-3" >
                            +
                        </Button>
                        <div className="bg-rose-400 border-0 text-white p-1" >
                            {menuItem.quantity}
                        </div>
                        <Button onClick={removeFromCart}
                            className="bg-rose-400 border-0 hover:bg-rose-300 text-white mx-auto px-3" >
                            -
                        </Button>
                    </ButtonGroup>
                    <p>
                        Cost: ${menuItem.price}
                    </p>
                </CardBody>
                <CardFooter className="flex justify-end bg-rose-200">
                    Total Cost: ${menuItem.totalPrice}
                </CardFooter>
            </Card>

        </>
    );

}