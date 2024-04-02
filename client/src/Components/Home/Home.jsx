import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';
import Toggleoptions from '../Toggleoptions/Toggleoptions';
import Profilecontainer from '../Profilecontainer/Profilecontainer';
function Home() {
  return (
    <div className='Home'>
       <Nav />
        <Toggleoptions option= {"users"} />
        <Profilecontainer type= {"users"}/>
        <Footer />

    </div>
  )
}

export default Home