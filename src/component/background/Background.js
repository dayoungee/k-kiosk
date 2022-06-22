import video from "../../videos/bg.mp4";
import {useEffect} from "react";

const Background = () => {

    useEffect(()=>{
        document.getElementById("vid").muted = true;// 소리 끄기
        document.getElementById('vid').play();
    },[]);

    return(
        <video width={1080} height={1980} id="vid" autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default Background;