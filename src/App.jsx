import React from 'react'
import Weather from './components/Weather'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
     <Weather /> 
     <Footer name="pratyushsingha &#x2764;" github="https://github.com/pratyushsingha/"/>
    </div>
  )
}

export default App
