import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail, } from 'react-bootstrap';

export default class Bootstrap extends Component { 
	render() {
		return (
			<Grid>
       <Row>
        <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
         </Col>
       <Col xs={6} md={3}>
         <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
       </Col>
      <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
       </Col>
       </Row>
     </Grid>
			);
		}
	}



