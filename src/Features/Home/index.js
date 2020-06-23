import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import SearchBar from '../SearchBar/index'
import Moviecard from '../Moviecard/index'

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
		<Moviecard text = {tittle}/>
			</section>
   </div>
</React.Fragment>
)
}