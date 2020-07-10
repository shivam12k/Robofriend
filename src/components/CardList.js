import React from 'react';
import Card from './Card';
 const CardList=({ Robots })=>{
 	let cardComponents=Robots.map((user,i)=>{
 		return <Card  key={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email} />});	
 	return(
 		<div className="tc pa1">
 		{cardComponents}
 		</div>
 		);
 }
 export default CardList;