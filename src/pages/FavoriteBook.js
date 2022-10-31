import React from 'react'
import { Link } from 'react-router-dom'

// import Button from '../components/Button'
// import {useLocation} from "react-router-dom"

function FavoriteBook({item,favorite,addToFavorites,removeFromFavorites}) {

  // let location = useLocation()

  const alreadyFavorited = (item) => {
    let check = favorite?.find((i)=> i.id === item.id)
    if(check){
      return true
    } else{
      return false
    }
  }
  const loaded = (item) =>{
    
  
      return(
        <div>
        
          {            alreadyFavorited(item)
              ?
              <button onClick={() => removeFromFavorites(item)}>Remove from Favorite</button>
            :
            <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
          }

        </div>
      )

    
  }
  console.log(favorite)
  return (
    <div className='favorite'>
      
      {favorite.map((item)=>{
        return(
        <div key={item.id}>
          
          Title: {item.title} <br />
          <Link to={`/favorites/${item.id}`}>
          <img src={item.imgUrl} alt={item.title}></img>
          </Link>
          <br></br>
          Review:{item.review} <br /> 
          Description:{item.description} 
       
          <br></br>
        
         {loaded(item) }
         <br />
        </div>
        )
      })}
    </div>
    
  )
}

export default FavoriteBook