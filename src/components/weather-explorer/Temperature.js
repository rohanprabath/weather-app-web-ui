import {  useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Spinner } from "reactstrap";
import { TEMPERATURE_UOM_OPTIONS, CELSIUS, FAHRENHEIT } from "../../constants/weather";
import { getCelsiusValue, getFahrentheitValue } from "../../service/TemperatureConversionService";

export function Temperature(props) {

    const [temperatureUoMSelectedId, setTemperatureUoMSelectedId] = useState(CELSIUS);
    const [temperatureUoMSelectedOption, setTemperatureUoMSelectedOption] = useState(null);
    const [temparatureCelsiusCalculated, setTemparatureCelsiusCalculated] = useState();
    const [temparatureFahrenheitCalculated, setTemparatureFahrenheitCalculated] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTemperatureUoM(temperatureUoMSelectedId);
    })

    useEffect(() => {
        if (temperatureUoMSelectedId == FAHRENHEIT) {
            if (props.temparatureCelsius) {
                setIsLoading(true);
                getFahrentheitValue(props.temparatureCelsius).then(response => {
                    setTemparatureFahrenheitCalculated(response.data);
                }).finally(() => {
                    setIsLoading(false);
                })
            }
        } else if (temperatureUoMSelectedId == CELSIUS) {
            if (props.temparatureFahrenheit) {
                setIsLoading(true);
                getCelsiusValue(props.temparatureFahrenheit).then(response => {
                    setTemparatureCelsiusCalculated(response.data);
                }).finally(() => {
                    setIsLoading(false);
                })
            }
        }
    }, [temperatureUoMSelectedId])

    const handleTemparatureUomPreferenceChnage = (e) => {
        let selectedOptionId = e.target.value;
        setTemperatureUoMSelectedId(selectedOptionId);
        setTemperatureUoM(selectedOptionId);
    }

    function setTemperatureUoM(id) {
        let selectedOption = TEMPERATURE_UOM_OPTIONS.find((item) => item.id == id);
        setTemperatureUoMSelectedOption(selectedOption);
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    Location Temperature  <select onChange={handleTemparatureUomPreferenceChnage} value={temperatureUoMSelectedId}>
                        {
                            TEMPERATURE_UOM_OPTIONS.map((item, index) =>
                                <option key={index} value={item.id}>{item.name}</option>)
                        }
                    </select>
                </CardHeader>
                <CardBody>
                    {temperatureUoMSelectedId && temperatureUoMSelectedOption && temperatureUoMSelectedId == CELSIUS ?
                        <div>
                            <CardSubtitle tag="h6">Weather API value : {props.temparatureCelsius + ' ' + temperatureUoMSelectedOption.symbol}</CardSubtitle>
                            <CardSubtitle tag="h6"  className="mt-1">Calculated Value :  {isLoading && <Spinner color="primary" size="sm"></Spinner>}
                                {!isLoading && temparatureCelsiusCalculated + ' ' + temperatureUoMSelectedOption.symbol}</CardSubtitle>

                        </div>
                        : temperatureUoMSelectedId == FAHRENHEIT ?
                            <div>
                                <CardSubtitle tag="h6">Weather API value : {props.temparatureFahrenheit + ' ' + temperatureUoMSelectedOption.symbol}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mt-1">Calculated Value {isLoading && <Spinner color="primary" size="sm"></Spinner>}
                                    {!isLoading && temparatureFahrenheitCalculated + ' ' + temperatureUoMSelectedOption.symbol}</CardSubtitle>
                            </div>
                            : <></>
                    }
                </CardBody>
            </Card>


        </div>
    );
}

export default Temperature;