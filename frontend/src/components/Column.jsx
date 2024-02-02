import { Card, Col, Image } from "react-bootstrap";

export default function Column(props) {
    return (
        <>

            <Col xs={12} sm={6} lg={true} className={props.classCol}>

                <Card className={props.card} >
                    <Image src={props.img}  className={props.classImg} fluid rounded />
                </Card>
                <img src={props.icon} className={props.classIcon} alt="" />

                <p className={props.classH}>
                    {props.head}
                </p>

                <p className={props.desc}>
                    {props.desc1}
                    <br />
                    {props.desc2}
                </p>

            </Col>
        </>
    );
}