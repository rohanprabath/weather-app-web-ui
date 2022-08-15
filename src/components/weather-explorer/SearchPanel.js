
import React, { Component, useState } from "react"
import { Button, Spinner } from "reactstrap";

export class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: "",
            city: "",
            isLoading: props.isLoading
        }
    }

    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    }

    handleCountryChange = (e) => {
        this.setState({ country: e.target.value });
    }

    handleSearch = (e) => {
        this.props.search(this.state.country, this.state.city);
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps", props);
        this.setState({ isLoading: props.isLoading });
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row row justify-content-center">
                    <div className="col-6">
                        <input  className="col-6 col-sm-12 form-control mt-2"
                            id="city"
                            placeholder="City"
                            onChange={this.handleCityChange}
                            value={this.state.city}
                        />
                        <input className="col-6 col-sm-12 form-control mt-2"
                            placeholder="Country Code, Eg: UK"
                            id="country"
                            onChange={this.handleCountryChange}
                            value={this.state.country}
                        />
                        <Button block={true} className="col mt-2 mb-2"
                            color="primary"
                            disabled={this.state.isLoading || !this.state.city || !this.state.country}
                            onClick={this.handleSearch}
                        >
                            {this.state.isLoading && <Spinner size="sm">
                                Loading...
                            </Spinner>}
                            <span>
                                {' '}Get local time, weather and temperature
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
} 