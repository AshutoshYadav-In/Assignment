import React, { useState } from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChange } from '../Redux/Appslices';
import { filterOptions } from '../Redux/Filter';
function Filter() {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState({
        domain: "all",
        gender: "all",
        available: "both"
    });
    const handleToggle = (type) => {
        dispatch(toggleChange(type))
    }

    const handleSelectChange = (event) => {
        setSelected({
            ...selected,
            [event.target.name]: event.target.value
        });
    };
    const handleSave = () => {
        handleToggle("toggleforfilter")
        dispatch(filterOptions(selected))
    };
    const toggleOptions = useSelector(state => state.toggle);
    return (
        <div className={toggleOptions.toggleforfilter ? "Filter FT" : "Filter"}>
            <div className='FC'>
                <p>Select filters</p>
                <p onClick={() => handleToggle("toggleforfilter")}>X</p>
            </div>
            <p>Domain</p>
            <select name="domain" onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
                <option value="UI Designing">Ui Designing</option>
                <option value="Business Development">Buisness Development</option>
            </select>
            <p>Gender</p>
            <select name="gender" onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Polygender">Polygender</option>
                <option value="Genderqueer">Genderqueer</option>
            </select>
            <p>Available</p>
            <select name="available" onChange={handleSelectChange}>
                <option value="both">Both</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Filter;
