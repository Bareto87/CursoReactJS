import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                //ruta que nos envia a la pagina principal
                <Route exact path="/" element={<LandingPage/>} />
                //ruta que nos envia a los detalles de cada pelicula
                <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
            </Routes>
        </Router>
    )
}