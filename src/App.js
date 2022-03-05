import { useEffect } from 'react';

// f4a738de

const API_URL = 'http://www.omdbapi.com/?apikey=f4a738de'

const App = () => {

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.movies);
    }


    useEffect(() =>{
        searchMovies('superman');
    },[])



    return(
        <h1>App</h1>
    );
}


export default App;