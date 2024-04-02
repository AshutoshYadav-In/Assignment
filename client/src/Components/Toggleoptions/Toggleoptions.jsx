import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {toggleChange} from '../Redux/Appslices';
import './Toggleoptions.css'
function Toggleoptions({option}) {
  const dispatch = useDispatch();
  const handleToggle= (type)=>{
    dispatch(toggleChange(type))
  }
  return (
    <div className='TO'>
     {option === "users" && (
        <>
          <button onClick={() => handleToggle("toggleforfilter")}>Apply filters</button>
          <button onClick={() => handleToggle("toggleformaketeam")}>Make team</button>
        </>
      )}{
        option === "team" &&  
        <Link to = {"/"}>
          <button> {"<-Back"}</button>
        </Link>
      }
    <Link to={"/team"}>
       <button onClick={()=> handleToggle("toggleforviewteam")}>View team</button>
    </Link>
       
      
    </div>
  )
}

export default Toggleoptions