import React, { Component } from 'react';
import { Row, Col, ProgressBar } from 'react-materialize';

export default class MaterializePreloader extends Component {
	render(){
		return (
			<Row>
				<Col s={12}>
					<ProgressBar progress={70}/>
				</Col>
				<Col s={12}>
					<ProgressBar />
				</Col>
			</Row>
		);
	}

}