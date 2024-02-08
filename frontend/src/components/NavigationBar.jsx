import { useState } from "react";
import { Button, Image, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import user1 from "../assets/svg/user.svg";
import cart from "../assets/svg/cart.svg";

import logo from "../assets/img/logo.png";

import BookTable from "../components/BookTable";
import NavigationMenu from "../components/NavigationMenu";
import Login from "../components/Login";
import User from "../components/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import CartContainer from "./CartContainer";


export default function NavigationBar(){

    const [user] = useAuthState(auth);

    const [showBookTable, setShowBookTable] = useState(false);
    const handleBookTableClose = () => setShowBookTable(false);
    const handleShowBookTable = () => setShowBookTable(true);

    const [showNav, setShowNav] = useState(false);
    const handleNavClose = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClose = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showUser, setShowUser] = useState(false);
    const handleUserClose = () => setShowUser(false);
    const handleShowUser = () => setShowUser(true);

    const [showCart, setShowCart] = useState(false);
    const handleCartClose = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    return(
        <Navbar expand='xl' className="mx-4 flex">

                <NavbarToggle aria-controls="navMenu" className="border-0" onClick={handleShowNav} />

                <NavbarBrand className="mr-auto">
                    <Image src={logo} fluid className="h-10 md:h-20" />
                </NavbarBrand>

                <NavigationMenu id="navMenu" show={showNav} hide={handleNavClose} />

                <div className="d-flex">

                    <Button onClick={handleShowLogin}
                        variant='white'
                        className={`rounded-none text-sm font-medium p-2 d-block ml-auto w-max
                        ${user ? 'd-none' : ''}`}
                        role="tooltip"
                        title="USER LOGIN / SIGNUP">

                        <img src={user1} alt="" />

                    </Button>

                    <Login show={showLogin} hide={handleLoginClose} />


                    <Button onClick={handleShowBookTable}
                        variant='white'
                        className="border-4 border-black rounded-none text-sm font-medium p-2 d-none d-md-block ml-auto w-max sm:mx-2" >

                        FIND A TABLE

                    </Button>

                    <BookTable show={showBookTable} hide={handleBookTableClose} className='mx-24' />

                    <Button onClick={handleShowUser}
                        variant='white'
                        className={`rounded-none text-sm font-medium p-2 d-block ml-auto w-max
                        ${user ? '' : 'd-none'}`}
                        role="tooltip"
                        >

                        <img src={user1} alt="" />

                    </Button>

                    <User show={showUser} hide={handleUserClose} />

                    <Button onClick={handleShowCart}

                            variant='white'
                            className={`rounded-none text-sm font-medium ml-auto p-2 d-block w-max 
                            ${user ? '' : 'd-none'}`}
                            role="tooltip"
                            title="CART">
                            <img src={cart} alt="" />
                            
                    </Button>

                    <CartContainer show={showCart} hide={handleCartClose} />

                </div>
            </Navbar>
    );
}