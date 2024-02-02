import { Col, Image } from "react-bootstrap";

export default function ColImage(props) {
    return (
        <>
            <Col md={props.mdVal} xs={12} className="my-1">
                <Image src={props.image} className="mx-auto h-full" fluid />
            </Col>
        </>
    );
}