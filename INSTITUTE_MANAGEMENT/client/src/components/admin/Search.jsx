import React from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { useState } from 'react';
import ViewModel from "../modal/staffmodal/ViewModel";
import Button from 'react-bootstrap/Button';


const Search = (props) => {

  const [show, setShow] = useState(false);
  const [staffID, setStaffId] = useState(false);
  const handleClose = () => setShow(false);
  
  function searchId(e){
    if(e.keyCode==13){
      setShow(true);
    }
  }
  return (
     
    <div>
          <div class="row">
            <div class="col-sm-10"></div>
            <div class="col-sm-5"></div>
    <MDBCol md="4">
      
        
        <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setStaffId(e.target.value)}} onKeyDown={(e) => searchId(e) }/>

    </MDBCol>
    </div>
    <Modal show={show}        
        size="lg"
        centered
      >
        <ViewModel staffID={staffID}/>
        <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      
    </div>

  );
}

export default Search;