import { useState } from "react";
import axios from "axios";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

export default function BookTableForm() {
    const count = ["No. of Person", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const count_person = count.map((n, index) => <option key={index} className=" ">{n}</option>);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [person, setPerson] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const postData = () => {
        axios.post('http://127.0.0.1:8000/home/table', {
            name: name,
            person: person,
            date: date,
            time: time,
            phone: phone,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    let handleSubmit = async (e) => {
        postData();
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="my-8 mx-10 divide-x-2 divide-solid  divide-black">
                <Col className="px-4">
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent border-transparent border-b-black font-extrabold rounded-none" />
                    </Row>
                    <Row>
                        <FormControl as="select"
                            value={person}
                            onChange={(e) => setPerson(e.target.value)}
                            className="bg-transparent border-transparent text-black font-extrabold border-b-black rounded-none">
                            {count_person}
                        </FormControl>
                    </Row>
                </Col>
                <Col className="px-4 ">
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-transparent border-transparent border-b-black font-extrabold rounded-none" />
                    </Row>
                    <Row>
                        <Col>
                            <FormControl type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent border-transparent text-black font-extrabold border-b-black rounded-none" />
                        </Col>
                        <Col>
                            <FormControl type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-transparent border-transparent text-black font-extrabold border-b-black rounded-none" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Button 
                    className="text-black mt-8 mx-auto w-32 bg-rose-300 border-transparent hover:border-white rounded-none fw-bold hover:bg-rose-300" 
                    type="submit">
                    Book Now
                </Button>
            </Row>
        </Form>
    );
}