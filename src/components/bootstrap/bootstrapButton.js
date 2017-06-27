import React, { Component } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

export default class BootstrapButton extends Component {
    render() {
        return (
            <ButtonToolbar>
                <Button>Default</Button>
            </ButtonToolbar>
        );
    }
}