import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Card } from "react-bootstrap";
import { CartContext, SessionContext } from "./Context";
import Login from "../components/Login";

export default function Item(props) {

    const user = useContext(SessionContext);
    const cartContext = useContext(CartContext);

    const [login, setLogin] = useState(false);

    const handleAdd = () => {
        if(user.user==null){
            setLogin(true);
        }
    }
    const user_id = localStorage.getItem('userid');
    const menu_item_id = props.id;
    const [fetchQuant, setFetchQuant] = useState(true)

    const [quant, setQuant] = useState(0);
    const [cost, setCost] = useState(0.00);
    const [alert, setAlert] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const add = () =>{
        axios.post('http://127.0.0.1:8000/home/cart', {
           user_id: user_id,
           menu_item_id,
        })
        .then( (response) => {
            setAlert(response.data)
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                setAlert('');
            }, 4000)
            setFetchQuant(true);
        } )
    }

    const subtract = () => {
        if (quant > 0) {
            if(quant-1 === 0){
                axios.delete('http://127.0.0.1:8000/home/cart', {
                data: {
                    user_id: user_id,
                    menu_item_id,
                },
                })
                .then( (response) => {
                    setAlert(response.data)
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                        setAlert('');
                    }, 4000)
                    setFetchQuant(true);
                })
            }
            else{
                axios.post('http://127.0.0.1:8000/home/cart', {
                user_id: user_id,
                menu_item_id,
                quantity: -1, // Subtract one from the quantity
                })
                .then( (response) => {
                    setAlert(response.data)
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                        setAlert('');
                    }, 4000)
                    setFetchQuant(true);
                })
            }
        }
    };

    const handleClose = () => setLogin(false);

    const [img, setImg] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/home/menuimg/${menu_item_id}/`)
        .then((response) => {
            const url = `http://127.0.0.1:8000/${response.data.img}`;
            setImg(url)
        });

    }, [ menu_item_id ]);

    useEffect(() => {

        if(fetchQuant){
            axios.get('http://127.0.0.1:8000/home/cart/detail', {
                params: {
                    user_id: user_id,
                    menu_id: menu_item_id,
                    quantity:1
            }
            })
            .then( (response) => {
                setQuant(response.data[0].quantity)
                setCost(response.data[0].price)
                setFetchQuant(false)
            } )
        }

    }, [user_id, menu_item_id, fetchQuant]);

    useEffect( () => {
        if(fetchQuant){
            axios.get('http://127.0.0.1:8000/home/cart/quantity', {
                params: {
                    user_id: user_id,
                }
            })
            .then((response) => {
                const newQuant = response.data[0];
                cartContext.setCart(newQuant); // Using the setCart function from context
                setFetchQuant(false)
            });
        }
    }, [user_id, fetchQuant, cartContext] )
    
    return(
        <>
        {showAlert && (
        <Alert className=" border-0 position-fixed right-10 bottom-0 text-center animate-pulse transition-100 ease-out w-52 bg-red-500 text-white fw-bold" 
        onClose={() => setShowAlert(false)} >
            {alert}
        </Alert>
        )}

        <Card className="border-rose-800 border-2 bg-transparent" >
            <Card.Header className="border-rose-800 bg-transparent text-center text-rose-800 fw-bold">
                {props.name}
            </Card.Header>
            <Card.Img src={img} className="h-64 object-cover rounded-none" />
            {/* <Card.Body className="bg-rose-400">
                    {props.desc}
            </Card.Body> */}
            <Card.Footer className="bg-transparent text-rose-800 border-rose-800 fw-bold d-flex justify-content-between align-items-center">
                <div>
                    $ {cost}
                </div>
                { user.user? 
                    (
                        <ButtonGroup>
                            <Button onClick={add}
                            className="bg-rose-600 border-0 hover:bg-rose-800 text-white py-1 px-3" >
                                +
                            </Button>
                            <Button className="bg-rose-600 border-0 text-white py-1 px-3" >
                                {quant}
                            </Button>
                            <Button onClick={subtract}
                            className="bg-rose-600 border-0 hover:bg-rose-800 text-white py-1 px-3" >
                                -
                            </Button>
                        </ButtonGroup>
                    )
                    :(
                    <button onClick={handleAdd}
                        className="bg-rose-600 border-0 hover:bg-rose-800 text-white py-1 px-3 rounded" >
                        Add
                    </button>)
                    
                }
            </Card.Footer>
        </Card>
        {login && <Login show={login} hide={handleClose} /> }

        </>
    )
    
}