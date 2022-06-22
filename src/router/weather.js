import {WEATHER_API_URL} from "../common/defalt";
import axios from "axios";

const ow_api_url = WEATHER_API_URL + "weather"

const payload = "?q=" +"seoul" + "&" + "appid=" + process.env.WEATHER_API_KEY +"#lang=kr";

const apiUrl = ow_api_url+payload;

axios.get(apiUrl).then(res=>{
    console.log("도시: " + res.data);
    console.log("날씨: " + res.data.weather[0].main);
})


