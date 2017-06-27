import React, { Component } from 'react';
import { Badge, Collection, CollectionItem} from 'react-materialize';

export default class MaterializeBadges extends Component {
	render(){
		return (
			<Collection>
				<CollectionItem href="#!">
					Alan <Badge>1</Badge>
				</CollectionItem>
				<CollectionItem href="#!">
					Alan <Badge newIcon>4</Badge>
				</CollectionItem>
				<CollectionItem href="#!">
					Alan
				</CollectionItem>
				<CollectionItem href="#!">
					Alan <Badge>14</Badge>
				</CollectionItem>
			</Collection>
		);
	}

}