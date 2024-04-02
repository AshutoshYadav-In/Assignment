import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import BarLoader from "react-spinners/BarLoader";
import Filter from './Components/Filter/Filter';
import { Provider, useSelector } from 'react-redux'
import store from '../src/Components/Redux/Store'
import Team from './Components/Team/Team';
import { ToastContainer } from 'react-toastify';
import Viewteam from './Components/Viewteam/Viewteam';
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

function AppContent() {

  const toggleOptions = useSelector(state => state.toggle);
  return (
    <div className='App'>
        <ToastContainer pauseOnFocusLoss={false} theme="dark" autoClose={2000}/>
        <BarLoader
            color="#2ea5a9"
            cssOverride={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '1000',
            }}
            loading={toggleOptions.toggleloading}
            margin={4}
            size={200}
            width={150}
            speedMultiplier={1}
          />
      <Team/>
      <Filter />
      <div className= {toggleOptions.toggleforfilter || toggleOptions.toggleformaketeam || toggleOptions.toggleloading ? "App-Opacity" : null}>
 
 <Router>
<Routes>
  <Route path='/' element= { <Home/>}/>
  <Route path='/Team' element= { <Viewteam/>}/>
</Routes>
 </Router>
      </div>
    </div>
  )
}

export default App
