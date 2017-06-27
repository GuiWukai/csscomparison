import React, { Component } from 'react';
import { Chip, Row, Col, Tag} from 'react-materialize';

export default class MaterializeChips extends Component {
	render(){
		return (
			<Row>
				<Col s={12}>
					<Chip>
						<img src='img/yuna.jpg' alt='Contact Person' />
						Jane Doe
					</Chip>
					<Tag>tag</Tag>
				</Col>
			</Row>
		);
	}

}