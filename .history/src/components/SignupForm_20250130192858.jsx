import { useState, React, useEffect } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import google from "../assets/svg/google.svg"
import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import axios from "axios";

export default function SignupForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const a = ['Sign Up', 'Login'];

    const [refresh, setRefresh] = useState(false);

    const [showLogin, setShowLogin] = useState(false);
    
    const [button1, setButton1] = useState(a[0]);
    const [button2, setButton2] = useState(a[1]);

    const submit = async (e) => {
        await postData();
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setError('');
        if (!showLogin) {
            await createUserWithEmailAndPassword(auth, email, password)
           
            .then((res) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                console.log(res.user)
                setRefresh(true)
                if(auth.currentUser!=null){
                    submit();
                }
            })
            .catch(err => setError(err.message))
        }
        else {
            await signInWithEmailAndPassword(auth, email, password);
            setRefresh(true);
            if(auth.currentUser!=null){
            submit();
            }
        }
        setEmail('');
        setName('');
        setPassword('');
    }

    const handleGClick = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        if(auth.currentUser!=null){
            submit();
        }
        setRefresh(true)
    }

    const handleLoginClick = () => {
        setShowLogin(!showLogin);
        setEmail("");
        setPassword("");
        if (button1 === a[0]) {
            setButton1(a[1]);
            setButton2(a[0]);
        }
        else {
            setButton1(a[0]);
            setButton2(a[1]);
        }

    }

    const postData = () => {
        axios.post('http://127.0.0.1:8000/home/user', {
            id: auth.currentUser.uid,    
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(() => {
        if (auth.currentUser!=null && refresh) {
            window.location.href = '/'
        }
    }, [refresh])


    return (
        <Form className="mx-8 md:mx-20 xl:mx-48 g-0" onSubmit={handleClick}>
            <Row>
                <Col>
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`bg-transparent rounded-none border-transparent font-bold border-b-black my-2 ${showLogin ? 'd-none' : ''}`} />
                    </Row>
                    <Row>
                        <FormControl type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent rounded-none border-transparent font-bold border-b-black my-4" />
                    </Row>
                    <Row>
                        <FormControl type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent rounded-none border-transparent font-bold border-b-black my-4" />
                    </Row>
                    <Row>
                        <div>
                            {error && (
                                <div className="text-red-900 font-bold text-lg text-center">
                                    {error}
                                </div>
                            )}
                        </div>
                        <Button className="text-black mb-2 mx-auto w-fit text-xl bg-rose-300 border-transparent hover:border-transparent rounded-none fw-bold hover:bg-rose-300"
                            type="submit">
                            {button1}
                        </Button>
                    </Row>
                    <hr className="w-full md:w-3/4 mx-auto mt-2" style={{ color: "black", borderTopWidth: "2px" }}></hr>
                    <Row className="flex justify-center my-2">
                        or
                    </Row>
                    <Row className="flex justify-center my-2">
                        <Button onClick={handleGClick}
                            className="bg-rose-300 text-black w-fit flex my-auto border-0 hover:border-transparent rounded-none fw-bold hover:bg-rose-300">
                            <img className="h-8" src={google} alt="" />
                            <p className="my-auto mx-2 text-sm md:text-xl">{button1} with Google</p>
                        </Button>
                    </Row>
                    <Row className="flex justify-center mt-3">
                        Already have an account?
                        <div href="" onClick={handleLoginClick}
                            className="mx-1 mb-4 px-0 w-fit text-center text-black bg-transparent border-b-2 border-b-black hover:border-b-red-900 ">
                            {button2}
                        </div>
                    </Row>
                </Col>
            </Row>

        </Form>
    );
}