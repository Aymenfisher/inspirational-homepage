import { useState, useEffect } from "react";



export const Weather = () => {
    const [weather, setWeather] = useState({})

    const fetchUserIp = async () => { // get User IP ADDRESS
        try {
            const response = await fetch('https://api64.ipify.org/?format=json');
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse['ip']
            } else {
                console.log('Getting IP address failed !')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const fetchCoordinates = async () => { // Get user coordinates from the ip address
        try {
            const ipAddress = await fetchUserIp();
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_M8XSS75lXdqwNXcLH3e4856bUhG8D&ipAddress=${ipAddress}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                return {
                    lat: jsonResponse.location.lat,
                    lon: jsonResponse.location.lng
                }

            }
            else {
                console.log('Error while getting coordinates')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getWeather = async () => {  // get the weather bases on the user's coordinates
        try {
            const coordinates = await fetchCoordinates()
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=79b5704ae058a8ddedf579a80d4e3d23&units=metric`)
            if(response.ok){
                const jsonResponse = await response.json();
                setWeather({
                    temperature: jsonResponse.main.temp,
                    description: jsonResponse['weather'][0]['description'],
                    icon: jsonResponse['weather'][0]['icon']
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getWeather()
    },[])

    const weatherContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '60px'

    }


    const weatherTextstyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    }



    return (
        <div className='weather-container' style={weatherContainerStyle}>
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt='weather-icon' id='weather-icon'></img>
            <div className="weather-text" style={weatherTextstyle}>
                <p id='temperature' style={{ fontSize: '1.5rem',fontWeight:'700', marginBottom: '0', letterSpacing: '1px' }}>{`${weather.temperature}°c`}</p>
                <p id='weather-description' style={{ textTransform: 'uppercase', fontSize: '16px' }}>{weather.description}</p>
            </div>

        </div>
    )
}