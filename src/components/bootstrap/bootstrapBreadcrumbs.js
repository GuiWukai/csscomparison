import React, { Component } from 'react';
import {Breadcrumb} from 'react-bootstrap';

export default class BootstrapButton extends Component {
	render() {
		return (
			<div>
				<Breadcrumb>
				<Breadcrumb.Item href="#">
				Home
				</Breadcrumb.Item>
				<Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
				Library
				</Breadcrumb.Item>
				<Breadcrumb.Item active>
				Data
				</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		);
	}
}