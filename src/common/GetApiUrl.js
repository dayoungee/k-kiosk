import {DUST_API_URL, WEATHER_API_URL} from "./defalt";


export const getApiUrl = () => {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4,"0");
    const month = String(('0' + (date.getMonth() + 1)).slice(-2));
    const day= String(('0' + date.getDate()).slice(-2));

    const today = year+month+day;

    const hours = String(date.getHours()).padStart(2,"0");

    const time = hours + "00";
    const ow_api_url =  "https://cors-anywhere.herokuapp.com/"+WEATHER_API_URL;
    let queryParams =  '?' + encodeURIComponent('serviceKey') + '='+ process.env.REACT_APP_WEATHER_API_KEY; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
    queryParams += '&' + encodeURIComponent('base_date') + '=' + today; /**/
    queryParams += '&' + encodeURIComponent('base_time') + '=' + time; /**/
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('59'); /**/
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('126'); /**/

    return ow_api_url+queryParams;
}

export const getDustApiUrl = () => {

    const ow_api_url =  "https://cors-anywhere.herokuapp.com/"+DUST_API_URL;

    let queryParams = '?' + encodeURIComponent('serviceKey') + '='+process.env.REACT_APP_DUST_API_KEY; /*Service Key*/
    queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('year') + '=' + encodeURIComponent('2022'); /**/
    queryParams += '&' + encodeURIComponent('itemCode') + '=' + encodeURIComponent('PM10'); /**/

    return ow_api_url + queryParams;
};


