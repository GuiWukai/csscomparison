import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';

export default class MaterializeCollections extends Component {
	render(){
		return (
			<Collection>
				<CollectionItem>Bob</CollectionItem>
				<CollectionItem>Bob</CollectionItem>
				<CollectionItem>Bob</CollectionItem>
				<CollectionItem>Bob</CollectionItem>
			</Collection>
		);
	}

}