import React from 'react';
const Card=({id, name , email})=>{
	return(
		<div className="bg-blue dib br3 pa3 ma2 grow shadow-5" id="cards">
			<img alt="robot" src={`https://robohash.org/${id}?200X200`}  />
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>);
}
export default Card;