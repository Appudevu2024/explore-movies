
import React from 'react'
import MovieList from './components/MovieList'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    // <div>
    //   {/* <Header/> */}
    //   {/* <MovieList/> */}
    //   {/* <Footer/> */}
    // </div>

<Router>
<Routes>
<Route path="/" element={<MovieList />} />
<Route path="/explore-movies" element={<MovieList />} />
  <Route path='/explore-movies/movie/:movieId' element={<MovieDetails/>}/>     
</Routes>
</Router>

  )
}

export default App