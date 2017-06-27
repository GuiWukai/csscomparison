import React, { Component } from 'react';
import { Breadcrumb, MenuItem} from 'react-materialize';

export default class MaterializeBreadcrumbs extends Component {
	render() {
		return (
			<Breadcrumb>
			<MenuItem>first</MenuItem>
			<MenuItem>second</MenuItem>
			<MenuItem>third</MenuItem>
			</Breadcrumb>
		);
	}
}
