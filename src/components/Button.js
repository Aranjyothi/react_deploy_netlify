import React from 'react'
import { useState} from 'react'
import { useLocation,Link } from 'react-router-dom'

function Button({item,addToFavorites,favorite,removeFromFavorite}) {
    let location = useLocation()

    const alreadyFavorited = () => {
      let check = favorite?.find((i)=> i.id === item.id)
      if(check){
        return true
      } else{
        return false
      }
    }
    const loaded = () =>{
      if(location.pathname === "/favorite"){
        return(
          <div>
            <Link to={`/favorite/${item.id}`}>
            <img src={item.imgUrl} alt={item.title}/>
            </Link><br />
            <button onClick={() => removeFromFavorite(item)}>Remove from Favorite</button>
  
          </div>
        )
      } else{
        return(
          <div>
            <h1>{item.title}</h1>
            <img src={item.imgUrl} alt={item.title}/>
            <br />
            {
              alreadyFavorited()
                ?
                "Favorited"
              :
              <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
            }
  
          </div>
        )
      }
      
    }
   

    return (
        <div>

            <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
            <button onClick={() => removeFromFavorite(item)}>Remove from Favorite</button>
  
        </div>
    )
}

export default Button