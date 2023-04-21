import React from 'react'
import Weather from './components/weather'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className='flex flex-col min-h-screen'>
    {/* <Search /> */}
     <Weather apiKeyProps="9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb" /> 
     <Footer name="pratyushsingha"/>
    </div>
  )
}

export default App
