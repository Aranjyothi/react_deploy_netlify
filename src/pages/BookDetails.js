import React from "react";
import { useParams} from "react-router-dom";
import NotesForm from "../components/NotesForm";
function BookDetails({ favorite, addMoreToFavorite }) {
  let params = useParams();
  console.log(favorite);
  const bookdetail = favorite[params.id];
//   console.log(params.id.id);
  console.log(bookdetail);
   return (
    <div>
      <h2>BookDetails</h2>
      <h3>{bookdetail.title}</h3>
      <img className="detail-image" src={bookdetail.imgUrl} alt={bookdetail.title} />
      <h3>Author:{bookdetail.author}</h3>
      <h3>Rating:{bookdetail.review}</h3>
      <span>Description:{bookdetail.description}</span>
      <br />
      <br />
      {bookdetail.NotesForm ? (
        <div>
          <h4>Thoughts:</h4>
          <p>Personal Ratings:{bookdetail.rating}</p>
          <p> Notes:{bookdetail.notes}</p>
        </div>
      ) : (
        <NotesForm
          addMoreToFavorites={addMoreToFavorite}
          favorites={favorite}
        />
      )}
    </div>
  );
}
export default BookDetails;