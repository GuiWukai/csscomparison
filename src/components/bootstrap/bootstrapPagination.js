import React, { Component } from 'react';
import {Button, ButtonToolbar, Pagination} from 'react-bootstrap';

export default class BootstrapPagination extends Component {
	render() {
		return (
			<div>
				<Pagination
				bsSize="large"
				items={10}
				activePage={this.state.activePage}
				onSelect={this.handleSelect} />
			</div>
		);
	}
}
