import React from 'react'
// import Button from './Button'
import {Link, useLocation } from 'react-router-dom'

function DisplayBooks({data,addToFavorites,removeFromFavorites,favorite,item}) {
  const alreadyFavorited = (item) => {
    let check = favorite?.find((i)=> i.id === item.id)
    if(check){
      return true
    } else{
      return false
    }
  }
    
  
console.log(data)
  return (
    <div className='container'>
<ul>
  {data?.Books?.map((item)=>{
  
    return(
      <li key={item.id}>
       <h3>{item.title} </h3>
        <img src={item.imgUrl} alt={item.title}/>
      <h3> Author:{item.author}</h3>
      {/* <Button onClick={() => removeFromFavorites(item)}Remove from Favorite/> */}
      {/* <Button item={item} addToFavorites={addToFavorites}/><br></br> */}
      {/* <button onClick={() => addToFavorites(item)}>Add to Favorites</button> */}
      {
            alreadyFavorited(item)
              ?
              "Favorited"
            :
            <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
          }
      </li>
    )
  })}
</ul>
    </div>
  )
}

export default DisplayBooks