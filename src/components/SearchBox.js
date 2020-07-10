import React from 'react';
  const SearchBox=({searchfield, searchchange})=>{
	return(
		<div className="tc pa2">
		<input type='text'
		 placeholder='search robot...'
		 class="search"
		  className="pa3 ba br-pill grow bw1 shadow-5  bg-lightest-blue b--green" 
		  onChange={searchchange}
		 />
		</div>

		);
}
export default SearchBox;