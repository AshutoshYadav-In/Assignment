import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';
import Toggleoptions from '../Toggleoptions/Toggleoptions';
import Profilecontainer from '../Profilecontainer/Profilecontainer';
function Viewteam() {
  return (
    <div className='Viewteam'>
        <Nav />
        <Toggleoptions option= {"team"}/>
        <Profilecontainer type= {"team"} />
    </div>
  )
}

export default Viewteam