import styles from './home.module.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logowhite.png'
import Photo from '../../components/MainPhotos/Photo.jsx'
import Nature from '../../assets/Nature_Home.jpg'
import Abstract from '../../assets/Abstract_Home.jpg'
import Animal from '../../assets/Animal_Home.jpg'
import City from '../../assets/City_Home.jpg'
import Space from '../../assets/Space_Home.jpg'
import Minimalist from '../../assets/Minimalist_Home.jpg'
import Art from '../../assets/Art_Home.jpg'
import Technology from '../../assets/Technology_Home.jpg'
import Sports from '../../assets/Sports_Home.jpg'
import Gamer from '../../assets/Gamer_Home.jpg'
import Anime from '../../assets/Anime_Char.avif'
import Quotes from '../../assets/Quotes_Home.jpg'

import Banner from '../../assets/Banner.jpg'

function Home(){

    const Name = localStorage.getItem('userName');
    const Image = localStorage.getItem('userImage');

    return(
        <>
            <div className= {styles.Container}>
                <div className= {styles.Logo}>
                    <img src= {Logo} alt="Logo" className= {styles.Logo}/>
                </div>
                <nav>
                    <ul>
                        <li><Link to= '/home' className= {styles.Link}>Home</Link></li>
                        <li><Link to= '/about' className={styles.Link}>About</Link></li>
                        <li><Link to= '/contact' className={styles.Link}>Donate</Link></li>
                    </ul>
                </nav>
                <div className= {styles.ProfileCard}>
                        <img src= {Image} alt="Profile Img" className={styles.Profile}/>
                        <h4>{Name}</h4>
                </div> 
            </div>
            <div className= {styles.MainContent}>
                <img src= {Banner} alt="Banner"  className= {styles.BannerImg}/>
                <div className= {styles.text_overlay}>
                    <h2>Download your Favorite Image</h2>
                    <h2>According to the Category 😊</h2>
                </div>
            </div>
            <div className= {styles.Catagorys}>
                <Link to= '/nature' className = {styles.Link}><Photo Name = 'Nature' Image = {Nature}/ ></Link>
                <Link to= '/abstract' className = {styles.Link}><Photo Name = 'Abstract' Image = {Abstract}/></Link>
                <Link to= '/animals' className = {styles.Link}><Photo Name = 'Animals' Image = {Animal}/></Link>
                <Link to= '/cities_architecture' className = {styles.Link}><Photo Name = 'Cities' Image = {City}/></Link>
                <Link to= '/space_universe' className = {styles.Link}><Photo Name = 'Space' Image = {Space}/></Link>
                <Link to= '/minimalist' className = {styles.Link}><Photo Name = 'Minimalist' Image = {Minimalist}/></Link>
                <Link to= '/art_illustration' className = {styles.Link}><Photo Name = 'Art' Image = {Art}/></Link>
                <Link to= '/technology' className = {styles.Link}><Photo Name = 'Technology' Image = {Technology}/></Link>
                <Link to= '/sports' className = {styles.Link}><Photo Name = 'Sports' Image = {Sports}/></Link>
                <Link to= '/gaming' className = {styles.Link}><Photo Name = 'Gaming' Image = {Gamer}/></Link>
                <Link to= '/anime' className = {styles.Link}><Photo Name = 'Anime ' Image = {Anime}/></Link>
                <Link to= '/quotes_typography' className = {styles.Link}><Photo Name = 'Quotes' Image = {Quotes}/></Link>
            </div>
        </>
    );
}

export default Home 