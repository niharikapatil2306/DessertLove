import { signOut } from "firebase/auth";
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";



export default function User(props) {

    const [user] = useAuthState(auth);

    const [showBooking, setShowBooking] = useState(false);
    const [bookings, setBookings] = useState([]);

    const handleClick = () => {
        signOut(auth);
        window.location.href = '/'
    }

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                if (user) {
                    const q = query(collection(db, "table"), where("userId", "==", user.uid));
                    const querySnapshot = await getDocs(q);
                    const existingBookings = querySnapshot.docs.map((doc) => doc.data());
                    setBookings(existingBookings)
                    if (!querySnapshot.empty) {
                        setShowBooking(true);
                    }
                }
            } catch (error) {
                console.error("Error fetching user's bookings:", error);
            }
        };

        fetchBookings();
    }, [auth.currentUser]);

    return (

        <Offcanvas show={props.show}
            onHide={props.hide}
            placement="end"
            className="bg-rose-100" >

            <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />

            <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
                <div className="font-bold">
                    HELLO,&nbsp;
                    {user ? user.displayName : (<></>)}
                </div>
                <div className="">
                    YOUR ACCOUNT
                </div>
            </OffcanvasTitle>

            <OffcanvasBody className="flex flex-col">
                <Button className="bg-rose-300 my-2 border-0 rounded-none font-bold hover:bg-rose-400">
                    My Profile
                </Button>

                {showBooking ?
                    <Dropdown className="my-2 w-full">
                        <DropdownToggle className="bg-rose-300 border-0 rounded-none font-bold w-full hover:bg-rose-400 active:bg-rose-400 focus:bg-rose-300">
                            Bookings
                        </DropdownToggle>
                        <DropdownMenu className="static bg-rose-600 bg-opacity-60">
                            {bookings.map((booking, index) => (
                                <DropdownItem key={index} className="flex justify-between text-white font-medium hover:bg-rose-300">
                                    <p>
                                        Date: {booking.date} | 
                                    </p>
                                    <p>
                                        Time: {booking.time} | 
                                    </p>
                                    <p>
                                        Persons: {booking.person}
                                    </p>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    :
                    <Button className="bg-rose-300 my-2 border-0 rounded-none font-bold hover:bg-rose-400">
                        <Link to='/reservations' className="hover:text-black">
                            Book Table
                        </Link>
                    </Button>

                }
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