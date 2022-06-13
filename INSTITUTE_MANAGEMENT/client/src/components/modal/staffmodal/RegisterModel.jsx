import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';

export default function RegisterModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
 
  
  const [radio,setRadio] = useState('false')

  
  const [staffID , setstaffID] = useState("");
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
  

  const [file, setFile] = useState(null);
  
  async function handleSubmit(e){
    
    e.preventDefault();
   const staffData ={
     staffID,
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
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      staffData.profile_pic = filename;
      try {
         await axios.post("/upload", data);
      } catch (err) {}
    }

     // Validation 
    if({employment_type} !== 'Academic'){
            if(employment_type.length === 0 || name.length === 0 || age.length === 0 || gender.length === 0 ||core_subject.length === 0 || email.length === 0  || address.length === 0 || basicSal.length === 0 || subCode.length === 0 || username.length === 0 || password.length === 0){
              swal(" Fields Cannot empty !","Please enter all data !", "error");
            }  
          else{
            console.log(staffData);
            axios.post('http://localhost:5000/api/StaffAuth/register', staffData)
            .then(function (response) {
              console.log(response.data);
              setName('');
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
              setPosition('');
              setProfilepic('');
              alert ("Details Added");
            })
            .catch(function (error) {
              console.log(error);
              
            });
            
        
          swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
          .then((value) => {
            window.location = '/staffreport'+ staffID; 
         });
        }   
   }
   else if({employment_type} !== 'nonAcademic'){
      if(employment_type.length === 0 || name.length === 0 || age.length === 0 || gender.length === 0  || email.length === 0  || address.length === 0 || basicSal.length === 0  || username.length === 0 || password.length === 0 || position.length === 0  ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
      }else{
        console.log(staffData);
        axios.post('http://localhost:5000/api/StaffAuth/register', staffData)
        .then(function (response) {
          console.log(response.data);
          setName('');
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
          setPosition('');
          setProfilepic('');
          alert ("Details Added");
        })
        .catch(function (error) {
          console.log(error);
          
        });
        
    
      swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
      .then((value) => {
        window.location = '/staffreport'+ staffID; 
     });}
    }
     
    

}

  return (
    <>
    
      <Button className="btn-dashb me-5" variant="primary" onClick={handleShow}>
      Create staff member
      </Button>

      <Modal show={show}        
        size="lg"
        centered
        
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Register Staff Memeber</Modal.Title>
         </div> 
        </Modal.Header>
        {/* <Form onSubmit={submitForm}></Form> */}
        <Modal.Body>


  <Form onSubmit={handleSubmit}>
  <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>

    <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center" >
      
      <MDBCol  className='mb-4'>
      {file && (
        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" /> 
      )} 
      </MDBCol>
     
      
      {/* <label htmlFor="fileInput">
          <input variant="primary"  type="file" id="fileInput"  onChange={(e) => setFile(e.target.files[0])} placeholder="Added profile picture"></input>   
          </label> */}
      
    </Form.Group>
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>

  <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
          Select Staff Image
  </Form.Label>
  <Col sm="7">
    <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required/>
  </Col>
</Form.Group>
  
  <form onChange={(e)=>setEmploymentType(e.target.value)}>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label as="legend" column sm={3}>
      Employment Type
      </Form.Label >
      <Form.Check
        inline label="Academic"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        value = 'Academic'
        onChange={(e)=>{setRadio(e.target.value)}}
      />
      <Form.Check
        inline label="Non-Academic"
        name="group2"
        type={type}
        value = 'nonAcademic'
        id={`inline-${type}-2`}
        onChange={(e)=>{setRadio(e.target.value)}}
      />
    </div>
  ))}
  </form>



<br></br>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Full Name  
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Enter your Full Name " onChange={(e)=>setName(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3" >
    Age
    </Form.Label>
    <Col sm="5" >
      <Form.Control type="text" placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)} id="datePickerId" />
    </Col>
  </Form.Group>

    <form onChange={(e)=>setGender(e.target.value)}>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Label as="legend" column sm={3}>
      Gender
      </Form.Label>
      <Form.Check
        inline
        label="Male"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        value={"Male"}
      />
      <Form.Check
        inline
        label="Female"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        value={"Female"}
      />
    </div>
  ))}
  </form>

  
  <fieldset>
  <Form.Group as={Row} className="mb-3" >
    <Col sm={3}>
      <Form.Label>
      Core Subject
      </Form.Label>
    </Col>
    <Col sm={3}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}} disabled={radio === "nonAcademic"} onChange={(e)=>setCoreSubject(e.target.value)}>
      <option selected>Select core subject</option>
      <option value="English">English</option>
      <option value="Maths">Maths</option>
      <option value="ICT">ICT</option>
      <option value="Sinhala">Sinhala</option>
      <option value="History">History</option>
      <option value="English">English</option>
      <option value="Tamil">Tamil</option>
      <option value="Science">Science</option>
    </select >
    </Col>
    
    </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Phone Number 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="Email" placeholder="Enter your  Phone Number"  onChange={(e)=>setSubCode(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Email Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="Email" placeholder="Enter your  Email Address"  onChange={(e)=>setEmailaddress(e.target.value)} />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
    Address 
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)}  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3"  >
    Position 
    </Form.Label>
    <Col sm={3}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}} disabled={radio === "Academic"} onChange={(e)=>setPosition(e.target.value)}>
      <option selected>Select Position</option>
      <option value="Receptionist">Receptionist</option>
      <option value="Gardner">Gardner</option>
    </select>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
   Basic Salary
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="tel" placeholder="Enter your Salary" maxLength="10"  onChange={(e)=>setBasicSal(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    User Name
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="tel" placeholder="Enter your User Name" maxLength="10"  onChange={(e)=>setUserName(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Password
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="password" placeholder="Enter your Password" maxLength="10"  onChange={(e)=>setPassword(e.target.value)} />
    </Col>
  </Form.Group>
  </Col>
</Form>

      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit} style={{height:"40px", width:"20%"}}>
            Create Staff
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
        
        </Modal.Footer>
      </Modal>
    </>
  );
}