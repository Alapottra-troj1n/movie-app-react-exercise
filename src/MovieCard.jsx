import React from 'react';


const MovieCard = ({moviedata}) => {
    console.log(moviedata);
    return(
        <div className="movie">

        <div>
            <p>{moviedata.Year}</p>
        </div>
        <div>
            <img src = {moviedata.Poster} />
        </div>
        <div>
            <span>{moviedata.Type}</span>
            <h3>{moviedata.Title}</h3>
        </div> 
         
    </div>

    );
};

export default MovieCard;