import React, { useState,useEffect } from "react";
import { withRouter } from 'react-router-dom';
import './../index.css'
 
 export default function SearchBar(props) {
  const [tittle, setMovieTittle] = useState("");

  return (
          <React.Fragment>
		  <div class="input-group col-8 input-box">
  <input type="text" class="form-control" placeholder="Movie Name"  aria-describedby="basic-addon2" onChange ={(e)=>setMovieTittle(e.target.value)} />
  <div class="input-group-append search-btn">
    <button class="btn btn-primary" type="button" onClick = {()=>props.updateData(tittle)}>Search</button>
  </div>
</div>
		</React.Fragment>
		)
}
