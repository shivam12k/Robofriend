import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflowY:'scroll' , border:'3px solid black' , height:'450px' }}>
			<h1>{props.children}</h1>
		</div>
		);
}
export default Scroll;