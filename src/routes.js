import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import Notfound from "pages/notfound";
import Paginabase from "pages/pagBase";
import Player from "pages/player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Paginabase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<Notfound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;