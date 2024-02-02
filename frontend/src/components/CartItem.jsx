import { useEffect } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";

export default function CartItem(){

    let item = [];

    const cartItem = localStorage.getItem('cartItem');

    item.push(cartItem);

    useEffect( () => {
        
        
    },[item] )

    return(
        <>
        </>
    );
}