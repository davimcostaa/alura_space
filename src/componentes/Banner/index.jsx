
import banner from "./banner.png"
import styles from "./Banner.module.scss"

export default function Banner() {
    return ( 
        <div className={styles.imagem}> 
            <img src={banner} alt="Vista da terra sobre a lua" />
            <h1>A galeria mais completa do espaço </h1>
        </div>
    )
}

