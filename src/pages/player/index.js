import Banner from "componentes/banner";
import styles from "./Player.module.css";
import Titulo from "componentes/titulo";
import { useParams } from "react-router-dom";

import Notfound from "pages/notfound";
import { useEffect, useState } from "react";

function Player() {
    const parametros = useParams();
    const [video, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/RogerioPradoo/cinetag-api/videos?id=${parametros.id}`)
            .then(resp => resp.json())
            .then(dados => {
                setVideos(...dados);
            }, []);
    });



    if (!video) {
        return <Notfound />
    }

    return (
        <>
            <Banner />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;