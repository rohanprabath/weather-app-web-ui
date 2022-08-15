import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from "reactstrap";

export function WeatherInfo(props) {
    return (
        <>
         <Card>
                <CardHeader>
                Weather Condition
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        {props.conditionText}
                    </CardTitle>
                    <CardSubtitle tag="h6"><img src={props.conditionIcon} alt="Condition indicator." /></CardSubtitle>
                </CardBody>
            </Card>
           
            
        </>);
}

export default WeatherInfo;