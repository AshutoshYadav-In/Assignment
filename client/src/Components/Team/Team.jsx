import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleChange } from '../Redux/Appslices';
import { teamname } from '../Redux/Team';
import './Team.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../Baseurl';
import axios from 'axios'
function Team() {
  const [input, SetInput] = useState("");
  const dispatch = useDispatch()
  const toggleOptions = useSelector(state => state.toggle)
  const handleToggle = (type) => {
    dispatch(toggleChange(type))
  }
  const team = useSelector(state=> state.team);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(team.team.length !== 0){
      toast.warn("A team already exists");
      handleToggle("toggleformaketeam");
      SetInput("");
      return 
    }
    try{
      handleToggle("toggleloading");
      handleToggle("toggleformaketeam");
      toast.success("Team Created Successfully");
      dispatch(teamname(input));
      SetInput("");
    }catch(error){

    }finally{
      handleToggle("toggleloading");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={toggleOptions.toggleformaketeam ? "Team TT" : "Team"}>
      <div className='TC'>
        <p>Create team</p>
        <p onClick={() => handleToggle("toggleformaketeam")}>X</p>
      </div>
      <input type="text" value= {input} required onChange={(e) => SetInput(e.target.value)} placeholder='Team name' />
      <button type='submit'>Save</button>
    </form>
  )
}

export default Team