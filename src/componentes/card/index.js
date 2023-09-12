import styles from "./Card.module.css";
import iconeFavoritar from '../../assets/imgs/favoritar.png';
import { useFavoritoContext } from "contexto/favoritos";
import desfavortarIcon from '../../assets/imgs/desfavoritar.png'
import { Link } from "react-router-dom";


function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : desfavortarIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt="Favoritar FIlme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )
}

export default Card;