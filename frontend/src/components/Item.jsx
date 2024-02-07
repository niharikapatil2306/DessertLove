import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import Login from "../components/Login";
import { auth, db } from "../firebase";
import { collection, deleteDoc, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

export default function Item(props) {

    const [login, setLogin] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleLogin = () => setLogin(true);
    const handleClose = () => setLogin(false);

    const fetchCartItems = async () => {
        try {
            if (!auth.currentUser) return;
            const updatedCartItemDoc = await getDoc(doc(collection(doc(collection(db, 'cart'), auth.currentUser.uid), 'cartItems'), props.id));
            if (updatedCartItemDoc.exists()) {
                setQuantity(updatedCartItemDoc.data().quantity);
            }
            else {
                setQuantity(0);
            }
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };


    const addToCart = async () => {
        try {
            const cart = doc(collection(db, 'cart'), auth.currentUser.uid)
            setDoc(cart, {
                userUid: auth.currentUser.uid,
                totalCost: 0,
                totalQuantity: 0,
            })
            const cartItemsCollectionRef = collection(cart, 'cartItems');
            const cartItemDocRef = doc(cartItemsCollectionRef, props.id);

            const cartItemDoc = await getDoc(cartItemDocRef);

            if (cartItemDoc.exists()) {
                await updateDoc(cartItemDocRef, {
                    quantity: cartItemDoc.data().quantity + 1
                });
            } else {
                await setDoc(cartItemDocRef, {
                    itemId: props.id,
                    quantity: 1
                });
            }
            fetchCartItems();
        }
        catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async () => {
        try {
            const cart = doc(collection(db, 'cart'), auth.currentUser.uid)
            setDoc(cart, {
                userUid: auth.currentUser.uid,
                totalCost: 0,
                totalQuantity: 0,
            })
            const cartItemsCollectionRef = collection(cart, 'cartItems');
            const cartItemDocRef = doc(cartItemsCollectionRef, props.id);

            const cartItemDoc = await getDoc(cartItemDocRef);

            const currentQuantity = cartItemDoc.data().quantity;
            if (currentQuantity > 1) {
                await updateDoc(cartItemDocRef, {
                    quantity: currentQuantity - 1
                });
            } else {
                await deleteDoc(cartItemDocRef);
            }
            fetchCartItems();
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    }

    useEffect(() => {
        if (auth.currentUser) {
            const unsubscribe = onSnapshot(collection(doc(collection(db, 'cart'), auth.currentUser.uid), "cartItems"), (snapshot) => {
                fetchCartItems();
            });
            return () => unsubscribe();
        }
    }, []);


    return (
        <Card className="border-rose-800 border-1 bg-rose-200 w-full h-full" >
            <Card.Header className="border-rose-800 bg-transparent text-center text-rose-800 text-2xl font-extrabold">
                {props.name}
            </Card.Header>
            {/* <Card.Img src={img} className="h-64 object-cover rounded-none" /> */}
            <Card.Body className="bg-rose-50 text-lg font-medium md:text-xl">
                {props.desc}
            </Card.Body>
            <Card.Footer className="bg-transparent text-rose-800 border-rose-800 text-lg font-bold d-flex justify-content-between align-items-center">
                <div>
                    $ {props.price}
                </div>

                {auth.currentUser ?
                    <ButtonGroup className="bg-rose-400">
                        <Button onClick={addToCart}
                            className="bg-rose-400 border-0 hover:bg-rose-300 text-white mx-auto px-3 active:bg-rose-300" >
                            +
                        </Button>
                        <div className="bg-rose-400 border-0 text-white p-1" >
                            {quantity}
                        </div>
                        <Button onClick={removeFromCart}
                            className="bg-rose-400 border-0 hover:bg-rose-300 text-white mx-auto px-3 active:bg-rose-300" >
                            -
                        </Button>
                    </ButtonGroup>
                    :
                    <button onClick={handleLogin}
                        className="bg-rose-600 border-0 hover:bg-rose-800 text-white py-1 px-3 rounded" >
                        Add
                    </button>}
                {login && <Login show={login} hide={handleClose} />}

            </Card.Footer>
        </Card>
    )
}
