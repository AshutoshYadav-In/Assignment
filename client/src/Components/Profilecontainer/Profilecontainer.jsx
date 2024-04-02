import React, { useEffect, useState } from 'react'
import Profile from '../Profile/Profile'
import axios from 'axios'
import './Profilecontainer.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChange } from '../Redux/Appslices';
import { BASE_URL } from '../../Baseurl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Profilecontainer({ type }) {
  const dispatch = useDispatch()
  const value = useSelector(state => state.pages)
  const teamMembers = useSelector(state => state.team.members);
  const filterOptions = useSelector(state => state.filter);
  const search = useSelector(state => state.search)
  const [users, SetUsers] = useState([])
  //handle fetch request
  function handleLoading() {
    dispatch(toggleChange("toggleloading"))
  }
  const handleRequest = async () => {
    let response = []
    if (type !== "team") {
      try {
        handleLoading();
        if (search.length === 0) {
          response = await axios.get(`${BASE_URL}/api/user/fetchAllUsers/${value}/${filterOptions.domain}/${filterOptions.gender}/${filterOptions.available}`);
        } else {
          response = await axios.get(`${BASE_URL}/api/query/searchByName/${search}/${value}`);
        }
        if (response.status === 200) {
          SetUsers(response.data)
        }
      } catch (error) {
        toast.error("Error fetching data")
      } finally {
        handleLoading();
      }
    }
  }
  useEffect(() => {
    if (type === "team") {
      SetUsers(teamMembers) // Use teamMembers here
    } else {
      handleRequest()
    }
  }, [value, filterOptions, type,search])

  useEffect(() => {
    if (type === "team") {
      SetUsers(teamMembers) // Use teamMembers here
    }
  }, [teamMembers]);


  return (
    <div className='PC'>
      {users.length > 0 ? (
        users.map((user, index) => (
          <Profile user={user} key={index} />
        ))
      ) : (
        <div className='NDA'>No data available</div>
      )}
    </div>
  )
}

export default Profilecontainer