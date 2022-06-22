
import Background from "../background/Background";
import {useEffect, useState} from "react";
import axios from "axios";
import  {getApiUrl, getDustApiUrl} from "../../common/GetApiUrl";
import Wait from "./Wait";


const Main = () => {
    const [time, setTime] = useState("00:00");
    const [temperature, setTemperature] = useState("0");
    const [main, setMain] = useState("0");
    const [dust, setDust] = useState("좋음");


    const apiUrl = getApiUrl();
    const dustApiUrl = getDustApiUrl();


    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        setTime(`${hours}:${minutes}`);
    }

    const startTimeTimer = () => {
        setInterval(currentTimer,10000);
    }

    startTimeTimer();


    useEffect(()=>{
        currentTimer();
        //날씨
        axios.get(dustApiUrl).then((res) => {
            const data = res.data;
            const jsonArray = data.response.body.items.item;
            let temper = "dd";
            for(let i = 0; i < jsonArray.length; i++){
                const array = jsonArray[i]
                if(array.category == 'T1H'){
                    setTemperature(array.obsrValue);
                }
                else if(array.category === "SKY"){
                }
                console.log(array);
            }
        }).catch(error => {
            console.log(error.response)
        });

        // 미세먼지
        axios.get(dustApiUrl).then((res) => {
            const data = res.data;
            console.log(data);
        }).catch(error => {
            console.log(error.response)
        });

    },[])

    return(
        <div className="wait-bg">
            <Background />
            <div className="time-wrapper">
                <p className="time-text"> 현재 시간</p>
                <p className="time">{time}</p>
            </div>
            <div className="dust-wrapper">
                <p className="dust-text"> 미세먼지</p>
                <p className="dust">{dust}</p>
            </div>
            <div className="weather-wrapper">
                <p className="weather-text"> 오늘 날씨</p>
                <img className="weather-image" src="/d" >{}</img>
                <p className="weather">{temperature + "º"}</p>
            </div>
            <div className="text">
                <p>안녕</p>
            </div>
            <Wait/>
         </div>
    );

}
export default Main;