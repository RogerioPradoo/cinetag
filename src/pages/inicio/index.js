import styles from "./Inicio.module.css";
import Banner from "componentes/banner";
import Titulo from "componentes/titulo";
import Card from "componentes/card";
import { useEffect, useState } from "react";


function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/RogerioPradoo/cinetag-api/videos")
            .then(resp => resp.json())
            .then(dados => {
                setVideos(dados);
            }, []);
    });

    return (
        <>
            <Banner />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

        </>
    )
}

export default Inicio;