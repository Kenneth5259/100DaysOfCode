import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './RoomForm.css';

const StyledButton = withStyles({
    root: {
        margin: '1rem 0 1rem 50%'
    }
})(Button);

class RoomForm extends React.Component {
    constructor(props) {
        super(props);
        this.text = '';
        this.submitHandler = this.submitHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }
    text = '';
    textChangeHandler(event) {
        this.text = event.target.value;
    }
    submitHandler() {
        alert(this.text);
    }
    render(){
        return (
            <form noValidate autoComplete="off" className="room__form" onChange={this.textChangeHandler}>
                <TextField fullWidth ></TextField>
                <StyledButton variant="outlined" color="primary" size="medium" onClick={this.submitHandler}>Submit</StyledButton>
            </form>
        );
    } 
}

export default RoomForm;