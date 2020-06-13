import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Slider from '@material-ui/core/Slider';

import './RoomInfo.css';


import 'bootstrap/dist/css/bootstrap.min.css';

class RoomInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'On',
            buttonVariant: 'success',
            currentTemp: 72.0,
            preferredTemp: 68.0,
            tempUnit: 'F',
            marks: [
                {
                    value: 0,
                    label: '50°F'
                }, 
                {
                    value: 100,
                    label: '95°F'
                }
            ]
        }
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.temperatureConversionHandler = this.temperatureConversionHandler.bind(this);
        this.valueText = this.valueText.bind(this);
    }
    buttonClickHandler = (event) => {
        let newName = this.state.buttonName === 'On' ? 'Off':'On'
        let newVariant =  this.state.buttonVariant === 'success' ? 'danger':'success'
        this.setState({
            buttonName: newName,
            buttonVariant: newVariant
        })
    }
    temperatureConversionHandler = (event) => {
        let unit;
        let curTemp = 0;
        let prefTemp = 0;
        if(this.state.tempUnit === 'F') {
            unit = 'C';
            curTemp = (this.state.currentTemp - 32) * 5 / 9;
            prefTemp = (this.state.preferredTemp - 32) * 5 / 9;
        } else {
            unit = 'F';
            curTemp = this.state.currentTemp * 9 / 5 + 32;
            prefTemp = this.state.preferredTemp * 9 / 5 + 32;
        }
        this.setState({
            tempUnit: unit,
            preferredTemp: prefTemp.toFixed(1),
            currentTemp: curTemp.toFixed(1)
        });
    }
    valueText= (value) => {
        return `${value}°${this.state.tempUnit}`;
    }
    render() {
        return (
            <div className="room__shadow">
            <Card bg="dark" text='white' className="room">
                <Card.Header className="room__title border-bottom border-white" >{this.props.title}</Card.Header>
                <Card.Body className="room__temp">
                    <div className="room__temp__title">
                        Current Temp:
                    </div> 
                    <div className="room__temp__unit" onClick={this.temperatureConversionHandler}>
                        {this.state.tempUnit}
                    </div>
                    <div className="room__temp__value">
                        {this.state.currentTemp}
                    </div> 
                    
                </Card.Body>
                <Card.Body className="room__temp">
                    <div className="room__temp__title">
                        Preferred Temp:
                    </div> 
                    <div className="room__temp__unit" onClick={this.temperatureConversionHandler}>
                        {this.state.tempUnit}
                    </div> 
                    <div className="room__temp__value">
                        {this.state.preferredTemp}
                    </div> 
                </Card.Body>

                <Slider aria-label='Temperature' valueLabelDisplay='auto' value={[0,100]} getAriaLabel={this.valueText}/>

                <Button className="room__button" variant={this.state.buttonVariant} onClick={this.buttonClickHandler}>{this.state.buttonName}</Button>
            </Card></div>
        );
    }
};

export default RoomInfo;