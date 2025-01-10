import styles from './about.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logowhite.png'
import Lenny from '../../assets/Lenny.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


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
                    <div className= {styles.Top}>
                        <img src= {Lenny} alt="Lenny Image" className= {styles.LennyImg}/>
                        <h1>Lenny Dany Derek D</h1><br /><br />
                        <p>College Student</p><br />
                        <p> Full Stack Developer, Python Developer</p>
                    </div>
                    <div className= {styles.Bottom}>
                        <a href="https://github.com/LennyDany-03" target='_blank'><FontAwesomeIcon icon={faGithub} className= {styles.Icons}/></a>
                        <a href="https://www.linkedin.com/in/lenny-dany-derek-d-4411aa326" target='_blank'><FontAwesomeIcon icon={faLinkedin} className= {styles.Icons}/></a>
                        <a href="https://www.instagram.com/lenny_dany_3" target='_blank'><FontAwesomeIcon icon={faInstagram} className= {styles.Icons}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100090210035933" target='_blank'><FontAwesomeIcon icon={faFacebook} className= {styles.Icons}/></a>
                    </div>
                </div>
                <div className= {styles.right_box}>
                    <div className= {styles.Text}>
                        <h1>About Me</h1>
                        <p>Hello! I’m Lenny Dany Derek D, an enthusiastic and dedicated first-year Computer Science and Engineering student at SRM University with a strong passion for technology and innovation. My journey in the tech world began with an innate curiosity for problem-solving, which led me to develop a diverse skill set in Python, C++, JavaScript, and C. My ultimate goal is to become a proficient Full Stack Developer, building seamless and impactful applications that solve real-world problems.

                            I thrive on learning and applying new technologies, which is evident in the projects I’ve undertaken. From designing a Smart City and IoT project focused on traffic flow and routing to creating a Chennai Metro mapping application with advanced travel features, I’m committed to pushing boundaries and delivering creative solutions. I also enjoy working on personal projects, such as an expense tracker built with React and Flask, which features spending visualization and budget alerts.

                            Currently, I’m exploring advanced topics like machine learning, React.js, Next.js, and Flutter to expand my expertise and keep pace with the ever-evolving tech landscape. I’m particularly proud of my ongoing projects, including a ShareMe wallpaper-sharing platform and a responsive website dedicated to promoting student financial responsibility. These initiatives reflect my commitment to creating visually appealing, user-friendly designs with robust back-end functionality.

                            In addition to coding, I enjoy sharing knowledge and insights through my blog, where I explore topics like affiliate marketing and Google AdSense strategies. This not only fuels my passion for writing but also helps me connect with like-minded individuals in the tech community.

                            I believe in continuous learning, and I’m always looking for opportunities to enhance my skills and contribute to impactful projects. Whether it’s through exploring UI/UX design, mastering new frameworks like Flask, or diving into exciting fields like machine learning, I’m committed to growing as a developer and making a meaningful impact in the tech world.
                        </p>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Home 