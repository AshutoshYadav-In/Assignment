import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { incrementDecrement } from '../Redux/Pages';
import './Footer.css';

function Footer() {
const dispatch = useDispatch();
const handleInCDec = (type)=>{
dispatch(incrementDecrement(type))
}
const value = useSelector(state=>state.pages)
  return (
    <div className='Footer'>
        <button onClick={()=>handleInCDec("decrement")}>{"< Prev"}</button>
        <p>{value}</p>
        <button onClick={()=>handleInCDec("increment")}>{"Next >"}</button>
    </div>
  );
}

export default Footer;
