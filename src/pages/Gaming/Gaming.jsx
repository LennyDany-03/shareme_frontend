import React from 'react'
import styles from './gameing.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logowhite.png'

import ContentPhoto from '../../components/ContentPhotos/ContentPhoto.jsx'

const Gaming = () => {
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
            <div className= {styles.HeadLine}>
                <h1>Gaming</h1>
            </div>
            <div className= {styles.MainContent}>
                <ContentPhoto category= 'Gaming'/>
            </div>
        </>
    );
}

export default Gaming
