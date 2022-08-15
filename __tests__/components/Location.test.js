// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';
import React, { Component } from "react";
import renderer from 'react-test-renderer';
import Location from '../../src/components/weather-explorer/Location';

it('renders correctly', () => {
  const tree = renderer
    .create(<Location isLoading={false} { ...{currectCility : "London", currectCountry:"United Kingdon"} } ></Location>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});