import {useEffect} from "react";
import video from "../../videos/bg.mp4";
const Wait = () => {
    useEffect(()=>{
        document.getElementById("vid").muted = true;// 소리 끄기
        document.getElementById('vid').play();
    },[]);
    return(
        <div className="wait-bg">
            <video id="vid" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="text">
                <p>안녕</p>
            </div>
        </div>
    );

}
export default Wait;