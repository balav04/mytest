import React, { useState,useEffect } from "react";
import { withRouter } from 'react-router-dom';
import './index.css'
 const Moviecard = (props) =>{
	 
	   const [movieData, setMovieData] = useState([]);
	   const [showItems,setShowItems] = useState(8);
	 useEffect(() => {
    fetch(`http://omdbapi.com/?apikey=b9bd48a6&s=${props.text}&type=movie`)
        .then(async response => {
            const data = await response.json();
			let movielist = data.Search?data.Search:[]
			setMovieData(movielist)
  });
	 },[props.text])
	 window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  if (offset >= height) {
    setShowItems(showItems+8)
  }
};
	 return <div className="grid-container" >
	 {movieData.length?movieData.map((val,index)=>{
		 if(index < showItems){
	
  return <div className="row card-block" key = {val.imdbID} >
		 <div className="card" style={{"width": "20rem","cursor":"pointer" }} onClick = {()=>props.history.push(`/movie/${val.imdbID}`)}>
  <img src={val.Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.Title}</h5>
	<div className="col-md-3 text-center"> 
</div>
    </div> 
  </div>
</div>
		 }
	 }):<p >No Data Found</p>}
	 </div>
	 
  
 
 }
export default withRouter(Moviecard);