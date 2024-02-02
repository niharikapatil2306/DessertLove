import { signOut } from "firebase/auth";
import { Button, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";



export default function User(props){

    const [user] = useAuthState(auth);

    const handleClick = () => {
        signOut(auth);
        window.location.href = '/'
    }

    return(

        <Offcanvas show={props.show} 
            onHide={props.hide} 
            placement="end" 
            className="bg-rose-100" >

            <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />

            <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
                <div className="font-bold">
                    HELLO,&nbsp;
                    {user? user.displayName : (<></>)}
                </div>
                <div className="">
                    YOUR ACCOUNT
                </div>
            </OffcanvasTitle>

            <OffcanvasBody className="flex flex-col">
            <Button className="bg-rose-300 my-2 border-0 rounded-none font-bold hover:bg-rose-400">
                    My Profile
            </Button>
            <Button className="bg-rose-300 my-2 border-0 rounded-none font-bold hover:bg-rose-400">
                <Link to='/reservations'  className="hover:text-black">
                    Book Table
                </Link>
            </Button>
            <Button className="bg-rose-300 my-2 border-0 rounded-none font-bold hover:bg-rose-400">
                Cart
            </Button>
            <Button onClick={handleClick}
                className="bg-rose-300 border-0 rounded-none font-bold hover:bg-rose-400">
                LOGOUT
            </Button>
            </OffcanvasBody>
            
        </Offcanvas>
    );
}