import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { auth } from "../firebase";
import Cart from "./Cart";

export default function CartContainer(props){

    return(
        <Offcanvas show={props.show}
        onHide={props.hide}
        placement="end"
        className="bg-rose-100" >

        <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />

        <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
            <div className="font-bold">
                HELLO,&nbsp;
                {auth.currentUser ? auth.currentUser.displayName : (<></>)}
            </div>
            <div className="">
                YOUR Cart
            </div>
        </OffcanvasTitle>

        <OffcanvasBody className="flex flex-col">

            <Cart show={true} />

        </OffcanvasBody>

    </Offcanvas>
    );

}