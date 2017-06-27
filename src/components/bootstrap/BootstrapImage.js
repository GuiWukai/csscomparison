import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class Bootstrap extends Component { 
	render() {
		return (
			<Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/assets/thumbnail.png" rounded />
         </Col>
         <Col xs={6} md={4}>
            <Image src="/assets/thumbnail.png" circle />
         </Col>
          <Col xs={6} md={4}>
           <Image src="/assets/thumbnail.png" thumbnail />
         </Col>
       </Row>
      </Grid>
			);
		}
	}



