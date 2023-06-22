// import React from "react";
// import { Route, Routes} from 'react-router-dom';
// import HomePage from "pages/HomePage/HomePage";





// const App = () => {
//   return (
    
//       <Routes>
// <Route path='/' element={<HomePage />}/>
//       </Routes>
    
//   );
// };


// export default App;


import { Route, Routes } from "react-router-dom";
import { lazy } from "react";


const FilmLayout = lazy(() => import('./components/FilmLayout/FilmLayout'));
const Home = lazy(() => import('./components/Pages/Home'));
const Movies = lazy(() => import('./components/Pages/Movies'));
const MoveDetails = lazy(() => import('./components/MoveDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));
const NotFound = lazy(() => import('./components/NotFound'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<FilmLayout />} >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<MoveDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;