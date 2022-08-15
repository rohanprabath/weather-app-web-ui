import React, { Component } from "react";
import { SearchPanel } from "../components/weather-explorer/SearchPanel";
import { Location } from "../components/weather-explorer/Location";
import { LocalTime } from "../components/weather-explorer/LocalTime";
import { WeatherInfo } from "../components/weather-explorer/WeatherInfo";
import { Temperature } from "../components/weather-explorer/Temperature";
import { geCurrectWeather } from "../service/WeatherapiService";
import { Alert } from "reactstrap";


export class WeatherExplorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isError: false,
            errorMessage: "null",
            location: {
                currectCility: null,
                currectCountry: null
            },
            locationTime: {
                localTimeEpoch: 0,
                localTimeText: null,
                timeZoneId: null
            },
            currectTemperature: {
                temparatureCelsius: null,
                feelsLikeTemparatureCelsius: null,
                temparatureFahrenheit: null,
                feelsLikeTemparatureFahrenheit: null
            },
            weatherInfo: {
                conditionText: null,
                conditionIcon: null
            },
            currentWeather: null
        }
    }

    search = (countryCode, city) => {
        this.setState({ isLoading: true })
        this.setState({ isError: false, errorMessage: null });
        geCurrectWeather(countryCode, city).then(response => {
            let currentWeather = response.data;
            console.log("currentWeather", currentWeather);

            this.setState({
                location: {
                    currectCility: currentWeather.city,
                    currectCountry: currentWeather.country
                },
                locationTime: {
                    localTimeEpoch: currentWeather.localTimeEpoch,
                    localTimeText: currentWeather.localTimeText,
                    timeZoneId : currentWeather.timeZoneId
                },
                currectTemperature: {
                    temparatureCelsius: currentWeather.temparatureCelsius,
                    feelsLikeTemparatureCelsius: currentWeather.feelsLikeTemparatureCelsius,
                    temparatureFahrenheit: currentWeather.temparatureFahrenheit,
                    feelsLikeTemparatureFahrenheit: currentWeather.feelsLikeTemparatureFahrenheit
                },
                weatherInfo: {
                    conditionText: currentWeather.conditionText,
                    conditionIcon: currentWeather.conditionIcon
                },
                currentWeather: currentWeather
            });

        }).catch(error => {

            this.setState({ currentWeather: null });
            if (error.response?.status == 500) {
                this.setState({ isError: true, errorMessage: "Invalid city name or country name provided, try agian with valid inputs!" });

            } else {
                this.setState({ isError: true, errorMessage: "Error on getting current weather, plese try agian shortly!" });
            }
        }).finally(() => {
            this.setState({ isLoading: false })
        });
    }

    onErrorMessageDismiss = () => this.setState({ isError: false });


    render() {
        return (
            <div>
                <div className="container text-center"><h2>Weather Explorer</h2></div>
                <SearchPanel isLoading={this.state.isLoading} search={this.search}></SearchPanel>
                {!this.state.isLoading && this.state.currentWeather && <div className="row">
                    <div className="mt-2 col-lg-4 col-md-6 col-sm-12">
                        <Location isLoading={this.state.isLoading} {...this.state.location}></Location>
                    </div>
                    <div className="mt-2 mt-2 col-lg-4 col-md-6 col-sm-12">
                        <LocalTime isLoading={this.state.isLoading} {...this.state.locationTime}></LocalTime>
                    </div>
                    <div className="mt-2 mt-2 col-lg-4 col-md-6 col-sm-12">
                        <Temperature isLoading={this.state.isLoading} {...this.state.currectTemperature}></Temperature>
                    </div>
                    <div className="mt-2 mt-2 col-lg-4 col-md-6 col-sm-12">
                        <WeatherInfo isLoading={this.state.isLoading} {...this.state.weatherInfo}></WeatherInfo>
                    </div>
                </div>
                }

                <Alert color="danger" isOpen={this.state.isError} toggle={this.onErrorMessageDismiss}>
                    {this.state.errorMessage}
                </Alert>

            </div>
        );
    }
}