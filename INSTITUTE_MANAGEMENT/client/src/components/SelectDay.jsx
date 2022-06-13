import React from 'react'
import "../style.css"
import axios from "axios";
import {useState} from "react";
import { useEffect } from 'react';
import UpdateModal from '../components/modal/timetablemodal/UpdateModal'
import CancelModal from '../components/modal/timetablemodal/CancelModal'

export default function SelectDay() {
  const [classes, setClasses] = useState([])
  
  function viewDay() {
    
      // if(classes.day == "Monday")  {
        

      // }
      // else {

      // } 
      
  }
  
  return (
    <>
    <div>
        <button type="button" className="btn btn-def1 me-4" onSubmit={viewDay}>Monday</button>
        <button type="button" className="btn btn-def1 me-4">Tuesday</button>
        <button type="button" className="btn btn-def1 me-4">Wednesday</button>
        <button type="button" className="btn btn-def1 me-4">Thursday</button>
        <button type="button" className="btn btn-def1 me-4">Friday</button> 
    </div> 
    </>
  )
}
