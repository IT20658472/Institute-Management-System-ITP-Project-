import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function DeleteModel(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [staffId , setStaffId] = useState("");
  const [employment_type , setEmploymentType] = useState("");
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [core_subject , setCoreSubject] = useState("");
  const [email , setEmailaddress] = useState("");
  const [address , setAddress] = useState("");
  const [phone_number , setNumber] = useState("");
  const [position , setPosition] = useState("");
  const [profile_pic , setProfilepic] = useState("");
  const PF = "http://localhost:5000/profilepic/"

  const staffData = {
    employment_type,
    name,
    age,
    gender,
    core_subject,
    email,
    address,
    position
  }

  const deleteShow = () => {
    console.log(props.staffId)
    setStaffId(props.staffId)
  axios.get("http://localhost:5000/api/staff/"+props.staffId).then(function (response) {
    
    setEmploymentType(response.data['employment_type']);
    setName(response.data['name'])
    setAge(response.data['age'])
    setGender(response.data['gender'])
    setCoreSubject(response.data['core_subject'])
    setEmailaddress(response.data['email'])
    setAddress(response.data['address'])
    setNumber(response.data['phone_number'])
    setPosition(response.data['position'])
    setProfilepic(response.data['profile_pic'])
    setShow(true)
 
    
  }).catch(function (error) {
        console.log(error);
        alert('invalid')
      });
  };

  function submitForm(e){
    e.preventDefault();
    // console.log(staffData);
    axios.delete(`http://localhost:5000/api/staff/deletestff/` + props.staffId)
    .then(function (response) {
      // console.log(response);
      alert('Staff Deleted')
      setShow(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // const handleDelete = async (e)=> {
  //   console.log(id)
  //  await axios.delete(`http://localhost:5000/api/staff/deletestff/${id}`,staff)
  //  .then(function (response) {
  //     alert("details deleted " );
  //     setShow(false );
  //   })
  // .catch(function (error) {
  //     console.log(error);
  //     alert(" details not deleted " );      
  //   })
  // }

  // const getData = async (e)=> {
  //   if(e.keyCode === 13){
  // await axios.get(`localhost:5000/api/staff/deletestff/${staffID}`)
  // .then(function (response) {
  //   if(response.data != null){
  //     setId(response.data['_id']);
  //     setEmploymentType(response.data['employment_type']);
  //     setName(response.data['name'])
  //     setAge(response.data['age'])
  //     setGender(response.data['gender'])
  //     setCoreSubject(response.data['core_subject'])
  //     setEmailaddress(response.data['email'])
  //     setAddress(response.data['address'])
  //     setNumber(response.data['phone_number'])
  //     setPosition(response.data['position'])

      
  //   }else{
  //     alert('Invalid ID')
  //   }
  //   })
  // .catch(function (error) {
  //     console.log(error);
  //     alert(" details not deleted " );      
  //   })
  // }
  // }

  return (
    <>
      <Button variant="primary" onClick={deleteShow}>
      Delete staff member
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Delete Staff Memeber</Modal.Title>
         </div> 
        </Modal.Header>
        <Modal.Body>

  <Form>

  <Col sm={10}>

  <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>
  <Form.Group as={Col} className="p-2 bd-highlight">
        
        <Col sm={7}>
        <MDBCol lg='30' md='12' className='mb-4' style={{height:"100px", width:"100px" }}>
          <img src={PF+profile_pic} className='img-fluid rounded' alt=''  />
        </MDBCol>
        </Col>
      </Form.Group>
    
  </fieldset>
  </Col>
</div>


<br></br>

    
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Employment Type
    </Form.Label>
    <Col sm="7">
      <Form.Control value={employment_type} type="text" disabled/>
    </Col>
  </Form.Group>


<br></br>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Full Name  
    </Form.Label>
    <Col sm="7">
      <Form.Control value={name}  type="text" disabled />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
   Age
    </Form.Label>
    <Col sm="5">
      <Form.Control value={age} type="text" disabled />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
    Gender
    </Form.Label>
    <Col sm="5">
      <Form.Control value={gender} type="text" disabled />
    </Col>
  </Form.Group>

  
  {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Core Subject
    </Form.Label>
    <Col sm="5">
      <Form.Control value={core_subject} type="text" disabled />
    </Col>
  </Form.Group> */}

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Email Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control value={email} type="text"   disabled />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control value={address} type="textarea" disabled  />
    </Col>
  </Form.Group>

  

  </Col>
</Form>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" style={{height:"40px", width:"20%"}} type="submit" onClick={submitForm}>
            Delete Staff
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
         
        </Modal.Footer>
      </Modal>
    </>
  );
}





















