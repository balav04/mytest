import React, { useState,useEffect } from "react";
import { withRouter } from 'react-router-dom';
 
 export default function SearchBar(props) {
  const [tittle, setMovieTittle] = useState("");

  return (
          <React.Fragment>
		  <div className="input-group col-8 input-box">
  <input type="text" className="form-control" placeholder="Search by Movie Name"  aria-describedby="basic-addon2" onChange ={(e)=>setMovieTittle(e.target.value)} />
  <div className="input-group-append search-btn">
    <button className="btn btn-primary" type="button" onClick = {()=>props.updateData(tittle)}>Search</button>
  </div>
</div>
		</React.Fragment>
		)
}
