import React, {useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function Movie(props) {
  console.log("Movie", props)
  console.log(props)
      const [movie, setMovie] = useState(
        {title: "",
        director: "",
        metascore: null,
        stars: []}
      );  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, [movie.id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  

  
    if (!movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
        <div className="save-button" onClick={saveMovie}>
          Save
        </div>       
      </div>
    );
  }


