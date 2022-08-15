import { useEffect, useState } from "react";
import moment from 'moment';
import 'moment-timezone';
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from "reactstrap";

export function LocalTime(props) {

    const [localTime, setLocalTime] = useState();
    const [localDate, setLocalDate] = useState();


    useEffect(() => {
        let localDateTime = moment.unix(props.localTimeEpoch);
        setLocalTime(localDateTime.tz(props.timeZoneId).format('LTS'));
        setLocalDate(localDateTime.format('dddd, LL'));
    }, [props.localTimeEpoch])

    return (
        <div>
            <Card>
                <CardHeader>
                    Location Time
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">{localTime}</CardTitle>
                    <CardSubtitle tag="h6">{localDate}</CardSubtitle>
                    <CardSubtitle className="mt-1" tag="h6">Time Text : {props.localTimeText}</CardSubtitle>
                </CardBody>
            </Card>
        </div>);
}

export default LocalTime;