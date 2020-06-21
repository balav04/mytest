import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
import './../index.css'

export default function Home(props) {
const [tittle, setMovieTittle] = useState("English");
const searchString = (str) => {
	setMovieTittle(str)
}
  return (
  <React.Fragment>
		    <SearchBar updateData = {searchString}/>   
	<div className = "content-top-card">
        <section>
		<MovieCard text = {tittle}/>
			</section>
   </div>
</React.Fragment>
)
}