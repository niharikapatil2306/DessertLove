import { Image, Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import bg from "../assets/img/dessert55.png";

import SignupForm from "../components/SignupForm";

export default function Login(props){

    return(
        <Offcanvas show={props.show} 
            onHide={props.hide} 
            placement="top" 
            className="offcanvas1 m-auto bg-cover bg-no-repeat g-0" style={{ backgroundImage: `url(${bg})` }}>
            <OffcanvasHeader closeButton className=" flex justify-end">
            </OffcanvasHeader>
            <OffcanvasBody className="pt-0 pb-2">
                <div className="mb-4 text-center font-extrabold md:fw-bold text-3xl sm:text-5xl xl:text-7xl text-black">
                    SIGNUP / LOGIN
                </div>
                <SignupForm />

            </OffcanvasBody>
        </Offcanvas>
    );
}