import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { teamname, addmembers } from '../Redux/Team';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css'
function Profile({user}) {
const dispatch = useDispatch();
const teamname = useSelector(state=> state.team.team);
const teamMembers = useSelector(state=> state.team.members)
const handleSubmit = async()=>{
    if(teamname.length === 0){
      toast.warn("Please make a team first");
      return
    }
    else{
      dispatch(addmembers(user));
    }
  }
  return (
    <div className='Profile'>
        <div className='PN'>
            <img src={user.avatar} alt="" />
            <p>{user.first_name} {user.last_name}</p>
        </div>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Domain: {user.domain}</p>
        <p>Available: {user.available ? "Yes" : "No"}</p>
        <button onClick={() => handleSubmit(user)}>
  {teamMembers.some(member => member._id === user._id) ? "Remove team member" : "Add team member"}
</button>
    </div>
  )
}

export default Profile