import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from "axios";
import { useEffect } from 'react';

export default function CancelModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete=(tScheduleID,e)=>{
    e.preventDefault();
    console.log(tScheduleID)
     axios.delete(`http://localhost:5000/api/classes/deletecls/${tScheduleID}`).then(res=> 
      console.log("Deleted",res),
      alert("Class Deleted")
     ).catch(err=>
       console.log(err)
      )
  };
  return (
    <>
    <Button variant='danger' class="btn btn-danger" onClick={handleShow}  >
        Cancel
      </Button>
      
      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
           
        </Modal.Header>
        <Modal.Body>

        <div>
        <h1>Cancel a schedule</h1> <br/>
      <form>

      <div class="mb-3">
          <label for="day" class="form-label">Day of Week</label> 
            <input type="text" id="deleteDay" value={props.canDay} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="time" class="form-label">From</label>
          <input type="text" id="deletesTime" value={props.cansTime} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="time" class="form-label">To</label>
          <input type="text" id="deleteeTime" value={props.caneTime} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="grade" class="form-label">Grade</label>
            <input type="text" id="deleteGrade" value={props.canGrade} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="subject" class="form-label">Subject</label>
            <input type="text" id="deleteSubject" value={props.canSubject} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="teacherName" class="form-label">Teacher Name</label>
            <input type="text" id="deleteTeacher" value={props.canTeacher} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="hallNo" class="form-label">Hall No.</label>
            <input type="text" id="deletehallNo" value={props.canHallNo} class="form-control" readOnly/>
        </div>

        <div class="mb-3">
          <label for="webinarLink" class="form-label">Webinar Link</label>
            <input type="text" id="deletewLink" value={props.canwLink} class="form-control" readOnly/>
        </div>

      </form>
    </div>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={(e) => onDelete(props.tsid,e)}>
            Cancel schedule
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}