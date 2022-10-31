
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import FavoriteBook from './pages/FavoriteBook';
import HomePage from './pages/HomePage';
import { useState } from 'react'
import BookDetails from './pages/BookDetails';


function App() {
  const [favorite, setFavorite] = useState([])
  function addToFavorites(item) {
    setFavorite([...favorite, item])
    console.log(item)
  }
  function removeFromFavorites(item) {
    setFavorite(favorite.filter((f) => {
      if (item.id !== f.id) {
        return true
      } else {
        return false
      }
    }))
  }
  function addMoreToFavorites(item) {
    setFavorite([...favorite, item])
  }
  //  const addMoreToFavorites = (more,id) =>{
  //   console.log(more.id)
  //   let newUpdatedFavorites = favorite.map(m=>{
  //     if(m.itemid === id){
  //       return{
  //         ...m,
  //         rating:more.rating,
  //         notes:more.notes
  //       }
  //     } else{
  //       return m
  //     }
  //   })
  //   favorite.map(m=> m.itemid === id ?{...m,...more}:m)
  //   setFavorite(newUpdatedFavorites)
  //  }

  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage favorite={favorite} addToFavorites={addToFavorites} />} />
        <Route path='/favorites' element={<FavoriteBook favorite={favorite} removeFromFavorites={removeFromFavorites} />} />
        <Route path='/favorites/:id' element={<BookDetails favorite={favorite} addMoreToFavorites={addMoreToFavorites} />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>

  );
}

export default App;
