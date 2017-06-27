import React, { Component } from 'react';
import { Pagination } from 'react-materialize';

export default class MaterializePagination extends Component {
	render() {
		return (
			<Pagination items={10} activePage={2} maxButtons={8}/>
		);
	}
}