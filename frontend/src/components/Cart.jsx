import { Button } from "react-bootstrap";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

export default function Cart(props) {

    const [cart, setCart] = useState([])
    const [cost, setCost] = useState(0.0);
    const [quant, setQuant] = useState(0);

    const fetchCartItems = async () => {
        try {

            const cartRef = doc(collection(db, 'cart'), auth.currentUser.uid);
            const cartItemsCollectionRef = collection(cartRef, 'cartItems');
            const querySnapshot = await getDocs(cartItemsCollectionRef);

            let totalQuantity = 0;
            let totalCost = 0.0;
            const cartItems = [];

            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    cartItems.push({
                        id: doc.id,
                        quantity: doc.data().quantity
                    });
                    totalQuantity += doc.data().quantity
                    updateDoc(cartRef, {
                        totalQuantity: totalQuantity
                    })
                });

                const menuItems = []

                for (const item of cartItems) {

                    const itemId = item.id

                    const menuItemDoc = await getDoc(doc(collection(db, "MenuItems"), itemId));

                    if (menuItemDoc.exists()) {
                        menuItems.push({
                            id: menuItemDoc.id,
                            name: menuItemDoc.data().itemName,
                            price: menuItemDoc.data().itemPrice,
                            quantity: item.quantity,
                            totalPrice: (menuItemDoc.data().itemPrice * item.quantity)
                        });
                        totalCost += (menuItemDoc.data().itemPrice * item.quantity);
                        updateDoc(cartRef, {
                            totalCost: totalCost
                        })
                    } else {
                        console.warn(`Menu item with ID ${itemId} not found.`);
                    }

                }

                setCart(menuItems);
                setCost(totalCost);
            } else {
                setCart([])
            }

        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        if (auth.currentUser) {
            const unsubscribe = onSnapshot(collection(doc(collection(db, 'cart'), auth.currentUser.uid), "cartItems"), (snapshot) => {
                fetchCartItems();
            });

            return () => unsubscribe();
        }
    }, [auth.currentUser,cost]);

    return (

            <>

                {cart.map((menuItem) => (
                    <div key={menuItem.id}>
                        <CartItems menuItem={menuItem} />
                    </div>
                ))}

                {cart.length == 0 ? (

                    <>    </>
                ) : (
                    <>
                        <div className="mt-4 flex justify-between border-t-2 border-b-2 py-4 font-bold border-rose-950 border-opacity-50">
                            <p>
                                Total:
                            </p>
                            <p>
                                ${cost}
                            </p>
                        </div>
                        <Button className={`bg-rose-300 w-full my-4 border-0 rounded-none font-bold hover:bg-rose-400 ${props.show ? '' : 'd-none'}`}>
                            <Link to="/cart" path="relative">
                            Checkout
                            </Link>
                        </Button>
                    </>
                )}
            </>
    );
}