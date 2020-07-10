import React, { Component }  from 'react';
import  { Robots }  from './components/Robots';
import CardList from'./components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'
import './App.css';

class App extends Component
{
	constructor(){
		super()
		this.state={
			Robots:[],
			Searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
		return	response.json()
		})
		.then(users=>
			{this.setState({Robots:Robots})
	})	
	}
	onsearchchange = (event) => {
		this.setState({Searchfield: event.target.value})
		}
	render() {
		const filteredRobots = this.state.Robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		})
		if (this.state.Robots.length===0) {
			return <div><div class="loader">
				 </div>
				 <h1 style={{color:'white'}}>loding</h1>
	</div>	     
		}
		else{
		return(
		<div className="tc pa1 shadow-5" >
		<h1 class="glow" >Robofriend</h1>
		<SearchBox searchchange={ this.onsearchchange } />
		<Scroll>
		<CardList Robots={ filteredRobots } />
	</Scroll>
</div>
	 ); }
	}
}
export default App;