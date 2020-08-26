import React from 'react'

function MovieCasts(props) {
  console.log(props)
 return( 
  
   <div>

     <img src={props.image} alt={props.characterName}/>
     <div>{props.characterName} </div>
     
     </div>  
    
 );
}

export default MovieCasts