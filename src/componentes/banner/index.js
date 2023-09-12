import styles from './Banner.module.css';
import img from "../../assets/imgs/banner-home.png";

function Banner() {
    return (
        <div className={styles.capa}
            style={{ backgroundImage: `url('${img}')` }}>
        </div>
    )
}

export default Banner;