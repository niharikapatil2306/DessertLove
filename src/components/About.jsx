import { Container } from "react-bootstrap";

import cafe from "../assets/img/cafe1.png";
import Pictureleft from "../components/Pictureleft";

export default function About(){
    return(
        <Container className="my-20" >
            
            <Pictureleft image={[cafe]} 
                subhead={"OUR CAFE"} 
                head={"A French Dessert Cafe "} 
                description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae saepe cupiditate eaque, ratione vel facere iure tempore veniam nobis. Maxime vel corrupti repellendus similique?"} 
                left={false}
                button={"DISCOVER MORE"}
                click={'about'}
                val={6}
            />
    
        </Container>
    );
}