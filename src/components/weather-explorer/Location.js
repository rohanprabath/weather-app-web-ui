import React, { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from "reactstrap";
export function Location(props) {
    return (
        <div xs="12" sm="12" lg="4">
            <Card>
                <CardHeader>
                    Location
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        {props.currectCility}
                    </CardTitle>
                    <CardSubtitle tag="h6">{props.currectCountry}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default Location;