import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import SelectDay from '../../components/SelectDay'
import SelectGrade from '../../components/SelectGrade'
import UpdateModal from '../../components/modal/timetablemodal/UpdateModal'
import CancelModal from '../../components/modal/timetablemodal/CancelModal'
import "../../style.css"
import axios from "axios";
import {useState} from "react";
import { useEffect } from 'react';

export default function AdminViewTt() {

  const [classes, setClasses] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/classes/").then(res => {
        // if(res.data.day ==="Monday"){
          
        // }
        setClasses(res.data);
    })
        .catch(err => {
            console.log(err);
        })

  })

  return (
    <>
    <div>
      <Sidenav/>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">

          <SelectGrade />
        </div>

        <div className="col-sm-7">
          <SelectDay />
          <br/><br/>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Time</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Teacher</th>
                <th scope="col">Hall No.</th>
                <th scope="col">Webinar Links</th>
              </tr>
            </thead>
            <tbody> { classes.map(cs =>
              <tr key={cs.tScheduleID}>
                <th scope="row">{cs.day}</th>
                <td>{cs.sTime} {cs.eTime}</td>
                <td>{cs.grade}</td>
                <td>{cs.subject}</td>
                <td>{cs.teacher}</td>
                <td>{cs.hallNo}</td>
                <td>{cs.wLink}</td>
                <td><UpdateModal tsid={cs.tScheduleID} updDay={cs.day} updsTime = {cs.sTime} updeTime={cs.eTime} updGrade={cs.grade} updSubject={cs.subject} updTeacher={cs.teacher} updHallNo = {cs.hallNo} updwLink= {cs.wLink}/>&nbsp;&nbsp;<CancelModal tsid={cs.tScheduleID} canDay={cs.day} cansTime = {cs.sTime} caneTime={cs.eTime} canGrade={cs.grade} canSubject={cs.subject} canTeacher={cs.teacher} canHallNo = {cs.hallNo} canwLink= {cs.wLink}/></td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
