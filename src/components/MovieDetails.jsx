import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';


const API_KEY = '1b11e86fce3eb8f1a1e20560088e9801';
function MovieDetails() {
    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
                console.log(res.data);
                setMovie(res.data);
            } catch (error) {
                console.log('Error fetching data:', error)
            }
        }
        if (movieId) {
            fetchMovie();
        }
    }, [movieId]);

    return (
        <div>
            <Header />
            <h1>Movie Details</h1>
            {movie ? (
                <>
                    <img className="imgElement" src={`https://image.tmdb.org/t/p/w500${movie.
                        poster_path
                        }`} />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p>Release_date:{movie.release_date}</p>
                    <p>Original_language:{movie.original_language}</p>
                </>
            ) : (<p>Loading...</p>
            )}
            <Footer />
        </div>

    );
}

export default MovieDetails
