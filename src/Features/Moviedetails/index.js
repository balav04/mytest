import React, {Component } from "react";
 
 class Moviedetails extends Component {
	 constructor(){
		 super()
		 this.state = {response:{}}
	 }
	 componentDidMount(){
		 const id = decodeURI(window.location.href).split('/').pop();
		 
		 fetch(`http://omdbapi.com/?apikey=b9bd48a6&i=${id}`)
        .then( async response => {
            const data =  await response.json();
			this.setState({response:data})
  });
	 }
render(){
	const objectKeys = Object.keys(this.state.response)
	const bgImg = this.state.response?this.state.response.Poster:"";	
  return (
  <React.Fragment>
  <header>
		<nav className="navbar">
     	 <a className="navbar-brand" href="javascript:void(0);" >
     	 	<img src={bgImg} />
     	 </a>
	      
	      <div className="header-right">
		    <h3>{this.state.response?this.state.response.Title:""}</h3>	
		  </div>
		  <div className="header-right">
		    <a  href="#">Home</a>	
		  </div>
		  
	    </nav>
	</header>
  <div className = "content-top">
        <section>
		{objectKeys.length?
		<table className="table table-sm tbl-bg" >{objectKeys.map((keyval)=>{
			if(keyval !== 'Ratings'){
				return <tbody>
    <tr>
      <th scope="row">{keyval}</th>
      <td>{this.state.response[keyval]}</td>
    </tr>
    
  </tbody>
			}
 })
		}
		</table>:""}
			</section>
   </div>
   </React.Fragment>
  )
}
}
export default Moviedetails;
