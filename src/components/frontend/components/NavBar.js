import React from 'react';

export default class FrontPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const styles = {
			container: {
				backgroundColor:'black',
			}
		}
		return (
			<div>
			<nav className="navbar navbar-toggleable-md navbar-dark fixed-top scrolling-navbar" style={styles.container }>
      <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
      <strong>Navbar</strong>
      </a>
      <div className="collapse navbar-collapse" id="navbarNav1">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#best-features">Features</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#contact">Contact</a>

      </li>
      </ul>
      <form className="form-inline waves-effect waves-light">
      <input className="form-control" type="text" placeholder="Search" />
      </form>
      </div>
      </div>
      </nav>
			</div>
		);
	}
}
