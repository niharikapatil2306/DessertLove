import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button, Form, FormControl, FormSelect } from "react-bootstrap";
import { db } from "../firebase";

export default function AdminForm() {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0.0);
    const [category, setCategory] = useState("pastry");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {await addDoc(collection(db, "MenuItems"), {
          itemName: name,
          itemPrice: price,
          itemDesc: desc,
          category: category
        });
        console.log(collection(db, "MenuItems"))
        setName("");
        setDesc("");
        setPrice(0.0);
        setCategory("pastry");}

        catch (error) {
            console.error('Error fetching cart items:', error);
          }
      };
      
    return(
        <Form onSubmit={handleSubmit}>
            <FormControl type="text"
                            placeholder="Enter Item Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`bg-transparent rounded-none border-transparent font-bold border-b-black my-2`} />
            <FormControl type="text"
                            placeholder="Enter Item Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className={`bg-transparent rounded-none border-transparent font-bold border-b-black my-2`} />
                            <FormControl type="text"
                            placeholder="Enter Item Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className={`bg-transparent rounded-none border-transparent font-bold border-b-black my-2`} />
            <FormSelect
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-transparent rounded-none border-transparent font-bold border-b-black my-2">
                <option value="pastry">pastry</option>
                <option value="donut">donut</option>
                <option value="cupcake">cupcake</option>
                <option value="shakes">shakes</option>
            </FormSelect>
            <Button className="text-black mb-2 mx-auto w-fit text-xl bg-rose-300 border-transparent hover:border-transparent rounded-none fw-bold hover:bg-rose-300"
                            type="submit">
                            Submit
                        </Button>
        </Form>
    );
}