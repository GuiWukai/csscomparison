import React, { Component } from 'react';
import {Pager} from 'react-bootstrap';

export default class BootstrapPager extends Component {
	render() {
		return (
			<Pager>
				<Pager.Item href="#">Previous</Pager.Item>
				{' '}
				<Pager.Item href="#">Next</Pager.Item>
			</Pager>
			);
		}
	}