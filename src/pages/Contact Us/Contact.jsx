import styles from './contact.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logowhite.png'
import QRcode from "../../assets/Qr_Code.png";


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
            <div className= {styles.Box}>
                <div className= {styles.left_box}>
                    <p>
                    Support My Hard Work!
                    
                    Hello, and thank you for visiting my website! I’ve poured countless hours into building and maintaining this platform to provide value, share knowledge, and create something meaningful for everyone who visits. From designing the layout to ensuring the content is top-notch, this website is a labor of love fueled by my passion and dedication.
                    
                    Running this site comes with its challenges, including hosting fees, development costs, and the time I invest to keep everything running smoothly. Your support will help me continue improving and adding valuable features.
                    
                    If you’ve found my work helpful or inspiring, consider making a small donation to keep the website going strong. Every contribution, no matter how small, is deeply appreciated and makes a huge difference!
                    
                    Please scan the QR code below to donate. Thank you for your generosity!
                    </p>
                </div>
                <div className= {styles.right_box}>
                    <img src= {QRcode} alt="Qr code" className= {styles.Qr_Code}/>
                </div>
            </div>
        
        </>
    );
}

export default Home 