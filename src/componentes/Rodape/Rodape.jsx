import styles from './Rodape.module.scss'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
           <div className={styles.rodape__icones}>
                <a href='https://facebook.com'> <img src={facebook} alt='Logo do Facebook'/></a>
                <a href='https://twitter.com'><img src={twitter} alt='Logo do Twitter'/> </a>
                <a href='https://instagram.com'> <img src={instagram} alt='Logo do Instagram'/> </a>
            </div> 

            <div>
                <p> Desenvolvido por Alura </p>
            </div>
        </footer>
    )
}