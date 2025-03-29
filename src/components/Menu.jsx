import { Container } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function Menu(){
    return(
        <div className="my-4">

        <Container className="mt-12 text-3xl md:text-6xl head">
            PATISSERIE'S
        </Container>
        
        <MenuItem category="pastry" />

        <Container className="mt-12 text-3xl md:text-6xl head">
            CUPCAKES
        </Container>
        
        <MenuItem category="cupcake" />

        <Container className="mt-12 text-3xl md:text-6xl head">
            DONUT'S AND MACROONS
        </Container>
        
        <MenuItem category="donut" />

        </div>
    )
}