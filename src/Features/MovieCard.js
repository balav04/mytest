import React, { useState,useEffect } from "react";
import { withRouter } from 'react-router-dom';
 const MovieCard = (props) =>{
	 
	   const [movieData, setMovieData] = useState([]);
	   const [showItems,setShowItems] = useState(3);
	 useEffect(() => {
    fetch(`http://omdbapi.com/?apikey=b9bd48a6&s=${props.text}&type=movie`)
        .then(async response => {
            const data = await response.json();
			let movielist = data.Search?data.Search:[]
			setMovieData(data.Search)
  });
	 },[props.text])
	 window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  if (offset >= height) {
    setShowItems(showItems+3)
  }
};
     return<>
	 {movieData&&movieData.map((val,index)=>{
		 if(index < showItems){
		
		 return <div className="row card-block">
		 <div className="card" style={{"width": "20rem"}}>
  <img src={val.Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.Title}</h5>
	<div class="col-md-3 text-center"> 
  <button id="button" name="button" class="btn btn-primary" onClick = {()=>props.history.push(`/movie/${val.imdbID}`)}>More Info</button> 
</div>
    </div> 
  </div>
</div>
		 }
	 })}
	 </>
  
 
 }
export default withRouter(MovieCard);