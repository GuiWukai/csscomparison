import React, { Component } from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Bootstrap extends Component {
	render() {
		return (
			 <ListGroup>
    			 <ListGroupItem>Item 1</ListGroupItem>
    			 <ListGroupItem>Item 2</ListGroupItem>
    		         <ListGroupItem>...</ListGroupItem>
  			 </ListGroup>
			);
		}
	}
