import React, { useState, useEffect } from 'react';
import axios from 'axios';
import process from 'process/browser';
import moment from 'moment';
import humidity from "../assets/humidity.svg"
import visibility from "../assets/visibility.svg"
import wind from "../assets/wind.svg"
// const apiKey = import.meta.env.VITE_MY_API_KEY;


const Weather = (props) => {
  const [location, setLocation] = useState('kolkata');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  // with props
  // const apiKey = props.apiKeyProps;

  useEffect(() => {

    axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`, {
      headers: {
        'X-RapidAPI-Key': "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    })
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setWeatherData(null);
    axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`, {
      headers: {
        'X-RapidAPI-Key': "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    })
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <>
      {/* search  */}
      <div className="flex justify-center items-center py-4">
        <div className="flex space-x-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text" value={props.location} onChange={(e) => setLocation(e.target.value)}
              className="block w-36 px-4 py-2 text-black bg-white border rounded-full focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
          </form>
          <button className="px-4 text-white bg-[#5E82F4] rounded-full hover:bg-purple-500 transform transition duration-500 hover:scale-110 hover:-translate-y-1 hover:rotate-2 hover:skew-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* for error */}
      {error ? (
        <div className="h-screen justify-center">
          <center className="mt-24 m-auto">
            <svg
              className="emoji-404 "
              enableBackground="new 0 0 226 249.135"
              height="249.135"
              id="Layer_1"
              overflow="visible"
              version="1.1"
              viewBox="0 0 226 249.135"
              width={226}
              xmlSpace="preserve"
            >
              <circle cx={113} cy={113} fill="#FFE585" r={109} />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.29"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={8}
                x1="88.866"
                x2="136.866"
                y1="245.135"
                y2="245.135"
              />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.17"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={8}
                x1="154.732"
                x2="168.732"
                y1="245.135"
                y2="245.135"
              />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.17"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={8}
                x1="69.732"
                x2="58.732"
                y1="245.135"
                y2="245.135"
              />
              <circle cx="68.732" cy={93} fill="#6E6E96" r={9} />
              <path
                d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
                enableBackground="new    "
                fill="#FF9900"
                opacity="0.24"
              />
              <circle cx="156.398" cy={93} fill="#6E6E96" r={9} />
              <ellipse
                cx="67.732"
                cy="140.894"
                enableBackground="new    "
                fill="#FF0000"
                opacity="0.18"
                rx="17.372"
                ry="8.106"
              />
              <ellipse
                cx="154.88"
                cy="140.894"
                enableBackground="new    "
                fill="#FF0000"
                opacity="0.18"
                rx="17.371"
                ry="8.106"
              />
              <path
                d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
                fill="#FFEFB5"
              />
              <circle
                cx={113}
                cy={113}
                fill="none"
                r={109}
                stroke="#6E6E96"
                strokeWidth={8}
              />
            </svg>
            <div className=" tracking-widest mt-4">
              <span className="text-gray-500 text-6xl block">
                <span>4 0 4</span>
              </span>
              <span className="text-gray-500 text-xl">
                Sorry, We couldn't find what you are looking for!
              </span>
            </div>
          </center>
        </div>
      ) : weatherData ? (
        // first div temprature location text
        <div className="flex justify-center items-center py-4 ">
          <div className="w-72 h-96 bg-[#DAE3FD]  px-4 py-5  rounded-lg transform transition duration-500 hover:scale-110 hover:-translate-y-1 hover:rotate-2 hover:skew-x-1">
            <div className='flex justify-between'>
              <div className="left">
                <p className='text-5xl text-gray-500'>{weatherData.current.temp_c}&deg;</p>
              </div>
              <div className="right">
                <p className='text-2xl text-gray-500 flex justify-end'>{weatherData.current.condition.text}</p>
                <p className='text-lg text-gray-500 flex justify-end'>{weatherData.location.name}</p>
              </div>
            </div>

            {/* icon */}
            <div className='flex justify-center items-center'>
              <img src={weatherData.current.condition.icon} alt="" />
            </div>

            {/* humidity */}
            <div className='flex  justify-center items-center'>
              <img className='w-10' src={humidity} alt="" />
              <span className='text-gray-500 text-lg '>Humidity:{weatherData.current.humidity}%</span>
            </div>

            {/* visibility */}
            <div className='flex  justify-center items-center -mt-3'>
              <img className='w-10' src={visibility} alt="" />
              <span className='text-gray-500 text-lg '>Visibility:{weatherData.current.vis_km} Km</span>
            </div>

            {/* wind */}
            <div className='flex  justify-center items-center -mt-3'>
              <img className='w-10' src={wind} alt="" />
              <span className='text-gray-500 text-lg '>Wind Speed:{weatherData.current.wind_kph} Km</span>
            </div>

            {/* time */}
            <div className="flex justify-between mt-28">
              <div className="date">
                <p className='text-gray-400'>{moment().format('LL')}</p>
              </div>
              <div className='flex justify-end items-end '>
                <p className='text-gray-400'>{moment().format('LTS')}</p>
              </div>
            </div>
          </div>
        </div>
      )
        : null}
    </>
  );
};

export default Weather;
