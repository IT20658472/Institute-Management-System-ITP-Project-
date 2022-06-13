import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ViewModel(props) {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleClose = () => setShow(false);


  // const [staffId,setStaffId] = useState("");
  const [employment_type , setEmploymentType] = useState("");
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [core_subject , setCoreSubject] = useState("");
  const [email , setEmailaddress] = useState("");
  const [address , setAddress] = useState("");
  const [basicSal , setBasicSal] = useState("");
  const [subCode , setSubCode] = useState("");
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [phone_number , setNumber] = useState("");
  const [position , setPosition] = useState("");
  const [profile_pic , setProfilepic] = useState("");
  const PF = "http://localhost:5000/profilepic/"

  //  const staffData ={
  //    employment_type,
  //    name ,
  //    age ,
  //    gender,
  //    core_subject ,
  //    email,
  //    address ,
  //    basicSal,
  //    subCode,
  //    username,
  //    password,
  //    phone_number,
  //    position,
  //    profile_pic
  //   }

    // console.log(props.staffId)
    // setStaffId(props.staffId)
    axios.get("http://localhost:5000/api/staff/"+props.staffID).then(function (response) {
      console.log(response);
    setEmploymentType(response.data['employment_type']);
    setName(response.data['name'])
    setAge(response.data['age'])
    setGender(response.data['gender'])
    setCoreSubject(response.data['core_subject'])
    setEmailaddress(response.data['email'])
    setAddress(response.data['address'])
    setPosition(response.data['position'])
    setProfilepic(response.data['profile_pic'])
 
  })

  return (
    <>

      
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">View Staff Memeber</Modal.Title>
         </div> 
        </Modal.Header>
        <Modal.Body>


  <Form>
  <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>

  <Form.Group as={Col} className="p-2 bd-highlight">
        <Col>
          <Form.Label as="legend" column sm={2} style={{width:"500px"}} >
          Staff Image
          </Form.Label>
        </Col>

        <Col sm={7}>
        <MDBCol lg='30' md='12' className='mb-4' style={{height:"100px", width:"100px"}}>
          <img src={PF+profile_pic} className='img-fluid rounded' alt=''  />
        </MDBCol>
        </Col>
      </Form.Group>
  </fieldset>
  </Col>
</div>


<br></br>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Employee Type  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Employee Type " value={employment_type} onChange={(e)=>{setEmploymentType(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Full Name  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Full Name " value={name} onChange={(e)=>{setName(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Age
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter your age" max="2022-04-26" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
   Gender
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter your gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Core Subject
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Disabled" value={core_subject} onChange={(e)=>{setCoreSubject(e.target.value)}}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Email Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="Email" placeholder="Enter your  Email Address"   value={email} onChange={(e)=>{setEmailaddress(e.target.value)}} required />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter your Address"  value={address} onChange={(e)=>{setAddress(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Position
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text"  placeholder="Disabled" value={position} onChange={(e)=>{setPosition(e.target.value)}} readOnly />
    </Col>
  </Form.Group>


</Form>
      </Modal.Body>
    </>
  );
}