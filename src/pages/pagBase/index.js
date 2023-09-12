import Cabecalho from "componentes/cabecalho";
import Container from "componentes/container";
import Rodape from "componentes/rodape";
import FavortiosProvider from "contexto/favoritos";
import { Outlet } from "react-router-dom";

function Paginabase() {
    return (
        <main>
            <Cabecalho />
            <FavortiosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavortiosProvider>
            <Rodape />
        </main>
    )
}

export default Paginabase;