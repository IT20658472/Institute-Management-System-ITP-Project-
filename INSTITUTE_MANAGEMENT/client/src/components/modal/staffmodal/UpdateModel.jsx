import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function UpdateModel(props) {
  const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  const [staffId,setStaffId] = useState("");
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

  const [file, setFile] = useState(null);
  
  const handleUpdate = async (e)=> {
    e.preventDefault();
   const staffData ={
     employment_type,
     name ,
     age ,
     gender,
     core_subject ,
     email,
     address ,
     basicSal,
     subCode,
     username,
     password,
     phone_number,
     position,
     profile_pic
    }

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      staffData.profile_pic = filename;
      try {
         axios.post("/upload", data);
      } catch (err) {}
    }
  
  

    
    // console.log(staffData);
    await axios.put('http://localhost:5000/api/staff/updatestff/'+props.staffId,staffData)
    .then(function (response) {
      // console.log(response);
      setName();
      setEmploymentType('');
      setAge('');
      setGender('');
      setCoreSubject('');
      setEmailaddress('');
      setAddress('');
      setBasicSal('');
      setSubCode('');
      setUserName('');
      setPassword('');
      setNumber('');
      setPosition('');
      setProfilepic('');
      setShow(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleClose = () => setShow(false);
  const updateShow = ()=>{
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


  return (
    <>
      <Button Button variant="primary" type="submit" onClick={updateShow}>
      Update staff member
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Update Staff Memeber</Modal.Title>
         </div> 
        </Modal.Header>
        <Modal.Body>


  <Form onSubmit={handleUpdate}>
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
  <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
          Update Staff Image
  </Form.Label>
  <Col sm="7">
    <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required/>
  </Col>
</Form.Group>


<br></br>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Employee Type  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Employee Type " value={employment_type} onChange={(e)=>{setEmploymentType(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Full Name  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Full Name " value={name} onChange={(e)=>{setName(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
    Age
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter your age" max="2022-04-26" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
   Gender
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter your gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
    Core Subject
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" placeholder="Enter your core subject" value={core_subject} onChange={(e)=>{setCoreSubject(e.target.value)}} disabled/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Email Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="Email" placeholder="Enter your  Email Address"   value={email} onChange={(e)=>{setEmailaddress(e.target.value)}} required />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
    Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter your Address"  value={address} onChange={(e)=>{setAddress(e.target.value)}} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
    Position
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter your Position" value={position} onChange={(e)=>{setNumber(e.target.value)}} disabled />
    </Col>
  </Form.Group>

  

</Form>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate} style={{height:"40px", width:"20%"}}>
            Update Staff
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
         
        </Modal.Footer>
      </Modal>
    </>
  );
}