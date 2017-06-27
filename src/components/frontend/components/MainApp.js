import React from 'react';

export default class FrontPage extends React.Component {

	render() {
const styles = {
	container: {
		  height: '100%',
		  width: 0,
		  position: "fixed",
		  zIndex: 1,
		  top: 0,
		  left: 0,
		  backgroundColor: '#111',
		  overflowX: "hidden",
		  transition: 0.5,
		  paddingTop: 60,
		},
	link: {
		  padding: '8 8 8 32',
		  textDecoration: 'none',
		  fontSize: 25,
		  color: '#818181',
		  display: 'block',
		  transition: 0.3,
		
		  position: 'absolute',
		  top: 0,
		  right: 25,
		  fontS: 36,
		  marginLeft: 50,
		  transition: 0.5,
		  padding: 16,
		}	
			}
		}
		return (
		 <div>
		  <div style={styles.container}>
		    <a href="javascript:void(0)" styles={styles.button} onclick="closeNav()">&times;</a>
		    <a href="#" styles={styles.link}>About</a>
		    <a href="#" styles={styles.link}>Services</a>
		    <a href="#" styles={styles.link}>Clients</a>
		     <a href="#" styles={styles.link}>Contact</a>
		  </div>
		   <div>
		    <h2>Sidenav Push Example</h2>
		    <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>
		    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
		  </div>
		</div>
		);
	}
}
