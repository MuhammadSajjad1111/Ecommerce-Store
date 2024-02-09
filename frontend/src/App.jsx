import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <div className=''>
      <Header />
      <div className=' mx-36'>

        <Outlet />





      </div>

      <Footer />

    </div>
  )
}

export default App;