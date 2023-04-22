import React from 'react'
import Weather from './components/weather'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className='flex flex-col min-h-screen'>
    {/* <Search /> */}
     <Weather /> 
     <Footer name="pratyushsingha &#x2764;" github="https://github.com/pratyushsingha/"/>
    </div>
  )
}

export default App
