import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styles from '../Login/login.module.css';
import ShareVideo from '../../assets/share.mp4';
import Logo from '../../assets/logowhite.png'

function Login(){

    const navigate = useNavigate();

    function decodeJWT(value){
        const base64payload = value.split('.')[1];
        const payload = atob(base64payload);
        return JSON.parse(payload);
    }

    function Success(responce){
        console.log(responce);
        const token = responce.credential;

        const userData = decodeJWT(token);
        console.log(`Decode Value : `,userData);

        localStorage.setItem('Google_Token',token);
        localStorage.setItem('userName',userData.name);
        localStorage.setItem('userEmail',userData.email);
        localStorage.setItem('userImage',userData.picture);

        navigate('/home');

    }
    function Error(responce){
        console.log('Login Failed');
    }
    return(
       <>
            <div className= {styles.Container}>
                <video src= {ShareVideo} autoPlay loop muted className= {styles.BackGroundVideo}></video>
                <div class= {styles.BackGroundOverlay}></div>
                <div className= {styles.MainFrame}>
                    <div className= {styles.LogoImg}>
                        <img src= {Logo} alt="Logo" width= '160px'/>
                    </div>
                    <div className= {styles.Google}>
                        <GoogleLogin className = {styles.Google_Tag} onSuccess={Success} onError={Error} width= '250px'/>
                    </div>
                </div>
            </div>
       </>
    );
}

export default Login

// <GoogleLogin className = {styles.Google_Tag} onSuccess={Success} onError={Error} width= '250px'/>

