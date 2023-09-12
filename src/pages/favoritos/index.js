import Banner from "componentes/banner";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/titulo";
import Card from "componentes/card";
import { useFavoritoContext } from "contexto/favoritos";

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((favo) => {
                    return <Card {...favo} key={favo.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;