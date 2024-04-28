const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a8f0415e6cmsh27849f5bf42aca8p1cf73djsn871b75a23c8b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',options)
.then(response => response.json())
.then((response)=> {
    
    console.log(response)})
.catch(err => {
    console.log(err);
});