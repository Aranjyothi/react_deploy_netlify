import React, { useEffect } from "react"
import{useState} from'react'
import DisplayBooks from "../components/DisplayBooks"

function HomePage ({addToFavorites,favorite}){
    const[bookList,setBookList] =useState([])
    console.log(bookList)
    
  const fetchData=async ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '88a7a39d6emshe13b42a94b6dd24p14b077jsn85943d26b821',
                'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
            }
        };
        try{
            const result = await fetch ('https://bookshelves.p.rapidapi.com/books', options)
            const data = await result.json();
            console.log(data);
            setBookList(data)

          } catch(err){
            console.log(err)
          }
        
        }
   
    useEffect(()=>{
        fetchData()
        
    },[])
    return(
        <div className="home">
            <DisplayBooks data={bookList} addToFavorites={addToFavorites}favorite={favorite} />
        </div>
    )
}
export default HomePage;
