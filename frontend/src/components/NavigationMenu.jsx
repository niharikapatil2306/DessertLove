import { useState } from "react";
import { Dropdown, Image, Nav, NavbarBrand,  OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import Offcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import { Outlet, NavLink } from "react-router-dom";

import logo from "../assets/img/logo.png";

export default function NavigationMenu(props) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        // className=' bg-gradient-to-t xl:bg-transparent from-rose-400 '>
        <Offcanvas placement='end' 
            className="bg-rose-100"
            show={props.show} 
            onHide={props.hide} >

            <OffcanvasHeader className="pb-0 " closeButton>

                <NavbarBrand>
                    <Image src={logo} fluid className="h-24" />
                </NavbarBrand>

                <hr />

            </OffcanvasHeader>

            <OffcanvasBody className="xl:mx-auto">

                <Nav className="p-0">

                    <NavLink to="/" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        HOME

                    </NavLink>

                    <NavLink to="/about" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        ABOUT

                    </NavLink>

                    <NavLink to="/menus" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        MENUS

                    </NavLink>

                    <NavLink to='/reservations' 
                    className={(navLink) => (navLink.isActive ? 
                                'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                                'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        RESERVATIONS

                    </NavLink>

                    <NavLink to="/news" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        NEWS

                    </NavLink>

                    <NavLink to="/contact" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 lg:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 lg:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        CONTACT

                    </NavLink>

                </Nav>

            </OffcanvasBody>

            <Outlet />

        </Offcanvas>
    );
}