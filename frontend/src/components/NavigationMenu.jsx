import { useState } from "react";
import { Dropdown, Image, Nav, NavbarBrand,  OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
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
        <NavbarOffcanvas placement='top' 
            className="bg-rose-100"
            show={props.show} 
            onHide={props.hide} >

            <OffcanvasHeader className="pb-0" closeButton>

                <NavbarBrand>
                    <Image src={logo} fluid className="h-24" />
                </NavbarBrand>

                <hr />

            </OffcanvasHeader>

            <OffcanvasBody className="xl:mx-auto">

                <Nav>

                    <NavLink to="/" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        HOME

                    </NavLink>

                    <NavLink to="/about" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        ABOUT

                    </NavLink>

                    <Dropdown >
                        <Dropdown.Toggle className="btn1 rounded-none mx-4 p-0 my-4 "
                        onMouseOver={handleShow}>

                            <NavLink to="/menus"
                            className={(navLink) => (navLink.isActive ? 
                                'xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                                'xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                                MENUS

                            </NavLink>

                        </Dropdown.Toggle>

                        <Dropdown.Menu className="" show={show} onMouseLeave={handleClose}>

                            <Dropdown.Item className="px-4">

                                <NavLink to= "/menus" >

                                    PATISSERIE

                                </NavLink>
                                
                            </Dropdown.Item>

                            <Dropdown.Item className="px-4">

                                <NavLink to= "/menus" >

                                    CUPCAKES
                                    
                                </NavLink>
                                
                            </Dropdown.Item>

                            <Dropdown.Item className="px-4" >

                                <NavLink to= "/menus" >

                                    DONUTS
                                    
                                </NavLink>

                            </Dropdown.Item>

                            <Dropdown.Item className="px-4" >

                                <NavLink to= "/menus" >

                                    SHAKES
                                    
                                </NavLink>

                            </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>

                    <NavLink to='/reservations' 
                    className={(navLink) => (navLink.isActive ? 
                                'mx-4 my-4 py-0 xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                                'mx-4 my-4 py-0 xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        RESERVATIONS

                    </NavLink>

                    <NavLink to="/news" 
                    className={(navLink) => (navLink.isActive ? 
                        'mx-4 my-4 py-0 xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                        'mx-4 my-4 py-0 xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                        NEWS

                    </NavLink>

                    <Dropdown>

                        <Dropdown.Toggle className="btn1 rounded-none mx-4 p-0 my-4 "
                        onMouseOver={handleShow1}>

                            <NavLink to="/contact"
                            className={(navLink) => (navLink.isActive ? 
                                'xl:border-b-4 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium' : 
                                'xl:hover:border-b-2 border-rose-500 hover:text-[rgba(0,0,0,0.55)] text-xl font-medium')}>

                                CONTACT

                            </NavLink>

                        </Dropdown.Toggle>

                        <Dropdown.Menu className="mx-10" show={show1} onMouseLeave={handleClose1}>

                            <Dropdown.Item className="px-4">

                                <NavLink to= "/contact" >

                                    NEWSLETTER

                                </NavLink>

                            </Dropdown.Item>

                        </Dropdown.Menu>
                        
                    </Dropdown>

                </Nav>

            </OffcanvasBody>

            <Outlet />

        </NavbarOffcanvas>
    );
}